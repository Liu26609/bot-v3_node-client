import { log } from '../..';
import bot from '../../unity/bot';
import { text_equip_style } from '../temp/text/equip';
import { task_base } from './../task_base';
export class shop_equip extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        let data = {
            "id":"1",
            "name": "十米的大刀",
            "type": 0,
            "quality": 8,
            "icon": "1",
            "story": "朋友，你渴望力量吗？嗯？？不好意思刀没磨！！！把渴望力量改成是兄弟就来砍我才对,而且武器加什么防御啊，不应该加命中嘛",
            "base_attribute": {
                "hp_max": 1000000,
                "MagicAttack": 1761735,
                "PhysicalAttacks": 5065165,
                "MagicDefense": 9726623,
                "PhysicalDefense": 4103747,
                "secondResHp": 2375697
            },
            "effect": [
                {
                    "type": 0,
                    "val": 100,
                    "trigger": 0
                }
            ],
            "leve": 568
        }
        let temp = new text_equip_style();
        temp.setData(data);
        let str = temp.getTemp();
        str += `\n购买价格:💳技能卡52`
        str += `\n我的钱包:💳技能卡484`
        str += `\n刷新时间：6679.108秒`
        str += `\n🧚‍♂️购买指令：购买技能`
        str += `\n价格每次随机刷新，与装备属性无关`;
        bot.sendText(this.channel_id,str)
    }
}