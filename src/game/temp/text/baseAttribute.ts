import { BASE_BODYS } from './../../../shared/game/body';
import { err } from "../../..";
import { body } from "../../../shared/game/body";
import bot from "../../../unity/bot";
import common from "../../../shared/game/common";
import { text_style } from './text_style';

export class text_baseAttribute_style {
    data?: BASE_BODYS;
    private title: string
    constructor() {
        this.title = `👑属性`
    }
    setTitle(str: string) {
        this.title = str;
        return this;
    }
    sendData(data: BASE_BODYS) {
        this.data = data;
        return this;
    }
    sendMsg(channelId: string) {
        if (!this.data) {
            err('text_attribute_style 没有数据')
            return;
        }
        const out_attribute = this.data.out_attribute;
        let temp = new text_style();
        temp.setTitle(this.title)
        temp.addLine(`<emoji:11>战力:${common.BN(this.data.military)}`)
        temp.addLine(`${this.data.icon}名称:${this.data.name}`)
        temp.addLine(`🔥等级:${this.data.leve}`)
        temp.addLine(`⏳经验值:${common.BN(this.data.exp)}/${common.BN(this.data.exp_max)}`)
        temp.addLine(`♥️生命:${common.BN(this.data.hp)}/${common.BN(out_attribute.hp_max)}`)
        temp.addLine(`💖每秒回复:${common.BN(out_attribute.secondResHp)}`)
        temp.addLine(`🔮魔法攻击:${common.BN(out_attribute.MagicAttack)}`)
        temp.addLine(`🌟魔法防御:${common.BN(out_attribute.MagicDefense)}`)
        temp.addLine(`🔪物理攻击:${common.BN(out_attribute.PhysicalAttacks)}`)
        temp.addLine(`🔰物理防御:${common.BN(out_attribute.PhysicalDefense)}`)
        temp.sendMsg(channelId)
    }
}