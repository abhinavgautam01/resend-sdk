

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


describe('RotateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.Rotate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rotate.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":false,"sh":"The ID of the webhook.","t":"`$STRING`","key$":"id","index$":0},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"object","index$":1},"signing_secret":{"a":true,"h":"Signing Secret","n":"signing_secret","r":false,"sh":"The new secret key used to verify webhook payloads.","t":"`$STRING`","key$":"signing_secret","index$":2}},"id":{"field":"id","name":"id"},"name":"rotate","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /webhooks/{webhook_id}/signing-secret/rotate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"webhook_id","or":"webhook_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/webhooks/{webhook_id}/signing-secret/rotate","q":{"exist":["webhook_id"]},"r":{},"s":[{"lit":"webhooks"},{"var":"webhook_id"},{"lit":"signing-secret"},{"lit":"rotate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.webhook"]]},"key$":"rotate","name__orig":"rotate","Name":"Rotate","name_":"rotate","name-":"rotate","NAME":"ROTATE","index$":44}, {"active":true,"entity":"rotate","key$":"BasicRotateFlow","kind":"basic","name":"BasicRotateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"rotate_ref01"},"m":{"webhook_id":"webhook01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Rotate', {"POST /webhooks/{webhook_id}/signing-secret/rotate":{"protocol":"http","parameters":[{"name":"webhook_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The Webhook ID.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const rotate_ref01_ent = client.Rotate()
    let rotate_ref01_data = setup.data.new.rotate['rotate_ref01']
    rotate_ref01_data['webhook_id'] = setup.idmap['webhook01']

    rotate_ref01_data = (await rotate_ref01_ent.create(rotate_ref01_data)).data()
    assert(null != rotate_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rotate/RotateTestData.json')

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
    ['rotate01','rotate02','rotate03','webhook01','webhook02','webhook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_ROTATE_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_ROTATE_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_ROTATE_ENTID']
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
  
