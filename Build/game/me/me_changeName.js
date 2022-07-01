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
exports.me_changeName = void 0;
const example_1 = require("./../temp/text/example");
const embed_1 = require("./../temp/embed/embed");
const tsrpc_1 = require("tsrpc");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
const user_1 = require("../../shared/game/user");
const text_length_1 = require("../../unity/text_length");
const userCfg_1 = require("../../interface/userCfg");
class me_changeName extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        new example_1.text_example_style().setCommand('改名指令：改名 + 你的名字').setExample('改名张三').sendMsg(this.channel_id);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let changeName = this.content.replace(this.matchKey, '');
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            if (changeName.length <= 0) {
                this.sendErr({
                    message: '要修改的名字不能为空',
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            let text = new text_length_1.text_length();
            if (text.getlength(changeName) > 6) {
                bot_1.default.sendText(this.channel_id, `要修改的名字太长辣！`);
                return;
            }
            let req = yield sever_1.default.callApi('Me_changeName', { userId: this.userId, changeName: changeName });
            if (req.err) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.text) {
                let temp = ``;
                temp += `       改名成功\n`;
                temp += `<emoji:322>改名前:${data.lastName}\n`;
                temp += `<emoji:301>改名后:${data.newName}\n`;
                temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                temp += `┗┄━${this.at()}━┄\n`;
                bot_1.default.sendText(this.channel_id, temp);
            }
            else {
                let temps = new embed_1.embed_style();
                temps.setTitle('┏┄═══<emoji:269>改名成功══━┄');
                temps.setIcon(this.userIcon);
                temps.setTips('改名成功！');
                temps.addLine(`改名前:${data.lastName}`);
                temps.addLine(`改名后:${data.newName}`);
                temps.addLine(`🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`);
                temps.addLine(`▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}`);
                temps.sendMsg(this.channel_id);
            }
        });
    }
}
exports.me_changeName = me_changeName;
