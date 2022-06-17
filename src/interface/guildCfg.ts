/**
 * 此配置只限频道主可配置
 */
export interface guildCfg {
    /**
     * 频道授权挂机频道
     */
    autoPassChannel_id: string | undefined,
    /**
     * 频道艾特机器人次数
     */
    atCont: number,
    /**
     * 频道主id
     */
    master: string

}
export enum CFG_SWITCH{
    open,
    close
}
export enum switch_CN {
    open = '开启',
    close = '关闭'
}