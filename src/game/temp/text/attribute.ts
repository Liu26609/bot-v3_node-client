import { info } from 'console';
import { err } from "../../..";
import { ancestry, ancestryLeve, body, DNA_CN, DNA_Leve } from "../../../shared/game/body";
import { teamLeve_CN, TEAM_INFO } from "../../../shared/game/team";
import { walletKey, walletKey_CN } from "../../../shared/game/user";
import bot from "../../../unity/bot";
import common from "../../../unity/common";

export class text_attribute_style {
    data?: body;
    ancestry?: ancestry;
    team?:TEAM_INFO
    constructor() {

    }
    setAncestry(info: ancestry) {
        this.ancestry = info;
        return this;
    }
    setTeam(info:TEAM_INFO | undefined){
        if(info){
            this.team = info;
        }
        return this;
    }
    setData(data: body) {
        this.data = data;
        return this;
    }
    async sendMsg(channelId: string) {
        if (!this.data) {
            err('text_attribute_style 没有数据')
            return;
        }
        const out_attribute = this.data.out_attribute;
        let temp = ``;
        temp += this.data.title.name + '\n';
        temp += `┏┄════👑属性═══━┄\n`
        temp += `<emoji:11>战力:${common.BN(this.data.military)}\n`
        temp += `🔥Lv.${this.data.leve}⏳(${common.BN(this.data.exp)}/${common.BN(this.data.exp_max)})\n`;
        temp += `${this.data.icon}名称:${this.data.name}\n`
        if (this.ancestry) {
            temp += `👑${this.ancestry.title}\n`
        }
        if (this.data.dnaLock > 0) {
            temp += `🔒基因锁[${DNA_CN[DNA_Leve[this.data.dnaLock]]}]\n`;
        }
        // 工会
        if(this.team){
            temp += `🏰${this.team.leve}级工会:${this.team.name}[${teamLeve_CN[this.data.team.leve]}]`
        }
        temp += `⚜️声望值:${common.BN(this.data.rankscore)}`;

        // 红名值or正义值
        if (this.data.wallet.evil > 0) {
            temp += `${walletKey_CN[walletKey[walletKey.evil]]}:${common.BN(this.data.wallet.evil)}\n`
        } else {
            temp += `${walletKey_CN[walletKey[walletKey.justice]]}:${common.BN(this.data.wallet.justice)}\n`
        }

        temp += `♥️${common.BN(this.data.hp, 1)}/${common.BN(out_attribute.hp_max, 1)}💖+${common.BN(out_attribute.secondResHp, 0)}/s\n`;
        if (common.BN(out_attribute.MagicAttack)) temp += `🔮魔法攻击${common.BN(out_attribute.MagicAttack)}\n`;
        if (common.BN(out_attribute.MagicDefense)) temp += `🌟魔法防御${common.BN(out_attribute.MagicDefense)}\n`;
        if (common.BN(out_attribute.PhysicalAttacks)) temp += `🔪物理攻击${common.BN(out_attribute.PhysicalAttacks)}\n`;
        if (common.BN(out_attribute.PhysicalAttacks)) temp += `🔰物理防御${common.BN(out_attribute.PhysicalDefense)}\n`;
        temp += `┗┄━══════════━┄`
        await bot.sendText(channelId, temp);
    }
}