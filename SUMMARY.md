# Resend

Resend is the email platform for developers.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 64 entities and 113 HTTP routes. There are 2 SDK targets.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### AddContactToSegmentResponseSuccess

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `contact_id`: The ID of the contact.
- `object`: The object type.
- `segment_id`: The ID of the segment.

### ApiKey

Results: OK.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `created_at`: The date and time the API key was created.
- `domain_id`: Restrict an API key to send emails only from a specific domain.
- `id`: The ID of the API key.
- `last_used_at`: The date and time the API key was last used.
- `name`: The name of the API key.

### Audience

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the audience was created.
- `id`: The ID of the audience.
- `name`: The name of the audience.
- `object`: The object of the audience.

### Automation

Results: OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `connections`: The connections between steps in the active version of the automation.
- `created_at`: The date and time the automation was created.
- `id`: The ID of the duplicated automation.
- `name`: The name of the automation.
- `object`: Type of the response object.

### AutomationRun

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `completed_at`: The date and time the run completed.
- `created_at`: The date and time the run was created.
- `id`: The ID of the automation run.
- `object`: Type of the response object.
- `started_at`: The date and time the run started.

### AutomationRunListItem

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `completed_at`: The date and time the run completed.
- `created_at`: The date and time the run was created.
- `id`: The ID of the automation run.
- `started_at`: The date and time the run started.
- `status`: The current status of the automation run.

### BatchAddSuppressionsResponseSuccess

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `emails`: Email addresses to suppress.

### BatchRemoveSuppressionsResponseSuccess

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `data`: Array containing the removed suppressions.
- `emails`: Email addresses to remove from the suppression list.
- `ids`: Suppression IDs to remove from the suppression list.

### Broadcast

Results: OK; Created.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `audience_id`: Deprecated. Use segment_id instead.
- `created_at`: Timestamp indicating when the broadcast was created.
- `from`: The email address of the sender.
- `html`: The HTML version of the broadcast content.
- `id`: The ID of the broadcast.

### Contact

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `audience_id`: Unique identifier of the audience to which the contact belongs.
- `created_at`: Timestamp indicating when the contact was created.
- `email`: Email address of the contact.
- `first_name`: First name of the contact.
- `id`: Unique identifier for the created contact.

### ContactImport

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `completed_at`: Timestamp indicating when the contact import completed.
- `created_at`: Timestamp indicating when the contact import was created.
- `id`: Unique identifier for the contact import.
- `object`: Type of the response object.
- `status`: Current status of the contact import.

### ContactImportResponseSuccess

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `completed_at`: Timestamp indicating when the contact import completed.
- `created_at`: Timestamp indicating when the contact import was created.
- `id`: Unique identifier for the contact import.
- `object`: Type of the response object.
- `status`: Current status of the contact import.

### ContactProperty

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the contact property was created.
- `fallback_value`: The default value when the property is not set for a contact.
- `id`: The ID of the contact property.
- `key`: The property key.
- `object`: The object type of the response.

### ContactTopicsResponseSuccess

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `id`: Unique identifier for the topic.

### CreateBatchEmail

Results: OK.

SDK operations: `create`.

### CreateContactImportResponseSuccess

Results: OK.

SDK operations: `create`.

### Domain

Results: OK.

SDK operations: `create`, `list`, `load`, `remove`.

Key fields to recognise:

- `capabilities`: Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.
- `click_tracking`: Whether click tracking is enabled for this domain.
- `created_at`: The date and time the domain was created.
- `custom_return_path`: For advanced use cases, choose a subdomain for the Return-Path address.
- `id`: The ID of the domain.

### DomainClaim

Results: OK; An identical pending claim already existed and was returned unchanged.; Claim created.

SDK operations: `create`, `load`.

Key fields to recognise:

- `blocked_reason`: Why the claim is currently blocked, if applicable.
- `click_tracking`: Track clicks within the body of each HTML email.
- `created_at`: The date and time the claim was created.
- `custom_return_path`: For advanced use cases, choose a subdomain for the Return-Path address.
- `domain_id`: The ID of the placeholder domain created for the claim.

