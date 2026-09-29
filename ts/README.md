# Resend TypeScript SDK



The TypeScript SDK for the Resend API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AddContactToSegmentResponseSuccess()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Also generated from this model: `py` — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`, see [Releases](https://github.com/abhinavgautam01/resend-sdk/releases)), or from a
clone, which carries the compiled `dist/`:

```bash
git clone https://github.com/abhinavgautam01/resend-sdk
npm install ./resend-sdk/ts
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { ResendSDK } from '@abhinavgautam01/resend-sdk'

const client = new ResendSDK({
  apikey: process.env.RESEND_APIKEY,
})
```

### 3. Load an automationrun

AutomationRun is nested under automation, so provide the `automation_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const automationrun = await client.AutomationRun().load({
    automation_id: 'example_automation_id',
    id: 'example_id',
  })
  console.log(automationrun)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created AddContactToSegmentResponseSuccess ENTITY (.data() for the record)
const created = await client.AddContactToSegmentResponseSuccess().create({
  contact_id: 'example_contact_id',
  segment_id: 'example_segment_id',
})

```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const contactimports = await client.ContactImport().list()
  console.log(contactimports)
} catch (err) {
  console.error('list failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = ResendSDK.test()

const contactimport = await client.ContactImport().list()
// contactimport is the entity, populated with mock response data
// — call contactimport.data() for the record itself
console.log(contactimport)
```

You can also use the instance method:

```ts
const client = new ResendSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.ContactImport()

// First call runs the operation and stores its result
await entity.list()

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new ResendSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
RESEND_TEST_LIVE=TRUE
RESEND_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```

Live entity tests continue independent operations after errors and attempt
supported cleanup. Their final result reports failures and missing prerequisites
after the remaining work completes. The model and test inputs determine which
API operations the generated scenarios cover.


## Reference

### ResendSDK

#### Constructor

```ts
new ResendSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AddContactToSegmentResponseSuccess(data?)` | `AddContactToSegmentResponseSuccessEntity` | Create an AddContactToSegmentResponseSuccess entity instance. |
| `ApiKey(data?)` | `ApiKeyEntity` | Create an ApiKey entity instance. |
| `Audience(data?)` | `AudienceEntity` | Create an Audience entity instance. |
| `Automation(data?)` | `AutomationEntity` | Create an Automation entity instance. |
| `AutomationRun(data?)` | `AutomationRunEntity` | Create an AutomationRun entity instance. |
| `AutomationRunListItem(data?)` | `AutomationRunListItemEntity` | Create an AutomationRunListItem entity instance. |
| `BatchAddSuppressionsResponseSuccess(data?)` | `BatchAddSuppressionsResponseSuccessEntity` | Create a BatchAddSuppressionsResponseSuccess entity instance. |
| `BatchRemoveSuppressionsResponseSuccess(data?)` | `BatchRemoveSuppressionsResponseSuccessEntity` | Create a BatchRemoveSuppressionsResponseSuccess entity instance. |
| `Broadcast(data?)` | `BroadcastEntity` | Create a Broadcast entity instance. |
| `Contact(data?)` | `ContactEntity` | Create a Contact entity instance. |
| `ContactImport(data?)` | `ContactImportEntity` | Create a ContactImport entity instance. |
| `ContactImportResponseSuccess(data?)` | `ContactImportResponseSuccessEntity` | Create a ContactImportResponseSuccess entity instance. |
| `ContactProperty(data?)` | `ContactPropertyEntity` | Create a ContactProperty entity instance. |
| `ContactTopicsResponseSuccess(data?)` | `ContactTopicsResponseSuccessEntity` | Create a ContactTopicsResponseSuccess entity instance. |
| `CreateBatchEmail(data?)` | `CreateBatchEmailEntity` | Create a CreateBatchEmail entity instance. |
| `CreateContactImportResponseSuccess(data?)` | `CreateContactImportResponseSuccessEntity` | Create a CreateContactImportResponseSuccess entity instance. |
| `Domain(data?)` | `DomainEntity` | Create a Domain entity instance. |
| `DomainClaim(data?)` | `DomainClaimEntity` | Create a DomainClaim entity instance. |
| `Email(data?)` | `EmailEntity` | Create an Email entity instance. |
| `EmailsMetric(data?)` | `EmailsMetricEntity` | Create an EmailsMetric entity instance. |
| `Event(data?)` | `EventEntity` | Create an Event entity instance. |
| `ListAttachment(data?)` | `ListAttachmentEntity` | Create a ListAttachment entity instance. |
| `ListBroadcastClickedLinksResponseSuccess(data?)` | `ListBroadcastClickedLinksResponseSuccessEntity` | Create a ListBroadcastClickedLinksResponseSuccess entity instance. |
| `ListBroadcastRecipientsResponseSuccess(data?)` | `ListBroadcastRecipientsResponseSuccessEntity` | Create a ListBroadcastRecipientsResponseSuccess entity instance. |
| `ListContactSegmentsResponseSuccess(data?)` | `ListContactSegmentsResponseSuccessEntity` | Create a ListContactSegmentsResponseSuccess entity instance. |
| `ListContactsResponseSuccess(data?)` | `ListContactsResponseSuccessEntity` | Create a ListContactsResponseSuccess entity instance. |
| `ListReceivedEmail(data?)` | `ListReceivedEmailEntity` | Create a ListReceivedEmail entity instance. |
| `ListWebhookEvent(data?)` | `ListWebhookEventEntity` | Create a ListWebhookEvent entity instance. |
| `ListWebhookEventAttempt(data?)` | `ListWebhookEventAttemptEntity` | Create a ListWebhookEventAttempt entity instance. |
| `Log(data?)` | `LogEntity` | Create a Log entity instance. |
| `OAuthGrant(data?)` | `OAuthGrantEntity` | Create an OAuthGrant entity instance. |
| `ReceivedEmail(data?)` | `ReceivedEmailEntity` | Create a ReceivedEmail entity instance. |
| `RemoveAudienceResponseSuccess(data?)` | `RemoveAudienceResponseSuccessEntity` | Create a RemoveAudienceResponseSuccess entity instance. |
| `RemoveBroadcastResponseSuccess(data?)` | `RemoveBroadcastResponseSuccessEntity` | Create a RemoveBroadcastResponseSuccess entity instance. |
| `RemoveContactFromSegmentResponseSuccess(data?)` | `RemoveContactFromSegmentResponseSuccessEntity` | Create a RemoveContactFromSegmentResponseSuccess entity instance. |
| `RemoveContactPropertyResponseSuccess(data?)` | `RemoveContactPropertyResponseSuccessEntity` | Create a RemoveContactPropertyResponseSuccess entity instance. |
| `RemoveContactResponseSuccess(data?)` | `RemoveContactResponseSuccessEntity` | Create a RemoveContactResponseSuccess entity instance. |
| `RemoveEvent(data?)` | `RemoveEventEntity` | Create a RemoveEvent entity instance. |
| `RemoveSegmentResponseSuccess(data?)` | `RemoveSegmentResponseSuccessEntity` | Create a RemoveSegmentResponseSuccess entity instance. |
| `RemoveSuppressionResponseSuccess(data?)` | `RemoveSuppressionResponseSuccessEntity` | Create a RemoveSuppressionResponseSuccess entity instance. |
| `RemoveTemplateResponseSuccess(data?)` | `RemoveTemplateResponseSuccessEntity` | Create a RemoveTemplateResponseSuccess entity instance. |
| `RemoveTopicResponseSuccess(data?)` | `RemoveTopicResponseSuccessEntity` | Create a RemoveTopicResponseSuccess entity instance. |
| `RetrievedAttachment(data?)` | `RetrievedAttachmentEntity` | Create a RetrievedAttachment entity instance. |
| `RevokeOAuthGrant(data?)` | `RevokeOAuthGrantEntity` | Create a RevokeOAuthGrant entity instance. |
| `Rotate(data?)` | `RotateEntity` | Create a Rotate entity instance. |
| `Segment(data?)` | `SegmentEntity` | Create a Segment entity instance. |
| `Suppression(data?)` | `SuppressionEntity` | Create a Suppression entity instance. |
| `Template(data?)` | `TemplateEntity` | Create a Template entity instance. |
| `Topic(data?)` | `TopicEntity` | Create a Topic entity instance. |
| `UpdateApiKey(data?)` | `UpdateApiKeyEntity` | Create an UpdateApiKey entity instance. |
| `UpdateBroadcastResponseSuccess(data?)` | `UpdateBroadcastResponseSuccessEntity` | Create an UpdateBroadcastResponseSuccess entity instance. |
| `UpdateContactPropertyResponseSuccess(data?)` | `UpdateContactPropertyResponseSuccessEntity` | Create an UpdateContactPropertyResponseSuccess entity instance. |
| `UpdateContactResponseSuccess(data?)` | `UpdateContactResponseSuccessEntity` | Create an UpdateContactResponseSuccess entity instance. |
| `UpdateContactTopicsResponseSuccess(data?)` | `UpdateContactTopicsResponseSuccessEntity` | Create an UpdateContactTopicsResponseSuccess entity instance. |
| `UpdateDomainResponseSuccess(data?)` | `UpdateDomainResponseSuccessEntity` | Create an UpdateDomainResponseSuccess entity instance. |
| `UpdateEmailOption(data?)` | `UpdateEmailOptionEntity` | Create an UpdateEmailOption entity instance. |
| `UpdateEvent(data?)` | `UpdateEventEntity` | Create an UpdateEvent entity instance. |
| `UpdateSegmentResponseSuccess(data?)` | `UpdateSegmentResponseSuccessEntity` | Create an UpdateSegmentResponseSuccess entity instance. |
| `UpdateTemplateResponseSuccess(data?)` | `UpdateTemplateResponseSuccessEntity` | Create an UpdateTemplateResponseSuccess entity instance. |
| `UpdateTopicResponseSuccess(data?)` | `UpdateTopicResponseSuccessEntity` | Create an UpdateTopicResponseSuccess entity instance. |
| `UpdateWebhook(data?)` | `UpdateWebhookEntity` | Create an UpdateWebhook entity instance. |
| `Usage(data?)` | `UsageEntity` | Create an Usage entity instance. |
| `Webhook(data?)` | `WebhookEntity` | Create a Webhook entity instance. |
| `WebhookEvent(data?)` | `WebhookEventEntity` | Create a WebhookEvent entity instance. |
| `tester(testopts?, sdkopts?)` | `ResendSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `ResendSDK.test(testopts?, sdkopts?)` | `ResendSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): ResendSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### AddContactToSegmentResponseSuccess

