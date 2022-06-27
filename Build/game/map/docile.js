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
exports.docile = void 0;
const user_1 = require("../../shared/game/user");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class docile extends task_base_1.task_base {
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
            let docileIndex = Number(this.content.replace('捕捉', ''));
            if (isNaN(docileIndex)) {
                this.menu();
                return;
            }
            let req = yield sever_1.default.callApi('map/Docile', { userId: this.userId, index: Math.ceil(docileIndex) });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = ``;
            if (data.succress) {
                temp += `🎉恭喜${this.at()}！成功捕捉了一只宠物,快发送[我的宠物]看看吧~\n`;
            }
            else {
                temp += `🙃很遗憾${this.at()}！没有捕捉到这个宠物~\n`;
            }
            temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
    menu() {
        let temp = ``;
        temp += `<emoji:147>提示：查看捕捉宠物指令:捕捉 + 怪物id\n`;
        temp += `🌰栗子:@${bot_1.default.getBot_name()} 捕捉0`;
        bot_1.default.sendText(this.channel_id, temp, this.content);
    }
}
exports.docile = docile;
