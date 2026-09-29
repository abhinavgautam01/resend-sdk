

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


describe('EmailsMetricEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.EmailsMetric()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'emails_metric.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"broadcast_id":{"a":true,"fo":"uuid","h":"Broadcast Id","n":"broadcast_id","r":false,"sh":"Present when `broadcast` is in `dimensions`.","t":"`$STRING`","key$":"broadcast_id","index$":0},"broadcast_name":{"a":true,"h":"Broadcast Name","n":"broadcast_name","r":false,"sh":"Present when `broadcast` is in `dimensions`.","t":"`$STRING`","key$":"broadcast_name","index$":1},"domain_id":{"a":true,"fo":"uuid","h":"Domain Id","n":"domain_id","r":false,"sh":"Present when `domain` is in `dimensions`.","t":"`$STRING`","key$":"domain_id","index$":2},"domain_name":{"a":true,"h":"Domain Name","n":"domain_name","r":false,"sh":"Present when `domain` is in `dimensions`.","t":"`$STRING`","key$":"domain_name","index$":3},"email_id":{"a":true,"fo":"uuid","h":"Email Id","n":"email_id","r":false,"sh":"Present when `email` is in `dimensions`.","t":"`$STRING`","key$":"email_id","index$":4},"period":{"a":true,"h":"Period","n":"period","r":false,"sh":"Present when `period` is in `dimensions`.","t":"`$STRING`","key$":"period","index$":5}},"name":"emails_metric","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /emails/metrics","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"broadcast_id","or":"broadcast_id","r":false,"t":"`$ARRAY`","index$":0},{"a":true,"k":"query","n":"dimension","or":"dimensions","r":false,"t":"`$ARRAY`","index$":1},{"a":true,"k":"query","n":"domain_id","or":"domain_id","r":false,"t":"`$ARRAY`","index$":2},{"a":true,"k":"query","n":"email_id","or":"email_id","r":false,"t":"`$ARRAY`","index$":3},{"a":true,"k":"query","n":"end_date","or":"end_date","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"daily","k":"query","n":"granularity","or":"granularity","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"metric","or":"metrics","r":false,"t":"`$ARRAY`","index$":6},{"a":true,"k":"query","n":"start_date","or":"start_date","r":false,"t":"`$STRING`","index$":7},{"a":true,"ex":"UTC","k":"query","n":"timezone","or":"timezone","r":false,"t":"`$STRING`","index$":8}]},"k":"http","m":"GET","o":"/emails/metrics","q":{"exist":["broadcast_id","dimension","domain_id","email_id","end_date","granularity","metric","start_date","timezone"]},"r":{},"s":[{"lit":"emails"},{"lit":"metrics"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"emails_metric","name__orig":"emails_metric","Name":"EmailsMetric","name_":"emails_metric","name-":"emails-metric","NAME":"EMAILS_METRIC","index$":19}, {"active":true,"entity":"emails_metric","key$":"BasicEmailsMetricFlow","kind":"basic","name":"BasicEmailsMetricFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"emails_metric_ref01"}}],"index$":0}]}, 'EmailsMetric', {"GET /emails/metrics":{"protocol":"http","parameters":[{"name":"start_date","in":"query","schema":{"type":"string"},"description":"The start of the date range, as an ISO 8601 date or datetime. Must be on or before `end_date`. Defaults to 6 days before `end_date`.","index$":0},{"name":"end_date","in":"query","schema":{"type":"string"},"description":"The end of the date range, as an ISO 8601 date or datetime. Values in the future are clamped to the current time. Defaults to now.","index$":1},{"name":"timezone","in":"query","schema":{"type":"string","default":"UTC"},"description":"The IANA timezone (e.g. `America/New_York`) used to bucket periods when `period` is in `dimensions`.","index$":2},{"name":"granularity","in":"query","schema":{"type":"string","enum":["hourly","daily","weekly","monthly"],"default":"daily"},"description":"The bucket size used when `period` is in `dimensions`. The date range can't produce more than 10,000 periods at the chosen granularity.","index$":3},{"name":"metrics","in":"query","style":"form","explode":false,"schema":{"type":"array","items":{"type":"string","enum":["received","delivered","complained","suppressed","bounced","bounced_transient","bounced_permanent","bounced_undetermined","opened","clicked","unsubscribed","delivery_delayed","failed","sent","unique_opened","unique_clicked","delivery_rate","open_rate","click_rate","bounce_rate","complaint_rate","unsubscribe_rate"]}},"description":"List of metrics to include in the response. Defaults to all metrics. Accepts a comma-separated value, the parameter repeated, or a mix of both.","index$":4},{"name":"dimensions","in":"query","style":"form","explode":false,"schema":{"type":"array","items":{"type":"string","enum":["period","domain","email","broadcast"]}},"description":"List of dimensions to break the response down by. `email` cannot be combined with `broadcast`. Defaults to `[]`, returning a single `totals` row for the whole range, with no `data`. Accepts a comma-separated value, the parameter repeated, or a mix of both.","index$":5},{"name":"domain_id","in":"query","style":"form","explode":false,"schema":{"type":"array","items":{"type":"string","format":"uuid"}},"description":"List of sending domain IDs to restrict the response to, up to 100. Accepts a comma-separated value, the parameter repeated, or a mix of both.","index$":6},{"name":"email_id","in":"query","style":"form","explode":false,"schema":{"type":"array","items":{"type":"string","format":"uuid"}},"description":"List of email IDs to restrict the response to, up to 100. Cannot be combined with the `broadcast` dimension or `broadcast_id`. Accepts a comma-separated value, the parameter repeated, or a mix of both.","index$":7},{"name":"broadcast_id","in":"query","style":"form","explode":false,"schema":{"type":"array","items":{"type":"string","format":"uuid"}},"description":"List of broadcast IDs to restrict the response to, up to 100. Cannot be combined with the `email` dimension or `email_id`. Accepts a comma-separated value, the parameter repeated, or a mix of both.","index$":8}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let emails_metric_ref01_data = Object.values(setup.data.existing.emails_metric)[0] as any

    // LIST
    const emails_metric_ref01_ent = client.EmailsMetric()
    const emails_metric_ref01_match: any = {}

    const emails_metric_ref01_list = (await emails_metric_ref01_ent.list(emails_metric_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/emails_metric/EmailsMetricTestData.json')

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
    ['emails_metric01','emails_metric02','emails_metric03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_EMAILS_METRIC_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_EMAILS_METRIC_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_EMAILS_METRIC_ENTID']
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
  
