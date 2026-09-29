import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveSegmentResponseSuccess, RemoveSegmentResponseSuccessListMatch, RemoveSegmentResponseSuccessCreateData, RemoveSegmentResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveSegmentResponseSuccessEntity extends ResendEntityBase<RemoveSegmentResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveSegmentResponseSuccessEntity): RemoveSegmentResponseSuccessEntity;
    list(this: any, reqmatch?: RemoveSegmentResponseSuccessListMatch, ctrl?: Control): Promise<RemoveSegmentResponseSuccessEntity[]>;
    create(this: any, reqdata?: RemoveSegmentResponseSuccessCreateData, ctrl?: Control): Promise<RemoveSegmentResponseSuccessEntity>;
    remove(this: any, reqmatch?: RemoveSegmentResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveSegmentResponseSuccessEntity>;
}
export { RemoveSegmentResponseSuccessEntity };