| Field | Description |
| --- | --- |
| `contact_id` | The ID of the contact. |
| `object` | The object type. |
| `segment_id` | The ID of the segment. |

Operations: create.

API path: `/contacts/{contact_id}/segments/{segment_id}`

#### ApiKey

| Field | Description |
| --- | --- |
| `created_at` | The date and time the API key was created. |
| `domain_id` | Restrict an API key to send emails only from a specific domain. |
| `id` | The ID of the API key. |
| `last_used_at` | The date and time the API key was last used. |
| `name` | The API key name. |
| `permission` | The API key can have full access to Resend’s API or be only restricted to send emails. |

Operations: create, list, remove.

API path: `/api-keys`

#### Audience

| Field | Description |
| --- | --- |
| `created_at` | The date that the object was created. |
| `id` | The ID of the audience. |
| `name` | The name of the audience. |
| `object` | The object of the audience. |

Operations: create, list, load.

API path: `/audiences`

#### Automation

| Field | Description |
| --- | --- |
| `connections` | The connections between steps in the active version of the automation. |
| `created_at` | The date and time the automation was created. |
| `id` | The ID of the automation. |
| `name` | The name of the automation. |
| `object` | Type of the response object. |
| `status` | The current status of the automation. |
| `steps` | The steps in the active version of the automation. |
| `updated_at` | The date and time the automation was last updated. |

Operations: create, list, load, remove, update.

API path: `/automations/{automation_id}/duplicate`

#### AutomationRun

| Field | Description |
| --- | --- |
| `completed_at` | The date and time the run completed. |
| `created_at` | The date and time the run was created. |
| `id` | The ID of the automation run. |
| `object` | Type of the response object. |
| `started_at` | The date and time the run started. |
| `status` | The current status of the automation run. |
| `steps` | The steps executed in this run, sorted in graph order. |

Operations: load.

API path: `/automations/{automation_id}/runs/{run_id}`

#### AutomationRunListItem

| Field | Description |
| --- | --- |
| `completed_at` | The date and time the run completed. |
| `created_at` | The date and time the run was created. |
| `id` | The ID of the automation run. |
| `started_at` | The date and time the run started. |
| `status` | The current status of the automation run. |

Operations: list.

API path: `/automations/{automation_id}/runs`

#### BatchAddSuppressionsResponseSuccess

| Field | Description |
| --- | --- |
| `emails` | Email addresses to suppress. |

Operations: create.

API path: `/suppressions/batch/add`

#### BatchRemoveSuppressionsResponseSuccess

| Field | Description |
| --- | --- |
| `data` | Array containing the removed suppressions. |
| `emails` | Email addresses to remove from the suppression list. |
| `ids` | Suppression IDs to remove from the suppression list. |

Operations: create.

API path: `/suppressions/batch/remove`

#### Broadcast

| Field | Description |
| --- | --- |
| `audience_id` | Deprecated: use `segment_id` instead. |
| `created_at` | Timestamp indicating when the broadcast was created. |
| `from` | The email address of the sender. |
| `html` | The HTML version of the broadcast content. |
| `id` | Unique identifier for the broadcast. |
| `name` | Name of the broadcast. |
| `preview_text` | The preview text of the email. |
| `reply_to` | The email addresses to which replies should be sent. |
| `scheduled_at` | Timestamp indicating when the broadcast is scheduled to be sent. |
| `segment_id` | Unique identifier of the segment this broadcast will be sent to. |
| `send` | Whether to send the broadcast immediately or keep it as a draft. |
| `sent_at` | Timestamp indicating when the broadcast was sent. |
| `status` | The status of the broadcast. |
| `subject` | The subject line of the email. |
| `text` | The plain text version of the broadcast content. |
| `topic_id` | The topic ID that the broadcast is scoped to. |

Operations: create, list, load.

API path: `/broadcasts/{id}/cancel`

#### Contact

| Field | Description |
| --- | --- |
| `audience_id` | Unique identifier of the audience to which the contact belongs. |
| `created_at` | Timestamp indicating when the contact was created. |
| `email` | Email address of the contact. |
| `first_name` | First name of the contact. |
| `id` | Unique identifier for the contact. |
| `last_name` | Last name of the contact. |
| `object` | Type of the response object. |
| `properties` | A map of custom property keys and values. |
| `segments` | Array of segment IDs to add the contact to. |
| `topics` | Array of topic subscriptions for the contact. |
| `unsubscribed` | Indicates if the contact is unsubscribed. |

Operations: create, list, load.

API path: `/contacts`

#### ContactImport

| Field | Description |
| --- | --- |
| `completed_at` | Timestamp indicating when the contact import completed. |
| `counts` |  |
| `created_at` | Timestamp indicating when the contact import was created. |
| `id` | Unique identifier for the contact import. |
| `object` | Type of the response object. |
| `status` | Current status of the contact import. |

Operations: list.

API path: `/contacts/imports`

#### ContactImportResponseSuccess

| Field | Description |
| --- | --- |
| `completed_at` | Timestamp indicating when the contact import completed. |
| `counts` |  |
| `created_at` | Timestamp indicating when the contact import was created. |
| `id` | Unique identifier for the contact import. |
| `object` | Type of the response object. |
| `status` | Current status of the contact import. |

Operations: load.

API path: `/contacts/imports/{id}`

#### ContactProperty

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the contact property was created. |
| `fallback_value` | The default value when the property is not set for a contact. |
| `id` | The ID of the contact property. |
| `key` | The property key. |
| `object` | The object type. |
| `type` | The property type. |

Operations: create, list, load.

API path: `/contact-properties`

#### ContactTopicsResponseSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: list.

API path: `/contacts/{contact_id}/topics`

#### CreateBatchEmail

| Field | Description |
| --- | --- |
| `data` |  |

Operations: create.

API path: `/emails/batch`

#### CreateContactImportResponseSuccess

| Field | Description |
| --- | --- |

Operations: create.

API path: `/contacts/imports`

#### Domain

| Field | Description |
| --- | --- |
| `capabilities` | Configure the domain capabilities for sending and receiving emails. |
| `click_tracking` | Whether click tracking is enabled for this domain. |
| `created_at` | The date and time the domain was created. |
| `custom_return_path` | For advanced use cases, choose a subdomain for the Return-Path address. |
| `id` | The ID of the domain. |
| `name` | The name of the domain. |
| `object` | The type of object. |
| `open_tracking` | Whether open tracking is enabled for this domain. |
| `records` |  |
| `region` | The region where the domain is hosted. |
| `status` | The status of the domain. |
| `tls` | TLS mode. |
| `tracking_subdomain` | The subdomain used for click and open tracking. |

Operations: create, list, load, remove.

API path: `/domains/{domain_id}/verify`

#### DomainClaim

| Field | Description |
| --- | --- |
| `blocked_reason` | Why the claim is currently blocked, if applicable. |
| `click_tracking` | Track clicks within the body of each HTML email. |
| `created_at` | The date and time the claim was created. |
| `custom_return_path` | For advanced use cases, choose a subdomain for the Return-Path address. |
| `domain_id` | The ID of the placeholder domain created for the claim. |
| `expires_at` | The date and time the claim expires if not verified. |
| `failure_reason` | Why the claim failed, if applicable. |
| `id` | The ID of the claim. |
| `name` | The name of the domain being claimed. |
| `object` | The type of object. |
| `open_tracking` | Track the open rate of each email. |
| `record` | The TXT record to add to your DNS to prove ownership of the claimed domain. |
| `region` | The region where the claimed domain will send from. |
| `status` | The status of the claim. |
| `tracking_subdomain` | The subdomain to use for click and open tracking. |

