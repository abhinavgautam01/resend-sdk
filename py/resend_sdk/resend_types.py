# Typed models for the Resend SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
# params (op.<name>.points[].g.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AddContactToSegmentResponseSuccess(TypedDict, total=False):
    contact_id: str
    object: str
    segment_id: str


class AddContactToSegmentResponseSuccessCreateDataRequired(TypedDict):
    contact_id: str
    segment_id: str


class AddContactToSegmentResponseSuccessCreateData(AddContactToSegmentResponseSuccessCreateDataRequired, total=False):
    object: str


class ApiKeyRequired(TypedDict):
    name: str


class ApiKey(ApiKeyRequired, total=False):
    created_at: str
    domain_id: str
    id: str
    last_used_at: str | None
    permission: str


class ApiKeyListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class ApiKeyCreateDataRequired(TypedDict):
    name: str


class ApiKeyCreateData(ApiKeyCreateDataRequired, total=False):
    created_at: str
    domain_id: str
    id: str
    last_used_at: str | None
    permission: str


class ApiKeyRemoveMatch(TypedDict):
    id: str


class Audience(TypedDict, total=False):
    created_at: str
    id: str
    name: str
    object: str


class AudienceLoadMatch(TypedDict):
    id: str


class AudienceListMatch(TypedDict, total=False):
    created_at: str
    id: str
    name: str
    object: str


class AudienceCreateData(TypedDict, total=False):
    created_at: str
    id: str
    name: str
    object: str


class Automation(TypedDict, total=False):
    connections: list
    created_at: str
    id: str
    name: str
    object: str
    status: str
    steps: list
    updated_at: str


class AutomationLoadMatch(TypedDict):
    id: str


class AutomationListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int
    status: str


class AutomationCreateData(TypedDict, total=False):
    connections: list
    created_at: str
    id: str
    name: str
    object: str
    status: str
    steps: list
    updated_at: str


class AutomationUpdateDataRequired(TypedDict):
    id: str


class AutomationUpdateData(AutomationUpdateDataRequired, total=False):
    connections: list
    created_at: str
    name: str
    object: str
    status: str
    steps: list
    updated_at: str


class AutomationRemoveMatch(TypedDict):
    id: str


class AutomationRun(TypedDict, total=False):
    completed_at: str | None
    created_at: str
    id: str
    object: str
    started_at: str | None
    status: str
    steps: list


class AutomationRunLoadMatch(TypedDict):
    automation_id: str
    id: str


class AutomationRunListItem(TypedDict, total=False):
    completed_at: str | None
    created_at: str
    id: str
    started_at: str | None
    status: str


class AutomationRunListItemListMatchRequired(TypedDict):
    id: str


class AutomationRunListItemListMatch(AutomationRunListItemListMatchRequired, total=False):
    after: str
    before: str
    limit: int
    status: str


class BatchAddSuppressionsResponseSuccess(TypedDict):
    emails: list


class BatchAddSuppressionsResponseSuccessCreateData(TypedDict):
    emails: list


class BatchRemoveSuppressionsResponseSuccess(TypedDict, total=False):
    data: list
    emails: list
    ids: list


class BatchRemoveSuppressionsResponseSuccessCreateData(TypedDict, total=False):
    data: list
    emails: list
    ids: list


class Broadcast(TypedDict, total=False):
    audience_id: str | None
    created_at: str
    html: str | None
    id: str
    name: str
    preview_text: str
    reply_to: list
    scheduled_at: str
    segment_id: str | None
    send: bool
    sent_at: str
    status: str
    subject: str
    text: str | None
    topic_id: str | None


class BroadcastLoadMatch(TypedDict):
    id: str


class BroadcastListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class BroadcastCreateData(TypedDict, total=False):
    audience_id: str | None
    created_at: str
    html: str | None
    id: str
    name: str
    preview_text: str
    reply_to: list
    scheduled_at: str
    segment_id: str | None
    send: bool
    sent_at: str
    status: str
    subject: str
    text: str | None
    topic_id: str | None


class Contact(TypedDict, total=False):
    audience_id: str
    created_at: str
    email: str
    first_name: str | None
    id: str
    last_name: str | None
    object: str
    properties: dict
    segments: list
    topics: list
    unsubscribed: bool


class ContactLoadMatch(TypedDict):
    id: str


class ContactListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class ContactCreateData(TypedDict, total=False):
    audience_id: str
    created_at: str
    email: str
    first_name: str | None
    id: str
    last_name: str | None
    object: str
    properties: dict
    segments: list
    topics: list
    unsubscribed: bool


class ContactImport(TypedDict, total=False):
    completed_at: str | None
    counts: dict
    created_at: str
    id: str
    object: str
    status: str


class ContactImportListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int
    status: str


class ContactImportResponseSuccess(TypedDict, total=False):
    completed_at: str | None
    counts: dict
    created_at: str
    id: str
    object: str
    status: str


class ContactImportResponseSuccessLoadMatch(TypedDict):
    id: str


class ContactProperty(TypedDict, total=False):
    created_at: str
    fallback_value: Any
    id: str
    key: str
    object: str
    type: str


class ContactPropertyLoadMatch(TypedDict):
    id: str


class ContactPropertyListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class ContactPropertyCreateData(TypedDict, total=False):
    created_at: str
    fallback_value: Any
    id: str
    key: str
    object: str
    type: str


class ContactTopicsResponseSuccess(TypedDict, total=False):
    id: str


class ContactTopicsResponseSuccessListMatchRequired(TypedDict):
    id: str


class ContactTopicsResponseSuccessListMatch(ContactTopicsResponseSuccessListMatchRequired, total=False):
    after: str
    before: str
    limit: int


class CreateBatchEmail(TypedDict, total=False):
    data: list


class CreateBatchEmailCreateData(TypedDict, total=False):
    data: list


class CreateContactImportResponseSuccess(TypedDict):
    pass


class CreateContactImportResponseSuccessCreateData(TypedDict):
    pass


class Domain(TypedDict, total=False):
    capabilities: dict
    click_tracking: bool
    created_at: str
    custom_return_path: str
    id: str
    name: str
    object: str
    open_tracking: bool
    records: list
    region: str
    status: str
    tls: str
    tracking_subdomain: str


class DomainLoadMatch(TypedDict):
    id: str


class DomainListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class DomainCreateData(TypedDict, total=False):
    capabilities: dict
    click_tracking: bool
    created_at: str
    custom_return_path: str
    id: str
    name: str
    object: str
    open_tracking: bool
    records: list
    region: str
    status: str
    tls: str
    tracking_subdomain: str


class DomainRemoveMatch(TypedDict):
    id: str


class DomainClaim(TypedDict, total=False):
    blocked_reason: str | None
    click_tracking: bool
    created_at: str
    custom_return_path: str
    domain_id: str | None
    expires_at: str
    failure_reason: str | None
    id: str
    name: str
    object: str
    open_tracking: bool
    record: dict
    region: str | None
    status: str
    tracking_subdomain: str


class DomainClaimLoadMatch(TypedDict):
    id: str


class DomainClaimCreateData(TypedDict, total=False):
    blocked_reason: str | None
    click_tracking: bool
    created_at: str
    custom_return_path: str
    domain_id: str | None
    expires_at: str
    failure_reason: str | None
    id: str
    name: str
    object: str
    open_tracking: bool
    record: dict
    region: str | None
    status: str
    tracking_subdomain: str


class Email(TypedDict, total=False):
    attachments: list
    bcc: list
    cc: list
    created_at: str
    headers: dict
    html: str
    id: str
    last_event: str
    message_id: str
    object: str
    reply_to: list
    scheduled_at: str
    subject: str
    tags: list
    template: Any
    text: str
    to: list
    topic_id: str


class EmailLoadMatch(TypedDict):
    id: str


class EmailListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class EmailCreateData(TypedDict, total=False):
    attachments: list
    bcc: list
    cc: list
    created_at: str
    headers: dict
    html: str
    id: str
    last_event: str
    message_id: str
    object: str
    reply_to: list
    scheduled_at: str
    subject: str
    tags: list
    template: Any
    text: str
    to: list
    topic_id: str


class EmailsMetric(TypedDict, total=False):
    broadcast_id: str
    broadcast_name: str
    domain_id: str
    domain_name: str
    email_id: str
    period: str


class EmailsMetricListMatch(TypedDict, total=False):
    broadcast_id: list
    dimension: list
    domain_id: list
    email_id: list
    end_date: str
    granularity: str
    metric: list
    start_date: str
    timezone: str


class Event(TypedDict, total=False):
    created_at: str
    id: str
    name: str
    object: str
    schema: dict | None
    updated_at: str | None


