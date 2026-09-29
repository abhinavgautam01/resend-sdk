// Typed models for the Resend SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AddContactToSegmentResponseSuccess {
  contact_id?: string
  object?: string
  segment_id?: string
}

export interface AddContactToSegmentResponseSuccessCreateData {
  contact_id: string
  segment_id: string
  object?: string
}

export interface ApiKey {
  created_at?: string
  domain_id?: string
  id?: string
  last_used_at?: string | null
  name: string
  permission?: string
}

export interface ApiKeyListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface ApiKeyCreateData {
  created_at?: string
  domain_id?: string
  id?: string
  last_used_at?: string | null
  name: string
  permission?: string
}

export interface ApiKeyRemoveMatch {
  id: string
}

export interface Audience {
  created_at?: string
  id?: string
  name?: string
  object?: string
}

export interface AudienceLoadMatch {
  id: string
}

export interface AudienceListMatch {
  created_at?: string
  id?: string
  name?: string
  object?: string
}

export interface AudienceCreateData {
  created_at?: string
  id?: string
  name?: string
  object?: string
}

export interface Automation {
  connections?: any[]
  created_at?: string
  id?: string
  name?: string
  object?: string
  status?: string
  steps?: any[]
  updated_at?: string
}

export interface AutomationLoadMatch {
  id: string
}

export interface AutomationListMatch {
  after?: string
  before?: string
  limit?: number
  status?: string
}

export interface AutomationCreateData {
  connections?: any[]
  created_at?: string
  id?: string
  name?: string
  object?: string
  status?: string
  steps?: any[]
  updated_at?: string

  // Selects a custom action instead of the plain create:
  //   'duplicate' | 'stop'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface AutomationUpdateData {
  id: string
  connections?: any[]
  created_at?: string
  name?: string
  object?: string
  status?: string
  steps?: any[]
  updated_at?: string
}

export interface AutomationRemoveMatch {
  id: string
}

export interface AutomationRun {
  completed_at?: string | null
  created_at?: string
  id?: string
  object?: string
  started_at?: string | null
  status?: string
  steps?: any[]
}

export interface AutomationRunLoadMatch {
  automation_id: string
  id: string
}

export interface AutomationRunListItem {
  completed_at?: string | null
  created_at?: string
  id?: string
  started_at?: string | null
  status?: string
}

export interface AutomationRunListItemListMatch {
  id: string
  after?: string
  before?: string
  limit?: number
  status?: string

  // Selects a custom action instead of the plain list:
  //   'runs'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface BatchAddSuppressionsResponseSuccess {
  emails: any[]
}

export interface BatchAddSuppressionsResponseSuccessCreateData {
  emails: any[]
}

export interface BatchRemoveSuppressionsResponseSuccess {
  data?: any[]
  emails?: any[]
  ids?: any[]
}

export interface BatchRemoveSuppressionsResponseSuccessCreateData {
  data?: any[]
  emails?: any[]
  ids?: any[]
}

export interface Broadcast {
  audience_id?: string | null
  created_at?: string
  from?: string
  html?: string | null
  id?: string
  name?: string
  preview_text?: string
  reply_to?: any[]
  scheduled_at?: string
  segment_id?: string | null
  send?: boolean
  sent_at?: string
  status?: string
  subject?: string
  text?: string | null
  topic_id?: string | null
}

export interface BroadcastLoadMatch {
  id: string
}

export interface BroadcastListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface BroadcastCreateData {
  audience_id?: string | null
  created_at?: string
  from?: string
  html?: string | null
  id?: string
  name?: string
  preview_text?: string
  reply_to?: any[]
  scheduled_at?: string
  segment_id?: string | null
  send?: boolean
  sent_at?: string
  status?: string
  subject?: string
  text?: string | null
  topic_id?: string | null

