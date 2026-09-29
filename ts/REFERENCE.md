# Resend TypeScript SDK Reference

Complete API reference for the Resend TypeScript SDK.


## ResendSDK

### Constructor

```ts
new ResendSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ResendSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = ResendSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `ResendSDK` instance in test mode.


### Instance Methods

#### `AddContactToSegmentResponseSuccess(data?: object)`

Create a new `AddContactToSegmentResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AddContactToSegmentResponseSuccessEntity` instance.

#### `ApiKey(data?: object)`

Create a new `ApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ApiKeyEntity` instance.

#### `Audience(data?: object)`

Create a new `Audience` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AudienceEntity` instance.

#### `Automation(data?: object)`

Create a new `Automation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationEntity` instance.

#### `AutomationRun(data?: object)`

Create a new `AutomationRun` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationRunEntity` instance.

#### `AutomationRunListItem(data?: object)`

Create a new `AutomationRunListItem` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AutomationRunListItemEntity` instance.

#### `BatchAddSuppressionsResponseSuccess(data?: object)`

Create a new `BatchAddSuppressionsResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BatchAddSuppressionsResponseSuccessEntity` instance.

#### `BatchRemoveSuppressionsResponseSuccess(data?: object)`

Create a new `BatchRemoveSuppressionsResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BatchRemoveSuppressionsResponseSuccessEntity` instance.

#### `Broadcast(data?: object)`

Create a new `Broadcast` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `BroadcastEntity` instance.

#### `Contact(data?: object)`

Create a new `Contact` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContactEntity` instance.

#### `ContactImport(data?: object)`

Create a new `ContactImport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContactImportEntity` instance.

#### `ContactImportResponseSuccess(data?: object)`

Create a new `ContactImportResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContactImportResponseSuccessEntity` instance.

#### `ContactProperty(data?: object)`

Create a new `ContactProperty` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContactPropertyEntity` instance.

#### `ContactTopicsResponseSuccess(data?: object)`

Create a new `ContactTopicsResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContactTopicsResponseSuccessEntity` instance.

#### `CreateBatchEmail(data?: object)`

Create a new `CreateBatchEmail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateBatchEmailEntity` instance.

#### `CreateContactImportResponseSuccess(data?: object)`

Create a new `CreateContactImportResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateContactImportResponseSuccessEntity` instance.

#### `Domain(data?: object)`

Create a new `Domain` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainEntity` instance.

#### `DomainClaim(data?: object)`

Create a new `DomainClaim` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DomainClaimEntity` instance.

#### `Email(data?: object)`

Create a new `Email` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailEntity` instance.

#### `EmailsMetric(data?: object)`

Create a new `EmailsMetric` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmailsMetricEntity` instance.

#### `Event(data?: object)`

Create a new `Event` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventEntity` instance.

#### `ListAttachment(data?: object)`

Create a new `ListAttachment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListAttachmentEntity` instance.

#### `ListBroadcastClickedLinksResponseSuccess(data?: object)`

Create a new `ListBroadcastClickedLinksResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListBroadcastClickedLinksResponseSuccessEntity` instance.

#### `ListBroadcastRecipientsResponseSuccess(data?: object)`

Create a new `ListBroadcastRecipientsResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListBroadcastRecipientsResponseSuccessEntity` instance.

#### `ListContactSegmentsResponseSuccess(data?: object)`

Create a new `ListContactSegmentsResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListContactSegmentsResponseSuccessEntity` instance.

#### `ListContactsResponseSuccess(data?: object)`

Create a new `ListContactsResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListContactsResponseSuccessEntity` instance.

#### `ListReceivedEmail(data?: object)`

Create a new `ListReceivedEmail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListReceivedEmailEntity` instance.

#### `ListWebhookEvent(data?: object)`

Create a new `ListWebhookEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListWebhookEventEntity` instance.

#### `ListWebhookEventAttempt(data?: object)`

Create a new `ListWebhookEventAttempt` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListWebhookEventAttemptEntity` instance.

#### `Log(data?: object)`

Create a new `Log` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `LogEntity` instance.

#### `OAuthGrant(data?: object)`

Create a new `OAuthGrant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `OAuthGrantEntity` instance.

#### `ReceivedEmail(data?: object)`

Create a new `ReceivedEmail` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReceivedEmailEntity` instance.

#### `RemoveAudienceResponseSuccess(data?: object)`

Create a new `RemoveAudienceResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveAudienceResponseSuccessEntity` instance.

#### `RemoveBroadcastResponseSuccess(data?: object)`

Create a new `RemoveBroadcastResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveBroadcastResponseSuccessEntity` instance.

#### `RemoveContactFromSegmentResponseSuccess(data?: object)`

Create a new `RemoveContactFromSegmentResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveContactFromSegmentResponseSuccessEntity` instance.

#### `RemoveContactPropertyResponseSuccess(data?: object)`

Create a new `RemoveContactPropertyResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveContactPropertyResponseSuccessEntity` instance.

#### `RemoveContactResponseSuccess(data?: object)`

Create a new `RemoveContactResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveContactResponseSuccessEntity` instance.

#### `RemoveEvent(data?: object)`

Create a new `RemoveEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveEventEntity` instance.

#### `RemoveSegmentResponseSuccess(data?: object)`

Create a new `RemoveSegmentResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveSegmentResponseSuccessEntity` instance.

#### `RemoveSuppressionResponseSuccess(data?: object)`

Create a new `RemoveSuppressionResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveSuppressionResponseSuccessEntity` instance.

#### `RemoveTemplateResponseSuccess(data?: object)`

Create a new `RemoveTemplateResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveTemplateResponseSuccessEntity` instance.

#### `RemoveTopicResponseSuccess(data?: object)`

Create a new `RemoveTopicResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RemoveTopicResponseSuccessEntity` instance.

#### `RetrievedAttachment(data?: object)`

Create a new `RetrievedAttachment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RetrievedAttachmentEntity` instance.

#### `RevokeOAuthGrant(data?: object)`

Create a new `RevokeOAuthGrant` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RevokeOAuthGrantEntity` instance.

#### `Rotate(data?: object)`

Create a new `Rotate` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RotateEntity` instance.

#### `Segment(data?: object)`

