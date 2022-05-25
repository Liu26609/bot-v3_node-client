"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOneWrod = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("../task_base");
class addOneWrod extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        const str = this.content.replace(this.matchKey, '');
        if (str.length == 0) {
            bot_1.default.sendText(this.channel_id, `一言收录词库：词库内容不能为空`);
            return;
        }
        sever_1.default.callApi('AddOneWord', { text: str }).then((res) => {
            if (res.isSucc) {
                bot_1.default.sendText(this.channel_id, `收录成功:当前库数量${res.res.creatorId}`);
            }
        });
    }
}
exports.addOneWrod = addOneWrod;
