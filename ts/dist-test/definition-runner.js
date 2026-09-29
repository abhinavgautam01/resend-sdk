"use strict";
// Checks one operation against the API definition rather than the model the
// SDK was generated from. A mock transport answers with the definition's own
// response example, so nothing here depends on how the model reads it.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runDefinitionPoint = runDefinitionPoint;
exports.recordsOf = recordsOf;
exports.recordOf = recordOf;
const strict_1 = __importDefault(require("node:assert/strict"));
const KEY = 'definition-test-key';
const BASE = 'http://definition.test';
async function runDefinitionPoint(SDK, point) {
    const sent = [];
    const body = null == point.sample ? null : JSON.stringify(point.sample);
    const client = new SDK({
        apikey: KEY,
        base: BASE,
        feature: { test: { active: false } },
        system: {
            fetch: async (url, init) => {
                sent.push({ url: new URL(String(url)), init: init || {} });
                return new Response(204 === point.status ? null : body, {
                    status: point.status,
                    headers: { 'content-type': 'application/json' },
                });
            },
        },
    });
    const input = { ...point.select };
    for (const arg of point.args)
        input[arg.name] = arg.value;
    if (null != point.action)
        input.$action = point.action;
    let result;
    let error;
    try {
        result = await client[point.accessor]()[point.op](input);
    }
    catch (err) {
        error = err;
    }
    strict_1.default.equal(sent.length, 1, 'expected one request, sent ' + sent.length +
        (error ? ': ' + error.message : ''));
    const { url, init } = sent[0];
    strict_1.default.equal(String(init.method || 'GET').toUpperCase(), point.method, 'method');
    const route = point.path.replace(/\{([^}]+)\}/g, (_, name) => {
        const arg = point.args.find((a) => a.wire === name);
        return null == arg ? '{' + name + '}' : encodeURIComponent(String(arg.value));
    });
    strict_1.default.equal(url.pathname, route, 'route');
    // Only what the definition declares, so never a path parameter again.
    const credentialQuery = (point.auth || []).flat()
        .filter((c) => 'query' === c.in).map((c) => c.name);
    for (const key of url.searchParams.keys()) {
        (0, strict_1.default)(point.query.includes(key) || credentialQuery.includes(key), 'query parameter not in the definition: ' + key);
    }
    // From the apikey alone, placed as the definition's security scheme says.
    if (null != point.auth && 0 < point.auth.length) {
        const headers = new Headers(init.headers);
        (0, strict_1.default)(point.auth.some((set) => set.every((c) => placed(c, headers, url))), 'credential not sent as the definition declares it: ' + JSON.stringify(point.auth));
    }
    if (null != error) {
        throw error;
    }
    if (null == point.sample) {
        return;
    }
    if ('list' === point.op) {
        const records = recordsOf(point.sample);
        if (null != records) {
            (0, strict_1.default)(Array.isArray(result), 'list did not return a list');
            strict_1.default.equal(result.length, records.length, 'list read ' + result.length + ' records where the definition example holds ' +
                records.length);
        }
    }
    else if ('load' === point.op || 'create' === point.op || 'update' === point.op) {
        const record = recordOf(point.sample, point.idField);
        if (null != record) {
            strict_1.default.equal(result?.data?.()?.[point.idField], record[point.idField], 'the entity does not hold the record the definition example returns');
        }
    }
}
function placed(cred, headers, url) {
    if ('query' === cred.in) {
        return KEY === url.searchParams.get(cred.name);
    }
    if ('cookie' === cred.in) {
        return String(headers.get('cookie') || '').split(';')
            .some((part) => cred.name + '=' + KEY === part.trim());
    }
    const value = headers.get(cred.name);
    if (null == value) {
        return false;
    }
    const [kind, token] = value.split(' ');
    // The client carries no secret, so the password must be empty.
    if ('basic' === cred.scheme) {
        return 'basic' === String(kind).toLowerCase() &&
            Buffer.from(String(token), 'base64').toString('utf8') === KEY + ':';
    }
    if ('bearer' === cred.scheme) {
        return 'bearer' === String(kind).toLowerCase() && KEY === token;
    }
    return value.includes(KEY);
}
// The records a list response holds: the body itself, or its one property
// that is a non-empty list of objects. Anything else proves nothing.
function recordsOf(sample) {
    if (Array.isArray(sample)) {
        return sample;
    }
    if (null == sample || 'object' !== typeof sample) {
        return null;
    }
    const lists = Object.values(sample).filter((v) => Array.isArray(v) && 0 < v.length &&
        v.every((x) => null != x && 'object' === typeof x && !Array.isArray(x)));
    return 1 === lists.length ? lists[0] : null;
}
// The record a single-item response returns: the body, or its one property
// holding an object with the identity field.
function recordOf(sample, idField) {
    if (null == sample || 'object' !== typeof sample || Array.isArray(sample)) {
        return null;
    }
    if (null != sample[idField]) {
        return sample;
    }
    const inner = Object.values(sample).filter((v) => null != v && 'object' === typeof v &&
        !Array.isArray(v) && null != v[idField]);
    return 1 === inner.length ? inner[0] : null;
}
//# sourceMappingURL=definition-runner.js.map