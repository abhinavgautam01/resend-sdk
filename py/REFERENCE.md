# Resend Python SDK Reference

Complete API reference for the Resend Python SDK.


## ResendSDK

### Constructor

```python
from resend_sdk import ResendSDK

client = ResendSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ResendSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = ResendSDK.test()
```


### Instance Methods

#### `AddContactToSegmentResponseSuccess(data=None)`

Create a new `AddContactToSegmentResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `ApiKey(data=None)`

Create a new `ApiKeyEntity` instance. Pass `None` for no initial data.

#### `Audience(data=None)`

Create a new `AudienceEntity` instance. Pass `None` for no initial data.

#### `Automation(data=None)`

Create a new `AutomationEntity` instance. Pass `None` for no initial data.

#### `AutomationRun(data=None)`

Create a new `AutomationRunEntity` instance. Pass `None` for no initial data.

#### `AutomationRunListItem(data=None)`

Create a new `AutomationRunListItemEntity` instance. Pass `None` for no initial data.

#### `BatchAddSuppressionsResponseSuccess(data=None)`

Create a new `BatchAddSuppressionsResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `BatchRemoveSuppressionsResponseSuccess(data=None)`

Create a new `BatchRemoveSuppressionsResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `Broadcast(data=None)`

Create a new `BroadcastEntity` instance. Pass `None` for no initial data.

#### `Contact(data=None)`

Create a new `ContactEntity` instance. Pass `None` for no initial data.

#### `ContactImport(data=None)`

Create a new `ContactImportEntity` instance. Pass `None` for no initial data.

#### `ContactImportResponseSuccess(data=None)`

Create a new `ContactImportResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `ContactProperty(data=None)`

Create a new `ContactPropertyEntity` instance. Pass `None` for no initial data.

#### `ContactTopicsResponseSuccess(data=None)`

Create a new `ContactTopicsResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `CreateBatchEmail(data=None)`

Create a new `CreateBatchEmailEntity` instance. Pass `None` for no initial data.

#### `CreateContactImportResponseSuccess(data=None)`

Create a new `CreateContactImportResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `Domain(data=None)`

Create a new `DomainEntity` instance. Pass `None` for no initial data.

#### `DomainClaim(data=None)`

Create a new `DomainClaimEntity` instance. Pass `None` for no initial data.

#### `Email(data=None)`

Create a new `EmailEntity` instance. Pass `None` for no initial data.

#### `EmailsMetric(data=None)`

Create a new `EmailsMetricEntity` instance. Pass `None` for no initial data.

#### `Event(data=None)`

Create a new `EventEntity` instance. Pass `None` for no initial data.

#### `ListAttachment(data=None)`

Create a new `ListAttachmentEntity` instance. Pass `None` for no initial data.

#### `ListBroadcastClickedLinksResponseSuccess(data=None)`

Create a new `ListBroadcastClickedLinksResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `ListBroadcastRecipientsResponseSuccess(data=None)`

Create a new `ListBroadcastRecipientsResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `ListContactSegmentsResponseSuccess(data=None)`

Create a new `ListContactSegmentsResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `ListContactsResponseSuccess(data=None)`

Create a new `ListContactsResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `ListReceivedEmail(data=None)`

Create a new `ListReceivedEmailEntity` instance. Pass `None` for no initial data.

#### `ListWebhookEvent(data=None)`

Create a new `ListWebhookEventEntity` instance. Pass `None` for no initial data.

#### `ListWebhookEventAttempt(data=None)`

Create a new `ListWebhookEventAttemptEntity` instance. Pass `None` for no initial data.

#### `Log(data=None)`

Create a new `LogEntity` instance. Pass `None` for no initial data.

#### `OAuthGrant(data=None)`

Create a new `OAuthGrantEntity` instance. Pass `None` for no initial data.

#### `ReceivedEmail(data=None)`

Create a new `ReceivedEmailEntity` instance. Pass `None` for no initial data.

#### `RemoveAudienceResponseSuccess(data=None)`

Create a new `RemoveAudienceResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `RemoveBroadcastResponseSuccess(data=None)`

Create a new `RemoveBroadcastResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `RemoveContactFromSegmentResponseSuccess(data=None)`

Create a new `RemoveContactFromSegmentResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `RemoveContactPropertyResponseSuccess(data=None)`

Create a new `RemoveContactPropertyResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `RemoveContactResponseSuccess(data=None)`

Create a new `RemoveContactResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `RemoveEvent(data=None)`

Create a new `RemoveEventEntity` instance. Pass `None` for no initial data.

#### `RemoveSegmentResponseSuccess(data=None)`

Create a new `RemoveSegmentResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `RemoveSuppressionResponseSuccess(data=None)`

Create a new `RemoveSuppressionResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `RemoveTemplateResponseSuccess(data=None)`

Create a new `RemoveTemplateResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `RemoveTopicResponseSuccess(data=None)`

