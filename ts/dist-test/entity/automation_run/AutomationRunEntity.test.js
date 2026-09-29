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
(0, node_test_1.describe)('AutomationRunEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.AutomationRun();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'automation_run.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "completed_at": { "a": true, "h": "Completed At", "n": "completed_at", "r": false, "sh": "The date and time the run completed.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "completed_at", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "The date and time the run was created.", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The ID of the automation run.", "t": "`$STRING`", "key$": "id", "index$": 2 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "sh": "Type of the response object.", "t": "`$STRING`", "key$": "object", "index$": 3 }, "started_at": { "a": true, "h": "Started At", "n": "started_at", "r": false, "sh": "The date and time the run started.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "started_at", "index$": 4 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The current status of the automation run.", "t": "`$STRING`", "key$": "status", "index$": 5 }, "steps": { "a": true, "h": "Steps", "n": "steps", "r": false, "sh": "The steps executed in this run, sorted in graph order.", "t": "`$ARRAY`", "key$": "steps", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "automation_run", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /automations/{automation_id}/runs/{run_id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "automation_id", "or": "automation_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "run_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/automations/{automation_id}/runs/{run_id}", "q": { "exist": ["automation_id", "id"] }, "r": { "param": { "run_id": "id" } }, "s": [{ "lit": "automations" }, { "var": "automation_id" }, { "lit": "runs" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.automation"]] }, "key$": "automation_run", "name__orig": "automation_run", "Name": "AutomationRun", "name_": "automation_run", "name-": "automation-run", "NAME": "AUTOMATION_RUN", "index$": 4 }, { "active": true, "entity": "automation_run", "key$": "BasicAutomationRunFlow", "kind": "basic", "name": "BasicAutomationRunFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "automation_run_ref01", "srcdatavar": "automation_run_ref01_data", "suffix": "_dt0" }, "m": { "automation_id": "automation01", "id": "automation_run01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-automation_run_ref01" } }], "index$": 0 }] }, 'AutomationRun', { "GET /automations/{automation_id}/runs/{run_id}": { "protocol": "http", "parameters": [{ "name": "automation_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The ID of the automation.", "index$": 0 }, { "name": "run_id", "in": "path", "required": true, "schema": { "type": "string", "format": "uuid" }, "description": "The ID of the automation run.", "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let automation_run_ref01_data = Object.values(setup.data.existing.automation_run)[0];
        // LOAD
        const automation_run_ref01_ent = client.AutomationRun();
        const automation_run_ref01_match_dt0 = {};
        automation_run_ref01_match_dt0.id = automation_run_ref01_data.id;
        const automation_run_ref01_data_dt0 = (await automation_run_ref01_ent.load(automation_run_ref01_match_dt0)).data();
        (0, node_assert_1.default)(automation_run_ref01_data_dt0.id === automation_run_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/automation_run/AutomationRunTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['automation_run01', 'automation_run02', 'automation_run03', 'automation01', 'automation02', 'automation03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_AUTOMATION_RUN_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_AUTOMATION_RUN_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_AUTOMATION_RUN_ENTID'];
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
//# sourceMappingURL=AutomationRunEntity.test.js.map