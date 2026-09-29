# Resend Python SDK



The Python SDK for the Resend API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AddContactToSegmentResponseSuccess()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/abhinavgautam01/resend-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from resend_sdk import ResendSDK

client = ResendSDK({
    "apikey": os.environ.get("RESEND_APIKEY"),
})
```

### 3. Load an automationrun

AutomationRun is nested under automation, so provide the `automation_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    automationrun = client.AutomationRun().load({"automation_id": "example_automation_id", "id": "example_id"})
    print(automationrun)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.AddContactToSegmentResponseSuccess().create({"contact_id": "example_contact_id", "segment_id": "example_segment_id"})

```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    contactimports = client.ContactImport().list()
    print(contactimports)
except Exception as err:
    print(f"list failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = ResendSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
contactimport = client.ContactImport().list()
# contactimport contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = ResendSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
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
cd py && pytest test/
```


## Reference

### ResendSDK

```python
from resend_sdk import ResendSDK

client = ResendSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = ResendSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### ResendSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `AddContactToSegmentResponseSuccess` | `(data) -> AddContactToSegmentResponseSuccessEntity` | Create an AddContactToSegmentResponseSuccess entity instance. |
| `ApiKey` | `(data) -> ApiKeyEntity` | Create an ApiKey entity instance. |
| `Audience` | `(data) -> AudienceEntity` | Create an Audience entity instance. |
| `Automation` | `(data) -> AutomationEntity` | Create an Automation entity instance. |
| `AutomationRun` | `(data) -> AutomationRunEntity` | Create an AutomationRun entity instance. |
| `AutomationRunListItem` | `(data) -> AutomationRunListItemEntity` | Create an AutomationRunListItem entity instance. |
| `BatchAddSuppressionsResponseSuccess` | `(data) -> BatchAddSuppressionsResponseSuccessEntity` | Create a BatchAddSuppressionsResponseSuccess entity instance. |
| `BatchRemoveSuppressionsResponseSuccess` | `(data) -> BatchRemoveSuppressionsResponseSuccessEntity` | Create a BatchRemoveSuppressionsResponseSuccess entity instance. |
| `Broadcast` | `(data) -> BroadcastEntity` | Create a Broadcast entity instance. |
| `Contact` | `(data) -> ContactEntity` | Create a Contact entity instance. |
| `ContactImport` | `(data) -> ContactImportEntity` | Create a ContactImport entity instance. |
| `ContactImportResponseSuccess` | `(data) -> ContactImportResponseSuccessEntity` | Create a ContactImportResponseSuccess entity instance. |
| `ContactProperty` | `(data) -> ContactPropertyEntity` | Create a ContactProperty entity instance. |
| `ContactTopicsResponseSuccess` | `(data) -> ContactTopicsResponseSuccessEntity` | Create a ContactTopicsResponseSuccess entity instance. |
| `CreateBatchEmail` | `(data) -> CreateBatchEmailEntity` | Create a CreateBatchEmail entity instance. |
| `CreateContactImportResponseSuccess` | `(data) -> CreateContactImportResponseSuccessEntity` | Create a CreateContactImportResponseSuccess entity instance. |
| `Domain` | `(data) -> DomainEntity` | Create a Domain entity instance. |
| `DomainClaim` | `(data) -> DomainClaimEntity` | Create a DomainClaim entity instance. |
| `Email` | `(data) -> EmailEntity` | Create an Email entity instance. |
| `EmailsMetric` | `(data) -> EmailsMetricEntity` | Create an EmailsMetric entity instance. |
| `Event` | `(data) -> EventEntity` | Create an Event entity instance. |
| `ListAttachment` | `(data) -> ListAttachmentEntity` | Create a ListAttachment entity instance. |
| `ListBroadcastClickedLinksResponseSuccess` | `(data) -> ListBroadcastClickedLinksResponseSuccessEntity` | Create a ListBroadcastClickedLinksResponseSuccess entity instance. |
| `ListBroadcastRecipientsResponseSuccess` | `(data) -> ListBroadcastRecipientsResponseSuccessEntity` | Create a ListBroadcastRecipientsResponseSuccess entity instance. |
| `ListContactSegmentsResponseSuccess` | `(data) -> ListContactSegmentsResponseSuccessEntity` | Create a ListContactSegmentsResponseSuccess entity instance. |
| `ListContactsResponseSuccess` | `(data) -> ListContactsResponseSuccessEntity` | Create a ListContactsResponseSuccess entity instance. |
| `ListReceivedEmail` | `(data) -> ListReceivedEmailEntity` | Create a ListReceivedEmail entity instance. |
| `ListWebhookEvent` | `(data) -> ListWebhookEventEntity` | Create a ListWebhookEvent entity instance. |
| `ListWebhookEventAttempt` | `(data) -> ListWebhookEventAttemptEntity` | Create a ListWebhookEventAttempt entity instance. |
| `Log` | `(data) -> LogEntity` | Create a Log entity instance. |
| `OAuthGrant` | `(data) -> OAuthGrantEntity` | Create an OAuthGrant entity instance. |
| `ReceivedEmail` | `(data) -> ReceivedEmailEntity` | Create a ReceivedEmail entity instance. |
| `RemoveAudienceResponseSuccess` | `(data) -> RemoveAudienceResponseSuccessEntity` | Create a RemoveAudienceResponseSuccess entity instance. |
| `RemoveBroadcastResponseSuccess` | `(data) -> RemoveBroadcastResponseSuccessEntity` | Create a RemoveBroadcastResponseSuccess entity instance. |
| `RemoveContactFromSegmentResponseSuccess` | `(data) -> RemoveContactFromSegmentResponseSuccessEntity` | Create a RemoveContactFromSegmentResponseSuccess entity instance. |
| `RemoveContactPropertyResponseSuccess` | `(data) -> RemoveContactPropertyResponseSuccessEntity` | Create a RemoveContactPropertyResponseSuccess entity instance. |
| `RemoveContactResponseSuccess` | `(data) -> RemoveContactResponseSuccessEntity` | Create a RemoveContactResponseSuccess entity instance. |
| `RemoveEvent` | `(data) -> RemoveEventEntity` | Create a RemoveEvent entity instance. |
| `RemoveSegmentResponseSuccess` | `(data) -> RemoveSegmentResponseSuccessEntity` | Create a RemoveSegmentResponseSuccess entity instance. |
| `RemoveSuppressionResponseSuccess` | `(data) -> RemoveSuppressionResponseSuccessEntity` | Create a RemoveSuppressionResponseSuccess entity instance. |
| `RemoveTemplateResponseSuccess` | `(data) -> RemoveTemplateResponseSuccessEntity` | Create a RemoveTemplateResponseSuccess entity instance. |
| `RemoveTopicResponseSuccess` | `(data) -> RemoveTopicResponseSuccessEntity` | Create a RemoveTopicResponseSuccess entity instance. |
| `RetrievedAttachment` | `(data) -> RetrievedAttachmentEntity` | Create a RetrievedAttachment entity instance. |
| `RevokeOAuthGrant` | `(data) -> RevokeOAuthGrantEntity` | Create a RevokeOAuthGrant entity instance. |
| `Rotate` | `(data) -> RotateEntity` | Create a Rotate entity instance. |
| `Segment` | `(data) -> SegmentEntity` | Create a Segment entity instance. |
| `Suppression` | `(data) -> SuppressionEntity` | Create a Suppression entity instance. |
| `Template` | `(data) -> TemplateEntity` | Create a Template entity instance. |
| `Topic` | `(data) -> TopicEntity` | Create a Topic entity instance. |
| `UpdateApiKey` | `(data) -> UpdateApiKeyEntity` | Create an UpdateApiKey entity instance. |
| `UpdateBroadcastResponseSuccess` | `(data) -> UpdateBroadcastResponseSuccessEntity` | Create an UpdateBroadcastResponseSuccess entity instance. |
| `UpdateContactPropertyResponseSuccess` | `(data) -> UpdateContactPropertyResponseSuccessEntity` | Create an UpdateContactPropertyResponseSuccess entity instance. |
| `UpdateContactResponseSuccess` | `(data) -> UpdateContactResponseSuccessEntity` | Create an UpdateContactResponseSuccess entity instance. |
| `UpdateContactTopicsResponseSuccess` | `(data) -> UpdateContactTopicsResponseSuccessEntity` | Create an UpdateContactTopicsResponseSuccess entity instance. |
| `UpdateDomainResponseSuccess` | `(data) -> UpdateDomainResponseSuccessEntity` | Create an UpdateDomainResponseSuccess entity instance. |
| `UpdateEmailOption` | `(data) -> UpdateEmailOptionEntity` | Create an UpdateEmailOption entity instance. |
| `UpdateEvent` | `(data) -> UpdateEventEntity` | Create an UpdateEvent entity instance. |
| `UpdateSegmentResponseSuccess` | `(data) -> UpdateSegmentResponseSuccessEntity` | Create an UpdateSegmentResponseSuccess entity instance. |
| `UpdateTemplateResponseSuccess` | `(data) -> UpdateTemplateResponseSuccessEntity` | Create an UpdateTemplateResponseSuccess entity instance. |
| `UpdateTopicResponseSuccess` | `(data) -> UpdateTopicResponseSuccessEntity` | Create an UpdateTopicResponseSuccess entity instance. |
| `UpdateWebhook` | `(data) -> UpdateWebhookEntity` | Create an UpdateWebhook entity instance. |
| `Usage` | `(data) -> UsageEntity` | Create an Usage entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |
| `WebhookEvent` | `(data) -> WebhookEventEntity` | Create a WebhookEvent entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

### Entities

#### AddContactToSegmentResponseSuccess

| Field | Description |
| --- | --- |
| `contact_id` | The ID of the contact. |
| `object` | The object type. |
| `segment_id` | The ID of the segment. |

Operations: Create.

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

Operations: Create, List, Remove.

API path: `/api-keys`

#### Audience

| Field | Description |
| --- | --- |
| `created_at` | The date that the object was created. |
| `id` | The ID of the audience. |
| `name` | The name of the audience. |
| `object` | The object of the audience. |

Operations: Create, List, Load.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: Load.

API path: `/automations/{automation_id}/runs/{run_id}`

#### AutomationRunListItem

| Field | Description |
| --- | --- |
| `completed_at` | The date and time the run completed. |
| `created_at` | The date and time the run was created. |
| `id` | The ID of the automation run. |
| `started_at` | The date and time the run started. |
| `status` | The current status of the automation run. |

Operations: List.

API path: `/automations/{automation_id}/runs`

#### BatchAddSuppressionsResponseSuccess

| Field | Description |
| --- | --- |
| `emails` | Email addresses to suppress. |

Operations: Create.

API path: `/suppressions/batch/add`

#### BatchRemoveSuppressionsResponseSuccess

| Field | Description |
| --- | --- |
| `data` | Array containing the removed suppressions. |
| `emails` | Email addresses to remove from the suppression list. |
| `ids` | Suppression IDs to remove from the suppression list. |

Operations: Create.

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

Operations: Create, List, Load.

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

Operations: Create, List, Load.

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

Operations: List.

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

Operations: Load.

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

Operations: Create, List, Load.

API path: `/contact-properties`

#### ContactTopicsResponseSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

API path: `/contacts/{contact_id}/topics`

#### CreateBatchEmail

| Field | Description |
| --- | --- |
| `data` |  |

Operations: Create.

API path: `/emails/batch`

#### CreateContactImportResponseSuccess

| Field | Description |
| --- | --- |

Operations: Create.

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

Operations: Create, List, Load, Remove.

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

Operations: Create, Load.

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

Operations: Create, List, Load.

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

Operations: List.

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

Operations: Create, List, Load.

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

Operations: List.

API path: `/emails/{email_id}/attachments`

#### ListBroadcastClickedLinksResponseSuccess

| Field | Description |
| --- | --- |
| `clicks` | Total number of clicks on this URL. |
| `id` | An opaque cursor for this row, used only for pagination. |
| `unique_clicks` | Number of unique clicks on this URL. |
| `url` | The URL that was clicked. |

Operations: List.

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

Operations: List.

API path: `/broadcasts/{id}/recipients`

#### ListContactSegmentsResponseSuccess

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the contact was added to the segment. |
| `id` | Unique identifier for the segment. |
| `name` | Name of the segment. |

Operations: List.

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

Operations: List.

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

Operations: List.

API path: `/emails/receiving`

#### ListWebhookEvent

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the event was created. |
| `id` | The ID of the webhook event. |
| `status` | The delivery status of the event for this webhook. |
| `type` | The type of the event. |

Operations: List.

API path: `/webhooks/{webhook_id}/events`

#### ListWebhookEventAttempt

| Field | Description |
| --- | --- |
| `http_status_code` | The HTTP status code returned by the webhook endpoint. |
| `id` | The ID of the webhook event attempt. |
| `response` | The response body returned by the webhook endpoint. |
| `sent_at` | Timestamp indicating when the attempt was sent. |

Operations: List.

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

Operations: List, Load.

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

Operations: List.

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

Operations: Load.

API path: `/emails/receiving/{email_id}`

#### RemoveAudienceResponseSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/audiences/{id}`

#### RemoveBroadcastResponseSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/broadcasts/{id}`

#### RemoveContactFromSegmentResponseSuccess

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/contacts/{contact_id}/segments/{segment_id}`

#### RemoveContactPropertyResponseSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/contact-properties/{id}`

#### RemoveContactResponseSuccess

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/contacts/{id}`

#### RemoveEvent

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/events/{identifier}`

#### RemoveSegmentResponseSuccess

| Field | Description |
| --- | --- |
| `audience_id` | The ID of the audience this segment belongs to. |
| `created_at` | Timestamp indicating when the segment was created. |
| `filter` | Filter conditions for the segment. |
| `id` | Unique identifier for the segment. |
| `name` | The name of the segment. |

Operations: Create, List, Remove.

API path: `/segments`

#### RemoveSuppressionResponseSuccess

| Field | Description |
| --- | --- |
| `created_at` | Timestamp indicating when the suppression was created. |
| `email` | Email address to suppress. |
| `id` | Unique identifier for the suppression. |
| `origin` | Origin of the suppression. |
| `source_id` | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

Operations: Create, List, Remove.

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

Operations: Create, List, Remove.

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

Operations: Create, List, Remove.

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

Operations: Load.

API path: `/emails/{email_id}/attachments/{attachment_id}`

#### RevokeOAuthGrant

