import { AvailableIntentsEventsEnum } from "qq-guild-bot";
import game from "./game";
import bot from "./unity/bot";
import sever from "./unity/sever";
export const log = console.log;
export const err = console.error;
export const info = console.info;

let botConfig = {
    shards: [0, 1],
    appID: '102005633', // ID
    token: 'oWRHruioytIBhqLXIEoIfgLjGL6c3FHG', // token
    intents: [AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],    // 事件订阅,用于开启可接收的消息类型
    sandbox: false
}

start();
async function start() {
    sever.setApiUrl('http://127.0.0.1:8888')
    bot.setBotConfig(botConfig)
    // 实例游戏
    new game();
}