"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sys_update = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const gameCfg_1 = __importDefault(require("../gameCfg"));
const task_base_1 = require("../task_base");
class sys_update extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        bot_1.default.sendImage(this.channel_id, `${gameCfg_1.default.cosUrl}/sys/update.png`);
    }
}
exports.sys_update = sys_update;