class EventLoadMatch(TypedDict):
    id: str


class EventListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class EventCreateData(TypedDict, total=False):
    created_at: str
    id: str
    name: str
    object: str
    schema: dict | None
    updated_at: str | None


class ListAttachment(TypedDict, total=False):
    content_disposition: str
    content_id: str
    content_type: str
    download_url: str
    expires_at: str
    filename: str
    id: str
    size: int


class ListAttachmentListMatchRequired(TypedDict):
    email_id: str


class ListAttachmentListMatch(ListAttachmentListMatchRequired, total=False):
    after: str
    before: str
    limit: int


class ListBroadcastClickedLinksResponseSuccess(TypedDict, total=False):
    clicks: int
    id: str
    unique_clicks: int
    url: str


class ListBroadcastClickedLinksResponseSuccessListMatchRequired(TypedDict):
    broadcast_id: str


class ListBroadcastClickedLinksResponseSuccessListMatch(ListBroadcastClickedLinksResponseSuccessListMatchRequired, total=False):
    after: str
    before: str
    limit: int


class ListBroadcastRecipientsResponseSuccess(TypedDict, total=False):
    bounce_type: str
    clicked_links: list
    contact_id: str | None
    count: int
    email: str
    id: str


class ListBroadcastRecipientsResponseSuccessListMatchRequired(TypedDict):
    broadcast_id: str
    type: str


class ListBroadcastRecipientsResponseSuccessListMatch(ListBroadcastRecipientsResponseSuccessListMatchRequired, total=False):
    after: str
    before: str
    bounce_type: str
    email: str
    limit: int


class ListContactSegmentsResponseSuccess(TypedDict, total=False):
    created_at: str
    id: str
    name: str


class ListContactSegmentsResponseSuccessListMatchRequired(TypedDict):
    contact_id: str


class ListContactSegmentsResponseSuccessListMatch(ListContactSegmentsResponseSuccessListMatchRequired, total=False):
    after: str
    before: str
    limit: int


class ListContactsResponseSuccess(TypedDict, total=False):
    created_at: str
    email: str
    first_name: str | None
    id: str
    last_name: str | None
    unsubscribed: bool


class ListContactsResponseSuccessListMatchRequired(TypedDict):
    segment_id: str


class ListContactsResponseSuccessListMatch(ListContactsResponseSuccessListMatchRequired, total=False):
    after: str
    before: str
    limit: int


class ListReceivedEmail(TypedDict, total=False):
    attachments: list
    bcc: list | None
    cc: list | None
    created_at: str
    id: str
    message_id: str
    reply_to: list | None
    subject: str | None
    to: list


class ListReceivedEmailListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class ListWebhookEvent(TypedDict, total=False):
    created_at: str
    id: str
    status: str
    type: str


class ListWebhookEventListMatchRequired(TypedDict):
    webhook_id: str


class ListWebhookEventListMatch(ListWebhookEventListMatchRequired, total=False):
    after: str
    limit: int


class ListWebhookEventAttempt(TypedDict, total=False):
    http_status_code: int
    id: str
    response: str
    sent_at: str


class ListWebhookEventAttemptListMatchRequired(TypedDict):
    event_id: str
    webhook_id: str


class ListWebhookEventAttemptListMatch(ListWebhookEventAttemptListMatchRequired, total=False):
    after: str
    limit: int


class Log(TypedDict, total=False):
    created_at: str
    endpoint: str
    id: str
    method: str
    object: str
    request_body: dict | None
    response_body: dict | None
    response_status: int
    user_agent: str | None


class LogLoadMatch(TypedDict):
    id: str


class LogListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class OAuthGrant(TypedDict, total=False):
    client: dict
    client_id: str
    created_at: str
    id: str
    revoked_at: str | None
    revoked_reason: str | None
    scopes: list


class OAuthGrantListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class ReceivedEmail(TypedDict, total=False):
    attachments: list
    bcc: list | None
    cc: list | None
    created_at: str
    headers: dict | None
    html: str | None
    id: str
    message_id: str
    object: str
    received_for: list
    reply_to: list | None
    subject: str
    text: str | None
    to: list


class ReceivedEmailLoadMatch(TypedDict):
    email_id: str


class RemoveAudienceResponseSuccess(TypedDict, total=False):
    id: str


class RemoveAudienceResponseSuccessRemoveMatch(TypedDict):
    id: str


