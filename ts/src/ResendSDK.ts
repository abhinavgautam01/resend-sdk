// Resend Ts SDK

import { AddContactToSegmentResponseSuccessEntity } from './entity/AddContactToSegmentResponseSuccessEntity'
import { ApiKeyEntity } from './entity/ApiKeyEntity'
import { AudienceEntity } from './entity/AudienceEntity'
import { AutomationEntity } from './entity/AutomationEntity'
import { AutomationRunEntity } from './entity/AutomationRunEntity'
import { AutomationRunListItemEntity } from './entity/AutomationRunListItemEntity'
import { BatchAddSuppressionsResponseSuccessEntity } from './entity/BatchAddSuppressionsResponseSuccessEntity'
import { BatchRemoveSuppressionsResponseSuccessEntity } from './entity/BatchRemoveSuppressionsResponseSuccessEntity'
import { BroadcastEntity } from './entity/BroadcastEntity'
import { ContactEntity } from './entity/ContactEntity'
import { ContactImportEntity } from './entity/ContactImportEntity'
import { ContactImportResponseSuccessEntity } from './entity/ContactImportResponseSuccessEntity'
import { ContactPropertyEntity } from './entity/ContactPropertyEntity'
import { ContactTopicsResponseSuccessEntity } from './entity/ContactTopicsResponseSuccessEntity'
import { CreateBatchEmailEntity } from './entity/CreateBatchEmailEntity'
import { CreateContactImportResponseSuccessEntity } from './entity/CreateContactImportResponseSuccessEntity'
import { DomainEntity } from './entity/DomainEntity'
import { DomainClaimEntity } from './entity/DomainClaimEntity'
import { EmailEntity } from './entity/EmailEntity'
import { EmailsMetricEntity } from './entity/EmailsMetricEntity'
import { EventEntity } from './entity/EventEntity'
import { ListAttachmentEntity } from './entity/ListAttachmentEntity'
import { ListBroadcastClickedLinksResponseSuccessEntity } from './entity/ListBroadcastClickedLinksResponseSuccessEntity'
import { ListBroadcastRecipientsResponseSuccessEntity } from './entity/ListBroadcastRecipientsResponseSuccessEntity'
import { ListContactSegmentsResponseSuccessEntity } from './entity/ListContactSegmentsResponseSuccessEntity'
import { ListContactsResponseSuccessEntity } from './entity/ListContactsResponseSuccessEntity'
import { ListReceivedEmailEntity } from './entity/ListReceivedEmailEntity'
import { ListWebhookEventEntity } from './entity/ListWebhookEventEntity'
import { ListWebhookEventAttemptEntity } from './entity/ListWebhookEventAttemptEntity'
import { LogEntity } from './entity/LogEntity'
import { OAuthGrantEntity } from './entity/OAuthGrantEntity'
import { ReceivedEmailEntity } from './entity/ReceivedEmailEntity'
import { RemoveAudienceResponseSuccessEntity } from './entity/RemoveAudienceResponseSuccessEntity'
import { RemoveBroadcastResponseSuccessEntity } from './entity/RemoveBroadcastResponseSuccessEntity'
import { RemoveContactFromSegmentResponseSuccessEntity } from './entity/RemoveContactFromSegmentResponseSuccessEntity'
import { RemoveContactPropertyResponseSuccessEntity } from './entity/RemoveContactPropertyResponseSuccessEntity'
import { RemoveContactResponseSuccessEntity } from './entity/RemoveContactResponseSuccessEntity'
import { RemoveEventEntity } from './entity/RemoveEventEntity'
import { RemoveSegmentResponseSuccessEntity } from './entity/RemoveSegmentResponseSuccessEntity'
import { RemoveSuppressionResponseSuccessEntity } from './entity/RemoveSuppressionResponseSuccessEntity'
import { RemoveTemplateResponseSuccessEntity } from './entity/RemoveTemplateResponseSuccessEntity'
import { RemoveTopicResponseSuccessEntity } from './entity/RemoveTopicResponseSuccessEntity'
import { RetrievedAttachmentEntity } from './entity/RetrievedAttachmentEntity'
import { RevokeOAuthGrantEntity } from './entity/RevokeOAuthGrantEntity'
import { RotateEntity } from './entity/RotateEntity'
import { SegmentEntity } from './entity/SegmentEntity'
import { SuppressionEntity } from './entity/SuppressionEntity'
import { TemplateEntity } from './entity/TemplateEntity'
import { TopicEntity } from './entity/TopicEntity'
import { UpdateApiKeyEntity } from './entity/UpdateApiKeyEntity'
import { UpdateBroadcastResponseSuccessEntity } from './entity/UpdateBroadcastResponseSuccessEntity'
import { UpdateContactPropertyResponseSuccessEntity } from './entity/UpdateContactPropertyResponseSuccessEntity'
import { UpdateContactResponseSuccessEntity } from './entity/UpdateContactResponseSuccessEntity'
import { UpdateContactTopicsResponseSuccessEntity } from './entity/UpdateContactTopicsResponseSuccessEntity'
import { UpdateDomainResponseSuccessEntity } from './entity/UpdateDomainResponseSuccessEntity'
import { UpdateEmailOptionEntity } from './entity/UpdateEmailOptionEntity'
import { UpdateEventEntity } from './entity/UpdateEventEntity'
import { UpdateSegmentResponseSuccessEntity } from './entity/UpdateSegmentResponseSuccessEntity'
import { UpdateTemplateResponseSuccessEntity } from './entity/UpdateTemplateResponseSuccessEntity'
import { UpdateTopicResponseSuccessEntity } from './entity/UpdateTopicResponseSuccessEntity'
import { UpdateWebhookEntity } from './entity/UpdateWebhookEntity'
import { UsageEntity } from './entity/UsageEntity'
import { WebhookEntity } from './entity/WebhookEntity'
import { WebhookEventEntity } from './entity/WebhookEventEntity'

