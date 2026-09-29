import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Template, TemplateLoadMatch, TemplateCreateData } from '../ResendTypes';
declare class TemplateEntity extends ResendEntityBase<Template> {
    constructor(client: ResendSDK, entopts: any);
    make(this: TemplateEntity): TemplateEntity;
    load(this: any, reqmatch?: TemplateLoadMatch, ctrl?: Control): Promise<TemplateEntity>;
    create(this: any, reqdata?: TemplateCreateData, ctrl?: Control): Promise<TemplateEntity>;
}
export { TemplateEntity };
