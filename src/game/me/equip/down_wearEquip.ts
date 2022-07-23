import { text_style } from './../../temp/text/text_style';
import { USER_CFG_MSGTEMPLATE } from '../../../interface/userCfg';
import common from '../../../shared/game/common';
import { EQUIP_QUALITY, EQUIP_TYPE, EQUIP_TYPE_CN, EQUIP_TYPE_ICON } from '../../../shared/game/equip';
import { walletKey_CN, walletKey } from '../../../shared/game/user';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
import { embed_style } from '../../temp/embed/embed';
import { text_example_style } from '../../temp/text/example';

export class down_wearEquip extends task_base {
    constructor(...a) {
        super(...a);
        this.render();

    }
    menu() {
        new text_example_style().setCommand('卸下装备指令: 卸下 + 装备类型').setExample('卸下武器').sendMsg(this.channel_id)
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
        let req = await sever.callApi('me/equip/Down_wearEquip', { userId: this.userId, strengthenType: strengthenType })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
            let temp = new text_style();
            temp.setTitle(`<emoji:320>成功卸下装备`)
            temp.addLine(`${this.at()}(${EQUIP_QUALITY[data.quality]}级装备)`)
            if (common.converEquipattribute(data, `hp_max`) > 0) temp.addLine(`♥️最大生命${common.BN(common.converEquipattribute(data, `hp_max`))}🔻`)
            if (common.converEquipattribute(data, `MagicAttack`) > 0) temp.addLine(`🔮魔法攻击${common.BN(common.converEquipattribute(data, `MagicAttack`))}🔻`)
            if (common.converEquipattribute(data, `MagicDefense`) > 0) temp.addLine(`🌟魔法防御${common.BN(common.converEquipattribute(data, `MagicDefense`))}🔻`)
            if (common.converEquipattribute(data, `PhysicalAttacks`) > 0) temp.addLine(`🔪物理攻击${common.BN(common.converEquipattribute(data, `PhysicalAttacks`))}🔻`)
            if (common.converEquipattribute(data, `PhysicalDefense`) > 0) temp.addLine(`🔰物理防御${common.BN(common.converEquipattribute(data, `PhysicalDefense`))}🔻`)
            if (common.converEquipattribute(data, `secondResHp`) > 0) temp.addLine(`💖每秒回复${common.BN(common.converEquipattribute(data, `secondResHp`))}🔻`)
            temp.sendMsg(this.channel_id)
        } else {
            let temp = new embed_style();
            temp.setTitle(`✔︎成功卸下装备`)
            temp.setIcon(`${bot.getBotConfig().cosUrl_http}/equip/${data.icon}.png`);
            temp.setTips(`${data.name}+${data.leve}`)
            if (common.converEquipattribute(data, `hp_max`) > 0) temp.addLine(`♥️最大生命${common.BN(common.converEquipattribute(data, `hp_max`))}🔻`)
            if (common.converEquipattribute(data, `MagicAttack`) > 0) temp.addLine(`🔮魔法攻击${common.BN(common.converEquipattribute(data, `MagicAttack`))}🔻`)
            if (common.converEquipattribute(data, `MagicDefense`) > 0) temp.addLine(`🌟魔法防御${common.BN(common.converEquipattribute(data, `MagicDefense`))}🔻`)
            if (common.converEquipattribute(data, `PhysicalAttacks`) > 0) temp.addLine(`🔪物理攻击${common.BN(common.converEquipattribute(data, `PhysicalAttacks`))}🔻`)
            if (common.converEquipattribute(data, `PhysicalDefense`) > 0) temp.addLine(`🔰物理防御${common.BN(common.converEquipattribute(data, `PhysicalDefense`))}🔻`)
            if (common.converEquipattribute(data, `secondResHp`) > 0) temp.addLine(`💖每秒回复${common.BN(common.converEquipattribute(data, `secondResHp`))}🔻`)
            temp.sendMsg(this.channel_id);
        }
    }

}