

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


describe('ListContactSegmentsResponseSuccessEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.ListContactSegmentsResponseSuccess()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_contact_segments_response_success.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"Timestamp indicating when the contact was added to the segment.","t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the segment.","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the segment.","t":"`$STRING`","key$":"name","index$":2}},"id":{"field":"id","name":"id"},"name":"list_contact_segments_response_success","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /contacts/{contact_id}/segments","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"contact_id","or":"contact_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/contacts/{contact_id}/segments","q":{"exist":["after","before","contact_id","limit"]},"r":{},"s":[{"lit":"contacts"},{"var":"contact_id"},{"lit":"segments"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.contact"]]},"key$":"list_contact_segments_response_success","name__orig":"list_contact_segments_response_success","Name":"ListContactSegmentsResponseSuccess","name_":"list_contact_segments_response_success","name-":"list-contact-segments-response-success","NAME":"LIST_CONTACT_SEGMENTS_RESPONSE_SUCCESS","index$":24}, {"active":true,"entity":"list_contact_segments_response_success","key$":"BasicListContactSegmentsResponseSuccessFlow","kind":"basic","name":"BasicListContactSegmentsResponseSuccessFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"contact_id":"contact01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_contact_segments_response_success_ref01"}}],"index$":0}]}, 'ListContactSegmentsResponseSuccess', {"GET /contacts/{contact_id}/segments":{"protocol":"http","parameters":[{"name":"contact_id","in":"path","required":true,"schema":{"type":"string"},"description":"The Contact ID or email address.","index$":0},{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":1},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":2},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_contact_segments_response_success_ref01_data = Object.values(setup.data.existing.list_contact_segments_response_success)[0] as any

    // LIST
    const list_contact_segments_response_success_ref01_ent = client.ListContactSegmentsResponseSuccess()
    const list_contact_segments_response_success_ref01_match: any = {}
    list_contact_segments_response_success_ref01_match['contact_id'] = setup.idmap['contact01']

    const list_contact_segments_response_success_ref01_list = (await list_contact_segments_response_success_ref01_ent.list(list_contact_segments_response_success_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_contact_segments_response_success/ListContactSegmentsResponseSuccessTestData.json')

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
    ['list_contact_segments_response_success01','list_contact_segments_response_success02','list_contact_segments_response_success03','contact01','contact02','contact03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_LIST_CONTACT_SEGMENTS_RESPONSE_SUCCESS_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_LIST_CONTACT_SEGMENTS_RESPONSE_SUCCESS_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_LIST_CONTACT_SEGMENTS_RESPONSE_SUCCESS_ENTID']
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
  
