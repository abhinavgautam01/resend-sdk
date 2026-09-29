import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Usage, UsageLoadMatch } from '../ResendTypes';
declare class UsageEntity extends ResendEntityBase<Usage> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UsageEntity): UsageEntity;
    load(this: any, reqmatch?: UsageLoadMatch, ctrl?: Control): Promise<UsageEntity>;
}
export { UsageEntity };
