import botCfg from "./botCfg";
import game from "./game";
import common from "./shared/game/common";
import bot from "./unity/bot";
import db from "./unity/db";
import sever from "./unity/sever";
export const log = console.log;
export const err = console.error;
export const info = console.info;
const gm = require('gm').subClass({ imageMagick: true })

start();
async function start() {
   
    info('开始初始化配置s')
    await db.init()
    info('初始化完成', process.env.BOT_NAME)
    await sever.setApiUrl(botCfg.apiUrl)


    const author = process.env.BOT_CONFIG_author || botCfg.author;
    const appID = process.env.BOT_CONFIG_appID || botCfg.appID;
    const token = process.env.BOT_CONFIG_token || botCfg.token;
    botCfg.author = author
    botCfg.appID = appID;
    botCfg.token = token
    info('修改配置', appID)


    sever.setWsUrl(botCfg.wsUrl).then(() => {
        info('开始启动机器人')

        bot.setBotConfig(botCfg)
        // 开始测试实例
        new game();
    })

}
function testImage() {
    let time = Date.now()
    console.log('start')
    let image = gm(324, 384, "#000000")
    image.font('./font/ttf_cn.ttf', 32)
    image.fill("#ffffff")
    image.draw(`image Over 0, 0, 324, 384 "./image/称号面板.png"`)
    image.gravity('Center')
    // 称号图片
    image.draw(`image Over 0,-160, 0, 0 "./image/title/1 (${common.random(52, 353)}).png"`)
    // NorthWest
    image.gravity('NorthWest')

    image.fontSize(24)
    image.fill("#000000")
    image.fontSize(44)
    image.drawText(30, 75, 'Lv.5')
    image.draw(`image Over 21,142, 280, 6 "./image/exp_bar.png"`)

    image.fontSize(12)
    image.drawText(100, 138, 'EXP：1000/50000')

    image.fontSize(21)
    let startY = 202;
    let offset = 23;
    image.drawText(108, startY, '最大生命+6%')
    image.drawText(108, startY + offset, '物理攻击+6%')
    image.drawText(108, startY + offset * 2, '物理防御+6%')
    image.drawText(108, startY + offset * 3, '魔法攻击+6%')
    image.drawText(108, startY + offset * 4, '魔法防御+6%')
    image.drawText(108, startY + offset * 5, '生命回复+6%')
    image.write("./brandNewImg.jpg", (err)=> {
        console.log(`耗时${(Date.now() - time) / 1000}`)
        console.log('end')
        // ...
    });
}