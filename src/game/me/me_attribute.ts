import { ancestry, body, DNA_CN, DNA_Leve } from './../../shared/game/body';
import { embed_attribute_style } from './../temp/embed/embed_attribute_style';
import { embed_style } from './../temp/embed/embed';
import { task_base } from './../task_base';
import { info, log } from "../..";
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { text_attribute_style } from '../temp/text/attribute';
import common from '../../shared/game/common';
import { ancestryLeve } from '../../shared/game/body';
import { USER_CFG_MSGTEMPLATE } from '../../interface/userCfg';
import { sendImage } from '../../unity/sendLocaImage';
import { walletKey_CN, walletKey } from '../../shared/game/user';
const gm = require('gm').subClass({ imageMagick: true })
/**
* 查看我的属性
*/
export class me_attribute extends task_base {
    constructor(...a) {
        super(...a)
        this.render()

    }
    async render() {
        let res = await sever.callApi('Me_Attribute', { userId: this.userId });
        if (!res.isSucc) {
            this.sendErr(res.err)
            return;
        }
        let data = res.res;
        // if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.card) {
        //     new embed_attribute_style().setData(data.body).setTeam(data.team).setAncestry(data.ancestry).sendMsg(this.channel_id);
        // } else if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
            // new text_attribute_style().setData(data.body).setTeam(data.team).setAncestry(data.ancestry).sendMsg(this.channel_id);
        // }
        this.renderImage(data.body,data.ancestry)
    }
    renderImage(data:body,info: ancestry) {
        let time = Date.now()
        console.log('start')
        let image = gm(657, 387, "#ddff99f3")
        image.font('./font/ttf_cn.ttf', 32)
        image.fill("#ffffff")
        let randomShowId = common.random(1,1167)
        let showId = common.random(1,1167)
        console.log('showId',showId)
        image.draw(`image Over 0, 0, 360, 387"./image/show/${randomShowId}.png"`)
        image.draw(`image Over 0, 0, 657, 387 "./image/属性背景.png"`)
        image.draw(`image Over 38, 25, 250, 300 "./image/show/${showId}.png"`)
        // 战力值
        image.drawText(105, 377, `${data.military}`)
        // 称号图片
        image.draw(`image Over 70,240, 0, 0 "./image/title/${data.title.showId}.png"`)
        // NorthWest
        // image.gravity('NorthWest')

        image.fontSize(24)
        image.fill("#000000")
        image.drawText(380, 35, data.name)
        image.fontSize(44)
        image.drawText(380, 80, `Lv.${data.leve}`)
        let expReng = 280 * Math.ceil((data.exp / data.exp_max) * 100)
        if(expReng > 280){
            expReng = 280;
        }
        image.draw(`image Over 355,104, ${expReng}, 6 "./image/exp_bar.png"`)
        image.font('./font/MSungPRC-Xbold.ttf', 21)
        image.fontSize(12)
        image.drawText(440, 110, `EXP：${common.BN(data.exp, 0)}/${common.BN(data.exp_max, 0)}`)
        image.font('./font/ttf_cn.ttf', 21)
        image.fontSize(12)
        image.fontSize(21)
        image.drawText(360, 135, `声望值:${data.rankscore}`)
        // 红名值or正义值
        if (data.wallet.evil > 0) {
            image.drawText(360, 160, `${walletKey_CN[walletKey[walletKey.evil]]}:${common.BN(data.wallet.evil,2)}`)
        } else {
            image.drawText(360, 160, `${walletKey_CN[walletKey[walletKey.justice]]}:${common.BN(data.wallet.justice,2)}`)
        }
        
        image.drawText(360, 190, `基因锁:${DNA_CN[DNA_Leve[data.dnaLock]]}`)
        if (data.ancestry) {
            image.drawText(360, 215, `进化路线:${info.title}`)
        }
       
        image.font('./font/MSungPRC-Xbold.ttf', 21)
        image.drawText(412, 241, `${common.BN(data.hp, 1)}/${common.BN(data.out_attribute.hp_max, 1)}`)
        image.font('./font/ttf_cn.ttf', 21)
        image.drawText(412, 264, `物理攻击:${common.BN(data.out_attribute.PhysicalAttacks, 4)}`)
        image.drawText(412, 287, `物理防御:${common.BN(data.out_attribute.PhysicalDefense, 4)}`)
        image.drawText(412, 310, `魔法攻击:${common.BN(data.out_attribute.MagicAttack, 4)}`)
        image.drawText(412, 333, `魔法防御:${common.BN(data.out_attribute.MagicDefense, 4)}`)
        image.drawText(412, 356, `生命回复:${common.BN(data.out_attribute.secondResHp, 4)}`)
        let outId = Date.now()
        let outDir = `./out/${outId}.jpg`
        image.write(outDir,(err)=> {
            console.log(`耗时${(Date.now() - time) / 1000}`)
            console.log('end')
            // ...
            bot.sendLocaImage(this.channel_id,outDir)
        });
    }
}
