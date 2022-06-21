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
        let temp = `┏┄😀表情表态快捷指令
此功能正在测试中,不稳定
当给部分固定指令的功能添加消息表情时可快捷触发此指令
当前可测试指令[位置][攻击boss]有此功能
在此消息上添加表情即可进行快捷指令
┗┄━══════════━┄`;
        // 飞升任务
        // 设置
        // ＞榜上有名　　　　　　　＜
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.emojiMenu = emojiMenu;
