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
(0, node_test_1.describe)('DomainClaimEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.DomainClaim();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'domain_claim.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "blocked_reason": { "a": true, "h": "Blocked Reason", "n": "blocked_reason", "r": false, "sh": "Why the claim is currently blocked, if applicable.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "blocked_reason", "index$": 0 }, "click_tracking": { "a": true, "h": "Click Tracking", "n": "click_tracking", "r": false, "sh": "Track clicks within the body of each HTML email.", "t": "`$BOOLEAN`", "key$": "click_tracking", "index$": 1 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "The date and time the claim was created.", "t": "`$STRING`", "key$": "created_at", "index$": 2 }, "custom_return_path": { "a": true, "h": "Custom Return Path", "n": "custom_return_path", "r": false, "sh": "For advanced use cases, choose a subdomain for the Return-Path address.", "t": "`$STRING`", "key$": "custom_return_path", "index$": 3 }, "domain_id": { "a": true, "h": "Domain Id", "n": "domain_id", "r": false, "sh": "The ID of the placeholder domain created for the claim.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "domain_id", "index$": 4 }, "expires_at": { "a": true, "h": "Expires At", "n": "expires_at", "r": false, "sh": "The date and time the claim expires if not verified.", "t": "`$STRING`", "key$": "expires_at", "index$": 5 }, "failure_reason": { "a": true, "h": "Failure Reason", "n": "failure_reason", "r": false, "sh": "Why the claim failed, if applicable.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "failure_reason", "index$": 6 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "The ID of the claim.", "t": "`$STRING`", "key$": "id", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "The name of the domain being claimed.", "t": "`$STRING`", "key$": "name", "index$": 8 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "sh": "The type of object.", "t": "`$STRING`", "key$": "object", "index$": 9 }, "open_tracking": { "a": true, "h": "Open Tracking", "n": "open_tracking", "r": false, "sh": "Track the open rate of each email.", "t": "`$BOOLEAN`", "key$": "open_tracking", "index$": 10 }, "record": { "a": true, "h": "Record", "n": "record", "r": false, "sh": "The TXT record to add to your DNS to prove ownership of the claimed domain.", "t": "`$OBJECT`", "key$": "record", "index$": 11 }, "region": { "a": true, "h": "Region", "n": "region", "r": false, "sh": "The region where the claimed domain will send from.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "region", "index$": 12 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "sh": "The status of the claim.", "t": "`$STRING`", "key$": "status", "index$": 13 }, "tracking_subdomain": { "a": true, "h": "Tracking Subdomain", "n": "tracking_subdomain", "r": false, "sh": "The subdomain to use for click and open tracking.", "t": "`$STRING`", "key$": "tracking_subdomain", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "domain_claim", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /domains/{domain_id}/claim/verify", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "domain_id", "or": "domain_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/domains/{domain_id}/claim/verify", "q": { "exist": ["domain_id"] }, "r": {}, "s": [{ "lit": "domains" }, { "var": "domain_id" }, { "lit": "claim" }, { "lit": "verify" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /domains/claim", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/domains/claim", "q": {}, "r": {}, "s": [{ "lit": "domains" }, { "lit": "claim" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /domains/{domain_id}/claim", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "domain_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/domains/{domain_id}/claim", "q": { "exist": ["id"] }, "r": { "param": { "domain_id": "id" } }, "s": [{ "lit": "domains" }, { "var": "id" }, { "lit": "claim" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.domain"]] }, "key$": "domain_claim", "name__orig": "domain_claim", "Name": "DomainClaim", "name_": "domain_claim", "name-": "domain-claim", "NAME": "DOMAIN_CLAIM", "index$": 17 }, { "active": true, "entity": "domain_claim", "key$": "BasicDomainClaimFlow", "kind": "basic", "name": "BasicDomainClaimFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "domain_claim_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "domain_claim_ref01", "srcdatavar": "domain_claim_ref01_data", "suffix": "_dt0" }, "m": { "id": "domain_claim01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-domain_claim_ref01" } }], "index$": 1 }] }, 'DomainClaim', { "POST /domains/{domain_id}/claim/verify": { "protocol": "http", "parameters": [{ "name": "domain_id", "in": "path", "required": true, "schema": { "type": "string" }, "description": "The ID of the placeholder domain created by the claim.", "index$": 0 }] }, "POST /domains/claim": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["name"], "properties": { "name": { "type": "string", "description": "The name of the domain you want to claim.", "key$": "name" }, "region": { "type": "string", "enum": ["us-east-1", "eu-west-1", "sa-east-1", "ap-northeast-1"], "default": "us-east-1", "description": "The region where emails will be sent from. Possible values are us-east-1 | eu-west-1 | sa-east-1 | ap-northeast-1", "key$": "region" }, "custom_return_path": { "type": "string", "default": "send", "description": "For advanced use cases, choose a subdomain for the Return-Path address. Defaults to 'send' (i.e., send.yourdomain.tld).", "key$": "custom_return_path" }, "open_tracking": { "type": "boolean", "description": "Track the open rate of each email.", "key$": "open_tracking" }, "click_tracking": { "type": "boolean", "description": "Track clicks within the body of each HTML email.", "key$": "click_tracking" }, "tracking_subdomain": { "type": "string", "description": "The subdomain to use for click and open tracking.", "key$": "tracking_subdomain" } }, "x-ref": "#/components/schemas/CreateDomainClaimRequest", "index$": 1 } } } }, "parameters": [] }, "GET /domains/{domain_id}/claim": { "protocol": "http", "parameters": [{ "name": "domain_id", "in": "path", "required": true, "schema": { "type": "string" }, "description": "The ID of the placeholder domain created by the claim.", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const domain_claim_ref01_ent = client.DomainClaim();
        let domain_claim_ref01_data = setup.data.new.domain_claim['domain_claim_ref01'];
        domain_claim_ref01_data = (await domain_claim_ref01_ent.create(domain_claim_ref01_data)).data();
        (0, node_assert_1.default)(null != domain_claim_ref01_data.id);
        // LOAD
        const domain_claim_ref01_match_dt0 = {};
        domain_claim_ref01_match_dt0.id = domain_claim_ref01_data.id;
        const domain_claim_ref01_data_dt0 = (await domain_claim_ref01_ent.load(domain_claim_ref01_match_dt0)).data();
        (0, node_assert_1.default)(domain_claim_ref01_data_dt0.id === domain_claim_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/domain_claim/DomainClaimTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['domain_claim01', 'domain_claim02', 'domain_claim03', 'domain01', 'domain02', 'domain03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_DOMAIN_CLAIM_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_DOMAIN_CLAIM_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_DOMAIN_CLAIM_ENTID'];
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
//# sourceMappingURL=DomainClaimEntity.test.js.map