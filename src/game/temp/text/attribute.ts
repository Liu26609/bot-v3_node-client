import { err } from "../../..";
import { body } from "../../../shared/game/body";
import bot from "../../../unity/bot";

export class text_attribute_style{
    data?:body;
    constructor(){

    }
    sendData(data:body){
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
        temp += this.data.title.name + '\n';
        temp += `┏┄════👑属性═══━┄\n`
        temp += `┣Ⓜ️名称:${this.data.name}\n`;
        temp += `┣🔥等级:${this.data.leve}\n`;
        temp += `┣⏳经验:${this.data.exp}/${this.data.exp_max}\n`;
        temp += `┣♥️生命:${this.data.hp}/${out_attribute.hp_max}\n`;
        temp += `┣🔮魔法攻击:${out_attribute.MagicAttack}\n`;
        temp += `┣🌟魔法防御:${out_attribute.MagicDefense}\n`;
        temp += `┣🔪物理攻击:${out_attribute.PhysicalAttacks}\n`;
        temp += `┣🔰物理防御:${out_attribute.PhysicalDefense}\n`;
        temp += `┣💖每秒回复:${out_attribute.secondResHp}\n`;
        temp += `┗┄━══════════━┄`
        bot.sendText(channelId,temp);
    }
}