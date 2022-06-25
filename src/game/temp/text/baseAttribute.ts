import { BASE_BODYS } from './../../../shared/game/body';
import { err } from "../../..";
import { body } from "../../../shared/game/body";
import bot from "../../../unity/bot";
import common from "../../../shared/game/common";

export class text_baseAttribute_style{
    data?:BASE_BODYS;
    private title:string
    constructor(){
        this.title = `👑属性`
    }
    setTitle(str:string){
        this.title = str;
        return this;
    }
    sendData(data:BASE_BODYS){
        this.data = data;
        return this;
    }
    sendMsg(channelId: string){
        if(!this.data){
            err('text_attribute_style 没有数据')
            return;
        }
        const out_attribute = this.data.out_attribute;
        let temp = ``;
        temp += `┏┄═══${this.title}══━┄\n`
        temp += `<emoji:11>战力:${common.BN(this.data.military)}\n`
        temp += `${this.data.icon}名称:${this.data.name}\n`;
        temp += `🔥等级:${this.data.leve}⏳${common.BN(this.data.exp)}/${common.BN(this.data.exp_max)}\n`;
        temp += `♥️生命:${common.BN(this.data.hp)}/${common.BN(out_attribute.hp_max)}💖+${common.BN(out_attribute.secondResHp)}/s\n`;
        temp += `🔮魔法攻击:${common.BN(out_attribute.MagicAttack)}\n`;
        temp += `🌟魔法防御:${common.BN(out_attribute.MagicDefense)}\n`;
        temp += `🔪物理攻击:${common.BN(out_attribute.PhysicalAttacks)}\n`;
        temp += `🔰物理防御:${common.BN(out_attribute.PhysicalDefense)}\n`;
        temp += `┗┄━═════════━┄`
        bot.sendText(channelId,temp);
    }
}