"use strict";
// Resend Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.ResendSDK = exports.ResendEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AddContactToSegmentResponseSuccessEntity_1 = require("./entity/AddContactToSegmentResponseSuccessEntity");
const ApiKeyEntity_1 = require("./entity/ApiKeyEntity");
const AudienceEntity_1 = require("./entity/AudienceEntity");
const AutomationEntity_1 = require("./entity/AutomationEntity");
const AutomationRunEntity_1 = require("./entity/AutomationRunEntity");
const AutomationRunListItemEntity_1 = require("./entity/AutomationRunListItemEntity");
const BatchAddSuppressionsResponseSuccessEntity_1 = require("./entity/BatchAddSuppressionsResponseSuccessEntity");
const BatchRemoveSuppressionsResponseSuccessEntity_1 = require("./entity/BatchRemoveSuppressionsResponseSuccessEntity");
const BroadcastEntity_1 = require("./entity/BroadcastEntity");
const ContactEntity_1 = require("./entity/ContactEntity");
const ContactImportEntity_1 = require("./entity/ContactImportEntity");
const ContactImportResponseSuccessEntity_1 = require("./entity/ContactImportResponseSuccessEntity");
const ContactPropertyEntity_1 = require("./entity/ContactPropertyEntity");
const ContactTopicsResponseSuccessEntity_1 = require("./entity/ContactTopicsResponseSuccessEntity");
const CreateBatchEmailEntity_1 = require("./entity/CreateBatchEmailEntity");
const CreateContactImportResponseSuccessEntity_1 = require("./entity/CreateContactImportResponseSuccessEntity");
const DomainEntity_1 = require("./entity/DomainEntity");
const DomainClaimEntity_1 = require("./entity/DomainClaimEntity");
const EmailEntity_1 = require("./entity/EmailEntity");
const EmailsMetricEntity_1 = require("./entity/EmailsMetricEntity");
const EventEntity_1 = require("./entity/EventEntity");
const ListAttachmentEntity_1 = require("./entity/ListAttachmentEntity");
const ListBroadcastClickedLinksResponseSuccessEntity_1 = require("./entity/ListBroadcastClickedLinksResponseSuccessEntity");
const ListBroadcastRecipientsResponseSuccessEntity_1 = require("./entity/ListBroadcastRecipientsResponseSuccessEntity");
const ListContactSegmentsResponseSuccessEntity_1 = require("./entity/ListContactSegmentsResponseSuccessEntity");
const ListContactsResponseSuccessEntity_1 = require("./entity/ListContactsResponseSuccessEntity");
const ListReceivedEmailEntity_1 = require("./entity/ListReceivedEmailEntity");
const ListWebhookEventEntity_1 = require("./entity/ListWebhookEventEntity");
const ListWebhookEventAttemptEntity_1 = require("./entity/ListWebhookEventAttemptEntity");
const LogEntity_1 = require("./entity/LogEntity");
const OAuthGrantEntity_1 = require("./entity/OAuthGrantEntity");
const ReceivedEmailEntity_1 = require("./entity/ReceivedEmailEntity");
const RemoveAudienceResponseSuccessEntity_1 = require("./entity/RemoveAudienceResponseSuccessEntity");
const RemoveBroadcastResponseSuccessEntity_1 = require("./entity/RemoveBroadcastResponseSuccessEntity");
const RemoveContactFromSegmentResponseSuccessEntity_1 = require("./entity/RemoveContactFromSegmentResponseSuccessEntity");
const RemoveContactPropertyResponseSuccessEntity_1 = require("./entity/RemoveContactPropertyResponseSuccessEntity");
const RemoveContactResponseSuccessEntity_1 = require("./entity/RemoveContactResponseSuccessEntity");
const RemoveEventEntity_1 = require("./entity/RemoveEventEntity");
const RemoveSegmentResponseSuccessEntity_1 = require("./entity/RemoveSegmentResponseSuccessEntity");
const RemoveSuppressionResponseSuccessEntity_1 = require("./entity/RemoveSuppressionResponseSuccessEntity");
const RemoveTemplateResponseSuccessEntity_1 = require("./entity/RemoveTemplateResponseSuccessEntity");
const RemoveTopicResponseSuccessEntity_1 = require("./entity/RemoveTopicResponseSuccessEntity");
const RetrievedAttachmentEntity_1 = require("./entity/RetrievedAttachmentEntity");
const RevokeOAuthGrantEntity_1 = require("./entity/RevokeOAuthGrantEntity");
const RotateEntity_1 = require("./entity/RotateEntity");
const SegmentEntity_1 = require("./entity/SegmentEntity");
const SuppressionEntity_1 = require("./entity/SuppressionEntity");
const TemplateEntity_1 = require("./entity/TemplateEntity");
const TopicEntity_1 = require("./entity/TopicEntity");
const UpdateApiKeyEntity_1 = require("./entity/UpdateApiKeyEntity");
const UpdateBroadcastResponseSuccessEntity_1 = require("./entity/UpdateBroadcastResponseSuccessEntity");
const UpdateContactPropertyResponseSuccessEntity_1 = require("./entity/UpdateContactPropertyResponseSuccessEntity");
const UpdateContactResponseSuccessEntity_1 = require("./entity/UpdateContactResponseSuccessEntity");
const UpdateContactTopicsResponseSuccessEntity_1 = require("./entity/UpdateContactTopicsResponseSuccessEntity");
const UpdateDomainResponseSuccessEntity_1 = require("./entity/UpdateDomainResponseSuccessEntity");
const UpdateEmailOptionEntity_1 = require("./entity/UpdateEmailOptionEntity");
const UpdateEventEntity_1 = require("./entity/UpdateEventEntity");
const UpdateSegmentResponseSuccessEntity_1 = require("./entity/UpdateSegmentResponseSuccessEntity");
const UpdateTemplateResponseSuccessEntity_1 = require("./entity/UpdateTemplateResponseSuccessEntity");
const UpdateTopicResponseSuccessEntity_1 = require("./entity/UpdateTopicResponseSuccessEntity");
const UpdateWebhookEntity_1 = require("./entity/UpdateWebhookEntity");
const UsageEntity_1 = require("./entity/UsageEntity");
const WebhookEntity_1 = require("./entity/WebhookEntity");
const WebhookEventEntity_1 = require("./entity/WebhookEventEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const ResendEntityBase_1 = require("./ResendEntityBase");
Object.defineProperty(exports, "ResendEntityBase", { enumerable: true, get: function () { return ResendEntityBase_1.ResendEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class ResendSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('ResendSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('ResendSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('ResendSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AddContactToSegmentResponseSuccess().list()` / `client.AddContactToSegmentResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AddContactToSegmentResponseSuccess(entopts) {
        const self = this;
        return new AddContactToSegmentResponseSuccessEntity_1.AddContactToSegmentResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ApiKey(entopts) {
        const self = this;
        return new ApiKeyEntity_1.ApiKeyEntity(self, entopts);
    }
    // Entity access: `client.Audience().list()` / `client.Audience().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Audience(entopts) {
        const self = this;
        return new AudienceEntity_1.AudienceEntity(self, entopts);
    }
    // Entity access: `client.Automation().list()` / `client.Automation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Automation(entopts) {
        const self = this;
        return new AutomationEntity_1.AutomationEntity(self, entopts);
    }
    // Entity access: `client.AutomationRun().list()` / `client.AutomationRun().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationRun(entopts) {
        const self = this;
        return new AutomationRunEntity_1.AutomationRunEntity(self, entopts);
    }
    // Entity access: `client.AutomationRunListItem().list()` / `client.AutomationRunListItem().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AutomationRunListItem(entopts) {
        const self = this;
        return new AutomationRunListItemEntity_1.AutomationRunListItemEntity(self, entopts);
    }
    // Entity access: `client.BatchAddSuppressionsResponseSuccess().list()` / `client.BatchAddSuppressionsResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BatchAddSuppressionsResponseSuccess(entopts) {
        const self = this;
        return new BatchAddSuppressionsResponseSuccessEntity_1.BatchAddSuppressionsResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.BatchRemoveSuppressionsResponseSuccess().list()` / `client.BatchRemoveSuppressionsResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    BatchRemoveSuppressionsResponseSuccess(entopts) {
        const self = this;
        return new BatchRemoveSuppressionsResponseSuccessEntity_1.BatchRemoveSuppressionsResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.Broadcast().list()` / `client.Broadcast().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Broadcast(entopts) {
        const self = this;
        return new BroadcastEntity_1.BroadcastEntity(self, entopts);
    }
    // Entity access: `client.Contact().list()` / `client.Contact().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Contact(entopts) {
        const self = this;
        return new ContactEntity_1.ContactEntity(self, entopts);
    }
    // Entity access: `client.ContactImport().list()` / `client.ContactImport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContactImport(entopts) {
        const self = this;
        return new ContactImportEntity_1.ContactImportEntity(self, entopts);
    }
    // Entity access: `client.ContactImportResponseSuccess().list()` / `client.ContactImportResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContactImportResponseSuccess(entopts) {
        const self = this;
        return new ContactImportResponseSuccessEntity_1.ContactImportResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.ContactProperty().list()` / `client.ContactProperty().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContactProperty(entopts) {
        const self = this;
        return new ContactPropertyEntity_1.ContactPropertyEntity(self, entopts);
    }
    // Entity access: `client.ContactTopicsResponseSuccess().list()` / `client.ContactTopicsResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContactTopicsResponseSuccess(entopts) {
        const self = this;
        return new ContactTopicsResponseSuccessEntity_1.ContactTopicsResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.CreateBatchEmail().list()` / `client.CreateBatchEmail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateBatchEmail(entopts) {
        const self = this;
        return new CreateBatchEmailEntity_1.CreateBatchEmailEntity(self, entopts);
    }
    // Entity access: `client.CreateContactImportResponseSuccess().list()` / `client.CreateContactImportResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateContactImportResponseSuccess(entopts) {
        const self = this;
        return new CreateContactImportResponseSuccessEntity_1.CreateContactImportResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Domain(entopts) {
        const self = this;
        return new DomainEntity_1.DomainEntity(self, entopts);
    }
    // Entity access: `client.DomainClaim().list()` / `client.DomainClaim().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DomainClaim(entopts) {
        const self = this;
        return new DomainClaimEntity_1.DomainClaimEntity(self, entopts);
    }
    // Entity access: `client.Email().list()` / `client.Email().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Email(entopts) {
        const self = this;
        return new EmailEntity_1.EmailEntity(self, entopts);
    }
    // Entity access: `client.EmailsMetric().list()` / `client.EmailsMetric().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmailsMetric(entopts) {
        const self = this;
        return new EmailsMetricEntity_1.EmailsMetricEntity(self, entopts);
    }
    // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Event(entopts) {
        const self = this;
        return new EventEntity_1.EventEntity(self, entopts);
    }
    // Entity access: `client.ListAttachment().list()` / `client.ListAttachment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListAttachment(entopts) {
        const self = this;
        return new ListAttachmentEntity_1.ListAttachmentEntity(self, entopts);
    }
    // Entity access: `client.ListBroadcastClickedLinksResponseSuccess().list()` / `client.ListBroadcastClickedLinksResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListBroadcastClickedLinksResponseSuccess(entopts) {
        const self = this;
        return new ListBroadcastClickedLinksResponseSuccessEntity_1.ListBroadcastClickedLinksResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.ListBroadcastRecipientsResponseSuccess().list()` / `client.ListBroadcastRecipientsResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListBroadcastRecipientsResponseSuccess(entopts) {
        const self = this;
        return new ListBroadcastRecipientsResponseSuccessEntity_1.ListBroadcastRecipientsResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.ListContactSegmentsResponseSuccess().list()` / `client.ListContactSegmentsResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListContactSegmentsResponseSuccess(entopts) {
        const self = this;
        return new ListContactSegmentsResponseSuccessEntity_1.ListContactSegmentsResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.ListContactsResponseSuccess().list()` / `client.ListContactsResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListContactsResponseSuccess(entopts) {
        const self = this;
        return new ListContactsResponseSuccessEntity_1.ListContactsResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.ListReceivedEmail().list()` / `client.ListReceivedEmail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListReceivedEmail(entopts) {
        const self = this;
        return new ListReceivedEmailEntity_1.ListReceivedEmailEntity(self, entopts);
    }
    // Entity access: `client.ListWebhookEvent().list()` / `client.ListWebhookEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListWebhookEvent(entopts) {
        const self = this;
        return new ListWebhookEventEntity_1.ListWebhookEventEntity(self, entopts);
    }
    // Entity access: `client.ListWebhookEventAttempt().list()` / `client.ListWebhookEventAttempt().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ListWebhookEventAttempt(entopts) {
        const self = this;
        return new ListWebhookEventAttemptEntity_1.ListWebhookEventAttemptEntity(self, entopts);
    }
    // Entity access: `client.Log().list()` / `client.Log().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Log(entopts) {
        const self = this;
        return new LogEntity_1.LogEntity(self, entopts);
    }
    // Entity access: `client.OAuthGrant().list()` / `client.OAuthGrant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OAuthGrant(entopts) {
        const self = this;
        return new OAuthGrantEntity_1.OAuthGrantEntity(self, entopts);
    }
    // Entity access: `client.ReceivedEmail().list()` / `client.ReceivedEmail().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ReceivedEmail(entopts) {
        const self = this;
        return new ReceivedEmailEntity_1.ReceivedEmailEntity(self, entopts);
    }
    // Entity access: `client.RemoveAudienceResponseSuccess().list()` / `client.RemoveAudienceResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveAudienceResponseSuccess(entopts) {
        const self = this;
        return new RemoveAudienceResponseSuccessEntity_1.RemoveAudienceResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.RemoveBroadcastResponseSuccess().list()` / `client.RemoveBroadcastResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveBroadcastResponseSuccess(entopts) {
        const self = this;
        return new RemoveBroadcastResponseSuccessEntity_1.RemoveBroadcastResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.RemoveContactFromSegmentResponseSuccess().list()` / `client.RemoveContactFromSegmentResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveContactFromSegmentResponseSuccess(entopts) {
        const self = this;
        return new RemoveContactFromSegmentResponseSuccessEntity_1.RemoveContactFromSegmentResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.RemoveContactPropertyResponseSuccess().list()` / `client.RemoveContactPropertyResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveContactPropertyResponseSuccess(entopts) {
        const self = this;
        return new RemoveContactPropertyResponseSuccessEntity_1.RemoveContactPropertyResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.RemoveContactResponseSuccess().list()` / `client.RemoveContactResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveContactResponseSuccess(entopts) {
        const self = this;
        return new RemoveContactResponseSuccessEntity_1.RemoveContactResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.RemoveEvent().list()` / `client.RemoveEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveEvent(entopts) {
        const self = this;
        return new RemoveEventEntity_1.RemoveEventEntity(self, entopts);
    }
    // Entity access: `client.RemoveSegmentResponseSuccess().list()` / `client.RemoveSegmentResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveSegmentResponseSuccess(entopts) {
        const self = this;
        return new RemoveSegmentResponseSuccessEntity_1.RemoveSegmentResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.RemoveSuppressionResponseSuccess().list()` / `client.RemoveSuppressionResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveSuppressionResponseSuccess(entopts) {
        const self = this;
        return new RemoveSuppressionResponseSuccessEntity_1.RemoveSuppressionResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.RemoveTemplateResponseSuccess().list()` / `client.RemoveTemplateResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveTemplateResponseSuccess(entopts) {
        const self = this;
        return new RemoveTemplateResponseSuccessEntity_1.RemoveTemplateResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.RemoveTopicResponseSuccess().list()` / `client.RemoveTopicResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RemoveTopicResponseSuccess(entopts) {
        const self = this;
        return new RemoveTopicResponseSuccessEntity_1.RemoveTopicResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.RetrievedAttachment().list()` / `client.RetrievedAttachment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RetrievedAttachment(entopts) {
        const self = this;
        return new RetrievedAttachmentEntity_1.RetrievedAttachmentEntity(self, entopts);
    }
    // Entity access: `client.RevokeOAuthGrant().list()` / `client.RevokeOAuthGrant().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RevokeOAuthGrant(entopts) {
        const self = this;
        return new RevokeOAuthGrantEntity_1.RevokeOAuthGrantEntity(self, entopts);
    }
    // Entity access: `client.Rotate().list()` / `client.Rotate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rotate(entopts) {
        const self = this;
        return new RotateEntity_1.RotateEntity(self, entopts);
    }
    // Entity access: `client.Segment().list()` / `client.Segment().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Segment(entopts) {
        const self = this;
        return new SegmentEntity_1.SegmentEntity(self, entopts);
    }
    // Entity access: `client.Suppression().list()` / `client.Suppression().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Suppression(entopts) {
        const self = this;
        return new SuppressionEntity_1.SuppressionEntity(self, entopts);
    }
    // Entity access: `client.Template().list()` / `client.Template().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Template(entopts) {
        const self = this;
        return new TemplateEntity_1.TemplateEntity(self, entopts);
    }
    // Entity access: `client.Topic().list()` / `client.Topic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Topic(entopts) {
        const self = this;
        return new TopicEntity_1.TopicEntity(self, entopts);
    }
    // Entity access: `client.UpdateApiKey().list()` / `client.UpdateApiKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateApiKey(entopts) {
        const self = this;
        return new UpdateApiKeyEntity_1.UpdateApiKeyEntity(self, entopts);
    }
    // Entity access: `client.UpdateBroadcastResponseSuccess().list()` / `client.UpdateBroadcastResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateBroadcastResponseSuccess(entopts) {
        const self = this;
        return new UpdateBroadcastResponseSuccessEntity_1.UpdateBroadcastResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.UpdateContactPropertyResponseSuccess().list()` / `client.UpdateContactPropertyResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateContactPropertyResponseSuccess(entopts) {
        const self = this;
        return new UpdateContactPropertyResponseSuccessEntity_1.UpdateContactPropertyResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.UpdateContactResponseSuccess().list()` / `client.UpdateContactResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateContactResponseSuccess(entopts) {
        const self = this;
        return new UpdateContactResponseSuccessEntity_1.UpdateContactResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.UpdateContactTopicsResponseSuccess().list()` / `client.UpdateContactTopicsResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateContactTopicsResponseSuccess(entopts) {
        const self = this;
        return new UpdateContactTopicsResponseSuccessEntity_1.UpdateContactTopicsResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.UpdateDomainResponseSuccess().list()` / `client.UpdateDomainResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateDomainResponseSuccess(entopts) {
        const self = this;
        return new UpdateDomainResponseSuccessEntity_1.UpdateDomainResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.UpdateEmailOption().list()` / `client.UpdateEmailOption().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateEmailOption(entopts) {
        const self = this;
        return new UpdateEmailOptionEntity_1.UpdateEmailOptionEntity(self, entopts);
    }
    // Entity access: `client.UpdateEvent().list()` / `client.UpdateEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateEvent(entopts) {
        const self = this;
        return new UpdateEventEntity_1.UpdateEventEntity(self, entopts);
    }
    // Entity access: `client.UpdateSegmentResponseSuccess().list()` / `client.UpdateSegmentResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateSegmentResponseSuccess(entopts) {
        const self = this;
        return new UpdateSegmentResponseSuccessEntity_1.UpdateSegmentResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.UpdateTemplateResponseSuccess().list()` / `client.UpdateTemplateResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateTemplateResponseSuccess(entopts) {
        const self = this;
        return new UpdateTemplateResponseSuccessEntity_1.UpdateTemplateResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.UpdateTopicResponseSuccess().list()` / `client.UpdateTopicResponseSuccess().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateTopicResponseSuccess(entopts) {
        const self = this;
        return new UpdateTopicResponseSuccessEntity_1.UpdateTopicResponseSuccessEntity(self, entopts);
    }
    // Entity access: `client.UpdateWebhook().list()` / `client.UpdateWebhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UpdateWebhook(entopts) {
        const self = this;
        return new UpdateWebhookEntity_1.UpdateWebhookEntity(self, entopts);
    }
    // Entity access: `client.Usage().list()` / `client.Usage().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Usage(entopts) {
        const self = this;
        return new UsageEntity_1.UsageEntity(self, entopts);
    }
    // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Webhook(entopts) {
        const self = this;
        return new WebhookEntity_1.WebhookEntity(self, entopts);
    }
    // Entity access: `client.WebhookEvent().list()` / `client.WebhookEvent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WebhookEvent(entopts) {
        const self = this;
        return new WebhookEventEntity_1.WebhookEventEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new ResendSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return ResendSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Resend' };
    }
    toString() {
        return 'Resend ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.ResendSDK = ResendSDK;
const SDK = ResendSDK;
exports.SDK = SDK;
//# sourceMappingURL=ResendSDK.js.map