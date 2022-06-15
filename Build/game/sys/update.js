"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_update = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const task_base_1 = require("../task_base");
class sys_update extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        let bot_cfg = bot_1.default.getBotConfig();
        bot_1.default.sendImage(this.channel_id, `${bot_cfg.cosUrl}/sys/update.png`);
    }
}
exports.sys_update = sys_update;
