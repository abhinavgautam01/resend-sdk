import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ContactTopicsResponseSuccess, ContactTopicsResponseSuccessListMatch } from '../ResendTypes';
declare class ContactTopicsResponseSuccessEntity extends ResendEntityBase<ContactTopicsResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ContactTopicsResponseSuccessEntity): ContactTopicsResponseSuccessEntity;
    list(this: any, reqmatch?: ContactTopicsResponseSuccessListMatch, ctrl?: Control): Promise<ContactTopicsResponseSuccessEntity[]>;
}
export { ContactTopicsResponseSuccessEntity };
