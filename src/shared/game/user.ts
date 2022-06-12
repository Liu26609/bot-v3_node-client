import { body } from './body';

export interface USER_SIGN {
    // 签到次数
    cont: number,
    // 上次签到时间
    lastSignTime: number
}
/**
 * 用户钱包货币
 */
export interface USER_wallet {
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
    /**
     * 复活币
     */
    resLife: number,
    /**
     * 小鱼干
     */
    driedFish: number,
    /**
     * 精灵球
     */
    spiritBall: number,
    /**
     * 进化卡
     */
    evolveCard: number,
     /**
    * 正义值
    * 增加：刷怪,击杀红名玩家
    * 减少：击杀正义值玩家
    * 效果：商店出售消耗正义值商品
    */
    justice:number,
     /**
     * 红名值
     * 增加：击杀玩家增加
     * 减少：刷怪
     * 效果：商店不能购买东西
     */
    evil:number
}
export enum walletKey {
    gold,
    titleCard,
    BlindBox,
    changeNameCard,
    skillCard,
    transferCard,
    resLife,
    driedFish,
    spiritBall,
    /**
     * 进化卡
     */
    evolveCard,
    /**
    * 正义值
    * 增加：刷怪,击杀红名玩家
    * 减少：击杀正义值玩家
    * 效果：商店出售消耗正义值商品
    */
    justice,
    /**
     * 红名值
     * 增加：击杀玩家增加
     * 减少：刷怪
     * 效果：商店不能购买东西
     */
    evil
}
export enum walletKey_CNText {
    gold = '金币',
    titleCard = '称号卡',
    BlindBox = '盲盒',
    changeNameCard = '改名卡',
    skillCard = '技能卡',
    transferCard = '传送卡',
    resLife = '复活币',
    driedFish = '小鱼干',
    spiritBall = '精灵球',
    evolveCard = '进化卡',
    justice = '正义值',
    evil = '红名值'
}
export enum walletKey_CN {
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
    justice = '🟩正义值',
    evil = '🟥红名值'
}