"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_equip_style = void 0;
const equip_1 = require("../../../shared/game/equip");
const base64_safe_1 = __importDefault(require("../../../unity/base64_safe"));
const bot_1 = __importDefault(require("../../../unity/bot"));
const gameCfg_1 = __importDefault(require("../../gameCfg"));
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
        const iconId = this.equipData.icon;
        let image = `https://21-1257174510.cos.ap-nanjing.myqcloud.com/temp/equip.png?`;
        // 装备图标
        image += `imageMogr2/interlace/0/quality/75|watermark/1/image/${base64_safe_1.default.urlEncode(`${gameCfg_1.default.cosUrl_http}/equip/${iconId}.png`)}/dx/195/dy/220`;
        // 称号
        image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe_1.default.urlEncode(`${name} +${leve}`)}/font/${base64_safe_1.default.urlEncode('simkai楷体.ttf')}/fill/${base64_safe_1.default.urlEncode(`#ffff00`)}/fontsize/32/dx/10/dy/390`;
        // 品质
        image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe_1.default.urlEncode(`${equip_1.EQUIP_TYPE_CN[equip_1.EQUIP_TYPE[type]]}(${equip_1.EQUIP_QUALITY[quality]})`)}/font/${base64_safe_1.default.urlEncode('simkai楷体.ttf')}/fill/${base64_safe_1.default.urlEncode(`#00ffff`)}/fontsize/24/dx/20/dy/350`;
        // 属性
        image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe_1.default.urlEncode(`${attribute.PhysicalAttacks}
${attribute.MagicAttack}
${attribute.PhysicalDefense}
${attribute.MagicDefense}
${attribute.secondResHp}
${attribute.hp_max}`)}/font/${base64_safe_1.default.urlEncode('simkai楷体.ttf')}/fill/${base64_safe_1.default.urlEncode(`#ffffff`)}/fontsize/20/dx/10/dy/215`;
        return image;
    }
    sendMsg(channelId) {
        let url = this.getTemp();
        bot_1.default.sendImage(channelId, url);
        bot_1.default.sendText(channelId, this.equipData.story);
    }
}
exports.text_equip_style = text_equip_style;
