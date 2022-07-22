"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_baseAttribute_style = void 0;
const __1 = require("../../..");
const common_1 = __importDefault(require("../../../shared/game/common"));
const text_style_1 = require("./text_style");
class text_baseAttribute_style {
    constructor() {
        this.title = `👑属性`;
    }
    setTitle(str) {
        this.title = str;
        return this;
    }
    sendData(data) {
        this.data = data;
        return this;
    }
    sendMsg(channelId) {
        if (!this.data) {
            (0, __1.err)('text_attribute_style 没有数据');
            return;
        }
        const out_attribute = this.data.out_attribute;
        let temp = new text_style_1.text_style();
        temp.setTitle(this.title);
        temp.addLine(`<emoji:11>战力:${common_1.default.BN(this.data.military)}`);
        temp.addLine(`${this.data.icon}名称:${this.data.name}`);
        temp.addLine(`🔥等级:${this.data.leve}`);
        temp.addLine(`⏳经验值:${common_1.default.BN(this.data.exp)}/${common_1.default.BN(this.data.exp_max)}`);
        temp.addLine(`♥️生命:${common_1.default.BN(this.data.hp)}/${common_1.default.BN(out_attribute.hp_max)}`);
        temp.addLine(`💖每秒回复:${common_1.default.BN(out_attribute.secondResHp)}`);
        temp.addLine(`🔮魔法攻击:${common_1.default.BN(out_attribute.MagicAttack)}`);
        temp.addLine(`🌟魔法防御:${common_1.default.BN(out_attribute.MagicDefense)}`);
        temp.addLine(`🔪物理攻击:${common_1.default.BN(out_attribute.PhysicalAttacks)}`);
        temp.addLine(`🔰物理防御:${common_1.default.BN(out_attribute.PhysicalDefense)}`);
        temp.sendMsg(channelId);
    }
}
exports.text_baseAttribute_style = text_baseAttribute_style;
