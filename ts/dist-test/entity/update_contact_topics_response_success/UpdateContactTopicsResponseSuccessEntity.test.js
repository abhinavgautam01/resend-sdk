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
(0, node_test_1.describe)('UpdateContactTopicsResponseSuccessEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.UpdateContactTopicsResponseSuccess();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'update_contact_topics_response_success.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "contact_id": { "a": true, "h": "Contact Id", "n": "contact_id", "r": false, "sh": "The ID of the contact.", "t": "`$STRING`", "key$": "contact_id", "index$": 0 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "sh": "The object type.", "t": "`$STRING`", "key$": "object", "index$": 1 }, "topics": { "a": true, "h": "Topics", "n": "topics", "op": { "update": { "req": true, "type": "`$ARRAY`" } }, "r": false, "sh": "Array of updated topic subscriptions.", "t": "`$ARRAY`", "key$": "topics", "index$": 2 } }, "name": "update_contact_topics_response_success", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PATCH /contacts/{contact_id}/topics", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "contact_id", "or": "contact_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/contacts/{contact_id}/topics", "q": { "exist": ["contact_id"] }, "r": {}, "s": [{ "lit": "contacts" }, { "var": "contact_id" }, { "lit": "topics" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.contact"]] }, "key$": "update_contact_topics_response_success", "name__orig": "update_contact_topics_response_success", "Name": "UpdateContactTopicsResponseSuccess", "name_": "update_contact_topics_response_success", "name-": "update-contact-topics-response-success", "NAME": "UPDATE_CONTACT_TOPICS_RESPONSE_SUCCESS", "index$": 53 }, { "active": true, "entity": "update_contact_topics_response_success", "key$": "BasicUpdateContactTopicsResponseSuccessFlow", "kind": "basic", "name": "BasicUpdateContactTopicsResponseSuccessFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "update_contact_topics_response_success_ref01", "srcdatavar": "update_contact_topics_response_success_ref01_data", "suffix": "_up0", "textfield": "object" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-update_contact_topics_response_success_ref01" } }], "v": [], "index$": 0 }] }, 'UpdateContactTopicsResponseSuccess', { "PATCH /contacts/{contact_id}/topics": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["topics"], "properties": { "topics": { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "string", "description": "The ID of the topic." }, "subscription": { "type": "string", "enum": [], "description": "The subscription status (opt_in or opt_out)." } } }, "key$": "topics" } }, "x-ref": "#/components/schemas/UpdateContactTopicsOptions", "index$": 1 } } } }, "parameters": [{ "name": "contact_id", "in": "path", "required": true, "schema": { "type": "string" }, "description": "The Contact ID or email address.", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let update_contact_topics_response_success_ref01_data = Object.values(setup.data.existing.update_contact_topics_response_success)[0];
        // UPDATE
        const update_contact_topics_response_success_ref01_ent = client.UpdateContactTopicsResponseSuccess();
        const update_contact_topics_response_success_ref01_data_up0 = {};
        const update_contact_topics_response_success_ref01_markdef_up0 = { name: 'object', value: 'Mark01-update_contact_topics_response_success_ref01_' + setup.now };
        update_contact_topics_response_success_ref01_data_up0[update_contact_topics_response_success_ref01_markdef_up0.name] = update_contact_topics_response_success_ref01_markdef_up0.value;
        const update_contact_topics_response_success_ref01_resdata_up0 = (await update_contact_topics_response_success_ref01_ent.update(update_contact_topics_response_success_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != update_contact_topics_response_success_ref01_resdata_up0);
        (0, node_assert_1.default)(update_contact_topics_response_success_ref01_resdata_up0[update_contact_topics_response_success_ref01_markdef_up0.name] === update_contact_topics_response_success_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/update_contact_topics_response_success/UpdateContactTopicsResponseSuccessTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['update_contact_topics_response_success01', 'update_contact_topics_response_success02', 'update_contact_topics_response_success03', 'contact01', 'contact02', 'contact03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_UPDATE_CONTACT_TOPICS_RESPONSE_SUCCESS_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_UPDATE_CONTACT_TOPICS_RESPONSE_SUCCESS_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_UPDATE_CONTACT_TOPICS_RESPONSE_SUCCESS_ENTID'];
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
//# sourceMappingURL=UpdateContactTopicsResponseSuccessEntity.test.js.map