

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


describe('WebhookEventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.WebhookEvent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhook_event.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"sh":"Timestamp indicating when the event was created.","t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the webhook event.","t":"`$STRING`","key$":"id","index$":1},"next_attempt_at":{"a":true,"fo":"date-time","h":"Next Attempt At","n":"next_attempt_at","r":false,"sh":"Timestamp of the next scheduled delivery attempt, or null when none is scheduled.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"next_attempt_at","index$":2},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"object","index$":3},"payload":{"a":true,"h":"Payload","n":"payload","r":false,"sh":"The event payload sent to the webhook endpoint.","t":"`$OBJECT`","key$":"payload","index$":4},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"The delivery status of the event for this webhook.","t":"`$STRING`","key$":"status","index$":5},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of the event.","t":"`$STRING`","key$":"type","index$":6}},"id":{"field":"id","name":"id"},"name":"webhook_event","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /webhooks/{webhook_id}/events/{event_id}/replay","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"event_id","or":"event_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"webhook_id","or":"webhook_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/webhooks/{webhook_id}/events/{event_id}/replay","q":{"$action":"replay","exist":["event_id","webhook_id"]},"r":{},"s":[{"lit":"webhooks"},{"var":"webhook_id"},{"lit":"events"},{"var":"event_id"},{"lit":"replay"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /webhooks/{webhook_id}/events/{event_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"event_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"webhook_id","or":"webhook_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/webhooks/{webhook_id}/events/{event_id}","q":{"exist":["id","webhook_id"]},"r":{"param":{"event_id":"id"}},"s":[{"lit":"webhooks"},{"var":"webhook_id"},{"lit":"events"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.webhook"],["$.main.kit.entity.webhook","$.main.kit.entity.event"]]},"key$":"webhook_event","name__orig":"webhook_event","Name":"WebhookEvent","name_":"webhook_event","name-":"webhook-event","NAME":"WEBHOOK_EVENT","index$":63}, {"active":true,"entity":"webhook_event","key$":"BasicWebhookEventFlow","kind":"basic","name":"BasicWebhookEventFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"webhook_event_ref01"},"m":{"event_id":"event01","webhook_id":"webhook01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"webhook_event_ref01","srcdatavar":"webhook_event_ref01_data","suffix":"_dt0"},"m":{"id":"webhook_event01","webhook_id":"webhook01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_event_ref01"}}],"index$":1}]}, 'WebhookEvent', {"POST /webhooks/{webhook_id}/events/{event_id}/replay":{"protocol":"http","parameters":[{"name":"webhook_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The Webhook ID.","index$":0},{"name":"event_id","in":"path","required":true,"schema":{"type":"string"},"description":"The Webhook Event ID.","index$":1}]},"GET /webhooks/{webhook_id}/events/{event_id}":{"protocol":"http","parameters":[{"name":"webhook_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The Webhook ID.","index$":0},{"name":"event_id","in":"path","required":true,"schema":{"type":"string"},"description":"The Webhook Event ID.","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const webhook_event_ref01_ent = client.WebhookEvent()
    let webhook_event_ref01_data = setup.data.new.webhook_event['webhook_event_ref01']
    webhook_event_ref01_data['event_id'] = setup.idmap['event01']
    webhook_event_ref01_data['webhook_id'] = setup.idmap['webhook01']

    webhook_event_ref01_data = (await webhook_event_ref01_ent.create(webhook_event_ref01_data)).data()
    assert(null != webhook_event_ref01_data.id)


    // LOAD
    const webhook_event_ref01_match_dt0: any = {}
    webhook_event_ref01_match_dt0.id = webhook_event_ref01_data.id
    const webhook_event_ref01_data_dt0 = (await webhook_event_ref01_ent.load(webhook_event_ref01_match_dt0)).data()
    assert(webhook_event_ref01_data_dt0.id === webhook_event_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/webhook_event/WebhookEventTestData.json')

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
    ['webhook_event01','webhook_event02','webhook_event03','webhook01','webhook02','webhook03','event01','event02','event03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_WEBHOOK_EVENT_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_WEBHOOK_EVENT_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_WEBHOOK_EVENT_ENTID']
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
  
