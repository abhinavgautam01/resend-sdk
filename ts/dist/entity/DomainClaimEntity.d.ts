import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { DomainClaim, DomainClaimLoadMatch, DomainClaimCreateData } from '../ResendTypes';
declare class DomainClaimEntity extends ResendEntityBase<DomainClaim> {
    constructor(client: ResendSDK, entopts: any);
    make(this: DomainClaimEntity): DomainClaimEntity;
    load(this: any, reqmatch?: DomainClaimLoadMatch, ctrl?: Control): Promise<DomainClaimEntity>;
    create(this: any, reqdata?: DomainClaimCreateData, ctrl?: Control): Promise<DomainClaimEntity>;
}
export { DomainClaimEntity };
