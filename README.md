
# 达尔文进化岛V3 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- ancestry
    - [我的进化](#/ancestry/Me_Ancestry)
    - [重置进化](#/ancestry/Me_randomAncestry)
- auction
    - [拍卖物品/装备](#/auction/Auction)
    - [查看拍卖行](#/auction/Auction_look)
    - [拍卖行出价](#/auction/Auction_offer)
- battle
    - [攻击世界BOSS](#/battle/AttackBoss)
    - [破壁计划:挑战完成将会获得奖励和切换地图](#/battle/Challenge_box)
    - [强者挑战](#/battle/Challenge_downUser)
    - [伤害挑战](#/battle/Challenge_hit)
    - [挑战自身镜像](#/battle/Challenge_image)
    - [Challenge_infinite](#/battle/Challenge_infinite)
    - [Challenge_power](#/battle/Challenge_power)
    - [攻击频道内指定玩家](#/battle/PkRank)
    - [攻击当前位置怪物](#/battle/PosAttackEnemy)
    - [攻击当前位置玩家](#/battle/PosAttackPlayer)
    - [排位](#/battle/Rank)
- map
    - [捕捉当前位置怪物](#/map/Docile)
    - [移动](#/map/Move)
    - [打开当前位置宝箱](#/map/OpenMapChestBox)
    - [在当前位置钓鱼](#/map/fishing)
- me
    - autoPlay
        - [结束自动挂机](#/me/autoPlay/endAutoPlay)
        - [开始自动挂机](#/me/autoPlay/startAutoPlay)
    - equip
        - [Me_destroyBagEquip](#/me/equip/Me_destroyBagEquip)
        - [Me_strengthen](#/me/equip/Me_strengthen)
        - [Me_wearEquip](#/me/equip/Me_wearEquip)
    - title
        - [重置称号](#/me/title/Me_titleRandom)
        - [称号改名](#/me/title/Me_title_changeName)
- minGame
    - [Horse](#/minGame/Horse)
    - [小游戏:猜数魔改版](#/minGame/MinGame_lottery)
- pet
    - [我的宠物](#/pet/Me_pet)
    - [宠物改名](#/pet/Me_petChangeName)
    - [查看指定宠物](#/pet/Me_petLook)
    - [删除宠物](#/pet/Me_petRm)
- rank
    - [魔攻排行榜](#/rank/Rank_MagicAttack)
    - [Rank_MagicDefense](#/rank/Rank_MagicDefense)
    - [Rank_PhysicalAttacks](#/rank/Rank_PhysicalAttacks)
    - [Rank_PhysicalDefense](#/rank/Rank_PhysicalDefense)
    - [血统等级排行榜](#/rank/Rank_ancestry)
    - [Rank_contribute](#/rank/Rank_contribute)
    - [基因锁等级排行榜](#/rank/Rank_dnaLv)
    - [红名排行榜](#/rank/Rank_evil)
    - [金币排行榜](#/rank/Rank_gold)
    - [Rank_hp](#/rank/Rank_hp)
    - [正义值排行榜](#/rank/Rank_justice)
    - [等级排行榜](#/rank/Rank_leve)
    - [战力拍卖行](#/rank/Rank_military)
    - [宠物战力排行榜](#/rank/Rank_military_pet)
    - [Rank_minGame_horse_cont](#/rank/Rank_minGame_horse_cont)
    - [Rank_minGame_horse_die](#/rank/Rank_minGame_horse_die)
    - [Rank_minGame_horse_win](#/rank/Rank_minGame_horse_win)
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
    - [黑市商店购买](#/shop/Shop_back)
    - [黑市商店](#/shop/Shop_back_buy)
    - [黑市商店](#/shop/Shop_equip)
    - [装备商店购买](#/shop/Shop_equip_buy)
    - [头像商店](#/shop/Shop_icon)
    - [头像商店购买](#/shop/Shop_icon_buy)
    - [声望商店](#/shop/Shop_rankscore)
    - [Shop_rankscore_buy](#/shop/Shop_rankscore_buy)
    - [技能商店](#/shop/Shop_skill)
    - [技能商店购买](#/shop/Shop_skill_buy)
    - [工会商店](#/shop/Shop_team)
    - [工会商店购买](#/shop/Shop_team_buy)
- store
    - [从仓库内取出道具](#/store/store_get)
    - [查看仓库](#/store/store_look)
    - [背包存装备到仓库](#/store/store_save_equip)
- task
    - [查看每日任务](#/task/EverDayTask)
    - [NewUsetTask](#/task/NewUsetTask)
    - [阶梯任务](#/task/soaringTask)
- team
    - [修改工会名称](#/team/ChangeName_team)
    - [创建加入工会邀请码](#/team/CreatorJoinCode_team)
    - [创建工会](#/team/Creator_team)
    - [Dismiss_team](#/team/Dismiss_team)
    - [Join_team](#/team/Join_team)
    - [KicOut_team](#/team/KicOut_team)
    - [Me_team](#/team/Me_team)
    - [Out_team](#/team/Out_team)
    - [UserList](#/team/UserList)
- vip
    - [Me_lookVip](#/vip/Me_lookVip)
- [AddOneWord](#/AddOneWord)
- [背包查看](#/Bag)
- [你好，世界](#/Hello)
- [我的属性](#/Me_Attribute)
- [坐标传送](#/Me_callPos)
- [Me_changeName](#/Me_changeName)
- [Me_destroyMeSkill](#/Me_destroyMeSkill)
- [Me_equip](#/Me_equip)
- [Me_lookBag](#/Me_lookBag)
- [Me_openBlindBox](#/Me_openBlindBox)
- [Me_skill](#/Me_skill)
- [Me_title](#/Me_title)
- [我的钱包](#/Me_wallet)
- [当前位置接口](#/Pos)
- [复活治疗接口](#/ResLife)
- [SearchSkill](#/SearchSkill)
- [用户签到接口](#/Sign)

---

## ancestry

### 我的进化 <a id="/ancestry/Me_Ancestry"></a>

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
        leve: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13,
        base: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill: number
    },
    /** 主动技能 */
    SK: {
        isSell: boolean,
        id: number,
        name: string,
        story: string,
        type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
        speed: number,
        data: any[]
    },
    /** 用户血统信息 */
    info: {
        id: string,
        leve: number,
        exp: number,
        exp_max: number,
        /** 经验上限刷新时间 */
        updateExpTime: number,
        /** 今日剩余可获取经验 */
        todayGetExp: number
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
        leve: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13,
        base: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill: number
    },
    /** 主动技能 */
    SK: {
        isSell: boolean,
        id: number,
        name: string,
        story: string,
        type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
        speed: number,
        data: any[]
    },
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
}
```

---

## auction

### 拍卖物品/装备 <a id="/auction/Auction"></a>

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

### 查看拍卖行 <a id="/auction/Auction_look"></a>

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
    }
}
```

---

### 拍卖行出价 <a id="/auction/Auction_offer"></a>

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

}
```

---

## battle

### 攻击世界BOSS <a id="/battle/AttackBoss"></a>

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
    /** 伤害贡献 */
    hurt: number,
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
            type: 0 | 1 | 2 | 3 | 4,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            data?: number[]
        }[]
    }[],
    kill_log: {
        round: number,
        body: { name: string },
        die_body: { name: string }
    }[],
    reward?: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[]
}
```

---

### 破壁计划:挑战完成将会获得奖励和切换地图 <a id="/battle/Challenge_box"></a>

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
                type: 0 | 1 | 2 | 3 | 4,
                val: number,
                /** 技能目标 */
                tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 技能统计单位 */
                unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                data?: number[]
            }[]
        }[],
        kill_log: {
            round: number,
            body: { name: string },
            die_body: { name: string }
        }[],
        reward?: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
            val: number
        }[],
        /** 总伤害 */
        hurt: number
    },
    isMax: boolean,
    /**
    * 开启副本限制
    * 这里为基因锁限制
    */
    openlimit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20,
    /** 胜利奖励 */
    win: string,
    /** 失败 */
    fail: string,
    /** 计划完成度 */
    completion: number,
    /** 参与度 */
    partakeCont: number,
    /** 挑战次数 */
    challengeCont: number,
    /** 本次伤害 */
    hurt: number
}
```

---

### 强者挑战 <a id="/battle/Challenge_downUser"></a>

**路径**
- POST `/battle/Challenge_downUser`

**请求**
```ts
interface ReqChallenge_downUser {
    userId: string,
    isStart: boolean
}
```

**响应**
```ts
interface ResChallenge_downUser {
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
                type: 0 | 1 | 2 | 3 | 4,
                val: number,
                /** 技能目标 */
                tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 技能统计单位 */
                unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                data?: number[]
            }[]
        }[],
        kill_log: {
            round: number,
            body: { name: string },
            die_body: { name: string }
        }[],
        reward?: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
            val: number
        }[],
        /** 总伤害 */
        hurt: number
    },
    /** 下一级基因锁 */
    nextDNA: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20,
    /** 挑战胜利将增幅属性 */
    winAdd: number,
    /** 失败将扣除等级 */
    failDel: number,
    isMax: boolean,
    /** 挑战的玩家数量 */
    challenge_cont: number
}
```

---

### 伤害挑战 <a id="/battle/Challenge_hit"></a>

**路径**
- POST `/battle/Challenge_hit`

**请求**
```ts
interface ReqChallenge_hit {
    userId: string
}
```

**响应**
```ts
interface ResChallenge_hit {
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
            type: 0 | 1 | 2 | 3 | 4,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            data?: number[]
        }[]
    }[],
    kill_log: {
        round: number,
        body: { name: string },
        die_body: { name: string }
    }[],
    reward?: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[],
    /** 总伤害 */
    hurt: number
}
```

---

### 挑战自身镜像 <a id="/battle/Challenge_image"></a>

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
                type: 0 | 1 | 2 | 3 | 4,
                val: number,
                /** 技能目标 */
                tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 技能统计单位 */
                unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                data?: number[]
            }[]
        }[],
        kill_log: {
            round: number,
            body: { name: string },
            die_body: { name: string }
        }[],
        reward?: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
            val: number
        }[],
        /** 总伤害 */
        hurt: number
    },
    isMax: boolean,
    /** 下一级基因锁 */
    nextDNA: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20,
    /** 镜像等级 */
    imageLeve: number,
    /** 镜像基因锁 */
    imageDNALeve: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20,
    /** 挑战胜利将增幅属性 */
    winAdd: number,
    /** 失败将扣除等级 */
    failDel: number
}
```

---

### Challenge_infinite <a id="/battle/Challenge_infinite"></a>

**路径**
- POST `/battle/Challenge_infinite`

**请求**
```ts
interface ReqChallenge_infinite {
    userId: string,
    isStart: boolean
}
```

**响应**
```ts
interface ResChallenge_infinite {
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
                type: 0 | 1 | 2 | 3 | 4,
                val: number,
                /** 技能目标 */
                tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 技能统计单位 */
                unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                data?: number[]
            }[]
        }[],
        kill_log: {
            round: number,
            body: { name: string },
            die_body: { name: string }
        }[],
        reward?: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
            val: number
        }[],
        /** 总伤害 */
        hurt: number
    },
    /** 当前层数 */
    layers: number
}
```

---

### Challenge_power <a id="/battle/Challenge_power"></a>

**路径**
- POST `/battle/Challenge_power`

**请求**
```ts
interface ReqChallenge_power {
    userId: string,
    isStart: boolean
}
```

**响应**
```ts
interface ResChallenge_power {
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
                type: 0 | 1 | 2 | 3 | 4,
                val: number,
                /** 技能目标 */
                tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                /** 技能统计单位 */
                unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
                data?: number[]
            }[]
        }[],
        kill_log: {
            round: number,
            body: { name: string },
            die_body: { name: string }
        }[],
        reward?: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
            val: number
        }[],
        /** 总伤害 */
        hurt: number
    },
    /** 下一级基因锁 */
    nextDNA: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20,
    /** 所需伤害 */
    needHit: number,
    /** 战斗回合数 */
    battle_round: number,
    /** 挑战胜利将增幅属性 */
    winAdd: number,
    /** 失败将扣除等级 */
    failDel: number,
    isMax: boolean
}
```

---

### 攻击频道内指定玩家 <a id="/battle/PkRank"></a>

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
            type: 0 | 1 | 2 | 3 | 4,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            data?: number[]
        }[]
    }[],
    kill_log: {
        round: number,
        body: { name: string },
        die_body: { name: string }
    }[],
    reward?: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[],
    /** 总伤害 */
    hurt: number
}
```

---

### 攻击当前位置怪物 <a id="/battle/PosAttackEnemy"></a>

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
            type: 0 | 1 | 2 | 3 | 4,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            data?: number[]
        }[]
    }[],
    kill_log: {
        round: number,
        body: { name: string },
        die_body: { name: string }
    }[],
    reward?: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[],
    /** 总伤害 */
    hurt: number
}
```

---

### 攻击当前位置玩家 <a id="/battle/PosAttackPlayer"></a>

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
            type: 0 | 1 | 2 | 3 | 4,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            data?: number[]
        }[]
    }[],
    kill_log: {
        round: number,
        body: { name: string },
        die_body: { name: string }
    }[],
    reward?: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[],
    /** 总伤害 */
    hurt: number
}
```

---

### 排位 <a id="/battle/Rank"></a>

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
            type: 0 | 1 | 2 | 3 | 4,
            val: number,
            /** 技能目标 */
            tag: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            /** 技能统计单位 */
            unit: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
            data?: number[]
        }[]
    }[],
    kill_log: {
        round: number,
        body: { name: string },
        die_body: { name: string }
    }[],
    reward?: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[],
    /** 总伤害 */
    hurt: number
}
```

---

## map

### 捕捉当前位置怪物 <a id="/map/Docile"></a>

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
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
}
```

---

### 移动 <a id="/map/Move"></a>

**路径**
- POST `/map/Move`

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
        isVip?: boolean,
        /** 声望 */
        rankscore: number,
        sys: { creator_time: number },
        /** 0资源，1装备 */
        store: {
            type: any,
            data: any
        }[],
        equip: {
            weapons?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            /** 副武器 */
            subWeapon?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            /** 衣服 */
            clothes?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            necklace?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            hat?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            medal?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
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
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
                PhysicalDefense: number,
                secondResHp: number
            }
        },
        /** 基因锁 */
        dnaLock: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20,
        /** 额外附加属性（黑市） */
        add: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 签到数据 */
        sign: {
            cont: number,
            lastSignTime: number
        },
        task: {/** 阶梯任务等级 */
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
            evil: number,
            /** 碎片 */
            strengthen: number
        },
        bag: {
            icon: string,
            /** 装备名称 */
            name: string,
            story: string,
            /** 品质 */
            quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
            /** 装备类型 */
            type: 0 | 1 | 2 | 3 | 4 | 5,
            /** 强化等级 */
            leve: number,
            /** 基础属性 */
            base_attribute: {
                hp_max: number,
                MagicAttack: number,
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
                PhysicalDefense: number,
                secondResHp: number
            },
            /** 附带技能 */
            skill_active_id?: number,
            /** 主动技能 */
            outSkillData?: {
                isSell: boolean,
                id: number,
                name: string,
                story: string,
                type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                speed: number,
                data: any[]
            }
        }[],
        pet: {
            id: string,
            /** 战力 */
            military: number,
            icon: string,
            type: 0 | 1 | 2 | 3,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
                PhysicalDefense: number,
                secondResHp: number
            },
            attribute?: {
                hp_max: number,
                MagicAttack: number,
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
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
            exp_max: number,
            /** 经验上限刷新时间 */
            updateExpTime: number,
            /** 今日剩余可获取经验 */
            todayGetExp: number
        },
        team: {
            /** 队伍ID */
            id: string,
            /** 职位等级 */
            leve: 0 | 1,
            /** 工会贡献 */
            contribute: number
        },
        /** 小游戏统计 */
        minGameLog: {
            /** 猜数 */
            lottery: {
                partake: number,
                win: number
            },
            /** 马拉松 */
            horse: {
                partake: number,
                win: number,
                die: number
            },
            /** 无尽回廊 */
            infinite: {
                /** 层数 */
                layer: number,
                /** 调整次数 */
                cont: number
            }
        },
        id: string,
        /** 战力 */
        military: number,
        icon: string,
        type: 0 | 1 | 2 | 3,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        attribute?: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
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

### 打开当前位置宝箱 <a id="/map/OpenMapChestBox"></a>

**路径**
- POST `/map/OpenMapChestBox`

**请求**
```ts
interface ReqOpenMapChestBox {
    /** 88 打开全部宝箱 */
    userId: string,
    openIndex: number
}
```

**响应**
```ts
interface ResOpenMapChestBox {
    reward: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[]
}
```

---

### 在当前位置钓鱼 <a id="/map/fishing"></a>

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
    jin: number,
    fish: string,
    reward: number,
    tips: string | undefined
}
```

---

## me

### autoPlay

#### 结束自动挂机 <a id="/me/autoPlay/endAutoPlay"></a>

**路径**
- POST `/me/autoPlay/endAutoPlay`

**请求**
```ts
interface ReqendAutoPlay {
    userId: string
}
```

**响应**
```ts
interface ResendAutoPlay {
    startTime: number,
    channel_id: string,
    id: string
}
```

---

#### 开始自动挂机 <a id="/me/autoPlay/startAutoPlay"></a>

**路径**
- POST `/me/autoPlay/startAutoPlay`

**请求**
```ts
interface ReqstartAutoPlay {
    userId: string,
    channel_id: string
}
```

**响应**
```ts
interface ResstartAutoPlay {
    startTime: number,
    channel_id: string,
    id: string
}
```

---

### equip

#### Me_destroyBagEquip <a id="/me/equip/Me_destroyBagEquip"></a>

**路径**
- POST `/me/equip/Me_destroyBagEquip`

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
    reward?: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[]
}
```

---

#### Me_strengthen <a id="/me/equip/Me_strengthen"></a>

**路径**
- POST `/me/equip/Me_strengthen`

**请求**
```ts
interface ReqMe_strengthen {
    userId: string,
    strengthenType: 0 | 1 | 2 | 3 | 4 | 5
}
```

**响应**
```ts
interface ResMe_strengthen {
    bfEquip: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
        /** 装备类型 */
        type: 0 | 1 | 2 | 3 | 4 | 5,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill_active_id?: number,
        /** 主动技能 */
        outSkillData?: {
            isSell: boolean,
            id: number,
            name: string,
            story: string,
            type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
            speed: number,
            data: any[]
        }
    },
    nowEquip: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
        /** 装备类型 */
        type: 0 | 1 | 2 | 3 | 4 | 5,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill_active_id?: number,
        /** 主动技能 */
        outSkillData?: {
            isSell: boolean,
            id: number,
            name: string,
            story: string,
            type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
            speed: number,
            data: any[]
        }
    },
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    },
    rate: number,
    isSuccress: boolean
}
```

---

#### Me_wearEquip <a id="/me/equip/Me_wearEquip"></a>

**路径**
- POST `/me/equip/Me_wearEquip`

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
    /** 之前的装备 */
    lastEquip: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
        /** 装备类型 */
        type: 0 | 1 | 2 | 3 | 4 | 5,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill_active_id?: number,
        /** 主动技能 */
        outSkillData?: {
            isSell: boolean,
            id: number,
            name: string,
            story: string,
            type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
            speed: number,
            data: any[]
        }
    } | undefined,
    /** 现在穿上的装备 */
    nowEquip: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
        /** 装备类型 */
        type: 0 | 1 | 2 | 3 | 4 | 5,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill_active_id?: number,
        /** 主动技能 */
        outSkillData?: {
            isSell: boolean,
            id: number,
            name: string,
            story: string,
            type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
            speed: number,
            data: any[]
        }
    },
    /** 战力变化 */
    change_military: number
}
```

---

### title

#### 重置称号 <a id="/me/title/Me_titleRandom"></a>

**路径**
- POST `/me/title/Me_titleRandom`

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
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    },
    bf: {
        hp_max: number,
        MagicAttack: number,
        /** 物理攻击 */
        PhysicalAttacks: number,
        /** 魔法防御 */
        MagicDefense: number,
        /** 物理防御 */
        PhysicalDefense: number,
        secondResHp: number
    },
    now: {
        hp_max: number,
        MagicAttack: number,
        /** 物理攻击 */
        PhysicalAttacks: number,
        /** 魔法防御 */
        MagicDefense: number,
        /** 物理防御 */
        PhysicalDefense: number,
        secondResHp: number
    }
}
```

---

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
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
}
```

---

## minGame

### Horse <a id="/minGame/Horse"></a>

**路径**
- POST `/minGame/Horse`

**请求**
```ts
interface ReqHorse {
    userId: string,
    type: 0 | 1 | 2,
    joinPetIndex?: number
}
```

**响应**
```ts
interface ResHorse {
    state: 0 | 1,
    /** 第几次赛事 */
    round: number,
    /** 当前参赛人数 */
    nowCont: number,
    /** 最大参赛人数 */
    maxCont: number,
    /** 赛事总共奖励 */
    allGift: number,
    /** 参赛价格 */
    buyCondition: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
        val: number
    }
}
```

---

### 小游戏:猜数魔改版 <a id="/minGame/MinGame_lottery"></a>

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
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    },
    reward: number
}
```

---

## pet

### 我的宠物 <a id="/pet/Me_pet"></a>

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
        /** 战力 */
        military: number,
        icon: string,
        type: 0 | 1 | 2 | 3,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        attribute?: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
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

### 宠物改名 <a id="/pet/Me_petChangeName"></a>

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
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
}
```

---

### 查看指定宠物 <a id="/pet/Me_petLook"></a>

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
        /** 战力 */
        military: number,
        icon: string,
        type: 0 | 1 | 2 | 3,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        attribute?: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
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

### 删除宠物 <a id="/pet/Me_petRm"></a>

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

### 魔攻排行榜 <a id="/rank/Rank_MagicAttack"></a>

**路径**
- POST `/rank/Rank_MagicAttack`

**请求**
```ts
interface ReqRank_MagicAttack {
    userId: string
}
```

**响应**
```ts
interface ResRank_MagicAttack {
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

### Rank_MagicDefense <a id="/rank/Rank_MagicDefense"></a>

**路径**
- POST `/rank/Rank_MagicDefense`

**请求**
```ts
interface ReqRank_MagicDefense {
    userId: string
}
```

**响应**
```ts
interface ResRank_MagicDefense {
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

### Rank_PhysicalAttacks <a id="/rank/Rank_PhysicalAttacks"></a>

**路径**
- POST `/rank/Rank_PhysicalAttacks`

**请求**
```ts
interface ReqRank_PhysicalAttacks {
    userId: string
}
```

**响应**
```ts
interface ResRank_PhysicalAttacks {
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

### Rank_PhysicalDefense <a id="/rank/Rank_PhysicalDefense"></a>

**路径**
- POST `/rank/Rank_PhysicalDefense`

**请求**
```ts
interface ReqRank_PhysicalDefense {
    userId: string
}
```

**响应**
```ts
interface ResRank_PhysicalDefense {
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

### 血统等级排行榜 <a id="/rank/Rank_ancestry"></a>

**路径**
- POST `/rank/Rank_ancestry`

**请求**
```ts
interface ReqRank_ancestry {
    userId: string
}
```

**响应**
```ts
interface ResRank_ancestry {
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

### Rank_contribute <a id="/rank/Rank_contribute"></a>

**路径**
- POST `/rank/Rank_contribute`

**请求**
```ts
interface ReqRank_contribute {
    userId: string
}
```

**响应**
```ts
interface ResRank_contribute {
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

### 基因锁等级排行榜 <a id="/rank/Rank_dnaLv"></a>

**路径**
- POST `/rank/Rank_dnaLv`

**请求**
```ts
interface ReqRank_dnaLv {
    userId: string
}
```

**响应**
```ts
interface ResRank_dnaLv {
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

### 红名排行榜 <a id="/rank/Rank_evil"></a>

**路径**
- POST `/rank/Rank_evil`

**请求**
```ts
interface ReqRank_evil {
    userId: string
}
```

**响应**
```ts
interface ResRank_evil {
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

### 金币排行榜 <a id="/rank/Rank_gold"></a>

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

### Rank_hp <a id="/rank/Rank_hp"></a>

**路径**
- POST `/rank/Rank_hp`

**请求**
```ts
interface ReqRank_hp {
    userId: string
}
```

**响应**
```ts
interface ResRank_hp {
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

### 正义值排行榜 <a id="/rank/Rank_justice"></a>

**路径**
- POST `/rank/Rank_justice`

**请求**
```ts
interface ReqRank_justice {
    userId: string
}
```

**响应**
```ts
interface ResRank_justice {
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

### 战力拍卖行 <a id="/rank/Rank_military"></a>

**路径**
- POST `/rank/Rank_military`

**请求**
```ts
interface ReqRank_military {
    userId: string
}
```

**响应**
```ts
interface ResRank_military {
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

### 宠物战力排行榜 <a id="/rank/Rank_military_pet"></a>

**路径**
- POST `/rank/Rank_military_pet`

**请求**
```ts
interface ReqRank_military_pet {
    userId: string
}
```

**响应**
```ts
interface ResRank_military_pet {
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

### Rank_minGame_horse_cont <a id="/rank/Rank_minGame_horse_cont"></a>

**路径**
- POST `/rank/Rank_minGame_horse_cont`

**请求**
```ts
interface ReqRank_minGame_horse_cont {
    userId: string
}
```

**响应**
```ts
interface ResRank_minGame_horse_cont {
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

### Rank_minGame_horse_die <a id="/rank/Rank_minGame_horse_die"></a>

**路径**
- POST `/rank/Rank_minGame_horse_die`

**请求**
```ts
interface ReqRank_minGame_horse_die {
    userId: string
}
```

**响应**
```ts
interface ResRank_minGame_horse_die {
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

### Rank_minGame_horse_win <a id="/rank/Rank_minGame_horse_win"></a>

**路径**
- POST `/rank/Rank_minGame_horse_win`

**请求**
```ts
interface ReqRank_minGame_horse_win {
    userId: string
}
```

**响应**
```ts
interface ResRank_minGame_horse_win {
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

### 黑市商店购买 <a id="/shop/Shop_back"></a>

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
    /** 出售的模板id */
    sell_temp: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8,
    /** 刷新的时间 */
    creatorTime: number,
    /** 下次刷新时间 */
    nextUpdateTime: number,
    /** 已出售数量 */
    sellNum: number,
    /** 购买条件 */
    buyCondition: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
        val: number
    },
    /** 本次库存 */
    stock: number,
    /** 商店总共刷新次数 */
    updateNum: number
}
```

---

### 黑市商店 <a id="/shop/Shop_back_buy"></a>

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
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
}
```

---

### 黑市商店 <a id="/shop/Shop_equip"></a>

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
    /** 出售的模板id */
    sell_temp: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
        /** 装备类型 */
        type: 0 | 1 | 2 | 3 | 4 | 5,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill_active_id?: number,
        /** 主动技能 */
        outSkillData?: {
            isSell: boolean,
            id: number,
            name: string,
            story: string,
            type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
            speed: number,
            data: any[]
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
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
        val: number
    },
    /** 本次库存 */
    stock: number,
    /** 商店总共刷新次数 */
    updateNum: number
}
```

---

### 装备商店购买 <a id="/shop/Shop_equip_buy"></a>

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
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
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
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
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
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
}
```

---

### 声望商店 <a id="/shop/Shop_rankscore"></a>

**路径**
- POST `/shop/Shop_rankscore`

**请求**
```ts
interface ReqShop_rankscore {
    userId: string
}
```

**响应**
```ts
interface ResShop_rankscore {
    /** 出售的模板id */
    sell_temp: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    },
    /** 刷新的时间 */
    creatorTime: number,
    /** 下次刷新时间 */
    nextUpdateTime: number,
    /** 已出售数量 */
    sellNum: number,
    /** 购买条件 */
    buyCondition: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    },
    /** 本次库存 */
    stock: number,
    /** 商店总共刷新次数 */
    updateNum: number
}
```

---

### Shop_rankscore_buy <a id="/shop/Shop_rankscore_buy"></a>

**路径**
- POST `/shop/Shop_rankscore_buy`

**请求**
```ts
interface ReqShop_rankscore_buy {
    userId: string
}
```

**响应**
```ts
interface ResShop_rankscore_buy {
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
}
```

---

### 技能商店 <a id="/shop/Shop_skill"></a>

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
    /** 出售的模板id */
    sell_temp: {
        isSell: boolean,
        id: number,
        name: string,
        story: string,
        type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
        speed: number,
        data: any[]
    },
    /** 刷新的时间 */
    creatorTime: number,
    /** 下次刷新时间 */
    nextUpdateTime: number,
    /** 已出售数量 */
    sellNum: number,
    /** 购买条件 */
    buyCondition: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
        val: number
    },
    /** 本次库存 */
    stock: number,
    /** 商店总共刷新次数 */
    updateNum: number
}
```

---

### 技能商店购买 <a id="/shop/Shop_skill_buy"></a>

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
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
}
```

---

### 工会商店 <a id="/shop/Shop_team"></a>

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
    /** 出售的模板id */
    sell_temp: 0 | 1 | 2 | 3 | 4 | 5 | 6,
    /** 刷新的时间 */
    creatorTime: number,
    /** 下次刷新时间 */
    nextUpdateTime: number,
    /** 已出售数量 */
    sellNum: number,
    /** 购买条件 */
    buyCondition: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    },
    /** 本次库存 */
    stock: number,
    /** 商店总共刷新次数 */
    updateNum: number
}
```

---

### 工会商店购买 <a id="/shop/Shop_team_buy"></a>

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
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
}
```

---

## store

### 从仓库内取出道具 <a id="/store/store_get"></a>

**路径**
- POST `/store/store_get`

**请求**
```ts
interface Reqstore_get {
    userId: string,
    storeIndex: number
}
```

**响应**
```ts
interface Resstore_get {

}
```

---

### 查看仓库 <a id="/store/store_look"></a>

**路径**
- POST `/store/store_look`

**请求**
```ts
interface Reqstore_look {
    userId: string
}
```

**响应**
```ts
interface Resstore_look {
    store: {
        type: any,
        data: any
    }[]
}
```

---

### 背包存装备到仓库 <a id="/store/store_save_equip"></a>

**路径**
- POST `/store/store_save_equip`

**请求**
```ts
interface Reqstore_save_equip {
    userId: string,
    bagIndex: number
}
```

**响应**
```ts
interface Resstore_save_equip {

}
```

---

## task

### 查看每日任务 <a id="/task/EverDayTask"></a>

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
        id: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21,
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

### NewUsetTask <a id="/task/NewUsetTask"></a>

**路径**
- POST `/task/NewUsetTask`

**请求**
```ts
interface ReqNewUsetTask {
    userId: string
}
```

**响应**
```ts
interface ResNewUsetTask {
    /** 是否已经完成 */
    isEnd: boolean,
    /** 上次更新时间 */
    lastUpdate: number,
    /** 本次是否已经发放奖励 */
    isReward: boolean,
    list: {
        /** 任务ID */
        id: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21,
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

### 阶梯任务 <a id="/task/soaringTask"></a>

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
        id: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21,
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

### 修改工会名称 <a id="/team/ChangeName_team"></a>

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

### 创建加入工会邀请码 <a id="/team/CreatorJoinCode_team"></a>

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

### 创建工会 <a id="/team/Creator_team"></a>

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
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
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
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
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
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
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

## vip

### Me_lookVip <a id="/vip/Me_lookVip"></a>

**路径**
- POST `/vip/Me_lookVip`

**请求**
```ts
interface ReqMe_lookVip {
    userId: string
}
```

**响应**
```ts
interface ResMe_lookVip {
    isVip: boolean
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
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
        /** 装备类型 */
        type: 0 | 1 | 2 | 3 | 4 | 5,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill_active_id?: number,
        /** 主动技能 */
        outSkillData?: {
            isSell: boolean,
            id: number,
            name: string,
            story: string,
            type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
            speed: number,
            data: any[]
        }
    }[]
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
        isVip?: boolean,
        /** 声望 */
        rankscore: number,
        sys: { creator_time: number },
        /** 0资源，1装备 */
        store: {
            type: any,
            data: any
        }[],
        equip: {
            weapons?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            /** 副武器 */
            subWeapon?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            /** 衣服 */
            clothes?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            necklace?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            hat?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            medal?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
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
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
                PhysicalDefense: number,
                secondResHp: number
            }
        },
        /** 基因锁 */
        dnaLock: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20,
        /** 额外附加属性（黑市） */
        add: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 签到数据 */
        sign: {
            cont: number,
            lastSignTime: number
        },
        task: {/** 阶梯任务等级 */
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
            evil: number,
            /** 碎片 */
            strengthen: number
        },
        bag: {
            icon: string,
            /** 装备名称 */
            name: string,
            story: string,
            /** 品质 */
            quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
            /** 装备类型 */
            type: 0 | 1 | 2 | 3 | 4 | 5,
            /** 强化等级 */
            leve: number,
            /** 基础属性 */
            base_attribute: {
                hp_max: number,
                MagicAttack: number,
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
                PhysicalDefense: number,
                secondResHp: number
            },
            /** 附带技能 */
            skill_active_id?: number,
            /** 主动技能 */
            outSkillData?: {
                isSell: boolean,
                id: number,
                name: string,
                story: string,
                type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                speed: number,
                data: any[]
            }
        }[],
        pet: {
            id: string,
            /** 战力 */
            military: number,
            icon: string,
            type: 0 | 1 | 2 | 3,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
                PhysicalDefense: number,
                secondResHp: number
            },
            attribute?: {
                hp_max: number,
                MagicAttack: number,
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
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
            exp_max: number,
            /** 经验上限刷新时间 */
            updateExpTime: number,
            /** 今日剩余可获取经验 */
            todayGetExp: number
        },
        team: {
            /** 队伍ID */
            id: string,
            /** 职位等级 */
            leve: 0 | 1,
            /** 工会贡献 */
            contribute: number
        },
        /** 小游戏统计 */
        minGameLog: {
            /** 猜数 */
            lottery: {
                partake: number,
                win: number
            },
            /** 马拉松 */
            horse: {
                partake: number,
                win: number,
                die: number
            },
            /** 无尽回廊 */
            infinite: {
                /** 层数 */
                layer: number,
                /** 调整次数 */
                cont: number
            }
        },
        id: string,
        /** 战力 */
        military: number,
        icon: string,
        type: 0 | 1 | 2 | 3,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        attribute?: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
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
        leve: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13,
        base: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill: number
    },
    team?: {
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
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        }
    } | undefined
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
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
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
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    },
    lastName: string,
    newName: string
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
    reward?: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[]
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
    equipList: {
        icon: string,
        /** 装备名称 */
        name: string,
        story: string,
        /** 品质 */
        quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
        /** 装备类型 */
        type: 0 | 1 | 2 | 3 | 4 | 5,
        /** 强化等级 */
        leve: number,
        /** 基础属性 */
        base_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 附带技能 */
        skill_active_id?: number,
        /** 主动技能 */
        outSkillData?: {
            isSell: boolean,
            id: number,
            name: string,
            story: string,
            type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
            speed: number,
            data: any[]
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
    icon: string,
    /** 装备名称 */
    name: string,
    story: string,
    /** 品质 */
    quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
    /** 装备类型 */
    type: 0 | 1 | 2 | 3 | 4 | 5,
    /** 强化等级 */
    leve: number,
    /** 基础属性 */
    base_attribute: {
        hp_max: number,
        MagicAttack: number,
        /** 物理攻击 */
        PhysicalAttacks: number,
        /** 魔法防御 */
        MagicDefense: number,
        /** 物理防御 */
        PhysicalDefense: number,
        secondResHp: number
    },
    /** 附带技能 */
    skill_active_id?: number,
    /** 主动技能 */
    outSkillData?: {
        isSell: boolean,
        id: number,
        name: string,
        story: string,
        type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
        speed: number,
        data: any[]
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
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[],
    pay: {
        state: boolean,
        condition: {
            key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
            val: number
        },
        now: number
    }
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
    skillList: string[]
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
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        }
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
    evil: number,
    /** 碎片 */
    strengthen: number
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
        /** 战力 */
        military: number,
        icon: string,
        type: 0 | 1 | 2 | 3,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        attribute?: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
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
        isVip?: boolean,
        /** 声望 */
        rankscore: number,
        sys: { creator_time: number },
        /** 0资源，1装备 */
        store: {
            type: any,
            data: any
        }[],
        equip: {
            weapons?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            /** 副武器 */
            subWeapon?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            /** 衣服 */
            clothes?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            necklace?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            hat?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
                }
            },
            medal?: {
                icon: string,
                /** 装备名称 */
                name: string,
                story: string,
                /** 品质 */
                quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
                /** 装备类型 */
                type: 0 | 1 | 2 | 3 | 4 | 5,
                /** 强化等级 */
                leve: number,
                /** 基础属性 */
                base_attribute: {
                    hp_max: number,
                    MagicAttack: number,
                    /** 物理攻击 */
                    PhysicalAttacks: number,
                    /** 魔法防御 */
                    MagicDefense: number,
                    /** 物理防御 */
                    PhysicalDefense: number,
                    secondResHp: number
                },
                /** 附带技能 */
                skill_active_id?: number,
                /** 主动技能 */
                outSkillData?: {
                    isSell: boolean,
                    id: number,
                    name: string,
                    story: string,
                    type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                    speed: number,
                    data: any[]
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
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
                PhysicalDefense: number,
                secondResHp: number
            }
        },
        /** 基因锁 */
        dnaLock: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20,
        /** 额外附加属性（黑市） */
        add: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        /** 签到数据 */
        sign: {
            cont: number,
            lastSignTime: number
        },
        task: {/** 阶梯任务等级 */
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
            evil: number,
            /** 碎片 */
            strengthen: number
        },
        bag: {
            icon: string,
            /** 装备名称 */
            name: string,
            story: string,
            /** 品质 */
            quality: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
            /** 装备类型 */
            type: 0 | 1 | 2 | 3 | 4 | 5,
            /** 强化等级 */
            leve: number,
            /** 基础属性 */
            base_attribute: {
                hp_max: number,
                MagicAttack: number,
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
                PhysicalDefense: number,
                secondResHp: number
            },
            /** 附带技能 */
            skill_active_id?: number,
            /** 主动技能 */
            outSkillData?: {
                isSell: boolean,
                id: number,
                name: string,
                story: string,
                type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
                speed: number,
                data: any[]
            }
        }[],
        pet: {
            id: string,
            /** 战力 */
            military: number,
            icon: string,
            type: 0 | 1 | 2 | 3,
            name: string,
            leve: number,
            hp: number,
            active_skill: number[],
            out_attribute: {
                hp_max: number,
                MagicAttack: number,
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
                PhysicalDefense: number,
                secondResHp: number
            },
            attribute?: {
                hp_max: number,
                MagicAttack: number,
                /** 物理攻击 */
                PhysicalAttacks: number,
                /** 魔法防御 */
                MagicDefense: number,
                /** 物理防御 */
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
            exp_max: number,
            /** 经验上限刷新时间 */
            updateExpTime: number,
            /** 今日剩余可获取经验 */
            todayGetExp: number
        },
        team: {
            /** 队伍ID */
            id: string,
            /** 职位等级 */
            leve: 0 | 1,
            /** 工会贡献 */
            contribute: number
        },
        /** 小游戏统计 */
        minGameLog: {
            /** 猜数 */
            lottery: {
                partake: number,
                win: number
            },
            /** 马拉松 */
            horse: {
                partake: number,
                win: number,
                die: number
            },
            /** 无尽回廊 */
            infinite: {
                /** 层数 */
                layer: number,
                /** 调整次数 */
                cont: number
            }
        },
        id: string,
        /** 战力 */
        military: number,
        icon: string,
        type: 0 | 1 | 2 | 3,
        name: string,
        leve: number,
        hp: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
            PhysicalDefense: number,
            secondResHp: number
        },
        attribute?: {
            hp_max: number,
            MagicAttack: number,
            /** 物理攻击 */
            PhysicalAttacks: number,
            /** 魔法防御 */
            MagicDefense: number,
            /** 物理防御 */
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
        isSell: boolean,
        id: number,
        name: string,
        story: string,
        type: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23,
        speed: number,
        data: any[]
    },
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
    reward: {
        key: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19,
        val: number
    }[]
}
```

