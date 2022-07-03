import { equip } from './equip';
import { teamLeve } from './team';
import { USER_SIGN, USER_wallet } from './user';
// 角色属性
export interface body extends BASE_BODYS {
    isVip?: boolean,
    /**
     * 声望
     */
    rankscore: number,

    sys: {
        creator_time: number
    },
    /**
     * 0资源，1装备
     */
    store: { type: any, data: any }[],
    equip: {
        weapons?: equip,
        /**
         * 副武器
         */
        subWeapon?: equip,
        /**
         * 衣服
         */
        clothes?: equip,
        necklace?: equip,
        hat?: equip,
        medal?: equip,
    },
    title: {
        name: string,
        leve: number,
        exp: number,
        exp_max: number,
        /**
         * 今日剩余可获取经验
         */
        todayGetExp: number,
        /**
         * 经验上限刷新时间
         */
        updateExpTime: number,
        /**
         * 随机次数
         */
        randomCont: number,
        attribute: base_attribute
    },
    /**
     * 基因锁
     */
    dnaLock: DNA_Leve,
    /**
     * 额外附加属性（黑市）
     */
    add: base_attribute,
    /**
     * 签到数据
     */
    sign: USER_SIGN,
    task: {
        /**
         * 阶梯任务等级
         */
        ladderLeve: number
    },
    /**
 * 钱包
 */
    wallet: USER_wallet,
    bag: equip[],
    pet: BASE_BODYS[],
    ancestry: { id: string, leve: number, exp: number, exp_max: number },
    team: BODY_TEAM,
    minGameLog: minGame
}
export interface BODY_TEAM {
    /**
     * 队伍ID
     */
    id: string,
    /**
     * 职位等级
     */
    leve: teamLeve,
    /**
     * 工会贡献
     */
    contribute: number,
}
/**
 * 小游戏统计
 */
export interface minGame {
    /**
     * 猜数
     */
    lottery: {
        partake: number,
        win: number
    },
    /**
     * 马拉松
     */
    horse: {
        partake: number,
        win: number,
        die:number
    }
}
/**
 * 血统
 */
export interface ancestry {
    /**
     * 血统来源
     */
    from: string,
    /**
     * 血统名称
     */
    title: string,
    /**
     * 血统等级0-9级
     */
    leve: ancestryLeve,
    base: base_attribute,
    /**
     * 附带技能
     */
    skill: number,
}
export enum ancestryLeve {
    E,
    D,
    C,
    B,
    A,
    AA,
    AAA,
    S,
    SS,
    SSS,
    R,
    SR,
    SSR,
    MAX
}
export enum DNA_Leve {
    // 未解开基因锁
    F,
    // 一阶
    E,
    // 二阶
    EE,
    // 三阶
    EEE,
    // 四阶初级-悟道
    D,
    // 四阶中级-入微
    DD,
    // 四阶高级-临圣
    DDD,
    // 四阶巅峰-圣位
    C,
    // 初级圣位
    CC,
    // 高阶圣位
    CCC,
    // 先天圣位
    B,
    // 真圣
    BB,
    // 皇级圣位
    BBB,
    // 次终极
    A,
    // 临终极
    AA,
    // 终极
    AAA,
    // 永恒
    S,
    // 无限
    SS,
    // 半步超脱
    SSS,
    // 超脱
    MAX,
    MAXX
}
export enum DNA_CN {
    F = '未解开基因锁',
    E = '一阶-战斗本能',
    EE = '二阶-极限潜能',
    EEE = '三阶-脱凡入圣',
    D = '四阶初级-悟道',
    DD = '四阶中级-入微',
    DDD = '四阶高级-临圣',
    C = '四阶巅峰-入圣',
    CC = '四阶巅峰-初级圣位',
    CCC = '四阶巅峰-高阶圣位',
    B = '四阶巅峰-先天圣位',
    BB = '四阶巅峰-真圣',
    BBB = '四阶巅峰-皇级圣人',
    A = '五阶初级-次终极',
    AA = '五阶初级-临终极',
    AAA = '五阶中级-终极',
    S = '五阶中级-我即永恒',
    SS = '五阶高级-一念即起',
    SSS = '五阶巅峰-半步超脱',
    MAX = '五阶巅峰-超脱者',
    MAXX = '六阶-盒子制造者',
}

export interface BASE_BODYS {
    id: string,
    /**
     * 战力
     */
    military: number,
    icon: string,
    type: bodyType,
    name: string,
    leve: number,
    hp: number,
    active_skill: number[],//主动技能
    out_attribute: base_attribute,
    attribute?: base_attribute,
    pos: posV2//位置
    exp: number,//当前经验
    exp_max: number,//最大经验
    /**
     * 上次生命恢复时间戳
     */
    lastResHpTime: number,
}
export enum bodyType {
    shadow,
    enemy,
    pet,
    player,
}
export interface posV2 {
    x: number,
    y: number
}
export interface base_attribute {
    hp_max: number,//最大生命
    /**
    * 魔法攻击
    */
    MagicAttack: number,
    /**
     * 物理攻击
     */
    PhysicalAttacks: number,
    /**
     * 魔法防御
     */
    MagicDefense: number,
    /**
     * 物理防御
     */
    PhysicalDefense: number,
    secondResHp: number,//每秒回复生命
}
export interface BattleKillLog {
    round: number,
    body: { name: string }, die_body: { name: string }

}