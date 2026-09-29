import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ListBroadcastRecipientsResponseSuccess, ListBroadcastRecipientsResponseSuccessListMatch } from '../ResendTypes';
declare class ListBroadcastRecipientsResponseSuccessEntity extends ResendEntityBase<ListBroadcastRecipientsResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ListBroadcastRecipientsResponseSuccessEntity): ListBroadcastRecipientsResponseSuccessEntity;
    list(this: any, reqmatch?: ListBroadcastRecipientsResponseSuccessListMatch, ctrl?: Control): Promise<ListBroadcastRecipientsResponseSuccessEntity[]>;
}
export { ListBroadcastRecipientsResponseSuccessEntity };