export type * from './ResendTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { ResendEntityBase } from './ResendEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'



const stdutil = new Utility()


class ResendSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context
  

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }

  


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    const spec: any = {
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
    }

    ctx.spec = spec

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('ResendSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('ResendSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('ResendSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.AddContactToSegmentResponseSuccess().list()` / `client.AddContactToSegmentResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AddContactToSegmentResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new AddContactToSegmentResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.ApiKey().list()` / `client.ApiKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ApiKey(entopts?: Record<string, any>) {
    const self = this
    return new ApiKeyEntity(self, entopts)
  }


  // Entity access: `client.Audience().list()` / `client.Audience().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Audience(entopts?: Record<string, any>) {
    const self = this
    return new AudienceEntity(self, entopts)
  }


  // Entity access: `client.Automation().list()` / `client.Automation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Automation(entopts?: Record<string, any>) {
    const self = this
    return new AutomationEntity(self, entopts)
  }


  // Entity access: `client.AutomationRun().list()` / `client.AutomationRun().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AutomationRun(entopts?: Record<string, any>) {
    const self = this
    return new AutomationRunEntity(self, entopts)
  }


  // Entity access: `client.AutomationRunListItem().list()` / `client.AutomationRunListItem().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AutomationRunListItem(entopts?: Record<string, any>) {
    const self = this
    return new AutomationRunListItemEntity(self, entopts)
  }


  // Entity access: `client.BatchAddSuppressionsResponseSuccess().list()` / `client.BatchAddSuppressionsResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BatchAddSuppressionsResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new BatchAddSuppressionsResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.BatchRemoveSuppressionsResponseSuccess().list()` / `client.BatchRemoveSuppressionsResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  BatchRemoveSuppressionsResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new BatchRemoveSuppressionsResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.Broadcast().list()` / `client.Broadcast().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Broadcast(entopts?: Record<string, any>) {
    const self = this
    return new BroadcastEntity(self, entopts)
  }


  // Entity access: `client.Contact().list()` / `client.Contact().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Contact(entopts?: Record<string, any>) {
    const self = this
    return new ContactEntity(self, entopts)
  }


  // Entity access: `client.ContactImport().list()` / `client.ContactImport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContactImport(entopts?: Record<string, any>) {
    const self = this
    return new ContactImportEntity(self, entopts)
  }


  // Entity access: `client.ContactImportResponseSuccess().list()` / `client.ContactImportResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContactImportResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new ContactImportResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.ContactProperty().list()` / `client.ContactProperty().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContactProperty(entopts?: Record<string, any>) {
    const self = this
    return new ContactPropertyEntity(self, entopts)
  }


  // Entity access: `client.ContactTopicsResponseSuccess().list()` / `client.ContactTopicsResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContactTopicsResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new ContactTopicsResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.CreateBatchEmail().list()` / `client.CreateBatchEmail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateBatchEmail(entopts?: Record<string, any>) {
    const self = this
    return new CreateBatchEmailEntity(self, entopts)
  }


  // Entity access: `client.CreateContactImportResponseSuccess().list()` / `client.CreateContactImportResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateContactImportResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new CreateContactImportResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.Domain().list()` / `client.Domain().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Domain(entopts?: Record<string, any>) {
    const self = this
    return new DomainEntity(self, entopts)
  }


  // Entity access: `client.DomainClaim().list()` / `client.DomainClaim().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DomainClaim(entopts?: Record<string, any>) {
    const self = this
    return new DomainClaimEntity(self, entopts)
  }


  // Entity access: `client.Email().list()` / `client.Email().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Email(entopts?: Record<string, any>) {
    const self = this
    return new EmailEntity(self, entopts)
  }


  // Entity access: `client.EmailsMetric().list()` / `client.EmailsMetric().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmailsMetric(entopts?: Record<string, any>) {
    const self = this
    return new EmailsMetricEntity(self, entopts)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Event(entopts?: Record<string, any>) {
    const self = this
    return new EventEntity(self, entopts)
  }


  // Entity access: `client.ListAttachment().list()` / `client.ListAttachment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListAttachment(entopts?: Record<string, any>) {
    const self = this
    return new ListAttachmentEntity(self, entopts)
  }


  // Entity access: `client.ListBroadcastClickedLinksResponseSuccess().list()` / `client.ListBroadcastClickedLinksResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListBroadcastClickedLinksResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new ListBroadcastClickedLinksResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.ListBroadcastRecipientsResponseSuccess().list()` / `client.ListBroadcastRecipientsResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListBroadcastRecipientsResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new ListBroadcastRecipientsResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.ListContactSegmentsResponseSuccess().list()` / `client.ListContactSegmentsResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListContactSegmentsResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new ListContactSegmentsResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.ListContactsResponseSuccess().list()` / `client.ListContactsResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListContactsResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new ListContactsResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.ListReceivedEmail().list()` / `client.ListReceivedEmail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListReceivedEmail(entopts?: Record<string, any>) {
    const self = this
    return new ListReceivedEmailEntity(self, entopts)
  }


  // Entity access: `client.ListWebhookEvent().list()` / `client.ListWebhookEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListWebhookEvent(entopts?: Record<string, any>) {
    const self = this
    return new ListWebhookEventEntity(self, entopts)
  }


  // Entity access: `client.ListWebhookEventAttempt().list()` / `client.ListWebhookEventAttempt().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ListWebhookEventAttempt(entopts?: Record<string, any>) {
    const self = this
    return new ListWebhookEventAttemptEntity(self, entopts)
  }


  // Entity access: `client.Log().list()` / `client.Log().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Log(entopts?: Record<string, any>) {
    const self = this
    return new LogEntity(self, entopts)
  }


  // Entity access: `client.OAuthGrant().list()` / `client.OAuthGrant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OAuthGrant(entopts?: Record<string, any>) {
    const self = this
    return new OAuthGrantEntity(self, entopts)
  }


  // Entity access: `client.ReceivedEmail().list()` / `client.ReceivedEmail().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ReceivedEmail(entopts?: Record<string, any>) {
    const self = this
    return new ReceivedEmailEntity(self, entopts)
  }


  // Entity access: `client.RemoveAudienceResponseSuccess().list()` / `client.RemoveAudienceResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveAudienceResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RemoveAudienceResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.RemoveBroadcastResponseSuccess().list()` / `client.RemoveBroadcastResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveBroadcastResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RemoveBroadcastResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.RemoveContactFromSegmentResponseSuccess().list()` / `client.RemoveContactFromSegmentResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveContactFromSegmentResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RemoveContactFromSegmentResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.RemoveContactPropertyResponseSuccess().list()` / `client.RemoveContactPropertyResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveContactPropertyResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RemoveContactPropertyResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.RemoveContactResponseSuccess().list()` / `client.RemoveContactResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveContactResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RemoveContactResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.RemoveEvent().list()` / `client.RemoveEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveEvent(entopts?: Record<string, any>) {
    const self = this
    return new RemoveEventEntity(self, entopts)
  }


  // Entity access: `client.RemoveSegmentResponseSuccess().list()` / `client.RemoveSegmentResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveSegmentResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RemoveSegmentResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.RemoveSuppressionResponseSuccess().list()` / `client.RemoveSuppressionResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveSuppressionResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RemoveSuppressionResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.RemoveTemplateResponseSuccess().list()` / `client.RemoveTemplateResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveTemplateResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RemoveTemplateResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.RemoveTopicResponseSuccess().list()` / `client.RemoveTopicResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RemoveTopicResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new RemoveTopicResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.RetrievedAttachment().list()` / `client.RetrievedAttachment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RetrievedAttachment(entopts?: Record<string, any>) {
    const self = this
    return new RetrievedAttachmentEntity(self, entopts)
  }


  // Entity access: `client.RevokeOAuthGrant().list()` / `client.RevokeOAuthGrant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RevokeOAuthGrant(entopts?: Record<string, any>) {
    const self = this
    return new RevokeOAuthGrantEntity(self, entopts)
  }


  // Entity access: `client.Rotate().list()` / `client.Rotate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rotate(entopts?: Record<string, any>) {
    const self = this
    return new RotateEntity(self, entopts)
  }


  // Entity access: `client.Segment().list()` / `client.Segment().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Segment(entopts?: Record<string, any>) {
    const self = this
    return new SegmentEntity(self, entopts)
  }


  // Entity access: `client.Suppression().list()` / `client.Suppression().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Suppression(entopts?: Record<string, any>) {
    const self = this
    return new SuppressionEntity(self, entopts)
  }


  // Entity access: `client.Template().list()` / `client.Template().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Template(entopts?: Record<string, any>) {
    const self = this
    return new TemplateEntity(self, entopts)
  }


  // Entity access: `client.Topic().list()` / `client.Topic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Topic(entopts?: Record<string, any>) {
    const self = this
    return new TopicEntity(self, entopts)
  }


  // Entity access: `client.UpdateApiKey().list()` / `client.UpdateApiKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateApiKey(entopts?: Record<string, any>) {
    const self = this
    return new UpdateApiKeyEntity(self, entopts)
  }


  // Entity access: `client.UpdateBroadcastResponseSuccess().list()` / `client.UpdateBroadcastResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateBroadcastResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new UpdateBroadcastResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.UpdateContactPropertyResponseSuccess().list()` / `client.UpdateContactPropertyResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateContactPropertyResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new UpdateContactPropertyResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.UpdateContactResponseSuccess().list()` / `client.UpdateContactResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateContactResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new UpdateContactResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.UpdateContactTopicsResponseSuccess().list()` / `client.UpdateContactTopicsResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateContactTopicsResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new UpdateContactTopicsResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.UpdateDomainResponseSuccess().list()` / `client.UpdateDomainResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateDomainResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new UpdateDomainResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.UpdateEmailOption().list()` / `client.UpdateEmailOption().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateEmailOption(entopts?: Record<string, any>) {
    const self = this
    return new UpdateEmailOptionEntity(self, entopts)
  }


  // Entity access: `client.UpdateEvent().list()` / `client.UpdateEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateEvent(entopts?: Record<string, any>) {
    const self = this
    return new UpdateEventEntity(self, entopts)
  }


  // Entity access: `client.UpdateSegmentResponseSuccess().list()` / `client.UpdateSegmentResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateSegmentResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new UpdateSegmentResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.UpdateTemplateResponseSuccess().list()` / `client.UpdateTemplateResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateTemplateResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new UpdateTemplateResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.UpdateTopicResponseSuccess().list()` / `client.UpdateTopicResponseSuccess().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateTopicResponseSuccess(entopts?: Record<string, any>) {
    const self = this
    return new UpdateTopicResponseSuccessEntity(self, entopts)
  }


  // Entity access: `client.UpdateWebhook().list()` / `client.UpdateWebhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UpdateWebhook(entopts?: Record<string, any>) {
    const self = this
    return new UpdateWebhookEntity(self, entopts)
  }


  // Entity access: `client.Usage().list()` / `client.Usage().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Usage(entopts?: Record<string, any>) {
    const self = this
    return new UsageEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEntity(self, entopts)
  }


  // Entity access: `client.WebhookEvent().list()` / `client.WebhookEvent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebhookEvent(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEventEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new ResendSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return ResendSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Resend' }
  }

  toString() {
    return 'Resend ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = ResendSDK


export {
  stdutil,
  config,
  

  BaseFeature,
  ResendEntityBase,

  ResendSDK,
  SDK,
}


