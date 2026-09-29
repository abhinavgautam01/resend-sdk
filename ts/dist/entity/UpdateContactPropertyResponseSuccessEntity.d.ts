import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateContactPropertyResponseSuccess, UpdateContactPropertyResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateContactPropertyResponseSuccessEntity extends ResendEntityBase<UpdateContactPropertyResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateContactPropertyResponseSuccessEntity): UpdateContactPropertyResponseSuccessEntity;
    update(this: any, reqdata?: UpdateContactPropertyResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateContactPropertyResponseSuccessEntity>;
}
export { UpdateContactPropertyResponseSuccessEntity };
