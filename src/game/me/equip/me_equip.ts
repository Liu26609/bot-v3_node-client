import { text_style } from './../../temp/text/text_style';
import { EQUIP_QUALITY, EQUIP_TYPE, EQUIP_TYPE_CN, EQUIP_TYPE_ICON } from "../../../shared/game/equip";
import bot from "../../../unity/bot";
import common from "../../../shared/game/common";
import sever from "../../../unity/sever";
import { task_base } from "../../task_base";
import { text_example_style } from "../../temp/text/example";
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
            { key: 'hp_max', icon: '♥️',name:'最大生命' },
            { key: 'secondResHp', icon: '💖',name:'生命回复' },
            { key: 'MagicDefense', icon: '🌟',name:'魔法防御' },
            { key: 'MagicAttack', icon: '🔮',name:'魔法攻击' },
            { key: 'PhysicalAttacks', icon: '🔪',name:'物理攻击' },
            { key: 'PhysicalDefense', icon: '🔰',name:'物理防御' },
        ]
        let temp = `┏┄══👑我的装备═━┄\n`;
        if (data.equipList.length > 0) {
            data.equipList.forEach(info => {
                temp += `[${EQUIP_TYPE_CN[EQUIP_TYPE[info.type]]}]${EQUIP_QUALITY[info.quality]}级装备\n${EQUIP_TYPE_ICON[EQUIP_TYPE[info.type]]}${info.name}+${info.leve}\n`;
                for (let index = 0; index < attrArry.length; index++) {
                    const attr = attrArry[index];
                    const val = common.converEquipattribute(info, attr.key)
                    if (val <= 0) {
                        continue;
                    }
                    temp += `${attr.icon}${attr.name}${common.BN(val)}\n`;
                }
                // temp += '\n';
                // temp += `♥️${common.BN(common.converEquipattribute(info, `hp_max`))}💖${common.BN(common.converEquipattribute(info, `secondResHp`))}🌟${common.BN(common.converEquipattribute(info, `MagicDefense`))}\n`
                // temp += `🔮${common.BN(common.converEquipattribute(info, `MagicAttack`))}🔪${common.BN(common.converEquipattribute(info, `PhysicalAttacks`))}🔰${common.BN(common.converEquipattribute(info, `PhysicalDefense`))}\n`;
            });
        } else {
            temp += `✎你好像一件装备都没有穿上哦\n看看[背包]有没有装备呢\n`;
        }
        temp += `┗┄${this.at()}┄\n`;
        bot.sendText(this.channel_id, temp, this.content)
        this.tips()
    }
    tips() {
        let temp = new text_style();
        temp.setTitle(`👑指令提示`)
        temp.addLine('[强化 + 装备类型]强化指定装备')
        temp.addLine('[卸下 + 装备类型]卸下指定装备')
        temp.addLine('[附魔 + 装备类型]重置装备技能')
        temp.sendMsg(this.channel_id);
    }
}