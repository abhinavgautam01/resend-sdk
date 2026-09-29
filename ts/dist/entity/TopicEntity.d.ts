import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Topic, TopicLoadMatch } from '../ResendTypes';
declare class TopicEntity extends ResendEntityBase<Topic> {
    constructor(client: ResendSDK, entopts: any);
    make(this: TopicEntity): TopicEntity;
    load(this: any, reqmatch?: TopicLoadMatch, ctrl?: Control): Promise<TopicEntity>;
}
export { TopicEntity };
