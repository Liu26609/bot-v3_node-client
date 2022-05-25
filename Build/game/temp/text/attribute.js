"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_attribute_style = void 0;
const __1 = require("../../..");
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../unity/common"));
class text_attribute_style {
    constructor() {
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
        temp += this.data.title.name + '\n';
        temp += `┏┄════👑属性═══━┄\n`;
        temp += `┣Ⓜ️名称:${this.data.name}\n`;
        temp += `┣🔥等级:${this.data.leve}\n`;
        temp += `┣⏳经验:${common_1.default.BN(this.data.exp)}/${common_1.default.BN(this.data.exp_max)}\n`;
        temp += `┣♥️生命:${common_1.default.BN(this.data.hp)}/${common_1.default.BN(out_attribute.hp_max)}\n`;
        temp += `┣🔮魔法攻击:${common_1.default.BN(out_attribute.MagicAttack)}\n`;
        temp += `┣🌟魔法防御:${common_1.default.BN(out_attribute.MagicDefense)}\n`;
        temp += `┣🔪物理攻击:${common_1.default.BN(out_attribute.PhysicalAttacks)}\n`;
        temp += `┣🔰物理防御:${common_1.default.BN(out_attribute.PhysicalDefense)}\n`;
        temp += `┣💖每秒回复:${common_1.default.BN(out_attribute.secondResHp)}\n`;
        temp += `┗┄━══════════━┄`;
        bot_1.default.sendText(channelId, temp);
    }
}
exports.text_attribute_style = text_attribute_style;