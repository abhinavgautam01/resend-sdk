

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


describe('RemoveContactFromSegmentResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.RemoveContactFromSegmentResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'remove_contact_from_segment_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"remove_contact_from_segment_response_success","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /contacts/{contact_id}/segments/{segment_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"contact_id","or":"contact_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"segment_id","or":"segment_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/contacts/{contact_id}/segments/{segment_id}","q":{"exist":["contact_id","segment_id"]},"r":{},"s":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"segments"},{"var":"segment_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.contact","$.main.kit.entity.segment"]]},"key$":"remove_contact_from_segment_response_success","name__orig":"remove_contact_from_segment_response_success","Name":"RemoveContactFromSegmentResponseSuccess","name_":"remove_contact_from_segment_response_success","name-":"remove-contact-from-segment-response-success","NAME":"REMOVE_CONTACT_FROM_SEGMENT_RESPONSE_SUCCESS","index$":34}, {"active":true,"entity":"remove_contact_from_segment_response_success","key$":"BasicRemoveContactFromSegmentResponseSuccessFlow","kind":"basic","name":"BasicRemoveContactFromSegmentResponseSuccessFlow","param":{},"step":[]}, 'RemoveContactFromSegmentResponseSuccess', {"DELETE /contacts/{contact_id}/segments/{segment_id}":{"protocol":"http","parameters":[{"name":"contact_id","in":"path","required":true,"schema":{"type":"string"},"description":"The Contact ID or email address.","index$":0},{"name":"segment_id","in":"path","required":true,"schema":{"type":"string"},"description":"The Segment ID.","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let remove_contact_from_segment_response_success_ref01_data = Object.values(setup.data.existing.remove_contact_from_segment_response_success)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/remove_contact_from_segment_response_success/RemoveContactFromSegmentResponseSuccessTestData.json')

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
    ['remove_contact_from_segment_response_success01','remove_contact_from_segment_response_success02','remove_contact_from_segment_response_success03','contact01','contact02','contact03','segment01','segment02','segment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_REMOVE_CONTACT_FROM_SEGMENT_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_REMOVE_CONTACT_FROM_SEGMENT_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_REMOVE_CONTACT_FROM_SEGMENT_RESPONSE_SUCCESS_ENTID']
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
  
