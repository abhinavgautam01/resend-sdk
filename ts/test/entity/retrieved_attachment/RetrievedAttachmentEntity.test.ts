

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


describe('RetrievedAttachmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.RetrievedAttachment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'retrieved_attachment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"content_disposition":{"a":true,"h":"Content Disposition","n":"content_disposition","r":false,"sh":"How the attachment should be displayed.","t":"`$STRING`","key$":"content_disposition","index$":0},"content_id":{"a":true,"h":"Content Id","n":"content_id","r":false,"sh":"The content ID for inline attachments.","t":"`$STRING`","key$":"content_id","index$":1},"content_type":{"a":true,"h":"Content Type","n":"content_type","r":false,"sh":"The MIME type of the attachment.","t":"`$STRING`","key$":"content_type","index$":2},"download_url":{"a":true,"h":"Download Url","n":"download_url","r":false,"sh":"Signed URL to download the attachment content.","t":"`$STRING`","key$":"download_url","index$":3},"expires_at":{"a":true,"fo":"date-time","h":"Expires At","n":"expires_at","r":false,"sh":"Timestamp when the download URL expires.","t":"`$STRING`","key$":"expires_at","index$":4},"filename":{"a":true,"h":"Filename","n":"filename","r":false,"sh":"The filename of the attachment.","t":"`$STRING`","key$":"filename","index$":5},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":false,"sh":"The ID of the attachment.","t":"`$STRING`","key$":"id","index$":6},"object":{"a":true,"h":"Object","n":"object","r":false,"sh":"The type of object.","t":"`$STRING`","key$":"object","index$":7},"size":{"a":true,"h":"Size","n":"size","r":false,"sh":"Size of the attachment in bytes.","t":"`$INTEGER`","key$":"size","index$":8}},"id":{"field":"id","name":"id"},"name":"retrieved_attachment","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /emails/{email_id}/attachments/{attachment_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"email_id","or":"email_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"attachment_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/emails/{email_id}/attachments/{attachment_id}","q":{"exist":["email_id","id"]},"r":{"param":{"attachment_id":"id"}},"s":[{"lit":"emails"},{"var":"email_id"},{"lit":"attachments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /emails/receiving/{email_id}/attachments/{attachment_id}","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"attachment_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"receiving_id","or":"email_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/emails/receiving/{email_id}/attachments/{attachment_id}","q":{"exist":["id","receiving_id"]},"r":{"param":{"attachment_id":"id","email_id":"receiving_id"}},"s":[{"lit":"emails"},{"lit":"receiving"},{"var":"receiving_id"},{"lit":"attachments"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.email"]]},"key$":"retrieved_attachment","name__orig":"retrieved_attachment","Name":"RetrievedAttachment","name_":"retrieved_attachment","name-":"retrieved-attachment","NAME":"RETRIEVED_ATTACHMENT","index$":42}, {"active":true,"entity":"retrieved_attachment","key$":"BasicRetrievedAttachmentFlow","kind":"basic","name":"BasicRetrievedAttachmentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"retrieved_attachment_ref01","srcdatavar":"retrieved_attachment_ref01_data","suffix":"_dt0"},"m":{"id":"retrieved_attachment01","receiving_id":"receiving01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-retrieved_attachment_ref01"}}],"index$":0}]}, 'RetrievedAttachment', {"GET /emails/{email_id}/attachments/{attachment_id}":{"protocol":"http","parameters":[{"name":"email_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The ID of the email.","index$":0},{"name":"attachment_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The ID of the attachment.","index$":1}]},"GET /emails/receiving/{email_id}/attachments/{attachment_id}":{"protocol":"http","parameters":[{"name":"email_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The ID of the received email.","index$":0},{"name":"attachment_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The ID of the attachment.","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let retrieved_attachment_ref01_data = Object.values(setup.data.existing.retrieved_attachment)[0] as any

    // LOAD
    const retrieved_attachment_ref01_ent = client.RetrievedAttachment()
    const retrieved_attachment_ref01_match_dt0: any = {}
    retrieved_attachment_ref01_match_dt0.id = retrieved_attachment_ref01_data.id
    const retrieved_attachment_ref01_data_dt0 = (await retrieved_attachment_ref01_ent.load(retrieved_attachment_ref01_match_dt0)).data()
    assert(retrieved_attachment_ref01_data_dt0.id === retrieved_attachment_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/retrieved_attachment/RetrievedAttachmentTestData.json')

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
    ['retrieved_attachment01','retrieved_attachment02','retrieved_attachment03','email01','email02','email03','receiving01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_RETRIEVED_ATTACHMENT_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_RETRIEVED_ATTACHMENT_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_RETRIEVED_ATTACHMENT_ENTID']
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
  
