

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'


import { ResendSDK } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  maybeSkipControl,
  skipIfMissingIds,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ListAttachmentDirect', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
  afterEach(liveDelay('RESEND_TEST_LIVE'))

  test('direct-exists', async () => {
    const sdk = new ResendSDK({
      base: 'http://localhost:8080',
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-list-list_attachment', async (t: any) => {
    if (liveScenariosActive()) { t.skip('Covered by live operation scenarios'); return }
    const setup = directSetup([{ id: 'direct01' }, { id: 'direct02' }])
    if (maybeSkipControl(t, 'direct', 'direct-list-list_attachment', setup.live)) return
    if (skipIfMissingIds(t, setup, ["email01"])) return
    const { client, calls } = setup

    const params: any = {}
    const query: any = {}
    if (setup.live) {
      params.email_id = setup.idmap['email01']
    } else {
      params.email_id = 'direct01'
    }

    const result: any = await client.direct({
      path: 'emails/{email_id}/attachments',
      method: 'GET',
      params,
      query,
    })

    if (setup.live) {
      // STRICT live mode: a non-2xx is a real failure - this project owns
      // the server it points at, so there is nothing to be lenient about.
      //
      // What is NOT asserted here is the MOCK's own fixtures. `direct01`
      // is a scripted id and `calls` records the mock transport; neither
      // exists on a live run, so asserting them made strict mode mean
      // "compare the live server against the mock's script" - a suite that
      // could not pass against any real API, including this project's own.
      assert(result.ok === true,
        'Live request failed: HTTP ' + result.status)
      assert(result.status >= 200 && result.status < 300)
      assert(Array.isArray(unwrapListData(result.data)), 'Expected live list response')
    } else {
      assert(result.ok === true)
      assert(result.status === 200)
      assert(null != result.data)
      const listArr = unwrapListData(result.data)
      assert(Array.isArray(listArr))
      assert(listArr!.length === 2)
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
    }
  })

})



function liveScenariosActive() { return false && process.env.RESEND_TEST_LIVE === 'TRUE' }
function directSetup(mockres?: any) {
  const calls: any[] = []

  const env = envOverride({
    'RESEND_TEST_LIST_ATTACHMENT_ENTID': {},
    'RESEND_TEST_LIVE': 'FALSE',
    'RESEND_APIKEY': '',
  })

  const live = 'TRUE' === env.RESEND_TEST_LIVE

  if (live) {
    const transport = createLiveTransport()
    // Merged so the generated fields win: sdk-test-control.json's
    // test.client.options adds to the live client, it does not redirect it.
    const client = new ResendSDK(
      Object.assign({}, liveClientOptions(), { system: { fetch: transport.fetch },
      apikey: env.RESEND_APIKEY,
      }))

    let idmap: any = env['RESEND_TEST_LIST_ATTACHMENT_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap, transport }
  }

  const mockFetch = async (url: string, init: any) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new ResendSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} as any }
}

// direct() returns the raw response body. List endpoints often wrap the
// array in an envelope (e.g. { data: [...] }, { entities: [...] },
// { pagination, data: [...] }). The test transforms the raw body to
// extract the first array — either the body itself or the first array
// property of an envelope object.
function unwrapListData(data: any): any[] | null {
  if (Array.isArray(data)) return data
  if (data && 'object' === typeof data) {
    for (const v of Object.values(data)) {
      if (Array.isArray(v)) return v as any[]
    }
  }
  return null
}
  