| Field | Description |
| --- | --- |
| `id` |  |

Operations: Remove.

API path: `/oauth/grants/{oauth_grant_id}`

#### Rotate

| Field | Description |
| --- | --- |
| `id` | The ID of the webhook. |
| `object` | The type of object. |
| `signing_secret` | The new secret key used to verify webhook payloads. |

Operations: Create.

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

Operations: Load.

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

Operations: Load.

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

Operations: Create, Load.

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

Operations: Load.

API path: `/topics/{id}`

#### UpdateApiKey

| Field | Description |
| --- | --- |
| `id` | The ID of the API key. |
| `name` | The API key name. |
| `object` | The type of object. |

Operations: Update.

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

Operations: Update.

API path: `/broadcasts/{id}`

#### UpdateContactPropertyResponseSuccess

| Field | Description |
| --- | --- |
| `fallback_value` | The default value to use when the property is not set for a contact. |
| `id` | The ID of the contact property. |
| `object` | The object type. |

Operations: Update.

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

Operations: Update.

API path: `/contacts/{id}`

#### UpdateContactTopicsResponseSuccess

| Field | Description |
| --- | --- |
| `contact_id` | The ID of the contact. |
| `object` | The object type. |
| `topics` | Array of updated topic subscriptions. |

Operations: Update.

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

Operations: Update.

API path: `/domains/{domain_id}`

#### UpdateEmailOption

| Field | Description |
| --- | --- |
| `scheduled_at` | Schedule email to be sent later. |

Operations: Update.

API path: `/emails/{email_id}`

#### UpdateEvent

| Field | Description |
| --- | --- |
| `id` | The ID of the updated event. |
| `object` | Type of the response object. |
| `schema` | A flat key/type map defining the event payload schema. |

Operations: Update.

API path: `/events/{identifier}`

#### UpdateSegmentResponseSuccess

| Field | Description |
| --- | --- |
| `id` | The ID of the segment. |
| `name` | The name of the segment. |
| `object` | The object type. |

Operations: Update.

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

Operations: Update.

API path: `/templates/{id}`

#### UpdateTopicResponseSuccess

| Field | Description |
| --- | --- |
| `description` | A description of the topic. |
| `id` | The ID of the topic. |
| `name` | The name of the topic. |
| `object` | The object type. |
| `visibility` | The visibility of the topic. |

Operations: Update.

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

Operations: Create, List, Update.

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

Operations: Load.

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

Operations: Load, Remove.

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

Operations: Create, Load.

API path: `/webhooks/{webhook_id}/events/{event_id}/replay`



## Entities


### AddContactToSegmentResponseSuccess

Create an instance: `add_contact_to_segment_response_success = client.AddContactToSegmentResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contact_id` | `str` | The ID of the contact. |
| `object` | `str` | The object type. |
| `segment_id` | `str` | The ID of the segment. |

#### Example: Create

```python
add_contact_to_segment_response_success = client.AddContactToSegmentResponseSuccess().create({
    "contact_id": "example_contact_id",  # str
    "segment_id": "example_segment_id",  # str
})
```


### ApiKey

Create an instance: `api_key = client.ApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The date and time the API key was created. |
| `domain_id` | `str` | Restrict an API key to send emails only from a specific domain. |
| `id` | `str` | The ID of the API key. |
| `last_used_at` | `str | None` | The date and time the API key was last used. |
| `name` | `str` | The API key name. |
| `permission` | `str` | The API key can have full access to Resend’s API or be only restricted to send emails. |

#### Example: List

```python
api_keys = client.ApiKey().list()
```

#### Example: Create

```python
api_key = client.ApiKey().create({
    "name": "example_name",  # str
})
```


### Audience

Create an instance: `audience = client.Audience()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The date that the object was created. |
| `id` | `str` | The ID of the audience. |
| `name` | `str` | The name of the audience. |
| `object` | `str` | The object of the audience. |

#### Example: Load

```python
audience = client.Audience().load({"id": "audience_id"})
```

#### Example: List

```python
audiences = client.Audience().list()
```

#### Example: Create

```python
audience = client.Audience().create({
})
```


### Automation

Create an instance: `automation = client.Automation()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `connections` | `list` | The connections between steps in the active version of the automation. |
| `created_at` | `str` | The date and time the automation was created. |
| `id` | `str` | The ID of the automation. |
| `name` | `str` | The name of the automation. |
| `object` | `str` | Type of the response object. |
| `status` | `str` | The current status of the automation. |
| `steps` | `list` | The steps in the active version of the automation. |
| `updated_at` | `str` | The date and time the automation was last updated. |

#### Example: Load

```python
automation = client.Automation().load({"id": "automation_id"})
```

#### Example: List

```python
automations = client.Automation().list()
```

#### Example: Create

```python
automation = client.Automation().create({
})
```


### AutomationRun

Create an instance: `automation_run = client.AutomationRun()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `str | None` | The date and time the run completed. |
| `created_at` | `str` | The date and time the run was created. |
| `id` | `str` | The ID of the automation run. |
| `object` | `str` | Type of the response object. |
| `started_at` | `str | None` | The date and time the run started. |
| `status` | `str` | The current status of the automation run. |
| `steps` | `list` | The steps executed in this run, sorted in graph order. |

