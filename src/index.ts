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
        new game();
        test()
    })
}
async function test() {
    let arry = [55,22,33,44]
    let index =  arry.indexOf(44)
    arry.splice(index,1)
    log('index',index,arry)
    // log('匹配相识度', common.xsd('普通攻击(魔法', '普通攻击(魔法)'))
    // let data = await sever.callApi('Battle', {})
    // let image = `https://21-1257174510.cos.ap-nanjing.myqcloud.com/temp/equip.png?`;
    //     // 装备图标
    // image += `imageMogr2/interlace/0/quality/75|watermark/1/image/${base64_safe.urlEncode(`http://21-1257174510.cos.ap-nanjing.myqcloud.com/equip/1.png`)}/dx/195/dy/220`;
    //     // 称号
    // image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`十米的大刀+10`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffff00`)}/fontsize/32/dx/10/dy/390`;
    //      // 品质
    // image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`作者专属(武器)`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#00ffff`)}/fontsize/24/dx/20/dy/350`;
    //      // 属性
    // let str = `里面记录了各种咒语书中片断伟大的神正义之主我来到你面前我主乃是为了能见到你的尊容我认识你我知道你的名字我来到你面前我带来正义我为你驱走鬼怪`;
    // str = str.replace(/[^\x00-\xff]/g, "$&\x01").replace(/.{35}\x01?/g, "$&b").replace(/\x01/g, "")
    // let arry = str.split('b')
    // for (let index = 0; index < arry.length; index++) {
    //     const s = arry[index];
    //     image += `/imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(s)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffffff`)}/fontsize/16/dx/12/dy/${20 + (arry.length - index) * 20}`;

    // }

    // log('imgLink', image)
}