import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateContactResponseSuccess, UpdateContactResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateContactResponseSuccessEntity extends ResendEntityBase<UpdateContactResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateContactResponseSuccessEntity): UpdateContactResponseSuccessEntity;
    update(this: any, reqdata?: UpdateContactResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateContactResponseSuccessEntity>;
}
export { UpdateContactResponseSuccessEntity };
