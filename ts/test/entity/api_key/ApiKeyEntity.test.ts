

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


describe('ApiKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.ApiKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create', 'list', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The date and time the API key was created.","t":"`$STRING`","key$":"created_at","index$":0},"domain_id":{"a":true,"h":"Domain Id","n":"domain_id","r":false,"sh":"Restrict an API key to send emails only from a specific domain.","t":"`$STRING`","key$":"domain_id","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the API key.","t":"`$STRING`","key$":"id","index$":2},"last_used_at":{"a":true,"h":"Last Used At","n":"last_used_at","r":false,"sh":"The date and time the API key was last used.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"last_used_at","index$":3},"name":{"a":true,"h":"Name","n":"name","op":{"list":{"req":false,"type":"`$STRING`"}},"r":true,"sh":"The API key name.","t":"`$STRING`","key$":"name","index$":4},"permission":{"a":true,"h":"Permission","n":"permission","r":false,"sh":"The API key can have full access to Resend’s API or be only restricted to send emails.","t":"`$STRING`","key$":"permission","index$":5}},"id":{"field":"id","name":"id"},"name":"api_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api-keys","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api-keys","q":{},"r":{},"s":[{"lit":"api-keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api-keys","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/api-keys","q":{"exist":["after","before","limit"]},"r":{},"s":[{"lit":"api-keys"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api-keys/{api_key_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"api_key_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api-keys/{api_key_id}","q":{"exist":["id"]},"r":{"param":{"api_key_id":"id"}},"s":[{"lit":"api-keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"api_key","name__orig":"api_key","Name":"ApiKey","name_":"api_key","name-":"api-key","NAME":"API_KEY","index$":1}, {"active":true,"entity":"api_key","key$":"BasicApiKeyFlow","kind":"basic","name":"BasicApiKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_key_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_key_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"api_key_ref01","suffix":"_rm0"},"m":{"id":"api_key01"},"o":"remove","s":[],"v":[],"index$":2},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"api_key_ref01"}}],"index$":3}]}, 'ApiKey', {"POST /api-keys":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["name"],"properties":{"name":{"type":"string","description":"The API key name.","key$":"name"},"permission":{"type":"string","enum":["full_access","sending_access"],"description":"The API key can have full access to Resend’s API or be only restricted to send emails. * full_access - Can create, delete, get, and update any resource. * sending_access - Can only send emails.","key$":"permission"},"domain_id":{"type":"string","description":"Restrict an API key to send emails only from a specific domain. Only used when the permission is sending_access.","key$":"domain_id"}},"x-ref":"#/components/schemas/CreateApiKeyRequest","index$":1}}}},"parameters":[]},"GET /api-keys":{"protocol":"http","parameters":[{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":0},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":1},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":2}]},"DELETE /api-keys/{api_key_id}":{"protocol":"http","parameters":[{"name":"api_key_id","in":"path","required":true,"schema":{"type":"string"},"description":"The API key ID.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_key_ref01_ent = client.ApiKey()
    let api_key_ref01_data = setup.data.new.api_key['api_key_ref01']

    api_key_ref01_data = (await api_key_ref01_ent.create(api_key_ref01_data)).data()
    assert(null != api_key_ref01_data.id)


    // LIST
    const api_key_ref01_match: any = {}

    const api_key_ref01_list = (await api_key_ref01_ent.list(api_key_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_key_ref01_list, { id: api_key_ref01_data.id })))


    // REMOVE
    const api_key_ref01_match_rm0: any = { id: api_key_ref01_data.id }
    await api_key_ref01_ent.remove(api_key_ref01_match_rm0)
  

    // LIST
    const api_key_ref01_match_rt0: any = {}

    const api_key_ref01_list_rt0 = (await api_key_ref01_ent.list(api_key_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(api_key_ref01_list_rt0, { id: api_key_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_key/ApiKeyTestData.json')

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
    ['api_key01','api_key02','api_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_API_KEY_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_API_KEY_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_API_KEY_ENTID']
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
  