#### Example: Load

```python
automation_run = client.AutomationRun().load({"id": "automation_run_id", "automation_id": "automation_id"})
```


### AutomationRunListItem

Create an instance: `automation_run_list_item = client.AutomationRunListItem()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `str | None` | The date and time the run completed. |
| `created_at` | `str` | The date and time the run was created. |
| `id` | `str` | The ID of the automation run. |
| `started_at` | `str | None` | The date and time the run started. |
| `status` | `str` | The current status of the automation run. |

#### Example: List

```python
automation_run_list_items = client.AutomationRunListItem().list({"id": "example"})
```


### BatchAddSuppressionsResponseSuccess

Create an instance: `batch_add_suppressions_response_success = client.BatchAddSuppressionsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `emails` | `list` | Email addresses to suppress. |

#### Example: Create

```python
batch_add_suppressions_response_success = client.BatchAddSuppressionsResponseSuccess().create({
    "emails": [],  # list
})
```


### BatchRemoveSuppressionsResponseSuccess

Create an instance: `batch_remove_suppressions_response_success = client.BatchRemoveSuppressionsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` | Array containing the removed suppressions. |
| `emails` | `list` | Email addresses to remove from the suppression list. |
| `ids` | `list` | Suppression IDs to remove from the suppression list. |

#### Example: Create

```python
batch_remove_suppressions_response_success = client.BatchRemoveSuppressionsResponseSuccess().create({
})
```


### Broadcast

Create an instance: `broadcast = client.Broadcast()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audience_id` | `str | None` | Deprecated: use `segment_id` instead. |
| `created_at` | `str` | Timestamp indicating when the broadcast was created. |
| `from` | `str` | The email address of the sender. |
| `html` | `str | None` | The HTML version of the broadcast content. |
| `id` | `str` | Unique identifier for the broadcast. |
| `name` | `str` | Name of the broadcast. |
| `preview_text` | `str` | The preview text of the email. |
| `reply_to` | `list` | The email addresses to which replies should be sent. |
| `scheduled_at` | `str` | Timestamp indicating when the broadcast is scheduled to be sent. |
| `segment_id` | `str | None` | Unique identifier of the segment this broadcast will be sent to. |
| `send` | `bool` | Whether to send the broadcast immediately or keep it as a draft. |
| `sent_at` | `str` | Timestamp indicating when the broadcast was sent. |
| `status` | `str` | The status of the broadcast. |
| `subject` | `str` | The subject line of the email. |
| `text` | `str | None` | The plain text version of the broadcast content. |
| `topic_id` | `str | None` | The topic ID that the broadcast is scoped to. |

#### Example: Load

```python
broadcast = client.Broadcast().load({"id": "broadcast_id"})
```

#### Example: List

```python
broadcasts = client.Broadcast().list()
```

#### Example: Create

```python
broadcast = client.Broadcast().create({
})
```


### Contact

Create an instance: `contact = client.Contact()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audience_id` | `str` | Unique identifier of the audience to which the contact belongs. |
| `created_at` | `str` | Timestamp indicating when the contact was created. |
| `email` | `str` | Email address of the contact. |
| `first_name` | `str | None` | First name of the contact. |
| `id` | `str` | Unique identifier for the contact. |
| `last_name` | `str | None` | Last name of the contact. |
| `object` | `str` | Type of the response object. |
| `properties` | `dict` | A map of custom property keys and values. |
| `segments` | `list` | Array of segment IDs to add the contact to. |
| `topics` | `list` | Array of topic subscriptions for the contact. |
| `unsubscribed` | `bool` | Indicates if the contact is unsubscribed. |

#### Example: Load

```python
contact = client.Contact().load({"id": "contact_id"})
```

#### Example: List

```python
contacts = client.Contact().list()
```

#### Example: Create

```python
contact = client.Contact().create({
})
```


### ContactImport

Create an instance: `contact_import = client.ContactImport()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `str | None` | Timestamp indicating when the contact import completed. |
| `counts` | `dict` |  |
| `created_at` | `str` | Timestamp indicating when the contact import was created. |
| `id` | `str` | Unique identifier for the contact import. |
| `object` | `str` | Type of the response object. |
| `status` | `str` | Current status of the contact import. |

#### Example: List

```python
contact_imports = client.ContactImport().list()
```


### ContactImportResponseSuccess

Create an instance: `contact_import_response_success = client.ContactImportResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `completed_at` | `str | None` | Timestamp indicating when the contact import completed. |
| `counts` | `dict` |  |
| `created_at` | `str` | Timestamp indicating when the contact import was created. |
| `id` | `str` | Unique identifier for the contact import. |
| `object` | `str` | Type of the response object. |
| `status` | `str` | Current status of the contact import. |

#### Example: Load

```python
contact_import_response_success = client.ContactImportResponseSuccess().load({"id": "contact_import_response_success_id"})
```


### ContactProperty

Create an instance: `contact_property = client.ContactProperty()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the contact property was created. |
| `fallback_value` | `Any` | The default value when the property is not set for a contact. |
| `id` | `str` | The ID of the contact property. |
| `key` | `str` | The property key. |
| `object` | `str` | The object type. |
| `type` | `str` | The property type. |

#### Example: Load

```python
contact_property = client.ContactProperty().load({"id": "contact_property_id"})
```

#### Example: List

```python
contact_propertys = client.ContactProperty().list()
```

#### Example: Create

```python
contact_property = client.ContactProperty().create({
})
```


### ContactTopicsResponseSuccess

Create an instance: `contact_topics_response_success = client.ContactTopicsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |

#### Example: List

```python
contact_topics_response_successs = client.ContactTopicsResponseSuccess().list({"id": "example"})
```


### CreateBatchEmail

Create an instance: `create_batch_email = client.CreateBatchEmail()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `list` |  |

#### Example: Create

```python
create_batch_email = client.CreateBatchEmail().create({
})
```


### CreateContactImportResponseSuccess

Create an instance: `create_contact_import_response_success = client.CreateContactImportResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```python
create_contact_import_response_success = client.CreateContactImportResponseSuccess().create({
})
```


