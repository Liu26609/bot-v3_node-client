import { log } from "../..";
import { EQUIP_QUALITY, EQUIP_TYPE, EQUIP_TYPE_CN, EQUIP_TYPE_ICON } from "../../shared/game/equip";
import bot from "../../unity/bot";
import common from "../../shared/game/common";
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
        const attrArry = [
            { key: 'hp_max', icon: '♥️' },
            { key: 'secondResHp', icon: '💖' },
            { key: 'MagicDefense', icon: '🌟' },
            { key: 'MagicAttack', icon: '🔮' },
            { key: 'PhysicalAttacks', icon: '🔪' },
            { key: 'PhysicalDefense', icon: '🔰' },
        ]
        let temp = `┏┄══👑我的装备═━┄\n`;
        if (data.equipList.length > 0) {
            data.equipList.forEach(info => {
                temp += `[${EQUIP_TYPE_CN[EQUIP_TYPE[info.type]]}]${EQUIP_QUALITY[info.quality]}级装备\n${EQUIP_TYPE_ICON[EQUIP_TYPE[info.type]]}${info.name}+${info.leve}\n`;
                let showCont = 0;
                for (let index = 0; index < attrArry.length; index++) {
                    const attr = attrArry[index];
                    const val = common.converEquipattribute(info, attr.key)
                    if (val <= 0) {
                        continue;
                    }
                    showCont += 1;
                    temp += `${attr.icon}${common.BN(val)}`;
                    if (showCont % 3 == 0) {
                        temp += '\n';
                    }
                }
                temp += '\n';
                // temp += `♥️${common.BN(common.converEquipattribute(info, `hp_max`))}💖${common.BN(common.converEquipattribute(info, `secondResHp`))}🌟${common.BN(common.converEquipattribute(info, `MagicDefense`))}\n`
                // temp += `🔮${common.BN(common.converEquipattribute(info, `MagicAttack`))}🔪${common.BN(common.converEquipattribute(info, `PhysicalAttacks`))}🔰${common.BN(common.converEquipattribute(info, `PhysicalDefense`))}\n`;
            });
            temp = temp.replace('\n\n','\n')
        } else {
            temp += `✎你好像一件装备都没有穿上哦\n看看[背包]有没有装备呢\n`;
        }
        temp += `┗┄━${this.at()}━┄\n`;
        bot.sendText(this.channel_id, temp)
        new text_example_style().setCommand('强化装备指令:强化 + 装备位置').setExample('强化主武器').sendMsg(this.channel_id)
    }
}