

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


describe('ListBroadcastRecipientsResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.ListBroadcastRecipientsResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_broadcast_recipients_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bounce_type":{"a":true,"h":"Bounce Type","n":"bounce_type","r":false,"sh":"The type of bounce.","t":"`$STRING`","key$":"bounce_type","index$":0},"clicked_links":{"a":true,"h":"Clicked Links","n":"clicked_links","r":false,"sh":"The links this recipient clicked.","t":"`$ARRAY`","key$":"clicked_links","index$":1},"contact_id":{"a":true,"h":"Contact Id","n":"contact_id","r":false,"sh":"The ID of the contact associated with this recipient, if one exists.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"contact_id","index$":2},"count":{"a":true,"h":"Count","n":"count","r":false,"sh":"The number of times this recipient triggered the event.","t":"`$INTEGER`","key$":"count","index$":3},"email":{"a":true,"h":"Email","n":"email","r":false,"sh":"The recipient's email address.","t":"`$STRING`","key$":"email","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Opaque cursor identifying this row, used for pagination.","t":"`$STRING`","key$":"id","index$":5}},"id":{"field":"id","name":"id"},"name":"list_broadcast_recipients_response_success","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /broadcasts/{id}/recipients","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"broadcast_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"bounce_type","or":"bounce_type","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"email","or":"email","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"type","or":"type","r":true,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/broadcasts/{id}/recipients","q":{"exist":["after","before","bounce_type","broadcast_id","email","limit","type"]},"r":{"param":{"id":"broadcast_id"}},"s":[{"lit":"broadcasts"},{"var":"broadcast_id"},{"lit":"recipients"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.broadcast"]]},"key$":"list_broadcast_recipients_response_success","name__orig":"list_broadcast_recipients_response_success","Name":"ListBroadcastRecipientsResponseSuccess","name_":"list_broadcast_recipients_response_success","name-":"list-broadcast-recipients-response-success","NAME":"LIST_BROADCAST_RECIPIENTS_RESPONSE_SUCCESS","index$":23}, {"active":true,"entity":"list_broadcast_recipients_response_success","key$":"BasicListBroadcastRecipientsResponseSuccessFlow","kind":"basic","name":"BasicListBroadcastRecipientsResponseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"broadcast_id":"broadcast01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_broadcast_recipients_response_success_ref01"}}],"index$":0}]}, 'ListBroadcastRecipientsResponseSuccess', {"GET /broadcasts/{id}/recipients":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The Broadcast ID.","index$":0},{"name":"type","in":"query","required":true,"schema":{"type":"string","enum":["sent","delivered","opened","clicked","bounced","complained","unsubscribed","suppressed"]},"description":"The recipient event type to filter by.","index$":1},{"name":"email","in":"query","required":false,"schema":{"type":"string"},"description":"Filter recipients whose email address contains this value.","index$":2},{"name":"bounce_type","in":"query","required":false,"schema":{"type":"string","enum":["permanent","transient","undetermined"]},"description":"Filter bounced recipients by bounce type. Only valid when `type` is `bounced`.","index$":3},{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":4},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":5},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":6}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_broadcast_recipients_response_success_ref01_data = Object.values(setup.data.existing.list_broadcast_recipients_response_success)[0] as any

    // LIST
    const list_broadcast_recipients_response_success_ref01_ent = client.ListBroadcastRecipientsResponseSuccess()
    const list_broadcast_recipients_response_success_ref01_match: any = {}
    list_broadcast_recipients_response_success_ref01_match['broadcast_id'] = setup.idmap['broadcast01']

    const list_broadcast_recipients_response_success_ref01_list = (await list_broadcast_recipients_response_success_ref01_ent.list(list_broadcast_recipients_response_success_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_broadcast_recipients_response_success/ListBroadcastRecipientsResponseSuccessTestData.json')

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
    ['list_broadcast_recipients_response_success01','list_broadcast_recipients_response_success02','list_broadcast_recipients_response_success03','broadcast01','broadcast02','broadcast03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_LIST_BROADCAST_RECIPIENTS_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_LIST_BROADCAST_RECIPIENTS_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_LIST_BROADCAST_RECIPIENTS_RESPONSE_SUCCESS_ENTID']
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
  
