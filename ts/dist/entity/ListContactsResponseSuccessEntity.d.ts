import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ListContactsResponseSuccess, ListContactsResponseSuccessListMatch } from '../ResendTypes';
declare class ListContactsResponseSuccessEntity extends ResendEntityBase<ListContactsResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ListContactsResponseSuccessEntity): ListContactsResponseSuccessEntity;
    list(this: any, reqmatch?: ListContactsResponseSuccessListMatch, ctrl?: Control): Promise<ListContactsResponseSuccessEntity[]>;
}
export { ListContactsResponseSuccessEntity };
