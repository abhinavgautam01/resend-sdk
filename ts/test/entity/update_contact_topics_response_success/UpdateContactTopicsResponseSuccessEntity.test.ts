

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


describe('UpdateContactTopicsResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.UpdateContactTopicsResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_contact_topics_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"contact_id":{"a":true,"h":"Contact Id","n":"contact_id","r":false,"sh":"The ID of the contact.","t":"`$STRING`","key$":"contact_id","index$":0},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The object type.","t":"`$STRING`","key$":"object","index$":1},"topics":{"a":true,"h":"Topics","n":"topics","op":{"update":{"req":true,"type":"`$ARRAY`"}},"r":false,"sh":"Array of updated topic subscriptions.","t":"`$ARRAY`","key$":"topics","index$":2}},"name":"update_contact_topics_response_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /contacts/{contact_id}/topics","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"contact_id","or":"contact_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/contacts/{contact_id}/topics","q":{"exist":["contact_id"]},"r":{},"s":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"topics"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.contact"]]},"key$":"update_contact_topics_response_success","name__orig":"update_contact_topics_response_success","Name":"UpdateContactTopicsResponseSuccess","name_":"update_contact_topics_response_success","name-":"update-contact-topics-response-success","NAME":"UPDATE_CONTACT_TOPICS_RESPONSE_SUCCESS","index$":53}, {"active":true,"entity":"update_contact_topics_response_success","key$":"BasicUpdateContactTopicsResponseSuccessFlow","kind":"basic","name":"BasicUpdateContactTopicsResponseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_contact_topics_response_success_ref01","srcdatavar":"update_contact_topics_response_success_ref01_data","suffix":"_up0","textfield":"object"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_contact_topics_response_success_ref01"}}],"v":[],"index$":0}]}, 'UpdateContactTopicsResponseSuccess', {"PATCH /contacts/{contact_id}/topics":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["topics"],"properties":{"topics":{"type":"array","items":{"type":"object","properties":{"id":{"type":"string","description":"The ID of the topic."},"subscription":{"type":"string","enum":[],"description":"The subscription status (opt_in or opt_out)."}}},"key$":"topics"}},"x-ref":"#/components/schemas/UpdateContactTopicsOptions","index$":1}}}},"parameters":[{"name":"contact_id","in":"path","required":true,"schema":{"type":"string"},"description":"The Contact ID or email address.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_contact_topics_response_success_ref01_data = Object.values(setup.data.existing.update_contact_topics_response_success)[0] as any

    // UPDATE
    const update_contact_topics_response_success_ref01_ent = client.UpdateContactTopicsResponseSuccess()
    const update_contact_topics_response_success_ref01_data_up0: any = {}

    const update_contact_topics_response_success_ref01_markdef_up0 = { name: 'object', value: 'Mark01-update_contact_topics_response_success_ref01_' + setup.now }
    ;(update_contact_topics_response_success_ref01_data_up0 as any)[update_contact_topics_response_success_ref01_markdef_up0.name] = update_contact_topics_response_success_ref01_markdef_up0.value

    const update_contact_topics_response_success_ref01_resdata_up0 = (await update_contact_topics_response_success_ref01_ent.update(update_contact_topics_response_success_ref01_data_up0)).data()
    assert(null != update_contact_topics_response_success_ref01_resdata_up0)

    assert((update_contact_topics_response_success_ref01_resdata_up0 as any)[update_contact_topics_response_success_ref01_markdef_up0.name] === update_contact_topics_response_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_contact_topics_response_success/UpdateContactTopicsResponseSuccessTestData.json')

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
    ['update_contact_topics_response_success01','update_contact_topics_response_success02','update_contact_topics_response_success03','contact01','contact02','contact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_UPDATE_CONTACT_TOPICS_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_UPDATE_CONTACT_TOPICS_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_UPDATE_CONTACT_TOPICS_RESPONSE_SUCCESS_ENTID']
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
  
