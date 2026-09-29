import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateDomainResponseSuccess, UpdateDomainResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateDomainResponseSuccessEntity extends ResendEntityBase<UpdateDomainResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateDomainResponseSuccessEntity): UpdateDomainResponseSuccessEntity;
    update(this: any, reqdata?: UpdateDomainResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateDomainResponseSuccessEntity>;
}
export { UpdateDomainResponseSuccessEntity };
