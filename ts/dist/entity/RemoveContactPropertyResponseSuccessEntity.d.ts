import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveContactPropertyResponseSuccess, RemoveContactPropertyResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveContactPropertyResponseSuccessEntity extends ResendEntityBase<RemoveContactPropertyResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveContactPropertyResponseSuccessEntity): RemoveContactPropertyResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveContactPropertyResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveContactPropertyResponseSuccessEntity>;
}
export { RemoveContactPropertyResponseSuccessEntity };