  // Selects a custom action instead of the plain create:
  //   'cancel' | 'duplicate' | 'send'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Contact {
  audience_id?: string
  created_at?: string
  email?: string
  first_name?: string | null
  id?: string
  last_name?: string | null
  object?: string
  properties?: Record<string, any>
  segments?: any[]
  topics?: any[]
  unsubscribed?: boolean
}

export interface ContactLoadMatch {
  id: string
}

export interface ContactListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface ContactCreateData {
  audience_id?: string
  created_at?: string
  email?: string
  first_name?: string | null
  id?: string
  last_name?: string | null
  object?: string
  properties?: Record<string, any>
  segments?: any[]
  topics?: any[]
  unsubscribed?: boolean
}

export interface ContactImport {
  completed_at?: string | null
  counts?: Record<string, any>
  created_at?: string
  id?: string
  object?: string
  status?: string
}

export interface ContactImportListMatch {
  after?: string
  before?: string
  limit?: number
  status?: string
}

export interface ContactImportResponseSuccess {
  completed_at?: string | null
  counts?: Record<string, any>
  created_at?: string
  id?: string
  object?: string
  status?: string
}

export interface ContactImportResponseSuccessLoadMatch {
  id: string
}

export interface ContactProperty {
  created_at?: string
  fallback_value?: any
  id?: string
  key?: string
  object?: string
  type?: string
}

export interface ContactPropertyLoadMatch {
  id: string
}

export interface ContactPropertyListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface ContactPropertyCreateData {
  created_at?: string
  fallback_value?: any
  id?: string
  key?: string
  object?: string
  type?: string
}

export interface ContactTopicsResponseSuccess {
  id?: string
}

export interface ContactTopicsResponseSuccessListMatch {
  id: string
  after?: string
  before?: string
  limit?: number

  // Selects a custom action instead of the plain list:
  //   'topics'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface CreateBatchEmail {
  data?: any[]
}

export interface CreateBatchEmailCreateData {
  data?: any[]
}

export interface CreateContactImportResponseSuccess {
}

export interface CreateContactImportResponseSuccessCreateData {
}

export interface Domain {
  capabilities?: Record<string, any>
  click_tracking?: boolean
  created_at?: string
  custom_return_path?: string
  id?: string
  name?: string
  object?: string
  open_tracking?: boolean
  records?: any[]
  region?: string
  status?: string
  tls?: string
  tracking_subdomain?: string
}

export interface DomainLoadMatch {
  id: string
}

export interface DomainListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface DomainCreateData {
  capabilities?: Record<string, any>
  click_tracking?: boolean
  created_at?: string
  custom_return_path?: string
  id?: string
  name?: string
  object?: string
  open_tracking?: boolean
  records?: any[]
  region?: string
  status?: string
  tls?: string
  tracking_subdomain?: string

  // Selects a custom action instead of the plain create:
  //   'verify'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface DomainRemoveMatch {
  id: string
}

export interface DomainClaim {
  blocked_reason?: string | null
  click_tracking?: boolean
  created_at?: string
  custom_return_path?: string
  domain_id?: string | null
  expires_at?: string
  failure_reason?: string | null
  id?: string
  name?: string
  object?: string
  open_tracking?: boolean
  record?: Record<string, any>
  region?: string | null
  status?: string
  tracking_subdomain?: string
}

export interface DomainClaimLoadMatch {
  id: string
}

export interface DomainClaimCreateData {
  blocked_reason?: string | null
  click_tracking?: boolean
  created_at?: string
  custom_return_path?: string
  domain_id?: string | null
  expires_at?: string
  failure_reason?: string | null
  id?: string
  name?: string
  object?: string
  open_tracking?: boolean
  record?: Record<string, any>
  region?: string | null
  status?: string
  tracking_subdomain?: string
}

export interface Email {
  attachments?: any[]
  bcc?: any[]
  cc?: any[]
  created_at?: string
  from?: string
  headers?: Record<string, any>
  html?: string
  id?: string
  last_event?: string
  message_id?: string
  object?: string
  reply_to?: any[]
  scheduled_at?: string
  subject?: string
  tags?: any[]
  template?: any
  text?: string
  to?: any[]
  topic_id?: string
}

