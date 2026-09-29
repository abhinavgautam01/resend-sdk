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
(0, node_test_1.describe)('AutomationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.Automation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'automation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "connections": { "a": true, "h": "Connections", "n": "connections", "op": { "create": { "req": true, "type": "`$ARRAY`" } }, "r": false, "sh": "The connections between steps in the active version of the automation.", "t": "`$ARRAY`", "key$": "connections", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "The date and time the automation was created.", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The ID of the automation.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The name of the automation.", "t": "`$STRING`", "key$": "name", "index$": 3 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "sh": "Type of the response object.", "t": "`$STRING`", "key$": "object", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The current status of the automation.", "t": "`$STRING`", "key$": "status", "index$": 5 }, "steps": { "a": true, "h": "Steps", "n": "steps", "op": { "create": { "req": true, "type": "`$ARRAY`" } }, "r": false, "sh": "The steps in the active version of the automation.", "t": "`$ARRAY`", "key$": "steps", "index$": 6 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": false, "sh": "The date and time the automation was last updated.", "t": "`$STRING`", "key$": "updated_at", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "automation", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /automations/{automation_id}/duplicate", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "automation_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/automations/{automation_id}/duplicate", "q": { "$action": "duplicate", "exist": ["id"] }, "r": { "param": { "automation_id": "id" } }, "s": [{ "lit": "automations" }, { "var": "id" }, { "lit": "duplicate" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /automations/{automation_id}/stop", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "automation_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/automations/{automation_id}/stop", "q": { "$action": "stop", "exist": ["id"] }, "r": { "param": { "automation_id": "id" } }, "s": [{ "lit": "automations" }, { "var": "id" }, { "lit": "stop" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /automations", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/automations", "q": {}, "r": {}, "s": [{ "lit": "automations" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /automations", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/automations", "q": { "exist": ["after", "before", "limit", "status"] }, "r": {}, "s": [{ "lit": "automations" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /automations/{automation_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "automation_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/automations/{automation_id}", "q": { "exist": ["id"] }, "r": { "param": { "automation_id": "id" } }, "s": [{ "lit": "automations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /automations/{automation_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "automation_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/automations/{automation_id}", "q": { "exist": ["id"] }, "r": { "param": { "automation_id": "id" } }, "s": [{ "lit": "automations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /automations/{automation_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "automation_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/automations/{automation_id}", "q": { "exist": ["id"] }, "r": { "param": { "automation_id": "id" } }, "s": [{ "lit": "automations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "automation", "name__orig": "automation", "Name": "Automation", "name_": "automation", "name-": "automation", "NAME": "AUTOMATION", "index$": 3 }, { "active": true, "entity": "automation", "key$": "BasicAutomationFlow", "kind": "basic", "name": "BasicAutomationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "automation_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "automation_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "automation_ref01", "srcdatavar": "automation_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-automation_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "automation_ref01", "srcdatavar": "automation_ref01_data", "suffix": "_dt0" }, "m": { "id": "automation01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-automation_ref01" } }], "index$": 3 }, { "a": true, "d": {}, "i": { "ref": "automation_ref01", "suffix": "_rm0" }, "m": { "id": "automation01" }, "o": "remove", "s": [], "v": [], "index$": 4 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "automation_ref01" } }], "index$": 5 }] }, 'Automation', { "POST /automations/{automation_id}/duplicate": { "protocol": "http", "parameters": [{ "name": "automation_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The ID of the automation.", "index$": 0 }] }, "POST /automations/{automation_id}/stop": { "protocol": "http", "parameters": [{ "name": "automation_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The ID of the automation.", "index$": 0 }] }, "POST /automations": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["name", "steps", "connections"], "properties": { "name": { "type": "string", "minLength": 1, "description": "The name of the automation.", "key$": "name" }, "status": { "type": "string", "enum": ["enabled", "disabled"], "default": "disabled", "description": "The initial status of the automation. Defaults to `disabled`.", "key$": "status" }, "steps": { "type": "array", "minItems": 1, "maxItems": 150, "description": "The steps that compose the automation workflow. Must include at least one `trigger` step.", "items": { "type": "object", "description": "A step in an automation workflow. The `config` object varies based on the step `type`.", "required": ["key", "type", "config"], "properties": { "key": { "type": "string", "description": "A unique key for this step within the automation graph." }, "type": { "type": "string", "enum": [], "description": "The type of automation step." }, "config": { "type": "object", "description": "Configuration for the step. Shape depends on `type`: - **trigger**: `{ event_name: string }` - **send_email**: `{ template: { id: string, variables?: object }, subject?: string, from?: string, reply_to?: string }` - **delay**: `{ duration: string }` — a human-readable duration (e.g. `\"30 minutes\"`) - **wait_for_event**: `{ event_name: string, timeout?: string, filter_rule?: object }` — `timeout` is a human-readable duration (e.g. `\"1 hour\"`) - **condition**: A rule tree with `type` (`rule`, `and`, `or`), `field`, `operator`, and `value` - **contact_update**: `{ first_name?: string|object, last_name?: string|object, unsubscribed?: boolean|object, properties?: object }` - **contact_delete**: `{}` - **add_to_segment**: `{ segment_id: string }`\n" } }, "x-ref": "#/components/schemas/AutomationStep" }, "key$": "steps" }, "connections": { "type": "array", "description": "The connections between steps in the automation graph.", "items": { "type": "object", "description": "A connection between two steps in the automation graph.", "required": ["from", "to"], "properties": { "from": { "type": "string", "description": "The `key` of the source step." }, "to": { "type": "string", "description": "The `key` of the target step." }, "type": { "type": "string", "enum": [], "default": "default", "description": "The type of connection. Defaults to `default`." } }, "x-ref": "#/components/schemas/AutomationConnection" }, "key$": "connections" } }, "x-ref": "#/components/schemas/CreateAutomationRequest", "index$": 1 } } } }, "parameters": [] }, "GET /automations": { "protocol": "http", "parameters": [{ "name": "status", "in": "query", "required": false, "schema": { "type": "string", "enum": ["enabled", "disabled"] }, "description": "Filter automations by status.", "index$": 0 }, { "in": "query", "name": "limit", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "description": "Number of items to return.", "x-ref": "#/components/parameters/PaginationLimit", "index$": 1 }, { "in": "query", "name": "after", "required": false, "schema": { "type": "string" }, "description": "Return items after this cursor.", "x-ref": "#/components/parameters/PaginationAfter", "index$": 2 }, { "in": "query", "name": "before", "required": false, "schema": { "type": "string" }, "description": "Return items before this cursor.", "x-ref": "#/components/parameters/PaginationBefore", "index$": 3 }] }, "GET /automations/{automation_id}": { "protocol": "http", "parameters": [{ "name": "automation_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The ID of the automation.", "index$": 0 }] }, "DELETE /automations/{automation_id}": { "protocol": "http", "parameters": [{ "name": "automation_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The ID of the automation.", "index$": 0 }] }, "PATCH /automations/{automation_id}": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "description": "At least one of `name`, `status`, or `steps` and `connections` must be provided. When updating the workflow graph, both `steps` and `connections` must be provided together.\n", "properties": { "name": { "type": "string", "minLength": 1, "description": "The name of the automation.", "key$": "name" }, "status": { "type": "string", "enum": ["enabled", "disabled"], "description": "The status of the automation.", "key$": "status" }, "steps": { "type": "array", "minItems": 1, "maxItems": 150, "description": "The steps that compose the automation workflow. Must be provided together with `connections`.", "items": { "type": "object", "description": "A step in an automation workflow. The `config` object varies based on the step `type`.", "required": ["key", "type", "config"], "properties": { "key": { "type": "string", "description": "A unique key for this step within the automation graph." }, "type": { "type": "string", "enum": [], "description": "The type of automation step." }, "config": { "type": "object", "description": "Configuration for the step. Shape depends on `type`: - **trigger**: `{ event_name: string }` - **send_email**: `{ template: { id: string, variables?: object }, subject?: string, from?: string, reply_to?: string }` - **delay**: `{ duration: string }` — a human-readable duration (e.g. `\"30 minutes\"`) - **wait_for_event**: `{ event_name: string, timeout?: string, filter_rule?: object }` — `timeout` is a human-readable duration (e.g. `\"1 hour\"`) - **condition**: A rule tree with `type` (`rule`, `and`, `or`), `field`, `operator`, and `value` - **contact_update**: `{ first_name?: string|object, last_name?: string|object, unsubscribed?: boolean|object, properties?: object }` - **contact_delete**: `{}` - **add_to_segment**: `{ segment_id: string }`\n" } }, "x-ref": "#/components/schemas/AutomationStep" }, "key$": "steps" }, "connections": { "type": "array", "description": "The connections between steps in the automation graph. Must be provided together with `steps`.", "items": { "type": "object", "description": "A connection between two steps in the automation graph.", "required": ["from", "to"], "properties": { "from": { "type": "string", "description": "The `key` of the source step." }, "to": { "type": "string", "description": "The `key` of the target step." }, "type": { "type": "string", "enum": [], "default": "default", "description": "The type of connection. Defaults to `default`." } }, "x-ref": "#/components/schemas/AutomationConnection" }, "key$": "connections" } }, "x-ref": "#/components/schemas/PatchAutomationRequest", "index$": 1 } } } }, "parameters": [{ "name": "automation_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The ID of the automation.", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const automation_ref01_ent = client.Automation();
        let automation_ref01_data = setup.data.new.automation['automation_ref01'];
        automation_ref01_data = (await automation_ref01_ent.create(automation_ref01_data)).data();
        (0, node_assert_1.default)(null != automation_ref01_data.id);
        // LIST
        const automation_ref01_match = {};
        const automation_ref01_list = (await automation_ref01_ent.list(automation_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(automation_ref01_list, { id: automation_ref01_data.id })));
        // UPDATE
        const automation_ref01_data_up0 = {};
        automation_ref01_data_up0.id = automation_ref01_data.id;
        const automation_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-automation_ref01_' + setup.now };
        automation_ref01_data_up0[automation_ref01_markdef_up0.name] = automation_ref01_markdef_up0.value;
        const automation_ref01_resdata_up0 = (await automation_ref01_ent.update(automation_ref01_data_up0)).data();
        (0, node_assert_1.default)(automation_ref01_resdata_up0.id === automation_ref01_data_up0.id);
        (0, node_assert_1.default)(automation_ref01_resdata_up0[automation_ref01_markdef_up0.name] === automation_ref01_markdef_up0.value);
        // LOAD
        const automation_ref01_match_dt0 = {};
        automation_ref01_match_dt0.id = automation_ref01_data.id;
        const automation_ref01_data_dt0 = (await automation_ref01_ent.load(automation_ref01_match_dt0)).data();
        (0, node_assert_1.default)(automation_ref01_data_dt0.id === automation_ref01_data.id);
        // REMOVE
        const automation_ref01_match_rm0 = { id: automation_ref01_data.id };
        await automation_ref01_ent.remove(automation_ref01_match_rm0);
        // LIST
        const automation_ref01_match_rt0 = {};
        const automation_ref01_list_rt0 = (await automation_ref01_ent.list(automation_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(automation_ref01_list_rt0, { id: automation_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/automation/AutomationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['automation01', 'automation02', 'automation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_AUTOMATION_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_AUTOMATION_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_AUTOMATION_ENTID'];
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
//# sourceMappingURL=AutomationEntity.test.js.map