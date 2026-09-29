"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CreateBatchEmailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.CreateBatchEmail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'create_batch_email.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": false, "t": "`$ARRAY`", "key$": "data", "index$": 0 } }, "name": "create_batch_email", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /emails/batch", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "Idempotency-Key", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/emails/batch", "q": { "exist": ["idempotency_key"] }, "r": {}, "s": [{ "lit": "emails" }, { "lit": "batch" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "create_batch_email", "name__orig": "create_batch_email", "Name": "CreateBatchEmail", "name_": "create_batch_email", "name-": "create-batch-email", "NAME": "CREATE_BATCH_EMAIL", "index$": 14 }, { "active": true, "entity": "create_batch_email", "key$": "BasicCreateBatchEmailFlow", "kind": "basic", "name": "BasicCreateBatchEmailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "create_batch_email_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'CreateBatchEmail', { "POST /emails/batch": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "required": ["from", "to", "subject"], "properties": { "from": { "type": "string", "description": "Sender email address. To include a friendly name, use the format \"Your Name <sender@domain.com>\".", "key$": "from" }, "to": { "description": "Recipient email address. For multiple addresses, send as an array of strings. Max 50.", "oneOf": [{ "type": "string" }, { "type": "array", "items": {}, "minItems": 1, "maxItems": 50 }], "key$": "to" }, "subject": { "type": "string", "description": "Email subject.", "key$": "subject" }, "bcc": { "description": "Bcc recipient email address. For multiple addresses, send as an array of strings.", "oneOf": [{ "type": "string" }, { "type": "array", "items": {} }], "key$": "bcc" }, "cc": { "description": "Cc recipient email address. For multiple addresses, send as an array of strings.", "oneOf": [{ "type": "string" }, { "type": "array", "items": {} }], "key$": "cc" }, "reply_to": { "description": "Reply-to email address. For multiple addresses, send as an array of strings.", "oneOf": [{ "type": "string" }, { "type": "array", "items": {} }], "key$": "reply_to" }, "html": { "type": "string", "description": "The HTML version of the message.", "key$": "html" }, "text": { "type": "string", "description": "The plain text version of the message.", "key$": "text" }, "template": { "allOf": [{ "type": "object", "properties": {}, "required": [], "x-ref": "#/components/schemas/EmailTemplateInput" }, { "description": "Use a published template to send the email. If provided, do not include html or text." }], "key$": "template" }, "headers": { "type": "object", "description": "Custom headers to add to the email.", "key$": "headers" }, "scheduled_at": { "type": "string", "description": "Schedule email to be sent later. The date should be in ISO 8601 format.", "key$": "scheduled_at" }, "attachments": { "type": "array", "items": { "type": "object", "properties": { "content": {}, "filename": {}, "path": {}, "content_type": {}, "content_id": {} }, "x-ref": "#/components/schemas/Attachment" }, "key$": "attachments" }, "tags": { "type": "array", "items": { "type": "object", "properties": { "name": {}, "value": {} }, "x-ref": "#/components/schemas/Tag" }, "key$": "tags" }, "topic_id": { "type": "string", "description": "The topic ID to scope the email to. If the recipient is a contact and opted-in to the topic, the email is sent. If opted-out, the email is not sent. If the recipient is not a contact, the email is sent if the topic's default subscription is opt_in.", "key$": "topic_id" } }, "x-ref": "#/components/schemas/SendEmailRequest" }, "index$": 1 } } } }, "parameters": [{ "in": "header", "name": "Idempotency-Key", "required": false, "schema": { "type": "string", "maxLength": 256 }, "description": "A unique identifier for the request to ensure emails are only sent once. [Learn more](https://resend.com/docs/dashboard/emails/idempotency-keys)", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const create_batch_email_ref01_ent = client.CreateBatchEmail();
        let create_batch_email_ref01_data = setup.data.new.create_batch_email['create_batch_email_ref01'];
        create_batch_email_ref01_data = (await create_batch_email_ref01_ent.create(create_batch_email_ref01_data)).data();
        (0, node_assert_1.default)(null != create_batch_email_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/create_batch_email/CreateBatchEmailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['create_batch_email01', 'create_batch_email02', 'create_batch_email03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_CREATE_BATCH_EMAIL_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_CREATE_BATCH_EMAIL_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_CREATE_BATCH_EMAIL_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.ResendSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.RESEND_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.RESEND_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CreateBatchEmailEntity.test.js.map