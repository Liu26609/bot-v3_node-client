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
exports.me_titleChangeName = void 0;
const me_title_1 = require("./me_title");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("../task_base");
const user_1 = require("../../shared/game/user");
const text_length_1 = require("../../unity/text_length");
class me_titleChangeName extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let changeName = this.content.replace(this.matchKey, '');
            if (changeName.length < 1) {
                this.menu();
                return;
            }
            let text = new text_length_1.text_length();
            if (text.getlength(changeName) > 6) {
                this.log(`要修改的称号名太长了~`);
                return;
            }
            // if (changeName.length > 6) {
            //     bot.sendText(this.channel_id, '称号库里没有匹配到此文字长度的称号样式哦~')
            //     return;
            // }
            let req = yield sever_1.default.callApi('me/title/Me_title_changeName', { userId: this.userId, changeName: changeName });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄═══🎉改名成功══━┄\n`;
            temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            temp += `┗┄${this.at()}┄`;
            bot_1.default.sendText(this.channel_id, temp);
            new me_title_1.me_title(...this.args);
        });
    }
    menu() {
        let temp = ``;
        temp += `<emoji:147>提示：称号改名指令[称号改名 + 修改名称]\n`;
        temp += `🌰栗子:@${bot_1.default.getBot_name()} 称号改名天选之子`;
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.me_titleChangeName = me_titleChangeName;
