import { err } from "../../..";
import { body, ancestry, DNA_CN, DNA_Leve } from "../../../shared/game/body";
import { equip, EQUIP_QUALITY, EQUIP_TYPE, EQUIP_TYPE_CN } from "../../../shared/game/equip";
import { TEAM_INFO, teamLeve_CN, teamLeve } from "../../../shared/game/team";
import { walletKey_CN, walletKey } from "../../../shared/game/user";
import bot from "../../../unity/bot";
import common from "../../../shared/game/common";
import { embed_style } from "./embed";


export class embed_attribute_style {
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
        let embed = new embed_style();
        const out_attribute = this.data.out_attribute;
        let temp = ``;
        embed.setTitle(this.data.title.name)
        embed.addLine(`战力:${this.data.military}`)
        embed.addLine(`🔥Lv.${this.data.leve}`)
        embed.addLine(`⏳经验${common.BN(this.data.exp,0)}/${common.BN(this.data.exp_max,0)}`)
        embed.addLine(`${this.data.icon}名称:${this.data.name}`)
        // temp += `┏┄════👑属性═══━┄\n`
        // temp += `<emoji:11>战力:${this.data.military}\n`
        // temp += `🔥Lv.${this.data.leve}⏳(${common.BN(this.data.exp,0)}/${common.BN(this.data.exp_max,0)})\n`;
        // temp += `${this.data.icon}名称:${this.data.name}\n`
        if (this.ancestry) {
            // temp += `👑${this.ancestry.title}\n`
            embed.addLine(`血统:👑${this.ancestry.title}`)
        }
        if (this.data.dnaLock > 0) {
            // temp += `🔒基因锁[${DNA_CN[DNA_Leve[this.data.dnaLock]]}]\n`;
            embed.addLine(`🔒基因锁[${DNA_CN[DNA_Leve[this.data.dnaLock]]}]`)
        }
        // 工会
        if(this.team){
            // temp += `🏰${this.team.leve}级工会:${this.team.name}[${teamLeve_CN[teamLeve[this.data.team.leve]]}]\n`
            embed.addLine(`🏰${this.team.leve}级工会:${this.team.name}[${teamLeve_CN[teamLeve[this.data.team.leve]]}]`)
        }
        // temp += `⚜️声望值:${common.BN(this.data.rankscore)}`;
        embed.addLine(`⚜️声望值:${common.BN(this.data.rankscore)}`)
        // 红名值or正义值
        if (this.data.wallet.evil > 0) {
            // temp += `${walletKey_CN[walletKey[walletKey.evil]]}:${common.BN(this.data.wallet.evil)}\n`
            embed.addLine(`${walletKey_CN[walletKey[walletKey.evil]]}:${common.BN(this.data.wallet.evil)}`)
        } else {
            embed.addLine(`${walletKey_CN[walletKey[walletKey.justice]]}:${common.BN(this.data.wallet.justice)}`)
            // temp += `${walletKey_CN[walletKey[walletKey.justice]]}:${common.BN(this.data.wallet.justice)}\n`
        }
        embed.addLine(`♥️${common.BN(this.data.hp, 1)}/${common.BN(out_attribute.hp_max, 1)}`)
        embed.addLine(`💖每秒回复+${common.BN(out_attribute.secondResHp, 0)}/s`)
        // temp += `♥️${common.BN(this.data.hp, 1)}/${common.BN(out_attribute.hp_max, 1)}💖+${common.BN(out_attribute.secondResHp, 0)}/s\n`;
        if (out_attribute.MagicAttack > 1) embed.addLine(`🔮魔法攻击${common.BN(out_attribute.MagicAttack,4)}`);
        if (out_attribute.MagicDefense > 1)embed.addLine(`🌟魔法防御${common.BN(out_attribute.MagicDefense,4)}`);
        if (out_attribute.PhysicalAttacks > 1)embed.addLine(`🔪物理攻击${common.BN(out_attribute.PhysicalAttacks,4)}`);
        if (out_attribute.PhysicalDefense > 1)embed.addLine(`🔰物理防御${common.BN(out_attribute.PhysicalDefense,4)}`);
        await embed.sendMsg(channelId)
        // temp += `┗┄━══════════━┄`
        // await bot.sendText(channelId, temp);
    }
}