Operations: create, load.

API path: `/domains/{domain_id}/claim/verify`

#### Email

| Field | Description |
| --- | --- |
| `attachments` |  |
| `bcc` | The email addresses of the blind carbon copy recipients. |
| `cc` | The email addresses of the carbon copy recipients. |
| `created_at` | The date and time the email was created. |
| `from` | The email address of the sender. |
| `headers` | Custom headers to add to the email. |
| `html` | The HTML body of the email. |
| `id` | The ID of the email. |
| `last_event` | The status of the email. |
| `message_id` | The Message-ID header value of the email. |
| `object` | The type of object. |
| `reply_to` | The email addresses to which replies should be sent. |
| `scheduled_at` | Schedule email to be sent later. |
| `subject` | The subject line of the email. |
| `tags` |  |
| `template` |  |
| `text` | The plain text body of the email. |
| `to` | Recipient email address. |
| `topic_id` | The topic ID to scope the email to. |

Operations: create, list, load.

API path: `/emails/{email_id}/cancel`

#### EmailsMetric

| Field | Description |
| --- | --- |
| `broadcast_id` | Present when `broadcast` is in `dimensions`. |
| `broadcast_name` | Present when `broadcast` is in `dimensions`. |
| `domain_id` | Present when `domain` is in `dimensions`. |
| `domain_name` | Present when `domain` is in `dimensions`. |
| `email_id` | Present when `email` is in `dimensions`. |
| `period` | Present when `period` is in `dimensions`. |

Operations: list.

API path: `/emails/metrics`

#### Event

| Field | Description |
| --- | --- |
| `created_at` | The date and time the event was created. |
| `id` | The event ID. |
| `name` | The event name. |
| `object` | Type of the response object. |
| `schema` | A flat key/type map defining the event payload schema. |
| `updated_at` | The date and time the event was last updated. |

Operations: create, list, load.

API path: `/events`

#### ListAttachment

| Field | Description |
| --- | --- |
| `content_disposition` | How the attachment should be displayed. |
| `content_id` | The content ID for inline attachments. |
| `content_type` | The MIME type of the attachment. |
| `download_url` | Signed URL to download the attachment content. |
| `expires_at` | Timestamp when the download URL expires. |
| `filename` | The filename of the attachment. |
| `id` | The ID of the attachment. |
| `size` | Size of the attachment in bytes. |

Operations: list.

API path: `/emails/{email_id}/attachments`

#### ListBroadcastClickedLinksResponseSuccess

| Field | Description |
| --- | --- |
| `clicks` | Total number of clicks on this URL. |
| `id` | An opaque cursor for this row, used only for pagination. |
| `unique_clicks` | Number of unique clicks on this URL. |
| `url` | The URL that was clicked. |

Operations: list.

API path: `/broadcasts/{id}/clicked-links`

#### ListBroadcastRecipientsResponseSuccess

| Field | Description |
| --- | --- |
| `bounce_type` | The type of bounce. |
| `clicked_links` | The links this recipient clicked. |
| `contact_id` | The ID of the contact associated with this recipient, if one exists. |
| `count` | The number of times this recipient triggered the event. |
| `email` | The recipient's email address. |
| `id` | Opaque cursor identifying this row, used for pagination. |

Operations: list.

API path: `/broadcasts/{id}/recipients`

#### ListContactSegmentsResponseSuccess

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the contact was added to the segment. |
| `id` | Unique identifier for the segment. |
| `name` | Name of the segment. |

Operations: list.

API path: `/contacts/{contact_id}/segments`

#### ListContactsResponseSuccess

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the contact was created. |
| `email` | Email address of the contact. |
| `first_name` | First name of the contact. |
| `id` | Unique identifier for the contact. |
| `last_name` | Last name of the contact. |
| `unsubscribed` | Indicates if the contact is unsubscribed. |

Operations: list.

API path: `/segments/{id}/contacts`

#### ListReceivedEmail

| Field | Description |
| --- | --- |
| `attachments` | Array of attachments for this email. |
| `bcc` | The BCC recipients. |
| `cc` | The CC recipients. |
| `created_at` | Timestamp when the email was received. |
| `from` | The sender email address. |
| `id` | The ID of the received email. |
| `message_id` | The unique message ID from the email headers. |
| `reply_to` | The reply-to addresses. |
| `subject` | The email subject. |
| `to` | The recipient email addresses. |

Operations: list.

API path: `/emails/receiving`

#### ListWebhookEvent

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the event was created. |
| `id` | The ID of the webhook event. |
| `status` | The delivery status of the event for this webhook. |
| `type` | The type of the event. |

Operations: list.

API path: `/webhooks/{webhook_id}/events`

#### ListWebhookEventAttempt

| Field | Description |
| --- | --- |
| `http_status_code` | The HTTP status code returned by the webhook endpoint. |
| `id` | The ID of the webhook event attempt. |
| `response` | The response body returned by the webhook endpoint. |
| `sent_at` | Timestamp indicating when the attempt was sent. |

Operations: list.

API path: `/webhooks/{webhook_id}/events/{event_id}/attempts`

#### Log

| Field | Description |
| --- | --- |
| `created_at` | The date the log was created. |
| `endpoint` | The API endpoint that was called. |
| `id` | The log ID. |
| `method` | The HTTP method used. |
| `object` | Type of the response object. |
| `request_body` | The request body sent to the API. |
| `response_body` | The response body returned by the API. |
| `response_status` | The HTTP status code of the response. |
| `user_agent` | The user agent of the request. |

Operations: list, load.

API path: `/logs`

#### OAuthGrant

| Field | Description |
| --- | --- |
| `client` | The OAuth client the grant was issued to. |
| `client_id` | The ID of the OAuth client the grant was issued to. |
| `created_at` | The date and time the OAuth grant was created. |
| `id` | The ID of the OAuth grant. |
| `revoked_at` | The date and time the OAuth grant was revoked, or null if it is still active. |
| `revoked_reason` | The reason the OAuth grant was revoked, or null if it is still active. |
| `scopes` | The scopes granted to the OAuth client. |

Operations: list.

API path: `/oauth/grants`

#### ReceivedEmail

| Field | Description |
| --- | --- |
| `attachments` | Array of attachments. |
| `bcc` | The BCC recipients. |
| `cc` | The CC recipients. |
| `created_at` | Timestamp when the email was received. |
| `from` | The sender email address. |
| `headers` | The email headers. |
| `html` | The HTML content of the email. |
| `id` | The ID of the received email. |
| `message_id` | The unique message ID from the email headers. |
| `object` | The type of object. |
| `received_for` | The recipient addresses the email was forwarded for, taken from the `for` clause of the message's `Received` headers. |
| `reply_to` | The reply-to addresses. |
| `subject` | The email subject. |
| `text` | The plain text content of the email. |
| `to` | The recipient email addresses. |

Operations: load.

API path: `/emails/receiving/{email_id}`

#### RemoveAudienceResponseSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/audiences/{id}`

#### RemoveBroadcastResponseSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/broadcasts/{id}`

#### RemoveContactFromSegmentResponseSuccess

| Field | Description |
| --- | --- |

Operations: remove.

API path: `/contacts/{contact_id}/segments/{segment_id}`

#### RemoveContactPropertyResponseSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/contact-properties/{id}`

#### RemoveContactResponseSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/contacts/{id}`