### Domain

Create an instance: `domain = client.Domain()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `dict` | Configure the domain capabilities for sending and receiving emails. |
| `click_tracking` | `bool` | Whether click tracking is enabled for this domain. |
| `created_at` | `str` | The date and time the domain was created. |
| `custom_return_path` | `str` | For advanced use cases, choose a subdomain for the Return-Path address. |
| `id` | `str` | The ID of the domain. |
| `name` | `str` | The name of the domain. |
| `object` | `str` | The type of object. |
| `open_tracking` | `bool` | Whether open tracking is enabled for this domain. |
| `records` | `list` |  |
| `region` | `str` | The region where the domain is hosted. |
| `status` | `str` | The status of the domain. |
| `tls` | `str` | TLS mode. |
| `tracking_subdomain` | `str` | The subdomain used for click and open tracking. |

#### Example: Load

```python
domain = client.Domain().load({"id": "domain_id"})
```

#### Example: List

```python
domains = client.Domain().list()
```

#### Example: Create

```python
domain = client.Domain().create({
})
```


### DomainClaim

Create an instance: `domain_claim = client.DomainClaim()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `blocked_reason` | `str | None` | Why the claim is currently blocked, if applicable. |
| `click_tracking` | `bool` | Track clicks within the body of each HTML email. |
| `created_at` | `str` | The date and time the claim was created. |
| `custom_return_path` | `str` | For advanced use cases, choose a subdomain for the Return-Path address. |
| `domain_id` | `str | None` | The ID of the placeholder domain created for the claim. |
| `expires_at` | `str` | The date and time the claim expires if not verified. |
| `failure_reason` | `str | None` | Why the claim failed, if applicable. |
| `id` | `str` | The ID of the claim. |
| `name` | `str` | The name of the domain being claimed. |
| `object` | `str` | The type of object. |
| `open_tracking` | `bool` | Track the open rate of each email. |
| `record` | `dict` | The TXT record to add to your DNS to prove ownership of the claimed domain. |
| `region` | `str | None` | The region where the claimed domain will send from. |
| `status` | `str` | The status of the claim. |
| `tracking_subdomain` | `str` | The subdomain to use for click and open tracking. |

#### Example: Load

```python
domain_claim = client.DomainClaim().load({"id": "domain_claim_id"})
```

#### Example: Create

```python
domain_claim = client.DomainClaim().create({
})
```


### Email

Create an instance: `email = client.Email()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `list` |  |
| `bcc` | `list` | The email addresses of the blind carbon copy recipients. |
| `cc` | `list` | The email addresses of the carbon copy recipients. |
| `created_at` | `str` | The date and time the email was created. |
| `from` | `str` | The email address of the sender. |
| `headers` | `dict` | Custom headers to add to the email. |
| `html` | `str` | The HTML body of the email. |
| `id` | `str` | The ID of the email. |
| `last_event` | `str` | The status of the email. |
| `message_id` | `str` | The Message-ID header value of the email. |
| `object` | `str` | The type of object. |
| `reply_to` | `list` | The email addresses to which replies should be sent. |
| `scheduled_at` | `str` | Schedule email to be sent later. |
| `subject` | `str` | The subject line of the email. |
| `tags` | `list` |  |
| `template` | `Any` |  |
| `text` | `str` | The plain text body of the email. |
| `to` | `list` | Recipient email address. |
| `topic_id` | `str` | The topic ID to scope the email to. |

#### Example: Load

```python
email = client.Email().load({"id": "email_id"})
```

#### Example: List

```python
emails = client.Email().list()
```

#### Example: Create

```python
email = client.Email().create({
})
```


### EmailsMetric

Create an instance: `emails_metric = client.EmailsMetric()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `broadcast_id` | `str` | Present when `broadcast` is in `dimensions`. |
| `broadcast_name` | `str` | Present when `broadcast` is in `dimensions`. |
| `domain_id` | `str` | Present when `domain` is in `dimensions`. |
| `domain_name` | `str` | Present when `domain` is in `dimensions`. |
| `email_id` | `str` | Present when `email` is in `dimensions`. |
| `period` | `str` | Present when `period` is in `dimensions`. |

#### Example: List

```python
emails_metrics = client.EmailsMetric().list()
```


### Event

Create an instance: `event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The date and time the event was created. |
| `id` | `str` | The event ID. |
| `name` | `str` | The event name. |
| `object` | `str` | Type of the response object. |
| `schema` | `dict | None` | A flat key/type map defining the event payload schema. |
| `updated_at` | `str | None` | The date and time the event was last updated. |

#### Example: Load

```python
event = client.Event().load({"id": "event_id"})
```

#### Example: List

```python
events = client.Event().list()
```

#### Example: Create

```python
event = client.Event().create({
})
```


### ListAttachment

Create an instance: `list_attachment = client.ListAttachment()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_disposition` | `str` | How the attachment should be displayed. |
| `content_id` | `str` | The content ID for inline attachments. |
| `content_type` | `str` | The MIME type of the attachment. |
| `download_url` | `str` | Signed URL to download the attachment content. |
| `expires_at` | `str` | Timestamp when the download URL expires. |
| `filename` | `str` | The filename of the attachment. |
| `id` | `str` | The ID of the attachment. |
| `size` | `int` | Size of the attachment in bytes. |

#### Example: List

```python
list_attachments = client.ListAttachment().list({"email_id": "example"})
```


### ListBroadcastClickedLinksResponseSuccess

Create an instance: `list_broadcast_clicked_links_response_success = client.ListBroadcastClickedLinksResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `clicks` | `int` | Total number of clicks on this URL. |
| `id` | `str` | An opaque cursor for this row, used only for pagination. |
| `unique_clicks` | `int` | Number of unique clicks on this URL. |
| `url` | `str` | The URL that was clicked. |

#### Example: List

```python
list_broadcast_clicked_links_response_successs = client.ListBroadcastClickedLinksResponseSuccess().list({"broadcast_id": "example"})
```


### ListBroadcastRecipientsResponseSuccess

Create an instance: `list_broadcast_recipients_response_success = client.ListBroadcastRecipientsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bounce_type` | `str` | The type of bounce. |
| `clicked_links` | `list` | The links this recipient clicked. |
| `contact_id` | `str | None` | The ID of the contact associated with this recipient, if one exists. |
| `count` | `int` | The number of times this recipient triggered the event. |
| `email` | `str` | The recipient's email address. |
| `id` | `str` | Opaque cursor identifying this row, used for pagination. |

