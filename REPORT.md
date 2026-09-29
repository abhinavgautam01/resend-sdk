# Voxgig SDK generator: observations from building a Resend SDK

**Author:** Abhinav Gautam
**Repository:** https://github.com/abhinavgautam01/resend-sdk
**API:** [Resend](https://resend.com), email for developers, not previously in the voxgig-sdk catalogue
**Spec:** official Resend OpenAPI 3.1.2 spec (v1.5.1, 72 paths) from [resend/resend-openapi](https://github.com/resend/resend-openapi)
**Toolchain:** `@voxgig/create-sdkgen` 0.29.2, `@voxgig/sdkgen` 4.31.0, macOS, Node 20/22/24, Python 3.13
**Targets:** TypeScript and Python

## Summary

The generator got me from a real third-party spec to two working SDKs very quickly. Scaffolding took 37 seconds and generation took 11. The generated TypeScript and Python clients sent real email through Resend on the first try. The generated offline test suite is also large (523 TS tests, 481 Python tests).

Getting the repo to a green CI took more work than generating it. Out of the box, three CI checks failed on the first push. All three had causes outside my code: a `.gitignore` rule, a list response mapping and a spelling rule tripping on the vendor's own spec text. I also found one security issue worth fixing first: failed requests expose the API key in the thrown error.

## Live verification

Tested with a real Resend account and no custom domain (sending from `onboarding@resend.dev`).

| SDK | Operation | Result |
|---|---|---|
| TypeScript | `Domain().list()` | Pass |
| TypeScript | `ApiKey().list()` | Pass |
| TypeScript | `Email().create(...)` | Pass, email delivered |
| TypeScript | `Email().load({ id })` | Pass |
| Python | `Email().create({...})` | Pass, email delivered |
| Python | `Domain().list()` | Pass |

With a Resend "Sending access" key, the three read operations return 401 `restricted_api_key`, which is correct API behaviour. The script is in [`examples/live-test.js`](examples/live-test.js).

## What worked well

- **Speed.** Spec to two SDKs in under a minute, driven by one non-interactive command.
- **OpenAPI 3.1 support.** The spec parsed without errors.
- **Tests for free.** Every entity and operation gets offline tests. README code blocks are compiled and executed, so documentation drift fails the build.
- **The guide overlay is a good customisation model.** Once I found it, fixing a wrong response mapping was one line in `.sdk/model/guide/guide.aontu`, which survives regeneration.
- **Errors carry full context.** The error object includes the request, response and parsed body, which made debugging easy (see the security note below).

## Issues, in priority order

### 1. API key is exposed in thrown errors (security)

When a request fails, the thrown `ResendError` holds the full context, including the header `authorization: 'Bearer re_...'`. The generated README recommends `console.error('load failed:', err)`, which writes the secret key to logs. **Suggestion:** redact auth headers in the error context, or make the context non-enumerable.

### 2. `.sdk/.gitignore` hides test data for any entity named `log`

The rule `log/` was meant for generator logs, but Resend has a `Log` entity. The rule also matches `.sdk/test/entity/log/`, so `LogTestData.json` is never committed. Tests pass locally but fail on a clean CI checkout in both TS and Python with `ENOENT`. **Fix used:** anchor the rule as `/log/`. Any API with a `log` resource will hit this.

### 3. Copyright holder is hard-coded to Voxgig

`sdkgen/dist/cmp/License.js` writes `Copyright (c) <year> Voxgig` from a `PUBLISHER` constant. It also rewrites the root `LICENSE` on every `npm run generate`. The per-language templates `.sdk/tm/ts/LICENSE` and `.sdk/tm/py/LICENSE` also say Voxgig, while `.sdk/tm/LICENSE` says `Resend`, so there are two different wrong answers. For someone building their own SDK (and keeping copyright, as this task states), there is no supported way to set this. **Workaround used:** a `postgenerate` npm script. **Suggestion:** a `copyright` or `publisher` model field, asked for at scaffold time.

### 4. A single-object endpoint became a failing list

`GET /emails/metrics` returns `{ object, totals, data: [...] }`. The guide maps it to `list` with `res: body` instead of `body.data`, so its generated test fails out of the box (`list read 0 records where the definition example holds 1`). **Fix used:** a guide override. The inference probably gets confused by `data` sitting alongside a non-array `totals`.

### 5. Documentation CI fails on the vendor's own prose

The Vale spelling rule flags `segment_id` in a description copied from Resend's spec (`Deprecated. Use segment_id instead.`). The SDK author does not own that text. Also, `npm run generate` does not run Vale locally, so the first sign is a red CI. **Fix used:** backticks in the local spec copy. **Suggestion:** exempt snake_case identifiers, or run the QA check as part of generate.

### 6. Editing a generated entity file silently gets overwritten

My first fix for issue 4 was in `.sdk/model/entity/emails_metric.aontu`. The next generate reverted it without warning. `base-guide.aontu` has a clear "do not edit, use guide.aontu" header, but the entity files have none. Adding the same header would have saved me a debugging loop.

### 7. Error message hides the API's reason

A bad key produces `ResendSDK: list: request: 400: Bad Request`. Resend's actual message, `API key is invalid`, is only available at `err.ctx.result.body`. Including the response `message` in the headline would make most failures self-explanatory.

### 8. TypeScript tests need Node 21+ but nothing says so

The test script is `node --test 'dist-test/**/*.test.js'`. Glob support in `node --test` arrived in Node 21. On Node 20 (still common) the output is `Could not find '.../dist-test/**/*.test.js'`, which looks like a build failure. `package.json` has no `engines` field.

### 9. Response wrapper schemas become top-level entities

Spec schemas such as `AddContactToSegmentResponseSuccess` and `RemoveBroadcastResponseSuccess` turned into entities, about 30 of the 64. This gives calls like `client.AddContactToSegmentResponseSuccess().create(...)` instead of an action on `Contact`. The README tutorial then uses this entity as its first example, skips from step 1 to step 3 and never shows the API's main use case (sending an email).

### 10. Repository owner defaults to the voxgig-sdk org

READMEs, `package.json`, `pyproject.toml` and the publish workflow point to `github.com/voxgig-sdk/resend-sdk`. The fix is `origin:` in `.sdk/model/sdk.aontu`, which works well, but there is no scaffold flag and nothing points to it.

### 11. Smaller items

- CI jobs for 20+ languages that were not generated still run, skip every step and report green. On GitHub this shows as 22 "successful" checks for two real SDKs.
- Python `TypedDict` models drop the `from` field (a Python keyword) on `Email`, `Broadcast`, `Template` and others, with 14 warnings. It works at runtime, but the most important email field is missing from the types. The functional form `TypedDict('Email', {'from': str})` would keep it.
- Every generate logs `require-missing` warnings for `ReadmeFeatures` and `AgentGuide` components.
- Running docs QA reorders `accept.txt` without changing its content, which creates noise in diffs.
- `npm audit` reports 2 moderate vulnerabilities in the `.sdk` dependencies right after scaffolding.

## Changes I made to the generated project

| Change | File |
|---|---|
| Repo owner | `.sdk/model/sdk.aontu` (`origin`) |
| Copyright holder | `.sdk/tm/*/LICENSE` plus `postgenerate` in `.sdk/package.json` |
| Metrics response mapping | `.sdk/model/guide/guide.aontu` |
| Anchored log ignore rule | `.sdk/.gitignore` |
| Code formatting in one spec description | `.sdk/def/resend-openapi.yaml` |
| Live test script | `examples/live-test.js` |

After these changes all CI checks pass: TypeScript 522 pass and 1 skipped, Python 394 pass, docs QA clean.

## Time

- Tool time: about 1 minute (scaffold plus generate).
- Human time: about 15 to 25 minutes, spent choosing the API and reading the Resend and Voxgig docs.
