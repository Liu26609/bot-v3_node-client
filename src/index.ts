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
    await sever.setApiUrl('http://127.0.0.1:8080')
    sever.setWsUrl('http://127.0.0.1:3000').then(()=>{
        info('start')
        bot.setBotConfig(botCfg)
        new game();
        test()
    })
}
async function test() {
    // log('匹配相识度', common.xsd('普通攻击(魔法', '普通攻击(魔法)'))
    // let data = await sever.callApi('Battle', {})
  
}