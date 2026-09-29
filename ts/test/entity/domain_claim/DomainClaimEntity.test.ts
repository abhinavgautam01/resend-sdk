

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


describe('DomainClaimEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.DomainClaim()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'domain_claim.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"blocked_reason":{"a":true,"h":"Blocked Reason","n":"blocked_reason","r":false,"sh":"Why the claim is currently blocked, if applicable.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"blocked_reason","index$":0},"click_tracking":{"a":true,"h":"Click Tracking","n":"click_tracking","r":false,"sh":"Track clicks within the body of each HTML email.","t":"`$BOOLEAN`","key$":"click_tracking","index$":1},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"sh":"The date and time the claim was created.","t":"`$STRING`","key$":"created_at","index$":2},"custom_return_path":{"a":true,"h":"Custom Return Path","n":"custom_return_path","r":false,"sh":"For advanced use cases, choose a subdomain for the Return-Path address.","t":"`$STRING`","key$":"custom_return_path","index$":3},"domain_id":{"a":true,"h":"Domain Id","n":"domain_id","r":false,"sh":"The ID of the placeholder domain created for the claim.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"domain_id","index$":4},"expires_at":{"a":true,"h":"Expires At","n":"expires_at","r":false,"sh":"The date and time the claim expires if not verified.","t":"`$STRING`","key$":"expires_at","index$":5},"failure_reason":{"a":true,"h":"Failure Reason","n":"failure_reason","r":false,"sh":"Why the claim failed, if applicable.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"failure_reason","index$":6},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"The ID of the claim.","t":"`$STRING`","key$":"id","index$":7},"name":{"a":true,"h":"Name","n":"name","op":{"create":{"req":true,"type":"`$STRING`"}},"r":false,"sh":"The name of the domain being claimed.","t":"`$STRING`","key$":"name","index$":8},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"object","index$":9},"open_tracking":{"a":true,"h":"Open Tracking","n":"open_tracking","r":false,"sh":"Track the open rate of each email.","t":"`$BOOLEAN`","key$":"open_tracking","index$":10},"record":{"a":true,"h":"Record","n":"record","r":false,"sh":"The TXT record to add to your DNS to prove ownership of the claimed domain.","t":"`$OBJECT`","key$":"record","index$":11},"region":{"a":true,"h":"Region","n":"region","r":false,"sh":"The region where the claimed domain will send from.","t":["`$ONE`",["`$STRING`","`$NULL`"]],"key$":"region","index$":12},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"The status of the claim.","t":"`$STRING`","key$":"status","index$":13},"tracking_subdomain":{"a":true,"h":"Tracking Subdomain","n":"tracking_subdomain","r":false,"sh":"The subdomain to use for click and open tracking.","t":"`$STRING`","key$":"tracking_subdomain","index$":14}},"id":{"field":"id","name":"id"},"name":"domain_claim","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /domains/{domain_id}/claim/verify","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"domain_id","or":"domain_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/domains/{domain_id}/claim/verify","q":{"exist":["domain_id"]},"r":{},"s":[{"lit":"domains"},{"var":"domain_id"},{"lit":"claim"},{"lit":"verify"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /domains/claim","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/domains/claim","q":{},"r":{},"s":[{"lit":"domains"},{"lit":"claim"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /domains/{domain_id}/claim","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"domain_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/domains/{domain_id}/claim","q":{"exist":["id"]},"r":{"param":{"domain_id":"id"}},"s":[{"lit":"domains"},{"var":"id"},{"lit":"claim"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.domain"]]},"key$":"domain_claim","name__orig":"domain_claim","Name":"DomainClaim","name_":"domain_claim","name-":"domain-claim","NAME":"DOMAIN_CLAIM","index$":17}, {"active":true,"entity":"domain_claim","key$":"BasicDomainClaimFlow","kind":"basic","name":"BasicDomainClaimFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"domain_claim_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"domain_claim_ref01","srcdatavar":"domain_claim_ref01_data","suffix":"_dt0"},"m":{"id":"domain_claim01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-domain_claim_ref01"}}],"index$":1}]}, 'DomainClaim', {"POST /domains/{domain_id}/claim/verify":{"protocol":"http","parameters":[{"name":"domain_id","in":"path","required":true,"schema":{"type":"string"},"description":"The ID of the placeholder domain created by the claim.","index$":0}]},"POST /domains/claim":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"type":"object","required":["name"],"properties":{"name":{"type":"string","description":"The name of the domain you want to claim.","key$":"name"},"region":{"type":"string","enum":["us-east-1","eu-west-1","sa-east-1","ap-northeast-1"],"default":"us-east-1","description":"The region where emails will be sent from. Possible values are us-east-1 | eu-west-1 | sa-east-1 | ap-northeast-1","key$":"region"},"custom_return_path":{"type":"string","default":"send","description":"For advanced use cases, choose a subdomain for the Return-Path address. Defaults to 'send' (i.e., send.yourdomain.tld).","key$":"custom_return_path"},"open_tracking":{"type":"boolean","description":"Track the open rate of each email.","key$":"open_tracking"},"click_tracking":{"type":"boolean","description":"Track clicks within the body of each HTML email.","key$":"click_tracking"},"tracking_subdomain":{"type":"string","description":"The subdomain to use for click and open tracking.","key$":"tracking_subdomain"}},"x-ref":"#/components/schemas/CreateDomainClaimRequest","index$":1}}}},"parameters":[]},"GET /domains/{domain_id}/claim":{"protocol":"http","parameters":[{"name":"domain_id","in":"path","required":true,"schema":{"type":"string"},"description":"The ID of the placeholder domain created by the claim.","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const domain_claim_ref01_ent = client.DomainClaim()
    let domain_claim_ref01_data = setup.data.new.domain_claim['domain_claim_ref01']

    domain_claim_ref01_data = (await domain_claim_ref01_ent.create(domain_claim_ref01_data)).data()
    assert(null != domain_claim_ref01_data.id)


    // LOAD
    const domain_claim_ref01_match_dt0: any = {}
    domain_claim_ref01_match_dt0.id = domain_claim_ref01_data.id
    const domain_claim_ref01_data_dt0 = (await domain_claim_ref01_ent.load(domain_claim_ref01_match_dt0)).data()
    assert(domain_claim_ref01_data_dt0.id === domain_claim_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/domain_claim/DomainClaimTestData.json')

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
    ['domain_claim01','domain_claim02','domain_claim03','domain01','domain02','domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_DOMAIN_CLAIM_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_DOMAIN_CLAIM_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_DOMAIN_CLAIM_ENTID']
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
  
