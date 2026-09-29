import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Email, EmailLoadMatch, EmailListMatch, EmailCreateData } from '../ResendTypes';
declare class EmailEntity extends ResendEntityBase<Email> {
    constructor(client: ResendSDK, entopts: any);
    make(this: EmailEntity): EmailEntity;
    load(this: any, reqmatch?: EmailLoadMatch, ctrl?: Control): Promise<EmailEntity>;
    list(this: any, reqmatch?: EmailListMatch, ctrl?: Control): Promise<EmailEntity[]>;
    create(this: any, reqdata?: EmailCreateData, ctrl?: Control): Promise<EmailEntity>;
}
export { EmailEntity };
