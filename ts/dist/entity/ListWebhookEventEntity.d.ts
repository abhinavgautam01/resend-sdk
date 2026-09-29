import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ListWebhookEvent, ListWebhookEventListMatch } from '../ResendTypes';
declare class ListWebhookEventEntity extends ResendEntityBase<ListWebhookEvent> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ListWebhookEventEntity): ListWebhookEventEntity;
    list(this: any, reqmatch?: ListWebhookEventListMatch, ctrl?: Control): Promise<ListWebhookEventEntity[]>;
}
export { ListWebhookEventEntity };
