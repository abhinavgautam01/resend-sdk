import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ListReceivedEmail, ListReceivedEmailListMatch } from '../ResendTypes';
declare class ListReceivedEmailEntity extends ResendEntityBase<ListReceivedEmail> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ListReceivedEmailEntity): ListReceivedEmailEntity;
    list(this: any, reqmatch?: ListReceivedEmailListMatch, ctrl?: Control): Promise<ListReceivedEmailEntity[]>;
}
export { ListReceivedEmailEntity };
