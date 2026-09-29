import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveBroadcastResponseSuccess, RemoveBroadcastResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveBroadcastResponseSuccessEntity extends ResendEntityBase<RemoveBroadcastResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveBroadcastResponseSuccessEntity): RemoveBroadcastResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveBroadcastResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveBroadcastResponseSuccessEntity>;
}
export { RemoveBroadcastResponseSuccessEntity };