export interface EmailLoadMatch {
  id: string
}

export interface EmailListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface EmailCreateData {
  attachments?: any[]
  bcc?: any[]
  cc?: any[]
  created_at?: string
  from?: string
  headers?: Record<string, any>
  html?: string
  id?: string
  last_event?: string
  message_id?: string
  object?: string
  reply_to?: any[]
  scheduled_at?: string
  subject?: string
  tags?: any[]
  template?: any
  text?: string
  to?: any[]
  topic_id?: string

  // Selects a custom action instead of the plain create:
  //   'cancel' | 'share'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface EmailsMetric {
  broadcast_id?: string
  broadcast_name?: string
  domain_id?: string
  domain_name?: string
  email_id?: string
  period?: string
}

export interface EmailsMetricListMatch {
  broadcast_id?: any[]
  dimension?: any[]
  domain_id?: any[]
  email_id?: any[]
  end_date?: string
  granularity?: string
  metric?: any[]
  start_date?: string
  timezone?: string
}

export interface Event {
  created_at?: string
  id?: string
  name?: string
  object?: string
  schema?: Record<string, any> | null
  updated_at?: string | null
}

export interface EventLoadMatch {
  id: string
}

export interface EventListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface EventCreateData {
  created_at?: string
  id?: string
  name?: string
  object?: string
  schema?: Record<string, any> | null
  updated_at?: string | null

  // Selects a custom action instead of the plain create:
  //   'send'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface ListAttachment {
  content_disposition?: string
  content_id?: string
  content_type?: string
  download_url?: string
  expires_at?: string
  filename?: string
  id?: string
  size?: number
}

export interface ListAttachmentListMatch {
  email_id: string
  after?: string
  before?: string
  limit?: number
}

export interface ListBroadcastClickedLinksResponseSuccess {
  clicks?: number
  id?: string
  unique_clicks?: number
  url?: string
}

export interface ListBroadcastClickedLinksResponseSuccessListMatch {
  broadcast_id: string
  after?: string
  before?: string
  limit?: number
}

export interface ListBroadcastRecipientsResponseSuccess {
  bounce_type?: string
  clicked_links?: any[]
  contact_id?: string | null
  count?: number
  email?: string
  id?: string
}

export interface ListBroadcastRecipientsResponseSuccessListMatch {
  broadcast_id: string
  after?: string
  before?: string
  bounce_type?: string
  email?: string
  limit?: number
  type: string
}

export interface ListContactSegmentsResponseSuccess {
  created_at?: string
  id?: string
  name?: string
}

export interface ListContactSegmentsResponseSuccessListMatch {
  contact_id: string
  after?: string
  before?: string
  limit?: number
}

export interface ListContactsResponseSuccess {
  created_at?: string
  email?: string
  first_name?: string | null
  id?: string
  last_name?: string | null
  unsubscribed?: boolean
}

export interface ListContactsResponseSuccessListMatch {
  segment_id: string
  after?: string
  before?: string
  limit?: number
}

export interface ListReceivedEmail {
  attachments?: any[]
  bcc?: any[] | null
  cc?: any[] | null
  created_at?: string
  from?: string
  id?: string
  message_id?: string
  reply_to?: any[] | null
  subject?: string | null
  to?: any[]
}

export interface ListReceivedEmailListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface ListWebhookEvent {
  created_at?: string
  id?: string
  status?: string
  type?: string
}

export interface ListWebhookEventListMatch {
  webhook_id: string
  after?: string
  limit?: number
}

export interface ListWebhookEventAttempt {
  http_status_code?: number
  id?: string
  response?: string
  sent_at?: string
}

export interface ListWebhookEventAttemptListMatch {
  event_id: string
  webhook_id: string
  after?: string
  limit?: number
}

