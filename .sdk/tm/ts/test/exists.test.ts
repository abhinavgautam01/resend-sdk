
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { ResendSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = ResendSDK.test()
    equal(testsdk instanceof ResendSDK, true,
      'ResendSDK.test() must return a client synchronously')
  })

})
