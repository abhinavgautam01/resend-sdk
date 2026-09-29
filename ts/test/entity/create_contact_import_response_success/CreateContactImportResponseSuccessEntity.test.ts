

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


describe('CreateContactImportResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.CreateContactImportResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_contact_import_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"create_contact_import_response_success","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /contacts/imports","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/contacts/imports","q":{},"r":{},"s":[{"lit":"contacts"},{"lit":"imports"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"create_contact_import_response_success","name__orig":"create_contact_import_response_success","Name":"CreateContactImportResponseSuccess","name_":"create_contact_import_response_success","name-":"create-contact-import-response-success","NAME":"CREATE_CONTACT_IMPORT_RESPONSE_SUCCESS","index$":15}, {"active":true,"entity":"create_contact_import_response_success","key$":"BasicCreateContactImportResponseSuccessFlow","kind":"basic","name":"BasicCreateContactImportResponseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_contact_import_response_success_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateContactImportResponseSuccess', {"POST /contacts/imports":{"protocol":"http","requestBody":{"required":true,"content":{"multipart/form-data":{"schema":{"type":"object","required":["file"],"properties":{"file":{"type":"string","format":"binary","description":"CSV file to import. Maximum size is 50MB."},"column_map":{"type":"string","description":"JSON-encoded object mapping contact fields and custom property keys to CSV column names. Supports `email`, `first_name`, `last_name`, `unsubscribed`, and `properties`. Custom property mappings can include `type` as `string`, `number`, or `boolean`; defaults to `string`.","example":"{\"email\":\"Email\",\"first_name\":\"First Name\",\"last_name\":\"Last Name\",\"unsubscribed\":\"Unsubscribed\",\"properties\":{\"plan\":{\"column\":\"Plan\",\"type\":\"string\"}}}"},"on_conflict":{"type":"string","enum":["upsert","skip"],"default":"skip","description":"Strategy to use when an imported contact already exists.","example":"skip"},"segments":{"type":"string","description":"JSON-encoded array of segments to add imported contacts to.","example":"[{\"id\":\"78261eea-8f8b-4381-83c6-79fa7120f1cf\"}]"},"topics":{"type":"string","description":"JSON-encoded array of topic subscriptions to apply to imported contacts. Each `subscription` must be `opt_in` or `opt_out`.","example":"[{\"id\":\"b6d24b8e-af0b-4c3c-be0c-359bbd97381e\",\"subscription\":\"opt_in\"}]"}},"x-ref":"#/components/schemas/CreateContactImportOptions"}}}},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_contact_import_response_success_ref01_ent = client.CreateContactImportResponseSuccess()
    let create_contact_import_response_success_ref01_data = setup.data.new.create_contact_import_response_success['create_contact_import_response_success_ref01']

    create_contact_import_response_success_ref01_data = (await create_contact_import_response_success_ref01_ent.create(create_contact_import_response_success_ref01_data)).data()
    assert(null != create_contact_import_response_success_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/create_contact_import_response_success/CreateContactImportResponseSuccessTestData.json')

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
    ['create_contact_import_response_success01','create_contact_import_response_success02','create_contact_import_response_success03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_CREATE_CONTACT_IMPORT_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_CREATE_CONTACT_IMPORT_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_CREATE_CONTACT_IMPORT_RESPONSE_SUCCESS_ENTID']
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
  
