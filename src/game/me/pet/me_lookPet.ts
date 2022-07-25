import { text_baseAttribute_style } from './../../temp/text/baseAttribute';
import bot from '../../../unity/bot';
import common from '../../../shared/game/common';
import sever from '../../../unity/sever';
import { task_base } from './../../task_base';
import { body, ancestry, DNA_CN, DNA_Leve, BASE_BODYS } from '../../../shared/game/body';
import { walletKey_CN, walletKey } from '../../../shared/game/user';
const gm = require('gm').subClass({ imageMagick: true })
export class me_lookPet extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        if(this.content == this.matchKey){
            this.menu();
            return;
        }
        let index = Math.ceil(common.getNumber(this.content.replace(this.matchKey,'')))
        let req = await sever.callApi('pet/Me_petLook',{userId:this.userId,index:index})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        // new text_baseAttribute_style().sendData(data.base).setTitle(`🥚宠物属性`).sendMsg(this.channel_id);
        this.renderImage(data.base)
    }
    menu(){
        let temp = ``;
        temp += `<emoji:147>提示：查看宠物属性指令:查看宠物 + ID\n`
        temp += `🌰栗子:@${bot.getBot_name()} 查看宠物0`
        bot.sendText(this.channel_id,temp,this.content)
    }
    renderImage(data:BASE_BODYS) {
        let time = Date.now()
        console.log('start')
        let image = gm(657, 387, "#ddff99f3")
        image.font('./font/ttf_cn.ttf', 32)
        image.fill("#ffffff")
        let showId = common.random(1,1167)
        showId = 1;
        console.log('showId',showId)
        image.draw(`image Over 0, 0, 657, 387 "./image/怪物属性背景.png"`)
        image.draw(`image Over 53, 35, 250, 300 "./image/enemy/${showId}.png"`)
        image.draw(`image Over 0, 0, 657, 387 "./image/怪物属性面板.png"`)
        // 战力值
        image.drawText(105, 377, `${data.military}`)
        // 称号图片
        // NorthWest
        // image.gravity('NorthWest')

        image.fontSize(32)
        image.fill("#ffffff")
        image.drawText(370, 70, data.name)
        image.fontSize(50)
        image.drawText(380, 130, `Lv.${data.leve}`)

        image.font('./font/MSungPRC-Xbold.ttf', 21)
        image.fontSize(14)
        image.drawText(380, 155, `EXP：${common.BN(data.exp, 0)}/${common.BN(data.exp_max, 0)}`)
        image.font('./font/ttf_cn.ttf', 21)
        image.fontSize(21)

        let baseY = 208;
        let offset = 23;
        image.font('./font/MSungPRC-Xbold.ttf', 19)
        image.drawText(412, baseY, `${common.BN(data.hp, 1)}/${common.BN(data.out_attribute.hp_max, 1)}`)
        image.drawText(412, baseY + offset, `物理攻击${common.BN(data.out_attribute.PhysicalAttacks, 4)}`)
        image.drawText(412, baseY + offset * 2, `物理防御${common.BN(data.out_attribute.PhysicalDefense, 4)}`)
        image.drawText(412, baseY + offset * 3, `魔法攻击${common.BN(data.out_attribute.MagicAttack, 4)}`)
        image.drawText(412, baseY + offset * 4, `魔法防御${common.BN(data.out_attribute.MagicDefense, 4)}`)
        image.drawText(412, baseY + offset * 5, `生命回复${common.BN(data.out_attribute.secondResHp, 4)}`)
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