export interface Log {
  created_at?: string
  endpoint?: string
  id?: string
  method?: string
  object?: string
  request_body?: Record<string, any> | null
  response_body?: Record<string, any> | null
  response_status?: number
  user_agent?: string | null
}

export interface LogLoadMatch {
  id: string
}

export interface LogListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface OAuthGrant {
  client?: Record<string, any>
  client_id?: string
  created_at?: string
  id?: string
  revoked_at?: string | null
  revoked_reason?: string | null
  scopes?: any[]
}

export interface OAuthGrantListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface ReceivedEmail {
  attachments?: any[]
  bcc?: any[] | null
  cc?: any[] | null
  created_at?: string
  from?: string
  headers?: Record<string, any> | null
  html?: string | null
  id?: string
  message_id?: string
  object?: string
  received_for?: any[]
  reply_to?: any[] | null
  subject?: string
  text?: string | null
  to?: any[]
}

export interface ReceivedEmailLoadMatch {
  email_id: string
}

export interface RemoveAudienceResponseSuccess {
  id?: string
}

export interface RemoveAudienceResponseSuccessRemoveMatch {
  id: string
}

export interface RemoveBroadcastResponseSuccess {
  id?: string
}

export interface RemoveBroadcastResponseSuccessRemoveMatch {
  id: string
}

export interface RemoveContactFromSegmentResponseSuccess {
}

export interface RemoveContactFromSegmentResponseSuccessRemoveMatch {
  contact_id: string
  segment_id: string
}

export interface RemoveContactPropertyResponseSuccess {
  id?: string
}

export interface RemoveContactPropertyResponseSuccessRemoveMatch {
  id: string
}

export interface RemoveContactResponseSuccess {
  id?: string
}

export interface RemoveContactResponseSuccessRemoveMatch {
  id: string
}

export interface RemoveEvent {
  id?: string
}

export interface RemoveEventRemoveMatch {
  id: string
}

export interface RemoveSegmentResponseSuccess {
  audience_id?: string
  created_at?: string
  filter?: Record<string, any>
  id?: string
  name: string
}

export interface RemoveSegmentResponseSuccessListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface RemoveSegmentResponseSuccessCreateData {
  audience_id?: string
  created_at?: string
  filter?: Record<string, any>
  id?: string
  name: string
}

export interface RemoveSegmentResponseSuccessRemoveMatch {
  id: string
}

export interface RemoveSuppressionResponseSuccess {
  created_at?: string
  email: string
  id?: string
  origin?: string
  source_id?: string
}

export interface RemoveSuppressionResponseSuccessListMatch {
  after?: string
  before?: string
  limit?: number
  origin?: string
}

export interface RemoveSuppressionResponseSuccessCreateData {
  created_at?: string
  email: string
  id?: string
  origin?: string
  source_id?: string
}

export interface RemoveSuppressionResponseSuccessRemoveMatch {
  suppression: string
}

export interface RemoveTemplateResponseSuccess {
  alias?: string
  created_at?: string
  from?: string
  html: string
  id?: string
  name: string
  published_at?: string | null
  reply_to?: any[]
  status?: string
  subject?: string
  text?: string
  updated_at?: string
  variables?: any[]
}

export interface RemoveTemplateResponseSuccessListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface RemoveTemplateResponseSuccessCreateData {
  alias?: string
  created_at?: string
  from?: string
  html: string
  id?: string
  name: string
  published_at?: string | null
  reply_to?: any[]
  status?: string
  subject?: string
  text?: string
  updated_at?: string
  variables?: any[]
}

export interface RemoveTemplateResponseSuccessRemoveMatch {
  id: string
}

export interface RemoveTopicResponseSuccess {
  created_at?: string
  default_subscription: string
  description?: string
  id?: string
  name: string
  visibility?: string
}

export interface RemoveTopicResponseSuccessListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface RemoveTopicResponseSuccessCreateData {
  created_at?: string
  default_subscription: string
  description?: string
  id?: string
  name: string
  visibility?: string
}

