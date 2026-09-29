import { Context } from './Context';
declare class ResendError extends Error {
    isResendError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { ResendError };
