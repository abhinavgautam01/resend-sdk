import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Webhook, WebhookLoadMatch, WebhookRemoveMatch } from '../ResendTypes';
declare class WebhookEntity extends ResendEntityBase<Webhook> {
    constructor(client: ResendSDK, entopts: any);
    make(this: WebhookEntity): WebhookEntity;
    load(this: any, reqmatch?: WebhookLoadMatch, ctrl?: Control): Promise<WebhookEntity>;
    remove(this: any, reqmatch?: WebhookRemoveMatch, ctrl?: Control): Promise<WebhookEntity>;
}
export { WebhookEntity };
