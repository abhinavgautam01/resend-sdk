import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Event, EventLoadMatch, EventListMatch, EventCreateData } from '../ResendTypes';
declare class EventEntity extends ResendEntityBase<Event> {
    constructor(client: ResendSDK, entopts: any);
    make(this: EventEntity): EventEntity;
    load(this: any, reqmatch?: EventLoadMatch, ctrl?: Control): Promise<EventEntity>;
    list(this: any, reqmatch?: EventListMatch, ctrl?: Control): Promise<EventEntity[]>;
    create(this: any, reqdata?: EventCreateData, ctrl?: Control): Promise<EventEntity>;
}
export { EventEntity };
