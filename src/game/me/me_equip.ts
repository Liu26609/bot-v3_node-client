import { EQUIP_QUALITY, EQUIP_QUALITY_CN, EQUIP_TYPE, EQUIP_TYPE_CN } from "../../shared/game/equip";
import bot from "../../unity/bot";
import common from "../../unity/common";
import sever from "../../unity/sever";
import { task_base } from "../task_base";
import { text_example_style } from "../temp/text/example";
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
                temp += `♥️+${common.BN(common.converEquipattribute(info, `hp_max`))}💖+${common.BN(common.converEquipattribute(info, `secondResHp`))}🌟+${common.BN(common.converEquipattribute(info, `MagicDefense`))}\n`
                temp += `🔮+${common.BN(common.converEquipattribute(info, `MagicAttack`))}🔪+${common.BN(common.converEquipattribute(info, `PhysicalAttacks`))}🔰+${common.BN(common.converEquipattribute(info, `PhysicalDefense`))}\n`;
                temp += `╚攻击特效:${info.effect?.length || 0}条\n`;
            });
        } else {
            temp += `┣你好像一件装备都没有穿上哦\n`;
        }
        temp += `┗┄━${this.at()}━┄\n`;
        bot.sendText(this.channel_id, temp)
        new text_example_style().setCommand('强化装备指令:强化 + 装备位置').setExample('强化武器').sendMsg(this.channel_id)
    }
}