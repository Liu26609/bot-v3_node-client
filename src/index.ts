import botCfg from "./botCfg";
import game from "./game";
import base64_safe from "./unity/base64_safe";
import bot from "./unity/bot";
import db from "./unity/db";
import sever from "./unity/sever";
export const log = console.log;
export const err = console.error;
export const info = console.info;


start();
async function start() {
    info('开始初始化配置')
    await db.init()
    info('初始化完成')
    await sever.setApiUrl(botCfg.apiUrl)
    sever.setWsUrl(botCfg.wsUrl).then(() => {
        info('开始启动机器人')
        bot.setBotConfig(botCfg)
        // 开始测试实例
        new game();
    })
}