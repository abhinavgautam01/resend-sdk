import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateTopicResponseSuccess, UpdateTopicResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateTopicResponseSuccessEntity extends ResendEntityBase<UpdateTopicResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateTopicResponseSuccessEntity): UpdateTopicResponseSuccessEntity;
    update(this: any, reqdata?: UpdateTopicResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateTopicResponseSuccessEntity>;
}
export { UpdateTopicResponseSuccessEntity };