### Email

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `bcc`: The email addresses of the blind carbon copy recipients.
- `cc`: The email addresses of the carbon copy recipients.
- `created_at`: The date and time the email was created.
- `from`: The email address of the sender.
- `headers`: Custom headers to add to the email.

### EmailsMetric

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `broadcast_id`: Present when `broadcast` is in `dimensions`.
- `broadcast_name`: Present when `broadcast` is in `dimensions`.
- `domain_id`: Present when `domain` is in `dimensions`.
- `domain_name`: Present when `domain` is in `dimensions`.
- `email_id`: Present when `email` is in `dimensions`.

### Event

Results: OK; Accepted.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created_at`: The date and time the event was created.
- `id`: The ID of the created event.
- `name`: The event name.
- `object`: Type of the response object.
- `schema`: A flat key/type map defining the event payload schema. Supported types are `string`, `number`, `boolean`, and `date`.

### ListAttachment

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `content_disposition`: How the attachment should be displayed.
- `content_id`: The content ID for inline attachments.
- `content_type`: The MIME type of the attachment.
- `download_url`: Signed URL to download the attachment content.
- `expires_at`: Timestamp when the download URL expires.

### ListBroadcastClickedLinksResponseSuccess

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `clicks`: Total number of clicks on this URL.
- `id`: An opaque cursor for this row, used only for pagination. It does not identify any entity in Resend.
- `unique_clicks`: Number of unique clicks on this URL.
- `url`: The URL that was clicked.

### ListBroadcastRecipientsResponseSuccess

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `bounce_type`: The type of bounce. Only present when `type` is `bounced`.
- `clicked_links`: The links this recipient clicked. Only present when `type` is `clicked`.
- `contact_id`: The ID of the contact associated with this recipient, if one exists.
- `count`: The number of times this recipient triggered the event. Only present when `type` is `opened` or `clicked`.
- `email`: The recipient&#39;s email address.

### ListContactSegmentsResponseSuccess

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the contact was added to the segment.
- `id`: Unique identifier for the segment.
- `name`: Name of the segment.

### ListContactsResponseSuccess

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the contact was created.
- `email`: Email address of the contact.
- `first_name`: First name of the contact.
- `id`: Unique identifier for the contact.
- `last_name`: Last name of the contact.

### ListReceivedEmail

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `attachments`: Array of attachments for this email.
- `bcc`: The BCC recipients.
- `cc`: The CC recipients.
- `created_at`: Timestamp when the email was received.
- `from`: The sender email address.

### ListWebhookEvent

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the event was created.
- `id`: The ID of the webhook event.
- `status`: The delivery status of the event for this webhook.
- `type`: The type of the event.

### ListWebhookEventAttempt

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `http_status_code`: The HTTP status code returned by the webhook endpoint.
- `id`: The ID of the webhook event attempt.
- `response`: The response body returned by the webhook endpoint.
- `sent_at`: Timestamp indicating when the attempt was sent.

### Log

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `created_at`: The date the log was created.
- `endpoint`: The API endpoint that was called.
- `id`: The log ID.
- `method`: The HTTP method used.
- `object`: Type of the response object.

### OAuthGrant

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `client`: The OAuth client the grant was issued to.
- `client_id`: The ID of the OAuth client the grant was issued to.
- `created_at`: The date and time the OAuth grant was created.
- `id`: The ID of the OAuth grant.
- `revoked_at`: The date and time the OAuth grant was revoked, or null if it is still active.

### ReceivedEmail

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `attachments`: Array of attachments.
- `bcc`: The BCC recipients.
- `cc`: The CC recipients.
- `created_at`: Timestamp when the email was received.
- `from`: The sender email address.

### RemoveAudienceResponseSuccess

Results: OK.

SDK operations: `remove`.

Key fields to recognise:

- `id`: The ID of the audience.

### RemoveBroadcastResponseSuccess

Results: OK.

SDK operations: `remove`.

Key fields to recognise:

- `id`: The ID of the broadcast.

### RemoveContactFromSegmentResponseSuccess

Results: OK.

SDK operations: `remove`.

### RemoveContactPropertyResponseSuccess

Results: OK.

SDK operations: `remove`.

Key fields to recognise:

- `id`: The ID of the contact property.

### RemoveContactResponseSuccess

Results: OK.

SDK operations: `remove`.

Key fields to recognise:

- `id`: Unique identifier for the removed contact.

### RemoveEvent

Results: OK.

SDK operations: `remove`.

Key fields to recognise:

- `id`: The ID of the deleted event.

### RemoveSegmentResponseSuccess

Results: OK.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `audience_id`: The ID of the audience this segment belongs to.
- `created_at`: Timestamp indicating when the segment was created.
- `filter`: Filter conditions for the segment.
- `id`: The ID of the segment.
- `name`: Name of the segment.

### RemoveSuppressionResponseSuccess

Results: OK.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the suppression was created.
- `email`: Email address that is suppressed.
- `id`: Unique identifier for the created suppression.
- `origin`: Origin of the suppression.
- `source_id`: Identifier of the event that caused the suppression, such as the email that bounced or complained.

### RemoveTemplateResponseSuccess

Results: OK.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `alias`: The alias of the template.
- `created_at`: Timestamp indicating when the template was created.
- `from`: Sender email address.
- `html`: The HTML version of the template.
- `id`: The ID of the template.

### RemoveTopicResponseSuccess

Results: OK.

SDK operations: `create`, `list`, `remove`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the topic was created.
- `default_subscription`: The default subscription status for the topic.
- `description`: A description of the topic.
- `id`: The ID of the topic.
- `name`: Name of the topic.

### RetrievedAttachment

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `content_disposition`: How the attachment should be displayed.
- `content_id`: The content ID for inline attachments.
- `content_type`: The MIME type of the attachment.
- `download_url`: Signed URL to download the attachment content.
- `expires_at`: Timestamp when the download URL expires.

### RevokeOAuthGrant

Results: OK.

SDK operations: `remove`.

Key fields to recognise:

- `id`: The ID of the OAuth grant.

### Rotate

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `id`: The ID of the webhook.
- `object`: The type of object.
- `signing_secret`: The new secret key used to verify webhook payloads.

### Segment

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `audience_id`: The ID of the audience this segment belongs to.
- `created_at`: Timestamp indicating when the segment was created.
- `filter`: Filter conditions for the segment.
- `id`: The ID of the segment.
- `name`: The name of the segment.

### Suppression

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the suppression was created.
- `email`: Email address that is suppressed.
- `id`: Unique identifier for the suppression.
- `object`: Type of the response object.
- `origin`: Origin of the suppression.

### Template

Results: OK.

SDK operations: `create`, `load`.

Key fields to recognise:

- `alias`: The alias of the template.
- `created_at`: Timestamp indicating when the template was created.
- `current_version_id`: The ID of the current version of the template.
- `from`: Sender email address. To include a friendly name, use the format &quot;Your Name &lt;sender@domain.com&gt;&quot;.
- `has_unpublished_versions`: Indicates whether the template has unpublished versions.

### Topic

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the topic was created.
- `default_subscription`: The default subscription status for the topic.
- `description`: A description of the topic.
- `id`: The ID of the topic.
- `name`: The name of the topic.

### UpdateApiKey

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `id`: The ID of the API key.
- `name`: The API key name.
- `object`: The type of object.

### UpdateBroadcastResponseSuccess

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `audience_id`: Use `segment_id` instead.
- `from`: The email address of the sender.
- `html`: The HTML version of the message.
- `id`: The ID of the broadcast.
- `name`: Name of the broadcast.

### UpdateContactPropertyResponseSuccess

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `fallback_value`: The default value to use when the property is not set for a contact.
- `id`: The ID of the contact property.
- `object`: The object type.

### UpdateContactResponseSuccess

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `email`: Email address of the contact.
- `first_name`: First name of the contact.
- `id`: Unique identifier for the updated contact.
- `last_name`: Last name of the contact.
- `object`: Type of the response object.

### UpdateContactTopicsResponseSuccess

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `contact_id`: The ID of the contact.
- `object`: The object type.
- `topics`: Array of updated topic subscriptions.

### UpdateDomainResponseSuccess

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `capabilities`: Configure the domain capabilities for sending and receiving emails.
- `click_tracking`: Track clicks within the body of each HTML email.
- `id`: The ID of the updated domain.
- `object`: The object type representing the updated domain.
- `open_tracking`: Track the open rate of each email.

### UpdateEmailOption

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `scheduled_at`: Schedule email to be sent later. The date should be in ISO 8601 format.

### UpdateEvent

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `id`: The ID of the updated event.
- `object`: Type of the response object.
- `schema`: A flat key/type map defining the event payload schema.

### UpdateSegmentResponseSuccess

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `id`: The ID of the segment.
- `name`: The name of the segment.
- `object`: The object type.

### UpdateTemplateResponseSuccess

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `alias`: The alias of the template.
- `from`: Sender email address.
- `html`: The HTML version of the template.
- `id`: The ID of the template.
- `name`: The name of the template.

### UpdateTopicResponseSuccess

Results: OK.

SDK operations: `update`.

Key fields to recognise:

- `description`: A description of the topic.
- `id`: The ID of the topic.
- `name`: The name of the topic.
- `object`: The object type.
- `visibility`: The visibility of the topic.

### UpdateWebhook

Results: Created; OK.

SDK operations: `create`, `list`, `update`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the webhook was created.
- `endpoint`: The URL where webhook events are sent.
- `events`: Array of event types subscribed to.
- `id`: The ID of the webhook.
- `object`: The type of object.

### Usage

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `object`: The type of object.

### Webhook

Results: OK.

SDK operations: `load`, `remove`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the webhook was created.
- `endpoint`: The URL where webhook events are sent.
- `events`: Array of event types subscribed to.
- `id`: The ID of the webhook.
- `object`: The type of object.

### WebhookEvent

Results: OK.

SDK operations: `create`, `load`.

Key fields to recognise:

- `created_at`: Timestamp indicating when the event was created.
- `id`: The ID of the replayed webhook event.
- `next_attempt_at`: Timestamp of the next scheduled delivery attempt, or null when none is scheduled. Always null once the event has succeeded or permanently failed.
- `object`: The type of object.
- `payload`: The event payload sent to the webhook endpoint.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| AddContactToSegmentResponseSuccess | `create` | `POST /contacts/{contact_id}/segments/{segment_id}` | Required |
| ApiKey | `create` | `POST /api-keys` | Required |
| ApiKey | `list` | `GET /api-keys` | Required |
| ApiKey | `remove` | `DELETE /api-keys/{api_key_id}` | Required |
| Audience | `create` | `POST /audiences` | Required |
| Audience | `list` | `GET /audiences` | Required |
| Audience | `load` | `GET /audiences/{id}` | Required |
| Automation | `create` | `POST /automations/{automation_id}/duplicate` | Required |
| Automation | `create` | `POST /automations/{automation_id}/stop` | Required |
| Automation | `create` | `POST /automations` | Required |
| Automation | `list` | `GET /automations` | Required |
| Automation | `load` | `GET /automations/{automation_id}` | Required |
| Automation | `remove` | `DELETE /automations/{automation_id}` | Required |
| Automation | `update` | `PATCH /automations/{automation_id}` | Required |
| AutomationRun | `load` | `GET /automations/{automation_id}/runs/{run_id}` | Required |
| AutomationRunListItem | `list` | `GET /automations/{automation_id}/runs` | Required |
| BatchAddSuppressionsResponseSuccess | `create` | `POST /suppressions/batch/add` | Required |
| BatchRemoveSuppressionsResponseSuccess | `create` | `POST /suppressions/batch/remove` | Required |
| Broadcast | `create` | `POST /broadcasts/{id}/cancel` | Required |
| Broadcast | `create` | `POST /broadcasts/{id}/duplicate` | Required |
| Broadcast | `create` | `POST /broadcasts/{id}/send` | Required |
| Broadcast | `create` | `POST /broadcasts` | Required |
| Broadcast | `list` | `GET /broadcasts` | Required |
| Broadcast | `load` | `GET /broadcasts/{id}` | Required |
| Contact | `create` | `POST /contacts` | Required |
| Contact | `list` | `GET /contacts` | Required |
| Contact | `load` | `GET /contacts/{id}` | Required |
| ContactImport | `list` | `GET /contacts/imports` | Required |
| ContactImportResponseSuccess | `load` | `GET /contacts/imports/{id}` | Required |
| ContactProperty | `create` | `POST /contact-properties` | Required |
| ContactProperty | `list` | `GET /contact-properties` | Required |
| ContactProperty | `load` | `GET /contact-properties/{id}` | Required |
| ContactTopicsResponseSuccess | `list` | `GET /contacts/{contact_id}/topics` | Required |
| CreateBatchEmail | `create` | `POST /emails/batch` | Required |
| CreateContactImportResponseSuccess | `create` | `POST /contacts/imports` | Required |
| Domain | `create` | `POST /domains/{domain_id}/verify` | Required |
| Domain | `create` | `POST /domains` | Required |
| Domain | `list` | `GET /domains` | Required |
| Domain | `load` | `GET /domains/{domain_id}` | Required |
| Domain | `remove` | `DELETE /domains/{domain_id}` | Required |
| DomainClaim | `create` | `POST /domains/{domain_id}/claim/verify` | Required |
| DomainClaim | `create` | `POST /domains/claim` | Required |
| DomainClaim | `load` | `GET /domains/{domain_id}/claim` | Required |
| Email | `create` | `POST /emails/{email_id}/cancel` | Required |
| Email | `create` | `POST /emails/{email_id}/share` | Required |
| Email | `create` | `POST /emails` | Required |
| Email | `list` | `GET /emails` | Required |
| Email | `load` | `GET /emails/{email_id}` | Required |
| EmailsMetric | `list` | `GET /emails/metrics` | Required |
| Event | `create` | `POST /events` | Required |
| Event | `create` | `POST /events/send` | Required |
| Event | `list` | `GET /events` | Required |
| Event | `load` | `GET /events/{identifier}` | Required |
| ListAttachment | `list` | `GET /emails/{email_id}/attachments` | Required |
| ListAttachment | `list` | `GET /emails/receiving/{email_id}/attachments` | Required |
| ListBroadcastClickedLinksResponseSuccess | `list` | `GET /broadcasts/{id}/clicked-links` | Required |
| ListBroadcastRecipientsResponseSuccess | `list` | `GET /broadcasts/{id}/recipients` | Required |
| ListContactSegmentsResponseSuccess | `list` | `GET /contacts/{contact_id}/segments` | Required |
| ListContactsResponseSuccess | `list` | `GET /segments/{id}/contacts` | Required |
| ListReceivedEmail | `list` | `GET /emails/receiving` | Required |
| ListWebhookEvent | `list` | `GET /webhooks/{webhook_id}/events` | Required |
| ListWebhookEventAttempt | `list` | `GET /webhooks/{webhook_id}/events/{event_id}/attempts` | Required |
| Log | `list` | `GET /logs` | Required |
| Log | `load` | `GET /logs/{log_id}` | Required |
| OAuthGrant | `list` | `GET /oauth/grants` | Required |
| ReceivedEmail | `load` | `GET /emails/receiving/{email_id}` | Required |
| RemoveAudienceResponseSuccess | `remove` | `DELETE /audiences/{id}` | Required |
| RemoveBroadcastResponseSuccess | `remove` | `DELETE /broadcasts/{id}` | Required |
| RemoveContactFromSegmentResponseSuccess | `remove` | `DELETE /contacts/{contact_id}/segments/{segment_id}` | Required |
| RemoveContactPropertyResponseSuccess | `remove` | `DELETE /contact-properties/{id}` | Required |
| RemoveContactResponseSuccess | `remove` | `DELETE /contacts/{id}` | Required |
| RemoveEvent | `remove` | `DELETE /events/{identifier}` | Required |
| RemoveSegmentResponseSuccess | `create` | `POST /segments` | Required |
| RemoveSegmentResponseSuccess | `list` | `GET /segments` | Required |
| RemoveSegmentResponseSuccess | `remove` | `DELETE /segments/{id}` | Required |
| RemoveSuppressionResponseSuccess | `create` | `POST /suppressions` | Required |
| RemoveSuppressionResponseSuccess | `list` | `GET /suppressions` | Required |
| RemoveSuppressionResponseSuccess | `remove` | `DELETE /suppressions/{suppression}` | Required |
| RemoveTemplateResponseSuccess | `create` | `POST /templates` | Required |
| RemoveTemplateResponseSuccess | `list` | `GET /templates` | Required |
| RemoveTemplateResponseSuccess | `remove` | `DELETE /templates/{id}` | Required |
| RemoveTopicResponseSuccess | `create` | `POST /topics` | Required |
| RemoveTopicResponseSuccess | `list` | `GET /topics` | Required |
| RemoveTopicResponseSuccess | `remove` | `DELETE /topics/{id}` | Required |
| RetrievedAttachment | `load` | `GET /emails/{email_id}/attachments/{attachment_id}` | Required |
| RetrievedAttachment | `load` | `GET /emails/receiving/{email_id}/attachments/{attachment_id}` | Required |
| RevokeOAuthGrant | `remove` | `DELETE /oauth/grants/{oauth_grant_id}` | Required |
| Rotate | `create` | `POST /webhooks/{webhook_id}/signing-secret/rotate` | Required |
| Segment | `load` | `GET /segments/{id}` | Required |
| Suppression | `load` | `GET /suppressions/{suppression}` | Required |
| Template | `create` | `POST /templates/{id}/duplicate` | Required |
| Template | `create` | `POST /templates/{id}/publish` | Required |
| Template | `load` | `GET /templates/{id}` | Required |
| Topic | `load` | `GET /topics/{id}` | Required |
| UpdateApiKey | `update` | `PATCH /api-keys/{api_key_id}` | Required |
| UpdateBroadcastResponseSuccess | `update` | `PATCH /broadcasts/{id}` | Required |
| UpdateContactPropertyResponseSuccess | `update` | `PATCH /contact-properties/{id}` | Required |
| UpdateContactResponseSuccess | `update` | `PATCH /contacts/{id}` | Required |
| UpdateContactTopicsResponseSuccess | `update` | `PATCH /contacts/{contact_id}/topics` | Required |
| UpdateDomainResponseSuccess | `update` | `PATCH /domains/{domain_id}` | Required |
| UpdateEmailOption | `update` | `PATCH /emails/{email_id}` | Required |
| UpdateEvent | `update` | `PATCH /events/{identifier}` | Required |
| UpdateSegmentResponseSuccess | `update` | `PATCH /segments/{id}` | Required |
| UpdateTemplateResponseSuccess | `update` | `PATCH /templates/{id}` | Required |
| UpdateTopicResponseSuccess | `update` | `PATCH /topics/{id}` | Required |
| UpdateWebhook | `create` | `POST /webhooks` | Required |
| UpdateWebhook | `list` | `GET /webhooks` | Required |
| UpdateWebhook | `update` | `PATCH /webhooks/{webhook_id}` | Required |
| Usage | `load` | `GET /usage` | Required |
| Webhook | `load` | `GET /webhooks/{webhook_id}` | Required |
| Webhook | `remove` | `DELETE /webhooks/{webhook_id}` | Required |
| WebhookEvent | `create` | `POST /webhooks/{webhook_id}/events/{event_id}/replay` | Required |
| WebhookEvent | `load` | `GET /webhooks/{webhook_id}/events/{event_id}` | Required |

## Connect to the API

- API server: `https://api.resend.com`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Python | `py/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `test`: In-memory mock transport for testing without a live server

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

