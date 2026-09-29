import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ListWebhookEventAttempt, ListWebhookEventAttemptListMatch } from '../ResendTypes';
declare class ListWebhookEventAttemptEntity extends ResendEntityBase<ListWebhookEventAttempt> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ListWebhookEventAttemptEntity): ListWebhookEventAttemptEntity;
    list(this: any, reqmatch?: ListWebhookEventAttemptListMatch, ctrl?: Control): Promise<ListWebhookEventAttemptEntity[]>;
}
export { ListWebhookEventAttemptEntity };
