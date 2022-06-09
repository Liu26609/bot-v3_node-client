import { err } from "../../..";
import { ancestry, ancestryLeve, body, DNA_CN, DNA_Leve } from "../../../shared/game/body";
import bot from "../../../unity/bot";
import common from "../../../unity/common";

export class text_attribute_style{
    data?:body;
    ancestry?:ancestry;
    constructor(){

    }
    sendAncestry(info:ancestry){
        this.ancestry = info;
        return this;
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
        temp += `Ⓜ️名称:${this.data.name}\n`;
        if(this.ancestry){
            temp += `👑血统${ancestryLeve[this.ancestry.leve]}级${this.ancestry.title}\n`
        }
        temp += `🔒基因锁[${DNA_CN[DNA_Leve[this.data.dnaLock]]}]\n`;
        temp += `🔥等级:${this.data.leve}\n`;
        temp += `⏳经验:${common.BN(this.data.exp)}/${common.BN(this.data.exp_max)}\n`;
        temp += `⚜️声望值:${this.data.rankscore}\n`;
        temp += `♥️生命:${common.BN(this.data.hp)}/${common.BN(out_attribute.hp_max)}\n`;
        temp += `🔮魔法攻击:${common.BN(out_attribute.MagicAttack)}\n`;
        temp += `🌟魔法防御:${common.BN(out_attribute.MagicDefense)}\n`;
        temp += `🔪物理攻击:${common.BN(out_attribute.PhysicalAttacks)}\n`;
        temp += `🔰物理防御:${common.BN(out_attribute.PhysicalDefense)}\n`;
        temp += `💖每秒回复:${common.BN(out_attribute.secondResHp)}\n`;
        temp += `┗┄━══════════━┄`
        bot.sendText(channelId,temp);
    }
}