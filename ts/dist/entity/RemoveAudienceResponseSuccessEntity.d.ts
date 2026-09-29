import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveAudienceResponseSuccess, RemoveAudienceResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveAudienceResponseSuccessEntity extends ResendEntityBase<RemoveAudienceResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveAudienceResponseSuccessEntity): RemoveAudienceResponseSuccessEntity;
    remove(this: any, reqmatch?: RemoveAudienceResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveAudienceResponseSuccessEntity>;
}
export { RemoveAudienceResponseSuccessEntity };
