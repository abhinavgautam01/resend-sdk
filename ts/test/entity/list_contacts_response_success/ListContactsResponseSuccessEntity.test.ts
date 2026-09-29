

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


describe('ListContactsResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.ListContactsResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_contacts_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"Timestamp indicating when the contact was created.","t":"`$STRING`","key$":"created_at","index$":0},"email":{"a":true,"h":"Email","n":"email","r":false,"sh":"Email address of the contact.","t":"`$STRING`","key$":"email","index$":1},"first_name":{"a":true,"h":"First Name","n":"first_name","r":false,"sh":"First name of the contact.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"first_name","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the contact.","t":"`$STRING`","key$":"id","index$":3},"last_name":{"a":true,"h":"Last Name","n":"last_name","r":false,"sh":"Last name of the contact.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"last_name","index$":4},"unsubscribed":{"a":true,"h":"Unsubscribed","n":"unsubscribed","r":false,"sh":"Indicates if the contact is unsubscribed.","t":"`$BOOLEAN`","key$":"unsubscribed","index$":5}},"id":{"field":"id","name":"id"},"name":"list_contacts_response_success","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /segments/{id}/contacts","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"segment_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/segments/{id}/contacts","q":{"exist":["after","before","limit","segment_id"]},"r":{"param":{"id":"segment_id"}},"s":[{"lit":"segments"},{"var":"segment_id"},{"lit":"contacts"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.segment"]]},"key$":"list_contacts_response_success","name__orig":"list_contacts_response_success","Name":"ListContactsResponseSuccess","name_":"list_contacts_response_success","name-":"list-contacts-response-success","NAME":"LIST_CONTACTS_RESPONSE_SUCCESS","index$":25}, {"active":true,"entity":"list_contacts_response_success","key$":"BasicListContactsResponseSuccessFlow","kind":"basic","name":"BasicListContactsResponseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"segment_id":"segment01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_contacts_response_success_ref01"}}],"index$":0}]}, 'ListContactsResponseSuccess', {"GET /segments/{id}/contacts":{"protocol":"http","parameters":[{"name":"id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The Segment ID.","index$":0},{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":1},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":2},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_contacts_response_success_ref01_data = Object.values(setup.data.existing.list_contacts_response_success)[0] as any

    // LIST
    const list_contacts_response_success_ref01_ent = client.ListContactsResponseSuccess()
    const list_contacts_response_success_ref01_match: any = {}
    list_contacts_response_success_ref01_match['segment_id'] = setup.idmap['segment01']

    const list_contacts_response_success_ref01_list = (await list_contacts_response_success_ref01_ent.list(list_contacts_response_success_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_contacts_response_success/ListContactsResponseSuccessTestData.json')

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
    ['list_contacts_response_success01','list_contacts_response_success02','list_contacts_response_success03','segment01','segment02','segment03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_LIST_CONTACTS_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_LIST_CONTACTS_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_LIST_CONTACTS_RESPONSE_SUCCESS_ENTID']
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
  
