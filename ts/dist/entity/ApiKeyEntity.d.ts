import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ApiKey, ApiKeyListMatch, ApiKeyCreateData, ApiKeyRemoveMatch } from '../ResendTypes';
declare class ApiKeyEntity extends ResendEntityBase<ApiKey> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ApiKeyEntity): ApiKeyEntity;
    list(this: any, reqmatch?: ApiKeyListMatch, ctrl?: Control): Promise<ApiKeyEntity[]>;
    create(this: any, reqdata?: ApiKeyCreateData, ctrl?: Control): Promise<ApiKeyEntity>;
    remove(this: any, reqmatch?: ApiKeyRemoveMatch, ctrl?: Control): Promise<ApiKeyEntity>;
}
export { ApiKeyEntity };
