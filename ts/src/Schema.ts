// Resend Ts SDK: generated schemas. Do not edit.
//
// Generated from the model: `main.kit.optspec` and each feature's
// `config.options` for OPTSPEC; entity `fields{}.type` for ENTITYSPEC.

const OPTSPEC = {
  "allow": {
    "method": "GET,PUT,POST,PATCH,DELETE,OPTIONS",
    "op": "create,update,load,list,remove,command,direct,graphql"
  },
  "apikey": "",
  "auth": {
    "basic": false,
    "in": "",
    "name": "",
    "prefix": ""
  },
  "base": "http://localhost:8000",
  "clean": {
    "keys": "key,token,id"
  },
  "entity": {
    "`$CHILD`": {
      "`$OPEN`": true,
      "active": false,
      "alias": {}
    }
  },
  "extend": "`$ANY`",
  "headers": {
    "`$CHILD`": "`$STRING`"
  },
  "prefix": "",
  "secret": "",
  "server": {
    "`$CHILD`": ""
  },
  "suffix": "",
  "system": {
    "fetch": "`$ANY`"
  },
  "test": {
    "active": false,
    "entity": {
      "`$OPEN`": true
    }
  },
  "utility": {},
  "feature": {
    "`$CHILD`": {
      "`$OPEN`": true,
      "active": false
    },
    "test": [
      "`$ONE`",
      {
        "`$OPEN`": true,
        "active": [
          "`$ONE`",
          "`$BOOLEAN`",
          "`$NIL`"
        ],
        "entity": [
          "`$ONE`",
          "`$MAP`",
          "`$NIL`"
        ],
        "net": [
          "`$ONE`",
          "`$MAP`",
          "`$NIL`"
        ]
      },
      "`$NIL`"
    ]
  }
}

const ENTITYSPEC = {}

export {
  OPTSPEC,
  ENTITYSPEC,
}
