

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


describe('OAuthGrantEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.OAuthGrant()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'o_auth_grant.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"client":{"a":true,"h":"Client","n":"client","r":false,"sh":"The OAuth client the grant was issued to.","t":"`$OBJECT`","key$":"client","index$":0},"client_id":{"a":true,"h":"Client Id","n":"client_id","r":false,"sh":"The ID of the OAuth client the grant was issued to.","t":"`$STRING`","key$":"client_id","index$":1},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The date and time the OAuth grant was created.","t":"`$STRING`","key$":"created_at","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the OAuth grant.","t":"`$STRING`","key$":"id","index$":3},"revoked_at":{"a":true,"h":"Revoked At","n":"revoked_at","r":false,"sh":"The date and time the OAuth grant was revoked, or null if it is still active.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"revoked_at","index$":4},"revoked_reason":{"a":true,"h":"Revoked Reason","n":"revoked_reason","r":false,"sh":"The reason the OAuth grant was revoked, or null if it is still active.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"revoked_reason","index$":5},"scopes":{"a":true,"h":"Scopes","n":"scopes","r":false,"sh":"The scopes granted to the OAuth client.","t":"`$ARRAY`","key$":"scopes","index$":6}},"id":{"field":"id","name":"id"},"name":"o_auth_grant","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /oauth/grants","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/oauth/grants","q":{"exist":["after","before","limit"]},"r":{},"s":[{"lit":"oauth"},{"lit":"grants"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"o_auth_grant","name__orig":"o_auth_grant","Name":"OAuthGrant","name_":"o_auth_grant","name-":"o-auth-grant","NAME":"O_AUTH_GRANT","index$":30}, {"active":true,"entity":"o_auth_grant","key$":"BasicOAuthGrantFlow","kind":"basic","name":"BasicOAuthGrantFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"o_auth_grant_ref01"}}],"index$":0}]}, 'OAuthGrant', {"GET /oauth/grants":{"protocol":"http","parameters":[{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":0},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":1},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let o_auth_grant_ref01_data = Object.values(setup.data.existing.o_auth_grant)[0] as any

    // LIST
    const o_auth_grant_ref01_ent = client.OAuthGrant()
    const o_auth_grant_ref01_match: any = {}

    const o_auth_grant_ref01_list = (await o_auth_grant_ref01_ent.list(o_auth_grant_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/o_auth_grant/OAuthGrantTestData.json')

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
    ['o_auth_grant01','o_auth_grant02','o_auth_grant03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_O_AUTH_GRANT_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_O_AUTH_GRANT_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_O_AUTH_GRANT_ENTID']
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
  
