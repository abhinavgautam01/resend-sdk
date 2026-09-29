

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


describe('SuppressionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.Suppression()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'suppression.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"Timestamp indicating when the suppression was created.","t":"`$STRING`","key$":"created_at","index$":0},"email":{"a":true,"h":"Email","n":"email","r":false,"sh":"Email address that is suppressed.","t":"`$STRING`","key$":"email","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the suppression.","t":"`$STRING`","key$":"id","index$":2},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"Type of the response object.","t":"`$STRING`","key$":"object","index$":3},"origin":{"a":true,"h":"Origin","n":"origin","r":false,"sh":"Origin of the suppression.","t":"`$STRING`","key$":"origin","index$":4},"source_id":{"a":true,"h":"Source Id","n":"source_id","r":false,"sh":"Identifier of the event that caused the suppression, such as the email that bounced or complained.","t":"`$STRING`","key$":"source_id","index$":5}},"id":{"field":"id","name":"id"},"name":"suppression","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /suppressions/{suppression}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"suppression","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/suppressions/{suppression}","q":{"exist":["id"]},"r":{"param":{"suppression":"id"}},"s":[{"lit":"suppressions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"suppression","name__orig":"suppression","Name":"Suppression","name_":"suppression","name-":"suppression","NAME":"SUPPRESSION","index$":46}, {"active":true,"entity":"suppression","key$":"BasicSuppressionFlow","kind":"basic","name":"BasicSuppressionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"suppression_ref01","srcdatavar":"suppression_ref01_data","suffix":"_dt0"},"m":{"id":"suppression01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-suppression_ref01"}}],"index$":0}]}, 'Suppression', {"GET /suppressions/{suppression}":{"protocol":"http","parameters":[{"name":"suppression","in":"path","required":true,"schema":{"type":"string"},"description":"The Suppression ID or email address.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let suppression_ref01_data = Object.values(setup.data.existing.suppression)[0] as any

    // LOAD
    const suppression_ref01_ent = client.Suppression()
    const suppression_ref01_match_dt0: any = {}
    suppression_ref01_match_dt0.id = suppression_ref01_data.id
    const suppression_ref01_data_dt0 = (await suppression_ref01_ent.load(suppression_ref01_match_dt0)).data()
    assert(suppression_ref01_data_dt0.id === suppression_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/suppression/SuppressionTestData.json')

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
    ['suppression01','suppression02','suppression03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_SUPPRESSION_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_SUPPRESSION_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_SUPPRESSION_ENTID']
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
  
