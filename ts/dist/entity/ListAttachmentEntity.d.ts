import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { ListAttachment, ListAttachmentListMatch } from '../ResendTypes';
declare class ListAttachmentEntity extends ResendEntityBase<ListAttachment> {
    constructor(client: ResendSDK, entopts: any);
    make(this: ListAttachmentEntity): ListAttachmentEntity;
    list(this: any, reqmatch?: ListAttachmentListMatch, ctrl?: Control): Promise<ListAttachmentEntity[]>;
}
export { ListAttachmentEntity };