class RemoveBroadcastResponseSuccess(TypedDict, total=False):
    id: str


class RemoveBroadcastResponseSuccessRemoveMatch(TypedDict):
    id: str


class RemoveContactFromSegmentResponseSuccess(TypedDict):
    pass


class RemoveContactFromSegmentResponseSuccessRemoveMatch(TypedDict):
    contact_id: str
    segment_id: str


class RemoveContactPropertyResponseSuccess(TypedDict, total=False):
    id: str


class RemoveContactPropertyResponseSuccessRemoveMatch(TypedDict):
    id: str


class RemoveContactResponseSuccess(TypedDict, total=False):
    id: str


class RemoveContactResponseSuccessRemoveMatch(TypedDict):
    id: str


class RemoveEvent(TypedDict, total=False):
    id: str


class RemoveEventRemoveMatch(TypedDict):
    id: str


class RemoveSegmentResponseSuccessRequired(TypedDict):
    name: str


class RemoveSegmentResponseSuccess(RemoveSegmentResponseSuccessRequired, total=False):
    audience_id: str
    created_at: str
    filter: dict
    id: str


class RemoveSegmentResponseSuccessListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class RemoveSegmentResponseSuccessCreateDataRequired(TypedDict):
    name: str


class RemoveSegmentResponseSuccessCreateData(RemoveSegmentResponseSuccessCreateDataRequired, total=False):
    audience_id: str
    created_at: str
    filter: dict
    id: str


class RemoveSegmentResponseSuccessRemoveMatch(TypedDict):
    id: str


class RemoveSuppressionResponseSuccessRequired(TypedDict):
    email: str


class RemoveSuppressionResponseSuccess(RemoveSuppressionResponseSuccessRequired, total=False):
    created_at: str
    id: str
    origin: str
    source_id: str


class RemoveSuppressionResponseSuccessListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int
    origin: str


class RemoveSuppressionResponseSuccessCreateDataRequired(TypedDict):
    email: str


class RemoveSuppressionResponseSuccessCreateData(RemoveSuppressionResponseSuccessCreateDataRequired, total=False):
    created_at: str
    id: str
    origin: str
    source_id: str


class RemoveSuppressionResponseSuccessRemoveMatch(TypedDict):
    suppression: str


class RemoveTemplateResponseSuccessRequired(TypedDict):
    html: str
    name: str


class RemoveTemplateResponseSuccess(RemoveTemplateResponseSuccessRequired, total=False):
    alias: str
    created_at: str
    id: str
    published_at: str | None
    reply_to: list
    status: str
    subject: str
    text: str
    updated_at: str
    variables: list


class RemoveTemplateResponseSuccessListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class RemoveTemplateResponseSuccessCreateDataRequired(TypedDict):
    html: str
    name: str


class RemoveTemplateResponseSuccessCreateData(RemoveTemplateResponseSuccessCreateDataRequired, total=False):
    alias: str
    created_at: str
    id: str
    published_at: str | None
    reply_to: list
    status: str
    subject: str
    text: str
    updated_at: str
    variables: list


class RemoveTemplateResponseSuccessRemoveMatch(TypedDict):
    id: str


class RemoveTopicResponseSuccessRequired(TypedDict):
    default_subscription: str
    name: str


class RemoveTopicResponseSuccess(RemoveTopicResponseSuccessRequired, total=False):
    created_at: str
    description: str
    id: str
    visibility: str


class RemoveTopicResponseSuccessListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class RemoveTopicResponseSuccessCreateDataRequired(TypedDict):
    default_subscription: str
    name: str


class RemoveTopicResponseSuccessCreateData(RemoveTopicResponseSuccessCreateDataRequired, total=False):
    created_at: str
    description: str
    id: str
    visibility: str


class RemoveTopicResponseSuccessRemoveMatch(TypedDict):
    id: str


class RetrievedAttachment(TypedDict, total=False):
    content_disposition: str
    content_id: str
    content_type: str
    download_url: str
    expires_at: str
    filename: str
    id: str
    object: str
    size: int


class RetrievedAttachmentLoadMatchRequired(TypedDict):
    id: str


class RetrievedAttachmentLoadMatch(RetrievedAttachmentLoadMatchRequired, total=False):
    email_id: str
    receiving_id: str


class RevokeOAuthGrant(TypedDict, total=False):
    id: str


