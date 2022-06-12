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
￣￣￣￣￣￣＼功能指令／￣￣￣￣
＞我的称号　　　　　　我的进化＜
＞我的工会　　　　　　我的装备＜
＞我的技能　　　　　　　排行榜＜
＞每日任务　　　　　　我的宠物＜
＞　　　　　　　　　　　　商店＜
＞阶梯计划| 镜像挑战 |破壁计划＜
￣￣￣￣￣￣＼高级功能／￣￣￣￣
＞链式指令　　　　　　　　　　＜
┗┄━══════════━┄`;
        // 飞升任务
        // 设置
        // ＞榜上有名　　　　　　　＜
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.baseTaskMenu = baseTaskMenu;
