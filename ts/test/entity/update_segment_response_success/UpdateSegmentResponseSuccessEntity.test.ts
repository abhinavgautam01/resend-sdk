

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


describe('UpdateSegmentResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.UpdateSegmentResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_segment_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the segment.","t":"`$STRING`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the segment.","t":"`$STRING`","key$":"name","index$":1},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The object type.","t":"`$STRING`","key$":"object","index$":2}},"id":{"field":"id","name":"id"},"name":"update_segment_response_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /segments/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/segments/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"segments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"update_segment_response_success","name__orig":"update_segment_response_success","Name":"UpdateSegmentResponseSuccess","name_":"update_segment_response_success","name-":"update-segment-response-success","NAME":"UPDATE_SEGMENT_RESPONSE_SUCCESS","index$":57}, {"active":true,"entity":"update_segment_response_success","key$":"BasicUpdateSegmentResponseSuccessFlow","kind":"basic","name":"BasicUpdateSegmentResponseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_segment_response_success_ref01","srcdatavar":"update_segment_response_success_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_segment_response_success_ref01"}}],"v":[],"index$":0}]}, 'UpdateSegmentResponseSuccess', {"PATCH /segments/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["name"],"properties":{"name":{"type":"string","description":"The name of the segment.","key$":"name"}},"x-ref":"#/components/schemas/UpdateSegmentOptions","index$":1}}}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Segment ID.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_segment_response_success_ref01_data = Object.values(setup.data.existing.update_segment_response_success)[0] as any

    // UPDATE
    const update_segment_response_success_ref01_ent = client.UpdateSegmentResponseSuccess()
    const update_segment_response_success_ref01_data_up0: any = {}
    update_segment_response_success_ref01_data_up0.id = update_segment_response_success_ref01_data.id

    const update_segment_response_success_ref01_markdef_up0 = { name: 'name', value: 'Mark01-update_segment_response_success_ref01_' + setup.now }
    ;(update_segment_response_success_ref01_data_up0 as any)[update_segment_response_success_ref01_markdef_up0.name] = update_segment_response_success_ref01_markdef_up0.value

    const update_segment_response_success_ref01_resdata_up0 = (await update_segment_response_success_ref01_ent.update(update_segment_response_success_ref01_data_up0)).data()
    assert(update_segment_response_success_ref01_resdata_up0.id === update_segment_response_success_ref01_data_up0.id)

    assert((update_segment_response_success_ref01_resdata_up0 as any)[update_segment_response_success_ref01_markdef_up0.name] === update_segment_response_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_segment_response_success/UpdateSegmentResponseSuccessTestData.json')

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
    ['update_segment_response_success01','update_segment_response_success02','update_segment_response_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_UPDATE_SEGMENT_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_UPDATE_SEGMENT_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_UPDATE_SEGMENT_RESPONSE_SUCCESS_ENTID']
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
  
