import botCfg from "./botCfg";
import game from "./game";
import base64_safe from "./unity/base64_safe";
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
        // test()
    })
}
async function test() {
    // log('匹配相识度', common.xsd('普通攻击(魔法', '普通攻击(魔法)'))
    // let data = await sever.callApi('Battle', {})
    let image = `https://21-1257174510.cos.ap-nanjing.myqcloud.com/temp/equip.png?`;
    // 装备图标
    image += `imageMogr2/interlace/0/quality/75|watermark/1/image/${base64_safe.urlEncode(`http://21-1257174510.cos.ap-nanjing.myqcloud.com/equip/1.png`)}/dx/195/dy/220`;
    // 称号
    image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`十米的大刀+10`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffff00`)}/fontsize/32/dx/10/dy/390`;
     // 品质
     image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`作者专属(武器)`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#00ffff`)}/fontsize/24/dx/20/dy/350`;
     // 属性
     image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`0
1亿
150万
240十万
5.万
9998.0万`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffffff`)}/fontsize/20/dx/10/dy/215`;
    log('imgLink',image)
}