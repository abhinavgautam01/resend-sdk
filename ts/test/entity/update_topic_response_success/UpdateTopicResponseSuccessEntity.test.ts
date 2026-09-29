

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


describe('UpdateTopicResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.UpdateTopicResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_topic_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"A description of the topic.","t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the topic.","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the topic.","t":"`$STRING`","key$":"name","index$":2},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The object type.","t":"`$STRING`","key$":"object","index$":3},"visibility":{"a":true,"h":"Visibility","n":"visibility","r":false,"sh":"The visibility of the topic.","t":"`$STRING`","key$":"visibility","index$":4}},"id":{"field":"id","name":"id"},"name":"update_topic_response_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /topics/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/topics/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"topics"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"update_topic_response_success","name__orig":"update_topic_response_success","Name":"UpdateTopicResponseSuccess","name_":"update_topic_response_success","name-":"update-topic-response-success","NAME":"UPDATE_TOPIC_RESPONSE_SUCCESS","index$":59}, {"active":true,"entity":"update_topic_response_success","key$":"BasicUpdateTopicResponseSuccessFlow","kind":"basic","name":"BasicUpdateTopicResponseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_topic_response_success_ref01","srcdatavar":"update_topic_response_success_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_topic_response_success_ref01"}}],"v":[],"index$":0}]}, 'UpdateTopicResponseSuccess', {"PATCH /topics/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The name of the topic. Max 50 characters.","maxLength":50,"key$":"name"},"description":{"type":"string","description":"A description of the topic. Max 200 characters.","maxLength":200,"key$":"description"},"visibility":{"type":"string","enum":["public","private"],"description":"The visibility of the topic.","key$":"visibility"}},"x-ref":"#/components/schemas/UpdateTopicOptions","index$":1}}}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Topic ID.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_topic_response_success_ref01_data = Object.values(setup.data.existing.update_topic_response_success)[0] as any

    // UPDATE
    const update_topic_response_success_ref01_ent = client.UpdateTopicResponseSuccess()
    const update_topic_response_success_ref01_data_up0: any = {}
    update_topic_response_success_ref01_data_up0.id = update_topic_response_success_ref01_data.id

    const update_topic_response_success_ref01_markdef_up0 = { name: 'description', value: 'Mark01-update_topic_response_success_ref01_' + setup.now }
    ;(update_topic_response_success_ref01_data_up0 as any)[update_topic_response_success_ref01_markdef_up0.name] = update_topic_response_success_ref01_markdef_up0.value

    const update_topic_response_success_ref01_resdata_up0 = (await update_topic_response_success_ref01_ent.update(update_topic_response_success_ref01_data_up0)).data()
    assert(update_topic_response_success_ref01_resdata_up0.id === update_topic_response_success_ref01_data_up0.id)

    assert((update_topic_response_success_ref01_resdata_up0 as any)[update_topic_response_success_ref01_markdef_up0.name] === update_topic_response_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_topic_response_success/UpdateTopicResponseSuccessTestData.json')

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
    ['update_topic_response_success01','update_topic_response_success02','update_topic_response_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_UPDATE_TOPIC_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_UPDATE_TOPIC_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_UPDATE_TOPIC_RESPONSE_SUCCESS_ENTID']
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
  
