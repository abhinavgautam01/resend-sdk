import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ListContactSegmentsResponseSuccess, ListContactSegmentsResponseSuccessListMatch } from '../ResendTypes';
declare class ListContactSegmentsResponseSuccessEntity extends ResendEntityBase<ListContactSegmentsResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ListContactSegmentsResponseSuccessEntity): ListContactSegmentsResponseSuccessEntity;
    list(this: any, reqmatch?: ListContactSegmentsResponseSuccessListMatch, ctrl?: Control): Promise<ListContactSegmentsResponseSuccessEntity[]>;
}
export { ListContactSegmentsResponseSuccessEntity };
