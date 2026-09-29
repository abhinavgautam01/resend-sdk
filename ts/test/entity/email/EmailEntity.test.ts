

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ResendSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('EmailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.Email()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'email.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attachments":{"a":true,"h":"Attachments","n":"attachments","r":false,"t":"`$ARRAY`","key$":"attachments","index$":0},"bcc":{"a":true,"h":"Bcc","n":"bcc","r":false,"sh":"The email addresses of the blind carbon copy recipients.","t":"`$ARRAY`","key$":"bcc","index$":1},"cc":{"a":true,"h":"Cc","n":"cc","r":false,"sh":"The email addresses of the carbon copy recipients.","t":"`$ARRAY`","key$":"cc","index$":2},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The date and time the email was created.","t":"`$STRING`","key$":"created_at","index$":3},"from":{"a":true,"h":"From","n":"from","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The email address of the sender.","t":"`$STRING`","key$":"from","index$":4},"headers":{"a":true,"h":"Headers","n":"headers","r":false,"sh":"Custom headers to add to the email.","t":"`$OBJECT`","key$":"headers","index$":5},"html":{"a":true,"h":"Html","n":"html","r":false,"sh":"The HTML body of the email.","t":"`$STRING`","key$":"html","index$":6},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the email.","t":"`$STRING`","key$":"id","index$":7},"last_event":{"a":true,"h":"Last Event","n":"last_event","r":false,"sh":"The status of the email.","t":"`$STRING`","key$":"last_event","index$":8},"message_id":{"a":true,"h":"Message Id","n":"message_id","r":false,"sh":"The Message-ID header value of the email.","t":"`$STRING`","key$":"message_id","index$":9},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"object","index$":10},"reply_to":{"a":true,"h":"Reply To","n":"reply_to","r":false,"sh":"The email addresses to which replies should be sent.","t":"`$ARRAY`","key$":"reply_to","index$":11},"scheduled_at":{"a":true,"h":"Scheduled At","n":"scheduled_at","r":false,"sh":"Schedule email to be sent later.","t":"`$STRING`","key$":"scheduled_at","index$":12},"subject":{"a":true,"h":"Subject","n":"subject","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The subject line of the email.","t":"`$STRING`","key$":"subject","index$":13},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"t":"`$ARRAY`","key$":"tags","index$":14},"template":{"a":true,"h":"Template","n":"template","r":false,"t":"`$ANY`","union":{"branches":2,"count":1,"depth":5},"key$":"template","index$":15},"text":{"a":true,"h":"Text","n":"text","r":false,"sh":"The plain text body of the email.","t":"`$STRING`","key$":"text","index$":16},"to":{"a":true,"h":"To","n":"to","op":{"create":{"req":true,"type":"`$ANY`"}},"r":false,"sh":"Recipient email address.","t":"`$ARRAY`","key$":"to","index$":17},"topic_id":{"a":true,"h":"Topic Id","n":"topic_id","r":false,"sh":"The topic ID to scope the email to.","t":"`$STRING`","key$":"topic_id","index$":18}},"id":{"field":"id","name":"id"},"name":"email","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /emails/{email_id}/cancel","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"email_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/emails/{email_id}/cancel","q":{"$action":"cancel","exist":["id"]},"r":{"param":{"email_id":"id"}},"s":[{"lit":"emails"},{"var":"id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /emails/{email_id}/share","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"email_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/emails/{email_id}/share","q":{"$action":"share","exist":["id"]},"r":{"param":{"email_id":"id"}},"s":[{"lit":"emails"},{"var":"id"},{"lit":"share"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /emails","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"Idempotency-Key","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/emails","q":{"exist":["idempotency_key"]},"r":{},"s":[{"lit":"emails"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /emails","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/emails","q":{"exist":["after","before","limit"]},"r":{},"s":[{"lit":"emails"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /emails/{email_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"email_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/emails/{email_id}","q":{"exist":["id"]},"r":{"param":{"email_id":"id"}},"s":[{"lit":"emails"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"email","name__orig":"email","Name":"Email","name_":"email","name-":"email","NAME":"EMAIL","index$":18}, {"active":true,"entity":"email","key$":"BasicEmailFlow","kind":"basic","name":"BasicEmailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"email_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"email_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"email_ref01","srcdatavar":"email_ref01_data","suffix":"_dt0"},"m":{"id":"email01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-email_ref01"}}],"index$":2}]}, 'Email', {"POST /emails/{email_id}/cancel":{"protocol":"http","parameters":[{"name":"email_id","in":"path","required":true,"schema":{"type":"string"},"description":"The ID of the email.","index$":0}]},"POST /emails/{email_id}/share":{"protocol":"http","requestBody":{"required":false,"content":{"application/json":{"schema":{"type":"object","properties":{"expires_in":{"type":"string","description":"How long the link stays valid for, as a duration like `10m`, `2 hours`, or `1 day`. Defaults to `48h` and cannot exceed 48 hours."}},"x-ref":"#/components/schemas/ShareEmailOptions"}}}},"parameters":[{"name":"email_id","in":"path","required":true,"schema":{"type":"string"},"description":"The ID of the email.","index$":0}]},"POST /emails":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["from","to","subject"],"properties":{"from":{"type":"string","description":"Sender email address. To include a friendly name, use the format \"Your Name <sender@domain.com>\".","key$":"from"},"to":{"description":"Recipient email address. For multiple addresses, send as an array of strings. Max 50.","oneOf":[{"type":"string"},{"type":"array","items":{"type":"string"},"minItems":1,"maxItems":50}],"key$":"to"},"subject":{"type":"string","description":"Email subject.","key$":"subject"},"bcc":{"description":"Bcc recipient email address. For multiple addresses, send as an array of strings.","oneOf":[{"type":"string"},{"type":"array","items":{"type":"string"}}],"key$":"bcc"},"cc":{"description":"Cc recipient email address. For multiple addresses, send as an array of strings.","oneOf":[{"type":"string"},{"type":"array","items":{"type":"string"}}],"key$":"cc"},"reply_to":{"description":"Reply-to email address. For multiple addresses, send as an array of strings.","oneOf":[{"type":"string"},{"type":"array","items":{"type":"string"}}],"key$":"reply_to"},"html":{"type":"string","description":"The HTML version of the message.","key$":"html"},"text":{"type":"string","description":"The plain text version of the message.","key$":"text"},"template":{"allOf":[{"type":"object","properties":{"id":{},"variables":{}},"required":["id"],"x-ref":"#/components/schemas/EmailTemplateInput"},{"description":"Use a published template to send the email. If provided, do not include html or text."}],"key$":"template"},"headers":{"type":"object","description":"Custom headers to add to the email.","key$":"headers"},"scheduled_at":{"type":"string","description":"Schedule email to be sent later. The date should be in ISO 8601 format.","key$":"scheduled_at"},"attachments":{"type":"array","items":{"type":"object","properties":{"content":{"type":"string","format":"binary","description":"Content of an attached file."},"filename":{"type":"string","description":"Name of attached file."},"path":{"type":"string","description":"Path where the attachment file is hosted"},"content_type":{"type":"string","description":"Optional content type for the attachment, if not set it will be derived from the filename property"},"content_id":{"type":"string","description":"Content ID for embedding inline images using cid references (e.g., cid:image001)."}},"x-ref":"#/components/schemas/Attachment"},"key$":"attachments"},"tags":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string","description":"The name of the email tag. It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-). It can contain no more than 256 characters."},"value":{"type":"string","description":"The value of the email tag.It can only contain ASCII letters (a–z, A–Z), numbers (0–9), underscores (_), or dashes (-). It can contain no more than 256 characters."}},"x-ref":"#/components/schemas/Tag"},"key$":"tags"},"topic_id":{"type":"string","description":"The topic ID to scope the email to. If the recipient is a contact and opted-in to the topic, the email is sent. If opted-out, the email is not sent. If the recipient is not a contact, the email is sent if the topic's default subscription is opt_in.","key$":"topic_id"}},"x-ref":"#/components/schemas/SendEmailRequest","index$":1}}}},"parameters":[{"in":"header","name":"Idempotency-Key","required":false,"schema":{"type":"string","maxLength":256},"description":"A unique identifier for the request to ensure emails are only sent once. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)","index$":0}]},"GET /emails":{"protocol":"http","parameters":[{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":0},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":1},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":2}]},"GET /emails/{email_id}":{"protocol":"http","parameters":[{"name":"email_id","in":"path","required":true,"schema":{"type":"string"},"description":"The ID of the email.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const email_ref01_ent = client.Email()
    let email_ref01_data = setup.data.new.email['email_ref01']

    email_ref01_data = (await email_ref01_ent.create(email_ref01_data)).data()
    assert(null != email_ref01_data.id)


    // LIST
    const email_ref01_match: any = {}

    const email_ref01_list = (await email_ref01_ent.list(email_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(email_ref01_list, { id: email_ref01_data.id })))


    // LOAD
    const email_ref01_match_dt0: any = {}
    email_ref01_match_dt0.id = email_ref01_data.id
    const email_ref01_data_dt0 = (await email_ref01_ent.load(email_ref01_match_dt0)).data()
    assert(email_ref01_data_dt0.id === email_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/email/EmailTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ResendSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['email01','email02','email03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_EMAIL_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_EMAIL_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_EMAIL_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ResendSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.RESEND_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.RESEND_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