#### RemoveEvent

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/events/{identifier}`

#### RemoveSegmentResponseSuccess

| Field | Description |
| --- | --- |
| `audience_id` | The ID of the audience this segment belongs to. |
| `created_at` | Timestamp indicating when the segment was created. |
| `filter` | Filter conditions for the segment. |
| `id` | Unique identifier for the segment. |
| `name` | The name of the segment. |

Operations: create, list, remove.

API path: `/segments`

#### RemoveSuppressionResponseSuccess

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the suppression was created. |
| `email` | Email address to suppress. |
| `id` | Unique identifier for the suppression. |
| `origin` | Origin of the suppression. |
| `source_id` | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

Operations: create, list, remove.

API path: `/suppressions`

#### RemoveTemplateResponseSuccess

| Field | Description |
| --- | --- |
| `alias` | The alias of the template. |
| `created_at` | Timestamp indicating when the template was created. |
| `from` | Sender email address. |
| `html` | The HTML version of the template. |
| `id` | The ID of the template. |
| `name` | The name of the template. |
| `published_at` | Timestamp indicating when the template was published. |
| `reply_to` | Reply-to email addresses. |
| `status` | The publication status of the template. |
| `subject` | Email subject. |
| `text` | The plain text version of the template. |
| `updated_at` | Timestamp indicating when the template was last updated. |
| `variables` |  |

Operations: create, list, remove.

API path: `/templates`

#### RemoveTopicResponseSuccess

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the topic was created. |
| `default_subscription` | The default subscription status for the topic. |
| `description` | A description of the topic. |
| `id` | Unique identifier for the topic. |
| `name` | The name of the topic. |
| `visibility` | The visibility of the topic. |

Operations: create, list, remove.

API path: `/topics`

#### RetrievedAttachment

| Field | Description |
| --- | --- |
| `content_disposition` | How the attachment should be displayed. |
| `content_id` | The content ID for inline attachments. |
| `content_type` | The MIME type of the attachment. |
| `download_url` | Signed URL to download the attachment content. |
| `expires_at` | Timestamp when the download URL expires. |
| `filename` | The filename of the attachment. |
| `id` | The ID of the attachment. |
| `object` | The type of object. |
| `size` | Size of the attachment in bytes. |

Operations: load.

API path: `/emails/{email_id}/attachments/{attachment_id}`

#### RevokeOAuthGrant

| Field | Description |
| --- | --- |
| `id` |  |

Operations: remove.

API path: `/oauth/grants/{oauth_grant_id}`

#### Rotate

| Field | Description |
| --- | --- |
| `id` | The ID of the webhook. |
| `object` | The type of object. |
| `signing_secret` | The new secret key used to verify webhook payloads. |

Operations: create.

API path: `/webhooks/{webhook_id}/signing-secret/rotate`

#### Segment

| Field | Description |
| --- | --- |
| `audience_id` | The ID of the audience this segment belongs to. |
| `created_at` | Timestamp indicating when the segment was created. |
| `filter` | Filter conditions for the segment. |
| `id` | The ID of the segment. |
| `name` | The name of the segment. |
| `object` | The object type. |

Operations: load.

API path: `/segments/{id}`

#### Suppression

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the suppression was created. |
| `email` | Email address that is suppressed. |
| `id` | Unique identifier for the suppression. |
| `object` | Type of the response object. |
| `origin` | Origin of the suppression. |
| `source_id` | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

Operations: load.

API path: `/suppressions/{suppression}`

#### Template

| Field | Description |
| --- | --- |
| `alias` | The alias of the template. |
| `created_at` | Timestamp indicating when the template was created. |
| `current_version_id` | The ID of the current version of the template. |
| `from` | Sender email address. |
| `has_unpublished_versions` | Indicates whether the template has unpublished versions. |
| `html` | The HTML version of the template. |
| `id` | The ID of the template. |
| `name` | The name of the template. |
| `object` | The type of object. |
| `published_at` | Timestamp indicating when the template was published. |
| `reply_to` | Reply-to email addresses. |
| `status` | The publication status of the template. |
| `subject` | Email subject. |
| `text` | The plain text version of the template. |
| `updated_at` | Timestamp indicating when the template was last updated. |
| `variables` |  |

Operations: create, load.

API path: `/templates/{id}/duplicate`

#### Topic

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the topic was created. |
| `default_subscription` | The default subscription status for the topic. |
| `description` | A description of the topic. |
| `id` | The ID of the topic. |
| `name` | The name of the topic. |
| `object` | The object type. |
| `visibility` | The visibility of the topic. |

Operations: load.

API path: `/topics/{id}`

#### UpdateApiKey

| Field | Description |
| --- | --- |
| `id` | The ID of the API key. |
| `name` | The API key name. |
| `object` | The type of object. |

Operations: update.

API path: `/api-keys/{api_key_id}`

#### UpdateBroadcastResponseSuccess

| Field | Description |
| --- | --- |
| `audience_id` | Use `segment_id` instead. |
| `from` | The email address of the sender. |
| `html` | The HTML version of the message. |
| `id` | The ID of the broadcast. |
| `name` | Name of the broadcast. |
| `object` | The object type of the response. |
| `preview_text` | The preview text of the email. |
| `reply_to` | The email addresses to which replies should be sent. |
| `segment_id` | Unique identifier of the segment this broadcast will be sent to. |
| `subject` | The subject line of the email. |
| `text` | The plain text version of the message. |
| `topic_id` | The topic ID that the broadcast will be scoped to. |

Operations: update.

API path: `/broadcasts/{id}`

#### UpdateContactPropertyResponseSuccess

| Field | Description |
| --- | --- |
| `fallback_value` | The default value to use when the property is not set for a contact. |
| `id` | The ID of the contact property. |
| `object` | The object type. |

Operations: update.

API path: `/contact-properties/{id}`

#### UpdateContactResponseSuccess

| Field | Description |
| --- | --- |
| `email` | Email address of the contact. |
| `first_name` | First name of the contact. |
| `id` | Unique identifier for the updated contact. |
| `last_name` | Last name of the contact. |
| `object` | Type of the response object. |
| `properties` | A map of custom property keys and values to update. |
| `unsubscribed` | The Contact's global subscription status. |

Operations: update.

API path: `/contacts/{id}`

#### UpdateContactTopicsResponseSuccess

| Field | Description |
| --- | --- |
| `contact_id` | The ID of the contact. |
| `object` | The object type. |
| `topics` | Array of updated topic subscriptions. |

Operations: update.

API path: `/contacts/{contact_id}/topics`

#### UpdateDomainResponseSuccess

| Field | Description |
| --- | --- |
| `capabilities` | Configure the domain capabilities for sending and receiving emails. |
| `click_tracking` | Track clicks within the body of each HTML email. |
| `id` | The ID of the updated domain. |
| `object` | The object type representing the updated domain. |
| `open_tracking` | Track the open rate of each email. |
| `tls` | enforced | opportunistic. |
| `tracking_subdomain` | The subdomain to use for click and open tracking. |

Operations: update.

API path: `/domains/{domain_id}`

#### UpdateEmailOption

| Field | Description |
| --- | --- |
| `scheduled_at` | Schedule email to be sent later. |

Operations: update.

API path: `/emails/{email_id}`

#### UpdateEvent

| Field | Description |
| --- | --- |
| `id` | The ID of the updated event. |
| `object` | Type of the response object. |
| `schema` | A flat key/type map defining the event payload schema. |

Operations: update.

API path: `/events/{identifier}`

#### UpdateSegmentResponseSuccess

| Field | Description |
| --- | --- |
| `id` | The ID of the segment. |
| `name` | The name of the segment. |
| `object` | The object type. |

Operations: update.

API path: `/segments/{id}`

#### UpdateTemplateResponseSuccess

| Field | Description |
| --- | --- |
| `alias` | The alias of the template. |
| `from` | Sender email address. |
| `html` | The HTML version of the template. |
| `id` | The ID of the template. |
| `name` | The name of the template. |
| `object` | The object type of the response. |
| `reply_to` | Reply-to email addresses. |
| `subject` | Email subject. |
| `text` | The plain text version of the template. |
| `variables` |  |

Operations: update.

API path: `/templates/{id}`

#### UpdateTopicResponseSuccess

| Field | Description |
| --- | --- |
| `description` | A description of the topic. |
| `id` | The ID of the topic. |
| `name` | The name of the topic. |
| `object` | The object type. |
| `visibility` | The visibility of the topic. |

Operations: update.

API path: `/topics/{id}`

#### UpdateWebhook

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the webhook was created. |
| `endpoint` | The URL where webhook events will be sent. |
| `events` | Array of event types to subscribe to. |
| `id` | The ID of the updated webhook. |
| `object` | The type of object. |
| `status` | The status of the webhook. |

Operations: create, list, update.

API path: `/webhooks`

#### Usage

| Field | Description |
| --- | --- |
| `ai_credits` |  |
| `automation_runs` |  |
| `broadcasts` |  |
| `contacts` |  |
| `domains` |  |
| `emails` |  |
| `object` | The type of object. |
| `rate_limit` |  |
| `segments` |  |

Operations: load.

API path: `/usage`

#### Webhook

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the webhook was created. |
| `endpoint` | The URL where webhook events are sent. |
| `events` | Array of event types subscribed to. |
| `id` | The ID of the webhook. |
| `object` | The type of object. |
| `signing_secret` | The secret key used to verify webhook payloads. |
| `status` | The status of the webhook. |

Operations: load, remove.

API path: `/webhooks/{webhook_id}`

#### WebhookEvent

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the event was created. |
| `id` | The ID of the webhook event. |
| `next_attempt_at` | Timestamp of the next scheduled delivery attempt, or null when none is scheduled. |
| `object` | The type of object. |
| `payload` | The event payload sent to the webhook endpoint. |
| `status` | The delivery status of the event for this webhook. |
| `type` | The type of the event. |

Operations: create, load.

API path: `/webhooks/{webhook_id}/events/{event_id}/replay`



## Entities


### AddContactToSegmentResponseSuccess

Create an instance: `const add_contact_to_segment_response_success = client.AddContactToSegmentResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contact_id` | `string` | The ID of the contact. |
| `object` | `string` | The object type. |
| `segment_id` | `string` | The ID of the segment. |

#### Example: Create

```ts
const add_contact_to_segment_response_success = await client.AddContactToSegmentResponseSuccess().create({
  contact_id: 'example_contact_id',
  segment_id: 'example_segment_id',
})
```


### ApiKey

Create an instance: `const api_key = client.ApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The date and time the API key was created. |
| `domain_id` | `string` | Restrict an API key to send emails only from a specific domain. |
| `id` | `string` | The ID of the API key. |
| `last_used_at` | `string | null` | The date and time the API key was last used. |
| `name` | `string` | The API key name. |
| `permission` | `string` | The API key can have full access to Resend’s API or be only restricted to send emails. |

