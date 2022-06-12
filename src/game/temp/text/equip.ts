import { equip, EQUIP_EFFECT, EQUIP_QUALITY, EQUIP_QUALITY_CN, EQUIP_TYPE, EQUIP_TYPE_CN } from "../../../shared/game/equip";
import base64_safe from "../../../unity/base64_safe";
import bot from "../../../unity/bot";
import gameCfg from "../../gameCfg";

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
        const effect = this.equipData.effect;
        const iconId = this.equipData.icon;
        // let str = '';
        // str += `┏┄════👑装备属性═══━┄\n`;
        // str += `┣Ⓜ️名称：${name} +${leve}\n`;
        // str += `┣🔨品质：${EQUIP_QUALITY_CN[EQUIP_QUALITY[quality]]}\n`;
        // str += `┣🗂️类型：${EQUIP_TYPE_CN[EQUIP_TYPE[type]]}\n`;
        // str += `┣物理攻击+${attribute.PhysicalAttacks}\n`;
        // str += `┣魔法攻击+${attribute.PhysicalAttacks}\n`;
        // str += `┣物理防御+${attribute.PhysicalAttacks}\n`;
        // str += `┣魔法防御+${attribute.MagicDefense}\n`;
        // str += `┣每秒回血+${attribute.secondResHp}\n`;
        // if (effect) {
        //     str += `┣┄════👑装备特效═══━┄\n`;
        //     effect.forEach(effectItem => {
        //         switch (effectItem.type) {
        //             case EQUIP_EFFECT.attack_addExp:
        //                 str += `┏每次攻击增加${effectItem.val}经验⏳\n`;
        //                 str += `┗已触发:${effectItem.trigger}次\n`;
        //                 break;
        //             default:
        //                 break;
        //         }
        //     });
        // } else {
        //     str += `┗┄━══════════━┄`;
        // }


        let image = `https://21-1257174510.cos.ap-nanjing.myqcloud.com/temp/equip.png?`;
        // 装备图标
        image += `imageMogr2/interlace/0/quality/75|watermark/1/image/${base64_safe.urlEncode(`${gameCfg.cosUrl_http}/equip/${iconId}.png`)}/dx/195/dy/220`;
        // 称号
        image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`${name} +${leve}`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffff00`)}/fontsize/32/dx/10/dy/390`;
        // 品质
        image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`${EQUIP_QUALITY_CN[EQUIP_QUALITY[quality]]}(${EQUIP_TYPE_CN[EQUIP_TYPE[type]]})`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#00ffff`)}/fontsize/24/dx/20/dy/350`;
        // 属性
        image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`${attribute.PhysicalAttacks}
${attribute.PhysicalAttacks}
${attribute.PhysicalAttacks}
${attribute.MagicDefense}
${attribute.secondResHp}
${attribute.hp_max}`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffffff`)}/fontsize/20/dx/10/dy/215`;


        return image;
    }
    sendMsg(channelId: string) {
        let url = this.getTemp();
        bot.sendImage(channelId, url)
        bot.sendText(channelId, this.equipData.story)
    }
}