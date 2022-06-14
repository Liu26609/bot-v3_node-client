"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.embed_example_style = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
const embed_1 = require("./embed");
class embed_example_style {
    constructor() {
        this.example = `测试`;
        this.command = '测试指令：测试 + 测试1';
    }
    /**
     * 改名 + 你的名字
     * 🧚‍♂️改名指令：改名 + 你的名字
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
        let temp = new embed_1.embed_style();
        temp.addLine(`🧚‍♂️${this.command}`);
        temp.addLine(`🌰栗子:@${bot_1.default.getBot_name()} ${this.command}`);
        temp.setTips('举个栗子');
        temp.sendMsg(channelId);
    }
}
exports.embed_example_style = embed_example_style;
