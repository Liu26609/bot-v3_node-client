
# QQbot
## 如何运行
### 环境
```
Node.js
```
### 部署
```
git init 
npm install
```
### 开启ts监听
```
build-ts
package.json
"scripts": {
    "build-ts": "tsc",
    "start:dev": "nodemon",
    "sync": "tsrpc sync",
    "start": "node Build/index.js",
    "git": "git add . && git commit -m 'autoUpdate' && npm version patch && git push --all",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```
### 修改机器人配置
```
修改 index.ts
 let botCfg = {
     shards: [0, 1],
     appID: '', // ID
     token: '', // token
    intents: [AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],    // 事件订阅,用于开启可接收的消息类型
     sandbox: false
 }
```
## 运行
```
start
package.json
"scripts": {
    "build-ts": "tsc",
    "start:dev": "nodemon",
    "sync": "tsrpc sync",
    "start": "node Build/index.js",
    "git": "git add . && git commit -m 'autoUpdate' && npm version patch && git push --all",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```
## 指令列表
```
 this.matchMap.set('签到', { action: me_sign, match: matchType.all })
 this.matchMap.set('属性', { action: me_attribute, match: matchType.all })
 this.matchMap.set('更新日志', { action: sys_update, match: matchType.all })
 this.matchMap.set('测试', { action: battleTest, match: matchType.all })
 this.matchMap.set('位置', { action: me_pos, match: matchType.all })
 this.matchMap.set('addOneWrod', { action: addOneWrod, match: matchType.match })
 this.matchMap.set('上', { action: me_move, match: matchType.all })
 this.matchMap.set('下', { action: me_move, match: matchType.all })
 this.matchMap.set('左', { action: me_move, match: matchType.all })
 this.matchMap.set('右', { action: me_move, match: matchType.all })
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
