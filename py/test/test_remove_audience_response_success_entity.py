# RemoveAudienceResponseSuccess entity test

import json
import os
import time

import pytest

from resend_sdk.utility.voxgig_struct import voxgig_struct as vs
from resend_sdk import ResendSDK
from resend_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestRemoveAudienceResponseSuccessEntity:

    def test_should_create_instance(self):
        testsdk = ResendSDK.test(None, None)
        ent = testsdk.RemoveAudienceResponseSuccess(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _remove_audience_response_success_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in []:
            _skip, _reason = runner.is_control_skipped("entityOp", "remove_audience_response_success." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set RESEND_TEST_REMOVE_AUDIENCE_RESPONSE_SUCCESS_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        remove_audience_response_success_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.remove_audience_response_success")))
        remove_audience_response_success_ref01_data = None
        if len(remove_audience_response_success_ref01_data_raw) > 0:
            remove_audience_response_success_ref01_data = helpers.to_map(remove_audience_response_success_ref01_data_raw[0][1])



def _remove_audience_response_success_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/remove_audience_response_success/RemoveAudienceResponseSuccessTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = ResendSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["remove_audience_response_success01", "remove_audience_response_success02", "remove_audience_response_success03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "RESEND_TEST_REMOVE_AUDIENCE_RESPONSE_SUCCESS_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "RESEND_TEST_REMOVE_AUDIENCE_RESPONSE_SUCCESS_ENTID": idmap,
        "RESEND_TEST_LIVE": "FALSE",
        "RESEND_TEST_EXPLAIN": "FALSE",
        "RESEND_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("RESEND_TEST_REMOVE_AUDIENCE_RESPONSE_SUCCESS_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("RESEND_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("RESEND_APIKEY"),
            },
            extra or {},
        ])
        client = ResendSDK(helpers.to_map(merged_opts))

    _live = env.get("RESEND_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("RESEND_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
