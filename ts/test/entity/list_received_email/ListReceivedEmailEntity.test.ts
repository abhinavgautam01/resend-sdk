

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


describe('ListReceivedEmailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.ListReceivedEmail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_received_email.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"attachments":{"a":true,"h":"Attachments","n":"attachments","r":false,"sh":"Array of attachments for this email.","t":"`$ARRAY`","key$":"attachments","index$":0},"bcc":{"a":true,"h":"Bcc","n":"bcc","r":false,"sh":"The BCC recipients.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"bcc","index$":1},"cc":{"a":true,"h":"Cc","n":"cc","r":false,"sh":"The CC recipients.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"cc","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"Timestamp when the email was received.","t":"`$STRING`","key$":"created_at","index$":3},"from":{"a":true,"h":"From","n":"from","r":false,"sh":"The sender email address.","t":"`$STRING`","key$":"from","index$":4},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":false,"sh":"The ID of the received email.","t":"`$STRING`","key$":"id","index$":5},"message_id":{"a":true,"h":"Message Id","n":"message_id","r":false,"sh":"The unique message ID from the email headers.","t":"`$STRING`","key$":"message_id","index$":6},"reply_to":{"a":true,"h":"Reply To","n":"reply_to","r":false,"sh":"The reply-to addresses.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"reply_to","index$":7},"subject":{"a":true,"h":"Subject","n":"subject","r":false,"sh":"The email subject.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"subject","index$":8},"to":{"a":true,"h":"To","n":"to","r":false,"sh":"The recipient email addresses.","t":"`$ARRAY`","key$":"to","index$":9}},"id":{"field":"id","name":"id"},"name":"list_received_email","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /emails/receiving","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/emails/receiving","q":{"exist":["after","before","limit"]},"r":{},"s":[{"lit":"emails"},{"lit":"receiving"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_received_email","name__orig":"list_received_email","Name":"ListReceivedEmail","name_":"list_received_email","name-":"list-received-email","NAME":"LIST_RECEIVED_EMAIL","index$":26}, {"active":true,"entity":"list_received_email","key$":"BasicListReceivedEmailFlow","kind":"basic","name":"BasicListReceivedEmailFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_received_email_ref01"}}],"index$":0}]}, 'ListReceivedEmail', {"GET /emails/receiving":{"protocol":"http","parameters":[{"name":"limit","in":"query","required":false,"schema":{"type":"integer"},"description":"Maximum number of received emails to return.","index$":0},{"name":"after","in":"query","required":false,"schema":{"type":"string","format":"uuid"},"description":"Pagination cursor to fetch results after this email ID. Cannot be used with 'before'.","index$":1},{"name":"before","in":"query","required":false,"schema":{"type":"string","format":"uuid"},"description":"Pagination cursor to fetch results before this email ID. Cannot be used with 'after'.","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_received_email_ref01_data = Object.values(setup.data.existing.list_received_email)[0] as any

    // LIST
    const list_received_email_ref01_ent = client.ListReceivedEmail()
    const list_received_email_ref01_match: any = {}

    const list_received_email_ref01_list = (await list_received_email_ref01_ent.list(list_received_email_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_received_email/ListReceivedEmailTestData.json')

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
    ['list_received_email01','list_received_email02','list_received_email03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_LIST_RECEIVED_EMAIL_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_LIST_RECEIVED_EMAIL_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_LIST_RECEIVED_EMAIL_ENTID']
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
  
