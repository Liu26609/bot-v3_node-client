import botCfg from "./botCfg";
import game from "./game";
import bot from "./unity/bot";
import common from "./unity/common";
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
    sever.setApiUrl('https://jfuvyi-lgkyca-8080.preview.myide.io')
    // sever.setApiUrl('http://81.68.240.214:8080/')
    info('start')
    bot.setBotConfig(botCfg)
    new game();
    test()

}
async function test() {
    // log('匹配相识度', common.xsd('普通攻击(魔法', '普通攻击(魔法)'))
    // let data = await sever.callApi('Battle', {})
  
}