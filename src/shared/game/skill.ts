export enum SKILL_TYPE {
    /**
     * 攻击失手
     */
    miss,
    /**
     * 对一个单位造成固定物理伤害
     * 参数1:伤害值
     */
    attack_Physics_fixed,
    /**
     * 对一个单位造成固定魔法伤害
     * 参数1:伤害值
     */
    attack_Magic_fixed,
    /**
     * 对一个单位造成属性百分比魔法伤害
     * 参数1:百分比
     */
    attack_Magic_rang,
    /**
  * 对一个单位造成属性百分比物理伤害
  * 参数1:百分比
  */
    attack_Physics_rang,
    /**
     * 创造一个和实力为自己属性百分比的分身,分身只会存活一回合
     * 参数1::百分比
     * 参数2：数量
     */
    creator_shadow,
    /**
     * 连续攻击N次，每次攻击为物理攻击的百分比属性
     * 参数1:攻击次数
     * 参数2:每次攻击最小的伤害
     * 参数3:每次攻击最大的伤害
     */
    continuity_Physics,
    /**
    * 连续攻击N次，每次攻击为魔法攻击的百分比属性
    * 参数1:攻击次数
    * 参数2:每次攻击最小的伤害
    * 参数3:每次攻击最大的伤害
    */
    continuity_Magic,
    /**
     * 有N概率永久复制对方技能
     * 参数1:概率
     */
    forever_steal_skill,
    /**
  * 每触发一次提高N点物理防御
  * 参数1:提高值
  */
    upPhysicalDefense_fixed,
    /**
* 每触发一次提高N点魔法防御
* 参数1:提高值
*/
    upMagicDefense_fixed,
}
/**
 * 主动技能
 */
export interface SKILL_ACTIVE {
    isSell: boolean,
    id: number,
    // 技能名称
    name: string,
    // 技能故事
    story: string,
    // typeId:
    // 技能类型
    type: SKILL_TYPE,
    //技能频率
    speed: number,
    // 技能参数
    data: any[]
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
    /**
     * 增加单位
     */
    addUnit,
    /**
     * 复制技能
     */
    copySkill
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
export enum SKILL_UNITY {
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
    /**
     * 提高值防御
     */
    upPhysicalDefense,
    /**
     * 提高魔防值
     */
     upMagicDefense
}
export enum SKILL_UNITY_CN {
    /**
     * 无单位
     */
    none = '',
    /**
     * 次
     */
    second = '次',
    /**
     * 物理伤害
     */
    physicalDamage = '',
    /**
     * 魔法伤害
     */
    MagicDamage = '',
    /**
     * 
     */
    upPhysicalDefense = '+🔰',
/**
     * 提高魔防值
     */
    upMagicDefense = '+🌟'
}
export interface SKILL_RES {
    // 技能id
    id: number,
    // 技能名称
    name: string,
    // 返回值类型
    type: SKILL_ACTIVE_RES_TYPE,
    // 数值
    val: number,
    // 目标
    tag: SKILL_ACTIVE_RES_TAG,
    // 统计单位
    unit: SKILL_UNITY,
    data?: number[]
}