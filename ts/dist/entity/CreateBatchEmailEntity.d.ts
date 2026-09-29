import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { CreateBatchEmail, CreateBatchEmailCreateData } from '../ResendTypes';
declare class CreateBatchEmailEntity extends ResendEntityBase<CreateBatchEmail> {
    constructor(client: ResendSDK, entopts: any);
    make(this: CreateBatchEmailEntity): CreateBatchEmailEntity;
    create(this: any, reqdata?: CreateBatchEmailCreateData, ctrl?: Control): Promise<CreateBatchEmailEntity>;
}
export { CreateBatchEmailEntity };
