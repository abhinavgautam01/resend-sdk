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
(0, node_test_1.describe)('ContactEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when RESEND_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('RESEND_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.ResendSDK.test();
        const ent = testsdk.Contact();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.RESEND_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contact.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "audience_id": { "a": true, "de": true, "h": "Audience Id", "n": "audience_id", "r": false, "sh": "Unique identifier of the audience to which the contact belongs.", "t": "`$STRING`", "key$": "audience_id", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "sh": "Timestamp indicating when the contact was created.", "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "email": { "a": true, "h": "Email", "n": "email", "op": { "create": { "req": true, "type": "`$STRING`" } }, "r": false, "sh": "Email address of the contact.", "t": "`$STRING`", "key$": "email", "index$": 2 }, "first_name": { "a": true, "h": "First Name", "n": "first_name", "r": false, "sh": "First name of the contact.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "first_name", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the contact.", "t": "`$STRING`", "key$": "id", "index$": 4 }, "last_name": { "a": true, "h": "Last Name", "n": "last_name", "r": false, "sh": "Last name of the contact.", "t": ["`$ONE`", ["`$STRING`", "`$NULL`"]], "key$": "last_name", "index$": 5 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "sh": "Type of the response object.", "t": "`$STRING`", "key$": "object", "index$": 6 }, "properties": { "a": true, "h": "Properties", "n": "properties", "r": false, "sh": "A map of custom property keys and values.", "t": "`$OBJECT`", "key$": "properties", "index$": 7 }, "segments": { "a": true, "h": "Segments", "n": "segments", "r": false, "sh": "Array of segment IDs to add the contact to.", "t": "`$ARRAY`", "key$": "segments", "index$": 8 }, "topics": { "a": true, "h": "Topics", "n": "topics", "r": false, "sh": "Array of topic subscriptions for the contact.", "t": "`$ARRAY`", "key$": "topics", "index$": 9 }, "unsubscribed": { "a": true, "h": "Unsubscribed", "n": "unsubscribed", "r": false, "sh": "Indicates if the contact is unsubscribed.", "t": "`$BOOLEAN`", "key$": "unsubscribed", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "contact", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /contacts", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/contacts", "q": {}, "r": {}, "s": [{ "lit": "contacts" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /contacts", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/contacts", "q": { "exist": ["after", "before", "limit"] }, "r": {}, "s": [{ "lit": "contacts" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /contacts/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/contacts/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "contacts" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "contact", "name__orig": "contact", "Name": "Contact", "name_": "contact", "name-": "contact", "NAME": "CONTACT", "index$": 9 }, { "active": true, "entity": "contact", "key$": "BasicContactFlow", "kind": "basic", "name": "BasicContactFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "contact_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "contact_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "contact_ref01", "srcdatavar": "contact_ref01_data", "suffix": "_dt0" }, "m": { "id": "contact01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-contact_ref01" } }], "index$": 2 }] }, 'Contact', { "POST /contacts": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "type": "object", "required": ["email"], "properties": { "email": { "type": "string", "description": "Email address of the contact.", "example": "steve.wozniak@gmail.com", "key$": "email" }, "first_name": { "type": "string", "description": "First name of the contact.", "example": "Steve", "key$": "first_name" }, "last_name": { "type": "string", "description": "Last name of the contact.", "example": "Wozniak", "key$": "last_name" }, "unsubscribed": { "type": "boolean", "description": "The Contact's global subscription status. If set to true, the contact will be unsubscribed from all Broadcasts.", "example": false, "key$": "unsubscribed" }, "properties": { "type": "object", "additionalProperties": { "type": ["string", "number", "null"] }, "description": "A map of custom property keys and values to create.", "key$": "properties" }, "segments": { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "string", "description": "The segment ID" } } }, "description": "Array of segment IDs to add the contact to.", "key$": "segments" }, "topics": { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "string", "description": "The topic ID." }, "subscription": { "type": "string", "enum": [], "description": "The subscription status for this topic." } } }, "description": "Array of topic subscriptions for the contact.", "key$": "topics" }, "audience_id": { "type": "string", "description": "Unique identifier of the audience to which the contact belongs.", "example": "78261eea-8f8b-4381-83c6-79fa7120f1cf", "deprecated": true, "key$": "audience_id" } }, "x-ref": "#/components/schemas/CreateContactOptions", "index$": 1 } } } }, "parameters": [] }, "GET /contacts": { "protocol": "http", "parameters": [{ "in": "query", "name": "limit", "required": false, "schema": { "type": "integer", "minimum": 1, "maximum": 100 }, "description": "Number of items to return.", "x-ref": "#/components/parameters/PaginationLimit", "index$": 0 }, { "in": "query", "name": "after", "required": false, "schema": { "type": "string" }, "description": "Return items after this cursor.", "x-ref": "#/components/parameters/PaginationAfter", "index$": 1 }, { "in": "query", "name": "before", "required": false, "schema": { "type": "string" }, "description": "Return items before this cursor.", "x-ref": "#/components/parameters/PaginationBefore", "index$": 2 }] }, "GET /contacts/{id}": { "protocol": "http", "parameters": [{ "name": "id", "in": "path", "required": true, "schema": { "type": "string" }, "description": "The Contact ID or email address.", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const contact_ref01_ent = client.Contact();
        let contact_ref01_data = setup.data.new.contact['contact_ref01'];
        contact_ref01_data = (await contact_ref01_ent.create(contact_ref01_data)).data();
        (0, node_assert_1.default)(null != contact_ref01_data.id);
        // LIST
        const contact_ref01_match = {};
        const contact_ref01_list = (await contact_ref01_ent.list(contact_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(contact_ref01_list, { id: contact_ref01_data.id })));
        // LOAD
        const contact_ref01_match_dt0 = {};
        contact_ref01_match_dt0.id = contact_ref01_data.id;
        const contact_ref01_data_dt0 = (await contact_ref01_ent.load(contact_ref01_match_dt0)).data();
        (0, node_assert_1.default)(contact_ref01_data_dt0.id === contact_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contact/ContactTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.ResendSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contact01', 'contact02', 'contact03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'RESEND_TEST_CONTACT_ENTID': idmap,
        'RESEND_TEST_LIVE': 'FALSE',
        'RESEND_TEST_EXPLAIN': 'FALSE',
        'RESEND_APIKEY': '',
    });
    idmap = env['RESEND_TEST_CONTACT_ENTID'];
    const live = 'TRUE' === env.RESEND_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['RESEND_TEST_CONTACT_ENTID'];
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
//# sourceMappingURL=ContactEntity.test.js.map