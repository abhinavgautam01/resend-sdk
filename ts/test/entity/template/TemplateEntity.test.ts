

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


describe('TemplateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.Template()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'template.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alias":{"a":true,"h":"Alias","n":"alias","r":false,"sh":"The alias of the template.","t":"`$STRING`","key$":"alias","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"Timestamp indicating when the template was created.","t":"`$STRING`","key$":"created_at","index$":1},"current_version_id":{"a":true,"h":"Current Version Id","n":"current_version_id","r":false,"sh":"The ID of the current version of the template.","t":"`$STRING`","key$":"current_version_id","index$":2},"from":{"a":true,"h":"From","n":"from","r":false,"sh":"Sender email address.","t":"`$STRING`","key$":"from","index$":3},"has_unpublished_versions":{"a":true,"h":"Has Unpublished Versions","n":"has_unpublished_versions","r":false,"sh":"Indicates whether the template has unpublished versions.","t":"`$BOOLEAN`","key$":"has_unpublished_versions","index$":4},"html":{"a":true,"h":"Html","n":"html","r":false,"sh":"The HTML version of the template.","t":"`$STRING`","key$":"html","index$":5},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the template.","t":"`$STRING`","key$":"id","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the template.","t":"`$STRING`","key$":"name","index$":7},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"object","index$":8},"published_at":{"a":true,"h":"Published At","n":"published_at","r":false,"sh":"Timestamp indicating when the template was published.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"published_at","index$":9},"reply_to":{"a":true,"h":"Reply To","n":"reply_to","r":false,"sh":"Reply-to email addresses.","t":["`$ONE`",["`$ARRAY`","`$NULL`"]],"key$":"reply_to","index$":10},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"The publication status of the template.","t":"`$STRING`","key$":"status","index$":11},"subject":{"a":true,"h":"Subject","n":"subject","r":false,"sh":"Email subject.","t":"`$STRING`","key$":"subject","index$":12},"text":{"a":true,"h":"Text","n":"text","r":false,"sh":"The plain text version of the template.","t":"`$STRING`","key$":"text","index$":13},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"sh":"Timestamp indicating when the template was last updated.","t":"`$STRING`","key$":"updated_at","index$":14},"variables":{"a":true,"h":"Variables","n":"variables","r":false,"t":"`$ARRAY`","union":{"branches":5,"count":1,"depth":3},"key$":"variables","index$":15}},"id":{"field":"id","name":"id"},"name":"template","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /templates/{id}/duplicate","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/templates/{id}/duplicate","q":{"$action":"duplicate","exist":["id"]},"r":{},"s":[{"lit":"templates"},{"var":"id"},{"lit":"duplicate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /templates/{id}/publish","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/templates/{id}/publish","q":{"$action":"publish","exist":["id"]},"r":{},"s":[{"lit":"templates"},{"var":"id"},{"lit":"publish"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /templates/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/templates/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"templates"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"template","name__orig":"template","Name":"Template","name_":"template","name-":"template","NAME":"TEMPLATE","index$":47}, {"active":true,"entity":"template","key$":"BasicTemplateFlow","kind":"basic","name":"BasicTemplateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"template_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"template_ref01","srcdatavar":"template_ref01_data","suffix":"_dt0"},"m":{"id":"template01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-template_ref01"}}],"index$":1}]}, 'Template', {"POST /templates/{id}/duplicate":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Template ID or alias.","index$":0}]},"POST /templates/{id}/publish":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Template ID or alias.","index$":0}]},"GET /templates/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Template ID or alias.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const template_ref01_ent = client.Template()
    let template_ref01_data = setup.data.new.template['template_ref01']

    template_ref01_data = (await template_ref01_ent.create(template_ref01_data)).data()
    assert(null != template_ref01_data.id)


    // LOAD
    const template_ref01_match_dt0: any = {}
    template_ref01_match_dt0.id = template_ref01_data.id
    const template_ref01_data_dt0 = (await template_ref01_ent.load(template_ref01_match_dt0)).data()
    assert(template_ref01_data_dt0.id === template_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/template/TemplateTestData.json')

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
    ['template01','template02','template03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_TEMPLATE_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_TEMPLATE_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_TEMPLATE_ENTID']
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
  
