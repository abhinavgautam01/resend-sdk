import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { CreateContactImportResponseSuccess, CreateContactImportResponseSuccessCreateData } from '../ResendTypes';
declare class CreateContactImportResponseSuccessEntity extends ResendEntityBase<CreateContactImportResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: CreateContactImportResponseSuccessEntity): CreateContactImportResponseSuccessEntity;
    create(this: any, reqdata?: CreateContactImportResponseSuccessCreateData, ctrl?: Control): Promise<CreateContactImportResponseSuccessEntity>;
}
export { CreateContactImportResponseSuccessEntity };
