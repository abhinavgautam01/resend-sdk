

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


describe('DomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.Domain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create', 'list', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"capabilities":{"a":true,"h":"Capabilities","n":"capabilities","r":false,"sh":"Configure the domain capabilities for sending and receiving emails.","t":"`$OBJECT`","key$":"capabilities","index$":0},"click_tracking":{"a":true,"h":"Click Tracking","n":"click_tracking","r":false,"sh":"Whether click tracking is enabled for this domain.","t":"`$BOOLEAN`","key$":"click_tracking","index$":1},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The date and time the domain was created.","t":"`$STRING`","key$":"created_at","index$":2},"custom_return_path":{"a":true,"h":"Custom Return Path","n":"custom_return_path","r":false,"sh":"For advanced use cases, choose a subdomain for the Return-Path address.","t":"`$STRING`","key$":"custom_return_path","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the domain.","t":"`$STRING`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The name of the domain.","t":"`$STRING`","key$":"name","index$":5},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"object","index$":6},"open_tracking":{"a":true,"h":"Open Tracking","n":"open_tracking","r":false,"sh":"Whether open tracking is enabled for this domain.","t":"`$BOOLEAN`","key$":"open_tracking","index$":7},"records":{"a":true,"h":"Records","n":"records","r":false,"t":"`$ARRAY`","key$":"records","index$":8},"region":{"a":true,"h":"Region","n":"region","r":false,"sh":"The region where the domain is hosted.","t":"`$STRING`","key$":"region","index$":9},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"The status of the domain.","t":"`$STRING`","key$":"status","index$":10},"tls":{"a":true,"h":"Tls","n":"tls","r":false,"sh":"TLS mode.","t":"`$STRING`","key$":"tls","index$":11},"tracking_subdomain":{"a":true,"h":"Tracking Subdomain","n":"tracking_subdomain","r":false,"sh":"The subdomain used for click and open tracking.","t":"`$STRING`","key$":"tracking_subdomain","index$":12}},"id":{"field":"id","name":"id"},"name":"domain","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /domains/{domain_id}/verify","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"domain_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/domains/{domain_id}/verify","q":{"$action":"verify","exist":["id"]},"r":{"param":{"domain_id":"id"}},"s":[{"lit":"domains"},{"var":"id"},{"lit":"verify"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /domains","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/domains","q":{},"r":{},"s":[{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /domains","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/domains","q":{"exist":["after","before","limit"]},"r":{},"s":[{"lit":"domains"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /domains/{domain_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"domain_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/domains/{domain_id}","q":{"exist":["id"]},"r":{"param":{"domain_id":"id"}},"s":[{"lit":"domains"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /domains/{domain_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"domain_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/domains/{domain_id}","q":{"exist":["id"]},"r":{"param":{"domain_id":"id"}},"s":[{"lit":"domains"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"domain","name__orig":"domain","Name":"Domain","name_":"domain","name-":"domain","NAME":"DOMAIN","index$":16}, {"active":true,"entity":"domain","key$":"BasicDomainFlow","kind":"basic","name":"BasicDomainFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"domain_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"domain_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"domain_ref01","srcdatavar":"domain_ref01_data","suffix":"_dt0"},"m":{"id":"domain01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"domain_ref01","suffix":"_rm0"},"m":{"id":"domain01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"domain_ref01"}}],"index$":4}]}, 'Domain', {"POST /domains/{domain_id}/verify":{"protocol":"http","parameters":[{"name":"domain_id","in":"path","required":true,"schema":{"type":"string"},"description":"The ID of the domain.","index$":0}]},"POST /domains":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["name"],"properties":{"name":{"type":"string","description":"The name of the domain you want to create.","key$":"name"},"region":{"type":"string","enum":["us-east-1","eu-west-1","sa-east-1","ap-northeast-1"],"default":"us-east-1","description":"The region where emails will be sent from. Possible values are us-east-1 | eu-west-1 | sa-east-1 | ap-northeast-1","key$":"region"},"custom_return_path":{"type":"string","description":"For advanced use cases, choose a subdomain for the Return-Path address. Defaults to 'send' (i.e., send.yourdomain.tld).","key$":"custom_return_path"},"open_tracking":{"type":"boolean","description":"Track the open rate of each email.","key$":"open_tracking"},"click_tracking":{"type":"boolean","description":"Track clicks within the body of each HTML email.","key$":"click_tracking"},"tls":{"type":"string","enum":["opportunistic","enforced"],"default":"opportunistic","description":"TLS mode. Opportunistic attempts secure connection but falls back to unencrypted. Enforced requires TLS or email won't be sent.","key$":"tls"},"capabilities":{"type":"object","description":"Configure the domain capabilities for sending and receiving emails. At least one capability must be enabled.","properties":{"sending":{"description":"Enable or disable sending emails from this domain.","enum":["enabled","disabled"],"type":"string"},"receiving":{"description":"Enable or disable receiving emails to this domain.","enum":["enabled","disabled"],"type":"string"}},"x-ref":"#/components/schemas/DomainCapabilities","key$":"capabilities"},"tracking_subdomain":{"type":"string","description":"The subdomain to use for click and open tracking.","key$":"tracking_subdomain"}},"x-ref":"#/components/schemas/CreateDomainRequest","index$":1}}}},"parameters":[]},"GET /domains":{"protocol":"http","parameters":[{"in":"query","name":"limit","required":false,"schema":{"type":"integer","minimum":1,"maximum":100},"description":"Number of items to return.","x-ref":"#/components/parameters/PaginationLimit","index$":0},{"in":"query","name":"after","required":false,"schema":{"type":"string"},"description":"Return items after this cursor.","x-ref":"#/components/parameters/PaginationAfter","index$":1},{"in":"query","name":"before","required":false,"schema":{"type":"string"},"description":"Return items before this cursor.","x-ref":"#/components/parameters/PaginationBefore","index$":2}]},"GET /domains/{domain_id}":{"protocol":"http","parameters":[{"name":"domain_id","in":"path","required":true,"schema":{"type":"string"},"description":"The ID of the domain.","index$":0}]},"DELETE /domains/{domain_id}":{"protocol":"http","parameters":[{"name":"domain_id","in":"path","required":true,"schema":{"type":"string"},"description":"The ID of the domain.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const domain_ref01_ent = client.Domain()
    let domain_ref01_data = setup.data.new.domain['domain_ref01']

    domain_ref01_data = (await domain_ref01_ent.create(domain_ref01_data)).data()
    assert(null != domain_ref01_data.id)


    // LIST
    const domain_ref01_match: any = {}

    const domain_ref01_list = (await domain_ref01_ent.list(domain_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(domain_ref01_list, { id: domain_ref01_data.id })))


    // LOAD
    const domain_ref01_match_dt0: any = {}
    domain_ref01_match_dt0.id = domain_ref01_data.id
    const domain_ref01_data_dt0 = (await domain_ref01_ent.load(domain_ref01_match_dt0)).data()
    assert(domain_ref01_data_dt0.id === domain_ref01_data.id)


    // REMOVE
    const domain_ref01_match_rm0: any = { id: domain_ref01_data.id }
    await domain_ref01_ent.remove(domain_ref01_match_rm0)
  

    // LIST
    const domain_ref01_match_rt0: any = {}

    const domain_ref01_list_rt0 = (await domain_ref01_ent.list(domain_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(domain_ref01_list_rt0, { id: domain_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/domain/DomainTestData.json')

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
    ['domain01','domain02','domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_DOMAIN_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_DOMAIN_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_DOMAIN_ENTID']
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
  
