import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { OAuthGrant, OAuthGrantListMatch } from '../ResendTypes';
declare class OAuthGrantEntity extends ResendEntityBase<OAuthGrant> {
    constructor(client: ResendSDK, entopts: any);
    make(this: OAuthGrantEntity): OAuthGrantEntity;
    list(this: any, reqmatch?: OAuthGrantListMatch, ctrl?: Control): Promise<OAuthGrantEntity[]>;
}
export { OAuthGrantEntity };
