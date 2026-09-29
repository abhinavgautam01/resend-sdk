import { ResendEntityBase } from '../ResendEntityBase';
import type { ResendSDK } from '../ResendSDK';
import type { Control } from '../types';
import type { Log, LogLoadMatch, LogListMatch } from '../ResendTypes';
declare class LogEntity extends ResendEntityBase<Log> {
    constructor(client: ResendSDK, entopts: any);
    make(this: LogEntity): LogEntity;
    load(this: any, reqmatch?: LogLoadMatch, ctrl?: Control): Promise<LogEntity>;
    list(this: any, reqmatch?: LogListMatch, ctrl?: Control): Promise<LogEntity[]>;
}
export { LogEntity };