class RevokeOAuthGrantRemoveMatch(TypedDict):
    id: str


class Rotate(TypedDict, total=False):
    id: str
    object: str
    signing_secret: str


class RotateCreateDataRequired(TypedDict):
    webhook_id: str


class RotateCreateData(RotateCreateDataRequired, total=False):
    id: str
    object: str
    signing_secret: str


class Segment(TypedDict, total=False):
    audience_id: str
    created_at: str
    filter: dict
    id: str
    name: str
    object: str


class SegmentLoadMatch(TypedDict):
    id: str


class Suppression(TypedDict, total=False):
    created_at: str
    email: str
    id: str
    object: str
    origin: str
    source_id: str


class SuppressionLoadMatch(TypedDict):
    id: str


class Template(TypedDict, total=False):
    alias: str
    created_at: str
    current_version_id: str
    has_unpublished_versions: bool
    html: str
    id: str
    name: str
    object: str
    published_at: str | None
    reply_to: list | None
    status: str
    subject: str
    text: str
    updated_at: str
    variables: list


class TemplateLoadMatch(TypedDict):
    id: str


class TemplateCreateDataRequired(TypedDict):
    id: str


class TemplateCreateData(TemplateCreateDataRequired, total=False):
    alias: str
    created_at: str
    current_version_id: str
    has_unpublished_versions: bool
    html: str
    name: str
    object: str
    published_at: str | None
    reply_to: list | None
    status: str
    subject: str
    text: str
    updated_at: str
    variables: list


class Topic(TypedDict, total=False):
    created_at: str
    default_subscription: str
    description: str
    id: str
    name: str
    object: str
    visibility: str


class TopicLoadMatch(TypedDict):
    id: str


class UpdateApiKeyRequired(TypedDict):
    name: str


class UpdateApiKey(UpdateApiKeyRequired, total=False):
    id: str
    object: str


class UpdateApiKeyUpdateDataRequired(TypedDict):
    id: str


class UpdateApiKeyUpdateData(UpdateApiKeyUpdateDataRequired, total=False):
    name: str
    object: str


class UpdateBroadcastResponseSuccess(TypedDict, total=False):
    audience_id: str
    html: str
    id: str
    name: str
    object: str
    preview_text: str
    reply_to: list
    segment_id: str
    subject: str
    text: str
    topic_id: str


class UpdateBroadcastResponseSuccessUpdateDataRequired(TypedDict):
    id: str


class UpdateBroadcastResponseSuccessUpdateData(UpdateBroadcastResponseSuccessUpdateDataRequired, total=False):
    audience_id: str
    html: str
    name: str
    object: str
    preview_text: str
    reply_to: list
    segment_id: str
    subject: str
    text: str
    topic_id: str


class UpdateContactPropertyResponseSuccess(TypedDict, total=False):
    fallback_value: Any
    id: str
    object: str


class UpdateContactPropertyResponseSuccessUpdateDataRequired(TypedDict):
    id: str


class UpdateContactPropertyResponseSuccessUpdateData(UpdateContactPropertyResponseSuccessUpdateDataRequired, total=False):
    fallback_value: Any
    object: str


class UpdateContactResponseSuccess(TypedDict, total=False):
    email: str
    first_name: str
    id: str
    last_name: str
    object: str
    properties: dict
    unsubscribed: bool


class UpdateContactResponseSuccessUpdateDataRequired(TypedDict):
    id: str


class UpdateContactResponseSuccessUpdateData(UpdateContactResponseSuccessUpdateDataRequired, total=False):
    email: str
    first_name: str
    last_name: str
    object: str
    properties: dict
    unsubscribed: bool


class UpdateContactTopicsResponseSuccess(TypedDict, total=False):
    contact_id: str
    object: str
    topics: list


class UpdateContactTopicsResponseSuccessUpdateDataRequired(TypedDict):
    contact_id: str


class UpdateContactTopicsResponseSuccessUpdateData(UpdateContactTopicsResponseSuccessUpdateDataRequired, total=False):
    object: str
    topics: list


class UpdateDomainResponseSuccess(TypedDict, total=False):
    capabilities: dict
    click_tracking: bool
    id: str
    object: str
    open_tracking: bool
    tls: str
    tracking_subdomain: str


class UpdateDomainResponseSuccessUpdateDataRequired(TypedDict):
    domain_id: str


