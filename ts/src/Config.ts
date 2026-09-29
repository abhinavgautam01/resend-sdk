
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Resend',
        slug: "resend",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },

  }


  options = {
    base: "https://api.resend.com",

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        add_contact_to_segment_response_success: {
        },
  
        api_key: {
        },
  
        audience: {
        },
  
        automation: {
        },
  
        automation_run: {
        },
  
        automation_run_list_item: {
        },
  
        batch_add_suppressions_response_success: {
        },
  
        batch_remove_suppressions_response_success: {
        },
  
        broadcast: {
        },
  
        contact: {
        },
  
        contact_import: {
        },
  
        contact_import_response_success: {
        },
  
        contact_property: {
        },
  
        contact_topics_response_success: {
        },
  
        create_batch_email: {
        },
  
        create_contact_import_response_success: {
        },
  
        domain: {
        },
  
        domain_claim: {
        },
  
        email: {
        },
  
        emails_metric: {
        },
  
        event: {
        },
  
        list_attachment: {
        },
  
        list_broadcast_clicked_links_response_success: {
        },
  
        list_broadcast_recipients_response_success: {
        },
  
        list_contact_segments_response_success: {
        },
  
        list_contacts_response_success: {
        },
  
        list_received_email: {
        },
  
        list_webhook_event: {
        },
  
        list_webhook_event_attempt: {
        },
  
        log: {
        },
  
        o_auth_grant: {
        },
  
        received_email: {
        },
  
        remove_audience_response_success: {
        },
  
        remove_broadcast_response_success: {
        },
  
        remove_contact_from_segment_response_success: {
        },
  
        remove_contact_property_response_success: {
        },
  
        remove_contact_response_success: {
        },
  
        remove_event: {
        },
  
        remove_segment_response_success: {
        },
  
        remove_suppression_response_success: {
        },
  
        remove_template_response_success: {
        },
  
        remove_topic_response_success: {
        },
  
        retrieved_attachment: {
        },
  
        revoke_o_auth_grant: {
        },
  
        rotate: {
        },
  
        segment: {
        },
  
        suppression: {
        },
  
        template: {
        },
  
        topic: {
        },
  
        update_api_key: {
        },
  
        update_broadcast_response_success: {
        },
  
        update_contact_property_response_success: {
        },
  
        update_contact_response_success: {
        },
  
        update_contact_topics_response_success: {
        },
  
        update_domain_response_success: {
        },
  
        update_email_option: {
        },
  
        update_event: {
        },
  
        update_segment_response_success: {
        },
  
        update_template_response_success: {
        },
  
        update_topic_response_success: {
        },
  
        update_webhook: {
        },
  
        usage: {
        },
  
        webhook: {
        },
  
        webhook_event: {
        },
  
    }
  }


  entity = {
    "add_contact_to_segment_response_success": {
      "fields": [
        {
          "name": "contact_id",
          "title": "Contact Id",
          "type": "`$STRING`",
          "short": "The ID of the contact."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        },
        {
          "name": "segment_id",
          "title": "Segment Id",
          "type": "`$STRING`",
          "short": "The ID of the segment."
        }
      ],
      "name": "add_contact_to_segment_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/contacts/{contact_id}/segments/{segment_id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "contact_id"
                },
                {
                  "lit": "segments"
                },
                {
                  "var": "segment_id"
                }
              ],
              "parts": [
                "contacts",
                "{contact_id}",
                "segments",
                "{segment_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "contact_id",
                    "orig": "contact_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "segment_id",
                    "orig": "segment_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "contact_id",
                  "segment_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.contact",
            "$.main.kit.entity.segment"
          ]
        ]
      }
    },
    "api_key": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the API key was created."
        },
        {
          "name": "domain_id",
          "title": "Domain Id",
          "type": "`$STRING`",
          "short": "Restrict an API key to send emails only from a specific domain."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the API key."
        },
        {
          "name": "last_used_at",
          "title": "Last Used At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The date and time the API key was last used."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "short": "The API key name."
        },
        {
          "name": "permission",
          "title": "Permission",
          "type": "`$STRING`",
          "short": "The API key can have full access to Resend’s API or be only restricted to send emails."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "api_key",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/api-keys",
              "segments": [
                {
                  "lit": "api-keys"
                }
              ],
              "parts": [
                "api-keys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/api-keys",
              "segments": [
                {
                  "lit": "api-keys"
                }
              ],
              "parts": [
                "api-keys"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/api-keys/{api_key_id}",
              "segments": [
                {
                  "lit": "api-keys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api-keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "api_key_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "api_key_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "audience": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date that the object was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the audience."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the audience."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object of the audience."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "audience",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/audiences",
              "segments": [
                {
                  "lit": "audiences"
                }
              ],
              "parts": [
                "audiences"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/audiences",
              "segments": [
                {
                  "lit": "audiences"
                }
              ],
              "parts": [
                "audiences"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/audiences/{id}",
              "segments": [
                {
                  "lit": "audiences"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "audiences",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "automation": {
      "fields": [
        {
          "name": "connections",
          "title": "Connections",
          "type": "`$ARRAY`",
          "op": {
            "create": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "The connections between steps in the active version of the automation."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the automation was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the automation."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the automation."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The current status of the automation."
        },
        {
          "name": "steps",
          "title": "Steps",
          "type": "`$ARRAY`",
          "op": {
            "create": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "The steps in the active version of the automation."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "The date and time the automation was last updated."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "automation",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/automations/{automation_id}/duplicate",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "duplicate"
                }
              ],
              "parts": [
                "automations",
                "{id}",
                "duplicate"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "duplicate",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/automations/{automation_id}/stop",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "stop"
                }
              ],
              "parts": [
                "automations",
                "{id}",
                "stop"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "stop",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/automations",
              "segments": [
                {
                  "lit": "automations"
                }
              ],
              "parts": [
                "automations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/automations",
              "segments": [
                {
                  "lit": "automations"
                }
              ],
              "parts": [
                "automations"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit",
                  "status"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/automations/{automation_id}",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "automations",
                "{id}"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/automations/{automation_id}",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "automations",
                "{id}"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/automations/{automation_id}",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "automations",
                "{id}"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "automation_run": {
      "fields": [
        {
          "name": "completed_at",
          "title": "Completed At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The date and time the run completed."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the run was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the automation run."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "started_at",
          "title": "Started At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The date and time the run started."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The current status of the automation run."
        },
        {
          "name": "steps",
          "title": "Steps",
          "type": "`$ARRAY`",
          "short": "The steps executed in this run, sorted in graph order."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "automation_run",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/automations/{automation_id}/runs/{run_id}",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "automation_id"
                },
                {
                  "lit": "runs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "automations",
                "{automation_id}",
                "runs",
                "{id}"
              ],
              "rename": {
                "param": {
                  "run_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "automation_id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "run_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "automation_id",
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.automation"
          ]
        ]
      }
    },
    "automation_run_list_item": {
      "fields": [
        {
          "name": "completed_at",
          "title": "Completed At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The date and time the run completed."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the run was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the automation run."
        },
        {
          "name": "started_at",
          "title": "Started At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The date and time the run started."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The current status of the automation run."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "automation_run_list_item",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/automations/{automation_id}/runs",
              "segments": [
                {
                  "lit": "automations"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "runs"
                }
              ],
              "parts": [
                "automations",
                "{id}",
                "runs"
              ],
              "rename": {
                "param": {
                  "automation_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "automation_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "runs",
                "exist": [
                  "after",
                  "before",
                  "id",
                  "limit",
                  "status"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "batch_add_suppressions_response_success": {
      "fields": [
        {
          "name": "emails",
          "title": "Emails",
          "type": "`$ARRAY`",
          "req": true,
          "short": "Email addresses to suppress."
        }
      ],
      "name": "batch_add_suppressions_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/suppressions/batch/add",
              "segments": [
                {
                  "lit": "suppressions"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "add"
                }
              ],
              "parts": [
                "suppressions",
                "batch",
                "add"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "batch_remove_suppressions_response_success": {
      "fields": [
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`",
          "short": "Array containing the removed suppressions."
        },
        {
          "name": "emails",
          "title": "Emails",
          "type": "`$ARRAY`",
          "short": "Email addresses to remove from the suppression list."
        },
        {
          "name": "ids",
          "title": "Ids",
          "type": "`$ARRAY`",
          "short": "Suppression IDs to remove from the suppression list."
        }
      ],
      "name": "batch_remove_suppressions_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/suppressions/batch/remove",
              "segments": [
                {
                  "lit": "suppressions"
                },
                {
                  "lit": "batch"
                },
                {
                  "lit": "remove"
                }
              ],
              "parts": [
                "suppressions",
                "batch",
                "remove"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "broadcast": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Deprecated: use `segment_id` instead.",
          "deprecated": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the broadcast was created."
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The email address of the sender."
        },
        {
          "name": "html",
          "title": "Html",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The HTML version of the broadcast content."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the broadcast."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the broadcast."
        },
        {
          "name": "preview_text",
          "title": "Preview Text",
          "type": "`$STRING`",
          "short": "The preview text of the email."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "The email addresses to which replies should be sent."
        },
        {
          "name": "scheduled_at",
          "title": "Scheduled At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the broadcast is scheduled to be sent."
        },
        {
          "name": "segment_id",
          "title": "Segment Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Unique identifier of the segment this broadcast will be sent to."
        },
        {
          "name": "send",
          "title": "Send",
          "type": "`$BOOLEAN`",
          "short": "Whether to send the broadcast immediately or keep it as a draft."
        },
        {
          "name": "sent_at",
          "title": "Sent At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the broadcast was sent."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The status of the broadcast."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The subject line of the email."
        },
        {
          "name": "text",
          "title": "Text",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The plain text version of the broadcast content."
        },
        {
          "name": "topic_id",
          "title": "Topic Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The topic ID that the broadcast is scoped to."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "broadcast",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/broadcasts/{id}/cancel",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "cancel"
                }
              ],
              "parts": [
                "broadcasts",
                "{id}",
                "cancel"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "cancel",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/broadcasts/{id}/duplicate",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "duplicate"
                }
              ],
              "parts": [
                "broadcasts",
                "{id}",
                "duplicate"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "duplicate",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/broadcasts/{id}/send",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "send"
                }
              ],
              "parts": [
                "broadcasts",
                "{id}",
                "send"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "send",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/broadcasts",
              "segments": [
                {
                  "lit": "broadcasts"
                }
              ],
              "parts": [
                "broadcasts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/broadcasts",
              "segments": [
                {
                  "lit": "broadcasts"
                }
              ],
              "parts": [
                "broadcasts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/broadcasts/{id}",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "broadcasts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contact": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": "`$STRING`",
          "short": "Unique identifier of the audience to which the contact belongs.",
          "deprecated": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the contact was created."
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "Email address of the contact."
        },
        {
          "name": "first_name",
          "title": "First Name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "First name of the contact."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the contact."
        },
        {
          "name": "last_name",
          "title": "Last Name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Last name of the contact."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "properties",
          "title": "Properties",
          "type": "`$OBJECT`",
          "short": "A map of custom property keys and values."
        },
        {
          "name": "segments",
          "title": "Segments",
          "type": "`$ARRAY`",
          "short": "Array of segment IDs to add the contact to."
        },
        {
          "name": "topics",
          "title": "Topics",
          "type": "`$ARRAY`",
          "short": "Array of topic subscriptions for the contact."
        },
        {
          "name": "unsubscribed",
          "title": "Unsubscribed",
          "type": "`$BOOLEAN`",
          "short": "Indicates if the contact is unsubscribed."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contact",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/contacts",
              "segments": [
                {
                  "lit": "contacts"
                }
              ],
              "parts": [
                "contacts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contacts",
              "segments": [
                {
                  "lit": "contacts"
                }
              ],
              "parts": [
                "contacts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contacts/{id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contacts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contact_import": {
      "fields": [
        {
          "name": "completed_at",
          "title": "Completed At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Timestamp indicating when the contact import completed."
        },
        {
          "name": "counts",
          "title": "Counts",
          "type": "`$OBJECT`"
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the contact import was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the contact import.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "Current status of the contact import."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contact_import",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contacts/imports",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "lit": "imports"
                }
              ],
              "parts": [
                "contacts",
                "imports"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "status",
                    "orig": "status",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit",
                  "status"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contact_import_response_success": {
      "fields": [
        {
          "name": "completed_at",
          "title": "Completed At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Timestamp indicating when the contact import completed."
        },
        {
          "name": "counts",
          "title": "Counts",
          "type": "`$OBJECT`"
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the contact import was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the contact import.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "Current status of the contact import."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contact_import_response_success",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contacts/imports/{id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "lit": "imports"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contacts",
                "imports",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contact_property": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the contact property was created."
        },
        {
          "name": "fallback_value",
          "title": "Fallback Value",
          "type": "`$ANY`",
          "short": "The default value when the property is not set for a contact."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the contact property."
        },
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The property key."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The property type."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contact_property",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/contact-properties",
              "segments": [
                {
                  "lit": "contact-properties"
                }
              ],
              "parts": [
                "contact-properties"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contact-properties",
              "segments": [
                {
                  "lit": "contact-properties"
                }
              ],
              "parts": [
                "contact-properties"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contact-properties/{id}",
              "segments": [
                {
                  "lit": "contact-properties"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contact-properties",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contact_topics_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "contact_topics_response_success",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contacts/{contact_id}/topics",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "topics"
                }
              ],
              "parts": [
                "contacts",
                "{id}",
                "topics"
              ],
              "rename": {
                "param": {
                  "contact_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "contact_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "$action": "topics",
                "exist": [
                  "after",
                  "before",
                  "id",
                  "limit"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "create_batch_email": {
      "fields": [
        {
          "name": "data",
          "title": "Data",
          "type": "`$ARRAY`"
        }
      ],
      "name": "create_batch_email",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/emails/batch",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "batch"
                }
              ],
              "parts": [
                "emails",
                "batch"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "Idempotency-Key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "create_contact_import_response_success": {
      "fields": [],
      "name": "create_contact_import_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/contacts/imports",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "lit": "imports"
                }
              ],
              "parts": [
                "contacts",
                "imports"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "domain": {
      "fields": [
        {
          "name": "capabilities",
          "title": "Capabilities",
          "type": "`$OBJECT`",
          "short": "Configure the domain capabilities for sending and receiving emails."
        },
        {
          "name": "click_tracking",
          "title": "Click Tracking",
          "type": "`$BOOLEAN`",
          "short": "Whether click tracking is enabled for this domain."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the domain was created."
        },
        {
          "name": "custom_return_path",
          "title": "Custom Return Path",
          "type": "`$STRING`",
          "short": "For advanced use cases, choose a subdomain for the Return-Path address."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the domain."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the domain."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "open_tracking",
          "title": "Open Tracking",
          "type": "`$BOOLEAN`",
          "short": "Whether open tracking is enabled for this domain."
        },
        {
          "name": "records",
          "title": "Records",
          "type": "`$ARRAY`"
        },
        {
          "name": "region",
          "title": "Region",
          "type": "`$STRING`",
          "short": "The region where the domain is hosted."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The status of the domain."
        },
        {
          "name": "tls",
          "title": "Tls",
          "type": "`$STRING`",
          "short": "TLS mode."
        },
        {
          "name": "tracking_subdomain",
          "title": "Tracking Subdomain",
          "type": "`$STRING`",
          "short": "The subdomain used for click and open tracking."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "domain",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/domains/{domain_id}/verify",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "verify"
                }
              ],
              "parts": [
                "domains",
                "{id}",
                "verify"
              ],
              "rename": {
                "param": {
                  "domain_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "domain_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "verify",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/domains",
              "segments": [
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/domains",
              "segments": [
                {
                  "lit": "domains"
                }
              ],
              "parts": [
                "domains"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/domains/{domain_id}",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "domains",
                "{id}"
              ],
              "rename": {
                "param": {
                  "domain_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "domain_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/domains/{domain_id}",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "domains",
                "{id}"
              ],
              "rename": {
                "param": {
                  "domain_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "domain_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "domain_claim": {
      "fields": [
        {
          "name": "blocked_reason",
          "title": "Blocked Reason",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Why the claim is currently blocked, if applicable."
        },
        {
          "name": "click_tracking",
          "title": "Click Tracking",
          "type": "`$BOOLEAN`",
          "short": "Track clicks within the body of each HTML email."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the claim was created."
        },
        {
          "name": "custom_return_path",
          "title": "Custom Return Path",
          "type": "`$STRING`",
          "short": "For advanced use cases, choose a subdomain for the Return-Path address."
        },
        {
          "name": "domain_id",
          "title": "Domain Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The ID of the placeholder domain created for the claim."
        },
        {
          "name": "expires_at",
          "title": "Expires At",
          "type": "`$STRING`",
          "short": "The date and time the claim expires if not verified."
        },
        {
          "name": "failure_reason",
          "title": "Failure Reason",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Why the claim failed, if applicable."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the claim."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The name of the domain being claimed."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "open_tracking",
          "title": "Open Tracking",
          "type": "`$BOOLEAN`",
          "short": "Track the open rate of each email."
        },
        {
          "name": "record",
          "title": "Record",
          "type": "`$OBJECT`",
          "short": "The TXT record to add to your DNS to prove ownership of the claimed domain."
        },
        {
          "name": "region",
          "title": "Region",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The region where the claimed domain will send from."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The status of the claim."
        },
        {
          "name": "tracking_subdomain",
          "title": "Tracking Subdomain",
          "type": "`$STRING`",
          "short": "The subdomain to use for click and open tracking."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "domain_claim",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/domains/{domain_id}/claim/verify",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "var": "domain_id"
                },
                {
                  "lit": "claim"
                },
                {
                  "lit": "verify"
                }
              ],
              "parts": [
                "domains",
                "{domain_id}",
                "claim",
                "verify"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "domain_id",
                    "orig": "domain_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "domain_id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/domains/claim",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "lit": "claim"
                }
              ],
              "parts": [
                "domains",
                "claim"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/domains/{domain_id}/claim",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "claim"
                }
              ],
              "parts": [
                "domains",
                "{id}",
                "claim"
              ],
              "rename": {
                "param": {
                  "domain_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "domain_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.domain"
          ]
        ]
      }
    },
    "email": {
      "fields": [
        {
          "name": "attachments",
          "title": "Attachments",
          "type": "`$ARRAY`"
        },
        {
          "name": "bcc",
          "title": "Bcc",
          "type": "`$ARRAY`",
          "short": "The email addresses of the blind carbon copy recipients."
        },
        {
          "name": "cc",
          "title": "Cc",
          "type": "`$ARRAY`",
          "short": "The email addresses of the carbon copy recipients."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the email was created."
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The email address of the sender."
        },
        {
          "name": "headers",
          "title": "Headers",
          "type": "`$OBJECT`",
          "short": "Custom headers to add to the email."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML body of the email."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the email."
        },
        {
          "name": "last_event",
          "title": "Last Event",
          "type": "`$STRING`",
          "short": "The status of the email."
        },
        {
          "name": "message_id",
          "title": "Message Id",
          "type": "`$STRING`",
          "short": "The Message-ID header value of the email."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "The email addresses to which replies should be sent."
        },
        {
          "name": "scheduled_at",
          "title": "Scheduled At",
          "type": "`$STRING`",
          "short": "Schedule email to be sent later."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The subject line of the email."
        },
        {
          "name": "tags",
          "title": "Tags",
          "type": "`$ARRAY`"
        },
        {
          "name": "template",
          "title": "Template",
          "type": "`$ANY`"
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text body of the email."
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$ARRAY`",
          "op": {
            "create": {
              "req": true,
              "type": "`$ANY`"
            }
          },
          "short": "Recipient email address."
        },
        {
          "name": "topic_id",
          "title": "Topic Id",
          "type": "`$STRING`",
          "short": "The topic ID to scope the email to."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "email",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/emails/{email_id}/cancel",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "cancel"
                }
              ],
              "parts": [
                "emails",
                "{id}",
                "cancel"
              ],
              "rename": {
                "param": {
                  "email_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "cancel",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/emails/{email_id}/share",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "share"
                }
              ],
              "parts": [
                "emails",
                "{id}",
                "share"
              ],
              "rename": {
                "param": {
                  "email_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "share",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/emails",
              "segments": [
                {
                  "lit": "emails"
                }
              ],
              "parts": [
                "emails"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "header": [
                  {
                    "name": "idempotency_key",
                    "orig": "Idempotency-Key",
                    "type": "`$STRING`",
                    "kind": "header"
                  }
                ]
              },
              "select": {
                "exist": [
                  "idempotency_key"
                ]
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails",
              "segments": [
                {
                  "lit": "emails"
                }
              ],
              "parts": [
                "emails"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/{email_id}",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "emails",
                "{id}"
              ],
              "rename": {
                "param": {
                  "email_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "emails_metric": {
      "fields": [
        {
          "name": "broadcast_id",
          "title": "Broadcast Id",
          "type": "`$STRING`",
          "short": "Present when `broadcast` is in `dimensions`.",
          "format": "uuid"
        },
        {
          "name": "broadcast_name",
          "title": "Broadcast Name",
          "type": "`$STRING`",
          "short": "Present when `broadcast` is in `dimensions`."
        },
        {
          "name": "domain_id",
          "title": "Domain Id",
          "type": "`$STRING`",
          "short": "Present when `domain` is in `dimensions`.",
          "format": "uuid"
        },
        {
          "name": "domain_name",
          "title": "Domain Name",
          "type": "`$STRING`",
          "short": "Present when `domain` is in `dimensions`."
        },
        {
          "name": "email_id",
          "title": "Email Id",
          "type": "`$STRING`",
          "short": "Present when `email` is in `dimensions`.",
          "format": "uuid"
        },
        {
          "name": "period",
          "title": "Period",
          "type": "`$STRING`",
          "short": "Present when `period` is in `dimensions`."
        }
      ],
      "name": "emails_metric",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/metrics",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "metrics"
                }
              ],
              "parts": [
                "emails",
                "metrics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "query": [
                  {
                    "name": "broadcast_id",
                    "orig": "broadcast_id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "dimension",
                    "orig": "dimensions",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "domain_id",
                    "orig": "domain_id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "email_id",
                    "orig": "email_id",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "end_date",
                    "orig": "end_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "granularity",
                    "orig": "granularity",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "daily"
                  },
                  {
                    "name": "metric",
                    "orig": "metrics",
                    "type": "`$ARRAY`",
                    "kind": "query"
                  },
                  {
                    "name": "start_date",
                    "orig": "start_date",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "timezone",
                    "orig": "timezone",
                    "type": "`$STRING`",
                    "kind": "query",
                    "example": "UTC"
                  }
                ]
              },
              "select": {
                "exist": [
                  "broadcast_id",
                  "dimension",
                  "domain_id",
                  "email_id",
                  "end_date",
                  "granularity",
                  "metric",
                  "start_date",
                  "timezone"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "event": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the event was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The event ID.",
          "format": "uuid"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The event name."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "schema",
          "title": "Schema",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "short": "A flat key/type map defining the event payload schema."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The date and time the event was last updated."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "event",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/events",
              "segments": [
                {
                  "lit": "events"
                }
              ],
              "parts": [
                "events"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/events/send",
              "segments": [
                {
                  "lit": "events"
                },
                {
                  "lit": "send"
                }
              ],
              "parts": [
                "events",
                "send"
              ],
              "rename": {},
              "transform": {
                "req": {
                  "event": "`reqdata`"
                },
                "res": "`body`"
              },
              "args": {},
              "select": {
                "$action": "send"
              }
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/events",
              "segments": [
                {
                  "lit": "events"
                }
              ],
              "parts": [
                "events"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/events/{identifier}",
              "segments": [
                {
                  "lit": "events"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "events",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "list_attachment": {
      "fields": [
        {
          "name": "content_disposition",
          "title": "Content Disposition",
          "type": "`$STRING`",
          "short": "How the attachment should be displayed."
        },
        {
          "name": "content_id",
          "title": "Content Id",
          "type": "`$STRING`",
          "short": "The content ID for inline attachments."
        },
        {
          "name": "content_type",
          "title": "Content Type",
          "type": "`$STRING`",
          "short": "The MIME type of the attachment."
        },
        {
          "name": "download_url",
          "title": "Download Url",
          "type": "`$STRING`",
          "short": "Signed URL to download the attachment content."
        },
        {
          "name": "expires_at",
          "title": "Expires At",
          "type": "`$STRING`",
          "short": "Timestamp when the download URL expires.",
          "format": "date-time"
        },
        {
          "name": "filename",
          "title": "Filename",
          "type": "`$STRING`",
          "short": "The filename of the attachment."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the attachment.",
          "format": "uuid"
        },
        {
          "name": "size",
          "title": "Size",
          "type": "`$INTEGER`",
          "short": "Size of the attachment in bytes."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_attachment",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/{email_id}/attachments",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "email_id"
                },
                {
                  "lit": "attachments"
                }
              ],
              "parts": [
                "emails",
                "{email_id}",
                "attachments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "email_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "email_id",
                  "limit"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/receiving/{email_id}/attachments",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "receiving"
                },
                {
                  "var": "receiving_id"
                },
                {
                  "lit": "attachments"
                }
              ],
              "parts": [
                "emails",
                "receiving",
                "{receiving_id}",
                "attachments"
              ],
              "rename": {
                "param": {
                  "email_id": "receiving_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "receiving_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit",
                  "receiving_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.email"
          ]
        ]
      }
    },
    "list_broadcast_clicked_links_response_success": {
      "fields": [
        {
          "name": "clicks",
          "title": "Clicks",
          "type": "`$INTEGER`",
          "short": "Total number of clicks on this URL."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "An opaque cursor for this row, used only for pagination."
        },
        {
          "name": "unique_clicks",
          "title": "Unique Clicks",
          "type": "`$INTEGER`",
          "short": "Number of unique clicks on this URL."
        },
        {
          "name": "url",
          "title": "Url",
          "type": "`$STRING`",
          "short": "The URL that was clicked."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_broadcast_clicked_links_response_success",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/broadcasts/{id}/clicked-links",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "broadcast_id"
                },
                {
                  "lit": "clicked-links"
                }
              ],
              "parts": [
                "broadcasts",
                "{broadcast_id}",
                "clicked-links"
              ],
              "rename": {
                "param": {
                  "id": "broadcast_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "broadcast_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "broadcast_id",
                  "limit"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.broadcast"
          ]
        ]
      }
    },
    "list_broadcast_recipients_response_success": {
      "fields": [
        {
          "name": "bounce_type",
          "title": "Bounce Type",
          "type": "`$STRING`",
          "short": "The type of bounce."
        },
        {
          "name": "clicked_links",
          "title": "Clicked Links",
          "type": "`$ARRAY`",
          "short": "The links this recipient clicked."
        },
        {
          "name": "contact_id",
          "title": "Contact Id",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The ID of the contact associated with this recipient, if one exists."
        },
        {
          "name": "count",
          "title": "Count",
          "type": "`$INTEGER`",
          "short": "The number of times this recipient triggered the event."
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "short": "The recipient's email address."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Opaque cursor identifying this row, used for pagination."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_broadcast_recipients_response_success",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/broadcasts/{id}/recipients",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "broadcast_id"
                },
                {
                  "lit": "recipients"
                }
              ],
              "parts": [
                "broadcasts",
                "{broadcast_id}",
                "recipients"
              ],
              "rename": {
                "param": {
                  "id": "broadcast_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "broadcast_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "bounce_type",
                    "orig": "bounce_type",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "email",
                    "orig": "email",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "bounce_type",
                  "broadcast_id",
                  "email",
                  "limit",
                  "type"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.broadcast"
          ]
        ]
      }
    },
    "list_contact_segments_response_success": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the contact was added to the segment."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the segment."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the segment."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_contact_segments_response_success",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/contacts/{contact_id}/segments",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "contact_id"
                },
                {
                  "lit": "segments"
                }
              ],
              "parts": [
                "contacts",
                "{contact_id}",
                "segments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "contact_id",
                    "orig": "contact_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "contact_id",
                  "limit"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.contact"
          ]
        ]
      }
    },
    "list_contacts_response_success": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the contact was created."
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "short": "Email address of the contact."
        },
        {
          "name": "first_name",
          "title": "First Name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "First name of the contact."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the contact."
        },
        {
          "name": "last_name",
          "title": "Last Name",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Last name of the contact."
        },
        {
          "name": "unsubscribed",
          "title": "Unsubscribed",
          "type": "`$BOOLEAN`",
          "short": "Indicates if the contact is unsubscribed."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_contacts_response_success",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/segments/{id}/contacts",
              "segments": [
                {
                  "lit": "segments"
                },
                {
                  "var": "segment_id"
                },
                {
                  "lit": "contacts"
                }
              ],
              "parts": [
                "segments",
                "{segment_id}",
                "contacts"
              ],
              "rename": {
                "param": {
                  "id": "segment_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "segment_id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit",
                  "segment_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.segment"
          ]
        ]
      }
    },
    "list_received_email": {
      "fields": [
        {
          "name": "attachments",
          "title": "Attachments",
          "type": "`$ARRAY`",
          "short": "Array of attachments for this email."
        },
        {
          "name": "bcc",
          "title": "Bcc",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "The BCC recipients."
        },
        {
          "name": "cc",
          "title": "Cc",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "The CC recipients."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp when the email was received.",
          "format": "date-time"
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "The sender email address."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the received email.",
          "format": "uuid"
        },
        {
          "name": "message_id",
          "title": "Message Id",
          "type": "`$STRING`",
          "short": "The unique message ID from the email headers."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "The reply-to addresses."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The email subject."
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$ARRAY`",
          "short": "The recipient email addresses."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_received_email",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/receiving",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "receiving"
                }
              ],
              "parts": [
                "emails",
                "receiving"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "list_webhook_event": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the event was created.",
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the webhook event."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The delivery status of the event for this webhook."
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "The type of the event."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_webhook_event",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/webhooks/{webhook_id}/events",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "webhook_id"
                },
                {
                  "lit": "events"
                }
              ],
              "parts": [
                "webhooks",
                "{webhook_id}",
                "events"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "webhook_id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "limit",
                  "webhook_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.webhook"
          ]
        ]
      }
    },
    "list_webhook_event_attempt": {
      "fields": [
        {
          "name": "http_status_code",
          "title": "Http Status Code",
          "type": "`$INTEGER`",
          "short": "The HTTP status code returned by the webhook endpoint."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the webhook event attempt."
        },
        {
          "name": "response",
          "title": "Response",
          "type": "`$STRING`",
          "short": "The response body returned by the webhook endpoint."
        },
        {
          "name": "sent_at",
          "title": "Sent At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the attempt was sent.",
          "format": "date-time"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "list_webhook_event_attempt",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/webhooks/{webhook_id}/events/{event_id}/attempts",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "webhook_id"
                },
                {
                  "lit": "events"
                },
                {
                  "var": "event_id"
                },
                {
                  "lit": "attempts"
                }
              ],
              "parts": [
                "webhooks",
                "{webhook_id}",
                "events",
                "{event_id}",
                "attempts"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "params": [
                  {
                    "name": "event_id",
                    "orig": "event_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "webhook_id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ],
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "event_id",
                  "limit",
                  "webhook_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.webhook",
            "$.main.kit.entity.event"
          ]
        ]
      }
    },
    "log": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date the log was created."
        },
        {
          "name": "endpoint",
          "title": "Endpoint",
          "type": "`$STRING`",
          "short": "The API endpoint that was called."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The log ID.",
          "format": "uuid"
        },
        {
          "name": "method",
          "title": "Method",
          "type": "`$STRING`",
          "short": "The HTTP method used."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "request_body",
          "title": "Request Body",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "short": "The request body sent to the API."
        },
        {
          "name": "response_body",
          "title": "Response Body",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "short": "The response body returned by the API."
        },
        {
          "name": "response_status",
          "title": "Response Status",
          "type": "`$INTEGER`",
          "short": "The HTTP status code of the response."
        },
        {
          "name": "user_agent",
          "title": "User Agent",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The user agent of the request."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "log",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/logs",
              "segments": [
                {
                  "lit": "logs"
                }
              ],
              "parts": [
                "logs"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/logs/{log_id}",
              "segments": [
                {
                  "lit": "logs"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "logs",
                "{id}"
              ],
              "rename": {
                "param": {
                  "log_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "log_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "o_auth_grant": {
      "fields": [
        {
          "name": "client",
          "title": "Client",
          "type": "`$OBJECT`",
          "short": "The OAuth client the grant was issued to."
        },
        {
          "name": "client_id",
          "title": "Client Id",
          "type": "`$STRING`",
          "short": "The ID of the OAuth client the grant was issued to."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "The date and time the OAuth grant was created."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the OAuth grant."
        },
        {
          "name": "revoked_at",
          "title": "Revoked At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The date and time the OAuth grant was revoked, or null if it is still active."
        },
        {
          "name": "revoked_reason",
          "title": "Revoked Reason",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The reason the OAuth grant was revoked, or null if it is still active."
        },
        {
          "name": "scopes",
          "title": "Scopes",
          "type": "`$ARRAY`",
          "short": "The scopes granted to the OAuth client."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "o_auth_grant",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/oauth/grants",
              "segments": [
                {
                  "lit": "oauth"
                },
                {
                  "lit": "grants"
                }
              ],
              "parts": [
                "oauth",
                "grants"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "received_email": {
      "fields": [
        {
          "name": "attachments",
          "title": "Attachments",
          "type": "`$ARRAY`",
          "short": "Array of attachments."
        },
        {
          "name": "bcc",
          "title": "Bcc",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "The BCC recipients."
        },
        {
          "name": "cc",
          "title": "Cc",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "The CC recipients."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp when the email was received.",
          "format": "date-time"
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "The sender email address."
        },
        {
          "name": "headers",
          "title": "Headers",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "short": "The email headers."
        },
        {
          "name": "html",
          "title": "Html",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The HTML content of the email."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the received email.",
          "format": "uuid"
        },
        {
          "name": "message_id",
          "title": "Message Id",
          "type": "`$STRING`",
          "short": "The unique message ID from the email headers."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "received_for",
          "title": "Received For",
          "type": "`$ARRAY`",
          "short": "The recipient addresses the email was forwarded for, taken from the `for` clause of the message's `Received` headers."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "The reply-to addresses."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "The email subject."
        },
        {
          "name": "text",
          "title": "Text",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "The plain text content of the email."
        },
        {
          "name": "to",
          "title": "To",
          "type": "`$ARRAY`",
          "short": "The recipient email addresses."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "received_email",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/receiving/{email_id}",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "receiving"
                },
                {
                  "var": "email_id"
                }
              ],
              "parts": [
                "emails",
                "receiving",
                "{email_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "email_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "email_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_audience_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_audience_response_success",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/audiences/{id}",
              "segments": [
                {
                  "lit": "audiences"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "audiences",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_broadcast_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_broadcast_response_success",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/broadcasts/{id}",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "broadcasts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_contact_from_segment_response_success": {
      "fields": [],
      "name": "remove_contact_from_segment_response_success",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/contacts/{contact_id}/segments/{segment_id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "contact_id"
                },
                {
                  "lit": "segments"
                },
                {
                  "var": "segment_id"
                }
              ],
              "parts": [
                "contacts",
                "{contact_id}",
                "segments",
                "{segment_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "contact_id",
                    "orig": "contact_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "segment_id",
                    "orig": "segment_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "contact_id",
                  "segment_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.contact",
            "$.main.kit.entity.segment"
          ]
        ]
      }
    },
    "remove_contact_property_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_contact_property_response_success",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/contact-properties/{id}",
              "segments": [
                {
                  "lit": "contact-properties"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contact-properties",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_contact_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_contact_response_success",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/contacts/{id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contacts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_event": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_event",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/events/{identifier}",
              "segments": [
                {
                  "lit": "events"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "events",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_segment_response_success": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": "`$STRING`",
          "short": "The ID of the audience this segment belongs to.",
          "deprecated": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the segment was created."
        },
        {
          "name": "filter",
          "title": "Filter",
          "type": "`$OBJECT`",
          "short": "Filter conditions for the segment."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the segment."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "short": "The name of the segment."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_segment_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/segments",
              "segments": [
                {
                  "lit": "segments"
                }
              ],
              "parts": [
                "segments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/segments",
              "segments": [
                {
                  "lit": "segments"
                }
              ],
              "parts": [
                "segments"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/segments/{id}",
              "segments": [
                {
                  "lit": "segments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "segments",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_suppression_response_success": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the suppression was created."
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "short": "Email address to suppress."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the suppression."
        },
        {
          "name": "origin",
          "title": "Origin",
          "type": "`$STRING`",
          "short": "Origin of the suppression."
        },
        {
          "name": "source_id",
          "title": "Source Id",
          "type": "`$STRING`",
          "short": "Identifier of the event that caused the suppression, such as the email that bounced or complained."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_suppression_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/suppressions",
              "segments": [
                {
                  "lit": "suppressions"
                }
              ],
              "parts": [
                "suppressions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/suppressions",
              "segments": [
                {
                  "lit": "suppressions"
                }
              ],
              "parts": [
                "suppressions"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  },
                  {
                    "name": "origin",
                    "orig": "origin",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit",
                  "origin"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/suppressions/{suppression}",
              "segments": [
                {
                  "lit": "suppressions"
                },
                {
                  "var": "suppression"
                }
              ],
              "parts": [
                "suppressions",
                "{suppression}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "suppression",
                    "orig": "suppression",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "suppression"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.suppression"
          ]
        ]
      }
    },
    "remove_template_response_success": {
      "fields": [
        {
          "name": "alias",
          "title": "Alias",
          "type": "`$STRING`",
          "short": "The alias of the template."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the template was created."
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "Sender email address."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "req": true,
          "short": "The HTML version of the template."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the template."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "short": "The name of the template."
        },
        {
          "name": "published_at",
          "title": "Published At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Timestamp indicating when the template was published."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "Reply-to email addresses."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The publication status of the template."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "Email subject."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text version of the template."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the template was last updated."
        },
        {
          "name": "variables",
          "title": "Variables",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_template_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/templates",
              "segments": [
                {
                  "lit": "templates"
                }
              ],
              "parts": [
                "templates"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/templates",
              "segments": [
                {
                  "lit": "templates"
                }
              ],
              "parts": [
                "templates"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/templates/{id}",
              "segments": [
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "templates",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "remove_topic_response_success": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the topic was created."
        },
        {
          "name": "default_subscription",
          "title": "Default Subscription",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "short": "The default subscription status for the topic."
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "A description of the topic."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the topic."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            }
          },
          "short": "The name of the topic."
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "short": "The visibility of the topic."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "remove_topic_response_success",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/topics",
              "segments": [
                {
                  "lit": "topics"
                }
              ],
              "parts": [
                "topics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/topics",
              "segments": [
                {
                  "lit": "topics"
                }
              ],
              "parts": [
                "topics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/topics/{id}",
              "segments": [
                {
                  "lit": "topics"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "topics",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "retrieved_attachment": {
      "fields": [
        {
          "name": "content_disposition",
          "title": "Content Disposition",
          "type": "`$STRING`",
          "short": "How the attachment should be displayed."
        },
        {
          "name": "content_id",
          "title": "Content Id",
          "type": "`$STRING`",
          "short": "The content ID for inline attachments."
        },
        {
          "name": "content_type",
          "title": "Content Type",
          "type": "`$STRING`",
          "short": "The MIME type of the attachment."
        },
        {
          "name": "download_url",
          "title": "Download Url",
          "type": "`$STRING`",
          "short": "Signed URL to download the attachment content."
        },
        {
          "name": "expires_at",
          "title": "Expires At",
          "type": "`$STRING`",
          "short": "Timestamp when the download URL expires.",
          "format": "date-time"
        },
        {
          "name": "filename",
          "title": "Filename",
          "type": "`$STRING`",
          "short": "The filename of the attachment."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the attachment.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "size",
          "title": "Size",
          "type": "`$INTEGER`",
          "short": "Size of the attachment in bytes."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "retrieved_attachment",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/{email_id}/attachments/{attachment_id}",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "email_id"
                },
                {
                  "lit": "attachments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "emails",
                "{email_id}",
                "attachments",
                "{id}"
              ],
              "rename": {
                "param": {
                  "attachment_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "email_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "id",
                    "orig": "attachment_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "email_id",
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "GET",
              "orig": "/emails/receiving/{email_id}/attachments/{attachment_id}",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "lit": "receiving"
                },
                {
                  "var": "receiving_id"
                },
                {
                  "lit": "attachments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "emails",
                "receiving",
                "{receiving_id}",
                "attachments",
                "{id}"
              ],
              "rename": {
                "param": {
                  "attachment_id": "id",
                  "email_id": "receiving_id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "attachment_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "receiving_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "receiving_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.email"
          ]
        ]
      }
    },
    "revoke_o_auth_grant": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "revoke_o_auth_grant",
      "op": {
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/oauth/grants/{oauth_grant_id}",
              "segments": [
                {
                  "lit": "oauth"
                },
                {
                  "lit": "grants"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "oauth",
                "grants",
                "{id}"
              ],
              "rename": {
                "param": {
                  "oauth_grant_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "oauth_grant_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "rotate": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the webhook.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "signing_secret",
          "title": "Signing Secret",
          "type": "`$STRING`",
          "short": "The new secret key used to verify webhook payloads."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "rotate",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/webhooks/{webhook_id}/signing-secret/rotate",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "webhook_id"
                },
                {
                  "lit": "signing-secret"
                },
                {
                  "lit": "rotate"
                }
              ],
              "parts": [
                "webhooks",
                "{webhook_id}",
                "signing-secret",
                "rotate"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "webhook_id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "webhook_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.webhook"
          ]
        ]
      }
    },
    "segment": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": "`$STRING`",
          "short": "The ID of the audience this segment belongs to.",
          "deprecated": true
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the segment was created."
        },
        {
          "name": "filter",
          "title": "Filter",
          "type": "`$OBJECT`",
          "short": "Filter conditions for the segment."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the segment."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the segment."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "segment",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/segments/{id}",
              "segments": [
                {
                  "lit": "segments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "segments",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "suppression": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the suppression was created."
        },
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "short": "Email address that is suppressed."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the suppression."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "origin",
          "title": "Origin",
          "type": "`$STRING`",
          "short": "Origin of the suppression."
        },
        {
          "name": "source_id",
          "title": "Source Id",
          "type": "`$STRING`",
          "short": "Identifier of the event that caused the suppression, such as the email that bounced or complained."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "suppression",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/suppressions/{suppression}",
              "segments": [
                {
                  "lit": "suppressions"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "suppressions",
                "{id}"
              ],
              "rename": {
                "param": {
                  "suppression": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "suppression",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "template": {
      "fields": [
        {
          "name": "alias",
          "title": "Alias",
          "type": "`$STRING`",
          "short": "The alias of the template."
        },
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the template was created."
        },
        {
          "name": "current_version_id",
          "title": "Current Version Id",
          "type": "`$STRING`",
          "short": "The ID of the current version of the template."
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "Sender email address."
        },
        {
          "name": "has_unpublished_versions",
          "title": "Has Unpublished Versions",
          "type": "`$BOOLEAN`",
          "short": "Indicates whether the template has unpublished versions."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML version of the template."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the template."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the template."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "published_at",
          "title": "Published At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Timestamp indicating when the template was published."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Reply-to email addresses."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The publication status of the template."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "Email subject."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text version of the template."
        },
        {
          "name": "updated_at",
          "title": "Updated At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the template was last updated."
        },
        {
          "name": "variables",
          "title": "Variables",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "template",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/templates/{id}/duplicate",
              "segments": [
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "duplicate"
                }
              ],
              "parts": [
                "templates",
                "{id}",
                "duplicate"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "duplicate",
                "exist": [
                  "id"
                ]
              }
            },
            {
              "kind": "http",
              "method": "POST",
              "orig": "/templates/{id}/publish",
              "segments": [
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                },
                {
                  "lit": "publish"
                }
              ],
              "parts": [
                "templates",
                "{id}",
                "publish"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "publish",
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/templates/{id}",
              "segments": [
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "templates",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "topic": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the topic was created."
        },
        {
          "name": "default_subscription",
          "title": "Default Subscription",
          "type": "`$STRING`",
          "short": "The default subscription status for the topic."
        },
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "A description of the topic."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the topic."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the topic."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "short": "The visibility of the topic."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "topic",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/topics/{id}",
              "segments": [
                {
                  "lit": "topics"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "topics",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_api_key": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the API key."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The API key name."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_api_key",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/api-keys/{api_key_id}",
              "segments": [
                {
                  "lit": "api-keys"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "api-keys",
                "{id}"
              ],
              "rename": {
                "param": {
                  "api_key_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "api_key_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_broadcast_response_success": {
      "fields": [
        {
          "name": "audience_id",
          "title": "Audience Id",
          "type": "`$STRING`",
          "short": "Use `segment_id` instead.",
          "deprecated": true
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "The email address of the sender."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML version of the message."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the broadcast."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the broadcast."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type of the response."
        },
        {
          "name": "preview_text",
          "title": "Preview Text",
          "type": "`$STRING`",
          "short": "The preview text of the email."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "The email addresses to which replies should be sent."
        },
        {
          "name": "segment_id",
          "title": "Segment Id",
          "type": "`$STRING`",
          "short": "Unique identifier of the segment this broadcast will be sent to."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "The subject line of the email."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text version of the message."
        },
        {
          "name": "topic_id",
          "title": "Topic Id",
          "type": "`$STRING`",
          "short": "The topic ID that the broadcast will be scoped to."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_broadcast_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/broadcasts/{id}",
              "segments": [
                {
                  "lit": "broadcasts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "broadcasts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_contact_property_response_success": {
      "fields": [
        {
          "name": "fallback_value",
          "title": "Fallback Value",
          "type": "`$ANY`",
          "short": "The default value to use when the property is not set for a contact."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the contact property."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_contact_property_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/contact-properties/{id}",
              "segments": [
                {
                  "lit": "contact-properties"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contact-properties",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_contact_response_success": {
      "fields": [
        {
          "name": "email",
          "title": "Email",
          "type": "`$STRING`",
          "short": "Email address of the contact."
        },
        {
          "name": "first_name",
          "title": "First Name",
          "type": "`$STRING`",
          "short": "First name of the contact."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "Unique identifier for the updated contact."
        },
        {
          "name": "last_name",
          "title": "Last Name",
          "type": "`$STRING`",
          "short": "Last name of the contact."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "properties",
          "title": "Properties",
          "type": "`$OBJECT`",
          "short": "A map of custom property keys and values to update."
        },
        {
          "name": "unsubscribed",
          "title": "Unsubscribed",
          "type": "`$BOOLEAN`",
          "short": "The Contact's global subscription status."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_contact_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/contacts/{id}",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "contacts",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_contact_topics_response_success": {
      "fields": [
        {
          "name": "contact_id",
          "title": "Contact Id",
          "type": "`$STRING`",
          "short": "The ID of the contact."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        },
        {
          "name": "topics",
          "title": "Topics",
          "type": "`$ARRAY`",
          "op": {
            "update": {
              "req": true,
              "type": "`$ARRAY`"
            }
          },
          "short": "Array of updated topic subscriptions."
        }
      ],
      "name": "update_contact_topics_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/contacts/{contact_id}/topics",
              "segments": [
                {
                  "lit": "contacts"
                },
                {
                  "var": "contact_id"
                },
                {
                  "lit": "topics"
                }
              ],
              "parts": [
                "contacts",
                "{contact_id}",
                "topics"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "contact_id",
                    "orig": "contact_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "contact_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.contact"
          ]
        ]
      }
    },
    "update_domain_response_success": {
      "fields": [
        {
          "name": "capabilities",
          "title": "Capabilities",
          "type": "`$OBJECT`",
          "short": "Configure the domain capabilities for sending and receiving emails."
        },
        {
          "name": "click_tracking",
          "title": "Click Tracking",
          "type": "`$BOOLEAN`",
          "short": "Track clicks within the body of each HTML email."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the updated domain."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type representing the updated domain."
        },
        {
          "name": "open_tracking",
          "title": "Open Tracking",
          "type": "`$BOOLEAN`",
          "short": "Track the open rate of each email."
        },
        {
          "name": "tls",
          "title": "Tls",
          "type": "`$STRING`",
          "short": "enforced | opportunistic."
        },
        {
          "name": "tracking_subdomain",
          "title": "Tracking Subdomain",
          "type": "`$STRING`",
          "short": "The subdomain to use for click and open tracking."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_domain_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/domains/{domain_id}",
              "segments": [
                {
                  "lit": "domains"
                },
                {
                  "var": "domain_id"
                }
              ],
              "parts": [
                "domains",
                "{domain_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "domain_id",
                    "orig": "domain_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "domain_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.domain"
          ]
        ]
      }
    },
    "update_email_option": {
      "fields": [
        {
          "name": "scheduled_at",
          "title": "Scheduled At",
          "type": "`$STRING`",
          "short": "Schedule email to be sent later."
        }
      ],
      "name": "update_email_option",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/emails/{email_id}",
              "segments": [
                {
                  "lit": "emails"
                },
                {
                  "var": "email_id"
                }
              ],
              "parts": [
                "emails",
                "{email_id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "email_id",
                    "orig": "email_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "email_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.email"
          ]
        ]
      }
    },
    "update_event": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the updated event.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "Type of the response object."
        },
        {
          "name": "schema",
          "title": "Schema",
          "type": [
            "`$ONE`",
            [
              "`$OBJECT`",
              "`$NULL`"
            ]
          ],
          "req": true,
          "short": "A flat key/type map defining the event payload schema."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_event",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/events/{identifier}",
              "segments": [
                {
                  "lit": "events"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "events",
                "{id}"
              ],
              "rename": {
                "param": {
                  "identifier": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "identifier",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_segment_response_success": {
      "fields": [
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the segment."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "req": true,
          "short": "The name of the segment."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_segment_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/segments/{id}",
              "segments": [
                {
                  "lit": "segments"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "segments",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_template_response_success": {
      "fields": [
        {
          "name": "alias",
          "title": "Alias",
          "type": "`$STRING`",
          "short": "The alias of the template."
        },
        {
          "name": "from",
          "title": "From",
          "type": "`$STRING`",
          "short": "Sender email address."
        },
        {
          "name": "html",
          "title": "Html",
          "type": "`$STRING`",
          "short": "The HTML version of the template."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the template."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the template."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type of the response."
        },
        {
          "name": "reply_to",
          "title": "Reply To",
          "type": "`$ARRAY`",
          "short": "Reply-to email addresses."
        },
        {
          "name": "subject",
          "title": "Subject",
          "type": "`$STRING`",
          "short": "Email subject."
        },
        {
          "name": "text",
          "title": "Text",
          "type": "`$STRING`",
          "short": "The plain text version of the template."
        },
        {
          "name": "variables",
          "title": "Variables",
          "type": "`$ARRAY`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_template_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/templates/{id}",
              "segments": [
                {
                  "lit": "templates"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "templates",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_topic_response_success": {
      "fields": [
        {
          "name": "description",
          "title": "Description",
          "type": "`$STRING`",
          "short": "A description of the topic."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the topic."
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the topic."
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The object type."
        },
        {
          "name": "visibility",
          "title": "Visibility",
          "type": "`$STRING`",
          "short": "The visibility of the topic."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_topic_response_success",
      "op": {
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/topics/{id}",
              "segments": [
                {
                  "lit": "topics"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "topics",
                "{id}"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "update_webhook": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the webhook was created."
        },
        {
          "name": "endpoint",
          "title": "Endpoint",
          "type": "`$STRING`",
          "req": true,
          "op": {
            "list": {
              "type": "`$STRING`"
            },
            "update": {
              "type": "`$STRING`"
            }
          },
          "short": "The URL where webhook events will be sent."
        },
        {
          "name": "events",
          "title": "Events",
          "type": "`$ARRAY`",
          "req": true,
          "op": {
            "list": {
              "type": [
                "`$ONE`",
                [
                  "`$ARRAY`",
                  "`$NULL`"
                ]
              ]
            },
            "update": {
              "type": "`$ARRAY`"
            }
          },
          "short": "Array of event types to subscribe to."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the updated webhook.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The status of the webhook."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "update_webhook",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/webhooks",
              "segments": [
                {
                  "lit": "webhooks"
                }
              ],
              "parts": [
                "webhooks"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/webhooks",
              "segments": [
                {
                  "lit": "webhooks"
                }
              ],
              "parts": [
                "webhooks"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "args": {
                "query": [
                  {
                    "name": "after",
                    "orig": "after",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "before",
                    "orig": "before",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "limit",
                    "orig": "limit",
                    "type": "`$INTEGER`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "after",
                  "before",
                  "limit"
                ]
              }
            }
          ]
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "kind": "http",
              "method": "PATCH",
              "orig": "/webhooks/{webhook_id}",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "webhooks",
                "{id}"
              ],
              "rename": {
                "param": {
                  "webhook_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "usage": {
      "fields": [
        {
          "name": "ai_credits",
          "title": "Ai Credits",
          "type": "`$OBJECT`"
        },
        {
          "name": "automation_runs",
          "title": "Automation Runs",
          "type": "`$OBJECT`"
        },
        {
          "name": "broadcasts",
          "title": "Broadcasts",
          "type": "`$OBJECT`"
        },
        {
          "name": "contacts",
          "title": "Contacts",
          "type": "`$OBJECT`"
        },
        {
          "name": "domains",
          "title": "Domains",
          "type": "`$OBJECT`"
        },
        {
          "name": "emails",
          "title": "Emails",
          "type": "`$OBJECT`"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "rate_limit",
          "title": "Rate Limit",
          "type": "`$OBJECT`"
        },
        {
          "name": "segments",
          "title": "Segments",
          "type": "`$OBJECT`"
        }
      ],
      "name": "usage",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/usage",
              "segments": [
                {
                  "lit": "usage"
                }
              ],
              "parts": [
                "usage"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "webhook": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the webhook was created."
        },
        {
          "name": "endpoint",
          "title": "Endpoint",
          "type": "`$STRING`",
          "short": "The URL where webhook events are sent."
        },
        {
          "name": "events",
          "title": "Events",
          "type": [
            "`$ONE`",
            [
              "`$ARRAY`",
              "`$NULL`"
            ]
          ],
          "short": "Array of event types subscribed to."
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the webhook.",
          "format": "uuid"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "signing_secret",
          "title": "Signing Secret",
          "type": "`$STRING`",
          "short": "The secret key used to verify webhook payloads."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The status of the webhook."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "webhook",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/webhooks/{webhook_id}",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "webhooks",
                "{id}"
              ],
              "rename": {
                "param": {
                  "webhook_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "kind": "http",
              "method": "DELETE",
              "orig": "/webhooks/{webhook_id}",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "webhooks",
                "{id}"
              ],
              "rename": {
                "param": {
                  "webhook_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "webhook_event": {
      "fields": [
        {
          "name": "created_at",
          "title": "Created At",
          "type": "`$STRING`",
          "short": "Timestamp indicating when the event was created.",
          "format": "date-time"
        },
        {
          "name": "id",
          "title": "Id",
          "type": "`$STRING`",
          "short": "The ID of the webhook event."
        },
        {
          "name": "next_attempt_at",
          "title": "Next Attempt At",
          "type": [
            "`$ONE`",
            [
              "`$STRING`",
              "`$NULL`"
            ]
          ],
          "short": "Timestamp of the next scheduled delivery attempt, or null when none is scheduled.",
          "format": "date-time"
        },
        {
          "name": "object",
          "title": "Object",
          "type": "`$STRING`",
          "short": "The type of object."
        },
        {
          "name": "payload",
          "title": "Payload",
          "type": "`$OBJECT`",
          "short": "The event payload sent to the webhook endpoint."
        },
        {
          "name": "status",
          "title": "Status",
          "type": "`$STRING`",
          "short": "The delivery status of the event for this webhook."
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "The type of the event."
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "webhook_event",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "kind": "http",
              "method": "POST",
              "orig": "/webhooks/{webhook_id}/events/{event_id}/replay",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "webhook_id"
                },
                {
                  "lit": "events"
                },
                {
                  "var": "event_id"
                },
                {
                  "lit": "replay"
                }
              ],
              "parts": [
                "webhooks",
                "{webhook_id}",
                "events",
                "{event_id}",
                "replay"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "event_id",
                    "orig": "event_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "webhook_id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "$action": "replay",
                "exist": [
                  "event_id",
                  "webhook_id"
                ]
              }
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/webhooks/{webhook_id}/events/{event_id}",
              "segments": [
                {
                  "lit": "webhooks"
                },
                {
                  "var": "webhook_id"
                },
                {
                  "lit": "events"
                },
                {
                  "var": "id"
                }
              ],
              "parts": [
                "webhooks",
                "{webhook_id}",
                "events",
                "{id}"
              ],
              "rename": {
                "param": {
                  "event_id": "id"
                }
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "args": {
                "params": [
                  {
                    "name": "id",
                    "orig": "event_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  },
                  {
                    "name": "webhook_id",
                    "orig": "webhook_id",
                    "type": "`$STRING`",
                    "kind": "param",
                    "reqd": true
                  }
                ]
              },
              "select": {
                "exist": [
                  "id",
                  "webhook_id"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": [
          [
            "$.main.kit.entity.webhook"
          ],
          [
            "$.main.kit.entity.webhook",
            "$.main.kit.entity.event"
          ]
        ]
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

