# QQbot
## 如何运行
```
1.下载Node.js
2.npm install
3.开启ts监听 build-ts
4.index.ts botCfg 配置修改为自己机器人配置
5.F5运行
```
## 功能
### 签到
```
指令：签到
```
### 更新日志
```
指令:更新日志
```
### 测试
```
指令:测试
功能：战斗模块测试
```
### 属性
```
指令：属性1
功能：查看属性
```
## 技能结构
### 主动技能
```
1.伤害型技能
2.复活型技能
3.召唤型技能
```
## 装备体系
### 可成长
```
装备唯一性，属性可成长
1.击杀单位成长：每击杀一个单位增加多少属性
2.艾特成长:每艾特一次装备增加多少属性
3.时间成长：每秒提升装备多少属性
```

# TSRPC API 接口文档

## 通用说明

- 所有请求方法均为 `POST`
- 所有请求均需加入以下 Header :
    - `Content-Type: application/json`

## 目录

- [AddOneWord](#/AddOneWord)
- [Battle](#/Battle)
- [Hello](#/Hello)
- [Me_Attribute](#/Me_Attribute)
- [Move](#/Move)
- [Pos](#/Pos)
- [Sign](#/Sign)

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
        pos: {
            x: number,
            y: number
        },
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
        },
        sign: {
            cont: number,
            lastSignTime: number,
            coiledCont: number,
            signLog: number[]
        }
    }
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
        id: string,
        name: string,
        leve: number,
        hp: number,
        exp: number,
        exp_max: number,
        active_skill: number[],
        pos: {
            x: number,
            y: number
        },
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
        },
        sign: {
            cont: number,
            lastSignTime: number,
            coiledCont: number,
            signLog: number[]
        }
    }[]
}
```

**配置**
```ts
{
  "direction": {
    "top": 1,
    "right": 2,
    "buttom": 3,
    "left": 4
  }
}
```

---

## Pos <a id="/Pos"></a>

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
    pos: {
        x: number,
        y: number
    },
    isTop: boolean,
    isButtom: boolean,
    isRight: boolean,
    isLeft: boolean,
    player: {
        id: string,
        name: string,
        leve: number,
        hp: number,
        exp: number,
        exp_max: number,
        active_skill: number[],
        pos: {
            x: number,
            y: number
        },
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
        },
        sign: {
            cont: number,
            lastSignTime: number,
            coiledCont: number,
            signLog: number[]
        }
    }[]
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


> 此项目为QQ频道游戏机器人客户端.
