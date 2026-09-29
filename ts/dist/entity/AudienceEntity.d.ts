import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Audience, AudienceLoadMatch, AudienceListMatch, AudienceCreateData } from '../ResendTypes';
declare class AudienceEntity extends ResendEntityBase<Audience> {
    constructor(client: ResendSDK, entopts: any);
    make(this: AudienceEntity): AudienceEntity;
    load(this: any, reqmatch?: AudienceLoadMatch, ctrl?: Control): Promise<AudienceEntity>;
    list(this: any, reqmatch?: AudienceListMatch, ctrl?: Control): Promise<AudienceEntity[]>;
    create(this: any, reqdata?: AudienceCreateData, ctrl?: Control): Promise<AudienceEntity>;
}
export { AudienceEntity };
