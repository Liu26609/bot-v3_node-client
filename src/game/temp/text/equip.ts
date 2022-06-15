import { equip, EQUIP_QUALITY, EQUIP_QUALITY_COLOR, EQUIP_TYPE, EQUIP_TYPE_CN } from "../../../shared/game/equip";
import base64_safe from "../../../unity/base64_safe";
import bot from "../../../unity/bot";
import common from "../../../unity/common";
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
        image += `${bot_cfg.imgTextCode}/${base64_safe.urlEncode(`${Math.ceil(common.converEquipattribute(this.equipData,'PhysicalAttacks'))}
${Math.ceil(common.converEquipattribute(this.equipData,'MagicAttack'))}
${Math.ceil(common.converEquipattribute(this.equipData,'PhysicalDefense'))}
${Math.ceil(common.converEquipattribute(this.equipData,'MagicDefense'))}
${Math.ceil(common.converEquipattribute(this.equipData,'secondResHp'))}
${Math.ceil(common.converEquipattribute(this.equipData,'hp_max'))}`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffffff`)}/fontsize/20/dx/10/dy/215`;


        return image;
    }
    sendMsg(channelId: string) {
        let url = this.getTemp();
        bot.sendImage(channelId, url)
        if(this.equipData.story.length > 0) bot.sendText(channelId, this.equipData.story)
    }
}