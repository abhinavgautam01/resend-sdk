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
(0, node_test_1.describe)('RemoveSegmentResponseSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.RemoveSegmentResponseSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['create', 'list', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'remove_segment_response_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "audience_id": { "a": true, "de": true, "h": "Audience Id", "n": "audience_id", "r": false, "sh": "The ID of the audience this segment belongs to.", "t": "`$STRING`", "key$": "audience_id", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "Timestamp indicating when the segment was created.", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "filter": { "a": true, "h": "Filter", "n": "filter", "r": false, "sh": "Filter conditions for the segment.", "t": "`$OBJECT`", "key$": "filter", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the segment.", "t": "`$STRING`", "key$": "id", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "list": { "req": false, "type": "`$STRING`" } }, "r": true, "sh": "The name of the segment.", "t": "`$STRING`", "key$": "name", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "remove_segment_response_success", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /segments", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/segments", "q": {}, "r": {}, "s": [{ "lit": "segments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /segments", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/segments", "q": { "exist": ["after", "before", "limit"] }, "r": {}, "s": [{ "lit": "segments" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /segments/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "DELETE", "o": "/segments/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "segments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [] }, "key$": "remove_segment_response_success", "name__orig": "remove_segment_response_success", "Name": "RemoveSegmentResponseSuccess", "name_": "remove_segment_response_success", "name-": "remove-segment-response-success", "NAME": "REMOVE_SEGMENT_RESPONSE_SUCCESS", "index$": 38 }, { "active": true, "entity": "remove_segment_response_success", "key$": "BasicRemoveSegmentResponseSuccessFlow", "kind": "basic", "name": "BasicRemoveSegmentResponseSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "remove_segment_response_success_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "remove_segment_response_success_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "remove_segment_response_success_ref01", "suffix": "_rm0" }, "m": { "id": "remove_segment_response_success01" }, "o": "remove", "s": [], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "suffix": "_rt0" }, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemNotExists", "def": { "ref": "remove_segment_response_success_ref01" } }], "index$": 3 }] }, 'RemoveSegmentResponseSuccess', { "POST /segments": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["name"], "properties": { "name": { "type": "string", "description": "The name of the segment.", "key$": "name" }, "audience_id": { "type": "string", "description": "The ID of the audience this segment belongs to.", "deprecated": true, "key$": "audience_id" }, "filter": { "type": "object", "description": "Filter conditions for the segment.", "key$": "filter" } }, "x-ref": "#/components/schemas/CreateSegmentOptions", "index$": 1 } } } }, "parameters": [] }, "GET /segments": { "protocol": "http", "parameters": [{ "in": "query", "name": "limit", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "description": "Number of items to return.", "x-ref": "#/components/parameters/PaginationLimit", "index$": 0 }, { "in": "query", "name": "after", "required": false, "schema": { "type": "string" }, "description": "Return items after this cursor.", "x-ref": "#/components/parameters/PaginationAfter", "index$": 1 }, { "in": "query", "name": "before", "required": false, "schema": { "type": "string" }, "description": "Return items before this cursor.", "x-ref": "#/components/parameters/PaginationBefore", "index$": 2 }] }, "DELETE /segments/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "required": true, "schema": { "type": "string" }, "description": "The Segment ID.", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const remove_segment_response_success_ref01_ent = client.RemoveSegmentResponseSuccess();
        let remove_segment_response_success_ref01_data = setup.data.new.remove_segment_response_success['remove_segment_response_success_ref01'];
        remove_segment_response_success_ref01_data = (await remove_segment_response_success_ref01_ent.create(remove_segment_response_success_ref01_data)).data();
        (0, node_assert_1.default)(null != remove_segment_response_success_ref01_data.id);
        // LIST
        const remove_segment_response_success_ref01_match = {};
        const remove_segment_response_success_ref01_list = (await remove_segment_response_success_ref01_ent.list(remove_segment_response_success_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(remove_segment_response_success_ref01_list, { id: remove_segment_response_success_ref01_data.id })));
        // REMOVE
        const remove_segment_response_success_ref01_match_rm0 = { id: remove_segment_response_success_ref01_data.id };
        await remove_segment_response_success_ref01_ent.remove(remove_segment_response_success_ref01_match_rm0);
        // LIST
        const remove_segment_response_success_ref01_match_rt0 = {};
        const remove_segment_response_success_ref01_list_rt0 = (await remove_segment_response_success_ref01_ent.list(remove_segment_response_success_ref01_match_rt0)).map((e) => e.data());
        (0, node_assert_1.default)(isempty(select(remove_segment_response_success_ref01_list_rt0, { id: remove_segment_response_success_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/remove_segment_response_success/RemoveSegmentResponseSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['remove_segment_response_success01', 'remove_segment_response_success02', 'remove_segment_response_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_REMOVE_SEGMENT_RESPONSE_SUCCESS_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_REMOVE_SEGMENT_RESPONSE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_REMOVE_SEGMENT_RESPONSE_SUCCESS_ENTID'];
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
//# sourceMappingURL=RemoveSegmentResponseSuccessEntity.test.js.map