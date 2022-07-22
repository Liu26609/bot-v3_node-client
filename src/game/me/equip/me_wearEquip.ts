import { embed_style } from './../../temp/embed/embed';
import { text_style } from './../../temp/text/text_style';
import { USER_CFG_MSGTEMPLATE } from '../../../interface/userCfg';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
import { EQUIP_QUALITY, EQUIP_TYPE, EQUIP_TYPE_ICON } from '../../../shared/game/equip';
import common from '../../../shared/game/common';
export class me_wearEquip extends task_base {
    constructor(...a) {
        super(...a)
        this.render()
    }
    async render() {
        let wearIndex = this.content.replace(this.matchKey, '');
        if (wearIndex == '') {
            this.log('需要穿装备的ID不能为空')
            return;
        }
        if (isNaN(Number(wearIndex))) {
            this.log('需要穿装备的ID只能是数字')
            return;
        }
        if (Number(wearIndex) < 0) {
            this.log('需要穿装备的ID不能是负数')
            return;
        }
        if (Math.ceil(Number(wearIndex)) != Number(wearIndex)) {
            this.log('需要穿装备的ID不能是小数点')
            return;
        }
        if (Number(wearIndex) > 100) {
            this.log('需要穿装备的的ID太大了')
            return;
        }
        let req = await sever.callApi('me/equip/Me_wearEquip', { userId: this.userId, wearIndex: Number(wearIndex) })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
            let temp = new text_style();
            temp.setTitle(`<emoji:320>装备成功`)
            temp.addLine(`${EQUIP_TYPE_ICON[EQUIP_TYPE[data.nowEquip.type]]}${data.nowEquip.name}+${data.nowEquip.leve}`)
            if (data.change_military > 0) {
                temp.addLine(`<emoji:11>战力🔺${data.change_military}`)
            } else {
                temp.addLine(`<emoji:11>战力🔻${data.change_military}`)
            }
            if (data.lastEquip) {
                let changeArry = [
                    { key: 'hp_max', str: '♥️生命' },
                    { key: 'MagicAttack', str: '🔮魔攻' },
                    { key: 'MagicDefense', str: '🌟魔防' },
                    { key: 'PhysicalAttacks', str: '🔪物攻' },
                    { key: 'PhysicalDefense', str: '🔰物防' },
                    { key: 'secondResHp', str: '💖回复' }
                ]
                for (let index = 0; index < changeArry.length; index++) {
                    const item = changeArry[index];
                    let changeIcon = `🔺`;
                    let changeNum = 0;
                    changeNum = common.converEquipattribute(data.nowEquip, item.key) - common.converEquipattribute(data.lastEquip, item.key);

                    if (changeNum == 0) {
                        changeIcon = `🟢`
                    } else if (changeNum < 0) {
                        changeIcon = `🔻`
                    }
                    temp.addLine(`${item.str}${changeIcon}${common.BN(changeNum)}`)
                }
            } else {
                if (common.converEquipattribute(data.nowEquip, `hp_max`) > 0) temp.addLine(`♥️生命🔺${common.BN(common.converEquipattribute(data.nowEquip, `hp_max`))}`)
                if (common.converEquipattribute(data.nowEquip, `MagicAttack`) > 0) temp.addLine(`🔮魔攻🔺${common.BN(common.converEquipattribute(data.nowEquip, `MagicAttack`))}`)
                if (common.converEquipattribute(data.nowEquip, `MagicDefense`) > 0) temp.addLine(`🌟魔防🔺${common.BN(common.converEquipattribute(data.nowEquip, `MagicDefense`))}`)
                if (common.converEquipattribute(data.nowEquip, `PhysicalAttacks`) > 0) temp.addLine(`🔪物攻🔺${common.BN(common.converEquipattribute(data.nowEquip, `PhysicalAttacks`))}`)
                if (common.converEquipattribute(data.nowEquip, `PhysicalDefense`) > 0) temp.addLine(`🔰物防🔺${common.BN(common.converEquipattribute(data.nowEquip, `PhysicalDefense`))}`)
                if (common.converEquipattribute(data.nowEquip, `secondResHp`) > 0) temp.addLine(`💖回复🔺${common.BN(common.converEquipattribute(data.nowEquip, `secondResHp`))}`)
            }
            temp.setEnd(`┗┄${this.at()}┄`)
            temp.sendMsg(this.channel_id)
        }else{
            let temp = new embed_style();
            temp.setTips('😀装备成功');
            temp.setIcon(this.userIcon);
            temp.setTitle(`      😀装备成功`)
            temp.addLine(`${EQUIP_TYPE_ICON[EQUIP_TYPE[data.nowEquip.type]]}${data.nowEquip.name}+${data.nowEquip.leve}`)
            if (data.change_military > 0) {
                temp.addLine(`<emoji:11>战力🔺${data.change_military}`)
            } else {
                temp.addLine(`<emoji:11>战力🔻${data.change_military}`)
            }
            if (data.lastEquip) {
                let changeArry = [
                    { key: 'hp_max', str: '♥️生命' },
                    { key: 'MagicAttack', str: '🔮魔攻' },
                    { key: 'MagicDefense', str: '🌟魔防' },
                    { key: 'PhysicalAttacks', str: '🔪物攻' },
                    { key: 'PhysicalDefense', str: '🔰物防' },
                    { key: 'secondResHp', str: '💖回复' }
                ]
                for (let index = 0; index < changeArry.length; index++) {
                    const item = changeArry[index];
                    let changeIcon = `🔺`;
                    let changeNum = 0;
                    changeNum = common.converEquipattribute(data.nowEquip, item.key) - common.converEquipattribute(data.lastEquip, item.key);

                    if (changeNum == 0) {
                        changeIcon = `🟢`
                    } else if (changeNum < 0) {
                        changeIcon = `🔻`
                    }
                    temp.addLine(`${item.str}${changeIcon}${common.BN(changeNum)}`)
                }
            } else {
                if (common.converEquipattribute(data.nowEquip, `hp_max`) > 0) temp.addLine(`♥️生命🔺${common.BN(common.converEquipattribute(data.nowEquip, `hp_max`))}`)
                if (common.converEquipattribute(data.nowEquip, `MagicAttack`) > 0) temp.addLine(`🔮魔攻🔺${common.BN(common.converEquipattribute(data.nowEquip, `MagicAttack`))}`)
                if (common.converEquipattribute(data.nowEquip, `MagicDefense`) > 0) temp.addLine(`🌟魔防🔺${common.BN(common.converEquipattribute(data.nowEquip, `MagicDefense`))}`)
                if (common.converEquipattribute(data.nowEquip, `PhysicalAttacks`) > 0) temp.addLine(`🔪物攻🔺${common.BN(common.converEquipattribute(data.nowEquip, `PhysicalAttacks`))}`)
                if (common.converEquipattribute(data.nowEquip, `PhysicalDefense`) > 0) temp.addLine(`🔰物防🔺${common.BN(common.converEquipattribute(data.nowEquip, `PhysicalDefense`))}`)
                if (common.converEquipattribute(data.nowEquip, `secondResHp`) > 0) temp.addLine(`💖回复🔺${common.BN(common.converEquipattribute(data.nowEquip, `secondResHp`))}`)
            }
            
        }
    }
}