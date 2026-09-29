

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


describe('ContactPropertyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.ContactProperty()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'contact_property.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"Timestamp indicating when the contact property was created.","t":"`$STRING`","key$":"created_at","index$":0},"fallback_value":{"a":true,"h":"Fallback Value","n":"fallback_value","r":false,"sh":"The default value when the property is not set for a contact.","t":"`$ANY`","union":{"branches":2,"count":1,"depth":0},"key$":"fallback_value","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the contact property.","t":"`$STRING`","key$":"id","index$":2},"key":{"a":true,"h":"Key","n":"key","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The property key.","t":"`$STRING`","key$":"key","index$":3},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The object type.","t":"`$STRING`","key$":"object","index$":4},"type":{"a":true,"h":"Type","n":"type","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The property type.","t":"`$STRING`","key$":"type","index$":5}},"id":{"field":"id","name":"id"},"name":"contact_property","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /contact-properties","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/contact-properties","q":{},"r":{},"s":[{"lit":"contact-properties"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /contact-properties","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/contact-properties","q":{"exist":["after","before","limit"]},"r":{},"s":[{"lit":"contact-properties"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /contact-properties/{id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/contact-properties/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"contact-properties"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"contact_property","name__orig":"contact_property","Name":"ContactProperty","name_":"contact_property","name-":"contact-property","NAME":"CONTACT_PROPERTY","index$":12}, {"active":true,"entity":"contact_property","key$":"BasicContactPropertyFlow","kind":"basic","name":"BasicContactPropertyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"contact_property_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"contact_property_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"contact_property_ref01","srcdatavar":"contact_property_ref01_data","suffix":"_dt0"},"m":{"id":"contact_property01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-contact_property_ref01"}}],"index$":2}]}, 'ContactProperty', {"POST /contact-properties":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["key","type"],"properties":{"key":{"type":"string","description":"The property key. Max length is 50 characters. Only alphanumeric characters and underscores are allowed.","key$":"key"},"type":{"type":"string","enum":["string","number"],"description":"The property type.","key$":"type"},"fallback_value":{"oneOf":[{"type":"string"},{"type":"number"}],"description":"The default value to use when the property is not set for a contact. Must match the type specified in the type field.","key$":"fallback_value"}},"x-ref":"#/components/schemas/CreateContactPropertyOptions","index$":1}}}},"parameters":[]},"GET /contact-properties":{"protocol":"http","parameters":[{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":0},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":1},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":2}]},"GET /contact-properties/{id}":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string"},"description":"The Contact Property ID.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contact_property_ref01_ent = client.ContactProperty()
    let contact_property_ref01_data = setup.data.new.contact_property['contact_property_ref01']

    contact_property_ref01_data = (await contact_property_ref01_ent.create(contact_property_ref01_data)).data()
    assert(null != contact_property_ref01_data.id)


    // LIST
    const contact_property_ref01_match: any = {}

    const contact_property_ref01_list = (await contact_property_ref01_ent.list(contact_property_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(contact_property_ref01_list, { id: contact_property_ref01_data.id })))


    // LOAD
    const contact_property_ref01_match_dt0: any = {}
    contact_property_ref01_match_dt0.id = contact_property_ref01_data.id
    const contact_property_ref01_data_dt0 = (await contact_property_ref01_ent.load(contact_property_ref01_match_dt0)).data()
    assert(contact_property_ref01_data_dt0.id === contact_property_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/contact_property/ContactPropertyTestData.json')

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
    ['contact_property01','contact_property02','contact_property03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_CONTACT_PROPERTY_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_CONTACT_PROPERTY_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_CONTACT_PROPERTY_ENTID']
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
  