#### Example: List

```ts
const api_keys = await client.ApiKey().list()
```

#### Example: Create

```ts
const api_key = await client.ApiKey().create({
  name: 'example_name',
})
```


### Audience

Create an instance: `const audience = client.Audience()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The date that the object was created. |
| `id` | `string` | The ID of the audience. |
| `name` | `string` | The name of the audience. |
| `object` | `string` | The object of the audience. |

#### Example: Load

```ts
const audience = await client.Audience().load({ id: 'audience_id' })
```

#### Example: List

```ts
const audiences = await client.Audience().list()
```

#### Example: Create

```ts
const audience = await client.Audience().create({
})
```


### Automation

Create an instance: `const automation = client.Automation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connections` | `any[]` | The connections between steps in the active version of the automation. |
| `created_at` | `string` | The date and time the automation was created. |
| `id` | `string` | The ID of the automation. |
| `name` | `string` | The name of the automation. |
| `object` | `string` | Type of the response object. |
| `status` | `string` | The current status of the automation. |
| `steps` | `any[]` | The steps in the active version of the automation. |
| `updated_at` | `string` | The date and time the automation was last updated. |

#### Example: Load

```ts
const automation = await client.Automation().load({ id: 'automation_id' })
```

#### Example: List

```ts
const automations = await client.Automation().list()
```

#### Example: Create

```ts
const automation = await client.Automation().create({
})
```


### AutomationRun

Create an instance: `const automation_run = client.AutomationRun()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `string | null` | The date and time the run completed. |
| `created_at` | `string` | The date and time the run was created. |
| `id` | `string` | The ID of the automation run. |
| `object` | `string` | Type of the response object. |
| `started_at` | `string | null` | The date and time the run started. |
| `status` | `string` | The current status of the automation run. |
| `steps` | `any[]` | The steps executed in this run, sorted in graph order. |

#### Example: Load

```ts
const automation_run = await client.AutomationRun().load({ id: 'automation_run_id', automation_id: 'automation_id' })
```


### AutomationRunListItem

Create an instance: `const automation_run_list_item = client.AutomationRunListItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `string | null` | The date and time the run completed. |
| `created_at` | `string` | The date and time the run was created. |
| `id` | `string` | The ID of the automation run. |
| `started_at` | `string | null` | The date and time the run started. |
| `status` | `string` | The current status of the automation run. |

#### Example: List

```ts
const automation_run_list_items = await client.AutomationRunListItem().list({ id: "example" })
```


### BatchAddSuppressionsResponseSuccess

Create an instance: `const batch_add_suppressions_response_success = client.BatchAddSuppressionsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emails` | `any[]` | Email addresses to suppress. |

#### Example: Create

```ts
const batch_add_suppressions_response_success = await client.BatchAddSuppressionsResponseSuccess().create({
  emails: [],
})
```


### BatchRemoveSuppressionsResponseSuccess

Create an instance: `const batch_remove_suppressions_response_success = client.BatchRemoveSuppressionsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` | Array containing the removed suppressions. |
| `emails` | `any[]` | Email addresses to remove from the suppression list. |
| `ids` | `any[]` | Suppression IDs to remove from the suppression list. |

#### Example: Create

```ts
const batch_remove_suppressions_response_success = await client.BatchRemoveSuppressionsResponseSuccess().create({
})
```


### Broadcast

Create an instance: `const broadcast = client.Broadcast()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audience_id` | `string | null` | Deprecated: use `segment_id` instead. |
| `created_at` | `string` | Timestamp indicating when the broadcast was created. |
| `from` | `string` | The email address of the sender. |
| `html` | `string | null` | The HTML version of the broadcast content. |
| `id` | `string` | Unique identifier for the broadcast. |
| `name` | `string` | Name of the broadcast. |
| `preview_text` | `string` | The preview text of the email. |
| `reply_to` | `any[]` | The email addresses to which replies should be sent. |
| `scheduled_at` | `string` | Timestamp indicating when the broadcast is scheduled to be sent. |
| `segment_id` | `string | null` | Unique identifier of the segment this broadcast will be sent to. |
| `send` | `boolean` | Whether to send the broadcast immediately or keep it as a draft. |
| `sent_at` | `string` | Timestamp indicating when the broadcast was sent. |
| `status` | `string` | The status of the broadcast. |
| `subject` | `string` | The subject line of the email. |
| `text` | `string | null` | The plain text version of the broadcast content. |
| `topic_id` | `string | null` | The topic ID that the broadcast is scoped to. |

#### Example: Load

```ts
const broadcast = await client.Broadcast().load({ id: 'broadcast_id' })
```

#### Example: List

```ts
const broadcasts = await client.Broadcast().list()
```

#### Example: Create

```ts
const broadcast = await client.Broadcast().create({
})
```


### Contact

Create an instance: `const contact = client.Contact()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audience_id` | `string` | Unique identifier of the audience to which the contact belongs. |
| `created_at` | `string` | Timestamp indicating when the contact was created. |
| `email` | `string` | Email address of the contact. |
| `first_name` | `string | null` | First name of the contact. |
| `id` | `string` | Unique identifier for the contact. |
| `last_name` | `string | null` | Last name of the contact. |
| `object` | `string` | Type of the response object. |
| `properties` | `Record<string, any>` | A map of custom property keys and values. |
| `segments` | `any[]` | Array of segment IDs to add the contact to. |
| `topics` | `any[]` | Array of topic subscriptions for the contact. |
| `unsubscribed` | `boolean` | Indicates if the contact is unsubscribed. |

#### Example: Load

```ts
const contact = await client.Contact().load({ id: 'contact_id' })
```

#### Example: List

```ts
const contacts = await client.Contact().list()
```

#### Example: Create

```ts
const contact = await client.Contact().create({
})
```


### ContactImport

Create an instance: `const contact_import = client.ContactImport()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `string | null` | Timestamp indicating when the contact import completed. |
| `counts` | `Record<string, any>` |  |
| `created_at` | `string` | Timestamp indicating when the contact import was created. |
| `id` | `string` | Unique identifier for the contact import. |
| `object` | `string` | Type of the response object. |
| `status` | `string` | Current status of the contact import. |

#### Example: List

```ts
const contact_imports = await client.ContactImport().list()
```


### ContactImportResponseSuccess

Create an instance: `const contact_import_response_success = client.ContactImportResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `string | null` | Timestamp indicating when the contact import completed. |
| `counts` | `Record<string, any>` |  |
| `created_at` | `string` | Timestamp indicating when the contact import was created. |
| `id` | `string` | Unique identifier for the contact import. |
| `object` | `string` | Type of the response object. |
| `status` | `string` | Current status of the contact import. |

#### Example: Load

```ts
const contact_import_response_success = await client.ContactImportResponseSuccess().load({ id: 'contact_import_response_success_id' })
```


### ContactProperty

Create an instance: `const contact_property = client.ContactProperty()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the contact property was created. |
| `fallback_value` | `any` | The default value when the property is not set for a contact. |
| `id` | `string` | The ID of the contact property. |
| `key` | `string` | The property key. |
| `object` | `string` | The object type. |
| `type` | `string` | The property type. |

#### Example: Load

```ts
const contact_property = await client.ContactProperty().load({ id: 'contact_property_id' })
```

#### Example: List

```ts
const contact_propertys = await client.ContactProperty().list()
```

#### Example: Create

```ts
const contact_property = await client.ContactProperty().create({
})
```


### ContactTopicsResponseSuccess

Create an instance: `const contact_topics_response_success = client.ContactTopicsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |

#### Example: List

```ts
const contact_topics_response_successs = await client.ContactTopicsResponseSuccess().list({ id: "example" })
```


### CreateBatchEmail

Create an instance: `const create_batch_email = client.CreateBatchEmail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `any[]` |  |

#### Example: Create

```ts
const create_batch_email = await client.CreateBatchEmail().create({
})
```


### CreateContactImportResponseSuccess

