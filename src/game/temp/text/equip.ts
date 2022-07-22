import { equip, EQUIP_QUALITY, EQUIP_QUALITY_COLOR, EQUIP_TYPE, EQUIP_TYPE_CN } from "../../../shared/game/equip";
import base64_safe from "../../../unity/base64_safe";
import bot from "../../../unity/bot";
import common from "../../../shared/game/common";
export class text_equip_style {
    equipData!: equip;
    constructor() {
        return this;
    }
    setData(data: equip) {
        this.equipData = data;
        return this;
    }
    getTemp() {
        let name = this.equipData.name;
        let leve = this.equipData.leve;
        const quality = this.equipData.quality;
        const type = this.equipData.type;
        const attribute = this.equipData.base_attribute;
        let converAttribut = JSON.parse(JSON.stringify(this.equipData.base_attribute))
        let mark = common.converMilitary(attribute);//基础战力
        let Markconver = 0;//装备转化后战力
        for (const key in converAttribut) {
            converAttribut[key] = Math.ceil(common.converEquipattribute(this.equipData, key))
        }
        Markconver =  common.converMilitary(converAttribut);


        const iconId = this.equipData.icon;
        let bot_cfg = bot.getBotConfig()
        let image = `${bot_cfg.cosUrl}/temp/equip.png?`;
        // 装备图标
        image += `${bot_cfg.imgImgCode}/${base64_safe.urlEncode(`${bot_cfg.cosUrl_http}/equip/${iconId}.png`)}/dx/195/dy/228`;
        // 称号
        image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`${name}+${leve}`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffffff`)}/fontsize/32/dx/10/dy/385`;
        // 品质
        image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`${EQUIP_QUALITY[quality]}级 ${EQUIP_TYPE_CN[EQUIP_TYPE[type]]}`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`${EQUIP_QUALITY_COLOR[EQUIP_QUALITY[quality]]}`)}/fontsize/24/dx/20/dy/350`;
        // 属性
        image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`${Math.ceil(common.converEquipattribute(this.equipData, 'PhysicalAttacks'))}
${Math.ceil(common.converEquipattribute(this.equipData, 'MagicAttack'))}
${Math.ceil(common.converEquipattribute(this.equipData, 'PhysicalDefense'))}
${Math.ceil(common.converEquipattribute(this.equipData, 'MagicDefense'))}
${Math.ceil(common.converEquipattribute(this.equipData, 'secondResHp'))}
${Math.ceil(common.converEquipattribute(this.equipData, 'hp_max'))}`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffffff`)}/fontsize/20/dx/10/dy/215`;
        image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`基础战力:${mark}`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#00FFFF`)}/fontsize/24/dx/10/dy/170`;
        if(Markconver != mark){
            image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`强化战力:${Markconver}`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#FFFF6F`)}/fontsize/24/dx/10/dy/140`;
        }
        return image;
    }
    sendMsg(channelId: string) {
        let url = this.getTemp();
        bot.sendImage(channelId, url)
        let story = '';

        if (this.equipData.story.length > 0) {
            story += this.equipData.story || '暂无装备来源故事,你可以来补全他。'
        };
        if (typeof (this.equipData.skill_active_id) != 'undefined' && this.equipData.outSkillData) {
            if(story.length > 0){
                story += '\n';
            }
            story += `Ⓜ️附带技能:${this.equipData.outSkillData.name}`
            story += `\n🚀触发频率:${this.equipData.outSkillData.speed}`
            story += `\n📄效果描述:${common.getSkDesc(this.equipData.outSkillData)}`;
        }
        if (story.length > 0) {
            bot.sendText(channelId, story)
        }

    }
}