#### Example: List

```python
list_broadcast_recipients_response_successs = client.ListBroadcastRecipientsResponseSuccess().list({"broadcast_id": "example", "type": "example"})
```


### ListContactSegmentsResponseSuccess

Create an instance: `list_contact_segments_response_success = client.ListContactSegmentsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the contact was added to the segment. |
| `id` | `str` | Unique identifier for the segment. |
| `name` | `str` | Name of the segment. |

#### Example: List

```python
list_contact_segments_response_successs = client.ListContactSegmentsResponseSuccess().list({"contact_id": "example"})
```


### ListContactsResponseSuccess

Create an instance: `list_contacts_response_success = client.ListContactsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the contact was created. |
| `email` | `str` | Email address of the contact. |
| `first_name` | `str | None` | First name of the contact. |
| `id` | `str` | Unique identifier for the contact. |
| `last_name` | `str | None` | Last name of the contact. |
| `unsubscribed` | `bool` | Indicates if the contact is unsubscribed. |

#### Example: List

```python
list_contacts_response_successs = client.ListContactsResponseSuccess().list({"segment_id": "example"})
```


### ListReceivedEmail

Create an instance: `list_received_email = client.ListReceivedEmail()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `list` | Array of attachments for this email. |
| `bcc` | `list | None` | The BCC recipients. |
| `cc` | `list | None` | The CC recipients. |
| `created_at` | `str` | Timestamp when the email was received. |
| `from` | `str` | The sender email address. |
| `id` | `str` | The ID of the received email. |
| `message_id` | `str` | The unique message ID from the email headers. |
| `reply_to` | `list | None` | The reply-to addresses. |
| `subject` | `str | None` | The email subject. |
| `to` | `list` | The recipient email addresses. |

#### Example: List

```python
list_received_emails = client.ListReceivedEmail().list()
```


### ListWebhookEvent

Create an instance: `list_webhook_event = client.ListWebhookEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the event was created. |
| `id` | `str` | The ID of the webhook event. |
| `status` | `str` | The delivery status of the event for this webhook. |
| `type` | `str` | The type of the event. |

#### Example: List

```python
list_webhook_events = client.ListWebhookEvent().list({"webhook_id": "example"})
```


### ListWebhookEventAttempt

Create an instance: `list_webhook_event_attempt = client.ListWebhookEventAttempt()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `http_status_code` | `int` | The HTTP status code returned by the webhook endpoint. |
| `id` | `str` | The ID of the webhook event attempt. |
| `response` | `str` | The response body returned by the webhook endpoint. |
| `sent_at` | `str` | Timestamp indicating when the attempt was sent. |

#### Example: List

```python
list_webhook_event_attempts = client.ListWebhookEventAttempt().list({"event_id": "example", "webhook_id": "example"})
```


### Log

Create an instance: `log = client.Log()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The date the log was created. |
| `endpoint` | `str` | The API endpoint that was called. |
| `id` | `str` | The log ID. |
| `method` | `str` | The HTTP method used. |
| `object` | `str` | Type of the response object. |
| `request_body` | `dict | None` | The request body sent to the API. |
| `response_body` | `dict | None` | The response body returned by the API. |
| `response_status` | `int` | The HTTP status code of the response. |
| `user_agent` | `str | None` | The user agent of the request. |

#### Example: Load

```python
log = client.Log().load({"id": "log_id"})
```

#### Example: List

```python
logs = client.Log().list()
```


### OAuthGrant

Create an instance: `o_auth_grant = client.OAuthGrant()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `dict` | The OAuth client the grant was issued to. |
| `client_id` | `str` | The ID of the OAuth client the grant was issued to. |
| `created_at` | `str` | The date and time the OAuth grant was created. |
| `id` | `str` | The ID of the OAuth grant. |
| `revoked_at` | `str | None` | The date and time the OAuth grant was revoked, or null if it is still active. |
| `revoked_reason` | `str | None` | The reason the OAuth grant was revoked, or null if it is still active. |
| `scopes` | `list` | The scopes granted to the OAuth client. |

#### Example: List

```python
o_auth_grants = client.OAuthGrant().list()
```


### ReceivedEmail

Create an instance: `received_email = client.ReceivedEmail()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `attachments` | `list` | Array of attachments. |
| `bcc` | `list | None` | The BCC recipients. |
| `cc` | `list | None` | The CC recipients. |
| `created_at` | `str` | Timestamp when the email was received. |
| `from` | `str` | The sender email address. |
| `headers` | `dict | None` | The email headers. |
| `html` | `str | None` | The HTML content of the email. |
| `id` | `str` | The ID of the received email. |
| `message_id` | `str` | The unique message ID from the email headers. |
| `object` | `str` | The type of object. |
| `received_for` | `list` | The recipient addresses the email was forwarded for, taken from the `for` clause of the message's `Received` headers. |
| `reply_to` | `list | None` | The reply-to addresses. |
| `subject` | `str` | The email subject. |
| `text` | `str | None` | The plain text content of the email. |
| `to` | `list` | The recipient email addresses. |

#### Example: Load

```python
received_email = client.ReceivedEmail().load({"email_id": "email_id"})
```


### RemoveAudienceResponseSuccess

Create an instance: `remove_audience_response_success = client.RemoveAudienceResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### RemoveBroadcastResponseSuccess

Create an instance: `remove_broadcast_response_success = client.RemoveBroadcastResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### RemoveContactFromSegmentResponseSuccess

Create an instance: `remove_contact_from_segment_response_success = client.RemoveContactFromSegmentResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### RemoveContactPropertyResponseSuccess

Create an instance: `remove_contact_property_response_success = client.RemoveContactPropertyResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### RemoveContactResponseSuccess

Create an instance: `remove_contact_response_success = client.RemoveContactResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### RemoveEvent

Create an instance: `remove_event = client.RemoveEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### RemoveSegmentResponseSuccess

Create an instance: `remove_segment_response_success = client.RemoveSegmentResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audience_id` | `str` | The ID of the audience this segment belongs to. |
| `created_at` | `str` | Timestamp indicating when the segment was created. |
| `filter` | `dict` | Filter conditions for the segment. |
| `id` | `str` | Unique identifier for the segment. |
| `name` | `str` | The name of the segment. |

#### Example: List

```python
remove_segment_response_successs = client.RemoveSegmentResponseSuccess().list()
```

#### Example: Create

