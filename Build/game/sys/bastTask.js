"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseTaskMenu = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const task_base_1 = require("../task_base");
class baseTaskMenu extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        let temp = `￣￣￣￣￣￣＼V3.X／￣￣￣￣￣￣
属性|钱包|背包|位置|设置
￣￣￣￣￣￣＼功能指令／￣￣￣￣
＞我的称号　称号改名　重置称号＜
＞我的技能　　　　　　查询技能＜
＞我的装备　　　　　　强化装备＜
＞装备商店　黑心商店　技能商店＜
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`;
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.baseTaskMenu = baseTaskMenu;
