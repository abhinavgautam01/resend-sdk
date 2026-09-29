import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ListBroadcastClickedLinksResponseSuccess, ListBroadcastClickedLinksResponseSuccessListMatch } from '../ResendTypes';
declare class ListBroadcastClickedLinksResponseSuccessEntity extends ResendEntityBase<ListBroadcastClickedLinksResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ListBroadcastClickedLinksResponseSuccessEntity): ListBroadcastClickedLinksResponseSuccessEntity;
    list(this: any, reqmatch?: ListBroadcastClickedLinksResponseSuccessListMatch, ctrl?: Control): Promise<ListBroadcastClickedLinksResponseSuccessEntity[]>;
}
export { ListBroadcastClickedLinksResponseSuccessEntity };
