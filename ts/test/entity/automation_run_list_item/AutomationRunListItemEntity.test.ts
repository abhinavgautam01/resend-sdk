

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


describe('AutomationRunListItemEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.AutomationRunListItem()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'automation_run_list_item.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"completed_at":{"a":true,"h":"Completed At","n":"completed_at","r":false,"sh":"The date and time the run completed.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"completed_at","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The date and time the run was created.","t":"`$STRING`","key$":"created_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the automation run.","t":"`$STRING`","key$":"id","index$":2},"started_at":{"a":true,"h":"Started At","n":"started_at","r":false,"sh":"The date and time the run started.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"started_at","index$":3},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"The current status of the automation run.","t":"`$STRING`","key$":"status","index$":4}},"id":{"field":"id","name":"id"},"name":"automation_run_list_item","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /automations/{automation_id}/runs","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"automation_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/automations/{automation_id}/runs","q":{"$action":"runs","exist":["after","before","id","limit","status"]},"r":{"param":{"automation_id":"id"}},"s":[{"lit":"automations"},{"var":"id"},{"lit":"runs"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"automation_run_list_item","name__orig":"automation_run_list_item","Name":"AutomationRunListItem","name_":"automation_run_list_item","name-":"automation-run-list-item","NAME":"AUTOMATION_RUN_LIST_ITEM","index$":5}, {"active":true,"entity":"automation_run_list_item","key$":"BasicAutomationRunListItemFlow","kind":"basic","name":"BasicAutomationRunListItemFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"automation_id":"automation01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"automation_run_list_item_ref01"}}],"index$":0}]}, 'AutomationRunListItem', {"GET /automations/{automation_id}/runs":{"protocol":"http","parameters":[{"name":"automation_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The ID of the automation.","index$":0},{"name":"status","in":"query","required":false,"schema":{"type":"string"},"description":"Filter runs by status. Comma-separated list of: running, completed, failed, cancelled.","index$":1},{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":2},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":3},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let automation_run_list_item_ref01_data = Object.values(setup.data.existing.automation_run_list_item)[0] as any

    // LIST
    const automation_run_list_item_ref01_ent = client.AutomationRunListItem()
    const automation_run_list_item_ref01_match: any = {}
    automation_run_list_item_ref01_match['automation_id'] = setup.idmap['automation01']

    const automation_run_list_item_ref01_list = (await automation_run_list_item_ref01_ent.list(automation_run_list_item_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/automation_run_list_item/AutomationRunListItemTestData.json')

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
    ['automation_run_list_item01','automation_run_list_item02','automation_run_list_item03','automation01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_AUTOMATION_RUN_LIST_ITEM_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_AUTOMATION_RUN_LIST_ITEM_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_AUTOMATION_RUN_LIST_ITEM_ENTID']
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
  