```python
remove_segment_response_success = client.RemoveSegmentResponseSuccess().create({
    "name": "example_name",  # str
})
```


### RemoveSuppressionResponseSuccess

Create an instance: `remove_suppression_response_success = client.RemoveSuppressionResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the suppression was created. |
| `email` | `str` | Email address to suppress. |
| `id` | `str` | Unique identifier for the suppression. |
| `origin` | `str` | Origin of the suppression. |
| `source_id` | `str` | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

#### Example: List

```python
remove_suppression_response_successs = client.RemoveSuppressionResponseSuccess().list()
```

#### Example: Create

```python
remove_suppression_response_success = client.RemoveSuppressionResponseSuccess().create({
    "email": "example_email",  # str
})
```


### RemoveTemplateResponseSuccess

Create an instance: `remove_template_response_success = client.RemoveTemplateResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `str` | The alias of the template. |
| `created_at` | `str` | Timestamp indicating when the template was created. |
| `from` | `str` | Sender email address. |
| `html` | `str` | The HTML version of the template. |
| `id` | `str` | The ID of the template. |
| `name` | `str` | The name of the template. |
| `published_at` | `str | None` | Timestamp indicating when the template was published. |
| `reply_to` | `list` | Reply-to email addresses. |
| `status` | `str` | The publication status of the template. |
| `subject` | `str` | Email subject. |
| `text` | `str` | The plain text version of the template. |
| `updated_at` | `str` | Timestamp indicating when the template was last updated. |
| `variables` | `list` |  |

#### Example: List

```python
remove_template_response_successs = client.RemoveTemplateResponseSuccess().list()
```

#### Example: Create

```python
remove_template_response_success = client.RemoveTemplateResponseSuccess().create({
    "html": "example_html",  # str
    "name": "example_name",  # str
})
```


### RemoveTopicResponseSuccess

Create an instance: `remove_topic_response_success = client.RemoveTopicResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the topic was created. |
| `default_subscription` | `str` | The default subscription status for the topic. |
| `description` | `str` | A description of the topic. |
| `id` | `str` | Unique identifier for the topic. |
| `name` | `str` | The name of the topic. |
| `visibility` | `str` | The visibility of the topic. |

#### Example: List

```python
remove_topic_response_successs = client.RemoveTopicResponseSuccess().list()
```

#### Example: Create

```python
remove_topic_response_success = client.RemoveTopicResponseSuccess().create({
    "default_subscription": "example_default_subscription",  # str
    "name": "example_name",  # str
})
```


### RetrievedAttachment

Create an instance: `retrieved_attachment = client.RetrievedAttachment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `content_disposition` | `str` | How the attachment should be displayed. |
| `content_id` | `str` | The content ID for inline attachments. |
| `content_type` | `str` | The MIME type of the attachment. |
| `download_url` | `str` | Signed URL to download the attachment content. |
| `expires_at` | `str` | Timestamp when the download URL expires. |
| `filename` | `str` | The filename of the attachment. |
| `id` | `str` | The ID of the attachment. |
| `object` | `str` | The type of object. |
| `size` | `int` | Size of the attachment in bytes. |

#### Example: Load

```python
retrieved_attachment = client.RetrievedAttachment().load({"id": "retrieved_attachment_id"})
```


### RevokeOAuthGrant

Create an instance: `revoke_o_auth_grant = client.RevokeOAuthGrant()`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |


### Rotate

Create an instance: `rotate = client.Rotate()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The ID of the webhook. |
| `object` | `str` | The type of object. |
| `signing_secret` | `str` | The new secret key used to verify webhook payloads. |

#### Example: Create

```python
rotate = client.Rotate().create({
    "webhook_id": "example_webhook_id",  # str
})
```


### Segment

Create an instance: `segment = client.Segment()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audience_id` | `str` | The ID of the audience this segment belongs to. |
| `created_at` | `str` | Timestamp indicating when the segment was created. |
| `filter` | `dict` | Filter conditions for the segment. |
| `id` | `str` | The ID of the segment. |
| `name` | `str` | The name of the segment. |
| `object` | `str` | The object type. |

#### Example: Load

```python
segment = client.Segment().load({"id": "segment_id"})
```


### Suppression

Create an instance: `suppression = client.Suppression()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the suppression was created. |
| `email` | `str` | Email address that is suppressed. |
| `id` | `str` | Unique identifier for the suppression. |
| `object` | `str` | Type of the response object. |
| `origin` | `str` | Origin of the suppression. |
| `source_id` | `str` | Identifier of the event that caused the suppression, such as the email that bounced or complained. |

#### Example: Load

```python
suppression = client.Suppression().load({"id": "suppression_id"})
```


### Template

Create an instance: `template = client.Template()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `str` | The alias of the template. |
| `created_at` | `str` | Timestamp indicating when the template was created. |
| `current_version_id` | `str` | The ID of the current version of the template. |
| `from` | `str` | Sender email address. |
| `has_unpublished_versions` | `bool` | Indicates whether the template has unpublished versions. |
| `html` | `str` | The HTML version of the template. |
| `id` | `str` | The ID of the template. |
| `name` | `str` | The name of the template. |
| `object` | `str` | The type of object. |
| `published_at` | `str | None` | Timestamp indicating when the template was published. |
| `reply_to` | `list | None` | Reply-to email addresses. |
| `status` | `str` | The publication status of the template. |
| `subject` | `str` | Email subject. |
| `text` | `str` | The plain text version of the template. |
| `updated_at` | `str` | Timestamp indicating when the template was last updated. |
| `variables` | `list` |  |

#### Example: Load

```python
template = client.Template().load({"id": "template_id"})
```

#### Example: Create

```python
template = client.Template().create({
    "id": "example_id",  # str
})
```


### Topic

Create an instance: `topic = client.Topic()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the topic was created. |
| `default_subscription` | `str` | The default subscription status for the topic. |
| `description` | `str` | A description of the topic. |
| `id` | `str` | The ID of the topic. |
| `name` | `str` | The name of the topic. |
| `object` | `str` | The object type. |
| `visibility` | `str` | The visibility of the topic. |

#### Example: Load

```python
topic = client.Topic().load({"id": "topic_id"})
```


### UpdateApiKey

