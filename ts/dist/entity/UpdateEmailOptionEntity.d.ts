import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { UpdateEmailOption, UpdateEmailOptionUpdateData } from '../ResendTypes';
declare class UpdateEmailOptionEntity extends ResendEntityBase<UpdateEmailOption> {
    constructor(client: ResendSDK, entopts: any);
    make(this: UpdateEmailOptionEntity): UpdateEmailOptionEntity;
    update(this: any, reqdata?: UpdateEmailOptionUpdateData, ctrl?: Control): Promise<UpdateEmailOptionEntity>;
}
export { UpdateEmailOptionEntity };
