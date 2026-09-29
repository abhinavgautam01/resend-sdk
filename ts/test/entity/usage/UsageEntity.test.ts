

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


describe('UsageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.Usage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'usage.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"ai_credits":{"a":true,"h":"Ai Credits","n":"ai_credits","r":false,"t":"`$OBJECT`","key$":"ai_credits","index$":0},"automation_runs":{"a":true,"h":"Automation Runs","n":"automation_runs","r":false,"t":"`$OBJECT`","key$":"automation_runs","index$":1},"broadcasts":{"a":true,"h":"Broadcasts","n":"broadcasts","r":false,"t":"`$OBJECT`","key$":"broadcasts","index$":2},"contacts":{"a":true,"h":"Contacts","n":"contacts","r":false,"t":"`$OBJECT`","key$":"contacts","index$":3},"domains":{"a":true,"h":"Domains","n":"domains","r":false,"t":"`$OBJECT`","key$":"domains","index$":4},"emails":{"a":true,"h":"Emails","n":"emails","r":false,"t":"`$OBJECT`","key$":"emails","index$":5},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"object","index$":6},"rate_limit":{"a":true,"h":"Rate Limit","n":"rate_limit","r":false,"t":"`$OBJECT`","key$":"rate_limit","index$":7},"segments":{"a":true,"h":"Segments","n":"segments","r":false,"t":"`$OBJECT`","key$":"segments","index$":8}},"name":"usage","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /usage","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/usage","q":{},"r":{},"s":[{"lit":"usage"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"usage","name__orig":"usage","Name":"Usage","name_":"usage","name-":"usage","NAME":"USAGE","index$":61}, {"active":true,"entity":"usage","key$":"BasicUsageFlow","kind":"basic","name":"BasicUsageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"usage_ref01","srcdatavar":"usage_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-usage_ref01"}}],"index$":0}]}, 'Usage', {"GET /usage":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let usage_ref01_data = Object.values(setup.data.existing.usage)[0] as any

    // LOAD
    const usage_ref01_ent = client.Usage()
    const usage_ref01_match_dt0: any = {}
    const usage_ref01_data_dt0 = (await usage_ref01_ent.load(usage_ref01_match_dt0)).data()
    assert(null != usage_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/usage/UsageTestData.json')

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
    ['usage01','usage02','usage03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_USAGE_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_USAGE_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_USAGE_ENTID']
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
  
