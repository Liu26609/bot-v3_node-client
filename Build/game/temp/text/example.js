"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_example_style = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
class text_example_style {
    constructor() {
        this.example = `测试`;
        this.command = '测试指令：测试 + 测试1';
    }
    /**
     * 改名 + 你的名字
     * <emoji:147>改名指令：改名 + 你的名字
     * @param str
     * @returns
     */
    setCommand(str) {
        this.command = str;
        return this;
    }
    setExample(str) {
        this.example = str;
        return this;
    }
    sendMsg(channelId) {
        let temp = `┏@${bot_1.default.getBot_name()},输入以下指令┄\n`;
        temp += `▶️${this.command}\n`;
        temp += `🌰栗子:@${bot_1.default.getBot_name()} ${this.example}\n`;
        temp += `┗┄━═════════━┄`;
        bot_1.default.sendText(channelId, temp);
    }
}
exports.text_example_style = text_example_style;
