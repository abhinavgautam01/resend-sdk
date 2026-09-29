// Checks one operation against the API definition rather than the model the
// SDK was generated from. A mock transport answers with the definition's own
// response example, so nothing here depends on how the model reads it.

import assert from 'node:assert/strict'


type Credential = { in: string, name: string, scheme?: string }

type DefinitionPoint = {
  entity: string
  accessor: string
  op: string
  method: string
  path: string
  action?: string
  args: { name: string, wire: string, value: any }[]
  select: Record<string, any>
  query: string[]
  auth: Credential[][] | null
  status: number
  sample: any
  idField: string
}


const KEY = 'definition-test-key'
const BASE = 'http://definition.test'


async function runDefinitionPoint(SDK: any, point: DefinitionPoint): Promise<void> {
  const sent: { url: URL, init: any }[] = []
  const body = null == point.sample ? null : JSON.stringify(point.sample)

  const client = new SDK({
    apikey: KEY,
    base: BASE,
    feature: { test: { active: false } },
    system: {
      fetch: async (url: any, init: any) => {
        sent.push({ url: new URL(String(url)), init: init || {} })
        return new Response(204 === point.status ? null : body, {
          status: point.status,
          headers: { 'content-type': 'application/json' },
        })
      },
    },
  })

  const input: any = { ...point.select }
  for (const arg of point.args) input[arg.name] = arg.value
  if (null != point.action) input.$action = point.action

  let result: any
  let error: any
  try {
    result = await client[point.accessor]()[point.op](input)
  }
  catch (err) {
    error = err
  }

  assert.equal(sent.length, 1, 'expected one request, sent ' + sent.length +
    (error ? ': ' + (error as any).message : ''))
  const { url, init } = sent[0]

  assert.equal(String(init.method || 'GET').toUpperCase(), point.method, 'method')

  const route = point.path.replace(/\{([^}]+)\}/g, (_: string, name: string) => {
    const arg = point.args.find((a) => a.wire === name)
    return null == arg ? '{' + name + '}' : encodeURIComponent(String(arg.value))
  })
  assert.equal(url.pathname, route, 'route')

  // Only what the definition declares, so never a path parameter again.
  const credentialQuery = (point.auth || []).flat()
    .filter((c) => 'query' === c.in).map((c) => c.name)
  for (const key of url.searchParams.keys()) {
    assert(point.query.includes(key) || credentialQuery.includes(key),
      'query parameter not in the definition: ' + key)
  }

  // From the apikey alone, placed as the definition's security scheme says.
  if (null != point.auth && 0 < point.auth.length) {
    const headers = new Headers(init.headers)
    assert(point.auth.some((set) => set.every((c) => placed(c, headers, url))),
      'credential not sent as the definition declares it: ' + JSON.stringify(point.auth))
  }

  if (null != error) {
    throw error
  }

  if (null == point.sample) {
    return
  }

  if ('list' === point.op) {
    const records = recordsOf(point.sample)
    if (null != records) {
      assert(Array.isArray(result), 'list did not return a list')
      assert.equal(result.length, records.length,
        'list read ' + result.length + ' records where the definition example holds ' +
        records.length)
    }
  }
  else if ('load' === point.op || 'create' === point.op || 'update' === point.op) {
    const record = recordOf(point.sample, point.idField)
    if (null != record) {
      assert.equal(result?.data?.()?.[point.idField], record[point.idField],
        'the entity does not hold the record the definition example returns')
    }
  }
}


function placed(cred: Credential, headers: Headers, url: URL): boolean {
  if ('query' === cred.in) {
    return KEY === url.searchParams.get(cred.name)
  }

  if ('cookie' === cred.in) {
    return String(headers.get('cookie') || '').split(';')
      .some((part) => cred.name + '=' + KEY === part.trim())
  }

  const value = headers.get(cred.name)
  if (null == value) {
    return false
  }

  const [kind, token] = value.split(' ')

  // The client carries no secret, so the password must be empty.
  if ('basic' === cred.scheme) {
    return 'basic' === String(kind).toLowerCase() &&
      Buffer.from(String(token), 'base64').toString('utf8') === KEY + ':'
  }

  if ('bearer' === cred.scheme) {
    return 'bearer' === String(kind).toLowerCase() && KEY === token
  }

  return value.includes(KEY)
}


// The records a list response holds: the body itself, or its one property
// that is a non-empty list of objects. Anything else proves nothing.
function recordsOf(sample: any): any[] | null {
  if (Array.isArray(sample)) {
    return sample
  }
  if (null == sample || 'object' !== typeof sample) {
    return null
  }
  const lists = Object.values(sample).filter((v: any) => Array.isArray(v) && 0 < v.length &&
    v.every((x: any) => null != x && 'object' === typeof x && !Array.isArray(x)))
  return 1 === lists.length ? lists[0] as any[] : null
}


// The record a single-item response returns: the body, or its one property
// holding an object with the identity field.
function recordOf(sample: any, idField: string): any {
  if (null == sample || 'object' !== typeof sample || Array.isArray(sample)) {
    return null
  }
  if (null != sample[idField]) {
    return sample
  }
  const inner = Object.values(sample).filter((v: any) => null != v && 'object' === typeof v &&
    !Array.isArray(v) && null != v[idField])
  return 1 === inner.length ? inner[0] : null
}


export { runDefinitionPoint, recordsOf, recordOf }
export type { DefinitionPoint }
