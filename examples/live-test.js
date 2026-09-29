// Live smoke test of the generated TypeScript SDK against the real Resend API.
// Usage: RESEND_APIKEY=re_... RESEND_TO=you@example.com node examples/live-test.js
// Without a verified domain, Resend only delivers to the address you signed up with.
// A "Sending access" key can only send, so the other steps report 401 and the run continues.

const { ResendSDK } = require('../ts')

const client = new ResendSDK({ apikey: process.env.RESEND_APIKEY })

// Print only the message: the full error object includes the Authorization header.
function describe(err) {
  const body = err.ctx && err.ctx.result && err.ctx.result.body
  return err.message + (body ? ' ' + JSON.stringify(body) : '')
}

async function step(name, fn) {
  try {
    const out = await fn()
    console.log('PASS', name, out)
    return out
  } catch (err) {
    console.log('FAIL', name, describe(err))
  }
}

async function main() {
  await step('Domain.list', async () => (await client.Domain().list()).length + ' domains')
  await step('ApiKey.list', async () => (await client.ApiKey().list()).length + ' keys')

  const id = await step('Email.create', async () => {
    const sent = await client.Email().create({
      from: 'onboarding@resend.dev',
      to: [process.env.RESEND_TO],
      subject: 'Hello from the Voxgig generated Resend SDK',
      html: '<p>Sent with <strong>resend-sdk</strong>.</p>',
    })
    return sent.data().id
  })

  if (id) {
    await step('Email.load', async () => {
      const loaded = await client.Email().load({ id })
      return loaded.data ? loaded.data() : loaded
    })
  }
}

main()
