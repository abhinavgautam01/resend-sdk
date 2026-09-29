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
(0, node_test_1.describe)('RemoveTemplateResponseSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.RemoveTemplateResponseSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'remove_template_response_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "alias": { "a": true, "h": "Alias", "n": "alias", "r": false, "sh": "The alias of the template.", "t": "`$STRING`", "key$": "alias", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "Timestamp indicating when the template was created.", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "from": { "a": true, "h": "From", "n": "from", "r": false, "sh": "Sender email address.", "t": "`$STRING`", "key$": "from", "index$": 2 }, "html": { "a": true, "h": "Html", "n": "html", "r": true, "sh": "The HTML version of the template.", "t": "`$STRING`", "key$": "html", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The ID of the template.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "list": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The name of the template.", "t": "`$STRING`", "key$": "name", "index$": 5 }, "published_at": { "a": true, "h": "Published At", "n": "published_at", "r": false, "sh": "Timestamp indicating when the template was published.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "published_at", "index$": 6 }, "reply_to": { "a": true, "h": "Reply To", "n": "reply_to", "r": false, "sh": "Reply-to email addresses.", "t": "`$ARRAY`", "key$": "reply_to", "index$": 7 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The publication status of the template.", "t": "`$STRING`", "key$": "status", "index$": 8 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": false, "sh": "Email subject.", "t": "`$STRING`", "key$": "subject", "index$": 9 }, "text": { "a": true, "h": "Text", "n": "text", "r": false, "sh": "The plain text version of the template.", "t": "`$STRING`", "key$": "text", "index$": 10 }, "updated_at": { "a": true, "h": "Updated At", "n": "updated_at", "r": false, "sh": "Timestamp indicating when the template was last updated.", "t": "`$STRING`", "key$": "updated_at", "index$": 11 }, "variables": { "a": true, "h": "Variables", "n": "variables", "r": false, "t": "`$ARRAY`", "union": { "branches": 5, "count": 1, "depth": 3 }, "key$": "variables", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "remove_template_response_success", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /templates", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/templates", "q": {}, "r": {}, "s": [{ "lit": "templates" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /templates", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/templates", "q": { "exist": ["after", "before", "limit"] }, "r": {}, "s": [{ "lit": "templates" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /templates/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/templates/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "templates" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "remove_template_response_success", "name__orig": "remove_template_response_success", "Name": "RemoveTemplateResponseSuccess", "name_": "remove_template_response_success", "name-": "remove-template-response-success", "NAME": "REMOVE_TEMPLATE_RESPONSE_SUCCESS", "index$": 40 }, { "active": true, "entity": "remove_template_response_success", "key$": "BasicRemoveTemplateResponseSuccessFlow", "kind": "basic", "name": "BasicRemoveTemplateResponseSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "remove_template_response_success_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "remove_template_response_success_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "remove_template_response_success_ref01", "suffix": "_rm0" }, "m": { "id": "remove_template_response_success01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "remove_template_response_success_ref01" } }], "index$": 3 }] }, 'RemoveTemplateResponseSuccess', { "POST /templates": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["name", "html"], "properties": { "name": { "type": "string", "description": "The name of the template.", "key$": "name" }, "alias": { "type": "string", "description": "The alias of the template.", "key$": "alias" }, "from": { "type": "string", "description": "Sender email address. To include a friendly name, use the format \"Your Name <sender@domain.com>\".", "key$": "from" }, "subject": { "type": "string", "description": "Email subject.", "key$": "subject" }, "reply_to": { "type": "array", "items": { "type": "string" }, "description": "Reply-to email addresses.", "key$": "reply_to" }, "html": { "type": "string", "description": "The HTML version of the template.", "key$": "html" }, "text": { "type": "string", "description": "The plain text version of the template.", "key$": "text" }, "variables": { "type": "array", "items": { "type": "object", "properties": { "key": { "type": "string", "description": "The key of the variable." }, "type": { "type": "string", "description": "The type of the variable.", "enum": [] }, "fallback_value": { "description": "The fallback value of the variable.", "oneOf": [] } }, "required": ["key", "type"], "x-ref": "#/components/schemas/TemplateVariableInput" }, "key$": "variables" } }, "x-ref": "#/components/schemas/CreateTemplateRequest", "index$": 1 } } } }, "parameters": [] }, "GET /templates": { "protocol": "http", "parameters": [{ "in": "query", "name": "limit", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "description": "Number of items to return.", "x-ref": "#/components/parameters/PaginationLimit", "index$": 0 }, { "in": "query", "name": "after", "required": false, "schema": { "type": "string" }, "description": "Return items after this cursor.", "x-ref": "#/components/parameters/PaginationAfter", "index$": 1 }, { "in": "query", "name": "before", "required": false, "schema": { "type": "string" }, "description": "Return items before this cursor.", "x-ref": "#/components/parameters/PaginationBefore", "index$": 2 }] }, "DELETE /templates/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "required": true, "schema": { "type": "string" }, "description": "The Template ID or alias.", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const remove_template_response_success_ref01_ent = client.RemoveTemplateResponseSuccess();
        let remove_template_response_success_ref01_data = setup.data.new.remove_template_response_success['remove_template_response_success_ref01'];
        remove_template_response_success_ref01_data = (await remove_template_response_success_ref01_ent.create(remove_template_response_success_ref01_data)).data();
        (0, node_assert_1.default)(null != remove_template_response_success_ref01_data.id);
        // LIST
        const remove_template_response_success_ref01_match = {};
        const remove_template_response_success_ref01_list = (await remove_template_response_success_ref01_ent.list(remove_template_response_success_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(remove_template_response_success_ref01_list, { id: remove_template_response_success_ref01_data.id })));
        // REMOVE
        const remove_template_response_success_ref01_match_rm0 = { id: remove_template_response_success_ref01_data.id };
        await remove_template_response_success_ref01_ent.remove(remove_template_response_success_ref01_match_rm0);
        // LIST
        const remove_template_response_success_ref01_match_rt0 = {};
        const remove_template_response_success_ref01_list_rt0 = (await remove_template_response_success_ref01_ent.list(remove_template_response_success_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(remove_template_response_success_ref01_list_rt0, { id: remove_template_response_success_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/remove_template_response_success/RemoveTemplateResponseSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['remove_template_response_success01', 'remove_template_response_success02', 'remove_template_response_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_REMOVE_TEMPLATE_RESPONSE_SUCCESS_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_REMOVE_TEMPLATE_RESPONSE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_REMOVE_TEMPLATE_RESPONSE_SUCCESS_ENTID'];
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
//# sourceMappingURL=RemoveTemplateResponseSuccessEntity.test.js.map