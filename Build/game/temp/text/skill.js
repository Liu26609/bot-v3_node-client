"use strict";
// ￣￣￣￣￣＼技能描述／￣￣￣￣￣
// 名称:攻击失手
// 描述:顾名思义，攻击失手没打着
// 类型:主动技能
// 触发频率:10
// <emoji:147>频率≠概率,部分技能需要有特殊条件才能触发(例如:十步杀一人)
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_skill_style = void 0;
const __1 = require("../../..");
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../shared/game/common"));
class text_skill_style {
    constructor() {
    }
    sendData(data) {
        this.data = data;
        return this;
    }
    sendMsg(channelId) {
        if (!this.data) {
            (0, __1.err)('text_skill_style 没有数据');
            return;
        }
        const info = this.data;
        let temp = ``;
        temp += `┏┄════👑技能描述═══━┄\n`;
        temp += `Ⓜ️名称:${info.name}\n`;
        temp += `📖背景故事:${info.story}\n`;
        temp += `📄效果描述:${common_1.default.getSkDesc(info)}\n`;
        temp += `🚀触发频率:${info.speed}\n`;
        temp += `<emoji:147>频率≠概率,部分技能需要有特殊条件才能触发\n`;
        temp += `┗┄━══════════━┄`;
        bot_1.default.sendText(channelId, temp);
    }
}
exports.text_skill_style = text_skill_style;
