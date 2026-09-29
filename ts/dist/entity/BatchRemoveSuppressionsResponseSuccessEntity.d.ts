import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { BatchRemoveSuppressionsResponseSuccess, BatchRemoveSuppressionsResponseSuccessCreateData } from '../ResendTypes';
declare class BatchRemoveSuppressionsResponseSuccessEntity extends ResendEntityBase<BatchRemoveSuppressionsResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: BatchRemoveSuppressionsResponseSuccessEntity): BatchRemoveSuppressionsResponseSuccessEntity;
    create(this: any, reqdata?: BatchRemoveSuppressionsResponseSuccessCreateData, ctrl?: Control): Promise<BatchRemoveSuppressionsResponseSuccessEntity>;
}
export { BatchRemoveSuppressionsResponseSuccessEntity };
