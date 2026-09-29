import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { BatchAddSuppressionsResponseSuccess, BatchAddSuppressionsResponseSuccessCreateData } from '../ResendTypes';
declare class BatchAddSuppressionsResponseSuccessEntity extends ResendEntityBase<BatchAddSuppressionsResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: BatchAddSuppressionsResponseSuccessEntity): BatchAddSuppressionsResponseSuccessEntity;
    create(this: any, reqdata?: BatchAddSuppressionsResponseSuccessCreateData, ctrl?: Control): Promise<BatchAddSuppressionsResponseSuccessEntity>;
}
export { BatchAddSuppressionsResponseSuccessEntity };
