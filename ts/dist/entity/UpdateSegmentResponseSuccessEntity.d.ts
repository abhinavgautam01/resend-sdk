import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateSegmentResponseSuccess, UpdateSegmentResponseSuccessUpdateData } from '../ResendTypes';
declare class UpdateSegmentResponseSuccessEntity extends ResendEntityBase<UpdateSegmentResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateSegmentResponseSuccessEntity): UpdateSegmentResponseSuccessEntity;
    update(this: any, reqdata?: UpdateSegmentResponseSuccessUpdateData, ctrl?: Control): Promise<UpdateSegmentResponseSuccessEntity>;
}
export { UpdateSegmentResponseSuccessEntity };
