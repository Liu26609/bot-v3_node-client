import botCfg from "./botCfg";
import game from "./game";
import base64_safe from "./unity/base64_safe";
import bot from "./unity/bot";
import sever from "./unity/sever";
export const log = console.log;
export const err = console.error;
export const info = console.info;


start();
async function start() {
    await sever.setApiUrl(botCfg.apiUrl)
    sever.setWsUrl(botCfg.wsUrl).then(() => {
        info('start')
        bot.setBotConfig(botCfg)
        // 开始测试实例
        new game();
    })
}