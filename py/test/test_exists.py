# Resend SDK exists test

import pytest
from resend_sdk import ResendSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ResendSDK.test(None, None)
        assert testsdk is not None
