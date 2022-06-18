import { info } from 'console';
import { err } from "../../..";
import { ancestry, ancestryLeve, body, DNA_CN, DNA_Leve } from "../../../shared/game/body";
import { teamLeve, teamLeve_CN, TEAM_INFO } from "../../../shared/game/team";
import { walletKey, walletKey_CN } from "../../../shared/game/user";
import bot from "../../../unity/bot";
import common from "../../../shared/game/common";

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
        temp += `<emoji:11>战力:${this.data.military}\n`
        temp += `🔥Lv.${this.data.leve}⏳(${common.BN(this.data.exp,0)}/${common.BN(this.data.exp_max,0)})\n`;
        temp += `${this.data.icon}名称:${this.data.name}\n`
        if (this.ancestry) {
            temp += `👑${this.ancestry.title}\n`
        }
        if (this.data.dnaLock > 0) {
            temp += `🔒基因锁[${DNA_CN[DNA_Leve[this.data.dnaLock]]}]\n`;
        }
        // 工会
        if(this.team){
            temp += `🏰${this.team.leve}级工会:${this.team.name}[${teamLeve_CN[teamLeve[this.data.team.leve]]}]\n`
        }
        temp += `⚜️声望值:${common.BN(this.data.rankscore)}`;

        // 红名值or正义值
        if (this.data.wallet.evil > 0) {
            temp += `${walletKey_CN[walletKey[walletKey.evil]]}:${common.BN(this.data.wallet.evil)}\n`
        } else {
            temp += `${walletKey_CN[walletKey[walletKey.justice]]}:${common.BN(this.data.wallet.justice)}\n`
        }

        temp += `♥️${common.BN(this.data.hp, 1)}/${common.BN(out_attribute.hp_max, 1)}💖+${common.BN(out_attribute.secondResHp, 0)}/s\n`;
        if (out_attribute.MagicAttack > 1) temp += `🔮魔法攻击${common.BN(out_attribute.MagicAttack,4)}\n`;
        if (out_attribute.MagicDefense > 1) temp += `🌟魔法防御${common.BN(out_attribute.MagicDefense,4)}\n`;
        if (out_attribute.PhysicalAttacks > 1) temp += `🔪物理攻击${common.BN(out_attribute.PhysicalAttacks,4)}\n`;
        if (out_attribute.PhysicalDefense > 1)temp += `🔰物理防御${common.BN(out_attribute.PhysicalDefense,4)}\n`;

        temp += `┗┄━══════════━┄`
        await bot.sendText(channelId, temp);
    }
}