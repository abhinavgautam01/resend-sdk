

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


describe('RemoveSegmentResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.RemoveSegmentResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'remove_segment_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"audience_id":{"a":true,"de":true,"h":"Audience Id","n":"audience_id","r":false,"sh":"The ID of the audience this segment belongs to.","t":"`$STRING`","key$":"audience_id","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"Timestamp indicating when the segment was created.","t":"`$STRING`","key$":"created_at","index$":1},"filter":{"a":true,"h":"Filter","n":"filter","r":false,"sh":"Filter conditions for the segment.","t":"`$OBJECT`","key$":"filter","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the segment.","t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The name of the segment.","t":"`$STRING`","key$":"name","index$":4}},"id":{"field":"id","name":"id"},"name":"remove_segment_response_success","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /segments","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/segments","q":{},"r":{},"s":[{"lit":"segments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /segments","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/segments","q":{"exist":["after","before","limit"]},"r":{},"s":[{"lit":"segments"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /segments/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/segments/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"segments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"remove_segment_response_success","name__orig":"remove_segment_response_success","Name":"RemoveSegmentResponseSuccess","name_":"remove_segment_response_success","name-":"remove-segment-response-success","NAME":"REMOVE_SEGMENT_RESPONSE_SUCCESS","index$":38}, {"active":true,"entity":"remove_segment_response_success","key$":"BasicRemoveSegmentResponseSuccessFlow","kind":"basic","name":"BasicRemoveSegmentResponseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"remove_segment_response_success_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"remove_segment_response_success_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"remove_segment_response_success_ref01","suffix":"_rm0"},"m":{"id":"remove_segment_response_success01"},"o":"remove","s":[],"v":[],"index$":2},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"remove_segment_response_success_ref01"}}],"index$":3}]}, 'RemoveSegmentResponseSuccess', {"POST /segments":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["name"],"properties":{"name":{"type":"string","description":"The name of the segment.","key$":"name"},"audience_id":{"type":"string","description":"The ID of the audience this segment belongs to.","deprecated":true,"key$":"audience_id"},"filter":{"type":"object","description":"Filter conditions for the segment.","key$":"filter"}},"x-ref":"#/components/schemas/CreateSegmentOptions","index$":1}}}},"parameters":[]},"GET /segments":{"protocol":"http","parameters":[{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":0},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":1},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":2}]},"DELETE /segments/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Segment ID.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const remove_segment_response_success_ref01_ent = client.RemoveSegmentResponseSuccess()
    let remove_segment_response_success_ref01_data = setup.data.new.remove_segment_response_success['remove_segment_response_success_ref01']

    remove_segment_response_success_ref01_data = (await remove_segment_response_success_ref01_ent.create(remove_segment_response_success_ref01_data)).data()
    assert(null != remove_segment_response_success_ref01_data.id)


    // LIST
    const remove_segment_response_success_ref01_match: any = {}

    const remove_segment_response_success_ref01_list = (await remove_segment_response_success_ref01_ent.list(remove_segment_response_success_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(remove_segment_response_success_ref01_list, { id: remove_segment_response_success_ref01_data.id })))


    // REMOVE
    const remove_segment_response_success_ref01_match_rm0: any = { id: remove_segment_response_success_ref01_data.id }
    await remove_segment_response_success_ref01_ent.remove(remove_segment_response_success_ref01_match_rm0)
  

    // LIST
    const remove_segment_response_success_ref01_match_rt0: any = {}

    const remove_segment_response_success_ref01_list_rt0 = (await remove_segment_response_success_ref01_ent.list(remove_segment_response_success_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(remove_segment_response_success_ref01_list_rt0, { id: remove_segment_response_success_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/remove_segment_response_success/RemoveSegmentResponseSuccessTestData.json')

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
    ['remove_segment_response_success01','remove_segment_response_success02','remove_segment_response_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_REMOVE_SEGMENT_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_REMOVE_SEGMENT_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_REMOVE_SEGMENT_RESPONSE_SUCCESS_ENTID']
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
  
