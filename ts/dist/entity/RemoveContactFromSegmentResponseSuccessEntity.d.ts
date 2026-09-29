import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveContactFromSegmentResponseSuccess, RemoveContactFromSegmentResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveContactFromSegmentResponseSuccessEntity extends ResendEntityBase<RemoveContactFromSegmentResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveContactFromSegmentResponseSuccessEntity): RemoveContactFromSegmentResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveContactFromSegmentResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveContactFromSegmentResponseSuccessEntity>;
}
export { RemoveContactFromSegmentResponseSuccessEntity };