Create a new `RemoveTopicResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `RetrievedAttachment(data=None)`

Create a new `RetrievedAttachmentEntity` instance. Pass `None` for no initial data.

#### `RevokeOAuthGrant(data=None)`

Create a new `RevokeOAuthGrantEntity` instance. Pass `None` for no initial data.

#### `Rotate(data=None)`

Create a new `RotateEntity` instance. Pass `None` for no initial data.

#### `Segment(data=None)`

Create a new `SegmentEntity` instance. Pass `None` for no initial data.

#### `Suppression(data=None)`

Create a new `SuppressionEntity` instance. Pass `None` for no initial data.

#### `Template(data=None)`

Create a new `TemplateEntity` instance. Pass `None` for no initial data.

#### `Topic(data=None)`

Create a new `TopicEntity` instance. Pass `None` for no initial data.

#### `UpdateApiKey(data=None)`

Create a new `UpdateApiKeyEntity` instance. Pass `None` for no initial data.

#### `UpdateBroadcastResponseSuccess(data=None)`

Create a new `UpdateBroadcastResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `UpdateContactPropertyResponseSuccess(data=None)`

Create a new `UpdateContactPropertyResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `UpdateContactResponseSuccess(data=None)`

Create a new `UpdateContactResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `UpdateContactTopicsResponseSuccess(data=None)`

Create a new `UpdateContactTopicsResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `UpdateDomainResponseSuccess(data=None)`

Create a new `UpdateDomainResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `UpdateEmailOption(data=None)`

Create a new `UpdateEmailOptionEntity` instance. Pass `None` for no initial data.

#### `UpdateEvent(data=None)`

Create a new `UpdateEventEntity` instance. Pass `None` for no initial data.

#### `UpdateSegmentResponseSuccess(data=None)`

Create a new `UpdateSegmentResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `UpdateTemplateResponseSuccess(data=None)`

Create a new `UpdateTemplateResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `UpdateTopicResponseSuccess(data=None)`

Create a new `UpdateTopicResponseSuccessEntity` instance. Pass `None` for no initial data.

#### `UpdateWebhook(data=None)`

Create a new `UpdateWebhookEntity` instance. Pass `None` for no initial data.

#### `Usage(data=None)`

Create a new `UsageEntity` instance. Pass `None` for no initial data.

#### `Webhook(data=None)`

Create a new `WebhookEntity` instance. Pass `None` for no initial data.

#### `WebhookEvent(data=None)`

