import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Suppression, SuppressionLoadMatch } from '../ResendTypes';
declare class SuppressionEntity extends ResendEntityBase<Suppression> {
    constructor(client: ResendSDK, entopts: any);
    make(this: SuppressionEntity): SuppressionEntity;
    load(this: any, reqmatch?: SuppressionLoadMatch, ctrl?: Control): Promise<SuppressionEntity>;
}
export { SuppressionEntity };
