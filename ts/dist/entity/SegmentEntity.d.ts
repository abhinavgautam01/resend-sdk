import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Segment, SegmentLoadMatch } from '../ResendTypes';
declare class SegmentEntity extends ResendEntityBase<Segment> {
    constructor(client: ResendSDK, entopts: any);
    make(this: SegmentEntity): SegmentEntity;
    load(this: any, reqmatch?: SegmentLoadMatch, ctrl?: Control): Promise<SegmentEntity>;
}
export { SegmentEntity };