Create a new `WebhookEventEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AddContactToSegmentResponseSuccessEntity

```python
add_contact_to_segment_response_success = client.AddContactToSegmentResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact_id` | `str` | No | The ID of the contact. |
| `object` | `str` | No | The object type. |
| `segment_id` | `str` | No | The ID of the segment. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AddContactToSegmentResponseSuccess().create({
    "contact_id": "example_contact_id",  # str
    "segment_id": "example_segment_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AddContactToSegmentResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ApiKeyEntity

```python
api_key = client.ApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | The date and time the API key was created. |
| `domain_id` | `str` | No | Restrict an API key to send emails only from a specific domain. |
| `id` | `str` | No | The ID of the API key. |
| `last_used_at` | `str | None` | No | The date and time the API key was last used. |
| `name` | `str` | Yes | The API key name. |
| `permission` | `str` | No | The API key can have full access to Resend’s API or be only restricted to send emails. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ApiKey().create({
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ApiKey().list()
for api_key in results:
    print(api_key)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.ApiKey().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ApiKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AudienceEntity

```python
audience = client.Audience()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | The date that the object was created. |
| `id` | `str` | No | The ID of the audience. |
| `name` | `str` | No | The name of the audience. |
| `object` | `str` | No | The object of the audience. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | Yes |
| `object` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Audience().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Audience().list()
for audience in results:
    print(audience)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Audience().load({"id": "audience_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AudienceEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutomationEntity

```python
automation = client.Automation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `connections` | `list` | No | The connections between steps in the active version of the automation. |
| `created_at` | `str` | No | The date and time the automation was created. |
| `id` | `str` | No | The ID of the automation. |
| `name` | `str` | No | The name of the automation. |
| `object` | `str` | No | Type of the response object. |
| `status` | `str` | No | The current status of the automation. |
| `steps` | `list` | No | The steps in the active version of the automation. |
| `updated_at` | `str` | No | The date and time the automation was last updated. |

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

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Automation().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Automation().list()
for automation in results:
    print(automation)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Automation().load({"id": "automation_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Automation().remove({"id": "automation_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Automation().update({
    "id": "automation_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutomationRunEntity

```python
automation_run = client.AutomationRun()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `str | None` | No | The date and time the run completed. |
| `created_at` | `str` | No | The date and time the run was created. |
| `id` | `str` | No | The ID of the automation run. |
| `object` | `str` | No | Type of the response object. |
| `started_at` | `str | None` | No | The date and time the run started. |
| `status` | `str` | No | The current status of the automation run. |
| `steps` | `list` | No | The steps executed in this run, sorted in graph order. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AutomationRun().load({"id": "automation_run_id", "automation_id": "automation_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationRunEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AutomationRunListItemEntity

```python
automation_run_list_item = client.AutomationRunListItem()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `str | None` | No | The date and time the run completed. |
| `created_at` | `str` | No | The date and time the run was created. |
| `id` | `str` | No | The ID of the automation run. |
| `started_at` | `str | None` | No | The date and time the run started. |
| `status` | `str` | No | The current status of the automation run. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AutomationRunListItem().list({"id": "example"})
for automation_run_list_item in results:
    print(automation_run_list_item)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AutomationRunListItemEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BatchAddSuppressionsResponseSuccessEntity

```python
batch_add_suppressions_response_success = client.BatchAddSuppressionsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `emails` | `list` | Yes | Email addresses to suppress. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BatchAddSuppressionsResponseSuccess().create({
    "emails": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchAddSuppressionsResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BatchRemoveSuppressionsResponseSuccessEntity

```python
batch_remove_suppressions_response_success = client.BatchRemoveSuppressionsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No | Array containing the removed suppressions. |
| `emails` | `list` | No | Email addresses to remove from the suppression list. |
| `ids` | `list` | No | Suppression IDs to remove from the suppression list. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.BatchRemoveSuppressionsResponseSuccess().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BatchRemoveSuppressionsResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## BroadcastEntity

```python
broadcast = client.Broadcast()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audience_id` | `str | None` | No | Deprecated: use `segment_id` instead. |
| `created_at` | `str` | No | Timestamp indicating when the broadcast was created. |
| `from` | `str` | No | The email address of the sender. |
| `html` | `str | None` | No | The HTML version of the broadcast content. |
| `id` | `str` | No | Unique identifier for the broadcast. |
| `name` | `str` | No | Name of the broadcast. |
| `preview_text` | `str` | No | The preview text of the email. |
| `reply_to` | `list` | No | The email addresses to which replies should be sent. |
| `scheduled_at` | `str` | No | Timestamp indicating when the broadcast is scheduled to be sent. |
| `segment_id` | `str | None` | No | Unique identifier of the segment this broadcast will be sent to. |
| `send` | `bool` | No | Whether to send the broadcast immediately or keep it as a draft. |
| `sent_at` | `str` | No | Timestamp indicating when the broadcast was sent. |
| `status` | `str` | No | The status of the broadcast. |
| `subject` | `str` | No | The subject line of the email. |
| `text` | `str | None` | No | The plain text version of the broadcast content. |
| `topic_id` | `str | None` | No | The topic ID that the broadcast is scoped to. |

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

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Broadcast().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Broadcast().list()
for broadcast in results:
    print(broadcast)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Broadcast().load({"id": "broadcast_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BroadcastEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContactEntity

```python
contact = client.Contact()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audience_id` | `str` | No | Unique identifier of the audience to which the contact belongs. |
| `created_at` | `str` | No | Timestamp indicating when the contact was created. |
| `email` | `str` | No | Email address of the contact. |
| `first_name` | `str | None` | No | First name of the contact. |
| `id` | `str` | No | Unique identifier for the contact. |
| `last_name` | `str | None` | No | Last name of the contact. |
| `object` | `str` | No | Type of the response object. |
| `properties` | `dict` | No | A map of custom property keys and values. |
| `segments` | `list` | No | Array of segment IDs to add the contact to. |
| `topics` | `list` | No | Array of topic subscriptions for the contact. |
| `unsubscribed` | `bool` | No | Indicates if the contact is unsubscribed. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Contact().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Contact().list()
for contact in results:
    print(contact)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Contact().load({"id": "contact_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContactImportEntity

```python
contact_import = client.ContactImport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `str | None` | No | Timestamp indicating when the contact import completed. |
| `counts` | `dict` | No |  |
| `created_at` | `str` | No | Timestamp indicating when the contact import was created. |
| `id` | `str` | No | Unique identifier for the contact import. |
| `object` | `str` | No | Type of the response object. |
| `status` | `str` | No | Current status of the contact import. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContactImport().list()
for contact_import in results:
    print(contact_import)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactImportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContactImportResponseSuccessEntity

```python
contact_import_response_success = client.ContactImportResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `completed_at` | `str | None` | No | Timestamp indicating when the contact import completed. |
| `counts` | `dict` | No |  |
| `created_at` | `str` | No | Timestamp indicating when the contact import was created. |
| `id` | `str` | No | Unique identifier for the contact import. |
| `object` | `str` | No | Type of the response object. |
| `status` | `str` | No | Current status of the contact import. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ContactImportResponseSuccess().load({"id": "contact_import_response_success_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactImportResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContactPropertyEntity

```python
contact_property = client.ContactProperty()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the contact property was created. |
| `fallback_value` | `Any` | No | The default value when the property is not set for a contact. |
| `id` | `str` | No | The ID of the contact property. |
| `key` | `str` | No | The property key. |
| `object` | `str` | No | The object type. |
| `type` | `str` | No | The property type. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContactProperty().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContactProperty().list()
for contact_property in results:
    print(contact_property)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ContactProperty().load({"id": "contact_property_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactPropertyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContactTopicsResponseSuccessEntity

```python
contact_topics_response_success = client.ContactTopicsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContactTopicsResponseSuccess().list({"id": "example"})
for contact_topics_response_success in results:
    print(contact_topics_response_success)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContactTopicsResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateBatchEmailEntity

```python
create_batch_email = client.CreateBatchEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateBatchEmail().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateBatchEmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateContactImportResponseSuccessEntity

```python
create_contact_import_response_success = client.CreateContactImportResponseSuccess()
```

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateContactImportResponseSuccess().create({
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateContactImportResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainEntity

```python
domain = client.Domain()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `dict` | No | Configure the domain capabilities for sending and receiving emails. |
| `click_tracking` | `bool` | No | Whether click tracking is enabled for this domain. |
| `created_at` | `str` | No | The date and time the domain was created. |
| `custom_return_path` | `str` | No | For advanced use cases, choose a subdomain for the Return-Path address. |
| `id` | `str` | No | The ID of the domain. |
| `name` | `str` | No | The name of the domain. |
| `object` | `str` | No | The type of object. |
| `open_tracking` | `bool` | No | Whether open tracking is enabled for this domain. |
| `records` | `list` | No |  |
| `region` | `str` | No | The region where the domain is hosted. |
| `status` | `str` | No | The status of the domain. |
| `tls` | `str` | No | TLS mode. |
| `tracking_subdomain` | `str` | No | The subdomain used for click and open tracking. |

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

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Domain().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Domain().list()
for domain in results:
    print(domain)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Domain().load({"id": "domain_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Domain().remove({"id": "domain_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DomainClaimEntity

```python
domain_claim = client.DomainClaim()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `blocked_reason` | `str | None` | No | Why the claim is currently blocked, if applicable. |
| `click_tracking` | `bool` | No | Track clicks within the body of each HTML email. |
| `created_at` | `str` | No | The date and time the claim was created. |
| `custom_return_path` | `str` | No | For advanced use cases, choose a subdomain for the Return-Path address. |
| `domain_id` | `str | None` | No | The ID of the placeholder domain created for the claim. |
| `expires_at` | `str` | No | The date and time the claim expires if not verified. |
| `failure_reason` | `str | None` | No | Why the claim failed, if applicable. |
| `id` | `str` | No | The ID of the claim. |
| `name` | `str` | No | The name of the domain being claimed. |
| `object` | `str` | No | The type of object. |
| `open_tracking` | `bool` | No | Track the open rate of each email. |
| `record` | `dict` | No | The TXT record to add to your DNS to prove ownership of the claimed domain. |
| `region` | `str | None` | No | The region where the claimed domain will send from. |
| `status` | `str` | No | The status of the claim. |
| `tracking_subdomain` | `str` | No | The subdomain to use for click and open tracking. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DomainClaim().create({
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DomainClaim().load({"id": "domain_claim_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DomainClaimEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailEntity

```python
email = client.Email()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `list` | No |  |
| `bcc` | `list` | No | The email addresses of the blind carbon copy recipients. |
| `cc` | `list` | No | The email addresses of the carbon copy recipients. |
| `created_at` | `str` | No | The date and time the email was created. |
| `from` | `str` | No | The email address of the sender. |
| `headers` | `dict` | No | Custom headers to add to the email. |
| `html` | `str` | No | The HTML body of the email. |
| `id` | `str` | No | The ID of the email. |
| `last_event` | `str` | No | The status of the email. |
| `message_id` | `str` | No | The Message-ID header value of the email. |
| `object` | `str` | No | The type of object. |
| `reply_to` | `list` | No | The email addresses to which replies should be sent. |
| `scheduled_at` | `str` | No | Schedule email to be sent later. |
| `subject` | `str` | No | The subject line of the email. |
| `tags` | `list` | No |  |
| `template` | `Any` | No |  |
| `text` | `str` | No | The plain text body of the email. |
| `to` | `list` | No | Recipient email address. |
| `topic_id` | `str` | No | The topic ID to scope the email to. |

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

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Email().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Email().list()
for email in results:
    print(email)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Email().load({"id": "email_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmailsMetricEntity

```python
emails_metric = client.EmailsMetric()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `broadcast_id` | `str` | No | Present when `broadcast` is in `dimensions`. |
| `broadcast_name` | `str` | No | Present when `broadcast` is in `dimensions`. |
| `domain_id` | `str` | No | Present when `domain` is in `dimensions`. |
| `domain_name` | `str` | No | Present when `domain` is in `dimensions`. |
| `email_id` | `str` | No | Present when `email` is in `dimensions`. |
| `period` | `str` | No | Present when `period` is in `dimensions`. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EmailsMetric().list()
for emails_metric in results:
    print(emails_metric)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmailsMetricEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EventEntity

```python
event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | The date and time the event was created. |
| `id` | `str` | No | The event ID. |
| `name` | `str` | No | The event name. |
| `object` | `str` | No | Type of the response object. |
| `schema` | `dict | None` | No | A flat key/type map defining the event payload schema. |
| `updated_at` | `str | None` | No | The date and time the event was last updated. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `id` | - | - | - |
| `name` | - | - | Yes |
| `object` | - | - | - |
| `schema` | - | - | - |
| `updated_at` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Event().create({
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Event().list()
for event in results:
    print(event)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Event().load({"id": "event_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListAttachmentEntity

```python
list_attachment = client.ListAttachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_disposition` | `str` | No | How the attachment should be displayed. |
| `content_id` | `str` | No | The content ID for inline attachments. |
| `content_type` | `str` | No | The MIME type of the attachment. |
| `download_url` | `str` | No | Signed URL to download the attachment content. |
| `expires_at` | `str` | No | Timestamp when the download URL expires. |
| `filename` | `str` | No | The filename of the attachment. |
| `id` | `str` | No | The ID of the attachment. |
| `size` | `int` | No | Size of the attachment in bytes. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListAttachment().list({"email_id": "example"})
for list_attachment in results:
    print(list_attachment)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListAttachmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListBroadcastClickedLinksResponseSuccessEntity

```python
list_broadcast_clicked_links_response_success = client.ListBroadcastClickedLinksResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `clicks` | `int` | No | Total number of clicks on this URL. |
| `id` | `str` | No | An opaque cursor for this row, used only for pagination. |
| `unique_clicks` | `int` | No | Number of unique clicks on this URL. |
| `url` | `str` | No | The URL that was clicked. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListBroadcastClickedLinksResponseSuccess().list({"broadcast_id": "example"})
for list_broadcast_clicked_links_response_success in results:
    print(list_broadcast_clicked_links_response_success)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListBroadcastClickedLinksResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListBroadcastRecipientsResponseSuccessEntity

```python
list_broadcast_recipients_response_success = client.ListBroadcastRecipientsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bounce_type` | `str` | No | The type of bounce. |
| `clicked_links` | `list` | No | The links this recipient clicked. |
| `contact_id` | `str | None` | No | The ID of the contact associated with this recipient, if one exists. |
| `count` | `int` | No | The number of times this recipient triggered the event. |
| `email` | `str` | No | The recipient's email address. |
| `id` | `str` | No | Opaque cursor identifying this row, used for pagination. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListBroadcastRecipientsResponseSuccess().list({"broadcast_id": "example", "type": "example"})
for list_broadcast_recipients_response_success in results:
    print(list_broadcast_recipients_response_success)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListBroadcastRecipientsResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListContactSegmentsResponseSuccessEntity

```python
list_contact_segments_response_success = client.ListContactSegmentsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the contact was added to the segment. |
| `id` | `str` | No | Unique identifier for the segment. |
| `name` | `str` | No | Name of the segment. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListContactSegmentsResponseSuccess().list({"contact_id": "example"})
for list_contact_segments_response_success in results:
    print(list_contact_segments_response_success)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListContactSegmentsResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListContactsResponseSuccessEntity

```python
list_contacts_response_success = client.ListContactsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the contact was created. |
| `email` | `str` | No | Email address of the contact. |
| `first_name` | `str | None` | No | First name of the contact. |
| `id` | `str` | No | Unique identifier for the contact. |
| `last_name` | `str | None` | No | Last name of the contact. |
| `unsubscribed` | `bool` | No | Indicates if the contact is unsubscribed. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListContactsResponseSuccess().list({"segment_id": "example"})
for list_contacts_response_success in results:
    print(list_contacts_response_success)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListContactsResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListReceivedEmailEntity

```python
list_received_email = client.ListReceivedEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `list` | No | Array of attachments for this email. |
| `bcc` | `list | None` | No | The BCC recipients. |
| `cc` | `list | None` | No | The CC recipients. |
| `created_at` | `str` | No | Timestamp when the email was received. |
| `from` | `str` | No | The sender email address. |
| `id` | `str` | No | The ID of the received email. |
| `message_id` | `str` | No | The unique message ID from the email headers. |
| `reply_to` | `list | None` | No | The reply-to addresses. |
| `subject` | `str | None` | No | The email subject. |
| `to` | `list` | No | The recipient email addresses. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListReceivedEmail().list()
for list_received_email in results:
    print(list_received_email)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListReceivedEmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListWebhookEventEntity

```python
list_webhook_event = client.ListWebhookEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the event was created. |
| `id` | `str` | No | The ID of the webhook event. |
| `status` | `str` | No | The delivery status of the event for this webhook. |
| `type` | `str` | No | The type of the event. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListWebhookEvent().list({"webhook_id": "example"})
for list_webhook_event in results:
    print(list_webhook_event)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListWebhookEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListWebhookEventAttemptEntity

```python
list_webhook_event_attempt = client.ListWebhookEventAttempt()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `http_status_code` | `int` | No | The HTTP status code returned by the webhook endpoint. |
| `id` | `str` | No | The ID of the webhook event attempt. |
| `response` | `str` | No | The response body returned by the webhook endpoint. |
| `sent_at` | `str` | No | Timestamp indicating when the attempt was sent. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListWebhookEventAttempt().list({"event_id": "example", "webhook_id": "example"})
for list_webhook_event_attempt in results:
    print(list_webhook_event_attempt)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListWebhookEventAttemptEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## LogEntity

```python
log = client.Log()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | The date the log was created. |
| `endpoint` | `str` | No | The API endpoint that was called. |
| `id` | `str` | No | The log ID. |
| `method` | `str` | No | The HTTP method used. |
| `object` | `str` | No | Type of the response object. |
| `request_body` | `dict | None` | No | The request body sent to the API. |
| `response_body` | `dict | None` | No | The response body returned by the API. |
| `response_status` | `int` | No | The HTTP status code of the response. |
| `user_agent` | `str | None` | No | The user agent of the request. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Log().list()
for log in results:
    print(log)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Log().load({"id": "log_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LogEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## OAuthGrantEntity

```python
o_auth_grant = client.OAuthGrant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `dict` | No | The OAuth client the grant was issued to. |
| `client_id` | `str` | No | The ID of the OAuth client the grant was issued to. |
| `created_at` | `str` | No | The date and time the OAuth grant was created. |
| `id` | `str` | No | The ID of the OAuth grant. |
| `revoked_at` | `str | None` | No | The date and time the OAuth grant was revoked, or null if it is still active. |
| `revoked_reason` | `str | None` | No | The reason the OAuth grant was revoked, or null if it is still active. |
| `scopes` | `list` | No | The scopes granted to the OAuth client. |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.OAuthGrant().list()
for o_auth_grant in results:
    print(o_auth_grant)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OAuthGrantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReceivedEmailEntity

```python
received_email = client.ReceivedEmail()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `attachments` | `list` | No | Array of attachments. |
| `bcc` | `list | None` | No | The BCC recipients. |
| `cc` | `list | None` | No | The CC recipients. |
| `created_at` | `str` | No | Timestamp when the email was received. |
| `from` | `str` | No | The sender email address. |
| `headers` | `dict | None` | No | The email headers. |
| `html` | `str | None` | No | The HTML content of the email. |
| `id` | `str` | No | The ID of the received email. |
| `message_id` | `str` | No | The unique message ID from the email headers. |
| `object` | `str` | No | The type of object. |
| `received_for` | `list` | No | The recipient addresses the email was forwarded for, taken from the `for` clause of the message's `Received` headers. |
| `reply_to` | `list | None` | No | The reply-to addresses. |
| `subject` | `str` | No | The email subject. |
| `text` | `str | None` | No | The plain text content of the email. |
| `to` | `list` | No | The recipient email addresses. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ReceivedEmail().load({"email_id": "email_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReceivedEmailEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveAudienceResponseSuccessEntity

```python
remove_audience_response_success = client.RemoveAudienceResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveAudienceResponseSuccess().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveAudienceResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveBroadcastResponseSuccessEntity

```python
remove_broadcast_response_success = client.RemoveBroadcastResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveBroadcastResponseSuccess().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveBroadcastResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveContactFromSegmentResponseSuccessEntity

```python
remove_contact_from_segment_response_success = client.RemoveContactFromSegmentResponseSuccess()
```

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveContactFromSegmentResponseSuccess().remove({"contact_id": "contact_id", "segment_id": "segment_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveContactFromSegmentResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveContactPropertyResponseSuccessEntity

```python
remove_contact_property_response_success = client.RemoveContactPropertyResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveContactPropertyResponseSuccess().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveContactPropertyResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveContactResponseSuccessEntity

```python
remove_contact_response_success = client.RemoveContactResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveContactResponseSuccess().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveContactResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveEventEntity

```python
remove_event = client.RemoveEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveEvent().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveSegmentResponseSuccessEntity

```python
remove_segment_response_success = client.RemoveSegmentResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audience_id` | `str` | No | The ID of the audience this segment belongs to. |
| `created_at` | `str` | No | Timestamp indicating when the segment was created. |
| `filter` | `dict` | No | Filter conditions for the segment. |
| `id` | `str` | No | Unique identifier for the segment. |
| `name` | `str` | Yes | The name of the segment. |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `audience_id` | - | - | - |
| `created_at` | - | - | - |
| `filter` | - | - | - |
| `id` | - | - | - |
| `name` | Yes | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RemoveSegmentResponseSuccess().create({
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RemoveSegmentResponseSuccess().list()
for remove_segment_response_success in results:
    print(remove_segment_response_success)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveSegmentResponseSuccess().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveSegmentResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveSuppressionResponseSuccessEntity

```python
remove_suppression_response_success = client.RemoveSuppressionResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the suppression was created. |
| `email` | `str` | Yes | Email address to suppress. |
| `id` | `str` | No | Unique identifier for the suppression. |
| `origin` | `str` | No | Origin of the suppression. |
| `source_id` | `str` | No | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

### Field Usage by Operation

| Field | list | create | remove |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `email` | Yes | - | - |
| `id` | - | - | - |
| `origin` | - | - | - |
| `source_id` | - | - | - |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RemoveSuppressionResponseSuccess().create({
    "email": "example_email",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RemoveSuppressionResponseSuccess().list()
for remove_suppression_response_success in results:
    print(remove_suppression_response_success)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveSuppressionResponseSuccess().remove({"suppression": "suppression"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveSuppressionResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveTemplateResponseSuccessEntity

```python
remove_template_response_success = client.RemoveTemplateResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `str` | No | The alias of the template. |
| `created_at` | `str` | No | Timestamp indicating when the template was created. |
| `from` | `str` | No | Sender email address. |
| `html` | `str` | Yes | The HTML version of the template. |
| `id` | `str` | No | The ID of the template. |
| `name` | `str` | Yes | The name of the template. |
| `published_at` | `str | None` | No | Timestamp indicating when the template was published. |
| `reply_to` | `list` | No | Reply-to email addresses. |
| `status` | `str` | No | The publication status of the template. |
| `subject` | `str` | No | Email subject. |
| `text` | `str` | No | The plain text version of the template. |
| `updated_at` | `str` | No | Timestamp indicating when the template was last updated. |
| `variables` | `list` | No |  |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RemoveTemplateResponseSuccess().create({
    "html": "example_html",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RemoveTemplateResponseSuccess().list()
for remove_template_response_success in results:
    print(remove_template_response_success)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveTemplateResponseSuccess().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveTemplateResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RemoveTopicResponseSuccessEntity

```python
remove_topic_response_success = client.RemoveTopicResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the topic was created. |
| `default_subscription` | `str` | Yes | The default subscription status for the topic. |
| `description` | `str` | No | A description of the topic. |
| `id` | `str` | No | Unique identifier for the topic. |
| `name` | `str` | Yes | The name of the topic. |
| `visibility` | `str` | No | The visibility of the topic. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.RemoveTopicResponseSuccess().create({
    "default_subscription": "example_default_subscription",  # str
    "name": "example_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.RemoveTopicResponseSuccess().list()
for remove_topic_response_success in results:
    print(remove_topic_response_success)
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RemoveTopicResponseSuccess().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RemoveTopicResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RetrievedAttachmentEntity

```python
retrieved_attachment = client.RetrievedAttachment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content_disposition` | `str` | No | How the attachment should be displayed. |
| `content_id` | `str` | No | The content ID for inline attachments. |
| `content_type` | `str` | No | The MIME type of the attachment. |
| `download_url` | `str` | No | Signed URL to download the attachment content. |
| `expires_at` | `str` | No | Timestamp when the download URL expires. |
| `filename` | `str` | No | The filename of the attachment. |
| `id` | `str` | No | The ID of the attachment. |
| `object` | `str` | No | The type of object. |
| `size` | `int` | No | Size of the attachment in bytes. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.RetrievedAttachment().load({"id": "retrieved_attachment_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RetrievedAttachmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RevokeOAuthGrantEntity

```python
revoke_o_auth_grant = client.RevokeOAuthGrant()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No |  |

### Operations

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.RevokeOAuthGrant().remove({"id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RevokeOAuthGrantEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RotateEntity

```python
rotate = client.Rotate()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No | The ID of the webhook. |
| `object` | `str` | No | The type of object. |
| `signing_secret` | `str` | No | The new secret key used to verify webhook payloads. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Rotate().create({
    "webhook_id": "example_webhook_id",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RotateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SegmentEntity

```python
segment = client.Segment()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audience_id` | `str` | No | The ID of the audience this segment belongs to. |
| `created_at` | `str` | No | Timestamp indicating when the segment was created. |
| `filter` | `dict` | No | Filter conditions for the segment. |
| `id` | `str` | No | The ID of the segment. |
| `name` | `str` | No | The name of the segment. |
| `object` | `str` | No | The object type. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Segment().load({"id": "segment_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SegmentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## SuppressionEntity

```python
suppression = client.Suppression()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the suppression was created. |
| `email` | `str` | No | Email address that is suppressed. |
| `id` | `str` | No | Unique identifier for the suppression. |
| `object` | `str` | No | Type of the response object. |
| `origin` | `str` | No | Origin of the suppression. |
| `source_id` | `str` | No | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Suppression().load({"id": "suppression_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SuppressionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TemplateEntity

```python
template = client.Template()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `str` | No | The alias of the template. |
| `created_at` | `str` | No | Timestamp indicating when the template was created. |
| `current_version_id` | `str` | No | The ID of the current version of the template. |
| `from` | `str` | No | Sender email address. |
| `has_unpublished_versions` | `bool` | No | Indicates whether the template has unpublished versions. |
| `html` | `str` | No | The HTML version of the template. |
| `id` | `str` | No | The ID of the template. |
| `name` | `str` | No | The name of the template. |
| `object` | `str` | No | The type of object. |
| `published_at` | `str | None` | No | Timestamp indicating when the template was published. |
| `reply_to` | `list | None` | No | Reply-to email addresses. |
| `status` | `str` | No | The publication status of the template. |
| `subject` | `str` | No | Email subject. |
| `text` | `str` | No | The plain text version of the template. |
| `updated_at` | `str` | No | Timestamp indicating when the template was last updated. |
| `variables` | `list` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Template().create({
    "id": "example_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Template().load({"id": "template_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TemplateEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## TopicEntity

```python
topic = client.Topic()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the topic was created. |
| `default_subscription` | `str` | No | The default subscription status for the topic. |
| `description` | `str` | No | A description of the topic. |
| `id` | `str` | No | The ID of the topic. |
| `name` | `str` | No | The name of the topic. |
| `object` | `str` | No | The object type. |
| `visibility` | `str` | No | The visibility of the topic. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Topic().load({"id": "topic_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TopicEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateApiKeyEntity

```python
update_api_key = client.UpdateApiKey()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No | The ID of the API key. |
| `name` | `str` | Yes | The API key name. |
| `object` | `str` | No | The type of object. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateApiKey().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateApiKeyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateBroadcastResponseSuccessEntity

```python
update_broadcast_response_success = client.UpdateBroadcastResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `audience_id` | `str` | No | Use `segment_id` instead. |
| `from` | `str` | No | The email address of the sender. |
| `html` | `str` | No | The HTML version of the message. |
| `id` | `str` | No | The ID of the broadcast. |
| `name` | `str` | No | Name of the broadcast. |
| `object` | `str` | No | The object type of the response. |
| `preview_text` | `str` | No | The preview text of the email. |
| `reply_to` | `list` | No | The email addresses to which replies should be sent. |
| `segment_id` | `str` | No | Unique identifier of the segment this broadcast will be sent to. |
| `subject` | `str` | No | The subject line of the email. |
| `text` | `str` | No | The plain text version of the message. |
| `topic_id` | `str` | No | The topic ID that the broadcast will be scoped to. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateBroadcastResponseSuccess().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateBroadcastResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateContactPropertyResponseSuccessEntity

```python
update_contact_property_response_success = client.UpdateContactPropertyResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `fallback_value` | `Any` | No | The default value to use when the property is not set for a contact. |
| `id` | `str` | No | The ID of the contact property. |
| `object` | `str` | No | The object type. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateContactPropertyResponseSuccess().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateContactPropertyResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateContactResponseSuccessEntity

```python
update_contact_response_success = client.UpdateContactResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `str` | No | Email address of the contact. |
| `first_name` | `str` | No | First name of the contact. |
| `id` | `str` | No | Unique identifier for the updated contact. |
| `last_name` | `str` | No | Last name of the contact. |
| `object` | `str` | No | Type of the response object. |
| `properties` | `dict` | No | A map of custom property keys and values to update. |
| `unsubscribed` | `bool` | No | The Contact's global subscription status. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateContactResponseSuccess().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateContactResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateContactTopicsResponseSuccessEntity

```python
update_contact_topics_response_success = client.UpdateContactTopicsResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact_id` | `str` | No | The ID of the contact. |
| `object` | `str` | No | The object type. |
| `topics` | `list` | No | Array of updated topic subscriptions. |

### Field Usage by Operation

| Field | update |
| --- | --- |
| `contact_id` | - |
| `object` | - |
| `topics` | Yes |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateContactTopicsResponseSuccess().update({
    "contact_id": "contact_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateContactTopicsResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateDomainResponseSuccessEntity

```python
update_domain_response_success = client.UpdateDomainResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `capabilities` | `dict` | No | Configure the domain capabilities for sending and receiving emails. |
| `click_tracking` | `bool` | No | Track clicks within the body of each HTML email. |
| `id` | `str` | No | The ID of the updated domain. |
| `object` | `str` | No | The object type representing the updated domain. |
| `open_tracking` | `bool` | No | Track the open rate of each email. |
| `tls` | `str` | No | enforced | opportunistic. |
| `tracking_subdomain` | `str` | No | The subdomain to use for click and open tracking. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateDomainResponseSuccess().update({
    "domain_id": "domain_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateDomainResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateEmailOptionEntity

```python
update_email_option = client.UpdateEmailOption()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `scheduled_at` | `str` | No | Schedule email to be sent later. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateEmailOption().update({
    "email_id": "email_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateEmailOptionEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateEventEntity

```python
update_event = client.UpdateEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No | The ID of the updated event. |
| `object` | `str` | No | Type of the response object. |
| `schema` | `dict | None` | Yes | A flat key/type map defining the event payload schema. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateEvent().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateSegmentResponseSuccessEntity

```python
update_segment_response_success = client.UpdateSegmentResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | No | The ID of the segment. |
| `name` | `str` | Yes | The name of the segment. |
| `object` | `str` | No | The object type. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateSegmentResponseSuccess().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateSegmentResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateTemplateResponseSuccessEntity

```python
update_template_response_success = client.UpdateTemplateResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `alias` | `str` | No | The alias of the template. |
| `from` | `str` | No | Sender email address. |
| `html` | `str` | No | The HTML version of the template. |
| `id` | `str` | No | The ID of the template. |
| `name` | `str` | No | The name of the template. |
| `object` | `str` | No | The object type of the response. |
| `reply_to` | `list` | No | Reply-to email addresses. |
| `subject` | `str` | No | Email subject. |
| `text` | `str` | No | The plain text version of the template. |
| `variables` | `list` | No |  |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateTemplateResponseSuccess().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateTemplateResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateTopicResponseSuccessEntity

```python
update_topic_response_success = client.UpdateTopicResponseSuccess()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | No | A description of the topic. |
| `id` | `str` | No | The ID of the topic. |
| `name` | `str` | No | The name of the topic. |
| `object` | `str` | No | The object type. |
| `visibility` | `str` | No | The visibility of the topic. |

### Operations

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateTopicResponseSuccess().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateTopicResponseSuccessEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UpdateWebhookEntity

```python
update_webhook = client.UpdateWebhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the webhook was created. |
| `endpoint` | `str` | Yes | The URL where webhook events will be sent. |
| `events` | `list` | Yes | Array of event types to subscribe to. |
| `id` | `str` | No | The ID of the updated webhook. |
| `object` | `str` | No | The type of object. |
| `status` | `str` | No | The status of the webhook. |

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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.UpdateWebhook().create({
    "endpoint": "example_endpoint",  # str
    "events": [],  # list
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.UpdateWebhook().list()
for update_webhook in results:
    print(update_webhook)
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.UpdateWebhook().update({
    "id": "id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UpdateWebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## UsageEntity

```python
usage = client.Usage()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ai_credits` | `dict` | No |  |
| `automation_runs` | `dict` | No |  |
| `broadcasts` | `dict` | No |  |
| `contacts` | `dict` | No |  |
| `domains` | `dict` | No |  |
| `emails` | `dict` | No |  |
| `object` | `str` | No | The type of object. |
| `rate_limit` | `dict` | No |  |
| `segments` | `dict` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Usage().load()
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UsageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEntity

```python
webhook = client.Webhook()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the webhook was created. |
| `endpoint` | `str` | No | The URL where webhook events are sent. |
| `events` | `list | None` | No | Array of event types subscribed to. |
| `id` | `str` | No | The ID of the webhook. |
| `object` | `str` | No | The type of object. |
| `signing_secret` | `str` | No | The secret key used to verify webhook payloads. |
| `status` | `str` | No | The status of the webhook. |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Webhook().load({"id": "webhook_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Webhook().remove({"id": "webhook_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEventEntity

```python
webhook_event = client.WebhookEvent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | No | Timestamp indicating when the event was created. |
| `id` | `str` | No | The ID of the webhook event. |
| `next_attempt_at` | `str | None` | No | Timestamp of the next scheduled delivery attempt, or null when none is scheduled. |
| `object` | `str` | No | The type of object. |
| `payload` | `dict` | No | The event payload sent to the webhook endpoint. |
| `status` | `str` | No | The delivery status of the event for this webhook. |
| `type` | `str` | No | The type of the event. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.WebhookEvent().create({
    "event_id": "example_event_id",  # str
    "webhook_id": "example_webhook_id",  # str
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebhookEvent().load({"id": "webhook_event_id", "webhook_id": "webhook_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | Test transport |


Features are activated via the `feature` option:

```python
client = ResendSDK({
    "feature": {
        "test": {"active": True},
    },
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

