

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


describe('UpdateEventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.UpdateEvent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'update_event.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":false,"sh":"The ID of the updated event.","t":"`$STRING`","key$":"id","index$":0},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"Type of the response object.","t":"`$STRING`","key$":"object","index$":1},"schema":{"a":true,"h":"Schema","n":"schema","r":true,"sh":"A flat key/type map defining the event payload schema.","t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"schema","index$":2}},"id":{"field":"id","name":"id"},"name":"update_event","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /events/{identifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PATCH","o":"/events/{identifier}","q":{"exist":["id"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"events"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"update_event","name__orig":"update_event","Name":"UpdateEvent","name_":"update_event","name-":"update-event","NAME":"UPDATE_EVENT","index$":56}, {"active":true,"entity":"update_event","key$":"BasicUpdateEventFlow","kind":"basic","name":"BasicUpdateEventFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"update_event_ref01","srcdatavar":"update_event_ref01_data","suffix":"_up0","textfield":"object"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-update_event_ref01"}}],"v":[],"index$":0}]}, 'UpdateEvent', {"PATCH /events/{identifier}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["schema"],"properties":{"schema":{"type":["object","null"],"description":"A flat key/type map defining the event payload schema. Set to `null` to clear the schema. Supported types are `string`, `number`, `boolean`, and `date`.","key$":"schema"}},"x-ref":"#/components/schemas/UpdateEventRequest","index$":1}}}},"parameters":[{"name":"identifier","in":"path","required":true,"schema":{"type":"string"},"description":"The event ID (UUID) or event name.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let update_event_ref01_data = Object.values(setup.data.existing.update_event)[0] as any

    // UPDATE
    const update_event_ref01_ent = client.UpdateEvent()
    const update_event_ref01_data_up0: any = {}
    update_event_ref01_data_up0.id = update_event_ref01_data.id

    const update_event_ref01_markdef_up0 = { name: 'object', value: 'Mark01-update_event_ref01_' + setup.now }
    ;(update_event_ref01_data_up0 as any)[update_event_ref01_markdef_up0.name] = update_event_ref01_markdef_up0.value

    const update_event_ref01_resdata_up0 = (await update_event_ref01_ent.update(update_event_ref01_data_up0)).data()
    assert(update_event_ref01_resdata_up0.id === update_event_ref01_data_up0.id)

    assert((update_event_ref01_resdata_up0 as any)[update_event_ref01_markdef_up0.name] === update_event_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/update_event/UpdateEventTestData.json')

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
    ['update_event01','update_event02','update_event03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_UPDATE_EVENT_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_UPDATE_EVENT_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_UPDATE_EVENT_ENTID']
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
  
