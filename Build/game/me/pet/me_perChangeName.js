"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.me_petChangeName = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../unity/common"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("./../../task_base");
class me_petChangeName extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let index = common_1.default.getNumber(this.content.replace(this.matchKey, ''));
            let name = this.content.replace(this.matchKey, '').replace(index.toString(), '');
            if (name.length <= 0) {
                bot_1.default.sendText(this.channel_id, `🧚‍♂️要修改的宠物名称太短啦~`);
                return;
            }
            let req = yield sever_1.default.callApi('pet/Me_petChangeName', { userId: this.userId, index: index, name: name });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            bot_1.default.sendText(this.channel_id, `🧚‍♂️宠物改名成功，快发送[查看宠物${index}]看看吧~`);
        });
    }
    menu() {
        let temp = ``;
        temp += `🧚‍♂️提示：查看宠物改名指令:宠物改名 + id + 名字\n`;
        temp += `🌰栗子:@${bot_1.default.getBot_name()} 宠物改名0小黄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.me_petChangeName = me_petChangeName;
