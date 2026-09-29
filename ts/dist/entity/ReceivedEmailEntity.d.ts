import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ReceivedEmail, ReceivedEmailLoadMatch } from '../ResendTypes';
declare class ReceivedEmailEntity extends ResendEntityBase<ReceivedEmail> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ReceivedEmailEntity): ReceivedEmailEntity;
    load(this: any, reqmatch?: ReceivedEmailLoadMatch, ctrl?: Control): Promise<ReceivedEmailEntity>;
}
export { ReceivedEmailEntity };
