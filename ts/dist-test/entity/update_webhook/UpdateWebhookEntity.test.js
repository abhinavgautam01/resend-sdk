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
(0, node_test_1.describe)('UpdateWebhookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.UpdateWebhook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['create', 'list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'update_webhook.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "Timestamp indicating when the webhook was created.", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "endpoint": { "a": true, "h": "Endpoint", "n": "endpoint", "op": { "list": { "req": false, "type": "`$STRING`" }, "update": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The URL where webhook events will be sent.", "t": "`$STRING`", "key$": "endpoint", "index$": 1 }, "events": { "a": true, "h": "Events", "n": "events", "op": { "list": { "req": false, "type": ["`$ONE`", ["`$ARRAY`", "`$NULL`"]] }, "update": { "req": false, "type": "`$ARRAY`" } }, "r": true, "sh": "Array of event types to subscribe to.", "t": "`$ARRAY`", "key$": "events", "index$": 2 }, "id": { "a": true, "fo": "uuid", "h": "Id", "n": "id", "r": false, "sh": "The ID of the updated webhook.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "sh": "The type of object.", "t": "`$STRING`", "key$": "object", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The status of the webhook.", "t": "`$STRING`", "key$": "status", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "update_webhook", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /webhooks", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/webhooks", "q": {}, "r": {}, "s": [{ "lit": "webhooks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /webhooks", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/webhooks", "q": { "exist": ["after", "before", "limit"] }, "r": {}, "s": [{ "lit": "webhooks" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /webhooks/{webhook_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "webhook_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/webhooks/{webhook_id}", "q": { "exist": ["id"] }, "r": { "param": { "webhook_id": "id" } }, "s": [{ "lit": "webhooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "update_webhook", "name__orig": "update_webhook", "Name": "UpdateWebhook", "name_": "update_webhook", "name-": "update-webhook", "NAME": "UPDATE_WEBHOOK", "index$": 60 }, { "active": true, "entity": "update_webhook", "key$": "BasicUpdateWebhookFlow", "kind": "basic", "name": "BasicUpdateWebhookFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "update_webhook_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "update_webhook_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "update_webhook_ref01", "srcdatavar": "update_webhook_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-update_webhook_ref01" } }], "v": [], "index$": 2 }] }, 'UpdateWebhook', { "POST /webhooks": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["endpoint", "events"], "properties": { "endpoint": { "type": "string", "description": "The URL where webhook events will be sent.", "example": "https://webhook.example.com/handler", "key$": "endpoint" }, "events": { "type": "array", "items": { "type": "string" }, "minItems": 1, "description": "Array of event types to subscribe to.", "example": ["email.sent", "email.delivered", "email.bounced", "email.suppressed"], "key$": "events" } }, "x-ref": "#/components/schemas/CreateWebhookRequest", "index$": 1 } } } }, "parameters": [] }, "GET /webhooks": { "protocol": "http", "parameters": [{ "name": "limit", "in": "query", "required": false, "schema": { "type": "integer" }, "description": "Maximum number of webhooks to return.", "index$": 0 }, { "name": "after", "in": "query", "required": false, "schema": { "type": "string", "format": "uuid" }, "description": "Pagination cursor to fetch results after this webhook ID. Cannot be used with 'before'.", "index$": 1 }, { "name": "before", "in": "query", "required": false, "schema": { "type": "string", "format": "uuid" }, "description": "Pagination cursor to fetch results before this webhook ID. Cannot be used with 'after'.", "index$": 2 }] }, "PATCH /webhooks/{webhook_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "properties": { "endpoint": { "type": "string", "description": "The URL where webhook events will be sent.", "example": "https://webhook.example.com/new-handler", "key$": "endpoint" }, "events": { "type": "array", "items": { "type": "string" }, "minItems": 1, "description": "Array of event types to subscribe to.", "example": ["email.sent", "email.delivered"], "key$": "events" }, "status": { "type": "string", "enum": ["enabled", "disabled"], "description": "The status of the webhook.", "example": "enabled", "key$": "status" } }, "x-ref": "#/components/schemas/UpdateWebhookRequest", "index$": 1 } } } }, "parameters": [{ "name": "webhook_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The Webhook ID.", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const update_webhook_ref01_ent = client.UpdateWebhook();
        let update_webhook_ref01_data = setup.data.new.update_webhook['update_webhook_ref01'];
        update_webhook_ref01_data = (await update_webhook_ref01_ent.create(update_webhook_ref01_data)).data();
        (0, node_assert_1.default)(null != update_webhook_ref01_data.id);
        // LIST
        const update_webhook_ref01_match = {};
        const update_webhook_ref01_list = (await update_webhook_ref01_ent.list(update_webhook_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(update_webhook_ref01_list, { id: update_webhook_ref01_data.id })));
        // UPDATE
        const update_webhook_ref01_data_up0 = {};
        update_webhook_ref01_data_up0.id = update_webhook_ref01_data.id;
        const update_webhook_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-update_webhook_ref01_' + setup.now };
        update_webhook_ref01_data_up0[update_webhook_ref01_markdef_up0.name] = update_webhook_ref01_markdef_up0.value;
        const update_webhook_ref01_resdata_up0 = (await update_webhook_ref01_ent.update(update_webhook_ref01_data_up0)).data();
        (0, node_assert_1.default)(update_webhook_ref01_resdata_up0.id === update_webhook_ref01_data_up0.id);
        (0, node_assert_1.default)(update_webhook_ref01_resdata_up0[update_webhook_ref01_markdef_up0.name] === update_webhook_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/update_webhook/UpdateWebhookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['update_webhook01', 'update_webhook02', 'update_webhook03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_UPDATE_WEBHOOK_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_UPDATE_WEBHOOK_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_UPDATE_WEBHOOK_ENTID'];
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
//# sourceMappingURL=UpdateWebhookEntity.test.js.map