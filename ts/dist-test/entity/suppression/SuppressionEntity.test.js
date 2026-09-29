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
(0, node_test_1.describe)('SuppressionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.Suppression();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'suppression.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "Timestamp indicating when the suppression was created.", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "email": { "a": true, "h": "Email", "n": "email", "r": false, "sh": "Email address that is suppressed.", "t": "`$STRING`", "key$": "email", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the suppression.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "sh": "Type of the response object.", "t": "`$STRING`", "key$": "object", "index$": 3 }, "origin": { "a": true, "h": "Origin", "n": "origin", "r": false, "sh": "Origin of the suppression.", "t": "`$STRING`", "key$": "origin", "index$": 4 }, "source_id": { "a": true, "h": "Source Id", "n": "source_id", "r": false, "sh": "Identifier of the event that caused the suppression, such as the email that bounced or complained.", "t": "`$STRING`", "key$": "source_id", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "suppression", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /suppressions/{suppression}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "suppression", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/suppressions/{suppression}", "q": { "exist": ["id"] }, "r": { "param": { "suppression": "id" } }, "s": [{ "lit": "suppressions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "suppression", "name__orig": "suppression", "Name": "Suppression", "name_": "suppression", "name-": "suppression", "NAME": "SUPPRESSION", "index$": 46 }, { "active": true, "entity": "suppression", "key$": "BasicSuppressionFlow", "kind": "basic", "name": "BasicSuppressionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "suppression_ref01", "srcdatavar": "suppression_ref01_data", "suffix": "_dt0" }, "m": { "id": "suppression01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-suppression_ref01" } }], "index$": 0 }] }, 'Suppression', { "GET /suppressions/{suppression}": { "protocol": "http", "parameters": [{ "name": "suppression", "in": "path", "required": true, "schema": { "type": "string" }, "description": "The Suppression ID or email address.", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let suppression_ref01_data = Object.values(setup.data.existing.suppression)[0];
        // LOAD
        const suppression_ref01_ent = client.Suppression();
        const suppression_ref01_match_dt0 = {};
        suppression_ref01_match_dt0.id = suppression_ref01_data.id;
        const suppression_ref01_data_dt0 = (await suppression_ref01_ent.load(suppression_ref01_match_dt0)).data();
        (0, node_assert_1.default)(suppression_ref01_data_dt0.id === suppression_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/suppression/SuppressionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['suppression01', 'suppression02', 'suppression03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_SUPPRESSION_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_SUPPRESSION_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_SUPPRESSION_ENTID'];
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
//# sourceMappingURL=SuppressionEntity.test.js.map