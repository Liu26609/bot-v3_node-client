import { equip } from "./equip";
import { SKILL_ACTIVE } from "./skill";
import { walletKey } from "./user";
export interface auction {
    index: number,//第几次拍卖
    endTime: number,//成交倒计时
    auction: { type: autionType, data: any } | false,//拍卖物品
    offer_Cont: number,//出价次数
    offer_val: number,//出价价格
    offer_lastId: string | false,//出价人ID
    offer_name: string | false,//出价人名称
    look_cont: number,//观看次数
    min_offer: number,//单次最低出价
    sell_id: string | false,//拍卖人ID
    sell_name: string | false,//拍卖人名称
}
export enum autionType {
    wallet,
    equip
}
export interface store_equip {
    /**
             * 出售的模板id
             */
    sell_temp: equip,
    /**
     * 刷新的时间
     */
    creatorTime: number,
    /**
     * 下次刷新时间
     */
    nextUpdateTime: number,
    /**
     * 已出售数量
     */
    sellNum: number,
    /**
     * 购买条件
     */
    buyCondition: { key: walletKey, val: number },
    /**
     * 本次库存
     */
    stock: number,
    /**
     * 商店总共刷新次数
     */
    updateNum: number
}
/**
 * 头像商店
 */
export interface store_icon {
    /**
             * 出售的模板id
             */
    sell_temp: string,
    /**
     * 刷新的时间
     */
    creatorTime: number,
    /**
     * 下次刷新时间
     */
    nextUpdateTime: number,
    /**
     * 已出售数量
     */
    sellNum: number,
    /**
     * 购买条件
     */
    buyCondition: { key: walletKey, val: number },
    /**
     * 本次库存
     */
    stock: number,
    /**
     * 商店总共刷新次数
     */
    updateNum: number
}
/**
 * 声望商店
 */
export interface store_rankscore {
    /**
             * 出售的模板id
             */
    sell_temp: { key: rewardKey, val: number },
    /**
     * 刷新的时间
     */
    creatorTime: number,
    /**
     * 下次刷新时间
     */
    nextUpdateTime: number,
    /**
     * 已出售数量
     */
    sellNum: number,
    /**
     * 购买条件
     */
    buyCondition: { key: rewardKey, val: number },
    /**
     * 本次库存
     */
    stock: number,
    /**
     * 商店总共刷新次数
     */
    updateNum: number
}
export enum storeBackTemp {
    forever_hpMax_10,//最大生命永久+
    forever_MagicAttack_1,
    forever_PhysicalAttacks_1,
    forever_MagicDefense_1,
    forever_PhysicalDefense_1,
    forever_secondResHp_01,
    randomPoint,//随机玩家的坐标
    team_contribution_now,//工会贡献
    team_exp,//工会经验
}

export interface store_team {
    /**
             * 出售的模板id
             */
    sell_temp: storeTeamTemp,
    /**
     * 刷新的时间
     */
    creatorTime: number,
    /**
     * 下次刷新时间
     */
    nextUpdateTime: number,
    /**
     * 已出售数量
     */
    sellNum: number,
    /**
     * 购买条件
     */
    buyCondition: { key: rewardKey, val: number },
    /**
     * 本次库存
     */
    stock: number,
    /**
     * 商店总共刷新次数
     */
    updateNum: number
}
export enum storeTeamTemp {
    forever_hpMax_100,//最大生命永久+
    forever_MagicAttack_10,//最低魔法攻击
    forever_PhysicalAttacks_10,//物理攻击
    forever_MagicDefense_1,//50
    forever_PhysicalDefense_1,//50
    forever_secondResHp_1,
    teamExp_1,//工会经验
}
export interface store_back {
    /**
    * 出售的模板id
    */
    sell_temp: storeBackTemp,
    /**
     * 刷新的时间
     */
    creatorTime: number,
    /**
     * 下次刷新时间
     */
    nextUpdateTime: number,
    /**
     * 已出售数量
     */
    sellNum: number,
    /**
     * 购买条件
     */
    buyCondition: { key: walletKey, val: number },
    /**
     * 本次库存
     */
    stock: number,
    /**
     * 商店总共刷新次数
     */
    updateNum: number
}
export interface store_skill {
    /**
             * 出售的模板id
             */
    sell_temp: SKILL_ACTIVE,
    /**
     * 刷新的时间
     */
    creatorTime: number,
    /**
     * 下次刷新时间
     */
    nextUpdateTime: number,
    /**
     * 已出售数量
     */
    sellNum: number,
    /**
     * 购买条件
     */
    buyCondition: { key: walletKey, val: number },
    /**
     * 本次库存
     */
    stock: number,
    /**
     * 商店总共刷新次数
     */
    updateNum: number
}
export enum mapId {
    /**
     * 空地
     */
    opening,
    /**
     * 墙壁
     */
    wall,
    water
}

