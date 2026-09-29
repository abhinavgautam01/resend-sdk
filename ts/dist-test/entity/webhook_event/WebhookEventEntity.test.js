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
(0, node_test_1.describe)('WebhookEventEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.WebhookEvent();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webhook_event.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "sh": "Timestamp indicating when the event was created.", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The ID of the webhook event.", "t": "`$STRING`", "key$": "id", "index$": 1 }, "next_attempt_at": { "a": true, "fo": "date-time", "h": "Next Attempt At", "n": "next_attempt_at", "r": false, "sh": "Timestamp of the next scheduled delivery attempt, or null when none is scheduled.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "next_attempt_at", "index$": 2 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "sh": "The type of object.", "t": "`$STRING`", "key$": "object", "index$": 3 }, "payload": { "a": true, "h": "Payload", "n": "payload", "r": false, "sh": "The event payload sent to the webhook endpoint.", "t": "`$OBJECT`", "key$": "payload", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The delivery status of the event for this webhook.", "t": "`$STRING`", "key$": "status", "index$": 5 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "The type of the event.", "t": "`$STRING`", "key$": "type", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "webhook_event", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /webhooks/{webhook_id}/events/{event_id}/replay", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "event_id", "or": "event_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "webhook_id", "or": "webhook_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/webhooks/{webhook_id}/events/{event_id}/replay", "q": { "$action": "replay", "exist": ["event_id", "webhook_id"] }, "r": {}, "s": [{ "lit": "webhooks" }, { "var": "webhook_id" }, { "lit": "events" }, { "var": "event_id" }, { "lit": "replay" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /webhooks/{webhook_id}/events/{event_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "event_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "webhook_id", "or": "webhook_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/webhooks/{webhook_id}/events/{event_id}", "q": { "exist": ["id", "webhook_id"] }, "r": { "param": { "event_id": "id" } }, "s": [{ "lit": "webhooks" }, { "var": "webhook_id" }, { "lit": "events" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.webhook"], ["$.main.kit.entity.webhook", "$.main.kit.entity.event"]] }, "key$": "webhook_event", "name__orig": "webhook_event", "Name": "WebhookEvent", "name_": "webhook_event", "name-": "webhook-event", "NAME": "WEBHOOK_EVENT", "index$": 63 }, { "active": true, "entity": "webhook_event", "key$": "BasicWebhookEventFlow", "kind": "basic", "name": "BasicWebhookEventFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "webhook_event_ref01" }, "m": { "event_id": "event01", "webhook_id": "webhook01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "webhook_event_ref01", "srcdatavar": "webhook_event_ref01_data", "suffix": "_dt0" }, "m": { "id": "webhook_event01", "webhook_id": "webhook01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webhook_event_ref01" } }], "index$": 1 }] }, 'WebhookEvent', { "POST /webhooks/{webhook_id}/events/{event_id}/replay": { "protocol": "http", "parameters": [{ "name": "webhook_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Webhook ID.", "index$": 0 }, { "name": "event_id", "in": "path", "required": true, "schema": { "type": "string" }, "description": "The Webhook Event ID.", "index$": 1 }] }, "GET /webhooks/{webhook_id}/events/{event_id}": { "protocol": "http", "parameters": [{ "name": "webhook_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Webhook ID.", "index$": 0 }, { "name": "event_id", "in": "path", "required": true, "schema": { "type": "string" }, "description": "The Webhook Event ID.", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const webhook_event_ref01_ent = client.WebhookEvent();
        let webhook_event_ref01_data = setup.data.new.webhook_event['webhook_event_ref01'];
        webhook_event_ref01_data['event_id'] = setup.idmap['event01'];
        webhook_event_ref01_data['webhook_id'] = setup.idmap['webhook01'];
        webhook_event_ref01_data = (await webhook_event_ref01_ent.create(webhook_event_ref01_data)).data();
        (0, node_assert_1.default)(null != webhook_event_ref01_data.id);
        // LOAD
        const webhook_event_ref01_match_dt0 = {};
        webhook_event_ref01_match_dt0.id = webhook_event_ref01_data.id;
        const webhook_event_ref01_data_dt0 = (await webhook_event_ref01_ent.load(webhook_event_ref01_match_dt0)).data();
        (0, node_assert_1.default)(webhook_event_ref01_data_dt0.id === webhook_event_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webhook_event/WebhookEventTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webhook_event01', 'webhook_event02', 'webhook_event03', 'webhook01', 'webhook02', 'webhook03', 'event01', 'event02', 'event03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_WEBHOOK_EVENT_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_WEBHOOK_EVENT_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_WEBHOOK_EVENT_ENTID'];
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
//# sourceMappingURL=WebhookEventEntity.test.js.map