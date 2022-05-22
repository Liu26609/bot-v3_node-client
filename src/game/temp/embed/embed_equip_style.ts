import { equip, EQUIP_EFFECT, EQUIP_QUALITY, EQUIP_QUALITY_CN, EQUIP_TYPE, EQUIP_TYPE_CN } from "../../../shared/game/equip";
import bot from "../../../unity/bot";
import gameCfg from "../../gameCfg";
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
        let name = this.equipData.name;
        let leve = this.equipData.leve;
        const quality = this.equipData.quality;
        const type = this.equipData.type;
        const attribute = this.equipData.base_attribute;
        const effect = this.equipData.effect;
        const iconId = this.equipData.icon;
        let temp = new embed_style();
        temp.setTips('装备属性')
        temp.setIcon(`${gameCfg.cosUrl}equip/${iconId}.png`)
        temp.setTitle('朋友，你渴望力量吗？嗯？？不好意思刀没磨！！！把渴望力量改成是兄弟就来砍我才对,而且武器加什么防御啊，不应该加命中嘛')
        temp.addLine(`Ⓜ️名称：${name}`)
        temp.addLine(`🔨品质：${EQUIP_QUALITY_CN[EQUIP_QUALITY[quality]]}`)
        temp.addLine(`🔨强化：+${leve}`)
        temp.addLine(`🗂️类型：${EQUIP_TYPE_CN[EQUIP_TYPE[type]]}`)
        temp.addLine(`物理攻击+${attribute.PhysicalAttacks}`)
        temp.addLine(`魔法攻击+${attribute.PhysicalAttacks}`)
        temp.addLine(`物理防御+${attribute.PhysicalAttacks}`)
        temp.addLine(`魔法防御+${attribute.MagicDefense}`)
        temp.addLine(`每秒回血+${attribute.secondResHp}`)
        await temp.sendMsg(channelId)
        if (effect) {
            let temp2 = new embed_style();
            temp2.setTitle('￣￣￣￣＼特殊效果／￣￣￣￣')
            effect.forEach(effectItem => {
                switch (effectItem.type) {
                    case EQUIP_EFFECT.attack_addExp:
                        temp2.addLine(`┏每次攻击增加${effectItem.val}经验⏳`);
                        temp2.addLine(`┗已触发:${effectItem.trigger}次`);
                        break;
                    default:
                        break;
                }
            });
            temp2.sendMsg(channelId)
        }

    }
}