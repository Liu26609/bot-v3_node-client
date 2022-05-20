import botCfg from "./botCfg";
import game from "./game";
import bot from "./unity/bot";
import sever from "./unity/sever";
export const log = console.log;
export const err = console.error;
export const info = console.info;
// let botCfg = {
//     shards: [0, 1],
//     appID: '', // ID
//     token: '', // token
//     intents: [AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],    // 事件订阅,用于开启可接收的消息类型
//     sandbox: false
// }

start();
async function start() {
    sever.setApiUrl('http://127.0.0.1:8080')
    // sever.setApiUrl('http://81.68.240.214:8080/')
    info('start')
    bot.setBotConfig(botCfg)
    new game();
    // test()

}
async function test() {
    let data = await sever.callApi('Battle', {})
    log(data)
}