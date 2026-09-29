import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RemoveSuppressionResponseSuccess, RemoveSuppressionResponseSuccessListMatch, RemoveSuppressionResponseSuccessCreateData, RemoveSuppressionResponseSuccessRemoveMatch } from '../ResendTypes';
declare class RemoveSuppressionResponseSuccessEntity extends ResendEntityBase<RemoveSuppressionResponseSuccess> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RemoveSuppressionResponseSuccessEntity): RemoveSuppressionResponseSuccessEntity;
    list(this: any, reqmatch?: RemoveSuppressionResponseSuccessListMatch, ctrl?: Control): Promise<RemoveSuppressionResponseSuccessEntity[]>;
    create(this: any, reqdata?: RemoveSuppressionResponseSuccessCreateData, ctrl?: Control): Promise<RemoveSuppressionResponseSuccessEntity>;
    remove(this: any, reqmatch?: RemoveSuppressionResponseSuccessRemoveMatch, ctrl?: Control): Promise<RemoveSuppressionResponseSuccessEntity>;
}
export { RemoveSuppressionResponseSuccessEntity };
