"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_baseAttribute_style = void 0;
const __1 = require("../../..");
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../shared/game/common"));
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
        let temp = ``;
        temp += `┏┄════${this.title}═══━┄\n`;
        temp += `<emoji:11>战力:${common_1.default.BN(this.data.military)}\n`;
        temp += `${this.data.icon}名称:${this.data.name}\n`;
        temp += `🔥等级:${this.data.leve}⏳${common_1.default.BN(this.data.exp)}/${common_1.default.BN(this.data.exp_max)}\n`;
        temp += `♥️生命:${common_1.default.BN(this.data.hp)}/${common_1.default.BN(out_attribute.hp_max)}💖+${common_1.default.BN(out_attribute.secondResHp)}/s\n`;
        temp += `🔮魔法攻击:${common_1.default.BN(out_attribute.MagicAttack)}\n`;
        temp += `🌟魔法防御:${common_1.default.BN(out_attribute.MagicDefense)}\n`;
        temp += `🔪物理攻击:${common_1.default.BN(out_attribute.PhysicalAttacks)}\n`;
        temp += `🔰物理防御:${common_1.default.BN(out_attribute.PhysicalDefense)}\n`;
        temp += `┗┄━══════════━┄`;
        bot_1.default.sendText(channelId, temp);
    }
}
exports.text_baseAttribute_style = text_baseAttribute_style;
