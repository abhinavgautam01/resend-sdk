

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


describe('UpdateTemplateResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.UpdateTemplateResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_template_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alias":{"a":true,"h":"Alias","n":"alias","r":false,"sh":"The alias of the template.","t":"`$STRING`","key$":"alias","index$":0},"from":{"a":true,"h":"From","n":"from","r":false,"sh":"Sender email address.","t":"`$STRING`","key$":"from","index$":1},"html":{"a":true,"h":"Html","n":"html","r":false,"sh":"The HTML version of the template.","t":"`$STRING`","key$":"html","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the template.","t":"`$STRING`","key$":"id","index$":3},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the template.","t":"`$STRING`","key$":"name","index$":4},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The object type of the response.","t":"`$STRING`","key$":"object","index$":5},"reply_to":{"a":true,"h":"Reply To","n":"reply_to","r":false,"sh":"Reply-to email addresses.","t":"`$ARRAY`","key$":"reply_to","index$":6},"subject":{"a":true,"h":"Subject","n":"subject","r":false,"sh":"Email subject.","t":"`$STRING`","key$":"subject","index$":7},"text":{"a":true,"h":"Text","n":"text","r":false,"sh":"The plain text version of the template.","t":"`$STRING`","key$":"text","index$":8},"variables":{"a":true,"h":"Variables","n":"variables","r":false,"t":"`$ARRAY`","union":{"branches":5,"count":1,"depth":3},"key$":"variables","index$":9}},"id":{"field":"id","name":"id"},"name":"update_template_response_success","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/templates/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"update_template_response_success","name__orig":"update_template_response_success","Name":"UpdateTemplateResponseSuccess","name_":"update_template_response_success","name-":"update-template-response-success","NAME":"UPDATE_TEMPLATE_RESPONSE_SUCCESS","index$":58}, {"active":true,"entity":"update_template_response_success","key$":"BasicUpdateTemplateResponseSuccessFlow","kind":"basic","name":"BasicUpdateTemplateResponseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_template_response_success_ref01","srcdatavar":"update_template_response_success_ref01_data","suffix":"_up0","textfield":"alias"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_template_response_success_ref01"}}],"v":[],"index$":0}]}, 'UpdateTemplateResponseSuccess', {"PATCH /templates/{id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"name":{"type":"string","description":"The name of the template.","key$":"name"},"alias":{"type":"string","description":"The alias of the template.","key$":"alias"},"from":{"type":"string","description":"Sender email address. To include a friendly name, use the format \"Your Name <sender@domain.com>\".","key$":"from"},"subject":{"type":"string","description":"Email subject.","key$":"subject"},"reply_to":{"type":"array","items":{"type":"string"},"description":"Reply-to email addresses.","key$":"reply_to"},"html":{"type":"string","description":"The HTML version of the template.","key$":"html"},"text":{"type":"string","description":"The plain text version of the template.","key$":"text"},"variables":{"type":"array","items":{"type":"object","properties":{"key":{"type":"string","description":"The key of the variable."},"type":{"type":"string","description":"The type of the variable.","enum":[]},"fallback_value":{"description":"The fallback value of the variable.","oneOf":[]}},"required":["key","type"],"x-ref":"#/components/schemas/TemplateVariableInput"},"key$":"variables"}},"x-ref":"#/components/schemas/UpdateTemplateOptions","index$":1}}}},"parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Template ID or alias.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_template_response_success_ref01_data = Object.values(setup.data.existing.update_template_response_success)[0] as any

    // UPDATE
    const update_template_response_success_ref01_ent = client.UpdateTemplateResponseSuccess()
    const update_template_response_success_ref01_data_up0: any = {}
    update_template_response_success_ref01_data_up0.id = update_template_response_success_ref01_data.id

    const update_template_response_success_ref01_markdef_up0 = { name: 'alias', value: 'Mark01-update_template_response_success_ref01_' + setup.now }
    ;(update_template_response_success_ref01_data_up0 as any)[update_template_response_success_ref01_markdef_up0.name] = update_template_response_success_ref01_markdef_up0.value

    const update_template_response_success_ref01_resdata_up0 = (await update_template_response_success_ref01_ent.update(update_template_response_success_ref01_data_up0)).data()
    assert(update_template_response_success_ref01_resdata_up0.id === update_template_response_success_ref01_data_up0.id)

    assert((update_template_response_success_ref01_resdata_up0 as any)[update_template_response_success_ref01_markdef_up0.name] === update_template_response_success_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_template_response_success/UpdateTemplateResponseSuccessTestData.json')

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
    ['update_template_response_success01','update_template_response_success02','update_template_response_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_UPDATE_TEMPLATE_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_UPDATE_TEMPLATE_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_UPDATE_TEMPLATE_RESPONSE_SUCCESS_ENTID']
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
  