export interface payRes { state: boolean, condition: { key: walletKey, val: number }, now: number }
export interface prop {
    /**
     * 道具数量
     */
    num: number,
    /**
     * 道具类型
     */
    type: 0,
    id: number,
    data: equip;
}
export enum rewardKey {
    /**
  * 盲盒
  */
    BlindBox,
    /**
     * 经验
     */
    exp,
    /**
     * 金币
     */
    gold,
    /**
     * 称号卡
     */
    titleCard,
    /**
     * 改名卡
     */
    changeNameCard,
    /**
     * 技能卡
     */
    skillCard,
    /**
     * 传送卡
     */
    transferCard,
    /**
     * 复活币
     */
    resLife,
    /**
     * 鱼干
     */
    driedFish,
    /**
     * 精灵球
     */
    spiritBall,
    /**
     * 进化卡
     */
    evolveCard,
    /**
     * 声望
     */
    rankscore,
    /**
     * 正义值
     */
    justice,
    /**
    * 红名值
    */
    evil,
    /**
     * 进化点
     */
    dnaExp,
    /**
     * 称号经验
     */
    titleExp,
    /**
     * 宠物经验
     */
    petExp,
    /**
     * 工会贡献
     */
    team_devote,
    /**
     * 强化卡
     */
    strengthen,
    /**
     * 工会经验
     */
    team_exp,

}
export enum rewardKey_CN {
    exp = '⏳经验',
    gold = '💰️金币',
    titleCard = '🌈称号卡',
    BlindBox = '🎁盲盒',
    changeNameCard = '💳改名卡',
    skillCard = '🔯技能卡',
    transferCard = '🏃传送卡',
    resLife = '💠复活币',
    driedFish = '🐟️小鱼干',
    spiritBall = '👾精灵球',
    evolveCard = '🌌进化卡',
    rankscore = '⚜️声望值',
    justice = '🟩正义值',
    evil = '🟥红名值',
    dnaExp = '🧬进化点',
    titleExp = '🌈称号经验',
    petExp = '🍖宠物经验',
    team_devote = '🏰工会贡献',
    strengthen = '⚙️强化碎片',
    team_exp = '🏰工会经验',
}

/**
 * 奖励公式类型
 */
export enum rewardFormula {
    map_enemy,
    map_player
}
/**
 * 宝箱
 */
export interface chestBox {
    leve: chestBoxLv,
    isOpen: boolean
}
/**
 * 宝箱等级
 */
export enum chestBoxLv {
    D,
    C,
    B,
    A,
    AA,
    AAA,
    S,
    SS,
    SSS,
    SSSS
}
export enum chestBoxLv_CN {
    D = '📦️木制宝箱',//奖励1个
    C = '📮铁质宝箱',//奖励1个
    B = '💼白银宝箱',//奖励1个
    A = '🛍️黄金宝箱',//奖励2个
    AA = '👛白金宝箱',//奖励3个
    AAA = '👑钻石宝箱',//奖励4个
    S = '🕋史诗宝箱',//奖励5个
    SS = '🏮传奇宝箱',//奖励6个
    SSS = '📙远古宝箱',//奖励7个
    SSSS = '⚙作者宝箱'//拉满
}