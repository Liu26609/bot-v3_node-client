import { EQUIP_QUALITY, EQUIP_QUALITY_CN, EQUIP_TYPE, EQUIP_TYPE_CN } from "../../shared/game/equip";
import bot from "../../unity/bot";
import common from "../../unity/common";
import sever from "../../unity/sever";
import { task_base } from "../task_base";
export class me_equip extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let res = await sever.callApi('Me_equip', { userId: this.userId });
        if (!res.isSucc) {
            this.sendErr(res.err)
            return;
        }
        
        let data = res.res;
        let temp = `┏┄════👑我的装备═══━┄\n`;
        if (data.equipList.length > 0) {
            data.equipList.forEach(info => {
                temp += `╔[${EQUIP_TYPE_CN[EQUIP_TYPE[info.type]]}](${EQUIP_QUALITY_CN[EQUIP_QUALITY[info.quality]]})${info.name}+${info.leve}\n`;
                temp += `║♥️最大生命+${common.BN(common.converEquipattribute(info,`hp_max`))}\n`;
                temp += `║🔮魔法攻击+${common.BN(common.converEquipattribute(info,`MagicAttack`))}\n`;
                temp += `║🌟魔法防御+${common.BN(common.converEquipattribute(info,`MagicDefense`))}\n`;
                temp += `║🔪物理攻击+${common.BN(common.converEquipattribute(info,`PhysicalAttacks`))}\n`;
                temp += `║🔰物理防御+${common.BN(common.converEquipattribute(info,`PhysicalDefense`))}\n`;
                temp += `╚攻击特效:${info.effect?.length || 0}条\n`;
            });
        } else {
            temp += `┣你好像一件装备都没有穿上哦\n`;
        }
        temp += `┗┄━══════════━┄\n`;
        temp += `强化装备指令: 强化 + 装备位置\n`;
        temp += `🌰栗子：@${bot.getBot_name()} 强化武器\n`;
        bot.sendText(this.channel_id,temp)
    }
}