export interface channelSetUpCfg{
    /**
     * 我方伤害统计
     */
    battleMyHurt:boolean,
    /**
     * 敌方伤害统计
     */
    battleEnemyHurt:boolean,
    /**
     * 战斗过程
     */
    battleprocessLog:boolean,
}
export interface userSetUpCfg{
    textStyle:textStyle
}
export enum textStyle{
    text,
    card
}
export enum textStyle_CN{
    text = '文本',
    card = '卡片'
}