Create an instance: `update_api_key = client.UpdateApiKey()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The ID of the API key. |
| `name` | `str` | The API key name. |
| `object` | `str` | The type of object. |


### UpdateBroadcastResponseSuccess

Create an instance: `update_broadcast_response_success = client.UpdateBroadcastResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `audience_id` | `str` | Use `segment_id` instead. |
| `from` | `str` | The email address of the sender. |
| `html` | `str` | The HTML version of the message. |
| `id` | `str` | The ID of the broadcast. |
| `name` | `str` | Name of the broadcast. |
| `object` | `str` | The object type of the response. |
| `preview_text` | `str` | The preview text of the email. |
| `reply_to` | `list` | The email addresses to which replies should be sent. |
| `segment_id` | `str` | Unique identifier of the segment this broadcast will be sent to. |
| `subject` | `str` | The subject line of the email. |
| `text` | `str` | The plain text version of the message. |
| `topic_id` | `str` | The topic ID that the broadcast will be scoped to. |


### UpdateContactPropertyResponseSuccess

Create an instance: `update_contact_property_response_success = client.UpdateContactPropertyResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `fallback_value` | `Any` | The default value to use when the property is not set for a contact. |
| `id` | `str` | The ID of the contact property. |
| `object` | `str` | The object type. |


### UpdateContactResponseSuccess

Create an instance: `update_contact_response_success = client.UpdateContactResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `str` | Email address of the contact. |
| `first_name` | `str` | First name of the contact. |
| `id` | `str` | Unique identifier for the updated contact. |
| `last_name` | `str` | Last name of the contact. |
| `object` | `str` | Type of the response object. |
| `properties` | `dict` | A map of custom property keys and values to update. |
| `unsubscribed` | `bool` | The Contact's global subscription status. |


### UpdateContactTopicsResponseSuccess

Create an instance: `update_contact_topics_response_success = client.UpdateContactTopicsResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contact_id` | `str` | The ID of the contact. |
| `object` | `str` | The object type. |
| `topics` | `list` | Array of updated topic subscriptions. |


### UpdateDomainResponseSuccess

Create an instance: `update_domain_response_success = client.UpdateDomainResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `capabilities` | `dict` | Configure the domain capabilities for sending and receiving emails. |
| `click_tracking` | `bool` | Track clicks within the body of each HTML email. |
| `id` | `str` | The ID of the updated domain. |
| `object` | `str` | The object type representing the updated domain. |
| `open_tracking` | `bool` | Track the open rate of each email. |
| `tls` | `str` | enforced | opportunistic. |
| `tracking_subdomain` | `str` | The subdomain to use for click and open tracking. |


### UpdateEmailOption

Create an instance: `update_email_option = client.UpdateEmailOption()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `scheduled_at` | `str` | Schedule email to be sent later. |


### UpdateEvent

Create an instance: `update_event = client.UpdateEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The ID of the updated event. |
| `object` | `str` | Type of the response object. |
| `schema` | `dict | None` | A flat key/type map defining the event payload schema. |


### UpdateSegmentResponseSuccess

Create an instance: `update_segment_response_success = client.UpdateSegmentResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` | The ID of the segment. |
| `name` | `str` | The name of the segment. |
| `object` | `str` | The object type. |


### UpdateTemplateResponseSuccess

Create an instance: `update_template_response_success = client.UpdateTemplateResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `alias` | `str` | The alias of the template. |
| `from` | `str` | Sender email address. |
| `html` | `str` | The HTML version of the template. |
| `id` | `str` | The ID of the template. |
| `name` | `str` | The name of the template. |
| `object` | `str` | The object type of the response. |
| `reply_to` | `list` | Reply-to email addresses. |
| `subject` | `str` | Email subject. |
| `text` | `str` | The plain text version of the template. |
| `variables` | `list` |  |


### UpdateTopicResponseSuccess

Create an instance: `update_topic_response_success = client.UpdateTopicResponseSuccess()`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` | A description of the topic. |
| `id` | `str` | The ID of the topic. |
| `name` | `str` | The name of the topic. |
| `object` | `str` | The object type. |
| `visibility` | `str` | The visibility of the topic. |


### UpdateWebhook

Create an instance: `update_webhook = client.UpdateWebhook()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the webhook was created. |
| `endpoint` | `str` | The URL where webhook events will be sent. |
| `events` | `list` | Array of event types to subscribe to. |
| `id` | `str` | The ID of the updated webhook. |
| `object` | `str` | The type of object. |
| `status` | `str` | The status of the webhook. |

#### Example: List

```python
update_webhooks = client.UpdateWebhook().list()
```

#### Example: Create

```python
update_webhook = client.UpdateWebhook().create({
    "endpoint": "example_endpoint",  # str
    "events": [],  # list
})
```


### Usage

Create an instance: `usage = client.Usage()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `ai_credits` | `dict` |  |
| `automation_runs` | `dict` |  |
| `broadcasts` | `dict` |  |
| `contacts` | `dict` |  |
| `domains` | `dict` |  |
| `emails` | `dict` |  |
| `object` | `str` | The type of object. |
| `rate_limit` | `dict` |  |
| `segments` | `dict` |  |

#### Example: Load

```python
usage = client.Usage().load()
```


### Webhook

Create an instance: `webhook = client.Webhook()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the webhook was created. |
| `endpoint` | `str` | The URL where webhook events are sent. |
| `events` | `list | None` | Array of event types subscribed to. |
| `id` | `str` | The ID of the webhook. |
| `object` | `str` | The type of object. |
| `signing_secret` | `str` | The secret key used to verify webhook payloads. |
| `status` | `str` | The status of the webhook. |

#### Example: Load

```python
webhook = client.Webhook().load({"id": "webhook_id"})
```


### WebhookEvent

Create an instance: `webhook_event = client.WebhookEvent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | Timestamp indicating when the event was created. |
| `id` | `str` | The ID of the webhook event. |
| `next_attempt_at` | `str | None` | Timestamp of the next scheduled delivery attempt, or null when none is scheduled. |
| `object` | `str` | The type of object. |
| `payload` | `dict` | The event payload sent to the webhook endpoint. |
| `status` | `str` | The delivery status of the event for this webhook. |
| `type` | `str` | The type of the event. |

#### Example: Load

```python
webhook_event = client.WebhookEvent().load({"id": "webhook_event_id", "webhook_id": "webhook_id"})
```

#### Example: Create

```python
webhook_event = client.WebhookEvent().create({
    "event_id": "example_event_id",  # str
    "webhook_id": "example_webhook_id",  # str
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: Test transport

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── resend_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── schema.py                    -- Generated option + entity specs
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`resend_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
contactimport = client.ContactImport()
contactimport.list()

# contactimport.data_get() now returns the contactimport data from the last list
# contactimport.match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
