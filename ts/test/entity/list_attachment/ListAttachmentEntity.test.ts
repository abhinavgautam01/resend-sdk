

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


describe('ListAttachmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ResendSDK.test()
    const ent = testsdk.ListAttachment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.RESEND_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_attachment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"content_disposition":{"a":true,"h":"Content Disposition","n":"content_disposition","r":false,"sh":"How the attachment should be displayed.","t":"`$STRING`","key$":"content_disposition","index$":0},"content_id":{"a":true,"h":"Content Id","n":"content_id","r":false,"sh":"The content ID for inline attachments.","t":"`$STRING`","key$":"content_id","index$":1},"content_type":{"a":true,"h":"Content Type","n":"content_type","r":false,"sh":"The MIME type of the attachment.","t":"`$STRING`","key$":"content_type","index$":2},"download_url":{"a":true,"h":"Download Url","n":"download_url","r":false,"sh":"Signed URL to download the attachment content.","t":"`$STRING`","key$":"download_url","index$":3},"expires_at":{"a":true,"fo":"date-time","h":"Expires At","n":"expires_at","r":false,"sh":"Timestamp when the download URL expires.","t":"`$STRING`","key$":"expires_at","index$":4},"filename":{"a":true,"h":"Filename","n":"filename","r":false,"sh":"The filename of the attachment.","t":"`$STRING`","key$":"filename","index$":5},"id":{"a":true,"fo":"uuid","h":"Id","n":"id","r":false,"sh":"The ID of the attachment.","t":"`$STRING`","key$":"id","index$":6},"size":{"a":true,"h":"Size","n":"size","r":false,"sh":"Size of the attachment in bytes.","t":"`$INTEGER`","key$":"size","index$":7}},"id":{"field":"id","name":"id"},"name":"list_attachment","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /emails/{email_id}/attachments","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"email_id","or":"email_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/emails/{email_id}/attachments","q":{"exist":["after","before","email_id","limit"]},"r":{},"s":[{"lit":"emails"},{"var":"email_id"},{"lit":"attachments"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":0},{"a":true,"co":{"id":"GET /emails/receiving/{email_id}/attachments","source":"openapi3","version":2},"g":{"params":[{"a":true,"k":"param","n":"receiving_id","or":"email_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"after","or":"after","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"before","or":"before","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"limit","or":"limit","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/emails/receiving/{email_id}/attachments","q":{"exist":["after","before","limit","receiving_id"]},"r":{"param":{"email_id":"receiving_id"}},"s":[{"lit":"emails"},{"lit":"receiving"},{"var":"receiving_id"},{"lit":"attachments"}],"t":{"req":"`reqdata`","res":"`body.data`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.email"]]},"key$":"list_attachment","name__orig":"list_attachment","Name":"ListAttachment","name_":"list_attachment","name-":"list-attachment","NAME":"LIST_ATTACHMENT","index$":21}, {"active":true,"entity":"list_attachment","key$":"BasicListAttachmentFlow","kind":"basic","name":"BasicListAttachmentFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"receiving_id":"receiving01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_attachment_ref01"}}],"index$":0}]}, 'ListAttachment', {"GET /emails/{email_id}/attachments":{"protocol":"http","parameters":[{"name":"email_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The ID of the email.","index$":0},{"name":"limit","in":"query","required":false,"schema":{"type":"integer"},"description":"Maximum number of attachments to return.","index$":1},{"name":"after","in":"query","required":false,"schema":{"type":"string","format":"uuid"},"description":"Pagination cursor to fetch results after this attachment ID. Cannot be used with 'before'.","index$":2},{"name":"before","in":"query","required":false,"schema":{"type":"string","format":"uuid"},"description":"Pagination cursor to fetch results before this attachment ID. Cannot be used with 'after'.","index$":3}]},"GET /emails/receiving/{email_id}/attachments":{"protocol":"http","parameters":[{"name":"email_id","in":"path","required":true,"schema":{"type":"string","format":"uuid"},"description":"The ID of the received email.","index$":0},{"name":"limit","in":"query","required":false,"schema":{"type":"integer"},"description":"Maximum number of attachments to return.","index$":1},{"name":"after","in":"query","required":false,"schema":{"type":"string","format":"uuid"},"description":"Pagination cursor to fetch results after this attachment ID. Cannot be used with 'before'.","index$":2},{"name":"before","in":"query","required":false,"schema":{"type":"string","format":"uuid"},"description":"Pagination cursor to fetch results before this attachment ID. Cannot be used with 'after'.","index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_attachment_ref01_data = Object.values(setup.data.existing.list_attachment)[0] as any

    // LIST
    const list_attachment_ref01_ent = client.ListAttachment()
    const list_attachment_ref01_match: any = {}
    list_attachment_ref01_match['receiving_id'] = setup.idmap['receiving01']

    const list_attachment_ref01_list = (await list_attachment_ref01_ent.list(list_attachment_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_attachment/ListAttachmentTestData.json')

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
    ['list_attachment01','list_attachment02','list_attachment03','email01','email02','email03','receiving01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'RESEND_TEST_LIST_ATTACHMENT_ENTID': idmap,
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_TEST_EXPLAIN': 'FALSE',
    'RESEND_APIKEY': '',
  })

  idmap = env['RESEND_TEST_LIST_ATTACHMENT_ENTID']

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['RESEND_TEST_LIST_ATTACHMENT_ENTID']
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
  
