"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_equip_style = void 0;
const equip_1 = require("../../../shared/game/equip");
const base64_safe_1 = __importDefault(require("../../../unity/base64_safe"));
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../shared/game/common"));
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
        let converAttribut = JSON.parse(JSON.stringify(this.equipData.base_attribute));
        let mark = common_1.default.converMilitary(attribute); //基础战力
        let Markconver = 0; //装备转化后战力
        for (const key in converAttribut) {
            converAttribut[key] = Math.ceil(common_1.default.converEquipattribute(this.equipData, key));
        }
        Markconver = common_1.default.converMilitary(converAttribut);
        const iconId = this.equipData.icon;
        let bot_cfg = bot_1.default.getBotConfig();
        let image = `${bot_cfg.cosUrl}/temp/equip.png?`;
        // 装备图标
        image += `${bot_cfg.imgImgCode}/${base64_safe_1.default.urlEncode(`${bot_cfg.cosUrl_http}/equip/${iconId}.png`)}/dx/195/dy/228`;
        // 称号
        image += `${bot_cfg.imgTextCode}/${base64_safe_1.default.urlEncode(`${name}+${leve}`)}/font/${base64_safe_1.default.urlEncode('simkai楷体.ttf')}/fill/${base64_safe_1.default.urlEncode(`#ffffff`)}/fontsize/32/dx/10/dy/385`;
        // 品质
        image += `${bot_cfg.imgTextCode}/${base64_safe_1.default.urlEncode(`${equip_1.EQUIP_QUALITY[quality]}级 ${equip_1.EQUIP_TYPE_CN[equip_1.EQUIP_TYPE[type]]}`)}/font/${base64_safe_1.default.urlEncode('simkai楷体.ttf')}/fill/${base64_safe_1.default.urlEncode(`${equip_1.EQUIP_QUALITY_COLOR[equip_1.EQUIP_QUALITY[quality]]}`)}/fontsize/24/dx/20/dy/350`;
        // 属性
        image += `${bot_cfg.imgTextCode}/${base64_safe_1.default.urlEncode(`${Math.ceil(common_1.default.converEquipattribute(this.equipData, 'PhysicalAttacks'))}
${Math.ceil(common_1.default.converEquipattribute(this.equipData, 'MagicAttack'))}
${Math.ceil(common_1.default.converEquipattribute(this.equipData, 'PhysicalDefense'))}
${Math.ceil(common_1.default.converEquipattribute(this.equipData, 'MagicDefense'))}
${Math.ceil(common_1.default.converEquipattribute(this.equipData, 'secondResHp'))}
${Math.ceil(common_1.default.converEquipattribute(this.equipData, 'hp_max'))}`)}/font/${base64_safe_1.default.urlEncode('simkai楷体.ttf')}/fill/${base64_safe_1.default.urlEncode(`#ffffff`)}/fontsize/20/dx/10/dy/215`;
        image += `${bot_cfg.imgTextCode}/${base64_safe_1.default.urlEncode(`基础属性:${mark}分`)}/font/${base64_safe_1.default.urlEncode('simkai楷体.ttf')}/fill/${base64_safe_1.default.urlEncode(`#00FFFF`)}/fontsize/24/dx/10/dy/170`;
        image += `${bot_cfg.imgTextCode}/${base64_safe_1.default.urlEncode(`强化属性:${Markconver}分`)}/font/${base64_safe_1.default.urlEncode('simkai楷体.ttf')}/fill/${base64_safe_1.default.urlEncode(`#FFFF6F`)}/fontsize/24/dx/10/dy/140`;
        return image;
    }
    sendMsg(channelId) {
        let url = this.getTemp();
        bot_1.default.sendImage(channelId, url);
        let story = '';
        if (this.equipData.story.length > 0) {
            story += this.equipData.story || '暂无装备来源故事,你可以来补全他。';
        }
        ;
        if (typeof (this.equipData.skill_active_id) != 'undefined' && this.equipData.outSkillData) {
            if (story.length > 0) {
                story += '\n';
            }
            story += `Ⓜ️附带技能:${this.equipData.outSkillData.name}`;
            story += `\n🚀触发频率:${this.equipData.outSkillData.speed}`;
            story += `\n📄效果描述:${common_1.default.getSkDesc(this.equipData.outSkillData)}`;
        }
        if (story.length > 0) {
            bot_1.default.sendText(channelId, story);
        }
    }
}
exports.text_equip_style = text_equip_style;
