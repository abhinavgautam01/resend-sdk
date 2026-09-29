
import { inspect } from 'node:util'

import { ResendEntityBase } from '../ResendEntityBase'

import type {
  ResendSDK,
} from '../ResendSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  RemoveContactResponseSuccess,
  RemoveContactResponseSuccessRemoveMatch,
} from '../ResendTypes'

class RemoveContactResponseSuccessEntity extends ResendEntityBase<RemoveContactResponseSuccess> {

  constructor(client: ResendSDK, entopts: any) {
    super(client, entopts)
    this.name = 'remove_contact_response_success'
    this.name_ = 'remove_contact_response_success'
    this.Name = 'RemoveContactResponseSuccess'
  }


  make(this: RemoveContactResponseSuccessEntity) {
    return new RemoveContactResponseSuccessEntity(this._client, this.entopts())
  }







  async remove(
    this: any, reqmatch?: RemoveContactResponseSuccessRemoveMatch, ctrl?: Control,
  ): Promise<RemoveContactResponseSuccessEntity> {

    const utility = this._utility

    const {
      makeContext,
      done,
      // The registry name is `makeError`; `error` is the local alias.
      makeError: error,
      featureHook,
      makePoint,
      makeRequest,
      makeResponse,
      makeResult,
      makeSpec,
    } = utility

    let fres: Promise<any> | undefined = undefined

    let ctx: Context = makeContext({
      opname: 'remove',
      ctrl,
      match: this._match,
      data: this._data,
      reqmatch
    }, this._entctx)

    try {


      fres = featureHook(ctx, 'PrePoint')
      if (fres instanceof Promise) { await fres }

      ctx.out.point = makePoint(ctx)
      if (ctx.out.point instanceof Error) {
        return error(ctx, ctx.out.point)
      }



      fres = featureHook(ctx, 'PreSpec')
      if (fres instanceof Promise) { await fres }

      ctx.out.spec = makeSpec(ctx)
      if (ctx.out.spec instanceof Error) {
        return error(ctx, ctx.out.spec)
      }



      fres = featureHook(ctx, 'PreRequest')
      if (fres instanceof Promise) { await fres }

      ctx.out.request = await makeRequest(ctx)
      if (ctx.out.request instanceof Error) {
        return error(ctx, ctx.out.request)
      }



      fres = featureHook(ctx, 'PreResponse')
      if (fres instanceof Promise) { await fres }

      ctx.out.response = await makeResponse(ctx)
      if (ctx.out.response instanceof Error) {
        return error(ctx, ctx.out.response)
      }



      fres = featureHook(ctx, 'PreResult')
      if (fres instanceof Promise) { await fres }

      ctx.out.result = await makeResult(ctx)
      if (ctx.out.result instanceof Error) {
        return error(ctx, ctx.out.result)
      }



      fres = featureHook(ctx, 'PreDone')
      if (fres instanceof Promise) { await fres }

      if (null != ctx.result) {
        if (null != ctx.result.resmatch) {
          this._match = ctx.result.resmatch
        }

        if (null != ctx.result.resdata) {
          this._data = ctx.result.resdata
        }
      }

      const out = done(ctx)

      if (ctx.result && ctx.result.ok) {
        this.markDeleted()
        return this
      }

      return out
    }
    catch (err: any) {

      fres = featureHook(ctx, 'PreUnexpected')
      if (fres instanceof Promise) { await fres }

      err = this._unexpected(ctx, err)

      if (err) {
        throw err
      }
      else {
        // Off-happy-path (throw disabled): typed as any so the method's
        // Promise<RemoveContactResponseSuccessEntity> return stays clean under strict null checks.
        return undefined as any
      }
    }
  }


}


export {
  RemoveContactResponseSuccessEntity
}
