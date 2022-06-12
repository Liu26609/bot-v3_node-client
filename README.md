
# 达尔文进化岛V3 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- ancestry
    - [Me_Ancestry](#/ancestry/Me_Ancestry)
    - [重置进化](#/ancestry/Me_randomAncestry)
- auction
    - [Auction](#/auction/Auction)
    - [Auction_look](#/auction/Auction_look)
    - [Auction_offer](#/auction/Auction_offer)
- battle
    - [AttackBoss](#/battle/AttackBoss)
    - [Challenge_box](#/battle/Challenge_box)
    - [Challenge_image](#/battle/Challenge_image)
    - [PkRank](#/battle/PkRank)
    - [PosAttackEnemy](#/battle/PosAttackEnemy)
    - [PosAttackPlayer](#/battle/PosAttackPlayer)
    - [Rank](#/battle/Rank)
- map
    - [Docile](#/map/Docile)
    - [OpenMapChestBox](#/map/OpenMapChestBox)
    - [fishing](#/map/fishing)
- me
    - title
        - [称号改名](#/me/title/Me_title_changeName)
- minGame
    - [MinGame_lottery](#/minGame/MinGame_lottery)
- pet
    - [Me_pet](#/pet/Me_pet)
    - [Me_petChangeName](#/pet/Me_petChangeName)
    - [Me_petLook](#/pet/Me_petLook)
    - [Me_petRm](#/pet/Me_petRm)
- rank
    - [Rank_gold](#/rank/Rank_gold)
    - [等级排行榜](#/rank/Rank_leve)
    - [猜数参与次数排行榜](#/rank/Rank_minGame_lottery_cont)
    - [猜数猜中次数排行榜](#/rank/Rank_minGame_lottery_win)
    - [宠物数量排行榜](#/rank/Rank_petCont)
    - [宠物等级排行榜](#/rank/Rank_petLv)
    - [排位声望排行榜](#/rank/Rank_rankscore)
    - [签到天数排行榜](#/rank/Rank_sign)
    - [装备强化排行榜](#/rank/Rank_strengthen)
    - [工会等级排行榜](#/rank/Rank_team)
    - [称号属性排行榜](#/rank/Rank_titleAttr)
    - [称号重置次数排行榜](#/rank/Rank_titleCont)
- shop
    - [Shop_back](#/shop/Shop_back)
    - [Shop_back_buy](#/shop/Shop_back_buy)
    - [Shop_equip](#/shop/Shop_equip)
    - [Shop_equip_buy](#/shop/Shop_equip_buy)
    - [头像商店](#/shop/Shop_icon)
    - [头像商店购买](#/shop/Shop_icon_buy)
    - [Shop_skill](#/shop/Shop_skill)
    - [Shop_skill_buy](#/shop/Shop_skill_buy)
    - [Shop_team](#/shop/Shop_team)
    - [Shop_team_buy](#/shop/Shop_team_buy)
- task
    - [EverDayTask](#/task/EverDayTask)
    - [阶梯计划](#/task/soaringTask)
- team
    - [ChangeName_team](#/team/ChangeName_team)
    - [CreatorJoinCode_team](#/team/CreatorJoinCode_team)
    - [Creator_team](#/team/Creator_team)
    - [Dismiss_team](#/team/Dismiss_team)
    - [Join_team](#/team/Join_team)
    - [KicOut_team](#/team/KicOut_team)
    - [Me_team](#/team/Me_team)
    - [Out_team](#/team/Out_team)
    - [UserList](#/team/UserList)
- [AddOneWord](#/AddOneWord)
- [背包查看](#/Bag)
- [Battle](#/Battle)
- [GetUserSetUp](#/GetUserSetUp)
- [你好，世界](#/Hello)
- [我的属性](#/Me_Attribute)
- [坐标传送](#/Me_callPos)
- [Me_changeName](#/Me_changeName)
- [Me_destroyBagEquip](#/Me_destroyBagEquip)
- [Me_destroyMeSkill](#/Me_destroyMeSkill)
- [Me_equip](#/Me_equip)
- [Me_lookBag](#/Me_lookBag)
- [Me_openBlindBox](#/Me_openBlindBox)
- [Me_setUp](#/Me_setUp)
- [Me_skill](#/Me_skill)
- [Me_strengthen](#/Me_strengthen)
- [Me_title](#/Me_title)
- [Me_titleRandom](#/Me_titleRandom)
- [我的钱包](#/Me_wallet)
- [Me_wearEquip](#/Me_wearEquip)
- [Move](#/Move)
- [当前位置接口](#/Pos)
- [复活治疗接口](#/ResLife)
- [SearchSkill](#/SearchSkill)
- [用户签到接口](#/Sign)

---

## ancestry

### Me_Ancestry <a id="/ancestry/Me_Ancestry"></a>

**路径**
- POST `/ancestry/Me_Ancestry`

**请求**
```ts
interface ReqMe_Ancestry {
    userId: string
}
```

**响应**
```ts
interface ResMe_Ancestry {
    /** 血统 */
    ancestry: {
        /** 血统来源 */
        from: string,
        /** 血统名称 */
        title: string,
        /** 血统等级0-9级 */
        leve: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        base: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill: number
    },
    /** 主动技能 */
    SK: {
        id: number,
        name: string,
        tips: string,
        story: string,
        type: 0 | 1 | 2,
        speed: number,
        data: number[]
    },
    /** 用户血统信息 */
    info: {
        id: string,
        leve: number,
        exp: number,
        exp_max: number
    }
}
```

---

### 重置进化 <a id="/ancestry/Me_randomAncestry"></a>

**路径**
- POST `/ancestry/Me_randomAncestry`

**请求**
```ts
interface ReqMe_randomAncestry {
    userId: string
}
```

**响应**
```ts
interface ResMe_randomAncestry {
    /** 血统 */
    ancestry: {
        /** 血统来源 */
        from: string,
        /** 血统名称 */
        title: string,
        /** 血统等级0-9级 */
        leve: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        base: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill: number
    },
    /** 主动技能 */
    SK: {
        id: number,
        name: string,
        tips: string,
        story: string,
        type: 0 | 1 | 2,
        speed: number,
        data: number[]
    },
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    }
}
```

---

## auction

### Auction <a id="/auction/Auction"></a>

**路径**
- POST `/auction/Auction`

**请求**
```ts
interface ReqAuction {
    userId: string,
    key: number,
    type: 0 | 1,
    cont: number
}
```

**响应**
```ts
interface ResAuction {

}
```

---

### Auction_look <a id="/auction/Auction_look"></a>

**路径**
- POST `/auction/Auction_look`

**请求**
```ts
interface ReqAuction_look {
    userId: string
}
```

**响应**
```ts
interface ResAuction_look {
    info: {
        index: number,
        endTime: number,
        auction: {
            type: 0 | 1,
            data: any
        } | false,
        offer_Cont: number,
        offer_val: number,
        offer_lastId: string | false,
        offer_name: string | false,
        look_cont: number,
        min_offer: number,
        sell_id: string | false,
        sell_name: string | false
    },
    userCfg: { textStyle: 0 | 1 }
}
```

---

### Auction_offer <a id="/auction/Auction_offer"></a>

**路径**
- POST `/auction/Auction_offer`

**请求**
```ts
interface ReqAuction_offer {
    userId: string,
    addNum: number
}
```

**响应**
```ts
interface ResAuction_offer {
    userCfg: { textStyle: 0 | 1 }
}
```

---

## battle

### AttackBoss <a id="/battle/AttackBoss"></a>

**路径**
- POST `/battle/AttackBoss`

**请求**
```ts
interface ReqAttackBoss {
    userId: string
}
```

**响应**
```ts
interface ResAttackBoss {
    isWin: boolean,
    hp: number,
    hp_max: number,
    /** 战斗回合 */
    battleRound: number,
    /** 技能释放记录 */
    log: {
        /** 释放者头像 */
        icon: string,
        /** 释放者ID */
        id: string,
        /** 释放者名称 */
        name: string,
        /**
        * 组
        * 0.先手组
        * 1.后手组
        */
        group: number,
        /** 技能反馈 */
        list: {
            id: number,
            name: string,
            type: 0 | 1,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3
        }[]
    }[],
    kill_log: {
        round: number,
        body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        },
        die_body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        }
    }[],
    reward: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
        val: number
    }[]
}
```

---

### Challenge_box <a id="/battle/Challenge_box"></a>

**路径**
- POST `/battle/Challenge_box`

**请求**
```ts
interface ReqChallenge_box {
    userId: string,
    /**
    * 0为查看
    * 1为开启
    * 2为挑战
    */
    type: number
}
```

**响应**
```ts
interface ResChallenge_box {
    battle?: {
        /** 战斗回合 */
        battleRound: number,
        /** 技能释放记录 */
        log: {
            /** 释放者头像 */
            icon: string,
            /** 释放者ID */
            id: string,
            /** 释放者名称 */
            name: string,
            /**
            * 组
            * 0.先手组
            * 1.后手组
            */
            group: number,
            /** 技能反馈 */
            list: {
                id: number,
                name: string,
                type: 0 | 1,
                val: number,
                /** 技能目标 */
                tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
                /** 技能统计单位 */
                unit: 0 | 1 | 2 | 3
            }[]
        }[],
        kill_log: {
            round: number,
            body: {
                id: string,
                icon: string,
                type: 0 | 1 | 2,
                name: string,
                leve: number,
                hp: number,
                active_skill: number[],
                out_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    PhysicalAttacks: number,
                    MagicDefense: number,
                    PhysicalDefense: number,
                    secondResHp: number
                },
                pos: {
                    x: number,
                    y: number
                },
                exp: number,
                exp_max: number,
                lastResHpTime: number
            },
            die_body: {
                id: string,
                icon: string,
                type: 0 | 1 | 2,
                name: string,
                leve: number,
                hp: number,
                active_skill: number[],
                out_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    PhysicalAttacks: number,
                    MagicDefense: number,
                    PhysicalDefense: number,
                    secondResHp: number
                },
                pos: {
                    x: number,
                    y: number
                },
                exp: number,
                exp_max: number,
                lastResHpTime: number
            }
        }[],
        reward: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
            val: number
        }[]
    },
    /**
    * 开启副本限制
    * 这里为基因锁限制
    */
    openlimit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
    /** 胜利奖励 */
    win: string,
    /** 失败 */
    fail: string
}
```

---

### Challenge_image <a id="/battle/Challenge_image"></a>

**路径**
- POST `/battle/Challenge_image`

**请求**
```ts
interface ReqChallenge_image {
    userId: string,
    isStart: boolean
}
```

**响应**
```ts
interface ResChallenge_image {
    battle?: {
        /** 战斗回合 */
        battleRound: number,
        /** 技能释放记录 */
        log: {
            /** 释放者头像 */
            icon: string,
            /** 释放者ID */
            id: string,
            /** 释放者名称 */
            name: string,
            /**
            * 组
            * 0.先手组
            * 1.后手组
            */
            group: number,
            /** 技能反馈 */
            list: {
                id: number,
                name: string,
                type: 0 | 1,
                val: number,
                /** 技能目标 */
                tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
                /** 技能统计单位 */
                unit: 0 | 1 | 2 | 3
            }[]
        }[],
        kill_log: {
            round: number,
            body: {
                id: string,
                icon: string,
                type: 0 | 1 | 2,
                name: string,
                leve: number,
                hp: number,
                active_skill: number[],
                out_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    PhysicalAttacks: number,
                    MagicDefense: number,
                    PhysicalDefense: number,
                    secondResHp: number
                },
                pos: {
                    x: number,
                    y: number
                },
                exp: number,
                exp_max: number,
                lastResHpTime: number
            },
            die_body: {
                id: string,
                icon: string,
                type: 0 | 1 | 2,
                name: string,
                leve: number,
                hp: number,
                active_skill: number[],
                out_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    PhysicalAttacks: number,
                    MagicDefense: number,
                    PhysicalDefense: number,
                    secondResHp: number
                },
                pos: {
                    x: number,
                    y: number
                },
                exp: number,
                exp_max: number,
                lastResHpTime: number
            }
        }[],
        reward: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
            val: number
        }[]
    },
    isMax: boolean,
    /** 下一级基因锁 */
    nextDNA: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
    /** 镜像等级 */
    imageLeve: number,
    /** 镜像基因锁 */
    imageDNALeve: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
    /** 挑战胜利将增幅属性 */
    winAdd: number,
    /** 失败将扣除等级 */
    failDel: number
}
```

---

### PkRank <a id="/battle/PkRank"></a>

**路径**
- POST `/battle/PkRank`

**请求**
```ts
interface ReqPkRank {
    userId: string,
    attackId: string[]
}
```

**响应**
```ts
interface ResPkRank {
    /** 战斗回合 */
    battleRound: number,
    /** 技能释放记录 */
    log: {
        /** 释放者头像 */
        icon: string,
        /** 释放者ID */
        id: string,
        /** 释放者名称 */
        name: string,
        /**
        * 组
        * 0.先手组
        * 1.后手组
        */
        group: number,
        /** 技能反馈 */
        list: {
            id: number,
            name: string,
            type: 0 | 1,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3
        }[]
    }[],
    kill_log: {
        round: number,
        body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        },
        die_body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        }
    }[],
    reward: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
        val: number
    }[]
}
```

---

### PosAttackEnemy <a id="/battle/PosAttackEnemy"></a>

**路径**
- POST `/battle/PosAttackEnemy`

**请求**
```ts
interface ReqPosAttackEnemy {
    userId: string,
    /**
    * -1为攻击全部怪物
    * -2为攻击胜率最高怪物
    */
    attackId: number
}
```

**响应**
```ts
interface ResPosAttackEnemy {
    /** 战斗回合 */
    battleRound: number,
    /** 技能释放记录 */
    log: {
        /** 释放者头像 */
        icon: string,
        /** 释放者ID */
        id: string,
        /** 释放者名称 */
        name: string,
        /**
        * 组
        * 0.先手组
        * 1.后手组
        */
        group: number,
        /** 技能反馈 */
        list: {
            id: number,
            name: string,
            type: 0 | 1,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3
        }[]
    }[],
    kill_log: {
        round: number,
        body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        },
        die_body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        }
    }[],
    reward: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
        val: number
    }[]
}
```

---

### PosAttackPlayer <a id="/battle/PosAttackPlayer"></a>

**路径**
- POST `/battle/PosAttackPlayer`

**请求**
```ts
interface ReqPosAttackPlayer {
    userId: string,
    attackId: number
}
```

**响应**
```ts
interface ResPosAttackPlayer {
    /** 战斗回合 */
    battleRound: number,
    /** 技能释放记录 */
    log: {
        /** 释放者头像 */
        icon: string,
        /** 释放者ID */
        id: string,
        /** 释放者名称 */
        name: string,
        /**
        * 组
        * 0.先手组
        * 1.后手组
        */
        group: number,
        /** 技能反馈 */
        list: {
            id: number,
            name: string,
            type: 0 | 1,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3
        }[]
    }[],
    kill_log: {
        round: number,
        body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        },
        die_body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        }
    }[],
    reward: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
        val: number
    }[]
}
```

---

### Rank <a id="/battle/Rank"></a>

**路径**
- POST `/battle/Rank`

**请求**
```ts
interface ReqRank {
    userId: string
}
```

**响应**
```ts
interface ResRank {
    /** 战斗回合 */
    battleRound: number,
    /** 技能释放记录 */
    log: {
        /** 释放者头像 */
        icon: string,
        /** 释放者ID */
        id: string,
        /** 释放者名称 */
        name: string,
        /**
        * 组
        * 0.先手组
        * 1.后手组
        */
        group: number,
        /** 技能反馈 */
        list: {
            id: number,
            name: string,
            type: 0 | 1,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3
        }[]
    }[],
    kill_log: {
        round: number,
        body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        },
        die_body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        }
    }[],
    reward: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
        val: number
    }[]
}
```

---

## map

### Docile <a id="/map/Docile"></a>

**路径**
- POST `/map/Docile`

**请求**
```ts
interface ReqDocile {
    userId: string,
    index: number
}
```

**响应**
```ts
interface ResDocile {
    succress: boolean,
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    }
}
```

---

### OpenMapChestBox <a id="/map/OpenMapChestBox"></a>

**路径**
- POST `/map/OpenMapChestBox`

**请求**
```ts
interface ReqOpenMapChestBox {
    userId: string,
    openIndex: number
}
```

**响应**
```ts
interface ResOpenMapChestBox {
    reward: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
        val: number
    }[],
    userCfg: { textStyle: 0 | 1 }
}
```

---

### fishing <a id="/map/fishing"></a>

**路径**
- POST `/map/fishing`

**请求**
```ts
interface Reqfishing {
    userId: string
}
```

**响应**
```ts
interface Resfishing {
    userCfg: { textStyle: 0 | 1 },
    jin: number,
    fish: string,
    reward: number
}
```

---

## me

### title

#### 称号改名 <a id="/me/title/Me_title_changeName"></a>

**路径**
- POST `/me/title/Me_title_changeName`

**请求**
```ts
interface ReqMe_title_changeName {
    /** 修改的名称 */
    changeName: string,
    userId: string
}
```

**响应**
```ts
interface ResMe_title_changeName {
    userCfg: { textStyle: 0 | 1 },
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    }
}
```

---

## minGame

### MinGame_lottery <a id="/minGame/MinGame_lottery"></a>

**路径**
- POST `/minGame/MinGame_lottery`

**请求**
```ts
interface ReqMinGame_lottery {
    userId: string,
    guessNum: number
}
```

**响应**
```ts
interface ResMinGame_lottery {
    /** 猜数 */
    info: {
        round: number,
        endTime: number,
        min: number,
        max: number,
        guessCont: number,
        /** 正确的数字，客户端只返回0 */
        correct: number,
        /** 累计奖励 */
        addup: number,
        /** 上轮赢家昵称 */
        lastWin: string
    },
    guessJude: boolean,
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    },
    reward: number
}
```

---

## pet

### Me_pet <a id="/pet/Me_pet"></a>

**路径**
- POST `/pet/Me_pet`

**请求**
```ts
interface ReqMe_pet {
    userId: string
}
```

**响应**
```ts
interface ResMe_pet {
    petList: {
        id: string,
        icon: string,
        type: 0 | 1 | 2,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        pos: {
            x: number,
            y: number
        },
        exp: number,
        exp_max: number,
        lastResHpTime: number
    }[]
}
```

---

### Me_petChangeName <a id="/pet/Me_petChangeName"></a>

**路径**
- POST `/pet/Me_petChangeName`

**请求**
```ts
interface ReqMe_petChangeName {
    userId: string,
    index: number,
    name: string
}
```

**响应**
```ts
interface ResMe_petChangeName {

}
```

---

### Me_petLook <a id="/pet/Me_petLook"></a>

**路径**
- POST `/pet/Me_petLook`

**请求**
```ts
interface ReqMe_petLook {
    userId: string,
    index: number
}
```

**响应**
```ts
interface ResMe_petLook {
    base: {
        id: string,
        icon: string,
        type: 0 | 1 | 2,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        pos: {
            x: number,
            y: number
        },
        exp: number,
        exp_max: number,
        lastResHpTime: number
    }
}
```

---

### Me_petRm <a id="/pet/Me_petRm"></a>

**路径**
- POST `/pet/Me_petRm`

**请求**
```ts
interface ReqMe_petRm {
    userId: string,
    index: number
}
```

**响应**
```ts
interface ResMe_petRm {

}
```

---

## rank

### Rank_gold <a id="/rank/Rank_gold"></a>

**路径**
- POST `/rank/Rank_gold`

**请求**
```ts
interface ReqRank_gold {
    userId: string
}
```

**响应**
```ts
interface ResRank_gold {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 等级排行榜 <a id="/rank/Rank_leve"></a>

**路径**
- POST `/rank/Rank_leve`

**请求**
```ts
interface ReqRank_leve {
    userId: string
}
```

**响应**
```ts
interface ResRank_leve {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 猜数参与次数排行榜 <a id="/rank/Rank_minGame_lottery_cont"></a>

**路径**
- POST `/rank/Rank_minGame_lottery_cont`

**请求**
```ts
interface ReqRank_minGame_lottery_cont {
    userId: string
}
```

**响应**
```ts
interface ResRank_minGame_lottery_cont {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 猜数猜中次数排行榜 <a id="/rank/Rank_minGame_lottery_win"></a>

**路径**
- POST `/rank/Rank_minGame_lottery_win`

**请求**
```ts
interface ReqRank_minGame_lottery_win {
    userId: string
}
```

**响应**
```ts
interface ResRank_minGame_lottery_win {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 宠物数量排行榜 <a id="/rank/Rank_petCont"></a>

**路径**
- POST `/rank/Rank_petCont`

**请求**
```ts
interface ReqRank_petCont {
    userId: string
}
```

**响应**
```ts
interface ResRank_petCont {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 宠物等级排行榜 <a id="/rank/Rank_petLv"></a>

**路径**
- POST `/rank/Rank_petLv`

**请求**
```ts
interface ReqRank_petLv {
    userId: string
}
```

**响应**
```ts
interface ResRank_petLv {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 排位声望排行榜 <a id="/rank/Rank_rankscore"></a>

**路径**
- POST `/rank/Rank_rankscore`

**请求**
```ts
interface ReqRank_rankscore {
    userId: string
}
```

**响应**
```ts
interface ResRank_rankscore {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 签到天数排行榜 <a id="/rank/Rank_sign"></a>

**路径**
- POST `/rank/Rank_sign`

**请求**
```ts
interface ReqRank_sign {
    userId: string
}
```

**响应**
```ts
interface ResRank_sign {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 装备强化排行榜 <a id="/rank/Rank_strengthen"></a>

**路径**
- POST `/rank/Rank_strengthen`

**请求**
```ts
interface ReqRank_strengthen {
    userId: string
}
```

**响应**
```ts
interface ResRank_strengthen {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 工会等级排行榜 <a id="/rank/Rank_team"></a>

**路径**
- POST `/rank/Rank_team`

**请求**
```ts
interface ReqRank_team {
    userId: string
}
```

**响应**
```ts
interface ResRank_team {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 称号属性排行榜 <a id="/rank/Rank_titleAttr"></a>

**路径**
- POST `/rank/Rank_titleAttr`

**请求**
```ts
interface ReqRank_titleAttr {
    userId: string
}
```

**响应**
```ts
interface ResRank_titleAttr {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

### 称号重置次数排行榜 <a id="/rank/Rank_titleCont"></a>

**路径**
- POST `/rank/Rank_titleCont`

**请求**
```ts
interface ReqRank_titleCont {
    userId: string
}
```

**响应**
```ts
interface ResRank_titleCont {
    /** 排行列表 */
    list: {
        val: number,
        name: string,
        icon?: string,
        id: string
    }[],
    /** 我的排名 */
    meIndex: number
}
```

---

## shop

### Shop_back <a id="/shop/Shop_back"></a>

**路径**
- POST `/shop/Shop_back`

**请求**
```ts
interface ReqShop_back {
    userId: string
}
```

**响应**
```ts
interface ResShop_back {
    userCfg: { textStyle: 0 | 1 },
    /** 出售的模板id */
    sell_temp: 0 | 1,
    /** 刷新的时间 */
    creatorTime: number,
    /** 下次刷新时间 */
    nextUpdateTime: number,
    /** 已出售数量 */
    sellNum: number,
    /** 购买条件 */
    buyCondition: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
        val: number
    },
    /** 本次库存 */
    stock: number,
    /** 商店总共刷新次数 */
    updateNum: number
}
```

---

### Shop_back_buy <a id="/shop/Shop_back_buy"></a>

**路径**
- POST `/shop/Shop_back_buy`

**请求**
```ts
interface ReqShop_back_buy {
    userId: string
}
```

**响应**
```ts
interface ResShop_back_buy {
    userCfg: { textStyle: 0 | 1 },
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    }
}
```

---

### Shop_equip <a id="/shop/Shop_equip"></a>

**路径**
- POST `/shop/Shop_equip`

**请求**
```ts
interface ReqShop_equip {
    userId: string
}
```

**响应**
```ts
interface ResShop_equip {
    userCfg: { textStyle: 0 | 1 },
    /** 出售的模板id */
    sell_temp: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        /** 装备类型 */
        type: 0 | 1,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        }
    },
    /** 刷新的时间 */
    creatorTime: number,
    /** 下次刷新时间 */
    nextUpdateTime: number,
    /** 已出售数量 */
    sellNum: number,
    /** 购买条件 */
    buyCondition: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
        val: number
    },
    /** 本次库存 */
    stock: number,
    /** 商店总共刷新次数 */
    updateNum: number
}
```

---

### Shop_equip_buy <a id="/shop/Shop_equip_buy"></a>

**路径**
- POST `/shop/Shop_equip_buy`

**请求**
```ts
interface ReqShop_equip_buy {
    userId: string
}
```

**响应**
```ts
interface ResShop_equip_buy {
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    },
    userCfg: { textStyle: 0 | 1 }
}
```

---

### 头像商店 <a id="/shop/Shop_icon"></a>

**路径**
- POST `/shop/Shop_icon`

**请求**
```ts
interface ReqShop_icon {
    userId: string
}
```

**响应**
```ts
interface ResShop_icon {
    userCfg: { textStyle: 0 | 1 },
    /** 出售的模板id */
    sell_temp: string,
    /** 刷新的时间 */
    creatorTime: number,
    /** 下次刷新时间 */
    nextUpdateTime: number,
    /** 已出售数量 */
    sellNum: number,
    /** 购买条件 */
    buyCondition: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
        val: number
    },
    /** 本次库存 */
    stock: number,
    /** 商店总共刷新次数 */
    updateNum: number
}
```

---

### 头像商店购买 <a id="/shop/Shop_icon_buy"></a>

**路径**
- POST `/shop/Shop_icon_buy`

**请求**
```ts
interface ReqShop_icon_buy {
    userId: string
}
```

**响应**
```ts
interface ResShop_icon_buy {
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    },
    userCfg: { textStyle: 0 | 1 }
}
```

---

### Shop_skill <a id="/shop/Shop_skill"></a>

**路径**
- POST `/shop/Shop_skill`

**请求**
```ts
interface ReqShop_skill {
    userId: string
}
```

**响应**
```ts
interface ResShop_skill {
    userCfg: { textStyle: 0 | 1 },
    /** 出售的模板id */
    sell_temp: {
        id: number,
        name: string,
        tips: string,
        story: string,
        type: 0 | 1 | 2,
        speed: number,
        data: number[]
    },
    /** 刷新的时间 */
    creatorTime: number,
    /** 下次刷新时间 */
    nextUpdateTime: number,
    /** 已出售数量 */
    sellNum: number,
    /** 购买条件 */
    buyCondition: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
        val: number
    },
    /** 本次库存 */
    stock: number,
    /** 商店总共刷新次数 */
    updateNum: number
}
```

---

### Shop_skill_buy <a id="/shop/Shop_skill_buy"></a>

**路径**
- POST `/shop/Shop_skill_buy`

**请求**
```ts
interface ReqShop_skill_buy {
    userId: string
}
```

**响应**
```ts
interface ResShop_skill_buy {
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    },
    userCfg: { textStyle: 0 | 1 }
}
```

---

### Shop_team <a id="/shop/Shop_team"></a>

**路径**
- POST `/shop/Shop_team`

**请求**
```ts
interface ReqShop_team {
    userId: string
}
```

**响应**
```ts
interface ResShop_team {
    userCfg: { textStyle: 0 | 1 },
    /** 出售的模板id */
    sell_temp: 0 | 1,
    /** 刷新的时间 */
    creatorTime: number,
    /** 下次刷新时间 */
    nextUpdateTime: number,
    /** 已出售数量 */
    sellNum: number,
    /** 购买条件 */
    buyCondition: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
        val: number
    },
    /** 本次库存 */
    stock: number,
    /** 商店总共刷新次数 */
    updateNum: number
}
```

---

### Shop_team_buy <a id="/shop/Shop_team_buy"></a>

**路径**
- POST `/shop/Shop_team_buy`

**请求**
```ts
interface ReqShop_team_buy {
    userId: string
}
```

**响应**
```ts
interface ResShop_team_buy {
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    },
    userCfg: { textStyle: 0 | 1 }
}
```

---

## task

### EverDayTask <a id="/task/EverDayTask"></a>

**路径**
- POST `/task/EverDayTask`

**请求**
```ts
interface ReqEverDayTask {
    userId: string
}
```

**响应**
```ts
interface ResEverDayTask {
    /** 是否已经完成 */
    isEnd: boolean,
    /** 上次更新时间 */
    lastUpdate: number,
    /** 本次是否已经发放奖励 */
    isReward: boolean,
    list: {
        /** 任务ID */
        id: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
        /** 当前次数 */
        now: number,
        /** 目标次数 */
        target: number
    }[],
    /** 刷新任务时间/天 */
    updateDay: number
}
```

---

### 阶梯计划 <a id="/task/soaringTask"></a>

**路径**
- POST `/task/soaringTask`

**请求**
```ts
interface ReqsoaringTask {
    userId: string
}
```

**响应**
```ts
interface RessoaringTask {
    taskLeve: number,
    /** 是否已经完成 */
    isEnd: boolean,
    /** 上次更新时间 */
    lastUpdate: number,
    /** 本次是否已经发放奖励 */
    isReward: boolean,
    list: {
        /** 任务ID */
        id: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
        /** 当前次数 */
        now: number,
        /** 目标次数 */
        target: number
    }[],
    /** 刷新任务时间/天 */
    updateDay: number
}
```

---

## team

### ChangeName_team <a id="/team/ChangeName_team"></a>

**路径**
- POST `/team/ChangeName_team`

**请求**
```ts
interface ReqChangeName_team {
    userId: string,
    name: string
}
```

**响应**
```ts
interface ResChangeName_team {

}
```

---

### CreatorJoinCode_team <a id="/team/CreatorJoinCode_team"></a>

**路径**
- POST `/team/CreatorJoinCode_team`

**请求**
```ts
interface ReqCreatorJoinCode_team {
    userId: string
}
```

**响应**
```ts
interface ResCreatorJoinCode_team {
    code: string
}
```

---

### Creator_team <a id="/team/Creator_team"></a>

**路径**
- POST `/team/Creator_team`

**请求**
```ts
interface ReqCreator_team {
    userId: string,
    name: string
}
```

**响应**
```ts
interface ResCreator_team {
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    },
    team: {
        name: string,
        id: string,
        leve: number,
        exp: number,
        maxExp: number,
        userCont: number,
        maxUserCont: number,
        /** 工会贡献 */
        contribution: number,
        /** 工会增益 */
        gain: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        }
    }
}
```

---

### Dismiss_team <a id="/team/Dismiss_team"></a>

**路径**
- POST `/team/Dismiss_team`

**请求**
```ts
interface ReqDismiss_team {
    userId: string
}
```

**响应**
```ts
interface ResDismiss_team {

}
```

---

### Join_team <a id="/team/Join_team"></a>

**路径**
- POST `/team/Join_team`

**请求**
```ts
interface ReqJoin_team {
    userId: string,
    code: string
}
```

**响应**
```ts
interface ResJoin_team {

}
```

---

### KicOut_team <a id="/team/KicOut_team"></a>

**路径**
- POST `/team/KicOut_team`

**请求**
```ts
interface ReqKicOut_team {
    userId: string,
    index: number
}
```

**响应**
```ts
interface ResKicOut_team {

}
```

---

### Me_team <a id="/team/Me_team"></a>

**路径**
- POST `/team/Me_team`

**请求**
```ts
interface ReqMe_team {
    userId: string
}
```

**响应**
```ts
interface ResMe_team {
    info: {
        name: string,
        id: string,
        leve: number,
        exp: number,
        maxExp: number,
        userCont: number,
        maxUserCont: number,
        /** 工会贡献 */
        contribution: number,
        /** 工会增益 */
        gain: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        }
    } | undefined,
    myLeve: 0 | 1,
    myContribute: number
}
```

---

### Out_team <a id="/team/Out_team"></a>

**路径**
- POST `/team/Out_team`

**请求**
```ts
interface ReqOut_team {
    userId: string
}
```

**响应**
```ts
interface ResOut_team {

}
```

---

### UserList <a id="/team/UserList"></a>

**路径**
- POST `/team/UserList`

**请求**
```ts
interface ReqUserList {
    userId: string
}
```

**响应**
```ts
interface ResUserList {
    list: {
        name: string,
        leve: number,
        pos: {
            x: number,
            y: number
        }
    }[]
}
```

---

## AddOneWord <a id="/AddOneWord"></a>

**路径**
- POST `/AddOneWord`

**请求**
```ts
interface ReqAddOneWord {
    text: string
}
```

**响应**
```ts
interface ResAddOneWord {
    creatorId: number
}
```

---

## 背包查看 <a id="/Bag"></a>

**路径**
- POST `/Bag`

**请求**
```ts
interface ReqBag {
    userId: string
}
```

**响应**
```ts
interface ResBag {
    bag: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        /** 装备类型 */
        type: 0 | 1,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        }
    }[],
    userCfg: { textStyle: 0 | 1 }
}
```

---

## Battle <a id="/Battle"></a>

**路径**
- POST `/Battle`

**请求**
```ts
interface ReqBattle {

}
```

**响应**
```ts
interface ResBattle {
    /** 战斗回合 */
    battleRound: number,
    /** 技能释放记录 */
    log: {
        /** 释放者头像 */
        icon: string,
        /** 释放者ID */
        id: string,
        /** 释放者名称 */
        name: string,
        /**
        * 组
        * 0.先手组
        * 1.后手组
        */
        group: number,
        /** 技能反馈 */
        list: {
            id: number,
            name: string,
            type: 0 | 1,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3
        }[]
    }[],
    kill_log: {
        round: number,
        body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        },
        die_body: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        }
    }[],
    reward: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
        val: number
    }[]
}
```

---

## GetUserSetUp <a id="/GetUserSetUp"></a>

**路径**
- POST `/GetUserSetUp`

**请求**
```ts
interface ReqGetUserSetUp {
    userId: string
}
```

**响应**
```ts
interface ResGetUserSetUp {
    textStyle: 0 | 1
}
```

---

## 你好，世界 <a id="/Hello"></a>

**路径**
- POST `/Hello`

**请求**
```ts
interface ReqHello {
    name: string
}
```

**响应**
```ts
interface ResHello {
    reply: string,
    time: /*datetime*/ string
}
```

---

## 我的属性 <a id="/Me_Attribute"></a>

**路径**
- POST `/Me_Attribute`

**请求**
```ts
interface ReqMe_Attribute {
    userId: string
}
```

**响应**
```ts
interface ResMe_Attribute {
    body: {
        /** 声望 */
        rankscore: number,
        sys: { creator_time: number },
        equip: {
            weapons?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 装备类型 */
                type: 0 | 1,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    PhysicalAttacks: number,
                    MagicDefense: number,
                    PhysicalDefense: number,
                    secondResHp: number
                }
            },
            subWeapon?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 装备类型 */
                type: 0 | 1,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    PhysicalAttacks: number,
                    MagicDefense: number,
                    PhysicalDefense: number,
                    secondResHp: number
                }
            }
        },
        title: {
            name: string,
            leve: number,
            exp: number,
            exp_max: number,
            /** 今日剩余可获取经验 */
            todayGetExp: number,
            /** 经验上限刷新时间 */
            updateExpTime: number,
            /** 随机次数 */
            randomCont: number,
            attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            }
        },
        /** 基因锁 */
        dnaLock: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        /** 额外附加属性（黑市） */
        add: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 签到数据 */
        sign: {
            cont: number,
            lastSignTime: number
        },
        task: {/** 阶梯计划任务等级 */
            ladderLeve: number
        },
        /** 钱包 */
        wallet: {
            /**
            * 金币
            * 用于商店购买
            */
            gold: number,
            /**
            * 称号卡
            * 用于重置称号
            */
            titleCard: number,
            /**
            * 盲盒
            * 可打开获得随机物品
            */
            BlindBox: number,
            /**
            * 改名卡
            * 用于角色改名/称号改名
            */
            changeNameCard: number,
            /**
            * 技能卡
            * 用于购买技能/遗忘技能
            */
            skillCard: number,
            /**
            * 传送卡
            * 用于传送大地图
            */
            transferCard: number,
            /** 复活币 */
            resLife: number,
            /** 小鱼干 */
            driedFish: number,
            /** 精灵球 */
            spiritBall: number,
            /** 进化卡 */
            evolveCard: number,
            /**
            * 正义值
            * 增加：刷怪,击杀红名玩家
            * 减少：击杀正义值玩家
            * 效果：商店出售消耗正义值商品
            */
            justice: number,
            /**
            * 红名值
            * 增加：击杀玩家增加
            * 减少：刷怪
            * 效果：商店不能购买东西
            */
            evil: number
        },
        bag: {
            icon: string,
            /** 装备名称 */
            name: string,
            story: string,
            /** 品质 */
            quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            /** 装备类型 */
            type: 0 | 1,
            /** 强化等级 */
            leve: number,
            /** 基础属性 */
            base_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            }
        }[],
        setUp: { textStyle: 0 | 1 },
        pet: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        }[],
        ancestry: {
            id: string,
            leve: number,
            exp: number,
            exp_max: number
        },
        team: {
            id: string,
            leve: 0 | 1,
            contribute: number
        },
        /** 小游戏统计 */
        minGameLog: {/** 猜数 */
            lottery: {
                partake: number,
                win: number
            }
        },
        id: string,
        icon: string,
        type: 0 | 1 | 2,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        pos: {
            x: number,
            y: number
        },
        exp: number,
        exp_max: number,
        lastResHpTime: number
    },
    /** 血统 */
    ancestry: {
        /** 血统来源 */
        from: string,
        /** 血统名称 */
        title: string,
        /** 血统等级0-9级 */
        leve: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        base: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill: number
    },
    userCfg: { textStyle: 0 | 1 }
}
```

---

## 坐标传送 <a id="/Me_callPos"></a>

**路径**
- POST `/Me_callPos`

**请求**
```ts
interface ReqMe_callPos {
    userId: string,
    x: number,
    y: number
}
```

**响应**
```ts
interface ResMe_callPos {
    mapName: string,
    callPos: {
        x: number,
        y: number
    },
    userCfg: { textStyle: 0 | 1 },
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    }
}
```

---

## Me_changeName <a id="/Me_changeName"></a>

**路径**
- POST `/Me_changeName`

**请求**
```ts
interface ReqMe_changeName {
    userId: string,
    changeName: string
}
```

**响应**
```ts
interface ResMe_changeName {
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    },
    lastName: string,
    newName: string,
    userCfg: { textStyle: 0 | 1 }
}
```

---

## Me_destroyBagEquip <a id="/Me_destroyBagEquip"></a>

**路径**
- POST `/Me_destroyBagEquip`

**请求**
```ts
interface ReqMe_destroyBagEquip {
    userId: string,
    /** -1：全部销毁 */
    destroyIndex: number
}
```

**响应**
```ts
interface ResMe_destroyBagEquip {

}
```

---

## Me_destroyMeSkill <a id="/Me_destroyMeSkill"></a>

**路径**
- POST `/Me_destroyMeSkill`

**请求**
```ts
interface ReqMe_destroyMeSkill {
    userId: string,
    destroyIndex: number
}
```

**响应**
```ts
interface ResMe_destroyMeSkill {
    userCfg: { textStyle: 0 | 1 }
}
```

---

## Me_equip <a id="/Me_equip"></a>

**路径**
- POST `/Me_equip`

**请求**
```ts
interface ReqMe_equip {
    userId: string
}
```

**响应**
```ts
interface ResMe_equip {
    userCfg: { textStyle: 0 | 1 },
    equipList: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        /** 装备类型 */
        type: 0 | 1,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        }
    }[]
}
```

---

## Me_lookBag <a id="/Me_lookBag"></a>

**路径**
- POST `/Me_lookBag`

**请求**
```ts
interface ReqMe_lookBag {
    userId: string,
    lookId: number
}
```

**响应**
```ts
interface ResMe_lookBag {
    userCfg: { textStyle: 0 | 1 },
    icon: string,
    /** 装备名称 */
    name: string,
    story: string,
    /** 品质 */
    quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
    /** 装备类型 */
    type: 0 | 1,
    /** 强化等级 */
    leve: number,
    /** 基础属性 */
    base_attribute: {
        hp_max: number,
        MagicAttack: number,
        PhysicalAttacks: number,
        MagicDefense: number,
        PhysicalDefense: number,
        secondResHp: number
    }
}
```

---

## Me_openBlindBox <a id="/Me_openBlindBox"></a>

**路径**
- POST `/Me_openBlindBox`

**请求**
```ts
interface ReqMe_openBlindBox {
    userId: string,
    openNum: number
}
```

**响应**
```ts
interface ResMe_openBlindBox {
    reward: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
        val: number
    }[],
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    },
    userCfg: { textStyle: 0 | 1 }
}
```

---

## Me_setUp <a id="/Me_setUp"></a>

**路径**
- POST `/Me_setUp`

**请求**
```ts
interface ReqMe_setUp {
    userId: string,
    setKey: string,
    setVal: any
}
```

**响应**
```ts
interface ResMe_setUp {

}
```

---

## Me_skill <a id="/Me_skill"></a>

**路径**
- POST `/Me_skill`

**请求**
```ts
interface ReqMe_skill {
    userId: string
}
```

**响应**
```ts
interface ResMe_skill {
    userCfg: { textStyle: 0 | 1 },
    skillList: string[]
}
```

---

## Me_strengthen <a id="/Me_strengthen"></a>

**路径**
- POST `/Me_strengthen`

**请求**
```ts
interface ReqMe_strengthen {
    userId: string,
    strengthenType: 0 | 1
}
```

**响应**
```ts
interface ResMe_strengthen {
    userCfg: { textStyle: 0 | 1 },
    bfEquip: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        /** 装备类型 */
        type: 0 | 1,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        }
    },
    nowEquip: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        /** 装备类型 */
        type: 0 | 1,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        }
    },
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    },
    rate: number,
    isSuccress: boolean
}
```

---

## Me_title <a id="/Me_title"></a>

**路径**
- POST `/Me_title`

**请求**
```ts
interface ReqMe_title {
    userId: string
}
```

**响应**
```ts
interface ResMe_title {
    userCfg: { textStyle: 0 | 1 },
    title: {
        name: string,
        leve: number,
        exp: number,
        todayGetExp: number,
        updateExpTime: number,
        exp_max: number,
        /** 随机次数 */
        randomCont: number,
        attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        }
    }
}
```

---

## Me_titleRandom <a id="/Me_titleRandom"></a>

**路径**
- POST `/Me_titleRandom`

**请求**
```ts
interface ReqMe_titleRandom {
    userId: string,
    randomCont: number
}
```

**响应**
```ts
interface ResMe_titleRandom {
    userCfg: { textStyle: 0 | 1 },
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11,
            val: number
        },
        now: number
    },
    bf: {
        hp_max: number,
        MagicAttack: number,
        PhysicalAttacks: number,
        MagicDefense: number,
        PhysicalDefense: number,
        secondResHp: number
    },
    now: {
        hp_max: number,
        MagicAttack: number,
        PhysicalAttacks: number,
        MagicDefense: number,
        PhysicalDefense: number,
        secondResHp: number
    }
}
```

---

## 我的钱包 <a id="/Me_wallet"></a>

**路径**
- POST `/Me_wallet`

**请求**
```ts
interface ReqMe_wallet {
    userId: string
}
```

**响应**
```ts
interface ResMe_wallet {
    /**
    * 金币
    * 用于商店购买
    */
    gold: number,
    /**
    * 称号卡
    * 用于重置称号
    */
    titleCard: number,
    /**
    * 盲盒
    * 可打开获得随机物品
    */
    BlindBox: number,
    /**
    * 改名卡
    * 用于角色改名/称号改名
    */
    changeNameCard: number,
    /**
    * 技能卡
    * 用于购买技能/遗忘技能
    */
    skillCard: number,
    /**
    * 传送卡
    * 用于传送大地图
    */
    transferCard: number,
    /** 复活币 */
    resLife: number,
    /** 小鱼干 */
    driedFish: number,
    /** 精灵球 */
    spiritBall: number,
    /** 进化卡 */
    evolveCard: number,
    /**
    * 正义值
    * 增加：刷怪,击杀红名玩家
    * 减少：击杀正义值玩家
    * 效果：商店出售消耗正义值商品
    */
    justice: number,
    /**
    * 红名值
    * 增加：击杀玩家增加
    * 减少：刷怪
    * 效果：商店不能购买东西
    */
    evil: number
}
```

---

## Me_wearEquip <a id="/Me_wearEquip"></a>

**路径**
- POST `/Me_wearEquip`

**请求**
```ts
interface ReqMe_wearEquip {
    userId: string,
    wearIndex: number
}
```

**响应**
```ts
interface ResMe_wearEquip {
    userCfg: { textStyle: 0 | 1 }
}
```

---

## Move <a id="/Move"></a>

**路径**
- POST `/Move`

**请求**
```ts
interface ReqMove {
    userId: string,
    direction: 0 | 1 | 2 | 3
}
```

**响应**
```ts
interface ResMove {
    pos_name: string,
    pos: {
        x: number,
        y: number
    },
    isTop: boolean,
    isButtom: boolean,
    isRight: boolean,
    isLeft: boolean,
    player: {
        /** 声望 */
        rankscore: number,
        sys: { creator_time: number },
        equip: {
            weapons?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 装备类型 */
                type: 0 | 1,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    PhysicalAttacks: number,
                    MagicDefense: number,
                    PhysicalDefense: number,
                    secondResHp: number
                }
            },
            subWeapon?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 装备类型 */
                type: 0 | 1,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    PhysicalAttacks: number,
                    MagicDefense: number,
                    PhysicalDefense: number,
                    secondResHp: number
                }
            }
        },
        title: {
            name: string,
            leve: number,
            exp: number,
            exp_max: number,
            /** 今日剩余可获取经验 */
            todayGetExp: number,
            /** 经验上限刷新时间 */
            updateExpTime: number,
            /** 随机次数 */
            randomCont: number,
            attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            }
        },
        /** 基因锁 */
        dnaLock: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        /** 额外附加属性（黑市） */
        add: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 签到数据 */
        sign: {
            cont: number,
            lastSignTime: number
        },
        task: {/** 阶梯计划任务等级 */
            ladderLeve: number
        },
        /** 钱包 */
        wallet: {
            /**
            * 金币
            * 用于商店购买
            */
            gold: number,
            /**
            * 称号卡
            * 用于重置称号
            */
            titleCard: number,
            /**
            * 盲盒
            * 可打开获得随机物品
            */
            BlindBox: number,
            /**
            * 改名卡
            * 用于角色改名/称号改名
            */
            changeNameCard: number,
            /**
            * 技能卡
            * 用于购买技能/遗忘技能
            */
            skillCard: number,
            /**
            * 传送卡
            * 用于传送大地图
            */
            transferCard: number,
            /** 复活币 */
            resLife: number,
            /** 小鱼干 */
            driedFish: number,
            /** 精灵球 */
            spiritBall: number,
            /** 进化卡 */
            evolveCard: number,
            /**
            * 正义值
            * 增加：刷怪,击杀红名玩家
            * 减少：击杀正义值玩家
            * 效果：商店出售消耗正义值商品
            */
            justice: number,
            /**
            * 红名值
            * 增加：击杀玩家增加
            * 减少：刷怪
            * 效果：商店不能购买东西
            */
            evil: number
        },
        bag: {
            icon: string,
            /** 装备名称 */
            name: string,
            story: string,
            /** 品质 */
            quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            /** 装备类型 */
            type: 0 | 1,
            /** 强化等级 */
            leve: number,
            /** 基础属性 */
            base_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            }
        }[],
        setUp: { textStyle: 0 | 1 },
        pet: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        }[],
        ancestry: {
            id: string,
            leve: number,
            exp: number,
            exp_max: number
        },
        team: {
            id: string,
            leve: 0 | 1,
            contribute: number
        },
        /** 小游戏统计 */
        minGameLog: {/** 猜数 */
            lottery: {
                partake: number,
                win: number
            }
        },
        id: string,
        icon: string,
        type: 0 | 1 | 2,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        pos: {
            x: number,
            y: number
        },
        exp: number,
        exp_max: number,
        lastResHpTime: number
    }[]
}
```

---

## 当前位置接口 <a id="/Pos"></a>

**路径**
- POST `/Pos`

**请求**
```ts
interface ReqPos {
    userId: string
}
```

**响应**
```ts
interface ResPos {
    pos_name: string,
    posTiledId: number,
    pos: {
        x: number,
        y: number
    },
    isTop: boolean,
    isButtom: boolean,
    isRight: boolean,
    isLeft: boolean,
    enemy: {
        id: string,
        icon: string,
        type: 0 | 1 | 2,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        pos: {
            x: number,
            y: number
        },
        exp: number,
        exp_max: number,
        lastResHpTime: number
    }[],
    player: {
        /** 声望 */
        rankscore: number,
        sys: { creator_time: number },
        equip: {
            weapons?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 装备类型 */
                type: 0 | 1,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    PhysicalAttacks: number,
                    MagicDefense: number,
                    PhysicalDefense: number,
                    secondResHp: number
                }
            },
            subWeapon?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 装备类型 */
                type: 0 | 1,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    PhysicalAttacks: number,
                    MagicDefense: number,
                    PhysicalDefense: number,
                    secondResHp: number
                }
            }
        },
        title: {
            name: string,
            leve: number,
            exp: number,
            exp_max: number,
            /** 今日剩余可获取经验 */
            todayGetExp: number,
            /** 经验上限刷新时间 */
            updateExpTime: number,
            /** 随机次数 */
            randomCont: number,
            attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            }
        },
        /** 基因锁 */
        dnaLock: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        /** 额外附加属性（黑市） */
        add: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 签到数据 */
        sign: {
            cont: number,
            lastSignTime: number
        },
        task: {/** 阶梯计划任务等级 */
            ladderLeve: number
        },
        /** 钱包 */
        wallet: {
            /**
            * 金币
            * 用于商店购买
            */
            gold: number,
            /**
            * 称号卡
            * 用于重置称号
            */
            titleCard: number,
            /**
            * 盲盒
            * 可打开获得随机物品
            */
            BlindBox: number,
            /**
            * 改名卡
            * 用于角色改名/称号改名
            */
            changeNameCard: number,
            /**
            * 技能卡
            * 用于购买技能/遗忘技能
            */
            skillCard: number,
            /**
            * 传送卡
            * 用于传送大地图
            */
            transferCard: number,
            /** 复活币 */
            resLife: number,
            /** 小鱼干 */
            driedFish: number,
            /** 精灵球 */
            spiritBall: number,
            /** 进化卡 */
            evolveCard: number,
            /**
            * 正义值
            * 增加：刷怪,击杀红名玩家
            * 减少：击杀正义值玩家
            * 效果：商店出售消耗正义值商品
            */
            justice: number,
            /**
            * 红名值
            * 增加：击杀玩家增加
            * 减少：刷怪
            * 效果：商店不能购买东西
            */
            evil: number
        },
        bag: {
            icon: string,
            /** 装备名称 */
            name: string,
            story: string,
            /** 品质 */
            quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            /** 装备类型 */
            type: 0 | 1,
            /** 强化等级 */
            leve: number,
            /** 基础属性 */
            base_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            }
        }[],
        setUp: { textStyle: 0 | 1 },
        pet: {
            id: string,
            icon: string,
            type: 0 | 1 | 2,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                PhysicalAttacks: number,
                MagicDefense: number,
                PhysicalDefense: number,
                secondResHp: number
            },
            pos: {
                x: number,
                y: number
            },
            exp: number,
            exp_max: number,
            lastResHpTime: number
        }[],
        ancestry: {
            id: string,
            leve: number,
            exp: number,
            exp_max: number
        },
        team: {
            id: string,
            leve: 0 | 1,
            contribute: number
        },
        /** 小游戏统计 */
        minGameLog: {/** 猜数 */
            lottery: {
                partake: number,
                win: number
            }
        },
        id: string,
        icon: string,
        type: 0 | 1 | 2,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        pos: {
            x: number,
            y: number
        },
        exp: number,
        exp_max: number,
        lastResHpTime: number
    }[],
    chest: {
        /** 宝箱等级 */
        leve: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
        isOpen: boolean
    }[],
    /** 我的头像 */
    meIcon: string
}
```

---

## 复活治疗接口 <a id="/ResLife"></a>

正常情况下死亡会在下一次请求任意API时复活

**路径**
- POST `/ResLife`

**请求**
```ts
interface ReqResLife {
    userId: string
}
```

**响应**
```ts
interface ResResLife {

}
```

---

## SearchSkill <a id="/SearchSkill"></a>

**路径**
- POST `/SearchSkill`

**请求**
```ts
interface ReqSearchSkill {
    userId: string,
    skillName: string
}
```

**响应**
```ts
interface ResSearchSkill {
    /** 主动技能 */
    skill: {
        id: number,
        name: string,
        tips: string,
        story: string,
        type: 0 | 1 | 2,
        speed: number,
        data: number[]
    },
    userCfg: { textStyle: 0 | 1 },
    match: number
}
```

---

## 用户签到接口 <a id="/Sign"></a>

**路径**
- POST `/Sign`

**请求**
```ts
interface ReqSign {
    userId: string
}
```

**响应**
```ts
interface ResSign {
    /** 今天是否重复签到 */
    isRepeat: boolean,
    /** 累计签到 */
    cont: number,
    /** 一言 */
    oneWord: string,
    /**
    * 上次签到时间
    * 1665841521
    */
    lastSignTime: number,
    userCfg: { textStyle: 0 | 1 }
}
```