Create an instance: `const create_contact_import_response_success = client.CreateContactImportResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```ts
const create_contact_import_response_success = await client.CreateContactImportResponseSuccess().create({
})
```


### Domain

Create an instance: `const domain = client.Domain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `Record<string, any>` | Configure the domain capabilities for sending and receiving emails. |
| `click_tracking` | `boolean` | Whether click tracking is enabled for this domain. |
| `created_at` | `string` | The date and time the domain was created. |
| `custom_return_path` | `string` | For advanced use cases, choose a subdomain for the Return-Path address. |
| `id` | `string` | The ID of the domain. |
| `name` | `string` | The name of the domain. |
| `object` | `string` | The type of object. |
| `open_tracking` | `boolean` | Whether open tracking is enabled for this domain. |
| `records` | `any[]` |  |
| `region` | `string` | The region where the domain is hosted. |
| `status` | `string` | The status of the domain. |
| `tls` | `string` | TLS mode. |
| `tracking_subdomain` | `string` | The subdomain used for click and open tracking. |

#### Example: Load

```ts
const domain = await client.Domain().load({ id: 'domain_id' })
```

#### Example: List

```ts
const domains = await client.Domain().list()
```

#### Example: Create

```ts
const domain = await client.Domain().create({
})
```


### DomainClaim

Create an instance: `const domain_claim = client.DomainClaim()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocked_reason` | `string | null` | Why the claim is currently blocked, if applicable. |
| `click_tracking` | `boolean` | Track clicks within the body of each HTML email. |
| `created_at` | `string` | The date and time the claim was created. |
| `custom_return_path` | `string` | For advanced use cases, choose a subdomain for the Return-Path address. |
| `domain_id` | `string | null` | The ID of the placeholder domain created for the claim. |
| `expires_at` | `string` | The date and time the claim expires if not verified. |
| `failure_reason` | `string | null` | Why the claim failed, if applicable. |
| `id` | `string` | The ID of the claim. |
| `name` | `string` | The name of the domain being claimed. |
| `object` | `string` | The type of object. |
| `open_tracking` | `boolean` | Track the open rate of each email. |
| `record` | `Record<string, any>` | The TXT record to add to your DNS to prove ownership of the claimed domain. |
| `region` | `string | null` | The region where the claimed domain will send from. |
| `status` | `string` | The status of the claim. |
| `tracking_subdomain` | `string` | The subdomain to use for click and open tracking. |

#### Example: Load

```ts
const domain_claim = await client.DomainClaim().load({ id: 'domain_claim_id' })
```

#### Example: Create

```ts
const domain_claim = await client.DomainClaim().create({
})
```


### Email

Create an instance: `const email = client.Email()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `any[]` |  |
| `bcc` | `any[]` | The email addresses of the blind carbon copy recipients. |
| `cc` | `any[]` | The email addresses of the carbon copy recipients. |
| `created_at` | `string` | The date and time the email was created. |
| `from` | `string` | The email address of the sender. |
| `headers` | `Record<string, any>` | Custom headers to add to the email. |
| `html` | `string` | The HTML body of the email. |
| `id` | `string` | The ID of the email. |
| `last_event` | `string` | The status of the email. |
| `message_id` | `string` | The Message-ID header value of the email. |
| `object` | `string` | The type of object. |
| `reply_to` | `any[]` | The email addresses to which replies should be sent. |
| `scheduled_at` | `string` | Schedule email to be sent later. |
| `subject` | `string` | The subject line of the email. |
| `tags` | `any[]` |  |
| `template` | `any` |  |
| `text` | `string` | The plain text body of the email. |
| `to` | `any[]` | Recipient email address. |
| `topic_id` | `string` | The topic ID to scope the email to. |

#### Example: Load

```ts
const email = await client.Email().load({ id: 'email_id' })
```

#### Example: List

```ts
const emails = await client.Email().list()
```

#### Example: Create

```ts
const email = await client.Email().create({
})
```


### EmailsMetric

Create an instance: `const emails_metric = client.EmailsMetric()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `broadcast_id` | `string` | Present when `broadcast` is in `dimensions`. |
| `broadcast_name` | `string` | Present when `broadcast` is in `dimensions`. |
| `domain_id` | `string` | Present when `domain` is in `dimensions`. |
| `domain_name` | `string` | Present when `domain` is in `dimensions`. |
| `email_id` | `string` | Present when `email` is in `dimensions`. |
| `period` | `string` | Present when `period` is in `dimensions`. |

#### Example: List

```ts
const emails_metrics = await client.EmailsMetric().list()
```


### Event

Create an instance: `const event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The date and time the event was created. |
| `id` | `string` | The event ID. |
| `name` | `string` | The event name. |
| `object` | `string` | Type of the response object. |
| `schema` | `Record<string, any> | null` | A flat key/type map defining the event payload schema. |
| `updated_at` | `string | null` | The date and time the event was last updated. |

#### Example: Load

```ts
const event = await client.Event().load({ id: 'event_id' })
```

#### Example: List

```ts
const events = await client.Event().list()
```

#### Example: Create

```ts
const event = await client.Event().create({
})
```


### ListAttachment

Create an instance: `const list_attachment = client.ListAttachment()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_disposition` | `string` | How the attachment should be displayed. |
| `content_id` | `string` | The content ID for inline attachments. |
| `content_type` | `string` | The MIME type of the attachment. |
| `download_url` | `string` | Signed URL to download the attachment content. |
| `expires_at` | `string` | Timestamp when the download URL expires. |
| `filename` | `string` | The filename of the attachment. |
| `id` | `string` | The ID of the attachment. |
| `size` | `number` | Size of the attachment in bytes. |

#### Example: List

```ts
const list_attachments = await client.ListAttachment().list({ email_id: "example" })
```


### ListBroadcastClickedLinksResponseSuccess

Create an instance: `const list_broadcast_clicked_links_response_success = client.ListBroadcastClickedLinksResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clicks` | `number` | Total number of clicks on this URL. |
| `id` | `string` | An opaque cursor for this row, used only for pagination. |
| `unique_clicks` | `number` | Number of unique clicks on this URL. |
| `url` | `string` | The URL that was clicked. |

#### Example: List

```ts
const list_broadcast_clicked_links_response_successs = await client.ListBroadcastClickedLinksResponseSuccess().list({ broadcast_id: "example" })
```


### ListBroadcastRecipientsResponseSuccess

Create an instance: `const list_broadcast_recipients_response_success = client.ListBroadcastRecipientsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bounce_type` | `string` | The type of bounce. |
| `clicked_links` | `any[]` | The links this recipient clicked. |
| `contact_id` | `string | null` | The ID of the contact associated with this recipient, if one exists. |
| `count` | `number` | The number of times this recipient triggered the event. |
| `email` | `string` | The recipient's email address. |
| `id` | `string` | Opaque cursor identifying this row, used for pagination. |

#### Example: List

```ts
const list_broadcast_recipients_response_successs = await client.ListBroadcastRecipientsResponseSuccess().list({ broadcast_id: "example", type: "example" })
```


### ListContactSegmentsResponseSuccess

Create an instance: `const list_contact_segments_response_success = client.ListContactSegmentsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the contact was added to the segment. |
| `id` | `string` | Unique identifier for the segment. |
| `name` | `string` | Name of the segment. |

#### Example: List

```ts
const list_contact_segments_response_successs = await client.ListContactSegmentsResponseSuccess().list({ contact_id: "example" })
```


### ListContactsResponseSuccess

Create an instance: `const list_contacts_response_success = client.ListContactsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the contact was created. |
| `email` | `string` | Email address of the contact. |
| `first_name` | `string | null` | First name of the contact. |
| `id` | `string` | Unique identifier for the contact. |
| `last_name` | `string | null` | Last name of the contact. |
| `unsubscribed` | `boolean` | Indicates if the contact is unsubscribed. |

#### Example: List

```ts
const list_contacts_response_successs = await client.ListContactsResponseSuccess().list({ segment_id: "example" })
```


### ListReceivedEmail

Create an instance: `const list_received_email = client.ListReceivedEmail()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `any[]` | Array of attachments for this email. |
| `bcc` | `any[] | null` | The BCC recipients. |
| `cc` | `any[] | null` | The CC recipients. |
| `created_at` | `string` | Timestamp when the email was received. |
| `from` | `string` | The sender email address. |
| `id` | `string` | The ID of the received email. |
| `message_id` | `string` | The unique message ID from the email headers. |
| `reply_to` | `any[] | null` | The reply-to addresses. |
| `subject` | `string | null` | The email subject. |
| `to` | `any[]` | The recipient email addresses. |

#### Example: List

```ts
const list_received_emails = await client.ListReceivedEmail().list()
```


### ListWebhookEvent

Create an instance: `const list_webhook_event = client.ListWebhookEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the event was created. |
| `id` | `string` | The ID of the webhook event. |
| `status` | `string` | The delivery status of the event for this webhook. |
| `type` | `string` | The type of the event. |

#### Example: List

```ts
const list_webhook_events = await client.ListWebhookEvent().list({ webhook_id: "example" })
```


### ListWebhookEventAttempt

Create an instance: `const list_webhook_event_attempt = client.ListWebhookEventAttempt()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `http_status_code` | `number` | The HTTP status code returned by the webhook endpoint. |
| `id` | `string` | The ID of the webhook event attempt. |
| `response` | `string` | The response body returned by the webhook endpoint. |
| `sent_at` | `string` | Timestamp indicating when the attempt was sent. |

