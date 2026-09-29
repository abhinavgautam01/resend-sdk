import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateContactTopicsResponseSuccess, UpdateContactTopicsResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateContactTopicsResponseSuccessEntity extends ResendEntityBase<UpdateContactTopicsResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateContactTopicsResponseSuccessEntity): UpdateContactTopicsResponseSuccessEntity;
    update(this: any, reqdata?: UpdateContactTopicsResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateContactTopicsResponseSuccessEntity>;
}
export { UpdateContactTopicsResponseSuccessEntity };
