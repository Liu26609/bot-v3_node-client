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
        let pack = require('../../../package.json');
        let temp = `┏┄🏰V${pack.version}
属性|钱包|背包|位置|改名|传送
拍卖行
￣￣￣￣￣￣＼功能指令／￣￣￣￣
＞我的称号　称号改名　重置称号＜
＞我的工会　　　　　　我的装备＜
＞我的技能　　　　　　查询技能＜
＞我的进化  　　　　　  重置进化＜
＞每日任务　　　　　　飞升任务＜
＞榜上有名　　　　　　　排行榜＜
￣￣￣￣￣￣＼高级功能／￣￣￣￣
＞链式指令　　　　　　　　设置＜
┗┄━══════════━┄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.baseTaskMenu = baseTaskMenu;
