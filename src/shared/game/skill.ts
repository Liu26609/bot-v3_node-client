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
    /**
     * 每次触发提高N%全属性
     * 参数1:百分比值
     */
    upAll,
    /**
     * 回复固定N点生命
     */
    resHp_fixed,
    /**
     * 对敌方全部单位造成N点百分比魔法伤害
     * 参数1:百分比
     */
    enemy_all_Magic,
    /**
    * 对敌方全部单位造成N点百分比物理伤害
    * 参数1:百分比
    */
    enemy_all_Physics,
    /**
     * 随机造成N-N物理固定伤害
     * 参数1：最小伤害
     * 参数2：最大伤害
     */
    random_Physics_fixed,
    /**
    * 随机造成N-N魔法固定伤害
    * 参数1：最小伤害
    * 参数2：最大伤害
    */
    random_Magic_fixed,
    /**
    * 随机造成N-N物理百分比伤害
    * 参数1：最小伤害
    * 参数2：最大伤害
    */
    random_Physics,
    /**
    * 随机造成N-N魔法百分比伤害
    * 参数1：最小伤害
    * 参数2：最大伤害
    */
    random_Magic,
    /**
   * 随机游戏所有技能中选一个技能释放
   */
    random_Skill,
    /**
     * 让一个敌人N回合不能释放任何技能
     * 参赛1:停止回合数
     */
    stop_attack,
    /**
     * 提高N点攻击
     * 参数1:固定物理攻击
     */
    up_Physics_fixed,
    /**
     * 提高N点魔法攻击
     * 参数1:固定魔法攻击
     */
    up_Magic_fixed,
    /**
     * 让地方全体停止攻击N回合
     */
    stop_attack_all
}
/**
 * 主动技能
 */
export interface SKILL_ACTIVE {
    isSell: boolean,
    id: number,
    // 技能名称
    name: string,
    // 技能来源
    formId: number,
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
    copySkill,
    /**
     * 让对手停止攻击
     */
    stopAttack
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
    friend,
    friend_Pets,
    friend_all,
    me,
    me_Pets,
    me_all,
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
    upMagicDefense,
    /**
     * 提高全属性
     */
    upAll,
    /**
     * 恢复生命
     */
    resHp,
    upPhysics,
    upMagic
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
    upMagicDefense = '+🌟',
    upPhysics = '',
    upMagic = '',
    /**
     * 提高全部属性
     */
    upAll = '🔺',
    resHp = '💖'
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