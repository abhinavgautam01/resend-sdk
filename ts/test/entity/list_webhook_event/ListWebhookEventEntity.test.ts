

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


describe('ListWebhookEventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.ListWebhookEvent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_webhook_event.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"Timestamp indicating when the event was created.","t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the webhook event.","t":"`$STRING`","key$":"id","index$":1},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"The delivery status of the event for this webhook.","t":"`$STRING`","key$":"status","index$":2},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of the event.","t":"`$STRING`","key$":"type","index$":3}},"id":{"field":"id","name":"id"},"name":"list_webhook_event","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /webhooks/{webhook_id}/events","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"webhook_id","or":"webhook_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/webhooks/{webhook_id}/events","q":{"exist":["after","limit","webhook_id"]},"r":{},"s":[{"lit":"webhooks"},{"var":"webhook_id"},{"lit":"events"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.webhook"]]},"key$":"list_webhook_event","name__orig":"list_webhook_event","Name":"ListWebhookEvent","name_":"list_webhook_event","name-":"list-webhook-event","NAME":"LIST_WEBHOOK_EVENT","index$":27}, {"active":true,"entity":"list_webhook_event","key$":"BasicListWebhookEventFlow","kind":"basic","name":"BasicListWebhookEventFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"webhook_id":"webhook01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_webhook_event_ref01"}}],"index$":0}]}, 'ListWebhookEvent', {"GET /webhooks/{webhook_id}/events":{"protocol":"http","parameters":[{"name":"webhook_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The Webhook ID.","index$":0},{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":1},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_webhook_event_ref01_data = Object.values(setup.data.existing.list_webhook_event)[0] as any

    // LIST
    const list_webhook_event_ref01_ent = client.ListWebhookEvent()
    const list_webhook_event_ref01_match: any = {}
    list_webhook_event_ref01_match['webhook_id'] = setup.idmap['webhook01']

    const list_webhook_event_ref01_list = (await list_webhook_event_ref01_ent.list(list_webhook_event_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_webhook_event/ListWebhookEventTestData.json')

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
    ['list_webhook_event01','list_webhook_event02','list_webhook_event03','webhook01','webhook02','webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_LIST_WEBHOOK_EVENT_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_LIST_WEBHOOK_EVENT_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_LIST_WEBHOOK_EVENT_ENTID']
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
  
