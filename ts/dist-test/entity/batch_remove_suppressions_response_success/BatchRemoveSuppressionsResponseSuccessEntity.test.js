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
(0, node_test_1.describe)('BatchRemoveSuppressionsResponseSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.BatchRemoveSuppressionsResponseSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'batch_remove_suppressions_response_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": false, "sh": "Array containing the removed suppressions.", "t": "`$ARRAY`", "key$": "data", "index$": 0 }, "emails": { "a": true, "h": "Emails", "n": "emails", "r": false, "sh": "Email addresses to remove from the suppression list.", "t": "`$ARRAY`", "key$": "emails", "index$": 1 }, "ids": { "a": true, "h": "Ids", "n": "ids", "r": false, "sh": "Suppression IDs to remove from the suppression list.", "t": "`$ARRAY`", "key$": "ids", "index$": 2 } }, "name": "batch_remove_suppressions_response_success", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /suppressions/batch/remove", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/suppressions/batch/remove", "q": {}, "r": {}, "s": [{ "lit": "suppressions" }, { "lit": "batch" }, { "lit": "remove" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "batch_remove_suppressions_response_success", "name__orig": "batch_remove_suppressions_response_success", "Name": "BatchRemoveSuppressionsResponseSuccess", "name_": "batch_remove_suppressions_response_success", "name-": "batch-remove-suppressions-response-success", "NAME": "BATCH_REMOVE_SUPPRESSIONS_RESPONSE_SUCCESS", "index$": 7 }, { "active": true, "entity": "batch_remove_suppressions_response_success", "key$": "BasicBatchRemoveSuppressionsResponseSuccessFlow", "kind": "basic", "name": "BasicBatchRemoveSuppressionsResponseSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "batch_remove_suppressions_response_success_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'BatchRemoveSuppressionsResponseSuccess', { "POST /suppressions/batch/remove": { "protocol": "http", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "description": "Provide either `emails` or `ids`, but not both.", "properties": { "emails": { "type": "array", "minItems": 1, "maxItems": 100, "items": { "type": "string" }, "description": "Email addresses to remove from the suppression list.", "example": ["steve.wozniak@gmail.com"], "key$": "emails" }, "ids": { "type": "array", "minItems": 1, "maxItems": 100, "items": { "type": "string" }, "description": "Suppression IDs to remove from the suppression list.", "example": ["e169aa45-1ecf-4183-9955-b1499d5701d3"], "key$": "ids" } }, "x-ref": "#/components/schemas/BatchRemoveSuppressionsOptions", "index$": 1 } } } }, "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const batch_remove_suppressions_response_success_ref01_ent = client.BatchRemoveSuppressionsResponseSuccess();
        let batch_remove_suppressions_response_success_ref01_data = setup.data.new.batch_remove_suppressions_response_success['batch_remove_suppressions_response_success_ref01'];
        batch_remove_suppressions_response_success_ref01_data = (await batch_remove_suppressions_response_success_ref01_ent.create(batch_remove_suppressions_response_success_ref01_data)).data();
        (0, node_assert_1.default)(null != batch_remove_suppressions_response_success_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/batch_remove_suppressions_response_success/BatchRemoveSuppressionsResponseSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['batch_remove_suppressions_response_success01', 'batch_remove_suppressions_response_success02', 'batch_remove_suppressions_response_success03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_BATCH_REMOVE_SUPPRESSIONS_RESPONSE_SUCCESS_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_BATCH_REMOVE_SUPPRESSIONS_RESPONSE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_BATCH_REMOVE_SUPPRESSIONS_RESPONSE_SUCCESS_ENTID'];
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
//# sourceMappingURL=BatchRemoveSuppressionsResponseSuccessEntity.test.js.map