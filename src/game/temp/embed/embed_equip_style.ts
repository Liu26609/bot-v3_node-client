import { equip, EQUIP_QUALITY, EQUIP_TYPE, EQUIP_TYPE_CN } from "../../../shared/game/equip";
import bot from "../../../unity/bot";
import { embed_style } from "./embed";


export class embed_equip_style {
    equipData!: equip;
    constructor() {
        return this;
    }
    setData(data: equip) {
        this.equipData = data;
        return this;
    }
    async sendMsg(channelId: string) {
        let bot_cfg = bot.getBotConfig()
        let name = this.equipData.name;
        let leve = this.equipData.leve;
        const quality = this.equipData.quality;
        const type = this.equipData.type;
        const attribute = this.equipData.base_attribute;
        const iconId = this.equipData.icon;
        let temp = new embed_style();
        temp.setTips('装备属性')
        temp.setIcon(`${bot_cfg.cosUrl}equip/${iconId}.png`)
        temp.setTitle(`${this.equipData.story}`)
        temp.addLine(`Ⓜ️名称：${name}`)
        temp.addLine(`🔨品质：${EQUIP_QUALITY[quality]}`)
        temp.addLine(`🔨强化：+${leve}`)
        temp.addLine(`🗂️类型：${EQUIP_TYPE_CN[EQUIP_TYPE[type]]}`)
        temp.addLine(`物理攻击+${attribute.PhysicalAttacks}`)
        temp.addLine(`魔法攻击+${attribute.PhysicalAttacks}`)
        temp.addLine(`物理防御+${attribute.PhysicalAttacks}`)
        temp.addLine(`魔法防御+${attribute.MagicDefense}`)
        temp.addLine(`每秒回血+${attribute.secondResHp}`)
        await temp.sendMsg(channelId)

    }
}