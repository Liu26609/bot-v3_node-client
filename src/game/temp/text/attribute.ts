import { info } from 'console';
import { err } from "../../..";
import { ancestry, ancestryLeve, body, DNA_CN, DNA_Leve } from "../../../shared/game/body";
import { teamLeve, teamLeve_CN, TEAM_INFO } from "../../../shared/game/team";
import { walletKey, walletKey_CN } from "../../../shared/game/user";
import bot from "../../../unity/bot";
import common from "../../../shared/game/common";
import { EQUIP_QUALITY, EQUIP_TYPE_CN, EQUIP_TYPE, EQUIP_QUALITY_COLOR } from '../../../shared/game/equip';
import base64_safe from '../../../unity/base64_safe';

export class text_attribute_style {
    data?: body;
    ancestry?: ancestry;
    team?: TEAM_INFO;
    name: string;
    constructor() {
        this.name = '达尔文进化岛'
    }
    setAncestry(info: ancestry) {
        this.ancestry = info;
        return this;
    }
    setTeam(info: TEAM_INFO | undefined) {
        if (info) {
            this.team = info;
        }
        return this;
    }
    setData(data: body) {
        this.data = data;
        return this;
    }
    setUserName(str: string) {
        this.name = str;
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
        temp += `┏┄═══👑属性══━┄\n`
        temp += `<emoji:11>战力:${this.data.military}\n`
        temp += `🔥Lv.${this.data.leve}⏳(${common.BN(this.data.exp, 0)}/${common.BN(this.data.exp_max, 0)})\n`;
        temp += `${this.data.icon}名称:${this.data.name}\n`
        if (this.ancestry) {
            temp += `👑${this.ancestry.title}\n`
        }
        if (this.data.dnaLock > 0) {
            temp += `🔒基因锁[${DNA_CN[DNA_Leve[this.data.dnaLock]]}]\n`;
        }
        // 工会
        if (this.team) {
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
        if (out_attribute.MagicAttack > 1) temp += `🔮魔法攻击${common.BN(out_attribute.MagicAttack, 4)}\n`;
        if (out_attribute.MagicDefense > 1) temp += `🌟魔法防御${common.BN(out_attribute.MagicDefense, 4)}\n`;
        if (out_attribute.PhysicalAttacks > 1) temp += `🔪物理攻击${common.BN(out_attribute.PhysicalAttacks, 4)}\n`;
        if (out_attribute.PhysicalDefense > 1) temp += `🔰物理防御${common.BN(out_attribute.PhysicalDefense, 4)}\n`;

        temp += `┗┄━═════════━┄`
        await bot.sendText(channelId, temp);

        let bot_cfg = bot.getBotConfig()
        let image = `${bot_cfg.cosUrl}/test/test1.png?`;
        // 装备图标
        image += `${bot_cfg.imgImgCode}/${base64_safe.urlEncode(`${bot_cfg.cosUrl_http}/test/16.png`)}/dx/873/dy/10`;
        // 战力
        image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`${this.data.military}`)}/font/${base64_safe.urlEncode('幼圆.TTF')}/fill/${base64_safe.urlEncode(`#ffffff`)}/fontsize/32/dx/370/dy/542`;
        // 等级
        image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`${this.data.leve}`)}/font/${base64_safe.urlEncode('幼圆.TTF')}/fill/${base64_safe.urlEncode(`#000000`)}/fontsize/32/dx/530/dy/490`;
        // 基因锁
        image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`${DNA_CN[DNA_Leve[this.data.dnaLock]]}`)}/font/${base64_safe.urlEncode('幼圆.TTF')}/fill/${base64_safe.urlEncode(`#000000`)}/fontsize/24/dx/35/dy/490`;
        // 生命
        // image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`${common.BN(this.data.hp, 1)}/${common.BN(out_attribute.hp_max, 1)}+${common.BN(out_attribute.secondResHp, 0)}s\n`)}/font/${base64_safe.urlEncode('幼圆.TTF')}/fill/${base64_safe.urlEncode(`#000000`)}/fontsize/24/dx/442/dy/415`;
        image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`${Math.ceil(out_attribute.PhysicalAttacks)}
${Math.ceil(out_attribute.PhysicalDefense)}
${Math.ceil(out_attribute.MagicAttack)}
${Math.ceil(out_attribute.MagicDefense)}`)}/font/${base64_safe.urlEncode('幼圆.TTF')}/fill/${base64_safe.urlEncode(`#000000`)}/fontsize/24/dx/270/dy/285`;
        // 归属玩家
        // 血统等级
        // if (this.ancestry) {
        //     image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`${this.ancestry.title}`)}/font/${base64_safe.urlEncode('幼圆.TTF')}/fill/${base64_safe.urlEncode(`#000000`)}/fontsize/24/dx/450/dy/100`;
        // } else {
            image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`@${this.name}`)}/font/${base64_safe.urlEncode('幼圆.TTF')}/fill/${base64_safe.urlEncode(`#000000`)}/fontsize/24/dx/0/dy/0`;
        // }
        // image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`1000`)}/font/${base64_safe.urlEncode('幼圆.TTF')}/fill/${base64_safe.urlEncode(`#000000`)}/fontsize/24/dx/15/dy/15`;
        //         image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`基础属性:${mark}分`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#00FFFF`)}/fontsize/24/dx/10/dy/170`;
        //         image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`强化属性:${Markconver}分`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#FFFF6F`)}/fontsize/24/dx/10/dy/140`;
        bot.sendImage(channelId, image)
    }
}