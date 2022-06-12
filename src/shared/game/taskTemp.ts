export interface taskTemp {
    /**
     * 是否已经完成
     */
    isEnd: boolean,
    /**
     * 上次更新时间
     */
    lastUpdate: number,
    /**
     * 本次是否已经发放奖励
     */
    isReward: boolean,
    list: everDayTask_Item[],
    /**
     * 刷新任务时间/天
     */
    updateDay: number
}
export interface everDayTask_Item {
    /**任务ID */
    id: TaskId,
    /**当前次数 */
    now: number,
    /**目标次数 */
    target: number,
}
export enum taskType {
    /**
     * 每日任务
     */
    everDay,
    /**
     * 飞升任务一级
     */
    ladder_1,
    ladder_2,
    ladder_3
}
export enum taskType_CN {
    /**
     * 每日任务
     */
    everDay = '每日任务',
    /**
     * 飞升任务
     */
     ladder_1 = '阶梯计划(一级)',
     ladder_2 = '阶梯计划(二级)',
     ladder_3 = '阶梯计划(三级)'
}
export enum TaskId {
    /**
     * 每日签到
     */
    sign,
    /**
     * 查看黑市商店
     */
    BackShop_look,
    /**
     * 频道PK
     */
    PK,
    /**
     * 捕捉宠物
     */
    catch,
    /**
     * 钓鱼
     */
    fishing,
    /**
     * 查看技能商店
     */
    SkillShop_look,
    /**
     * 查看装备商店
     */
    EquipShop_look,
    /**
     * 攻击一次怪物
     */
    attackMonster,
    /**
     * 攻击一次boss
     */
    attackBoss_partake,
    /**
     * 排位一次
     */
    rank,
    /**
     * 参与猜数
     */
    lottery_partake,
    /**
     * 击杀一次BOSS
     */
    attackBoss_kill,
    /**
     * 成功强化一次装备
     */
    strengthen_succress
}