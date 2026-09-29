

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


describe('LogEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.Log()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'log.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The date the log was created.","t":"`$STRING`","key$":"created_at","index$":0},"endpoint":{"a":true,"h":"Endpoint","n":"endpoint","r":false,"sh":"The API endpoint that was called.","t":"`$STRING`","key$":"endpoint","index$":1},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":false,"sh":"The log ID.","t":"`$STRING`","key$":"id","index$":2},"method":{"a":true,"h":"Method","n":"method","r":false,"sh":"The HTTP method used.","t":"`$STRING`","key$":"method","index$":3},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"Type of the response object.","t":"`$STRING`","key$":"object","index$":4},"request_body":{"a":true,"h":"Request Body","n":"request_body","r":false,"sh":"The request body sent to the API.","t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"request_body","index$":5},"response_body":{"a":true,"h":"Response Body","n":"response_body","r":false,"sh":"The response body returned by the API.","t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"response_body","index$":6},"response_status":{"a":true,"h":"Response Status","n":"response_status","r":false,"sh":"The HTTP status code of the response.","t":"`$INTEGER`","key$":"response_status","index$":7},"user_agent":{"a":true,"h":"User Agent","n":"user_agent","r":false,"sh":"The user agent of the request.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"user_agent","index$":8}},"id":{"field":"id","name":"id"},"name":"log","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /logs","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/logs","q":{"exist":["after","before","limit"]},"r":{},"s":[{"lit":"logs"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /logs/{log_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"log_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/logs/{log_id}","q":{"exist":["id"]},"r":{"param":{"log_id":"id"}},"s":[{"lit":"logs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"log","name__orig":"log","Name":"Log","name_":"log","name-":"log","NAME":"LOG","index$":29}, {"active":true,"entity":"log","key$":"BasicLogFlow","kind":"basic","name":"BasicLogFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"log_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"log_ref01","srcdatavar":"log_ref01_data","suffix":"_dt0"},"m":{"id":"log01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-log_ref01"}}],"index$":1}]}, 'Log', {"GET /logs":{"protocol":"http","parameters":[{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":0},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":1},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":2}]},"GET /logs/{log_id}":{"protocol":"http","parameters":[{"name":"log_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The ID of the log.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let log_ref01_data = Object.values(setup.data.existing.log)[0] as any

    // LIST
    const log_ref01_ent = client.Log()
    const log_ref01_match: any = {}

    const log_ref01_list = (await log_ref01_ent.list(log_ref01_match)).map((e: any) => e.data())


    // LOAD
    const log_ref01_match_dt0: any = {}
    log_ref01_match_dt0.id = log_ref01_data.id
    const log_ref01_data_dt0 = (await log_ref01_ent.load(log_ref01_match_dt0)).data()
    assert(log_ref01_data_dt0.id === log_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/log/LogTestData.json')

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
    ['log01','log02','log03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_LOG_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_LOG_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_LOG_ENTID']
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
  
