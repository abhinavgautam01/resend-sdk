import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Contact, ContactLoadMatch, ContactListMatch, ContactCreateData } from '../ResendTypes';
declare class ContactEntity extends ResendEntityBase<Contact> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ContactEntity): ContactEntity;
    load(this: any, reqmatch?: ContactLoadMatch, ctrl?: Control): Promise<ContactEntity>;
    list(this: any, reqmatch?: ContactListMatch, ctrl?: Control): Promise<ContactEntity[]>;
    create(this: any, reqdata?: ContactCreateData, ctrl?: Control): Promise<ContactEntity>;
}
export { ContactEntity };
