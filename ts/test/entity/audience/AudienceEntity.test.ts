

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


describe('AudienceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.Audience()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'audience.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The date that the object was created.","t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the audience.","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The name of the audience.","t":"`$STRING`","key$":"name","index$":2},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The object of the audience.","t":"`$STRING`","key$":"object","index$":3}},"id":{"field":"id","name":"id"},"name":"audience","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /audiences","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/audiences","q":{},"r":{},"s":[{"lit":"audiences"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /audiences","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/audiences","q":{},"r":{},"s":[{"lit":"audiences"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /audiences/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/audiences/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"audiences"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"audience","name__orig":"audience","Name":"Audience","name_":"audience","name-":"audience","NAME":"AUDIENCE","index$":2}, {"active":true,"entity":"audience","key$":"BasicAudienceFlow","kind":"basic","name":"BasicAudienceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"audience_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"audience_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"audience_ref01","srcdatavar":"audience_ref01_data","suffix":"_dt0"},"m":{"id":"audience01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-audience_ref01"}}],"index$":2}]}, 'Audience', {"POST /audiences":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","deprecated":true,"required":["name"],"properties":{"name":{"type":"string","description":"The name of the audience you want to create.","key$":"name"}},"x-ref":"#/components/schemas/CreateAudienceOptions","index$":1}}}},"parameters":[]},"GET /audiences":{"protocol":"http","parameters":[]},"GET /audiences/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Audience ID.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const audience_ref01_ent = client.Audience()
    let audience_ref01_data = setup.data.new.audience['audience_ref01']

    audience_ref01_data = (await audience_ref01_ent.create(audience_ref01_data)).data()
    assert(null != audience_ref01_data.id)


    // LIST
    const audience_ref01_match: any = {}

    const audience_ref01_list = (await audience_ref01_ent.list(audience_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(audience_ref01_list, { id: audience_ref01_data.id })))


    // LOAD
    const audience_ref01_match_dt0: any = {}
    audience_ref01_match_dt0.id = audience_ref01_data.id
    const audience_ref01_data_dt0 = (await audience_ref01_ent.load(audience_ref01_match_dt0)).data()
    assert(audience_ref01_data_dt0.id === audience_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/audience/AudienceTestData.json')

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
    ['audience01','audience02','audience03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_AUDIENCE_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_AUDIENCE_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_AUDIENCE_ENTID']
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
  
