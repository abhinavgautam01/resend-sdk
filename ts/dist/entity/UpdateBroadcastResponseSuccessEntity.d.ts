import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateBroadcastResponseSuccess, UpdateBroadcastResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateBroadcastResponseSuccessEntity extends ResendEntityBase<UpdateBroadcastResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateBroadcastResponseSuccessEntity): UpdateBroadcastResponseSuccessEntity;
    update(this: any, reqdata?: UpdateBroadcastResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateBroadcastResponseSuccessEntity>;
}
export { UpdateBroadcastResponseSuccessEntity };
