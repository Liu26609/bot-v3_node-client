import { AvailableIntentsEventsEnum } from "qq-guild-bot"
export interface BOT_MSGID_MAP {
    /**
    * id剩余使用次数
    */
    surplusCont: number,
    /**
     * 消息创建时间
     */
    creatorTime: number,
}
/**
 * 机器人配置
 */
export interface BOT_Config {
    appID: string,
    token: string,
    intents: AvailableIntentsEventsEnum[],
    sandbox: boolean,
    shards: number[],//[当前分片，总分片]，[0,1]
}
/**
 * 收到监听消息
 */
export interface BOT_OnData {
    eventId: string,
    eventType: BOT_EventType,
    msg: any
}
/**
 * 消息类型
 */
export enum BOT_EventType {
    msg_at = 'AT_MESSAGE_CREATE',
    msg_del = 'PUBLIC_MESSAGE_DELETE'
}
/**
 * 用户信息
 */
export interface BOT_author {
    avatar: string,//头像
    bot: boolean,//是否为机器人
    id: string,//用户ID
    username: string,//用户名称
}
/**
 * 收到艾特消息数据格式
 */
export interface BOT_MSG_AT {
    author: BOT_author,
    channel_id: string,
    content: string,
    guild_id: string,
    id: string,//消息ID
    member: {
        joined_at: string,
        nick: string,
        roles: string[]
    },
    mentions: BOT_author[],
    seq: number,
    seq_in_channel: string,
    timestamp: string
}
/**
 * 机器人ws链接成功
 */
export interface BOT_READY {
    session_id: string,
    shard: number[],//[0,1]
    user: { id: string, username: string, bot: boolean },
    version: number
}