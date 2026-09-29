import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Broadcast, BroadcastLoadMatch, BroadcastListMatch, BroadcastCreateData } from '../ResendTypes';
declare class BroadcastEntity extends ResendEntityBase<Broadcast> {
    constructor(client: ResendSDK, entopts: any);
    make(this: BroadcastEntity): BroadcastEntity;
    load(this: any, reqmatch?: BroadcastLoadMatch, ctrl?: Control): Promise<BroadcastEntity>;
    list(this: any, reqmatch?: BroadcastListMatch, ctrl?: Control): Promise<BroadcastEntity[]>;
    create(this: any, reqdata?: BroadcastCreateData, ctrl?: Control): Promise<BroadcastEntity>;
}
export { BroadcastEntity };
