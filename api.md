
# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- [Battle](#/Battle)
- [Hello](#/Hello)
- [Me_Attribute](#/Me_Attribute)
- [Sign](#/Sign)

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
    /** 技能释放记录 */
    log: {
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
        name: string,
        id: string,
        die_Name: string,
        die_id: string
    }[]
}
```

---

## Hello <a id="/Hello"></a>

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

## Me_Attribute <a id="/Me_Attribute"></a>

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
        id: string,
        name: string,
        leve: number,
        hp: number,
        exp: number,
        exp_max: number,
        active_skill: number[],
        out_attribute: {
            hp_max: number,
            MagicAttack: number,
            PhysicalAttacks: number,
            MagicDefense: number,
            PhysicalDefense: number,
            secondResHp: number
        },
        sys: { creator_time: number },
        equip: { weapons: number },
        title: {
            name: string,
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
}
```

---

## Sign <a id="/Sign"></a>

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
    lastSignTime: number
}
```

