import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { RetrievedAttachment, RetrievedAttachmentLoadMatch } from '../ResendTypes';
declare class RetrievedAttachmentEntity extends ResendEntityBase<RetrievedAttachment> {
    constructor(client: ResendSDK, entopts: any);
    make(this: RetrievedAttachmentEntity): RetrievedAttachmentEntity;
    load(this: any, reqmatch?: RetrievedAttachmentLoadMatch, ctrl?: Control): Promise<RetrievedAttachmentEntity>;
}
export { RetrievedAttachmentEntity };
