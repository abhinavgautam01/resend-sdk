import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ContactImport, ContactImportListMatch } from '../ResendTypes';
declare class ContactImportEntity extends ResendEntityBase<ContactImport> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ContactImportEntity): ContactImportEntity;
    list(this: any, reqmatch?: ContactImportListMatch, ctrl?: Control): Promise<ContactImportEntity[]>;
}
export { ContactImportEntity };
