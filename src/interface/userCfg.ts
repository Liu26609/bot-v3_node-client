/**
 * 此配置所有玩家都可以配置
 */
export interface userCfg{
    // 是否显示我方伤害日志
    // isMeHurtLog:boolean;
    // 是否显示敌方伤害日志

    // TODO：待优化

    // 模板样式风格
    textStrStyle:USER_CFG_TEXTSTRSTYLE;
    // 消息模板
    msgTemplate:USER_CFG_MSGTEMPLATE;
    isShowPos?:boolean
}
export enum USER_CFG_TEXTSTRSTYLE{
    // 默认样式
    default,
}
export enum USER_CFG_MSGTEMPLATE{
    /**
     * 消息发送为文本
     */
    text,
    /**
     * 消息发送为卡片
     */
    card
}