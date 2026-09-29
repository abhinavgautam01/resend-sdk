import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { WebhookEvent, WebhookEventLoadMatch, WebhookEventCreateData } from '../ResendTypes';
declare class WebhookEventEntity extends ResendEntityBase<WebhookEvent> {
    constructor(client: ResendSDK, entopts: any);
    make(this: WebhookEventEntity): WebhookEventEntity;
    load(this: any, reqmatch?: WebhookEventLoadMatch, ctrl?: Control): Promise<WebhookEventEntity>;
    create(this: any, reqdata?: WebhookEventCreateData, ctrl?: Control): Promise<WebhookEventEntity>;
}
export { WebhookEventEntity };
