

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


describe('UpdateApiKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.UpdateApiKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_api_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the API key.","t":"`$STRING`","key$":"id","index$":0},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The API key name.","t":"`$STRING`","key$":"name","index$":1},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"object","index$":2}},"id":{"field":"id","name":"id"},"name":"update_api_key","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api-keys/{api_key_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"api_key_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/api-keys/{api_key_id}","q":{"exist":["id"]},"r":{"param":{"api_key_id":"id"}},"s":[{"lit":"api-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"update_api_key","name__orig":"update_api_key","Name":"UpdateApiKey","name_":"update_api_key","name-":"update-api-key","NAME":"UPDATE_API_KEY","index$":49}, {"active":true,"entity":"update_api_key","key$":"BasicUpdateApiKeyFlow","kind":"basic","name":"BasicUpdateApiKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_api_key_ref01","srcdatavar":"update_api_key_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_api_key_ref01"}}],"v":[],"index$":0}]}, 'UpdateApiKey', {"PATCH /api-keys/{api_key_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["name"],"properties":{"name":{"type":"string","description":"The API key name.","key$":"name"}},"x-ref":"#/components/schemas/UpdateApiKeyRequest","index$":1}}}},"parameters":[{"name":"api_key_id","in":"path","required":true,"schema":{"type":"string"},"description":"The API key ID.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_api_key_ref01_data = Object.values(setup.data.existing.update_api_key)[0] as any

    // UPDATE
    const update_api_key_ref01_ent = client.UpdateApiKey()
    const update_api_key_ref01_data_up0: any = {}
    update_api_key_ref01_data_up0.id = update_api_key_ref01_data.id

    const update_api_key_ref01_markdef_up0 = { name: 'name', value: 'Mark01-update_api_key_ref01_' + setup.now }
    ;(update_api_key_ref01_data_up0 as any)[update_api_key_ref01_markdef_up0.name] = update_api_key_ref01_markdef_up0.value

    const update_api_key_ref01_resdata_up0 = (await update_api_key_ref01_ent.update(update_api_key_ref01_data_up0)).data()
    assert(update_api_key_ref01_resdata_up0.id === update_api_key_ref01_data_up0.id)

    assert((update_api_key_ref01_resdata_up0 as any)[update_api_key_ref01_markdef_up0.name] === update_api_key_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_api_key/UpdateApiKeyTestData.json')

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
    ['update_api_key01','update_api_key02','update_api_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_UPDATE_API_KEY_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_UPDATE_API_KEY_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_UPDATE_API_KEY_ENTID']
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
  
