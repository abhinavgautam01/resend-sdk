

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


describe('UpdateEmailOptionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.UpdateEmailOption()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_email_option.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"scheduled_at":{"a":true,"h":"Scheduled At","n":"scheduled_at","r":false,"sh":"Schedule email to be sent later.","t":"`$STRING`","key$":"scheduled_at","index$":0}},"name":"update_email_option","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /emails/{email_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"email_id","or":"email_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/emails/{email_id}","q":{"exist":["email_id"]},"r":{},"s":[{"lit":"emails"},{"var":"email_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.email"]]},"key$":"update_email_option","name__orig":"update_email_option","Name":"UpdateEmailOption","name_":"update_email_option","name-":"update-email-option","NAME":"UPDATE_EMAIL_OPTION","index$":55}, {"active":true,"entity":"update_email_option","key$":"BasicUpdateEmailOptionFlow","kind":"basic","name":"BasicUpdateEmailOptionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_email_option_ref01","srcdatavar":"update_email_option_ref01_data","suffix":"_up0","textfield":"scheduled_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_email_option_ref01"}}],"v":[],"index$":0}]}, 'UpdateEmailOption', {"PATCH /emails/{email_id}":{"protocol":"http","parameters":[{"name":"email_id","in":"path","required":true,"schema":{"type":"string"},"description":"The ID of the email.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_email_option_ref01_data = Object.values(setup.data.existing.update_email_option)[0] as any

    // UPDATE
    const update_email_option_ref01_ent = client.UpdateEmailOption()
    const update_email_option_ref01_data_up0: any = {}

    const update_email_option_ref01_markdef_up0 = { name: 'scheduled_at', value: 'Mark01-update_email_option_ref01_' + setup.now }
    ;(update_email_option_ref01_data_up0 as any)[update_email_option_ref01_markdef_up0.name] = update_email_option_ref01_markdef_up0.value

    const update_email_option_ref01_resdata_up0 = (await update_email_option_ref01_ent.update(update_email_option_ref01_data_up0)).data()
    assert(null != update_email_option_ref01_resdata_up0)

    assert((update_email_option_ref01_resdata_up0 as any)[update_email_option_ref01_markdef_up0.name] === update_email_option_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_email_option/UpdateEmailOptionTestData.json')

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
    ['update_email_option01','update_email_option02','update_email_option03','email01','email02','email03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_UPDATE_EMAIL_OPTION_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_UPDATE_EMAIL_OPTION_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_UPDATE_EMAIL_OPTION_ENTID']
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
  
