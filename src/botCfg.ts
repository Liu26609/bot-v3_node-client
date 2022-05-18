import { AvailableIntentsEventsEnum } from "qq-guild-bot";

export default{
    shards: [0, 1],
    appID: '101983837', // ID
    token: 'KRT0MyhsrJ4YGQXSyzAJiOJti58K982N', // token
    intents: [AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],    // 事件订阅,用于开启可接收的消息类型
    sandbox: false
}