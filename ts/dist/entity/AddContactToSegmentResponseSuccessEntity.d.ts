import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { AddContactToSegmentResponseSuccess, AddContactToSegmentResponseSuccessCreateData } from '../ResendTypes';
declare class AddContactToSegmentResponseSuccessEntity extends ResendEntityBase<AddContactToSegmentResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: AddContactToSegmentResponseSuccessEntity): AddContactToSegmentResponseSuccessEntity;
    create(this: any, reqdata?: AddContactToSegmentResponseSuccessCreateData, ctrl?: Control): Promise<AddContactToSegmentResponseSuccessEntity>;
}
export { AddContactToSegmentResponseSuccessEntity };
