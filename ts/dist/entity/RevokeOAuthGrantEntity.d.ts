import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RevokeOAuthGrant, RevokeOAuthGrantRemoveMatch } from '../ResendTypes';
declare class RevokeOAuthGrantEntity extends ResendEntityBase<RevokeOAuthGrant> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RevokeOAuthGrantEntity): RevokeOAuthGrantEntity;
    remove(this: any, reqmatch?: RevokeOAuthGrantRemoveMatch, ctrl?: Control): Promise<RevokeOAuthGrantEntity>;
}
export { RevokeOAuthGrantEntity };