export interface RemoveTopicResponseSuccessRemoveMatch {
  id: string
}

export interface RetrievedAttachment {
  content_disposition?: string
  content_id?: string
  content_type?: string
  download_url?: string
  expires_at?: string
  filename?: string
  id?: string
  object?: string
  size?: number
}

export interface RetrievedAttachmentLoadMatch {
  email_id?: string
  id: string
  receiving_id?: string
}

export interface RevokeOAuthGrant {
  id?: string
}

export interface RevokeOAuthGrantRemoveMatch {
  id: string
}

export interface Rotate {
  id?: string
  object?: string
  signing_secret?: string
}

export interface RotateCreateData {
  webhook_id: string
  id?: string
  object?: string
  signing_secret?: string
}

export interface Segment {
  audience_id?: string
  created_at?: string
  filter?: Record<string, any>
  id?: string
  name?: string
  object?: string
}

export interface SegmentLoadMatch {
  id: string
}

export interface Suppression {
  created_at?: string
  email?: string
  id?: string
  object?: string
  origin?: string
  source_id?: string
}

export interface SuppressionLoadMatch {
  id: string
}

export interface Template {
  alias?: string
  created_at?: string
  current_version_id?: string
  from?: string
  has_unpublished_versions?: boolean
  html?: string
  id?: string
  name?: string
  object?: string
  published_at?: string | null
  reply_to?: any[] | null
  status?: string
  subject?: string
  text?: string
  updated_at?: string
  variables?: any[]
}

export interface TemplateLoadMatch {
  id: string
}

export interface TemplateCreateData {
  id: string
  alias?: string
  created_at?: string
  current_version_id?: string
  from?: string
  has_unpublished_versions?: boolean
  html?: string
  name?: string
  object?: string
  published_at?: string | null
  reply_to?: any[] | null
  status?: string
  subject?: string
  text?: string
  updated_at?: string
  variables?: any[]

  // Selects a custom action instead of the plain create:
  //   'duplicate' | 'publish'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Topic {
  created_at?: string
  default_subscription?: string
  description?: string
  id?: string
  name?: string
  object?: string
  visibility?: string
}

export interface TopicLoadMatch {
  id: string
}

export interface UpdateApiKey {
  id?: string
  name: string
  object?: string
}

export interface UpdateApiKeyUpdateData {
  id: string
  name?: string
  object?: string
}

export interface UpdateBroadcastResponseSuccess {
  audience_id?: string
  from?: string
  html?: string
  id?: string
  name?: string
  object?: string
  preview_text?: string
  reply_to?: any[]
  segment_id?: string
  subject?: string
  text?: string
  topic_id?: string
}

export interface UpdateBroadcastResponseSuccessUpdateData {
  id: string
  audience_id?: string
  from?: string
  html?: string
  name?: string
  object?: string
  preview_text?: string
  reply_to?: any[]
  segment_id?: string
  subject?: string
  text?: string
  topic_id?: string
}

export interface UpdateContactPropertyResponseSuccess {
  fallback_value?: any
  id?: string
  object?: string
}

export interface UpdateContactPropertyResponseSuccessUpdateData {
  id: string
  fallback_value?: any
  object?: string
}

export interface UpdateContactResponseSuccess {
  email?: string
  first_name?: string
  id?: string
  last_name?: string
  object?: string
  properties?: Record<string, any>
  unsubscribed?: boolean
}

export interface UpdateContactResponseSuccessUpdateData {
  id: string
  email?: string
  first_name?: string
  last_name?: string
  object?: string
  properties?: Record<string, any>
  unsubscribed?: boolean
}

export interface UpdateContactTopicsResponseSuccess {
  contact_id?: string
  object?: string
  topics?: any[]
}

export interface UpdateContactTopicsResponseSuccessUpdateData {
  contact_id: string
  object?: string
  topics?: any[]
}

