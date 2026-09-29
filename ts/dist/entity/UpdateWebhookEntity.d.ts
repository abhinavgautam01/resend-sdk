import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateWebhook, UpdateWebhookListMatch, UpdateWebhookCreateData, UpdateWebhookUpdateData } from '../ResendTypes';
declare class UpdateWebhookEntity extends ResendEntityBase<UpdateWebhook> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateWebhookEntity): UpdateWebhookEntity;
    list(this: any, reqmatch?: UpdateWebhookListMatch, ctrl?: Control): Promise<UpdateWebhookEntity[]>;
    create(this: any, reqdata?: UpdateWebhookCreateData, ctrl?: Control): Promise<UpdateWebhookEntity>;
    update(this: any, reqdata?: UpdateWebhookUpdateData, ctrl?: Control): Promise<UpdateWebhookEntity>;
}
export { UpdateWebhookEntity };
