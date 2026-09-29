import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateEvent, UpdateEventUpdateData } from '../ResendTypes';
declare class UpdateEventEntity extends ResendEntityBase<UpdateEvent> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateEventEntity): UpdateEventEntity;
    update(this: any, reqdata?: UpdateEventUpdateData, ctrl?: Control): Promise<UpdateEventEntity>;
}
export { UpdateEventEntity };
