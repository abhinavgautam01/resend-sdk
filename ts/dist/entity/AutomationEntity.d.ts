import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Automation, AutomationLoadMatch, AutomationListMatch, AutomationCreateData, AutomationUpdateData, AutomationRemoveMatch } from '../ResendTypes';
declare class AutomationEntity extends ResendEntityBase<Automation> {
    constructor(client: ResendSDK, entopts: any);
    make(this: AutomationEntity): AutomationEntity;
    load(this: any, reqmatch?: AutomationLoadMatch, ctrl?: Control): Promise<AutomationEntity>;
    list(this: any, reqmatch?: AutomationListMatch, ctrl?: Control): Promise<AutomationEntity[]>;
    create(this: any, reqdata?: AutomationCreateData, ctrl?: Control): Promise<AutomationEntity>;
    update(this: any, reqdata?: AutomationUpdateData, ctrl?: Control): Promise<AutomationEntity>;
    remove(this: any, reqmatch?: AutomationRemoveMatch, ctrl?: Control): Promise<AutomationEntity>;
}
export { AutomationEntity };
