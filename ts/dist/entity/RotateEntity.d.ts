import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Rotate, RotateCreateData } from '../ResendTypes';
declare class RotateEntity extends ResendEntityBase<Rotate> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RotateEntity): RotateEntity;
    create(this: any, reqdata?: RotateCreateData, ctrl?: Control): Promise<RotateEntity>;
}
export { RotateEntity };
