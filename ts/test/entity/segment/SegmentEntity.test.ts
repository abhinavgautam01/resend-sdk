

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


describe('SegmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.Segment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'segment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"audience_id":{"a":true,"de":true,"h":"Audience Id","n":"audience_id","r":false,"sh":"The ID of the audience this segment belongs to.","t":"`$STRING`","key$":"audience_id","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"Timestamp indicating when the segment was created.","t":"`$STRING`","key$":"created_at","index$":1},"filter":{"a":true,"h":"Filter","n":"filter","r":false,"sh":"Filter conditions for the segment.","t":"`$OBJECT`","key$":"filter","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the segment.","t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the segment.","t":"`$STRING`","key$":"name","index$":4},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The object type.","t":"`$STRING`","key$":"object","index$":5}},"id":{"field":"id","name":"id"},"name":"segment","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /segments/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/segments/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"segments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"segment","name__orig":"segment","Name":"Segment","name_":"segment","name-":"segment","NAME":"SEGMENT","index$":45}, {"active":true,"entity":"segment","key$":"BasicSegmentFlow","kind":"basic","name":"BasicSegmentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"segment_ref01","srcdatavar":"segment_ref01_data","suffix":"_dt0"},"m":{"id":"segment01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-segment_ref01"}}],"index$":0}]}, 'Segment', {"GET /segments/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Segment ID.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let segment_ref01_data = Object.values(setup.data.existing.segment)[0] as any

    // LOAD
    const segment_ref01_ent = client.Segment()
    const segment_ref01_match_dt0: any = {}
    segment_ref01_match_dt0.id = segment_ref01_data.id
    const segment_ref01_data_dt0 = (await segment_ref01_ent.load(segment_ref01_match_dt0)).data()
    assert(segment_ref01_data_dt0.id === segment_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/segment/SegmentTestData.json')

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
    ['segment01','segment02','segment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_SEGMENT_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_SEGMENT_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_SEGMENT_ENTID']
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
  
