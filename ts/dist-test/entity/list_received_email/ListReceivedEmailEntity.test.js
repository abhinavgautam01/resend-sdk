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
(0, node_test_1.describe)('ListReceivedEmailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.ListReceivedEmail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_received_email.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "attachments": { "a": true, "h": "Attachments", "n": "attachments", "r": false, "sh": "Array of attachments for this email.", "t": "`$ARRAY`", "key$": "attachments", "index$": 0 }, "bcc": { "a": true, "h": "Bcc", "n": "bcc", "r": false, "sh": "The BCC recipients.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "bcc", "index$": 1 }, "cc": { "a": true, "h": "Cc", "n": "cc", "r": false, "sh": "The CC recipients.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "cc", "index$": 2 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "sh": "Timestamp when the email was received.", "t": "`$STRING`", "key$": "created_at", "index$": 3 }, "from": { "a": true, "h": "From", "n": "from", "r": false, "sh": "The sender email address.", "t": "`$STRING`", "key$": "from", "index$": 4 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": false, "sh": "The ID of the received email.", "t": "`$STRING`", "key$": "id", "index$": 5 }, "message_id": { "a": true, "h": "Message Id", "n": "message_id", "r": false, "sh": "The unique message ID from the email headers.", "t": "`$STRING`", "key$": "message_id", "index$": 6 }, "reply_to": { "a": true, "h": "Reply To", "n": "reply_to", "r": false, "sh": "The reply-to addresses.", "t": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]], "key$": "reply_to", "index$": 7 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": false, "sh": "The email subject.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "subject", "index$": 8 }, "to": { "a": true, "h": "To", "n": "to", "r": false, "sh": "The recipient email addresses.", "t": "`$ARRAY`", "key$": "to", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "list_received_email", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /emails/receiving", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/emails/receiving", "q": { "exist": ["after", "before", "limit"] }, "r": {}, "s": [{ "lit": "emails" }, { "lit": "receiving" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "list_received_email", "name__orig": "list_received_email", "Name": "ListReceivedEmail", "name_": "list_received_email", "name-": "list-received-email", "NAME": "LIST_RECEIVED_EMAIL", "index$": 26 }, { "active": true, "entity": "list_received_email", "key$": "BasicListReceivedEmailFlow", "kind": "basic", "name": "BasicListReceivedEmailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_received_email_ref01" } }], "index$": 0 }] }, 'ListReceivedEmail', { "GET /emails/receiving": { "protocol": "http", "parameters": [{ "name": "limit", "in": "query", "required": false, "schema": { "type": "integer" }, "description": "Maximum number of received emails to return.", "index$": 0 }, { "name": "after", "in": "query", "required": false, "schema": { "type": "string", "format": "uuid" }, "description": "Pagination cursor to fetch results after this email ID. Cannot be used with 'before'.", "index$": 1 }, { "name": "before", "in": "query", "required": false, "schema": { "type": "string", "format": "uuid" }, "description": "Pagination cursor to fetch results before this email ID. Cannot be used with 'after'.", "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_received_email_ref01_data = Object.values(setup.data.existing.list_received_email)[0];
        // LIST
        const list_received_email_ref01_ent = client.ListReceivedEmail();
        const list_received_email_ref01_match = {};
        const list_received_email_ref01_list = (await list_received_email_ref01_ent.list(list_received_email_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_received_email/ListReceivedEmailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_received_email01', 'list_received_email02', 'list_received_email03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_LIST_RECEIVED_EMAIL_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_LIST_RECEIVED_EMAIL_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_LIST_RECEIVED_EMAIL_ENTID'];
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
//# sourceMappingURL=ListReceivedEmailEntity.test.js.map