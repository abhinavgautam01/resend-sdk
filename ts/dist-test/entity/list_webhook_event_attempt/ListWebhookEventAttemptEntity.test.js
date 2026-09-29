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
(0, node_test_1.describe)('ListWebhookEventAttemptEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.ListWebhookEventAttempt();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list_webhook_event_attempt.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "http_status_code": { "a": true, "h": "Http Status Code", "n": "http_status_code", "r": false, "sh": "The HTTP status code returned by the webhook endpoint.", "t": "`$INTEGER`", "key$": "http_status_code", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The ID of the webhook event attempt.", "t": "`$STRING`", "key$": "id", "index$": 1 }, "response": { "a": true, "h": "Response", "n": "response", "r": false, "sh": "The response body returned by the webhook endpoint.", "t": "`$STRING`", "key$": "response", "index$": 2 }, "sent_at": { "a": true, "fo": "date-time", "h": "Sent At", "n": "sent_at", "r": false, "sh": "Timestamp indicating when the attempt was sent.", "t": "`$STRING`", "key$": "sent_at", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "list_webhook_event_attempt", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /webhooks/{webhook_id}/events/{event_id}/attempts", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "event_id", "or": "event_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "webhook_id", "or": "webhook_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/webhooks/{webhook_id}/events/{event_id}/attempts", "q": { "exist": ["after", "event_id", "limit", "webhook_id"] }, "r": {}, "s": [{ "lit": "webhooks" }, { "var": "webhook_id" }, { "lit": "events" }, { "var": "event_id" }, { "lit": "attempts" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.webhook", "$.main.kit.entity.event"]] }, "key$": "list_webhook_event_attempt", "name__orig": "list_webhook_event_attempt", "Name": "ListWebhookEventAttempt", "name_": "list_webhook_event_attempt", "name-": "list-webhook-event-attempt", "NAME": "LIST_WEBHOOK_EVENT_ATTEMPT", "index$": 28 }, { "active": true, "entity": "list_webhook_event_attempt", "key$": "BasicListWebhookEventAttemptFlow", "kind": "basic", "name": "BasicListWebhookEventAttemptFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "event_id": "event01", "webhook_id": "webhook01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_webhook_event_attempt_ref01" } }], "index$": 0 }] }, 'ListWebhookEventAttempt', { "GET /webhooks/{webhook_id}/events/{event_id}/attempts": { "protocol": "http", "parameters": [{ "name": "webhook_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Webhook ID.", "index$": 0 }, { "name": "event_id", "in": "path", "required": true, "schema": { "type": "string" }, "description": "The Webhook Event ID.", "index$": 1 }, { "in": "query", "name": "limit", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "description": "Number of items to return.", "x-ref": "#/components/parameters/PaginationLimit", "index$": 2 }, { "in": "query", "name": "after", "required": false, "schema": { "type": "string" }, "description": "Return items after this cursor.", "x-ref": "#/components/parameters/PaginationAfter", "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_webhook_event_attempt_ref01_data = Object.values(setup.data.existing.list_webhook_event_attempt)[0];
        // LIST
        const list_webhook_event_attempt_ref01_ent = client.ListWebhookEventAttempt();
        const list_webhook_event_attempt_ref01_match = {};
        list_webhook_event_attempt_ref01_match['event_id'] = setup.idmap['event01'];
        list_webhook_event_attempt_ref01_match['webhook_id'] = setup.idmap['webhook01'];
        const list_webhook_event_attempt_ref01_list = (await list_webhook_event_attempt_ref01_ent.list(list_webhook_event_attempt_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list_webhook_event_attempt/ListWebhookEventAttemptTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list_webhook_event_attempt01', 'list_webhook_event_attempt02', 'list_webhook_event_attempt03', 'webhook01', 'webhook02', 'webhook03', 'event01', 'event02', 'event03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_LIST_WEBHOOK_EVENT_ATTEMPT_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_LIST_WEBHOOK_EVENT_ATTEMPT_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_LIST_WEBHOOK_EVENT_ATTEMPT_ENTID'];
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
//# sourceMappingURL=ListWebhookEventAttemptEntity.test.js.map