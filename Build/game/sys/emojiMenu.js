"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiMenu = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const task_base_1 = require("../task_base");
class emojiMenu extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        let temp = `┏┄═══😀表情快捷指令══━┄
当机器人消息的指令是固定指令时
你可以在消息上添加一个表情
比如此消息代表指令[表情指令]
你可以试试在此消息上添加表情
ps:其他指令可以尝试添加表情探索
┗┄${this.at()}┄`;
        bot_1.default.sendText(this.channel_id, temp, '表情指令');
    }
}
exports.emojiMenu = emojiMenu;