Create a new `Segment` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SegmentEntity` instance.

#### `Suppression(data?: object)`

Create a new `Suppression` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SuppressionEntity` instance.

#### `Template(data?: object)`

Create a new `Template` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TemplateEntity` instance.

#### `Topic(data?: object)`

Create a new `Topic` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `TopicEntity` instance.

#### `UpdateApiKey(data?: object)`

Create a new `UpdateApiKey` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateApiKeyEntity` instance.

#### `UpdateBroadcastResponseSuccess(data?: object)`

Create a new `UpdateBroadcastResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateBroadcastResponseSuccessEntity` instance.

#### `UpdateContactPropertyResponseSuccess(data?: object)`

Create a new `UpdateContactPropertyResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateContactPropertyResponseSuccessEntity` instance.

#### `UpdateContactResponseSuccess(data?: object)`

Create a new `UpdateContactResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateContactResponseSuccessEntity` instance.

#### `UpdateContactTopicsResponseSuccess(data?: object)`

Create a new `UpdateContactTopicsResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateContactTopicsResponseSuccessEntity` instance.

#### `UpdateDomainResponseSuccess(data?: object)`

Create a new `UpdateDomainResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateDomainResponseSuccessEntity` instance.

#### `UpdateEmailOption(data?: object)`

Create a new `UpdateEmailOption` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateEmailOptionEntity` instance.

#### `UpdateEvent(data?: object)`

Create a new `UpdateEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateEventEntity` instance.

#### `UpdateSegmentResponseSuccess(data?: object)`

Create a new `UpdateSegmentResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateSegmentResponseSuccessEntity` instance.

#### `UpdateTemplateResponseSuccess(data?: object)`

Create a new `UpdateTemplateResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateTemplateResponseSuccessEntity` instance.

#### `UpdateTopicResponseSuccess(data?: object)`

Create a new `UpdateTopicResponseSuccess` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateTopicResponseSuccessEntity` instance.

#### `UpdateWebhook(data?: object)`

Create a new `UpdateWebhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UpdateWebhookEntity` instance.

#### `Usage(data?: object)`

Create a new `Usage` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `UsageEntity` instance.

#### `Webhook(data?: object)`

Create a new `Webhook` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEntity` instance.

#### `WebhookEvent(data?: object)`

Create a new `WebhookEvent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEventEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `ResendSDK.test()`.

**Returns:** `ResendSDK` instance in test mode.


---

## AddContactToSegmentResponseSuccessEntity

