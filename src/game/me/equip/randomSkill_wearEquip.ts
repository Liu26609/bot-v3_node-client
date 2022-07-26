import { text_style } from './../../temp/text/text_style';
import { USER_CFG_MSGTEMPLATE } from '../../../interface/userCfg';
import { EQUIP_TYPE_CN, EQUIP_TYPE, EQUIP_QUALITY, EQUIP_TYPE_ICON } from '../../../shared/game/equip';
import { walletKey_CN, walletKey } from '../../../shared/game/user';
import bot from '../../../unity/bot';
import { embed_style } from '../../temp/embed/embed';
import { text_example_style } from '../../temp/text/example';
import { task_base } from './../../task_base';
import sever from '../../../unity/sever';
import common from '../../../shared/game/common';
/**
 * 装备附魔
 */
export class randomSkill_wearEquip extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        new text_example_style().setCommand('重置装备技能指令: 附魔 + 装备类型').setExample('附魔武器').sendMsg(this.channel_id)
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }

        let strengthenType;
        let strengthenStr = this.content.replace(this.matchKey, '');
        switch (strengthenStr) {
            case EQUIP_TYPE_CN.weapons:
                strengthenType = EQUIP_TYPE.weapons;
                break;
            case EQUIP_TYPE_CN.subWeapon:
                strengthenType = EQUIP_TYPE.subWeapon;
                break;
            case EQUIP_TYPE_CN.clothes:
                strengthenType = EQUIP_TYPE.clothes;
                break;
            case EQUIP_TYPE_CN.hat:
                strengthenType = EQUIP_TYPE.hat;
                break;
            case EQUIP_TYPE_CN.medal:
                strengthenType = EQUIP_TYPE.medal;
                break;
            case EQUIP_TYPE_CN.necklace:
                strengthenType = EQUIP_TYPE.necklace;
                break;
            default:

                break;
        }

        if (typeof (strengthenType) != 'number') {
            this.menu();
            return;
        }
        console.log('me/equip/WearEquip_RandomSkill','sss')
        let req = await sever.callApi('me/equip/WearEquip_RandomSkill', { userId: this.userId, strengthenType: strengthenType })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let bf = data.bfEquip;
        let now = data.nowEquip;
        let temp;
        if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
            temp = new text_style();
            if (data.isSuccress) {
                temp.setTitle(`<emoji:320>附魔成功`)
                temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%`)
                temp.addLine(`🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`)
                temp.addLine(`▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}`)
                temp.addLine(`${this.at()}(${EQUIP_QUALITY[bf.quality]}级装备)`)
                temp.addLine(`${EQUIP_TYPE_ICON[EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`)
                if (now.outSkillData) {
                    temp.addLine(`Ⓜ️新的技能:${now.outSkillData?.name}`)
                    temp.addLine(`📄效果描述:${common.getSkDesc(now.outSkillData)}`)
                }
                temp.setEnd(`┗┄${this.at()}┄`)
            } else {
                temp.setTitle(`<emoji:173>附魔失败`)
                temp.addLine(`${EQUIP_TYPE_ICON[EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`)
                temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%`)
                temp.addLine(`🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`)
                temp.addLine(`▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}`)
                temp.setEnd(`┗┄${this.at()}┄`)
            }
            temp.sendMsg(this.channel_id);
        } else {
            temp = new embed_style();
            temp.setIcon(`${bot.getBotConfig().cosUrl_http}/equip/${data.nowEquip.icon}.png`);
            temp.setTips(`${bf.name}+${now.leve}`)
            if (data.isSuccress) {
                temp.setTitle(`✔︎附魔成功`)
                temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%`)
                temp.addLine(`🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`)
                temp.addLine(`▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}`)
                temp.addLine(`${this.userName}(${EQUIP_QUALITY[bf.quality]}级装备)`)
                temp.addLine(`${EQUIP_TYPE_ICON[EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`)
                if (now.outSkillData) {
                    temp.addLine(`Ⓜ️新的技能:${now.outSkillData?.name}`)
                    temp.addLine(`📄效果描述:${common.getSkDesc(now.outSkillData)}`)
                }
            } else {
                temp.setTitle(`❌附魔失败`)
                temp.addLine(`${EQUIP_TYPE_ICON[EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`)
                temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%`)
                temp.addLine(`🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`)
                temp.addLine(`▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}`)
            }
            temp.sendMsg(this.channel_id);
        }
    }
}