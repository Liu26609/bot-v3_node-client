"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_equip_style = void 0;
const equip_1 = require("../../../shared/game/equip");
const bot_1 = __importDefault(require("../../../unity/bot"));
/**
┏┄════👑装备属性═══━┄
┣⭐️⭐️🌟🌟🌟🌟
┣Ⓜ️名称：🎩哈哈哈+0
┣🔨创造者ID：1107
┣🗂️装备位置：腰部
┣💪力量+1
┣🥋体质+1
┣🧠敏捷+1
┣💫智力+1
┣🎯精神+1
┗┄━══════════━┄
 */
class text_equip_style {
    constructor() {
        return this;
    }
    setData(data) {
        this.equipData = data;
        return this;
    }
    getTemp() {
        let name = this.equipData.name;
        let leve = this.equipData.leve;
        const quality = this.equipData.quality;
        const type = this.equipData.type;
        const attribute = this.equipData.base_attribute;
        const effect = this.equipData.effect;
        let str = '';
        str += `┏┄════👑装备属性═══━┄\n`;
        str += `┣Ⓜ️名称：${name} +${leve}\n`;
        str += `┣🔨品质：${equip_1.EQUIP_QUALITY_CN[equip_1.EQUIP_QUALITY[quality]]}\n`;
        str += `┣🗂️类型：${equip_1.EQUIP_TYPE_CN[equip_1.EQUIP_TYPE[type]]}\n`;
        str += `┣物理攻击+${attribute.PhysicalAttacks}\n`;
        str += `┣魔法攻击+${attribute.PhysicalAttacks}\n`;
        str += `┣物理防御+${attribute.PhysicalAttacks}\n`;
        str += `┣魔法防御+${attribute.MagicDefense}\n`;
        str += `┣每秒回血+${attribute.secondResHp}\n`;
        if (effect) {
            str += `┣┄════👑装备特效═══━┄\n`;
            effect.forEach(effectItem => {
                switch (effectItem.type) {
                    case equip_1.EQUIP_EFFECT.attack_addExp:
                        str += `┏每次攻击增加${effectItem.val}经验⏳\n`;
                        str += `┗已触发:${effectItem.trigger}次\n`;
                        break;
                    default:
                        break;
                }
            });
        }
        else {
            str += `┗┄━══════════━┄`;
        }
        return str;
    }
    sendMsg(channelId) {
        let str = this.getTemp();
        bot_1.default.sendText(channelId, str);
        bot_1.default.sendText(channelId, this.equipData.story);
    }
}
exports.text_equip_style = text_equip_style;
