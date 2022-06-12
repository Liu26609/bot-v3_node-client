import { EQUIP_QUALITY, EQUIP_QUALITY_CN, EQUIP_TYPE, EQUIP_TYPE_CN } from '../../shared/game/equip';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { walletKey_CN, walletKey } from '../../shared/game/user';
import bot from '../../unity/bot';
import common from '../../unity/common';
import sever from '../../unity/sever';
import { task_base } from './../task_base';

export class me_strengthen extends task_base {
    constructor(...a) {
        super(...a);
        this.render();

    }
    menu() {
        let temp = `强化装备指令: 强化 + 装备位置
🌰栗子：@达尔文进化岛 强化武器`;
        bot.sendText(this.channel_id, temp);
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
            default:
                
                break;
        }

        if (typeof (strengthenType) != 'number') {
            this.menu();
            return;
        }
        let req = await sever.callApi('Me_strengthen', { userId: this.userId, strengthenType: strengthenType })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let bf = data.bfEquip;
        let now = data.nowEquip;
        let temp = `┏┄════${data.isSuccress ? '<emoji:320>强化成功' : '<emoji:173>强化失败'}═══━┄\n`;
        if (data.isSuccress) {
            temp += `🔣本次成功率:${(data.rate * 100).toFixed(2)}%${this.at()}\n`
            temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            temp += `[${EQUIP_TYPE_CN[EQUIP_TYPE[bf.type]]}](${EQUIP_QUALITY_CN[EQUIP_QUALITY[bf.quality]]})${bf.name}+${now.leve}\n`;
            temp += `♥️最大生命${common.BN(common.converEquipattribute(bf, `hp_max`))}➡️${common.BN(common.converEquipattribute(now, `hp_max`))}\n`;
            temp += `🔮魔法攻击${common.BN(common.converEquipattribute(bf, `MagicAttack`))}➡️${common.BN(common.converEquipattribute(now, `MagicAttack`))}\n`;
            temp += `🌟魔法防御${common.BN(common.converEquipattribute(bf, `MagicDefense`))}➡️${common.BN(common.converEquipattribute(now, `MagicDefense`))}\n`;
            temp += `🔪物理攻击${common.BN(common.converEquipattribute(bf, `PhysicalAttacks`))}➡️${common.BN(common.converEquipattribute(now, `PhysicalAttacks`))}\n`;
            temp += `🔰物理防御${common.BN(common.converEquipattribute(bf, `PhysicalDefense`))}➡️${common.BN(common.converEquipattribute(now, `PhysicalDefense`))}\n`;
            temp += `💖每秒回复${common.BN(common.converEquipattribute(bf, `PhysicalDefense`))}➡️${common.BN(common.converEquipattribute(now, `PhysicalDefense`))}\n`;
            temp += `┗攻击特效:${now.effect?.length || 0}条`;
        } else {
            temp += `[${EQUIP_TYPE_CN[EQUIP_TYPE[bf.type]]}](${EQUIP_QUALITY_CN[EQUIP_QUALITY[bf.quality]]})${bf.name}+${now.leve}\n`;
            temp += `🔣本次成功率:${(data.rate * 100).toFixed(2)}%\n`
            temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            temp += `┗┄━${this.at()}━┄`;
        }

        bot.sendText(this.channel_id, temp)
    }
}