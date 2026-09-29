import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { EmailsMetric, EmailsMetricListMatch } from '../ResendTypes';
declare class EmailsMetricEntity extends ResendEntityBase<EmailsMetric> {
    constructor(client: ResendSDK, entopts: any);
    make(this: EmailsMetricEntity): EmailsMetricEntity;
    list(this: any, reqmatch?: EmailsMetricListMatch, ctrl?: Control): Promise<EmailsMetricEntity[]>;
}
export { EmailsMetricEntity };
