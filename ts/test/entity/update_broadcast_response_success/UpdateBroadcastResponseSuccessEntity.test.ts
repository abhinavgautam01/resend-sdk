

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


describe('UpdateBroadcastResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.UpdateBroadcastResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_broadcast_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"audience_id":{"a":true,"de":true,"h":"Audience Id","n":"audience_id","r":false,"sh":"Use `segment_id` instead.","t":"`$STRING`","key$":"audience_id","index$":0},"from":{"a":true,"h":"From","n":"from","r":false,"sh":"The email address of the sender.","t":"`$STRING`","key$":"from","index$":1},"html":{"a":true,"h":"Html","n":"html","r":false,"sh":"The HTML version of the message.","t":"`$STRING`","key$":"html","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the broadcast.","t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the broadcast.","t":"`$STRING`","key$":"name","index$":4},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The object type of the response.","t":"`$STRING`","key$":"object","index$":5},"preview_text":{"a":true,"h":"Preview Text","n":"preview_text","r":false,"sh":"The preview text of the email.","t":"`$STRING`","key$":"preview_text","index$":6},"reply_to":{"a":true,"h":"Reply To","n":"reply_to","r":false,"sh":"The email addresses to which replies should be sent.","t":"`$ARRAY`","key$":"reply_to","index$":7},"segment_id":{"a":true,"h":"Segment Id","n":"segment_id","r":false,"sh":"Unique identifier of the segment this broadcast will be sent to.","t":"`$STRING`","key$":"segment_id","index$":8},"subject":{"a":true,"h":"Subject","n":"subject","r":false,"sh":"The subject line of the email.","t":"`$STRING`","key$":"subject","index$":9},"text":{"a":true,"h":"Text","n":"text","r":false,"sh":"The plain text version of the message.","t":"`$STRING`","key$":"text","index$":10},"topic_id":{"a":true,"h":"Topic Id","n":"topic_id","r":false,"sh":"The topic ID that the broadcast will be scoped to.","t":"`$STRING`","key$":"topic_id","index$":11}},"id":{"field":"id","name":"id"},"name":"update_broadcast_response_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /broadcasts/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/broadcasts/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"broadcasts"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"update_broadcast_response_success","name__orig":"update_broadcast_response_success","Name":"UpdateBroadcastResponseSuccess","name_":"update_broadcast_response_success","name-":"update-broadcast-response-success","NAME":"UPDATE_BROADCAST_RESPONSE_SUCCESS","index$":50}, {"active":true,"entity":"update_broadcast_response_success","key$":"BasicUpdateBroadcastResponseSuccessFlow","kind":"basic","name":"BasicUpdateBroadcastResponseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_broadcast_response_success_ref01","srcdatavar":"update_broadcast_response_success_ref01_data","suffix":"_up0","textfield":"audience_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_broadcast_response_success_ref01"}}],"v":[],"index$":0}]}, 'UpdateBroadcastResponseSuccess', {"PATCH /broadcasts/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"Name of the broadcast.","key$":"name"},"audience_id":{"type":"string","description":"Use `segment_id` instead. Unique identifier of the audience this broadcast will be sent to.","deprecated":true,"key$":"audience_id"},"segment_id":{"type":"string","description":"Unique identifier of the segment this broadcast will be sent to.","key$":"segment_id"},"from":{"type":"string","description":"The email address of the sender.","key$":"from"},"subject":{"type":"string","description":"The subject line of the email.","key$":"subject"},"reply_to":{"type":"array","items":{"type":"string"},"description":"The email addresses to which replies should be sent.","key$":"reply_to"},"preview_text":{"type":"string","description":"The preview text of the email.","key$":"preview_text"},"html":{"type":"string","description":"The HTML version of the message.","key$":"html"},"text":{"type":"string","description":"The plain text version of the message.","key$":"text"},"topic_id":{"type":"string","description":"The topic ID that the broadcast will be scoped to.","key$":"topic_id"}},"x-ref":"#/components/schemas/UpdateBroadcastOptions","index$":1}}}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Broadcast ID.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_broadcast_response_success_ref01_data = Object.values(setup.data.existing.update_broadcast_response_success)[0] as any

    // UPDATE
    const update_broadcast_response_success_ref01_ent = client.UpdateBroadcastResponseSuccess()
    const update_broadcast_response_success_ref01_data_up0: any = {}
    update_broadcast_response_success_ref01_data_up0.id = update_broadcast_response_success_ref01_data.id

    const update_broadcast_response_success_ref01_markdef_up0 = { name: 'audience_id', value: 'Mark01-update_broadcast_response_success_ref01_' + setup.now }
    ;(update_broadcast_response_success_ref01_data_up0 as any)[update_broadcast_response_success_ref01_markdef_up0.name] = update_broadcast_response_success_ref01_markdef_up0.value

    const update_broadcast_response_success_ref01_resdata_up0 = (await update_broadcast_response_success_ref01_ent.update(update_broadcast_response_success_ref01_data_up0)).data()
    assert(update_broadcast_response_success_ref01_resdata_up0.id === update_broadcast_response_success_ref01_data_up0.id)

    assert((update_broadcast_response_success_ref01_resdata_up0 as any)[update_broadcast_response_success_ref01_markdef_up0.name] === update_broadcast_response_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_broadcast_response_success/UpdateBroadcastResponseSuccessTestData.json')

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
    ['update_broadcast_response_success01','update_broadcast_response_success02','update_broadcast_response_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_UPDATE_BROADCAST_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_UPDATE_BROADCAST_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_UPDATE_BROADCAST_RESPONSE_SUCCESS_ENTID']
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
  
