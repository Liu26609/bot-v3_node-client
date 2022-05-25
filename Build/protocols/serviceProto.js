"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceProto = void 0;
exports.serviceProto = {
    "version": 31,
    "services": [
        {
            "id": 13,
            "name": "AddOneWord",
            "type": "api"
        },
        {
            "id": 21,
            "name": "Bag",
            "type": "api"
        },
        {
            "id": 10,
            "name": "Battle",
            "type": "api"
        },
        {
            "id": 8,
            "name": "Hello",
            "type": "api"
        },
        {
            "id": 11,
            "name": "Me_Attribute",
            "type": "api"
        },
        {
            "id": 18,
            "name": "Me_changeName",
            "type": "api"
        },
        {
            "id": 22,
            "name": "Me_lookBag",
            "type": "api"
        },
        {
            "id": 17,
            "name": "Me_wallet",
            "type": "api"
        },
        {
            "id": 23,
            "name": "Me_wearEquip",
            "type": "api"
        },
        {
            "id": 14,
            "name": "Move",
            "type": "api",
            "conf": {
                "direction": {
                    "top": 1,
                    "right": 2,
                    "buttom": 3,
                    "left": 4
                }
            }
        },
        {
            "id": 19,
            "name": "OpenMapChestBox",
            "type": "api"
        },
        {
            "id": 12,
            "name": "Pos",
            "type": "api"
        },
        {
            "id": 16,
            "name": "PosAttackEnemy",
            "type": "api"
        },
        {
            "id": 15,
            "name": "PosAttackPlayer",
            "type": "api"
        },
        {
            "id": 9,
            "name": "Sign",
            "type": "api"
        }
    ],
    "types": {
        "PtlAddOneWord/ReqAddOneWord": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "text",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlAddOneWord/ResAddOneWord": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "creatorId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlBag/ReqBag": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlBag/ResBag": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "bag",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/equip/equip"
                        }
                    }
                }
            ]
        },
        "../game/equip/equip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "icon",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "story",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 4,
                    "name": "quality",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/EQUIP_QUALITY"
                    }
                },
                {
                    "id": 5,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/EQUIP_TYPE"
                    }
                },
                {
                    "id": 6,
                    "name": "leve",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "base_attribute",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                },
                {
                    "id": 8,
                    "name": "effect",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "type",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/equip/EQUIP_EFFECT"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "val",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "trigger",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    },
                    "optional": true
                }
            ]
        },
        "../game/equip/EQUIP_QUALITY": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                }
            ]
        },
        "../game/equip/EQUIP_TYPE": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                }
            ]
        },
        "../game/body/base_attribute": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "hp_max",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "MagicAttack",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "PhysicalAttacks",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "MagicDefense",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "PhysicalDefense",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "secondResHp",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/equip/EQUIP_EFFECT": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                }
            ]
        },
        "PtlBattle/ReqBattle": {
            "type": "Interface"
        },
        "PtlBattle/ResBattle": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "battleRound",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 0,
                    "name": "log",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "id",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "name",
                                    "type": {
                                        "type": "String"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "group",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 3,
                                    "name": "list",
                                    "type": {
                                        "type": "Array",
                                        "elementType": {
                                            "type": "Reference",
                                            "target": "../game/skill/SKILL_RES"
                                        }
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 1,
                    "name": "kill_log",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "round",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 5,
                                    "name": "body",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/body/BASE_BODYS"
                                    }
                                },
                                {
                                    "id": 6,
                                    "name": "die_body",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/body/BASE_BODYS"
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    "id": 3,
                    "name": "reward",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "key",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/prop/rewardKey"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "val",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "../game/skill/SKILL_RES": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE_RES_TYPE"
                    }
                },
                {
                    "id": 3,
                    "name": "val",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "tag",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE_RES_TAG"
                    }
                },
                {
                    "id": 5,
                    "name": "unit",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_UNITY"
                    }
                }
            ]
        },
        "../game/skill/SKILL_ACTIVE_RES_TYPE": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                }
            ]
        },
        "../game/skill/SKILL_ACTIVE_RES_TAG": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                },
                {
                    "id": 10,
                    "value": 10
                },
                {
                    "id": 11,
                    "value": 11
                },
                {
                    "id": 12,
                    "value": 12
                }
            ]
        },
        "../game/skill/SKILL_UNITY": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                }
            ]
        },
        "../game/body/BASE_BODYS": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/bodyType"
                    }
                },
                {
                    "id": 2,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "leve",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "hp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "active_skill",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "out_attribute",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                },
                {
                    "id": 7,
                    "name": "pos",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/posV2"
                    }
                }
            ]
        },
        "../game/body/bodyType": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                }
            ]
        },
        "../game/body/posV2": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/prop/rewardKey": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                }
            ]
        },
        "PtlHello/ReqHello": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlHello/ResHello": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "reply",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "time",
                    "type": {
                        "type": "Date"
                    }
                }
            ]
        },
        "PtlMe_Attribute/ReqMe_Attribute": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_Attribute/ResMe_Attribute": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "body",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/body"
                    }
                }
            ]
        },
        "../game/body/body": {
            "type": "Interface",
            "extends": [
                {
                    "id": 2,
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/BASE_BODYS"
                    }
                }
            ],
            "properties": [
                {
                    "id": 4,
                    "name": "exp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "exp_max",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "sys",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "creator_time",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 9,
                    "name": "equip",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "weapons",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 10,
                    "name": "title",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "name",
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "name": "randomCont",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "attribute",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/body/base_attribute"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 12,
                    "name": "sign",
                    "type": {
                        "type": "Reference",
                        "target": "../game/user/USER_SIGN"
                    }
                },
                {
                    "id": 13,
                    "name": "wallet",
                    "type": {
                        "type": "Reference",
                        "target": "../game/user/USER_wallet"
                    }
                },
                {
                    "id": 14,
                    "name": "bag",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "../game/user/USER_SIGN": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "cont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "lastSignTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "coiledCont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "signLog",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "../game/user/USER_wallet": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "gold",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "titleCard",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "BlindBox",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "changeNameCard",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "skillCard",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "transferCard",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_changeName/ReqMe_changeName": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "changeName",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_changeName/ResMe_changeName": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "state",
                                "type": {
                                    "type": "Boolean"
                                }
                            },
                            {
                                "id": 1,
                                "name": "condition",
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "key",
                                            "type": {
                                                "type": "Reference",
                                                "target": "../game/prop/rewardKey"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "val",
                                            "type": {
                                                "type": "Number"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 2,
                                "name": "now",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "lastName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "newName",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_lookBag/ReqMe_lookBag": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "lookId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_lookBag/ResMe_lookBag": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/equip"
                    }
                }
            ]
        },
        "PtlMe_wallet/ReqMe_wallet": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_wallet/ResMe_wallet": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/user/USER_wallet"
                    }
                }
            ]
        },
        "PtlMe_wearEquip/ReqMe_wearEquip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "wearIndex",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_wearEquip/ResMe_wearEquip": {
            "type": "Interface"
        },
        "PtlMove/ReqMove": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "direction",
                    "type": {
                        "type": "Reference",
                        "target": "PtlMove/moveDirection"
                    }
                }
            ]
        },
        "PtlMove/moveDirection": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                }
            ]
        },
        "PtlMove/ResMove": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pos_name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "pos",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/posV2"
                    }
                },
                {
                    "id": 2,
                    "name": "isTop",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 3,
                    "name": "isButtom",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 4,
                    "name": "isRight",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 5,
                    "name": "isLeft",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 6,
                    "name": "player",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/body/body"
                        }
                    }
                }
            ]
        },
        "PtlOpenMapChestBox/ReqOpenMapChestBox": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "openIndex",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlOpenMapChestBox/ResOpenMapChestBox": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "reward",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Interface",
                            "properties": [
                                {
                                    "id": 0,
                                    "name": "key",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/prop/rewardKey"
                                    }
                                },
                                {
                                    "id": 1,
                                    "name": "val",
                                    "type": {
                                        "type": "Number"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        },
        "PtlPos/ReqPos": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlPos/ResPos": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "pos_name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 0,
                    "name": "pos",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/posV2"
                    }
                },
                {
                    "id": 2,
                    "name": "isTop",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 3,
                    "name": "isButtom",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 4,
                    "name": "isRight",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 5,
                    "name": "isLeft",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 7,
                    "name": "enemy",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/body/BASE_BODYS"
                        }
                    }
                },
                {
                    "id": 6,
                    "name": "player",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/body/body"
                        }
                    }
                },
                {
                    "id": 8,
                    "name": "chest",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/prop/chestBox"
                        }
                    }
                }
            ]
        },
        "../game/prop/chestBox": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "leve",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/chestBoxLv"
                    }
                },
                {
                    "id": 1,
                    "name": "isOpen",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "../game/prop/chestBoxLv": {
            "type": "Enum",
            "members": [
                {
                    "id": 0,
                    "value": 0
                },
                {
                    "id": 1,
                    "value": 1
                },
                {
                    "id": 2,
                    "value": 2
                },
                {
                    "id": 3,
                    "value": 3
                },
                {
                    "id": 4,
                    "value": 4
                },
                {
                    "id": 5,
                    "value": 5
                },
                {
                    "id": 6,
                    "value": 6
                },
                {
                    "id": 7,
                    "value": 7
                },
                {
                    "id": 8,
                    "value": 8
                },
                {
                    "id": 9,
                    "value": 9
                }
            ]
        },
        "PtlPosAttackEnemy/ReqPosAttackEnemy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "attackId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlPosAttackEnemy/ResPosAttackEnemy": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "PtlBattle/ResBattle"
                    }
                }
            ]
        },
        "PtlPosAttackPlayer/ReqPosAttackPlayer": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "attackId",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlPosAttackPlayer/ResPosAttackPlayer": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "PtlBattle/ResBattle"
                    }
                }
            ]
        },
        "PtlSign/ReqSign": {
            "type": "Interface",
            "properties": [
                {
                    "id": 1,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSign/ResSign": {
            "type": "Interface",
            "properties": [
                {
                    "id": 2,
                    "name": "isRepeat",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 6,
                    "name": "cont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "oneWord",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 5,
                    "name": "lastSignTime",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        }
    }
};