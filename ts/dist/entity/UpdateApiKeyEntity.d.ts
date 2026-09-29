import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateApiKey, UpdateApiKeyUpdateData } from '../ResendTypes';
declare class UpdateApiKeyEntity extends ResendEntityBase<UpdateApiKey> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateApiKeyEntity): UpdateApiKeyEntity;
    update(this: any, reqdata?: UpdateApiKeyUpdateData, ctrl?: Control): Promise<UpdateApiKeyEntity>;
}
export { UpdateApiKeyEntity };
