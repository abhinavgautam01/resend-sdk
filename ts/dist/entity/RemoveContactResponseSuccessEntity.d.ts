import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveContactResponseSuccess, RemoveContactResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveContactResponseSuccessEntity extends ResendEntityBase<RemoveContactResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveContactResponseSuccessEntity): RemoveContactResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveContactResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveContactResponseSuccessEntity>;
}
export { RemoveContactResponseSuccessEntity };