#### Example: List

```ts
const list_webhook_event_attempts = await client.ListWebhookEventAttempt().list({ event_id: "example", webhook_id: "example" })
```


### Log

Create an instance: `const log = client.Log()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The date the log was created. |
| `endpoint` | `string` | The API endpoint that was called. |
| `id` | `string` | The log ID. |
| `method` | `string` | The HTTP method used. |
| `object` | `string` | Type of the response object. |
| `request_body` | `Record<string, any> | null` | The request body sent to the API. |
| `response_body` | `Record<string, any> | null` | The response body returned by the API. |
| `response_status` | `number` | The HTTP status code of the response. |
| `user_agent` | `string | null` | The user agent of the request. |

#### Example: Load

```ts
const log = await client.Log().load({ id: 'log_id' })
```

#### Example: List

```ts
const logs = await client.Log().list()
```


### OAuthGrant

Create an instance: `const o_auth_grant = client.OAuthGrant()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `Record<string, any>` | The OAuth client the grant was issued to. |
| `client_id` | `string` | The ID of the OAuth client the grant was issued to. |
| `created_at` | `string` | The date and time the OAuth grant was created. |
| `id` | `string` | The ID of the OAuth grant. |
| `revoked_at` | `string | null` | The date and time the OAuth grant was revoked, or null if it is still active. |
| `revoked_reason` | `string | null` | The reason the OAuth grant was revoked, or null if it is still active. |
| `scopes` | `any[]` | The scopes granted to the OAuth client. |

#### Example: List

```ts
const o_auth_grants = await client.OAuthGrant().list()
```


### ReceivedEmail

Create an instance: `const received_email = client.ReceivedEmail()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `any[]` | Array of attachments. |
| `bcc` | `any[] | null` | The BCC recipients. |
| `cc` | `any[] | null` | The CC recipients. |
| `created_at` | `string` | Timestamp when the email was received. |
| `from` | `string` | The sender email address. |
| `headers` | `Record<string, any> | null` | The email headers. |
| `html` | `string | null` | The HTML content of the email. |
| `id` | `string` | The ID of the received email. |
| `message_id` | `string` | The unique message ID from the email headers. |
| `object` | `string` | The type of object. |
| `received_for` | `any[]` | The recipient addresses the email was forwarded for, taken from the `for` clause of the message's `Received` headers. |
| `reply_to` | `any[] | null` | The reply-to addresses. |
| `subject` | `string` | The email subject. |
| `text` | `string | null` | The plain text content of the email. |
| `to` | `any[]` | The recipient email addresses. |

#### Example: Load

```ts
const received_email = await client.ReceivedEmail().load({ email_id: 'email_id' })
```


### RemoveAudienceResponseSuccess

Create an instance: `const remove_audience_response_success = client.RemoveAudienceResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### RemoveBroadcastResponseSuccess

Create an instance: `const remove_broadcast_response_success = client.RemoveBroadcastResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### RemoveContactFromSegmentResponseSuccess

Create an instance: `const remove_contact_from_segment_response_success = client.RemoveContactFromSegmentResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### RemoveContactPropertyResponseSuccess

Create an instance: `const remove_contact_property_response_success = client.RemoveContactPropertyResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### RemoveContactResponseSuccess

Create an instance: `const remove_contact_response_success = client.RemoveContactResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### RemoveEvent

Create an instance: `const remove_event = client.RemoveEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### RemoveSegmentResponseSuccess

Create an instance: `const remove_segment_response_success = client.RemoveSegmentResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audience_id` | `string` | The ID of the audience this segment belongs to. |
| `created_at` | `string` | Timestamp indicating when the segment was created. |
| `filter` | `Record<string, any>` | Filter conditions for the segment. |
| `id` | `string` | Unique identifier for the segment. |
| `name` | `string` | The name of the segment. |

#### Example: List

```ts
const remove_segment_response_successs = await client.RemoveSegmentResponseSuccess().list()
```

#### Example: Create

```ts
const remove_segment_response_success = await client.RemoveSegmentResponseSuccess().create({
  name: 'example_name',
})
```


### RemoveSuppressionResponseSuccess

Create an instance: `const remove_suppression_response_success = client.RemoveSuppressionResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the suppression was created. |
| `email` | `string` | Email address to suppress. |
| `id` | `string` | Unique identifier for the suppression. |
| `origin` | `string` | Origin of the suppression. |
| `source_id` | `string` | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

#### Example: List

```ts
const remove_suppression_response_successs = await client.RemoveSuppressionResponseSuccess().list()
```

#### Example: Create

```ts
const remove_suppression_response_success = await client.RemoveSuppressionResponseSuccess().create({
  email: 'example_email',
})
```


### RemoveTemplateResponseSuccess

Create an instance: `const remove_template_response_success = client.RemoveTemplateResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` | The alias of the template. |
| `created_at` | `string` | Timestamp indicating when the template was created. |
| `from` | `string` | Sender email address. |
| `html` | `string` | The HTML version of the template. |
| `id` | `string` | The ID of the template. |
| `name` | `string` | The name of the template. |
| `published_at` | `string | null` | Timestamp indicating when the template was published. |
| `reply_to` | `any[]` | Reply-to email addresses. |
| `status` | `string` | The publication status of the template. |
| `subject` | `string` | Email subject. |
| `text` | `string` | The plain text version of the template. |
| `updated_at` | `string` | Timestamp indicating when the template was last updated. |
| `variables` | `any[]` |  |

#### Example: List

```ts
const remove_template_response_successs = await client.RemoveTemplateResponseSuccess().list()
```

#### Example: Create

```ts
const remove_template_response_success = await client.RemoveTemplateResponseSuccess().create({
  html: 'example_html',
  name: 'example_name',
})
```


### RemoveTopicResponseSuccess

Create an instance: `const remove_topic_response_success = client.RemoveTopicResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the topic was created. |
| `default_subscription` | `string` | The default subscription status for the topic. |
| `description` | `string` | A description of the topic. |
| `id` | `string` | Unique identifier for the topic. |
| `name` | `string` | The name of the topic. |
| `visibility` | `string` | The visibility of the topic. |

#### Example: List

```ts
const remove_topic_response_successs = await client.RemoveTopicResponseSuccess().list()
```

#### Example: Create

```ts
const remove_topic_response_success = await client.RemoveTopicResponseSuccess().create({
  default_subscription: 'example_default_subscription',
  name: 'example_name',
})
```


### RetrievedAttachment

Create an instance: `const retrieved_attachment = client.RetrievedAttachment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_disposition` | `string` | How the attachment should be displayed. |
| `content_id` | `string` | The content ID for inline attachments. |
| `content_type` | `string` | The MIME type of the attachment. |
| `download_url` | `string` | Signed URL to download the attachment content. |
| `expires_at` | `string` | Timestamp when the download URL expires. |
| `filename` | `string` | The filename of the attachment. |
| `id` | `string` | The ID of the attachment. |
| `object` | `string` | The type of object. |
| `size` | `number` | Size of the attachment in bytes. |

#### Example: Load

```ts
const retrieved_attachment = await client.RetrievedAttachment().load({ id: 'retrieved_attachment_id' })
```


### RevokeOAuthGrant

Create an instance: `const revoke_o_auth_grant = client.RevokeOAuthGrant()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |


### Rotate

Create an instance: `const rotate = client.Rotate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the webhook. |
| `object` | `string` | The type of object. |
| `signing_secret` | `string` | The new secret key used to verify webhook payloads. |

#### Example: Create

```ts
const rotate = await client.Rotate().create({
  webhook_id: 'example_webhook_id',
})
```


### Segment

Create an instance: `const segment = client.Segment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audience_id` | `string` | The ID of the audience this segment belongs to. |
| `created_at` | `string` | Timestamp indicating when the segment was created. |
| `filter` | `Record<string, any>` | Filter conditions for the segment. |
| `id` | `string` | The ID of the segment. |
| `name` | `string` | The name of the segment. |
| `object` | `string` | The object type. |

#### Example: Load

```ts
const segment = await client.Segment().load({ id: 'segment_id' })
```


### Suppression

Create an instance: `const suppression = client.Suppression()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the suppression was created. |
| `email` | `string` | Email address that is suppressed. |
| `id` | `string` | Unique identifier for the suppression. |
| `object` | `string` | Type of the response object. |
| `origin` | `string` | Origin of the suppression. |
| `source_id` | `string` | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

#### Example: Load

```ts
const suppression = await client.Suppression().load({ id: 'suppression_id' })
```


### Template