```ts
const add_contact_to_segment_response_success = client.AddContactToSegmentResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact_id` | `string` | No | The ID of the contact. |
| `object` | `string` | No | The object type. |
| `segment_id` | `string` | No | The ID of the segment. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.AddContactToSegmentResponseSuccess().create({
  contact_id: 'example_contact_id',
  segment_id: 'example_segment_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AddContactToSegmentResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ApiKeyEntity

```ts
const api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The date and time the API key was created. |
| `domain_id` | `string` | No | Restrict an API key to send emails only from a specific domain. |
| `id` | `string` | No | The ID of the API key. |
| `last_used_at` | `string | null` | No | The date and time the API key was last used. |
| `name` | `string` | Yes | The API key name. |
| `permission` | `string` | No | The API key can have full access to Resend’s API or be only restricted to send emails. |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `domain_id` | - | - | - |
| `id` | - | - | - |
| `last_used_at` | - | - | - |
| `name` | Yes | - | - |
| `permission` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ApiKey().create({
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ApiKey().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.ApiKey().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AudienceEntity

```ts
const audience = client.Audience()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The date that the object was created. |
| `id` | `string` | No | The ID of the audience. |
| `name` | `string` | No | The name of the audience. |
| `object` | `string` | No | The object of the audience. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | Yes |
| `object` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Audience().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Audience().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Audience().load({ id: 'audience_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AudienceEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationEntity

```ts
const automation = client.Automation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connections` | `any[]` | No | The connections between steps in the active version of the automation. |
| `created_at` | `string` | No | The date and time the automation was created. |
| `id` | `string` | No | The ID of the automation. |
| `name` | `string` | No | The name of the automation. |
| `object` | `string` | No | Type of the response object. |
| `status` | `string` | No | The current status of the automation. |
| `steps` | `any[]` | No | The steps in the active version of the automation. |
| `updated_at` | `string` | No | The date and time the automation was last updated. |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `connections` | - | - | Yes | - | - |
| `created_at` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `name` | - | - | Yes | - | - |
| `object` | - | - | - | - | - |
| `status` | - | - | - | - | - |
| `steps` | - | - | Yes | - | - |
| `updated_at` | - | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `duplicate` | `/automations/{automation_id}/duplicate` | `client.Automation().create({ $action: 'duplicate', ... })` |
| `stop` | `/automations/{automation_id}/stop` | `client.Automation().create({ $action: 'stop', ... })` |

An action returns that action's OWN response, which is not necessarily a
Automation record — check the API definition for its shape.

```ts
const result = await client.Automation().create({
  $action: 'duplicate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Automation().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Automation().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Automation().load({ id: 'automation_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Automation().remove({ id: 'automation_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.Automation().update({
  id: 'automation_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationRunEntity

```ts
const automation_run = client.AutomationRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `string | null` | No | The date and time the run completed. |
| `created_at` | `string` | No | The date and time the run was created. |
| `id` | `string` | No | The ID of the automation run. |
| `object` | `string` | No | Type of the response object. |
| `started_at` | `string | null` | No | The date and time the run started. |
| `status` | `string` | No | The current status of the automation run. |
| `steps` | `any[]` | No | The steps executed in this run, sorted in graph order. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AutomationRun().load({ id: 'automation_run_id', automation_id: 'automation_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationRunEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AutomationRunListItemEntity

```ts
const automation_run_list_item = client.AutomationRunListItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `string | null` | No | The date and time the run completed. |
| `created_at` | `string` | No | The date and time the run was created. |
| `id` | `string` | No | The ID of the automation run. |
| `started_at` | `string | null` | No | The date and time the run started. |
| `status` | `string` | No | The current status of the automation run. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `runs` | `/automations/{automation_id}/runs` | `client.AutomationRunListItem().list({ $action: 'runs', ... })` |

An action returns that action's OWN response, which is not necessarily a
AutomationRunListItem record — check the API definition for its shape.

```ts
const result = await client.AutomationRunListItem().list({
  $action: 'runs',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AutomationRunListItem().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AutomationRunListItemEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BatchAddSuppressionsResponseSuccessEntity

```ts
const batch_add_suppressions_response_success = client.BatchAddSuppressionsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `any[]` | Yes | Email addresses to suppress. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BatchAddSuppressionsResponseSuccess().create({
  emails: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BatchAddSuppressionsResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BatchRemoveSuppressionsResponseSuccessEntity

```ts
const batch_remove_suppressions_response_success = client.BatchRemoveSuppressionsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No | Array containing the removed suppressions. |
| `emails` | `any[]` | No | Email addresses to remove from the suppression list. |
| `ids` | `any[]` | No | Suppression IDs to remove from the suppression list. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.BatchRemoveSuppressionsResponseSuccess().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BatchRemoveSuppressionsResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## BroadcastEntity

```ts
const broadcast = client.Broadcast()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audience_id` | `string | null` | No | Deprecated: use `segment_id` instead. |
| `created_at` | `string` | No | Timestamp indicating when the broadcast was created. |
| `from` | `string` | No | The email address of the sender. |
| `html` | `string | null` | No | The HTML version of the broadcast content. |
| `id` | `string` | No | Unique identifier for the broadcast. |
| `name` | `string` | No | Name of the broadcast. |
| `preview_text` | `string` | No | The preview text of the email. |
| `reply_to` | `any[]` | No | The email addresses to which replies should be sent. |
| `scheduled_at` | `string` | No | Timestamp indicating when the broadcast is scheduled to be sent. |
| `segment_id` | `string | null` | No | Unique identifier of the segment this broadcast will be sent to. |
| `send` | `boolean` | No | Whether to send the broadcast immediately or keep it as a draft. |
| `sent_at` | `string` | No | Timestamp indicating when the broadcast was sent. |
| `status` | `string` | No | The status of the broadcast. |
| `subject` | `string` | No | The subject line of the email. |
| `text` | `string | null` | No | The plain text version of the broadcast content. |
| `topic_id` | `string | null` | No | The topic ID that the broadcast is scoped to. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `audience_id` | - | - | - |
| `created_at` | - | - | - |
| `from` | - | - | Yes |
| `html` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | - |
| `preview_text` | - | - | - |
| `reply_to` | - | - | - |
| `scheduled_at` | - | - | - |
| `segment_id` | - | - | Yes |
| `send` | - | - | - |
| `sent_at` | - | - | - |
| `status` | - | - | - |
| `subject` | - | - | Yes |
| `text` | - | - | - |
| `topic_id` | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/broadcasts/{id}/cancel` | `client.Broadcast().create({ $action: 'cancel', ... })` |
| `duplicate` | `/broadcasts/{id}/duplicate` | `client.Broadcast().create({ $action: 'duplicate', ... })` |
| `send` | `/broadcasts/{id}/send` | `client.Broadcast().create({ $action: 'send', ... })` |

An action returns that action's OWN response, which is not necessarily a
Broadcast record — check the API definition for its shape.

```ts
const result = await client.Broadcast().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Broadcast().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Broadcast().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Broadcast().load({ id: 'broadcast_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `BroadcastEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContactEntity

```ts
const contact = client.Contact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audience_id` | `string` | No | Unique identifier of the audience to which the contact belongs. |
| `created_at` | `string` | No | Timestamp indicating when the contact was created. |
| `email` | `string` | No | Email address of the contact. |
| `first_name` | `string | null` | No | First name of the contact. |
| `id` | `string` | No | Unique identifier for the contact. |
| `last_name` | `string | null` | No | Last name of the contact. |
| `object` | `string` | No | Type of the response object. |
| `properties` | `Record<string, any>` | No | A map of custom property keys and values. |
| `segments` | `any[]` | No | Array of segment IDs to add the contact to. |
| `topics` | `any[]` | No | Array of topic subscriptions for the contact. |
| `unsubscribed` | `boolean` | No | Indicates if the contact is unsubscribed. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `audience_id` | - | - | - |
| `created_at` | - | - | - |
| `email` | - | - | Yes |
| `first_name` | - | - | - |
| `id` | - | - | - |
| `last_name` | - | - | - |
| `object` | - | - | - |
| `properties` | - | - | - |
| `segments` | - | - | - |
| `topics` | - | - | - |
| `unsubscribed` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Contact().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Contact().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Contact().load({ id: 'contact_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContactEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContactImportEntity

```ts
const contact_import = client.ContactImport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `string | null` | No | Timestamp indicating when the contact import completed. |
| `counts` | `Record<string, any>` | No |  |
| `created_at` | `string` | No | Timestamp indicating when the contact import was created. |
| `id` | `string` | No | Unique identifier for the contact import. |
| `object` | `string` | No | Type of the response object. |
| `status` | `string` | No | Current status of the contact import. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContactImport().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContactImportEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContactImportResponseSuccessEntity

```ts
const contact_import_response_success = client.ContactImportResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `string | null` | No | Timestamp indicating when the contact import completed. |
| `counts` | `Record<string, any>` | No |  |
| `created_at` | `string` | No | Timestamp indicating when the contact import was created. |
| `id` | `string` | No | Unique identifier for the contact import. |
| `object` | `string` | No | Type of the response object. |
| `status` | `string` | No | Current status of the contact import. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ContactImportResponseSuccess().load({ id: 'contact_import_response_success_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContactImportResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContactPropertyEntity

```ts
const contact_property = client.ContactProperty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the contact property was created. |
| `fallback_value` | `any` | No | The default value when the property is not set for a contact. |
| `id` | `string` | No | The ID of the contact property. |
| `key` | `string` | No | The property key. |
| `object` | `string` | No | The object type. |
| `type` | `string` | No | The property type. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `fallback_value` | - | - | - |
| `id` | - | - | - |
| `key` | - | - | Yes |
| `object` | - | - | - |
| `type` | - | - | Yes |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContactProperty().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContactProperty().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ContactProperty().load({ id: 'contact_property_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContactPropertyEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContactTopicsResponseSuccessEntity

```ts
const contact_topics_response_success = client.ContactTopicsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `topics` | `/contacts/{contact_id}/topics` | `client.ContactTopicsResponseSuccess().list({ $action: 'topics', ... })` |

An action returns that action's OWN response, which is not necessarily a
ContactTopicsResponseSuccess record — check the API definition for its shape.

```ts
const result = await client.ContactTopicsResponseSuccess().list({
  $action: 'topics',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContactTopicsResponseSuccess().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContactTopicsResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateBatchEmailEntity

```ts
const create_batch_email = client.CreateBatchEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `any[]` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateBatchEmail().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateBatchEmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateContactImportResponseSuccessEntity

```ts
const create_contact_import_response_success = client.CreateContactImportResponseSuccess()
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateContactImportResponseSuccess().create({
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateContactImportResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainEntity

```ts
const domain = client.Domain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `Record<string, any>` | No | Configure the domain capabilities for sending and receiving emails. |
| `click_tracking` | `boolean` | No | Whether click tracking is enabled for this domain. |
| `created_at` | `string` | No | The date and time the domain was created. |
| `custom_return_path` | `string` | No | For advanced use cases, choose a subdomain for the Return-Path address. |
| `id` | `string` | No | The ID of the domain. |
| `name` | `string` | No | The name of the domain. |
| `object` | `string` | No | The type of object. |
| `open_tracking` | `boolean` | No | Whether open tracking is enabled for this domain. |
| `records` | `any[]` | No |  |
| `region` | `string` | No | The region where the domain is hosted. |
| `status` | `string` | No | The status of the domain. |
| `tls` | `string` | No | TLS mode. |
| `tracking_subdomain` | `string` | No | The subdomain used for click and open tracking. |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `capabilities` | - | - | - | - |
| `click_tracking` | - | - | - | - |
| `created_at` | - | - | - | - |
| `custom_return_path` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | Yes | - |
| `object` | - | - | - | - |
| `open_tracking` | - | - | - | - |
| `records` | - | - | - | - |
| `region` | - | - | - | - |
| `status` | - | - | - | - |
| `tls` | - | - | - | - |
| `tracking_subdomain` | - | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `verify` | `/domains/{domain_id}/verify` | `client.Domain().create({ $action: 'verify', ... })` |

An action returns that action's OWN response, which is not necessarily a
Domain record — check the API definition for its shape.

```ts
const result = await client.Domain().create({
  $action: 'verify',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Domain().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Domain().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Domain().load({ id: 'domain_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Domain().remove({ id: 'domain_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DomainClaimEntity

```ts
const domain_claim = client.DomainClaim()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocked_reason` | `string | null` | No | Why the claim is currently blocked, if applicable. |
| `click_tracking` | `boolean` | No | Track clicks within the body of each HTML email. |
| `created_at` | `string` | No | The date and time the claim was created. |
| `custom_return_path` | `string` | No | For advanced use cases, choose a subdomain for the Return-Path address. |
| `domain_id` | `string | null` | No | The ID of the placeholder domain created for the claim. |
| `expires_at` | `string` | No | The date and time the claim expires if not verified. |
| `failure_reason` | `string | null` | No | Why the claim failed, if applicable. |
| `id` | `string` | No | The ID of the claim. |
| `name` | `string` | No | The name of the domain being claimed. |
| `object` | `string` | No | The type of object. |
| `open_tracking` | `boolean` | No | Track the open rate of each email. |
| `record` | `Record<string, any>` | No | The TXT record to add to your DNS to prove ownership of the claimed domain. |
| `region` | `string | null` | No | The region where the claimed domain will send from. |
| `status` | `string` | No | The status of the claim. |
| `tracking_subdomain` | `string` | No | The subdomain to use for click and open tracking. |

### Field Usage by Operation

| Field | load | create |
| --- | --- | --- |
| `blocked_reason` | - | - |
| `click_tracking` | - | - |
| `created_at` | - | - |
| `custom_return_path` | - | - |
| `domain_id` | - | - |
| `expires_at` | - | - |
| `failure_reason` | - | - |
| `id` | - | - |
| `name` | - | Yes |
| `object` | - | - |
| `open_tracking` | - | - |
| `record` | - | - |
| `region` | - | - |
| `status` | - | - |
| `tracking_subdomain` | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DomainClaim().create({
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.DomainClaim().load({ id: 'domain_claim_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DomainClaimEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailEntity

```ts
const email = client.Email()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `any[]` | No |  |
| `bcc` | `any[]` | No | The email addresses of the blind carbon copy recipients. |
| `cc` | `any[]` | No | The email addresses of the carbon copy recipients. |
| `created_at` | `string` | No | The date and time the email was created. |
| `from` | `string` | No | The email address of the sender. |
| `headers` | `Record<string, any>` | No | Custom headers to add to the email. |
| `html` | `string` | No | The HTML body of the email. |
| `id` | `string` | No | The ID of the email. |
| `last_event` | `string` | No | The status of the email. |
| `message_id` | `string` | No | The Message-ID header value of the email. |
| `object` | `string` | No | The type of object. |
| `reply_to` | `any[]` | No | The email addresses to which replies should be sent. |
| `scheduled_at` | `string` | No | Schedule email to be sent later. |
| `subject` | `string` | No | The subject line of the email. |
| `tags` | `any[]` | No |  |
| `template` | `any` | No |  |
| `text` | `string` | No | The plain text body of the email. |
| `to` | `any[]` | No | Recipient email address. |
| `topic_id` | `string` | No | The topic ID to scope the email to. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `attachments` | - | - | - |
| `bcc` | - | - | - |
| `cc` | - | - | - |
| `created_at` | - | - | - |
| `from` | - | - | Yes |
| `headers` | - | - | - |
| `html` | - | - | - |
| `id` | - | - | - |
| `last_event` | - | - | - |
| `message_id` | - | - | - |
| `object` | - | - | - |
| `reply_to` | - | - | - |
| `scheduled_at` | - | - | - |
| `subject` | - | - | Yes |
| `tags` | - | - | - |
| `template` | - | - | - |
| `text` | - | - | - |
| `to` | - | - | Yes |
| `topic_id` | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/emails/{email_id}/cancel` | `client.Email().create({ $action: 'cancel', ... })` |
| `share` | `/emails/{email_id}/share` | `client.Email().create({ $action: 'share', ... })` |

An action returns that action's OWN response, which is not necessarily a
Email record — check the API definition for its shape.

```ts
const result = await client.Email().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Email().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Email().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Email().load({ id: 'email_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmailsMetricEntity

```ts
const emails_metric = client.EmailsMetric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `broadcast_id` | `string` | No | Present when `broadcast` is in `dimensions`. |
| `broadcast_name` | `string` | No | Present when `broadcast` is in `dimensions`. |
| `domain_id` | `string` | No | Present when `domain` is in `dimensions`. |
| `domain_name` | `string` | No | Present when `domain` is in `dimensions`. |
| `email_id` | `string` | No | Present when `email` is in `dimensions`. |
| `period` | `string` | No | Present when `period` is in `dimensions`. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EmailsMetric().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmailsMetricEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventEntity

```ts
const event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The date and time the event was created. |
| `id` | `string` | No | The event ID. |
| `name` | `string` | No | The event name. |
| `object` | `string` | No | Type of the response object. |
| `schema` | `Record<string, any> | null` | No | A flat key/type map defining the event payload schema. |
| `updated_at` | `string | null` | No | The date and time the event was last updated. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | Yes |
| `object` | - | - | - |
| `schema` | - | - | - |
| `updated_at` | - | - | - |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `send` | `/events/send` | `client.Event().create({ $action: 'send', ... })` |

An action returns that action's OWN response, which is not necessarily a
Event record — check the API definition for its shape.

```ts
const result = await client.Event().create({
  $action: 'send',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Event().create({
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Event().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Event().load({ id: 'event_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListAttachmentEntity

```ts
const list_attachment = client.ListAttachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_disposition` | `string` | No | How the attachment should be displayed. |
| `content_id` | `string` | No | The content ID for inline attachments. |
| `content_type` | `string` | No | The MIME type of the attachment. |
| `download_url` | `string` | No | Signed URL to download the attachment content. |
| `expires_at` | `string` | No | Timestamp when the download URL expires. |
| `filename` | `string` | No | The filename of the attachment. |
| `id` | `string` | No | The ID of the attachment. |
| `size` | `number` | No | Size of the attachment in bytes. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListAttachment().list({ email_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListAttachmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListBroadcastClickedLinksResponseSuccessEntity

```ts
const list_broadcast_clicked_links_response_success = client.ListBroadcastClickedLinksResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clicks` | `number` | No | Total number of clicks on this URL. |
| `id` | `string` | No | An opaque cursor for this row, used only for pagination. |
| `unique_clicks` | `number` | No | Number of unique clicks on this URL. |
| `url` | `string` | No | The URL that was clicked. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListBroadcastClickedLinksResponseSuccess().list({ broadcast_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListBroadcastClickedLinksResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListBroadcastRecipientsResponseSuccessEntity

```ts
const list_broadcast_recipients_response_success = client.ListBroadcastRecipientsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bounce_type` | `string` | No | The type of bounce. |
| `clicked_links` | `any[]` | No | The links this recipient clicked. |
| `contact_id` | `string | null` | No | The ID of the contact associated with this recipient, if one exists. |
| `count` | `number` | No | The number of times this recipient triggered the event. |
| `email` | `string` | No | The recipient's email address. |
| `id` | `string` | No | Opaque cursor identifying this row, used for pagination. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListBroadcastRecipientsResponseSuccess().list({ broadcast_id: "example", type: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListBroadcastRecipientsResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListContactSegmentsResponseSuccessEntity

```ts
const list_contact_segments_response_success = client.ListContactSegmentsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the contact was added to the segment. |
| `id` | `string` | No | Unique identifier for the segment. |
| `name` | `string` | No | Name of the segment. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListContactSegmentsResponseSuccess().list({ contact_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListContactSegmentsResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListContactsResponseSuccessEntity

```ts
const list_contacts_response_success = client.ListContactsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the contact was created. |
| `email` | `string` | No | Email address of the contact. |
| `first_name` | `string | null` | No | First name of the contact. |
| `id` | `string` | No | Unique identifier for the contact. |
| `last_name` | `string | null` | No | Last name of the contact. |
| `unsubscribed` | `boolean` | No | Indicates if the contact is unsubscribed. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListContactsResponseSuccess().list({ segment_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListContactsResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListReceivedEmailEntity

```ts
const list_received_email = client.ListReceivedEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `any[]` | No | Array of attachments for this email. |
| `bcc` | `any[] | null` | No | The BCC recipients. |
| `cc` | `any[] | null` | No | The CC recipients. |
| `created_at` | `string` | No | Timestamp when the email was received. |
| `from` | `string` | No | The sender email address. |
| `id` | `string` | No | The ID of the received email. |
| `message_id` | `string` | No | The unique message ID from the email headers. |
| `reply_to` | `any[] | null` | No | The reply-to addresses. |
| `subject` | `string | null` | No | The email subject. |
| `to` | `any[]` | No | The recipient email addresses. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListReceivedEmail().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListReceivedEmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListWebhookEventEntity

```ts
const list_webhook_event = client.ListWebhookEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the event was created. |
| `id` | `string` | No | The ID of the webhook event. |
| `status` | `string` | No | The delivery status of the event for this webhook. |
| `type` | `string` | No | The type of the event. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListWebhookEvent().list({ webhook_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListWebhookEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListWebhookEventAttemptEntity

```ts
const list_webhook_event_attempt = client.ListWebhookEventAttempt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `http_status_code` | `number` | No | The HTTP status code returned by the webhook endpoint. |
| `id` | `string` | No | The ID of the webhook event attempt. |
| `response` | `string` | No | The response body returned by the webhook endpoint. |
| `sent_at` | `string` | No | Timestamp indicating when the attempt was sent. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ListWebhookEventAttempt().list({ event_id: "example", webhook_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListWebhookEventAttemptEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## LogEntity

```ts
const log = client.Log()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | The date the log was created. |
| `endpoint` | `string` | No | The API endpoint that was called. |
| `id` | `string` | No | The log ID. |
| `method` | `string` | No | The HTTP method used. |
| `object` | `string` | No | Type of the response object. |
| `request_body` | `Record<string, any> | null` | No | The request body sent to the API. |
| `response_body` | `Record<string, any> | null` | No | The response body returned by the API. |
| `response_status` | `number` | No | The HTTP status code of the response. |
| `user_agent` | `string | null` | No | The user agent of the request. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Log().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Log().load({ id: 'log_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `LogEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## OAuthGrantEntity

```ts
const o_auth_grant = client.OAuthGrant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `Record<string, any>` | No | The OAuth client the grant was issued to. |
| `client_id` | `string` | No | The ID of the OAuth client the grant was issued to. |
| `created_at` | `string` | No | The date and time the OAuth grant was created. |
| `id` | `string` | No | The ID of the OAuth grant. |
| `revoked_at` | `string | null` | No | The date and time the OAuth grant was revoked, or null if it is still active. |
| `revoked_reason` | `string | null` | No | The reason the OAuth grant was revoked, or null if it is still active. |
| `scopes` | `any[]` | No | The scopes granted to the OAuth client. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.OAuthGrant().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `OAuthGrantEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ReceivedEmailEntity

```ts
const received_email = client.ReceivedEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `any[]` | No | Array of attachments. |
| `bcc` | `any[] | null` | No | The BCC recipients. |
| `cc` | `any[] | null` | No | The CC recipients. |
| `created_at` | `string` | No | Timestamp when the email was received. |
| `from` | `string` | No | The sender email address. |
| `headers` | `Record<string, any> | null` | No | The email headers. |
| `html` | `string | null` | No | The HTML content of the email. |
| `id` | `string` | No | The ID of the received email. |
| `message_id` | `string` | No | The unique message ID from the email headers. |
| `object` | `string` | No | The type of object. |
| `received_for` | `any[]` | No | The recipient addresses the email was forwarded for, taken from the `for` clause of the message's `Received` headers. |
| `reply_to` | `any[] | null` | No | The reply-to addresses. |
| `subject` | `string` | No | The email subject. |
| `text` | `string | null` | No | The plain text content of the email. |
| `to` | `any[]` | No | The recipient email addresses. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.ReceivedEmail().load({ email_id: 'email_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ReceivedEmailEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveAudienceResponseSuccessEntity

```ts
const remove_audience_response_success = client.RemoveAudienceResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveAudienceResponseSuccess().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveAudienceResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveBroadcastResponseSuccessEntity

```ts
const remove_broadcast_response_success = client.RemoveBroadcastResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveBroadcastResponseSuccess().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveBroadcastResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveContactFromSegmentResponseSuccessEntity

```ts
const remove_contact_from_segment_response_success = client.RemoveContactFromSegmentResponseSuccess()
```

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveContactFromSegmentResponseSuccess().remove({ contact_id: 'contact_id', segment_id: 'segment_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveContactFromSegmentResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveContactPropertyResponseSuccessEntity

```ts
const remove_contact_property_response_success = client.RemoveContactPropertyResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveContactPropertyResponseSuccess().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveContactPropertyResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveContactResponseSuccessEntity

```ts
const remove_contact_response_success = client.RemoveContactResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveContactResponseSuccess().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveContactResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveEventEntity

```ts
const remove_event = client.RemoveEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveEvent().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveSegmentResponseSuccessEntity

```ts
const remove_segment_response_success = client.RemoveSegmentResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audience_id` | `string` | No | The ID of the audience this segment belongs to. |
| `created_at` | `string` | No | Timestamp indicating when the segment was created. |
| `filter` | `Record<string, any>` | No | Filter conditions for the segment. |
| `id` | `string` | No | Unique identifier for the segment. |
| `name` | `string` | Yes | The name of the segment. |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `audience_id` | - | - | - |
| `created_at` | - | - | - |
| `filter` | - | - | - |
| `id` | - | - | - |
| `name` | Yes | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RemoveSegmentResponseSuccess().create({
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RemoveSegmentResponseSuccess().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveSegmentResponseSuccess().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveSegmentResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveSuppressionResponseSuccessEntity

```ts
const remove_suppression_response_success = client.RemoveSuppressionResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the suppression was created. |
| `email` | `string` | Yes | Email address to suppress. |
| `id` | `string` | No | Unique identifier for the suppression. |
| `origin` | `string` | No | Origin of the suppression. |
| `source_id` | `string` | No | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `email` | Yes | - | - |
| `id` | - | - | - |
| `origin` | - | - | - |
| `source_id` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RemoveSuppressionResponseSuccess().create({
  email: 'example_email',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RemoveSuppressionResponseSuccess().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveSuppressionResponseSuccess().remove({ suppression: 'suppression' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveSuppressionResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveTemplateResponseSuccessEntity

```ts
const remove_template_response_success = client.RemoveTemplateResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | No | The alias of the template. |
| `created_at` | `string` | No | Timestamp indicating when the template was created. |
| `from` | `string` | No | Sender email address. |
| `html` | `string` | Yes | The HTML version of the template. |
| `id` | `string` | No | The ID of the template. |
| `name` | `string` | Yes | The name of the template. |
| `published_at` | `string | null` | No | Timestamp indicating when the template was published. |
| `reply_to` | `any[]` | No | Reply-to email addresses. |
| `status` | `string` | No | The publication status of the template. |
| `subject` | `string` | No | Email subject. |
| `text` | `string` | No | The plain text version of the template. |
| `updated_at` | `string` | No | Timestamp indicating when the template was last updated. |
| `variables` | `any[]` | No |  |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `alias` | - | - | - |
| `created_at` | - | - | - |
| `from` | - | - | - |
| `html` | - | - | - |
| `id` | - | - | - |
| `name` | Yes | - | - |
| `published_at` | - | - | - |
| `reply_to` | - | - | - |
| `status` | - | - | - |
| `subject` | - | - | - |
| `text` | - | - | - |
| `updated_at` | - | - | - |
| `variables` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RemoveTemplateResponseSuccess().create({
  html: 'example_html',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RemoveTemplateResponseSuccess().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveTemplateResponseSuccess().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveTemplateResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RemoveTopicResponseSuccessEntity

```ts
const remove_topic_response_success = client.RemoveTopicResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the topic was created. |
| `default_subscription` | `string` | Yes | The default subscription status for the topic. |
| `description` | `string` | No | A description of the topic. |
| `id` | `string` | No | Unique identifier for the topic. |
| `name` | `string` | Yes | The name of the topic. |
| `visibility` | `string` | No | The visibility of the topic. |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `default_subscription` | Yes | - | - |
| `description` | - | - | - |
| `id` | - | - | - |
| `name` | Yes | - | - |
| `visibility` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.RemoveTopicResponseSuccess().create({
  default_subscription: 'example_default_subscription',
  name: 'example_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RemoveTopicResponseSuccess().list()
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RemoveTopicResponseSuccess().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RemoveTopicResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RetrievedAttachmentEntity

```ts
const retrieved_attachment = client.RetrievedAttachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_disposition` | `string` | No | How the attachment should be displayed. |
| `content_id` | `string` | No | The content ID for inline attachments. |
| `content_type` | `string` | No | The MIME type of the attachment. |
| `download_url` | `string` | No | Signed URL to download the attachment content. |
| `expires_at` | `string` | No | Timestamp when the download URL expires. |
| `filename` | `string` | No | The filename of the attachment. |
| `id` | `string` | No | The ID of the attachment. |
| `object` | `string` | No | The type of object. |
| `size` | `number` | No | Size of the attachment in bytes. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.RetrievedAttachment().load({ id: 'retrieved_attachment_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RetrievedAttachmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RevokeOAuthGrantEntity

```ts
const revoke_o_auth_grant = client.RevokeOAuthGrant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.RevokeOAuthGrant().remove({ id: 'id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RevokeOAuthGrantEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RotateEntity

```ts
const rotate = client.Rotate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | The ID of the webhook. |
| `object` | `string` | No | The type of object. |
| `signing_secret` | `string` | No | The new secret key used to verify webhook payloads. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Rotate().create({
  webhook_id: 'example_webhook_id',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RotateEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SegmentEntity

```ts
const segment = client.Segment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audience_id` | `string` | No | The ID of the audience this segment belongs to. |
| `created_at` | `string` | No | Timestamp indicating when the segment was created. |
| `filter` | `Record<string, any>` | No | Filter conditions for the segment. |
| `id` | `string` | No | The ID of the segment. |
| `name` | `string` | No | The name of the segment. |
| `object` | `string` | No | The object type. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Segment().load({ id: 'segment_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SegmentEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SuppressionEntity

```ts
const suppression = client.Suppression()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the suppression was created. |
| `email` | `string` | No | Email address that is suppressed. |
| `id` | `string` | No | Unique identifier for the suppression. |
| `object` | `string` | No | Type of the response object. |
| `origin` | `string` | No | Origin of the suppression. |
| `source_id` | `string` | No | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Suppression().load({ id: 'suppression_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SuppressionEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TemplateEntity

```ts
const template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | No | The alias of the template. |
| `created_at` | `string` | No | Timestamp indicating when the template was created. |
| `current_version_id` | `string` | No | The ID of the current version of the template. |
| `from` | `string` | No | Sender email address. |
| `has_unpublished_versions` | `boolean` | No | Indicates whether the template has unpublished versions. |
| `html` | `string` | No | The HTML version of the template. |
| `id` | `string` | No | The ID of the template. |
| `name` | `string` | No | The name of the template. |
| `object` | `string` | No | The type of object. |
| `published_at` | `string | null` | No | Timestamp indicating when the template was published. |
| `reply_to` | `any[] | null` | No | Reply-to email addresses. |
| `status` | `string` | No | The publication status of the template. |
| `subject` | `string` | No | Email subject. |
| `text` | `string` | No | The plain text version of the template. |
| `updated_at` | `string` | No | Timestamp indicating when the template was last updated. |
| `variables` | `any[]` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `duplicate` | `/templates/{id}/duplicate` | `client.Template().create({ $action: 'duplicate', ... })` |
| `publish` | `/templates/{id}/publish` | `client.Template().create({ $action: 'publish', ... })` |

An action returns that action's OWN response, which is not necessarily a
Template record — check the API definition for its shape.

```ts
const result = await client.Template().create({
  $action: 'duplicate',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Template().create({
  id: 'example_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Template().load({ id: 'template_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TemplateEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## TopicEntity

```ts
const topic = client.Topic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the topic was created. |
| `default_subscription` | `string` | No | The default subscription status for the topic. |
| `description` | `string` | No | A description of the topic. |
| `id` | `string` | No | The ID of the topic. |
| `name` | `string` | No | The name of the topic. |
| `object` | `string` | No | The object type. |
| `visibility` | `string` | No | The visibility of the topic. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Topic().load({ id: 'topic_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `TopicEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateApiKeyEntity

```ts
const update_api_key = client.UpdateApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | The ID of the API key. |
| `name` | `string` | Yes | The API key name. |
| `object` | `string` | No | The type of object. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateApiKey().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateApiKeyEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateBroadcastResponseSuccessEntity

```ts
const update_broadcast_response_success = client.UpdateBroadcastResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audience_id` | `string` | No | Use `segment_id` instead. |
| `from` | `string` | No | The email address of the sender. |
| `html` | `string` | No | The HTML version of the message. |
| `id` | `string` | No | The ID of the broadcast. |
| `name` | `string` | No | Name of the broadcast. |
| `object` | `string` | No | The object type of the response. |
| `preview_text` | `string` | No | The preview text of the email. |
| `reply_to` | `any[]` | No | The email addresses to which replies should be sent. |
| `segment_id` | `string` | No | Unique identifier of the segment this broadcast will be sent to. |
| `subject` | `string` | No | The subject line of the email. |
| `text` | `string` | No | The plain text version of the message. |
| `topic_id` | `string` | No | The topic ID that the broadcast will be scoped to. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateBroadcastResponseSuccess().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateBroadcastResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateContactPropertyResponseSuccessEntity

```ts
const update_contact_property_response_success = client.UpdateContactPropertyResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fallback_value` | `any` | No | The default value to use when the property is not set for a contact. |
| `id` | `string` | No | The ID of the contact property. |
| `object` | `string` | No | The object type. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateContactPropertyResponseSuccess().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateContactPropertyResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateContactResponseSuccessEntity

```ts
const update_contact_response_success = client.UpdateContactResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No | Email address of the contact. |
| `first_name` | `string` | No | First name of the contact. |
| `id` | `string` | No | Unique identifier for the updated contact. |
| `last_name` | `string` | No | Last name of the contact. |
| `object` | `string` | No | Type of the response object. |
| `properties` | `Record<string, any>` | No | A map of custom property keys and values to update. |
| `unsubscribed` | `boolean` | No | The Contact's global subscription status. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateContactResponseSuccess().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateContactResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateContactTopicsResponseSuccessEntity

```ts
const update_contact_topics_response_success = client.UpdateContactTopicsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact_id` | `string` | No | The ID of the contact. |
| `object` | `string` | No | The object type. |
| `topics` | `any[]` | No | Array of updated topic subscriptions. |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `contact_id` | - |
| `object` | - |
| `topics` | Yes |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateContactTopicsResponseSuccess().update({
  contact_id: 'contact_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateContactTopicsResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateDomainResponseSuccessEntity

```ts
const update_domain_response_success = client.UpdateDomainResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `Record<string, any>` | No | Configure the domain capabilities for sending and receiving emails. |
| `click_tracking` | `boolean` | No | Track clicks within the body of each HTML email. |
| `id` | `string` | No | The ID of the updated domain. |
| `object` | `string` | No | The object type representing the updated domain. |
| `open_tracking` | `boolean` | No | Track the open rate of each email. |
| `tls` | `string` | No | enforced | opportunistic. |
| `tracking_subdomain` | `string` | No | The subdomain to use for click and open tracking. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateDomainResponseSuccess().update({
  domain_id: 'domain_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateDomainResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateEmailOptionEntity

```ts
const update_email_option = client.UpdateEmailOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `scheduled_at` | `string` | No | Schedule email to be sent later. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateEmailOption().update({
  email_id: 'email_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateEmailOptionEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateEventEntity

```ts
const update_event = client.UpdateEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | The ID of the updated event. |
| `object` | `string` | No | Type of the response object. |
| `schema` | `Record<string, any> | null` | Yes | A flat key/type map defining the event payload schema. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateEvent().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateSegmentResponseSuccessEntity

```ts
const update_segment_response_success = client.UpdateSegmentResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No | The ID of the segment. |
| `name` | `string` | Yes | The name of the segment. |
| `object` | `string` | No | The object type. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateSegmentResponseSuccess().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateSegmentResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateTemplateResponseSuccessEntity

```ts
const update_template_response_success = client.UpdateTemplateResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `string` | No | The alias of the template. |
| `from` | `string` | No | Sender email address. |
| `html` | `string` | No | The HTML version of the template. |
| `id` | `string` | No | The ID of the template. |
| `name` | `string` | No | The name of the template. |
| `object` | `string` | No | The object type of the response. |
| `reply_to` | `any[]` | No | Reply-to email addresses. |
| `subject` | `string` | No | Email subject. |
| `text` | `string` | No | The plain text version of the template. |
| `variables` | `any[]` | No |  |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateTemplateResponseSuccess().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateTemplateResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateTopicResponseSuccessEntity

```ts
const update_topic_response_success = client.UpdateTopicResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No | A description of the topic. |
| `id` | `string` | No | The ID of the topic. |
| `name` | `string` | No | The name of the topic. |
| `object` | `string` | No | The object type. |
| `visibility` | `string` | No | The visibility of the topic. |

### Operations

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateTopicResponseSuccess().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateTopicResponseSuccessEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UpdateWebhookEntity

```ts
const update_webhook = client.UpdateWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the webhook was created. |
| `endpoint` | `string` | Yes | The URL where webhook events will be sent. |
| `events` | `any[]` | Yes | Array of event types to subscribe to. |
| `id` | `string` | No | The ID of the updated webhook. |
| `object` | `string` | No | The type of object. |
| `status` | `string` | No | The status of the webhook. |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `endpoint` | Yes | - | Yes |
| `events` | Yes | - | Yes |
| `id` | - | - | - |
| `object` | - | - | - |
| `status` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.UpdateWebhook().create({
  endpoint: 'example_endpoint',
  events: [],
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.UpdateWebhook().list()
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

```ts
const result = await client.UpdateWebhook().update({
  id: 'id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UpdateWebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## UsageEntity

```ts
const usage = client.Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_credits` | `Record<string, any>` | No |  |
| `automation_runs` | `Record<string, any>` | No |  |
| `broadcasts` | `Record<string, any>` | No |  |
| `contacts` | `Record<string, any>` | No |  |
| `domains` | `Record<string, any>` | No |  |
| `emails` | `Record<string, any>` | No |  |
| `object` | `string` | No | The type of object. |
| `rate_limit` | `Record<string, any>` | No |  |
| `segments` | `Record<string, any>` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Usage().load()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `UsageEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEntity

```ts
const webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the webhook was created. |
| `endpoint` | `string` | No | The URL where webhook events are sent. |
| `events` | `any[] | null` | No | Array of event types subscribed to. |
| `id` | `string` | No | The ID of the webhook. |
| `object` | `string` | No | The type of object. |
| `signing_secret` | `string` | No | The secret key used to verify webhook payloads. |
| `status` | `string` | No | The status of the webhook. |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Webhook().load({ id: 'webhook_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Webhook().remove({ id: 'webhook_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEventEntity

```ts
const webhook_event = client.WebhookEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No | Timestamp indicating when the event was created. |
| `id` | `string` | No | The ID of the webhook event. |
| `next_attempt_at` | `string | null` | No | Timestamp of the next scheduled delivery attempt, or null when none is scheduled. |
| `object` | `string` | No | The type of object. |
| `payload` | `Record<string, any>` | No | The event payload sent to the webhook endpoint. |
| `status` | `string` | No | The delivery status of the event for this webhook. |
| `type` | `string` | No | The type of the event. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `replay` | `/webhooks/{webhook_id}/events/{event_id}/replay` | `client.WebhookEvent().create({ $action: 'replay', ... })` |

An action returns that action's OWN response, which is not necessarily a
WebhookEvent record — check the API definition for its shape.

```ts
const result = await client.WebhookEvent().create({
  $action: 'replay',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.WebhookEvent().create({
  event_id: 'example_event_id',
  webhook_id: 'example_webhook_id',
})
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.WebhookEvent().load({ id: 'webhook_event_id', webhook_id: 'webhook_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEventEntity` instance with the same client and
options.

#### `client()`

Return the parent `ResendSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```ts
const client = new ResendSDK({
  feature: {
    test: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

