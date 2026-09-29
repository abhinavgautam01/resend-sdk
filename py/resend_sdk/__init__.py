# Resend SDK

from resend_sdk.utility.voxgig_struct import voxgig_struct as vs
from resend_sdk.core.utility_type import ResendUtility
from resend_sdk.core.spec import ResendSpec
from resend_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from resend_sdk.utility import register

# Load features
from resend_sdk.feature.base_feature import ResendBaseFeature
from resend_sdk.features import _has_feature, _make_feature


class ResendSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = ResendUtility()
        self._utility = utility

        from resend_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        # Extension feature INSTANCES come from the RAW construction
        # options - extend is consumed exactly once, here. make_options
        # strips the key before cloning (vs.clone flattens arbitrary
        # objects), so self.options never carries the instances.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        extend = options.get("extend") if isinstance(options, dict) else None
        if not isinstance(extend, list):
            extend = []
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        # An active name with no generated feature class is
                        # legal when an extend-supplied instance carries that
                        # name (station's adopt path): the instance is added
                        # below, positioned by its own __after__ entry, so
                        # skip it here rather than add a BaseFeature stray
                        # that would silently shift feature positions.
                        if not _has_feature(fname) and any(
                            fname == (f.get("name") if isinstance(f, dict)
                                      else getattr(f, "name", None))
                            for f in extend
                        ):
                            continue
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        for f in extend:
            if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return ResendUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = ResendSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "ResendSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("ResendSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AddContactToSegmentResponseSuccess(self, data=None) -> "AddContactToSegmentResponseSuccessEntity":
        """Entity factory: client.AddContactToSegmentResponseSuccess().list() / client.AddContactToSegmentResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.add_contact_to_segment_response_success_entity import AddContactToSegmentResponseSuccessEntity
        return AddContactToSegmentResponseSuccessEntity(self, data)


    def ApiKey(self, data=None) -> "ApiKeyEntity":
        """Entity factory: client.ApiKey().list() / client.ApiKey().load({"id": ...})."""
        from resend_sdk.entity.api_key_entity import ApiKeyEntity
        return ApiKeyEntity(self, data)


    def Audience(self, data=None) -> "AudienceEntity":
        """Entity factory: client.Audience().list() / client.Audience().load({"id": ...})."""
        from resend_sdk.entity.audience_entity import AudienceEntity
        return AudienceEntity(self, data)


    def Automation(self, data=None) -> "AutomationEntity":
        """Entity factory: client.Automation().list() / client.Automation().load({"id": ...})."""
        from resend_sdk.entity.automation_entity import AutomationEntity
        return AutomationEntity(self, data)


    def AutomationRun(self, data=None) -> "AutomationRunEntity":
        """Entity factory: client.AutomationRun().list() / client.AutomationRun().load({"id": ...})."""
        from resend_sdk.entity.automation_run_entity import AutomationRunEntity
        return AutomationRunEntity(self, data)


    def AutomationRunListItem(self, data=None) -> "AutomationRunListItemEntity":
        """Entity factory: client.AutomationRunListItem().list() / client.AutomationRunListItem().load({"id": ...})."""
        from resend_sdk.entity.automation_run_list_item_entity import AutomationRunListItemEntity
        return AutomationRunListItemEntity(self, data)


    def BatchAddSuppressionsResponseSuccess(self, data=None) -> "BatchAddSuppressionsResponseSuccessEntity":
        """Entity factory: client.BatchAddSuppressionsResponseSuccess().list() / client.BatchAddSuppressionsResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.batch_add_suppressions_response_success_entity import BatchAddSuppressionsResponseSuccessEntity
        return BatchAddSuppressionsResponseSuccessEntity(self, data)


    def BatchRemoveSuppressionsResponseSuccess(self, data=None) -> "BatchRemoveSuppressionsResponseSuccessEntity":
        """Entity factory: client.BatchRemoveSuppressionsResponseSuccess().list() / client.BatchRemoveSuppressionsResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.batch_remove_suppressions_response_success_entity import BatchRemoveSuppressionsResponseSuccessEntity
        return BatchRemoveSuppressionsResponseSuccessEntity(self, data)


    def Broadcast(self, data=None) -> "BroadcastEntity":
        """Entity factory: client.Broadcast().list() / client.Broadcast().load({"id": ...})."""
        from resend_sdk.entity.broadcast_entity import BroadcastEntity
        return BroadcastEntity(self, data)


    def Contact(self, data=None) -> "ContactEntity":
        """Entity factory: client.Contact().list() / client.Contact().load({"id": ...})."""
        from resend_sdk.entity.contact_entity import ContactEntity
        return ContactEntity(self, data)


    def ContactImport(self, data=None) -> "ContactImportEntity":
        """Entity factory: client.ContactImport().list() / client.ContactImport().load({"id": ...})."""
        from resend_sdk.entity.contact_import_entity import ContactImportEntity
        return ContactImportEntity(self, data)


    def ContactImportResponseSuccess(self, data=None) -> "ContactImportResponseSuccessEntity":
        """Entity factory: client.ContactImportResponseSuccess().list() / client.ContactImportResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.contact_import_response_success_entity import ContactImportResponseSuccessEntity
        return ContactImportResponseSuccessEntity(self, data)


    def ContactProperty(self, data=None) -> "ContactPropertyEntity":
        """Entity factory: client.ContactProperty().list() / client.ContactProperty().load({"id": ...})."""
        from resend_sdk.entity.contact_property_entity import ContactPropertyEntity
        return ContactPropertyEntity(self, data)


    def ContactTopicsResponseSuccess(self, data=None) -> "ContactTopicsResponseSuccessEntity":
        """Entity factory: client.ContactTopicsResponseSuccess().list() / client.ContactTopicsResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.contact_topics_response_success_entity import ContactTopicsResponseSuccessEntity
        return ContactTopicsResponseSuccessEntity(self, data)


    def CreateBatchEmail(self, data=None) -> "CreateBatchEmailEntity":
        """Entity factory: client.CreateBatchEmail().list() / client.CreateBatchEmail().load({"id": ...})."""
        from resend_sdk.entity.create_batch_email_entity import CreateBatchEmailEntity
        return CreateBatchEmailEntity(self, data)


    def CreateContactImportResponseSuccess(self, data=None) -> "CreateContactImportResponseSuccessEntity":
        """Entity factory: client.CreateContactImportResponseSuccess().list() / client.CreateContactImportResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.create_contact_import_response_success_entity import CreateContactImportResponseSuccessEntity
        return CreateContactImportResponseSuccessEntity(self, data)


    def Domain(self, data=None) -> "DomainEntity":
        """Entity factory: client.Domain().list() / client.Domain().load({"id": ...})."""
        from resend_sdk.entity.domain_entity import DomainEntity
        return DomainEntity(self, data)


    def DomainClaim(self, data=None) -> "DomainClaimEntity":
        """Entity factory: client.DomainClaim().list() / client.DomainClaim().load({"id": ...})."""
        from resend_sdk.entity.domain_claim_entity import DomainClaimEntity
        return DomainClaimEntity(self, data)


    def Email(self, data=None) -> "EmailEntity":
        """Entity factory: client.Email().list() / client.Email().load({"id": ...})."""
        from resend_sdk.entity.email_entity import EmailEntity
        return EmailEntity(self, data)


    def EmailsMetric(self, data=None) -> "EmailsMetricEntity":
        """Entity factory: client.EmailsMetric().list() / client.EmailsMetric().load({"id": ...})."""
        from resend_sdk.entity.emails_metric_entity import EmailsMetricEntity
        return EmailsMetricEntity(self, data)


    def Event(self, data=None) -> "EventEntity":
        """Entity factory: client.Event().list() / client.Event().load({"id": ...})."""
        from resend_sdk.entity.event_entity import EventEntity
        return EventEntity(self, data)


    def ListAttachment(self, data=None) -> "ListAttachmentEntity":
        """Entity factory: client.ListAttachment().list() / client.ListAttachment().load({"id": ...})."""
        from resend_sdk.entity.list_attachment_entity import ListAttachmentEntity
        return ListAttachmentEntity(self, data)


    def ListBroadcastClickedLinksResponseSuccess(self, data=None) -> "ListBroadcastClickedLinksResponseSuccessEntity":
        """Entity factory: client.ListBroadcastClickedLinksResponseSuccess().list() / client.ListBroadcastClickedLinksResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.list_broadcast_clicked_links_response_success_entity import ListBroadcastClickedLinksResponseSuccessEntity
        return ListBroadcastClickedLinksResponseSuccessEntity(self, data)


    def ListBroadcastRecipientsResponseSuccess(self, data=None) -> "ListBroadcastRecipientsResponseSuccessEntity":
        """Entity factory: client.ListBroadcastRecipientsResponseSuccess().list() / client.ListBroadcastRecipientsResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.list_broadcast_recipients_response_success_entity import ListBroadcastRecipientsResponseSuccessEntity
        return ListBroadcastRecipientsResponseSuccessEntity(self, data)


    def ListContactSegmentsResponseSuccess(self, data=None) -> "ListContactSegmentsResponseSuccessEntity":
        """Entity factory: client.ListContactSegmentsResponseSuccess().list() / client.ListContactSegmentsResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.list_contact_segments_response_success_entity import ListContactSegmentsResponseSuccessEntity
        return ListContactSegmentsResponseSuccessEntity(self, data)


    def ListContactsResponseSuccess(self, data=None) -> "ListContactsResponseSuccessEntity":
        """Entity factory: client.ListContactsResponseSuccess().list() / client.ListContactsResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.list_contacts_response_success_entity import ListContactsResponseSuccessEntity
        return ListContactsResponseSuccessEntity(self, data)


    def ListReceivedEmail(self, data=None) -> "ListReceivedEmailEntity":
        """Entity factory: client.ListReceivedEmail().list() / client.ListReceivedEmail().load({"id": ...})."""
        from resend_sdk.entity.list_received_email_entity import ListReceivedEmailEntity
        return ListReceivedEmailEntity(self, data)


    def ListWebhookEvent(self, data=None) -> "ListWebhookEventEntity":
        """Entity factory: client.ListWebhookEvent().list() / client.ListWebhookEvent().load({"id": ...})."""
        from resend_sdk.entity.list_webhook_event_entity import ListWebhookEventEntity
        return ListWebhookEventEntity(self, data)


    def ListWebhookEventAttempt(self, data=None) -> "ListWebhookEventAttemptEntity":
        """Entity factory: client.ListWebhookEventAttempt().list() / client.ListWebhookEventAttempt().load({"id": ...})."""
        from resend_sdk.entity.list_webhook_event_attempt_entity import ListWebhookEventAttemptEntity
        return ListWebhookEventAttemptEntity(self, data)


    def Log(self, data=None) -> "LogEntity":
        """Entity factory: client.Log().list() / client.Log().load({"id": ...})."""
        from resend_sdk.entity.log_entity import LogEntity
        return LogEntity(self, data)


    def OAuthGrant(self, data=None) -> "OAuthGrantEntity":
        """Entity factory: client.OAuthGrant().list() / client.OAuthGrant().load({"id": ...})."""
        from resend_sdk.entity.o_auth_grant_entity import OAuthGrantEntity
        return OAuthGrantEntity(self, data)


    def ReceivedEmail(self, data=None) -> "ReceivedEmailEntity":
        """Entity factory: client.ReceivedEmail().list() / client.ReceivedEmail().load({"id": ...})."""
        from resend_sdk.entity.received_email_entity import ReceivedEmailEntity
        return ReceivedEmailEntity(self, data)


    def RemoveAudienceResponseSuccess(self, data=None) -> "RemoveAudienceResponseSuccessEntity":
        """Entity factory: client.RemoveAudienceResponseSuccess().list() / client.RemoveAudienceResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.remove_audience_response_success_entity import RemoveAudienceResponseSuccessEntity
        return RemoveAudienceResponseSuccessEntity(self, data)


    def RemoveBroadcastResponseSuccess(self, data=None) -> "RemoveBroadcastResponseSuccessEntity":
        """Entity factory: client.RemoveBroadcastResponseSuccess().list() / client.RemoveBroadcastResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.remove_broadcast_response_success_entity import RemoveBroadcastResponseSuccessEntity
        return RemoveBroadcastResponseSuccessEntity(self, data)


    def RemoveContactFromSegmentResponseSuccess(self, data=None) -> "RemoveContactFromSegmentResponseSuccessEntity":
        """Entity factory: client.RemoveContactFromSegmentResponseSuccess().list() / client.RemoveContactFromSegmentResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.remove_contact_from_segment_response_success_entity import RemoveContactFromSegmentResponseSuccessEntity
        return RemoveContactFromSegmentResponseSuccessEntity(self, data)


    def RemoveContactPropertyResponseSuccess(self, data=None) -> "RemoveContactPropertyResponseSuccessEntity":
        """Entity factory: client.RemoveContactPropertyResponseSuccess().list() / client.RemoveContactPropertyResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.remove_contact_property_response_success_entity import RemoveContactPropertyResponseSuccessEntity
        return RemoveContactPropertyResponseSuccessEntity(self, data)


    def RemoveContactResponseSuccess(self, data=None) -> "RemoveContactResponseSuccessEntity":
        """Entity factory: client.RemoveContactResponseSuccess().list() / client.RemoveContactResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.remove_contact_response_success_entity import RemoveContactResponseSuccessEntity
        return RemoveContactResponseSuccessEntity(self, data)


    def RemoveEvent(self, data=None) -> "RemoveEventEntity":
        """Entity factory: client.RemoveEvent().list() / client.RemoveEvent().load({"id": ...})."""
        from resend_sdk.entity.remove_event_entity import RemoveEventEntity
        return RemoveEventEntity(self, data)


    def RemoveSegmentResponseSuccess(self, data=None) -> "RemoveSegmentResponseSuccessEntity":
        """Entity factory: client.RemoveSegmentResponseSuccess().list() / client.RemoveSegmentResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.remove_segment_response_success_entity import RemoveSegmentResponseSuccessEntity
        return RemoveSegmentResponseSuccessEntity(self, data)


    def RemoveSuppressionResponseSuccess(self, data=None) -> "RemoveSuppressionResponseSuccessEntity":
        """Entity factory: client.RemoveSuppressionResponseSuccess().list() / client.RemoveSuppressionResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.remove_suppression_response_success_entity import RemoveSuppressionResponseSuccessEntity
        return RemoveSuppressionResponseSuccessEntity(self, data)


    def RemoveTemplateResponseSuccess(self, data=None) -> "RemoveTemplateResponseSuccessEntity":
        """Entity factory: client.RemoveTemplateResponseSuccess().list() / client.RemoveTemplateResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.remove_template_response_success_entity import RemoveTemplateResponseSuccessEntity
        return RemoveTemplateResponseSuccessEntity(self, data)


    def RemoveTopicResponseSuccess(self, data=None) -> "RemoveTopicResponseSuccessEntity":
        """Entity factory: client.RemoveTopicResponseSuccess().list() / client.RemoveTopicResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.remove_topic_response_success_entity import RemoveTopicResponseSuccessEntity
        return RemoveTopicResponseSuccessEntity(self, data)


    def RetrievedAttachment(self, data=None) -> "RetrievedAttachmentEntity":
        """Entity factory: client.RetrievedAttachment().list() / client.RetrievedAttachment().load({"id": ...})."""
        from resend_sdk.entity.retrieved_attachment_entity import RetrievedAttachmentEntity
        return RetrievedAttachmentEntity(self, data)


    def RevokeOAuthGrant(self, data=None) -> "RevokeOAuthGrantEntity":
        """Entity factory: client.RevokeOAuthGrant().list() / client.RevokeOAuthGrant().load({"id": ...})."""
        from resend_sdk.entity.revoke_o_auth_grant_entity import RevokeOAuthGrantEntity
        return RevokeOAuthGrantEntity(self, data)


    def Rotate(self, data=None) -> "RotateEntity":
        """Entity factory: client.Rotate().list() / client.Rotate().load({"id": ...})."""
        from resend_sdk.entity.rotate_entity import RotateEntity
        return RotateEntity(self, data)


    def Segment(self, data=None) -> "SegmentEntity":
        """Entity factory: client.Segment().list() / client.Segment().load({"id": ...})."""
        from resend_sdk.entity.segment_entity import SegmentEntity
        return SegmentEntity(self, data)


    def Suppression(self, data=None) -> "SuppressionEntity":
        """Entity factory: client.Suppression().list() / client.Suppression().load({"id": ...})."""
        from resend_sdk.entity.suppression_entity import SuppressionEntity
        return SuppressionEntity(self, data)


    def Template(self, data=None) -> "TemplateEntity":
        """Entity factory: client.Template().list() / client.Template().load({"id": ...})."""
        from resend_sdk.entity.template_entity import TemplateEntity
        return TemplateEntity(self, data)


    def Topic(self, data=None) -> "TopicEntity":
        """Entity factory: client.Topic().list() / client.Topic().load({"id": ...})."""
        from resend_sdk.entity.topic_entity import TopicEntity
        return TopicEntity(self, data)


    def UpdateApiKey(self, data=None) -> "UpdateApiKeyEntity":
        """Entity factory: client.UpdateApiKey().list() / client.UpdateApiKey().load({"id": ...})."""
        from resend_sdk.entity.update_api_key_entity import UpdateApiKeyEntity
        return UpdateApiKeyEntity(self, data)


    def UpdateBroadcastResponseSuccess(self, data=None) -> "UpdateBroadcastResponseSuccessEntity":
        """Entity factory: client.UpdateBroadcastResponseSuccess().list() / client.UpdateBroadcastResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.update_broadcast_response_success_entity import UpdateBroadcastResponseSuccessEntity
        return UpdateBroadcastResponseSuccessEntity(self, data)


    def UpdateContactPropertyResponseSuccess(self, data=None) -> "UpdateContactPropertyResponseSuccessEntity":
        """Entity factory: client.UpdateContactPropertyResponseSuccess().list() / client.UpdateContactPropertyResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.update_contact_property_response_success_entity import UpdateContactPropertyResponseSuccessEntity
        return UpdateContactPropertyResponseSuccessEntity(self, data)


    def UpdateContactResponseSuccess(self, data=None) -> "UpdateContactResponseSuccessEntity":
        """Entity factory: client.UpdateContactResponseSuccess().list() / client.UpdateContactResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.update_contact_response_success_entity import UpdateContactResponseSuccessEntity
        return UpdateContactResponseSuccessEntity(self, data)


    def UpdateContactTopicsResponseSuccess(self, data=None) -> "UpdateContactTopicsResponseSuccessEntity":
        """Entity factory: client.UpdateContactTopicsResponseSuccess().list() / client.UpdateContactTopicsResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.update_contact_topics_response_success_entity import UpdateContactTopicsResponseSuccessEntity
        return UpdateContactTopicsResponseSuccessEntity(self, data)


    def UpdateDomainResponseSuccess(self, data=None) -> "UpdateDomainResponseSuccessEntity":
        """Entity factory: client.UpdateDomainResponseSuccess().list() / client.UpdateDomainResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.update_domain_response_success_entity import UpdateDomainResponseSuccessEntity
        return UpdateDomainResponseSuccessEntity(self, data)


    def UpdateEmailOption(self, data=None) -> "UpdateEmailOptionEntity":
        """Entity factory: client.UpdateEmailOption().list() / client.UpdateEmailOption().load({"id": ...})."""
        from resend_sdk.entity.update_email_option_entity import UpdateEmailOptionEntity
        return UpdateEmailOptionEntity(self, data)


    def UpdateEvent(self, data=None) -> "UpdateEventEntity":
        """Entity factory: client.UpdateEvent().list() / client.UpdateEvent().load({"id": ...})."""
        from resend_sdk.entity.update_event_entity import UpdateEventEntity
        return UpdateEventEntity(self, data)


    def UpdateSegmentResponseSuccess(self, data=None) -> "UpdateSegmentResponseSuccessEntity":
        """Entity factory: client.UpdateSegmentResponseSuccess().list() / client.UpdateSegmentResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.update_segment_response_success_entity import UpdateSegmentResponseSuccessEntity
        return UpdateSegmentResponseSuccessEntity(self, data)


    def UpdateTemplateResponseSuccess(self, data=None) -> "UpdateTemplateResponseSuccessEntity":
        """Entity factory: client.UpdateTemplateResponseSuccess().list() / client.UpdateTemplateResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.update_template_response_success_entity import UpdateTemplateResponseSuccessEntity
        return UpdateTemplateResponseSuccessEntity(self, data)


    def UpdateTopicResponseSuccess(self, data=None) -> "UpdateTopicResponseSuccessEntity":
        """Entity factory: client.UpdateTopicResponseSuccess().list() / client.UpdateTopicResponseSuccess().load({"id": ...})."""
        from resend_sdk.entity.update_topic_response_success_entity import UpdateTopicResponseSuccessEntity
        return UpdateTopicResponseSuccessEntity(self, data)


    def UpdateWebhook(self, data=None) -> "UpdateWebhookEntity":
        """Entity factory: client.UpdateWebhook().list() / client.UpdateWebhook().load({"id": ...})."""
        from resend_sdk.entity.update_webhook_entity import UpdateWebhookEntity
        return UpdateWebhookEntity(self, data)


    def Usage(self, data=None) -> "UsageEntity":
        """Entity factory: client.Usage().list() / client.Usage().load({"id": ...})."""
        from resend_sdk.entity.usage_entity import UsageEntity
        return UsageEntity(self, data)


    def Webhook(self, data=None) -> "WebhookEntity":
        """Entity factory: client.Webhook().list() / client.Webhook().load({"id": ...})."""
        from resend_sdk.entity.webhook_entity import WebhookEntity
        return WebhookEntity(self, data)


    def WebhookEvent(self, data=None) -> "WebhookEventEntity":
        """Entity factory: client.WebhookEvent().list() / client.WebhookEvent().load({"id": ...})."""
        from resend_sdk.entity.webhook_event_entity import WebhookEventEntity
        return WebhookEventEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "ResendSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from resend_sdk.entity.add_contact_to_segment_response_success_entity import AddContactToSegmentResponseSuccessEntity
    from resend_sdk.entity.api_key_entity import ApiKeyEntity
    from resend_sdk.entity.audience_entity import AudienceEntity
    from resend_sdk.entity.automation_entity import AutomationEntity
    from resend_sdk.entity.automation_run_entity import AutomationRunEntity
    from resend_sdk.entity.automation_run_list_item_entity import AutomationRunListItemEntity
    from resend_sdk.entity.batch_add_suppressions_response_success_entity import BatchAddSuppressionsResponseSuccessEntity
    from resend_sdk.entity.batch_remove_suppressions_response_success_entity import BatchRemoveSuppressionsResponseSuccessEntity
    from resend_sdk.entity.broadcast_entity import BroadcastEntity
    from resend_sdk.entity.contact_entity import ContactEntity
    from resend_sdk.entity.contact_import_entity import ContactImportEntity
    from resend_sdk.entity.contact_import_response_success_entity import ContactImportResponseSuccessEntity
    from resend_sdk.entity.contact_property_entity import ContactPropertyEntity
    from resend_sdk.entity.contact_topics_response_success_entity import ContactTopicsResponseSuccessEntity
    from resend_sdk.entity.create_batch_email_entity import CreateBatchEmailEntity
    from resend_sdk.entity.create_contact_import_response_success_entity import CreateContactImportResponseSuccessEntity
    from resend_sdk.entity.domain_entity import DomainEntity
    from resend_sdk.entity.domain_claim_entity import DomainClaimEntity
    from resend_sdk.entity.email_entity import EmailEntity
    from resend_sdk.entity.emails_metric_entity import EmailsMetricEntity
    from resend_sdk.entity.event_entity import EventEntity
    from resend_sdk.entity.list_attachment_entity import ListAttachmentEntity
    from resend_sdk.entity.list_broadcast_clicked_links_response_success_entity import ListBroadcastClickedLinksResponseSuccessEntity
    from resend_sdk.entity.list_broadcast_recipients_response_success_entity import ListBroadcastRecipientsResponseSuccessEntity
    from resend_sdk.entity.list_contact_segments_response_success_entity import ListContactSegmentsResponseSuccessEntity
    from resend_sdk.entity.list_contacts_response_success_entity import ListContactsResponseSuccessEntity
    from resend_sdk.entity.list_received_email_entity import ListReceivedEmailEntity
    from resend_sdk.entity.list_webhook_event_entity import ListWebhookEventEntity
    from resend_sdk.entity.list_webhook_event_attempt_entity import ListWebhookEventAttemptEntity
    from resend_sdk.entity.log_entity import LogEntity
    from resend_sdk.entity.o_auth_grant_entity import OAuthGrantEntity
    from resend_sdk.entity.received_email_entity import ReceivedEmailEntity
    from resend_sdk.entity.remove_audience_response_success_entity import RemoveAudienceResponseSuccessEntity
    from resend_sdk.entity.remove_broadcast_response_success_entity import RemoveBroadcastResponseSuccessEntity
    from resend_sdk.entity.remove_contact_from_segment_response_success_entity import RemoveContactFromSegmentResponseSuccessEntity
    from resend_sdk.entity.remove_contact_property_response_success_entity import RemoveContactPropertyResponseSuccessEntity
    from resend_sdk.entity.remove_contact_response_success_entity import RemoveContactResponseSuccessEntity
    from resend_sdk.entity.remove_event_entity import RemoveEventEntity
    from resend_sdk.entity.remove_segment_response_success_entity import RemoveSegmentResponseSuccessEntity
    from resend_sdk.entity.remove_suppression_response_success_entity import RemoveSuppressionResponseSuccessEntity
    from resend_sdk.entity.remove_template_response_success_entity import RemoveTemplateResponseSuccessEntity
    from resend_sdk.entity.remove_topic_response_success_entity import RemoveTopicResponseSuccessEntity
    from resend_sdk.entity.retrieved_attachment_entity import RetrievedAttachmentEntity
    from resend_sdk.entity.revoke_o_auth_grant_entity import RevokeOAuthGrantEntity
    from resend_sdk.entity.rotate_entity import RotateEntity
    from resend_sdk.entity.segment_entity import SegmentEntity
    from resend_sdk.entity.suppression_entity import SuppressionEntity
    from resend_sdk.entity.template_entity import TemplateEntity
    from resend_sdk.entity.topic_entity import TopicEntity
    from resend_sdk.entity.update_api_key_entity import UpdateApiKeyEntity
    from resend_sdk.entity.update_broadcast_response_success_entity import UpdateBroadcastResponseSuccessEntity
    from resend_sdk.entity.update_contact_property_response_success_entity import UpdateContactPropertyResponseSuccessEntity
    from resend_sdk.entity.update_contact_response_success_entity import UpdateContactResponseSuccessEntity
    from resend_sdk.entity.update_contact_topics_response_success_entity import UpdateContactTopicsResponseSuccessEntity
    from resend_sdk.entity.update_domain_response_success_entity import UpdateDomainResponseSuccessEntity
    from resend_sdk.entity.update_email_option_entity import UpdateEmailOptionEntity
    from resend_sdk.entity.update_event_entity import UpdateEventEntity
    from resend_sdk.entity.update_segment_response_success_entity import UpdateSegmentResponseSuccessEntity
    from resend_sdk.entity.update_template_response_success_entity import UpdateTemplateResponseSuccessEntity
    from resend_sdk.entity.update_topic_response_success_entity import UpdateTopicResponseSuccessEntity
    from resend_sdk.entity.update_webhook_entity import UpdateWebhookEntity
    from resend_sdk.entity.usage_entity import UsageEntity
    from resend_sdk.entity.webhook_entity import WebhookEntity
    from resend_sdk.entity.webhook_event_entity import WebhookEventEntity