Create an instance: `const template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` | The alias of the template. |
| `created_at` | `string` | Timestamp indicating when the template was created. |
| `current_version_id` | `string` | The ID of the current version of the template. |
| `from` | `string` | Sender email address. |
| `has_unpublished_versions` | `boolean` | Indicates whether the template has unpublished versions. |
| `html` | `string` | The HTML version of the template. |
| `id` | `string` | The ID of the template. |
| `name` | `string` | The name of the template. |
| `object` | `string` | The type of object. |
| `published_at` | `string | null` | Timestamp indicating when the template was published. |
| `reply_to` | `any[] | null` | Reply-to email addresses. |
| `status` | `string` | The publication status of the template. |
| `subject` | `string` | Email subject. |
| `text` | `string` | The plain text version of the template. |
| `updated_at` | `string` | Timestamp indicating when the template was last updated. |
| `variables` | `any[]` |  |

#### Example: Load

```ts
const template = await client.Template().load({ id: 'template_id' })
```

#### Example: Create

```ts
const template = await client.Template().create({
  id: 'example_id',
})
```


### Topic

Create an instance: `const topic = client.Topic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the topic was created. |
| `default_subscription` | `string` | The default subscription status for the topic. |
| `description` | `string` | A description of the topic. |
| `id` | `string` | The ID of the topic. |
| `name` | `string` | The name of the topic. |
| `object` | `string` | The object type. |
| `visibility` | `string` | The visibility of the topic. |

#### Example: Load

```ts
const topic = await client.Topic().load({ id: 'topic_id' })
```


### UpdateApiKey

Create an instance: `const update_api_key = client.UpdateApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the API key. |
| `name` | `string` | The API key name. |
| `object` | `string` | The type of object. |


### UpdateBroadcastResponseSuccess

Create an instance: `const update_broadcast_response_success = client.UpdateBroadcastResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audience_id` | `string` | Use `segment_id` instead. |
| `from` | `string` | The email address of the sender. |
| `html` | `string` | The HTML version of the message. |
| `id` | `string` | The ID of the broadcast. |
| `name` | `string` | Name of the broadcast. |
| `object` | `string` | The object type of the response. |
| `preview_text` | `string` | The preview text of the email. |
| `reply_to` | `any[]` | The email addresses to which replies should be sent. |
| `segment_id` | `string` | Unique identifier of the segment this broadcast will be sent to. |
| `subject` | `string` | The subject line of the email. |
| `text` | `string` | The plain text version of the message. |
| `topic_id` | `string` | The topic ID that the broadcast will be scoped to. |


### UpdateContactPropertyResponseSuccess

Create an instance: `const update_contact_property_response_success = client.UpdateContactPropertyResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fallback_value` | `any` | The default value to use when the property is not set for a contact. |
| `id` | `string` | The ID of the contact property. |
| `object` | `string` | The object type. |


### UpdateContactResponseSuccess

Create an instance: `const update_contact_response_success = client.UpdateContactResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` | Email address of the contact. |
| `first_name` | `string` | First name of the contact. |
| `id` | `string` | Unique identifier for the updated contact. |
| `last_name` | `string` | Last name of the contact. |
| `object` | `string` | Type of the response object. |
| `properties` | `Record<string, any>` | A map of custom property keys and values to update. |
| `unsubscribed` | `boolean` | The Contact's global subscription status. |


### UpdateContactTopicsResponseSuccess

Create an instance: `const update_contact_topics_response_success = client.UpdateContactTopicsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contact_id` | `string` | The ID of the contact. |
| `object` | `string` | The object type. |
| `topics` | `any[]` | Array of updated topic subscriptions. |


### UpdateDomainResponseSuccess

Create an instance: `const update_domain_response_success = client.UpdateDomainResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `Record<string, any>` | Configure the domain capabilities for sending and receiving emails. |
| `click_tracking` | `boolean` | Track clicks within the body of each HTML email. |
| `id` | `string` | The ID of the updated domain. |
| `object` | `string` | The object type representing the updated domain. |
| `open_tracking` | `boolean` | Track the open rate of each email. |
| `tls` | `string` | enforced | opportunistic. |
| `tracking_subdomain` | `string` | The subdomain to use for click and open tracking. |


### UpdateEmailOption

Create an instance: `const update_email_option = client.UpdateEmailOption()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `scheduled_at` | `string` | Schedule email to be sent later. |


### UpdateEvent

Create an instance: `const update_event = client.UpdateEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the updated event. |
| `object` | `string` | Type of the response object. |
| `schema` | `Record<string, any> | null` | A flat key/type map defining the event payload schema. |


### UpdateSegmentResponseSuccess

Create an instance: `const update_segment_response_success = client.UpdateSegmentResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | The ID of the segment. |
| `name` | `string` | The name of the segment. |
| `object` | `string` | The object type. |


### UpdateTemplateResponseSuccess

Create an instance: `const update_template_response_success = client.UpdateTemplateResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `string` | The alias of the template. |
| `from` | `string` | Sender email address. |
| `html` | `string` | The HTML version of the template. |
| `id` | `string` | The ID of the template. |
| `name` | `string` | The name of the template. |
| `object` | `string` | The object type of the response. |
| `reply_to` | `any[]` | Reply-to email addresses. |
| `subject` | `string` | Email subject. |
| `text` | `string` | The plain text version of the template. |
| `variables` | `any[]` |  |


### UpdateTopicResponseSuccess

Create an instance: `const update_topic_response_success = client.UpdateTopicResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | A description of the topic. |
| `id` | `string` | The ID of the topic. |
| `name` | `string` | The name of the topic. |
| `object` | `string` | The object type. |
| `visibility` | `string` | The visibility of the topic. |


### UpdateWebhook

Create an instance: `const update_webhook = client.UpdateWebhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the webhook was created. |
| `endpoint` | `string` | The URL where webhook events will be sent. |
| `events` | `any[]` | Array of event types to subscribe to. |
| `id` | `string` | The ID of the updated webhook. |
| `object` | `string` | The type of object. |
| `status` | `string` | The status of the webhook. |

#### Example: List

```ts
const update_webhooks = await client.UpdateWebhook().list()
```

#### Example: Create

```ts
const update_webhook = await client.UpdateWebhook().create({
  endpoint: 'example_endpoint',
  events: [],
})
```


### Usage

Create an instance: `const usage = client.Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_credits` | `Record<string, any>` |  |
| `automation_runs` | `Record<string, any>` |  |
| `broadcasts` | `Record<string, any>` |  |
| `contacts` | `Record<string, any>` |  |
| `domains` | `Record<string, any>` |  |
| `emails` | `Record<string, any>` |  |
| `object` | `string` | The type of object. |
| `rate_limit` | `Record<string, any>` |  |
| `segments` | `Record<string, any>` |  |

#### Example: Load

```ts
const usage = await client.Usage().load()
```


### Webhook

Create an instance: `const webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the webhook was created. |
| `endpoint` | `string` | The URL where webhook events are sent. |
| `events` | `any[] | null` | Array of event types subscribed to. |
| `id` | `string` | The ID of the webhook. |
| `object` | `string` | The type of object. |
| `signing_secret` | `string` | The secret key used to verify webhook payloads. |
| `status` | `string` | The status of the webhook. |

#### Example: Load

```ts
const webhook = await client.Webhook().load({ id: 'webhook_id' })
```


### WebhookEvent

Create an instance: `const webhook_event = client.WebhookEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | Timestamp indicating when the event was created. |
| `id` | `string` | The ID of the webhook event. |
| `next_attempt_at` | `string | null` | Timestamp of the next scheduled delivery attempt, or null when none is scheduled. |
| `object` | `string` | The type of object. |
| `payload` | `Record<string, any>` | The event payload sent to the webhook endpoint. |
| `status` | `string` | The delivery status of the event for this webhook. |
| `type` | `string` | The type of the event. |

#### Example: Load

```ts
const webhook_event = await client.WebhookEvent().load({ id: 'webhook_event_id', webhook_id: 'webhook_id' })
```

#### Example: Create

```ts
const webhook_event = await client.WebhookEvent().create({
  event_id: 'example_event_id',
  webhook_id: 'example_webhook_id',
})
```

## Features

This SDK ships 1 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`test`](#test) | Test transport |

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.


## Open types

3 fields are carried as open values rather than typed structures.
This follows from the API definition, not from a gap in this SDK: the
definition describes them with untagged unions —
`oneOf`/`anyOf` branches with no `discriminator` — so it never states which
variant a given value is. Nothing can select a branch reliably, so the SDK
passes the value through unchanged rather than assert a shape the API does not
guarantee.

| Entity | Field | Variants | Nesting |
| --- | --- | --- | --- |
| `remove_template_response_success` | `variables` | 5 | 3 levels |
| `template` | `variables` | 5 | 3 levels |
| `update_template_response_success` | `variables` | 5 | 3 levels |

These values round-trip unchanged — read them, modify them, send them back. If
the API adds a `discriminator` to the definition, regenerating will type them.
Every other field is typed normally.

## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
resend/
├── src/
│   ├── ResendSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { ResendSDK } from '@abhinavgautam01/resend-sdk'
```

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const contactimport = client.ContactImport()
await contactimport.list()

// contactimport.data() now returns the contactimport data from the last `list`
// contactimport.match() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
