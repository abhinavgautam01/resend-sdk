# Resend SDK utility: make_context

from projectname_sdk.core.context import ResendContext


def make_context_util(ctxmap, basectx):
    return ResendContext(ctxmap, basectx)