class UpdateDomainResponseSuccessUpdateData(UpdateDomainResponseSuccessUpdateDataRequired, total=False):
    capabilities: dict
    click_tracking: bool
    id: str
    object: str
    open_tracking: bool
    tls: str
    tracking_subdomain: str


class UpdateEmailOption(TypedDict, total=False):
    scheduled_at: str


class UpdateEmailOptionUpdateDataRequired(TypedDict):
    email_id: str


class UpdateEmailOptionUpdateData(UpdateEmailOptionUpdateDataRequired, total=False):
    scheduled_at: str


class UpdateEventRequired(TypedDict):
    schema: dict | None


class UpdateEvent(UpdateEventRequired, total=False):
    id: str
    object: str


class UpdateEventUpdateDataRequired(TypedDict):
    id: str


class UpdateEventUpdateData(UpdateEventUpdateDataRequired, total=False):
    object: str
    schema: dict | None


class UpdateSegmentResponseSuccessRequired(TypedDict):
    name: str


class UpdateSegmentResponseSuccess(UpdateSegmentResponseSuccessRequired, total=False):
    id: str
    object: str


class UpdateSegmentResponseSuccessUpdateDataRequired(TypedDict):
    id: str


class UpdateSegmentResponseSuccessUpdateData(UpdateSegmentResponseSuccessUpdateDataRequired, total=False):
    name: str
    object: str


class UpdateTemplateResponseSuccess(TypedDict, total=False):
    alias: str
    html: str
    id: str
    name: str
    object: str
    reply_to: list
    subject: str
    text: str
    variables: list


class UpdateTemplateResponseSuccessUpdateDataRequired(TypedDict):
    id: str


class UpdateTemplateResponseSuccessUpdateData(UpdateTemplateResponseSuccessUpdateDataRequired, total=False):
    alias: str
    html: str
    name: str
    object: str
    reply_to: list
    subject: str
    text: str
    variables: list


class UpdateTopicResponseSuccess(TypedDict, total=False):
    description: str
    id: str
    name: str
    object: str
    visibility: str


class UpdateTopicResponseSuccessUpdateDataRequired(TypedDict):
    id: str


class UpdateTopicResponseSuccessUpdateData(UpdateTopicResponseSuccessUpdateDataRequired, total=False):
    description: str
    name: str
    object: str
    visibility: str


class UpdateWebhookRequired(TypedDict):
    endpoint: str
    events: list


class UpdateWebhook(UpdateWebhookRequired, total=False):
    created_at: str
    id: str
    object: str
    status: str


class UpdateWebhookListMatch(TypedDict, total=False):
    after: str
    before: str
    limit: int


class UpdateWebhookCreateDataRequired(TypedDict):
    endpoint: str
    events: list


class UpdateWebhookCreateData(UpdateWebhookCreateDataRequired, total=False):
    created_at: str
    id: str
    object: str
    status: str


class UpdateWebhookUpdateDataRequired(TypedDict):
    id: str


class UpdateWebhookUpdateData(UpdateWebhookUpdateDataRequired, total=False):
    created_at: str
    endpoint: str
    events: list
    object: str
    status: str


class Usage(TypedDict, total=False):
    ai_credits: dict
    automation_runs: dict
    broadcasts: dict
    contacts: dict
    domains: dict
    emails: dict
    object: str
    rate_limit: dict
    segments: dict


class UsageLoadMatch(TypedDict, total=False):
    ai_credits: dict
    automation_runs: dict
    broadcasts: dict
    contacts: dict
    domains: dict
    emails: dict
    object: str
    rate_limit: dict
    segments: dict


class Webhook(TypedDict, total=False):
    created_at: str
    endpoint: str
    events: list | None
    id: str
    object: str
    signing_secret: str
    status: str


class WebhookLoadMatch(TypedDict):
    id: str


class WebhookRemoveMatch(TypedDict):
    id: str


class WebhookEvent(TypedDict, total=False):
    created_at: str
    id: str
    next_attempt_at: str | None
    object: str
    payload: dict
    status: str
    type: str


class WebhookEventLoadMatch(TypedDict):
    id: str
    webhook_id: str


class WebhookEventCreateDataRequired(TypedDict):
    event_id: str
    webhook_id: str


class WebhookEventCreateData(WebhookEventCreateDataRequired, total=False):
    created_at: str
    id: str
    next_attempt_at: str | None
    object: str
    payload: dict
    status: str
    type: str
