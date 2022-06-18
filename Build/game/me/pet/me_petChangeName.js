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
const embed_1 = require("./../../temp/embed/embed");
const user_1 = require("../../../shared/game/user");
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../shared/game/common"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const text_length_1 = require("../../../unity/text_length");
const task_base_1 = require("../../task_base");
const userCfg_1 = require("../../../interface/userCfg");
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
            let index = common_1.default.getNumber(this.content[4]);
            if (!isNaN(Number(this.content[5]))) {
                index = common_1.default.getNumber(`${this.content[4]}${this.content[5]}`);
            }
            let name = this.content.replace(this.matchKey, '').replace(index.toString(), '');
            if (name.length <= 0) {
                this.log(`要修改的宠物名称太短啦~`);
                return;
            }
            let text = new text_length_1.text_length();
            if (text.getlength(name) > 4) {
                this.log(`要修改的名字太长了！~`);
                return;
            }
            let req = yield sever_1.default.callApi('pet/Me_petChangeName', { userId: this.userId, index: index, name: name });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.card) {
                let temp = new embed_1.embed_style();
                temp.setIcon(this.userIcon);
                temp.setTitle(`👑宠物改名成功`);
                temp.setTips(`👑宠物改名成功`);
                temp.addLine(`🌰宠物改名成功，快发送[查看宠物${index}]看看吧~`);
                temp.addLine(`🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`);
                temp.addLine(`▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}`);
                temp.sendMsg(this.channel_id);
            }
            else {
                let temp = `┏┄════👑改名成功═══━┄\n`;
                temp += `🌰宠物改名成功，快发送[查看宠物${index}]看看吧~\n`;
                temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                temp += `┗┄━${this.at()}━┄`;
                bot_1.default.sendText(this.channel_id, temp);
            }
        });
    }
    menu() {
        let temp = ``;
        temp += `<emoji:147>提示：查看宠物改名指令:宠物改名 + ID + 名字\n`;
        temp += `🌰栗子:@${bot_1.default.getBot_name()} 宠物改名0小黄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.me_petChangeName = me_petChangeName;
