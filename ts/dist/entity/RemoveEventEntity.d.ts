import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveEvent, RemoveEventRemoveMatch } from '../ResendTypes';
declare class RemoveEventEntity extends ResendEntityBase<RemoveEvent> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveEventEntity): RemoveEventEntity;
    remove(this: any, reqmatch?: RemoveEventRemoveMatch, ctrl?: Control): Promise<RemoveEventEntity>;
}
export { RemoveEventEntity };
