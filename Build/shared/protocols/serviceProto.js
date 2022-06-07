"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceProto = void 0;
exports.serviceProto = {
    "version": 10,
    "services": [
        {
            "id": 0,
            "name": "ancestry/Me_Ancestry",
            "type": "api"
        },
        {
            "id": 1,
            "name": "ancestry/Me_randomAncestry",
            "type": "api"
        },
        {
            "id": 2,
            "name": "auction/Auction_look",
            "type": "api"
        },
        {
            "id": 3,
            "name": "auction/Auction_offer",
            "type": "api"
        },
        {
            "id": 4,
            "name": "auction/Auction",
            "type": "api"
        },
        {
            "id": 5,
            "name": "battle/AttackBoss",
            "type": "api"
        },
        {
            "id": 61,
            "name": "battle/PkRank",
            "type": "api"
        },
        {
            "id": 49,
            "name": "battle/PosAttackEnemy",
            "type": "api"
        },
        {
            "id": 50,
            "name": "battle/Rank",
            "type": "api"
        },
        {
            "id": 6,
            "name": "map/Docile",
            "type": "api"
        },
        {
            "id": 7,
            "name": "map/fishing",
            "type": "api"
        },
        {
            "id": 8,
            "name": "map/OpenMapChestBox",
            "type": "api"
        },
        {
            "id": 62,
            "name": "me/EverDayTask",
            "type": "api"
        },
        {
            "id": 9,
            "name": "CallAll",
            "type": "msg"
        },
        {
            "id": 10,
            "name": "CallAppoint",
            "type": "msg"
        },
        {
            "id": 11,
            "name": "pet/Me_pet",
            "type": "api"
        },
        {
            "id": 12,
            "name": "pet/Me_petChangeName",
            "type": "api"
        },
        {
            "id": 13,
            "name": "pet/Me_petLook",
            "type": "api"
        },
        {
            "id": 14,
            "name": "pet/Me_petRm",
            "type": "api"
        },
        {
            "id": 15,
            "name": "AddOneWord",
            "type": "api"
        },
        {
            "id": 16,
            "name": "Bag",
            "type": "api"
        },
        {
            "id": 17,
            "name": "Battle",
            "type": "api"
        },
        {
            "id": 18,
            "name": "GetUserSetUp",
            "type": "api"
        },
        {
            "id": 19,
            "name": "Hello",
            "type": "api"
        },
        {
            "id": 20,
            "name": "Me_Attribute",
            "type": "api"
        },
        {
            "id": 21,
            "name": "Me_callPos",
            "type": "api"
        },
        {
            "id": 22,
            "name": "Me_changeName",
            "type": "api"
        },
        {
            "id": 23,
            "name": "Me_destroyBagEquip",
            "type": "api"
        },
        {
            "id": 24,
            "name": "Me_destroyMeSkill",
            "type": "api"
        },
        {
            "id": 25,
            "name": "Me_equip",
            "type": "api"
        },
        {
            "id": 26,
            "name": "Me_lookBag",
            "type": "api"
        },
        {
            "id": 27,
            "name": "Me_openBlindBox",
            "type": "api"
        },
        {
            "id": 28,
            "name": "Me_setUp",
            "type": "api"
        },
        {
            "id": 29,
            "name": "Me_skill",
            "type": "api"
        },
        {
            "id": 30,
            "name": "Me_strengthen",
            "type": "api"
        },
        {
            "id": 31,
            "name": "Me_title_changeName",
            "type": "api"
        },
        {
            "id": 32,
            "name": "Me_title",
            "type": "api"
        },
        {
            "id": 33,
            "name": "Me_titleRandom",
            "type": "api"
        },
        {
            "id": 34,
            "name": "Me_wallet",
            "type": "api"
        },
        {
            "id": 35,
            "name": "Me_wearEquip",
            "type": "api"
        },
        {
            "id": 36,
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
            "id": 37,
            "name": "Pos",
            "type": "api"
        },
        {
            "id": 39,
            "name": "PosAttackPlayer",
            "type": "api"
        },
        {
            "id": 40,
            "name": "ResLife",
            "type": "api"
        },
        {
            "id": 41,
            "name": "SearchSkill",
            "type": "api"
        },
        {
            "id": 48,
            "name": "Sign",
            "type": "api"
        },
        {
            "id": 63,
            "name": "shop/Shop_back_buy",
            "type": "api"
        },
        {
            "id": 64,
            "name": "shop/Shop_back",
            "type": "api"
        },
        {
            "id": 65,
            "name": "shop/Shop_equip_buy",
            "type": "api"
        },
        {
            "id": 66,
            "name": "shop/Shop_equip",
            "type": "api"
        },
        {
            "id": 67,
            "name": "shop/Shop_skill_buy",
            "type": "api"
        },
        {
            "id": 68,
            "name": "shop/Shop_skill",
            "type": "api"
        },
        {
            "id": 69,
            "name": "shop/Shop_team_buy",
            "type": "api"
        },
        {
            "id": 60,
            "name": "shop/Shop_team",
            "type": "api"
        },
        {
            "id": 53,
            "name": "team/ChangeName_team",
            "type": "api"
        },
        {
            "id": 52,
            "name": "team/Creator_team",
            "type": "api"
        },
        {
            "id": 54,
            "name": "team/CreatorJoinCode_team",
            "type": "api"
        },
        {
            "id": 55,
            "name": "team/Dismiss_team",
            "type": "api"
        },
        {
            "id": 57,
            "name": "team/Join_team",
            "type": "api"
        },
        {
            "id": 58,
            "name": "team/KicOut_team",
            "type": "api"
        },
        {
            "id": 51,
            "name": "team/Me_team",
            "type": "api"
        },
        {
            "id": 59,
            "name": "team/Out_team",
            "type": "api"
        },
        {
            "id": 56,
            "name": "team/UserList",
            "type": "api"
        }
    ],
    "types": {
        "ancestry/PtlMe_Ancestry/ReqMe_Ancestry": {
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
        "ancestry/PtlMe_Ancestry/ResMe_Ancestry": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "ancestry",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/ancestry"
                    }
                },
                {
                    "id": 1,
                    "name": "SK",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE"
                    }
                }
            ]
        },
        "../game/body/ancestry": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "from",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "title",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "leve",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/ancestryLeve"
                    }
                },
                {
                    "id": 3,
                    "name": "base",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                },
                {
                    "id": 4,
                    "name": "skill",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/body/ancestryLeve": {
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
        "../game/skill/SKILL_ACTIVE": {
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
                    "name": "tips",
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
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_TYPE"
                    }
                },
                {
                    "id": 5,
                    "name": "speed",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "data",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Number"
                        }
                    }
                }
            ]
        },
        "../game/skill/SKILL_TYPE": {
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
                }
            ]
        },
        "ancestry/PtlMe_randomAncestry/ReqMe_randomAncestry": {
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
        "ancestry/PtlMe_randomAncestry/ResMe_randomAncestry": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "ancestry",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/ancestry"
                    }
                },
                {
                    "id": 1,
                    "name": "SK",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE"
                    }
                },
                {
                    "id": 2,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                }
            ]
        },
        "../game/prop/payRes": {
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
                                    "target": "../game/user/walletKey"
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
        },
        "../game/user/walletKey": {
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
        "auction/PtlAuction_look/ReqAuction_look": {
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
        "auction/PtlAuction_look/ResAuction_look": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "info",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/auction"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/auction": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
                    "name": "endTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "auction",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Interface",
                                    "properties": [
                                        {
                                            "id": 0,
                                            "name": "type",
                                            "type": {
                                                "type": "Reference",
                                                "target": "../game/prop/autionType"
                                            }
                                        },
                                        {
                                            "id": 1,
                                            "name": "data",
                                            "type": {
                                                "type": "Any"
                                            }
                                        }
                                    ]
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": false
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 3,
                    "name": "offer_Cont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "offer_val",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "offer_lastId",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": false
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 6,
                    "name": "offer_name",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": false
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 7,
                    "name": "look_cont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "min_offer",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "sell_id",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": false
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 10,
                    "name": "sell_name",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "String"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal",
                                    "literal": false
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "../game/prop/autionType": {
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
        "../game/setUp/userSetUpCfg": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "textStyle",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/textStyle"
                    }
                }
            ]
        },
        "../game/setUp/textStyle": {
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
        "auction/PtlAuction_offer/ReqAuction_offer": {
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
                    "name": "addNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "auction/PtlAuction_offer/ResAuction_offer": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "auction/PtlAuction/ReqAuction": {
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
                    "name": "key",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/autionType"
                    }
                },
                {
                    "id": 3,
                    "name": "cont",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "auction/PtlAuction/ResAuction": {
            "type": "Interface"
        },
        "battle/PtlAttackBoss/ReqAttackBoss": {
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
        "battle/PtlAttackBoss/ResAttackBoss": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "PtlBattle/ResBattle"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "isWin",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "hp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "hp_max",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlBattle/ResBattle": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "battleRound",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 1,
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
                    "id": 2,
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
                                    "id": 1,
                                    "name": "body",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/body/BASE_BODYS"
                                    }
                                },
                                {
                                    "id": 2,
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
                },
                {
                    "id": 8,
                    "name": "exp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "exp_max",
                    "type": {
                        "type": "Number"
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
                },
                {
                    "id": 2,
                    "value": 2
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
                }
            ]
        },
        "battle/PtlPkRank/ReqPkRank": {
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
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        },
        "battle/PtlPkRank/ResPkRank": {
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
        "battle/PtlPosAttackEnemy/ReqPosAttackEnemy": {
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
        "battle/PtlPosAttackEnemy/ResPosAttackEnemy": {
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
        "battle/PtlRank/ReqRank": {
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
        "battle/PtlRank/ResRank": {
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
        "map/PtlDocile/ReqDocile": {
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
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "map/PtlDocile/ResDocile": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "succress",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                }
            ]
        },
        "map/Ptlfishing/Reqfishing": {
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
        "map/Ptlfishing/Resfishing": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "jin",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "fish",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "reward",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "map/PtlOpenMapChestBox/ReqOpenMapChestBox": {
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
        "map/PtlOpenMapChestBox/ResOpenMapChestBox": {
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
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "me/PtlEverDayTask/ReqEverDayTask": {
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
        "me/PtlEverDayTask/ResEverDayTask": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/taskTemp/taskTemp"
                    }
                }
            ]
        },
        "../game/taskTemp/taskTemp": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "isEnd",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "lastUpdate",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "isReward",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 3,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/taskTemp/everDayTask_Item"
                        }
                    }
                },
                {
                    "id": 4,
                    "name": "updateDay",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/taskTemp/everDayTask_Item": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "id",
                    "type": {
                        "type": "Reference",
                        "target": "../game/taskTemp/TaskId"
                    }
                },
                {
                    "id": 1,
                    "name": "now",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "target",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/taskTemp/TaskId": {
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
        "MsgCallAll/MsgCallAll": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "MsgCallAppoint/MsgCallAppoint": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "callUserId",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "content",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "pet/PtlMe_pet/ReqMe_pet": {
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
        "pet/PtlMe_pet/ResMe_pet": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "petList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/body/BASE_BODYS"
                        }
                    }
                }
            ]
        },
        "pet/PtlMe_petChangeName/ReqMe_petChangeName": {
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
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "pet/PtlMe_petChangeName/ResMe_petChangeName": {
            "type": "Interface"
        },
        "pet/PtlMe_petLook/ReqMe_petLook": {
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
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "pet/PtlMe_petLook/ResMe_petLook": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "base",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/BASE_BODYS"
                    }
                }
            ]
        },
        "pet/PtlMe_petRm/ReqMe_petRm": {
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
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "pet/PtlMe_petRm/ResMe_petRm": {
            "type": "Interface"
        },
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
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/equip/equip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "icon",
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
                    "name": "story",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "quality",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/EQUIP_QUALITY"
                    }
                },
                {
                    "id": 4,
                    "name": "type",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/EQUIP_TYPE"
                    }
                },
                {
                    "id": 5,
                    "name": "leve",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "base_attribute",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                },
                {
                    "id": 7,
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
        "PtlGetUserSetUp/ReqGetUserSetUp": {
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
        "PtlGetUserSetUp/ResGetUserSetUp": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
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
                },
                {
                    "id": 1,
                    "name": "ancestry",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/ancestry"
                    }
                },
                {
                    "id": 2,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/body/body": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/BASE_BODYS"
                    }
                }
            ],
            "properties": [
                {
                    "id": 10,
                    "name": "rankscore",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 0,
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
                    "id": 1,
                    "name": "equip",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "weapons",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/equip/equip"
                                },
                                "optional": true
                            }
                        ]
                    }
                },
                {
                    "id": 2,
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
                                "name": "leve",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "exp",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 3,
                                "name": "randomCont",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 4,
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
                    "id": 3,
                    "name": "add",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                },
                {
                    "id": 4,
                    "name": "sign",
                    "type": {
                        "type": "Reference",
                        "target": "../game/user/USER_SIGN"
                    }
                },
                {
                    "id": 5,
                    "name": "wallet",
                    "type": {
                        "type": "Reference",
                        "target": "../game/user/USER_wallet"
                    }
                },
                {
                    "id": 6,
                    "name": "bag",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/equip/equip"
                        }
                    }
                },
                {
                    "id": 7,
                    "name": "setUp",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 8,
                    "name": "pet",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "Reference",
                            "target": "../game/body/BASE_BODYS"
                        }
                    }
                },
                {
                    "id": 9,
                    "name": "ancestry",
                    "type": {
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
                                "name": "leve",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 11,
                    "name": "team",
                    "type": {
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
                                "name": "leve",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/team/teamLeve"
                                }
                            },
                            {
                                "id": 2,
                                "name": "contribute",
                                "type": {
                                    "type": "Number"
                                }
                            }
                        ]
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
                },
                {
                    "id": 6,
                    "name": "resLife",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "driedFish",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "spiritBall",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 9,
                    "name": "evolveCard",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/team/teamLeve": {
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
        "PtlMe_callPos/ReqMe_callPos": {
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
                    "name": "x",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "y",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_callPos/ResMe_callPos": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "mapName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "callPos",
                    "type": {
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
                    }
                },
                {
                    "id": 2,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 3,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
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
                        "type": "Reference",
                        "target": "../game/prop/payRes"
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
                },
                {
                    "id": 3,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "PtlMe_destroyBagEquip/ReqMe_destroyBagEquip": {
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
                    "name": "destroyIndex",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_destroyBagEquip/ResMe_destroyBagEquip": {
            "type": "Interface"
        },
        "PtlMe_destroyMeSkill/ReqMe_destroyMeSkill": {
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
                    "name": "destroyIndex",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_destroyMeSkill/ResMe_destroyMeSkill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "PtlMe_equip/ReqMe_equip": {
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
        "PtlMe_equip/ResMe_equip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "equipList",
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
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "PtlMe_openBlindBox/ReqMe_openBlindBox": {
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
                    "name": "openNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_openBlindBox/ResMe_openBlindBox": {
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
                },
                {
                    "id": 1,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 2,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "PtlMe_setUp/ReqMe_setUp": {
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
                    "name": "setKey",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "setVal",
                    "type": {
                        "type": "Any"
                    }
                }
            ]
        },
        "PtlMe_setUp/ResMe_setUp": {
            "type": "Interface"
        },
        "PtlMe_skill/ReqMe_skill": {
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
        "PtlMe_skill/ResMe_skill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "skillList",
                    "type": {
                        "type": "Array",
                        "elementType": {
                            "type": "String"
                        }
                    }
                }
            ]
        },
        "PtlMe_strengthen/ReqMe_strengthen": {
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
                    "name": "strengthenType",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/EQUIP_TYPE"
                    }
                }
            ]
        },
        "PtlMe_strengthen/ResMe_strengthen": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "bfEquip",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/equip"
                    }
                },
                {
                    "id": 2,
                    "name": "nowEquip",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/equip"
                    }
                },
                {
                    "id": 3,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 4,
                    "name": "rate",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "isSuccress",
                    "type": {
                        "type": "Boolean"
                    }
                }
            ]
        },
        "PtlMe_title_changeName/ReqMe_title_changeName": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "changeName",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "userId",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlMe_title_changeName/ResMe_title_changeName": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                }
            ]
        },
        "PtlMe_title/ReqMe_title": {
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
        "PtlMe_title/ResMe_title": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
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
                                "name": "leve",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 2,
                                "name": "exp",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 3,
                                "name": "randomCont",
                                "type": {
                                    "type": "Number"
                                }
                            },
                            {
                                "id": 4,
                                "name": "attribute",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/body/base_attribute"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "PtlMe_titleRandom/ReqMe_titleRandom": {
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
                    "name": "randomCont",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlMe_titleRandom/ResMe_titleRandom": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 2,
                    "name": "bf",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                },
                {
                    "id": 3,
                    "name": "now",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
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
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
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
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
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
                    "id": 0,
                    "name": "pos_name",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 1,
                    "name": "posTiledId",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "pos",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/posV2"
                    }
                },
                {
                    "id": 3,
                    "name": "isTop",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 4,
                    "name": "isButtom",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 5,
                    "name": "isRight",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 6,
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
                    "id": 8,
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
                    "id": 9,
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
        "PtlResLife/ReqResLife": {
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
        "PtlResLife/ResResLife": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "userRes",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "petRes",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlSearchSkill/ReqSearchSkill": {
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
                    "name": "skillName",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "PtlSearchSkill/ResSearchSkill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "skill",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 2,
                    "name": "match",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "PtlSign/ReqSign": {
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
        "PtlSign/ResSign": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "isRepeat",
                    "type": {
                        "type": "Boolean"
                    }
                },
                {
                    "id": 1,
                    "name": "cont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "oneWord",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 3,
                    "name": "lastSignTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "shop/PtlShop_back_buy/ReqShop_back_buy": {
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
        "shop/PtlShop_back_buy/ResShop_back_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                },
                {
                    "id": 1,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                }
            ]
        },
        "shop/PtlShop_back/ReqShop_back": {
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
        "shop/PtlShop_back/ResShop_back": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/store_back"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/store_back": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sell_temp",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/storeBackTemp"
                    }
                },
                {
                    "id": 1,
                    "name": "creatorTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "nextUpdateTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "sellNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "buyCondition",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "key",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/user/walletKey"
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
                    "id": 5,
                    "name": "stock",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "updateNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/prop/storeBackTemp": {
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
        "shop/PtlShop_equip_buy/ReqShop_equip_buy": {
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
        "shop/PtlShop_equip_buy/ResShop_equip_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "shop/PtlShop_equip/ReqShop_equip": {
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
        "shop/PtlShop_equip/ResShop_equip": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/store_equip"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/store_equip": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sell_temp",
                    "type": {
                        "type": "Reference",
                        "target": "../game/equip/equip"
                    }
                },
                {
                    "id": 1,
                    "name": "creatorTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "nextUpdateTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "sellNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "buyCondition",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "key",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/user/walletKey"
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
                    "id": 5,
                    "name": "stock",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "updateNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "shop/PtlShop_skill_buy/ReqShop_skill_buy": {
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
        "shop/PtlShop_skill_buy/ResShop_skill_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "shop/PtlShop_skill/ReqShop_skill": {
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
        "shop/PtlShop_skill/ResShop_skill": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/store_skill"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/store_skill": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sell_temp",
                    "type": {
                        "type": "Reference",
                        "target": "../game/skill/SKILL_ACTIVE"
                    }
                },
                {
                    "id": 1,
                    "name": "creatorTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "nextUpdateTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "sellNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "buyCondition",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "key",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/user/walletKey"
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
                    "id": 5,
                    "name": "stock",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "updateNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "shop/PtlShop_team_buy/ReqShop_team_buy": {
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
        "shop/PtlShop_team_buy/ResShop_team_buy": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "shop/PtlShop_team/ReqShop_team": {
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
        "shop/PtlShop_team/ResShop_team": {
            "type": "Interface",
            "extends": [
                {
                    "id": 0,
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/store_team"
                    }
                }
            ],
            "properties": [
                {
                    "id": 0,
                    "name": "userCfg",
                    "type": {
                        "type": "Reference",
                        "target": "../game/setUp/userSetUpCfg"
                    }
                }
            ]
        },
        "../game/prop/store_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "sell_temp",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/storeTeamTemp"
                    }
                },
                {
                    "id": 1,
                    "name": "creatorTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 2,
                    "name": "nextUpdateTime",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "sellNum",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "buyCondition",
                    "type": {
                        "type": "Interface",
                        "properties": [
                            {
                                "id": 0,
                                "name": "key",
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/user/walletKey"
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
                    "id": 5,
                    "name": "stock",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "updateNum",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "../game/prop/storeTeamTemp": {
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
        "team/PtlChangeName_team/ReqChangeName_team": {
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
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlChangeName_team/ResChangeName_team": {
            "type": "Interface"
        },
        "team/PtlCreator_team/ReqCreator_team": {
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
                    "name": "name",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlCreator_team/ResCreator_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "pay",
                    "type": {
                        "type": "Reference",
                        "target": "../game/prop/payRes"
                    }
                },
                {
                    "id": 1,
                    "name": "team",
                    "type": {
                        "type": "Reference",
                        "target": "../game/team/team_info"
                    }
                }
            ]
        },
        "../game/team/team_info": {
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
                    "name": "id",
                    "type": {
                        "type": "String"
                    }
                },
                {
                    "id": 2,
                    "name": "leve",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 3,
                    "name": "exp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 6,
                    "name": "maxExp",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 4,
                    "name": "userCont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 7,
                    "name": "maxUserCont",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 8,
                    "name": "contribution",
                    "type": {
                        "type": "Number"
                    }
                },
                {
                    "id": 5,
                    "name": "gain",
                    "type": {
                        "type": "Reference",
                        "target": "../game/body/base_attribute"
                    }
                }
            ]
        },
        "team/PtlCreatorJoinCode_team/ReqCreatorJoinCode_team": {
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
        "team/PtlCreatorJoinCode_team/ResCreatorJoinCode_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlDismiss_team/ReqDismiss_team": {
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
        "team/PtlDismiss_team/ResDismiss_team": {
            "type": "Interface"
        },
        "team/PtlJoin_team/ReqJoin_team": {
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
                    "name": "code",
                    "type": {
                        "type": "String"
                    }
                }
            ]
        },
        "team/PtlJoin_team/ResJoin_team": {
            "type": "Interface"
        },
        "team/PtlKicOut_team/ReqKicOut_team": {
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
                    "name": "index",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "team/PtlKicOut_team/ResKicOut_team": {
            "type": "Interface"
        },
        "team/PtlMe_team/ReqMe_team": {
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
        "team/PtlMe_team/ResMe_team": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "info",
                    "type": {
                        "type": "Union",
                        "members": [
                            {
                                "id": 0,
                                "type": {
                                    "type": "Reference",
                                    "target": "../game/team/team_info"
                                }
                            },
                            {
                                "id": 1,
                                "type": {
                                    "type": "Literal"
                                }
                            }
                        ]
                    }
                },
                {
                    "id": 1,
                    "name": "myLeve",
                    "type": {
                        "type": "Reference",
                        "target": "../game/team/teamLeve"
                    }
                },
                {
                    "id": 2,
                    "name": "myContribute",
                    "type": {
                        "type": "Number"
                    }
                }
            ]
        },
        "team/PtlOut_team/ReqOut_team": {
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
        "team/PtlOut_team/ResOut_team": {
            "type": "Interface"
        },
        "team/PtlUserList/ReqUserList": {
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
        "team/PtlUserList/ResUserList": {
            "type": "Interface",
            "properties": [
                {
                    "id": 0,
                    "name": "list",
                    "type": {
                        "type": "Array",
                        "elementType": {
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
                                    "name": "leve",
                                    "type": {
                                        "type": "Number"
                                    }
                                },
                                {
                                    "id": 2,
                                    "name": "pos",
                                    "type": {
                                        "type": "Reference",
                                        "target": "../game/body/posV2"
                                    }
                                }
                            ]
                        }
                    }
                }
            ]
        }
    }
};