export interface UpdateDomainResponseSuccess {
  capabilities?: Record<string, any>
  click_tracking?: boolean
  id?: string
  object?: string
  open_tracking?: boolean
  tls?: string
  tracking_subdomain?: string
}

export interface UpdateDomainResponseSuccessUpdateData {
  domain_id: string
  capabilities?: Record<string, any>
  click_tracking?: boolean
  id?: string
  object?: string
  open_tracking?: boolean
  tls?: string
  tracking_subdomain?: string
}

export interface UpdateEmailOption {
  scheduled_at?: string
}

export interface UpdateEmailOptionUpdateData {
  email_id: string
  scheduled_at?: string
}

export interface UpdateEvent {
  id?: string
  object?: string
  schema: Record<string, any> | null
}

export interface UpdateEventUpdateData {
  id: string
  object?: string
  schema?: Record<string, any> | null
}

export interface UpdateSegmentResponseSuccess {
  id?: string
  name: string
  object?: string
}

export interface UpdateSegmentResponseSuccessUpdateData {
  id: string
  name?: string
  object?: string
}

export interface UpdateTemplateResponseSuccess {
  alias?: string
  from?: string
  html?: string
  id?: string
  name?: string
  object?: string
  reply_to?: any[]
  subject?: string
  text?: string
  variables?: any[]
}

export interface UpdateTemplateResponseSuccessUpdateData {
  id: string
  alias?: string
  from?: string
  html?: string
  name?: string
  object?: string
  reply_to?: any[]
  subject?: string
  text?: string
  variables?: any[]
}

export interface UpdateTopicResponseSuccess {
  description?: string
  id?: string
  name?: string
  object?: string
  visibility?: string
}

export interface UpdateTopicResponseSuccessUpdateData {
  id: string
  description?: string
  name?: string
  object?: string
  visibility?: string
}

export interface UpdateWebhook {
  created_at?: string
  endpoint: string
  events: any[]
  id?: string
  object?: string
  status?: string
}

export interface UpdateWebhookListMatch {
  after?: string
  before?: string
  limit?: number
}

export interface UpdateWebhookCreateData {
  created_at?: string
  endpoint: string
  events: any[]
  id?: string
  object?: string
  status?: string
}

export interface UpdateWebhookUpdateData {
  id: string
  created_at?: string
  endpoint?: string
  events?: any[]
  object?: string
  status?: string
}

export interface Usage {
  ai_credits?: Record<string, any>
  automation_runs?: Record<string, any>
  broadcasts?: Record<string, any>
  contacts?: Record<string, any>
  domains?: Record<string, any>
  emails?: Record<string, any>
  object?: string
  rate_limit?: Record<string, any>
  segments?: Record<string, any>
}

export interface UsageLoadMatch {
  ai_credits?: Record<string, any>
  automation_runs?: Record<string, any>
  broadcasts?: Record<string, any>
  contacts?: Record<string, any>
  domains?: Record<string, any>
  emails?: Record<string, any>
  object?: string
  rate_limit?: Record<string, any>
  segments?: Record<string, any>
}

export interface Webhook {
  created_at?: string
  endpoint?: string
  events?: any[] | null
  id?: string
  object?: string
  signing_secret?: string
  status?: string
}

export interface WebhookLoadMatch {
  id: string
}

export interface WebhookRemoveMatch {
  id: string
}

export interface WebhookEvent {
  created_at?: string
  id?: string
  next_attempt_at?: string | null
  object?: string
  payload?: Record<string, any>
  status?: string
  type?: string
}

export interface WebhookEventLoadMatch {
  id: string
  webhook_id: string
}

export interface WebhookEventCreateData {
  event_id: string
  webhook_id: string
  created_at?: string
  id?: string
  next_attempt_at?: string | null
  object?: string
  payload?: Record<string, any>
  status?: string
  type?: string

  // Selects a custom action instead of the plain create:
  //   'replay'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

