

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


describe('EventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.Event()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'event.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The date and time the event was created.","t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":false,"sh":"The event ID.","t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The event name.","t":"`$STRING`","key$":"name","index$":2},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"Type of the response object.","t":"`$STRING`","key$":"object","index$":3},"schema":{"a":true,"h":"Schema","n":"schema","r":false,"sh":"A flat key/type map defining the event payload schema.","t":["`$ONE`",["`$OBJECT`","`$NULL`"]],"key$":"schema","index$":4},"updated_at":{"a":true,"h":"Updated At","n":"updated_at","r":false,"sh":"The date and time the event was last updated.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"updated_at","index$":5}},"id":{"field":"id","name":"id"},"name":"event","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /events","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/events","q":{},"r":{},"s":[{"lit":"events"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /events/send","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/events/send","q":{"$action":"send"},"r":{},"s":[{"lit":"events"},{"lit":"send"}],"t":{"req":{"event":"`reqdata`"},"res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /events","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/events","q":{"exist":["after","before","limit"]},"r":{},"s":[{"lit":"events"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /events/{identifier}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"identifier","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/events/{identifier}","q":{"exist":["id"]},"r":{"param":{"identifier":"id"}},"s":[{"lit":"events"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"event","name__orig":"event","Name":"Event","name_":"event","name-":"event","NAME":"EVENT","index$":20}, {"active":true,"entity":"event","key$":"BasicEventFlow","kind":"basic","name":"BasicEventFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"event_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"event_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"event_ref01","srcdatavar":"event_ref01_data","suffix":"_dt0"},"m":{"id":"event01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-event_ref01"}}],"index$":2}]}, 'Event', {"POST /events":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["name"],"properties":{"name":{"type":"string","description":"The name of the event. Cannot start with the reserved `resend:` prefix.","key$":"name"},"schema":{"type":["object","null"],"description":"An optional flat key/type map defining the event payload schema. Supported types are `string`, `number`, `boolean`, and `date`.","key$":"schema"}},"x-ref":"#/components/schemas/CreateEventRequest","index$":1}}}},"parameters":[]},"POST /events/send":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["event"],"properties":{"event":{"type":"string","description":"The name of the event to send."},"contact_id":{"type":"string","format":"uuid","description":"The ID of the contact to associate with this event. Exactly one of `contact_id` or `email` must be provided."},"email":{"type":"string","format":"email","description":"The email address to associate with this event. Exactly one of `contact_id` or `email` must be provided."},"payload":{"type":"object","additionalProperties":true,"description":"An optional payload of key/value pairs to include with the event."}},"x-ref":"#/components/schemas/SendEventRequest"}}}},"parameters":[]},"GET /events":{"protocol":"http","parameters":[{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":0},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":1},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":2}]},"GET /events/{identifier}":{"protocol":"http","parameters":[{"name":"identifier","in":"path","required":true,"schema":{"type":"string"},"description":"The event ID (UUID) or event name.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const event_ref01_ent = client.Event()
    let event_ref01_data = setup.data.new.event['event_ref01']

    event_ref01_data = (await event_ref01_ent.create(event_ref01_data)).data()
    assert(null != event_ref01_data.id)


    // LIST
    const event_ref01_match: any = {}

    const event_ref01_list = (await event_ref01_ent.list(event_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(event_ref01_list, { id: event_ref01_data.id })))


    // LOAD
    const event_ref01_match_dt0: any = {}
    event_ref01_match_dt0.id = event_ref01_data.id
    const event_ref01_data_dt0 = (await event_ref01_ent.load(event_ref01_match_dt0)).data()
    assert(event_ref01_data_dt0.id === event_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/event/EventTestData.json')

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
    ['event01','event02','event03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_EVENT_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_EVENT_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_EVENT_ENTID']
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
  
