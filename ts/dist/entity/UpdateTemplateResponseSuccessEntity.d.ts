import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateTemplateResponseSuccess, UpdateTemplateResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateTemplateResponseSuccessEntity extends ResendEntityBase<UpdateTemplateResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateTemplateResponseSuccessEntity): UpdateTemplateResponseSuccessEntity;
    update(this: any, reqdata?: UpdateTemplateResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateTemplateResponseSuccessEntity>;
}
export { UpdateTemplateResponseSuccessEntity };
