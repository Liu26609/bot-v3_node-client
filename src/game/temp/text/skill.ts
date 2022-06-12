// ￣￣￣￣￣＼技能描述／￣￣￣￣￣
// 名称:攻击失手
// 描述:顾名思义，攻击失手没打着
// 类型:主动技能
// 触发频率:10
// <emoji:147>频率≠概率,部分技能需要有特殊条件才能触发(例如:十步杀一人)
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣

import { err } from "../../..";
import { body } from "../../../shared/game/body";
import { SKILL_ACTIVE, SKILL_TYPE } from "../../../shared/game/skill";
import bot from "../../../unity/bot";
import common from "../../../unity/common";

export class text_skill_style {
    data?: SKILL_ACTIVE;
    constructor() {

    }
    sendData(data: SKILL_ACTIVE) {
        this.data = data;
        return this;
    }
    sendMsg(channelId: string) {
        if (!this.data) {
            err('text_skill_style 没有数据')
            return;
        }
        const info = this.data;
        let temp = ``;
        temp += `┏┄════👑技能描述═══━┄\n`;
        temp += `Ⓜ️名称:${info.name}\n`;
        temp += `📖背景故事:${info.story}\n`;
        temp += `📄效果描述:${common.getSkDesc(info)}\n`;
        temp += `🚀触发频率:${info.speed}\n`;
        temp += `<emoji:147>频率≠概率,部分技能需要有特殊条件才能触发\n`;
        temp += `┗┄━══════════━┄`
        bot.sendText(channelId, temp);
    }
}