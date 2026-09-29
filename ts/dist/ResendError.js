"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResendError = void 0;
class ResendError extends Error {
    isResendError = true;
    sdk = 'Resend';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.ResendError = ResendError;
//# sourceMappingURL=ResendError.js.map