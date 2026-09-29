import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { AutomationRunListItem, AutomationRunListItemListMatch } from '../ResendTypes';
declare class AutomationRunListItemEntity extends ResendEntityBase<AutomationRunListItem> {
    constructor(client: ResendSDK, entopts: any);
    make(this: AutomationRunListItemEntity): AutomationRunListItemEntity;
    list(this: any, reqmatch?: AutomationRunListItemListMatch, ctrl?: Control): Promise<AutomationRunListItemEntity[]>;
}
export { AutomationRunListItemEntity };
