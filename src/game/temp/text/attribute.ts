import { err } from "../../..";
import { ancestry, ancestryLeve, body, DNA_CN, DNA_Leve } from "../../../shared/game/body";
import { walletKey, walletKey_CN } from "../../../shared/game/user";
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
    async sendMsg(channelId: string){
        if(!this.data){
            err('text_attribute_style 没有数据')
            return;
        }
        // let image = `https://21-1257174510.cos.ap-nanjing.myqcloud.com/title/test.png`;
        // await bot.sendImage(channelId,image);
        const out_attribute = this.data.out_attribute;
        let temp = ``;
        temp += this.data.title.name + '\n';
        temp += `┏┄════👑属性═══━┄\n`
        temp += `🔥Lv.${this.data.leve}\n`;
        temp += `Ⓜ️${this.data.name}\n`
        if(this.ancestry){
            temp += `👑${this.ancestry.title}\n`
        }
        temp += `🔒基因锁[${DNA_CN[DNA_Leve[this.data.dnaLock]]}]\n`;
        temp += `⚜️声望值:${this.data.rankscore}`;

        // 红名值or正义值
        if(this.data.wallet.evil > 0){
            temp += `${walletKey_CN[walletKey[walletKey.evil]]}:${common.BN(this.data.wallet.evil)}\n`
        }else if(this.data.wallet.justice > 0){
            temp += `${walletKey_CN[walletKey[walletKey.justice]]}:${common.BN(this.data.wallet.justice)}\n`
        }

        temp += `⏳经验值[${common.BN(this.data.exp)}/${common.BN(this.data.exp_max)}]\n`;
        temp += `♥️生命:${common.BN(this.data.hp)}/${common.BN(out_attribute.hp_max)}\n`;
        temp += `🔮魔法攻击${common.BN(out_attribute.MagicAttack)}\n`;
        temp += `🌟魔法防御${common.BN(out_attribute.MagicDefense)}\n`;
        temp += `🔪物理攻击${common.BN(out_attribute.PhysicalAttacks)}\n`;
        temp += `🔰物理防御${common.BN(out_attribute.PhysicalDefense)}\n`;
        temp += `💖每秒回复${common.BN(out_attribute.secondResHp)}\n`;
        temp += `┗┄━══════════━┄`
        await bot.sendText(channelId,temp);
    }
}