

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


describe('ContactImportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.ContactImport()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'contact_import.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completed_at":{"a":true,"h":"Completed At","n":"completed_at","r":false,"sh":"Timestamp indicating when the contact import completed.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"completed_at","index$":0},"counts":{"a":true,"h":"Counts","n":"counts","r":false,"t":"`$OBJECT`","key$":"counts","index$":1},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"Timestamp indicating when the contact import was created.","t":"`$STRING`","key$":"created_at","index$":2},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":false,"sh":"Unique identifier for the contact import.","t":"`$STRING`","key$":"id","index$":3},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"Type of the response object.","t":"`$STRING`","key$":"object","index$":4},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Current status of the contact import.","t":"`$STRING`","key$":"status","index$":5}},"id":{"field":"id","name":"id"},"name":"contact_import","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /contacts/imports","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/contacts/imports","q":{"exist":["after","before","limit","status"]},"r":{},"s":[{"lit":"contacts"},{"lit":"imports"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"contact_import","name__orig":"contact_import","Name":"ContactImport","name_":"contact_import","name-":"contact-import","NAME":"CONTACT_IMPORT","index$":10}, {"active":true,"entity":"contact_import","key$":"BasicContactImportFlow","kind":"basic","name":"BasicContactImportFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"contact_import_ref01"}}],"index$":0}]}, 'ContactImport', {"GET /contacts/imports":{"protocol":"http","parameters":[{"name":"status","in":"query","required":false,"schema":{"type":"string","enum":["queued","in_progress","completed","failed"]},"description":"Filter contact imports by status.","index$":0},{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":1},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":2},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let contact_import_ref01_data = Object.values(setup.data.existing.contact_import)[0] as any

    // LIST
    const contact_import_ref01_ent = client.ContactImport()
    const contact_import_ref01_match: any = {}

    const contact_import_ref01_list = (await contact_import_ref01_ent.list(contact_import_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/contact_import/ContactImportTestData.json')

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
    ['contact_import01','contact_import02','contact_import03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_CONTACT_IMPORT_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_CONTACT_IMPORT_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_CONTACT_IMPORT_ENTID']
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
  
