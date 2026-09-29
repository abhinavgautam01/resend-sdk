import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveTopicResponseSuccess, RemoveTopicResponseSuccessListMatch, RemoveTopicResponseSuccessCreateData, RemoveTopicResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveTopicResponseSuccessEntity extends ResendEntityBase<RemoveTopicResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveTopicResponseSuccessEntity): RemoveTopicResponseSuccessEntity;
    list(this: any, reqmatch?: RemoveTopicResponseSuccessListMatch, ctrl?: Control): Promise<RemoveTopicResponseSuccessEntity[]>;
    create(this: any, reqdata?: RemoveTopicResponseSuccessCreateData, ctrl?: Control): Promise<RemoveTopicResponseSuccessEntity>;
    remove(this: any, reqmatch?: RemoveTopicResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveTopicResponseSuccessEntity>;
}
export { RemoveTopicResponseSuccessEntity };
