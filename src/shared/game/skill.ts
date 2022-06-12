export enum SKILL_TYPE {
    /**
     * 攻击失手
     */
    miss = 0,
    /**
     * 对一个单位造成固定物理伤害
     * 参数1:伤害值
     */
    attack_Physics_fixed = 1,
    /**
     * 对一个单位造成固定魔法伤害
     * 参数1:伤害值
     */
    attack_Magic_fixed = 2
}
/**
 * 主动技能
 */
export interface SKILL_ACTIVE {
    id: number,
    // 技能名称
    name: string,
    // 技能描述
    tips: string,
    // 技能故事
    story: string,
    // typeId:
    // 技能类型
    type: SKILL_TYPE,
    //技能频率
    speed: number,
    // 技能参数
    data: number[]
}
export enum SKILL_ACTIVE_RES_TYPE {
    /**
     * 无任何操作
     */
    none,
    /**
     * 伤害
     */
    hurt,
}
/**
 * 技能目标
 */
export enum SKILL_ACTIVE_RES_TAG {
    none,
    /**
     * 敌人
     */
    enemy,
    /**
     * 全部敌人
     */
    enemy_all,
    /**
     * 敌人召唤单位
     */
    enemy_Pets,
    /**
     * 敌人单位
     */
    enemy_will,
    friend,
    friend_Pets,
    friend_will,
    friend_all,
    me,
    me_Pets,
    me_all,
    me_will
}
/**
 * 技能统计单位
 */
export enum SKILL_UNITY{
    /**
     * 无单位
     */
    none,
    /**
     * 次
     */
    second,
    /**
     * 物理伤害
     */
    physicalDamage,
    /**
     * 魔法伤害
     */
    MagicDamage,

}
export interface SKILL_RES {
    // 技能id
    id:number,
    // 技能名称
    name:string,
    // 返回值类型
    type: SKILL_ACTIVE_RES_TYPE,
    // 数值
    val: number,
    // 目标
    tag: SKILL_ACTIVE_RES_TAG,
    // 统计单位
    unit:SKILL_UNITY
}