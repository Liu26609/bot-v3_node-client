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
const embed_1 = require("./../temp/embed/embed");
const tsrpc_1 = require("tsrpc");
const bot_1 = __importDefault(require("../../unity/bot"));
const common_1 = __importDefault(require("../../unity/common"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
const setUp_1 = require("../../shared/game/setUp");
const user_1 = require("../../shared/game/user");
class me_changeName extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        bot_1.default.sendText(this.channel_id, `🧚‍♂️改名指令：改名 + 你的名字(如:改名张三)`);
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
            if (changeName.length > 10) {
                this.sendErr({
                    message: '要修改的名字太长辣！',
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            if (!common_1.default.islegal(changeName)) {
                this.sendErr({
                    message: `名称:${changeName}\n此昵称不符合规范\n只能起中文,字母,数字的名字`,
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            let req = yield sever_1.default.callApi('Me_changeName', { userId: this.userId, changeName: changeName });
            if (req.err) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (data.userCfg.textStyle == setUp_1.textStyle.text) {
                let temp = ``;
                temp += `┏┄════🕊️改名成功═══━┄\n`;
                temp += `┣改头换面，开始了全新的生活~\n`;
                temp += `┣┄════🧸之前名称═══━┄\n`;
                temp += `┣🧹${data.lastName}\n`;
                temp += `┣┄════🎋新的名称═══━┄\n`;
                temp += `┣🆕${data.newName}\n`;
                temp += `┣┄════🏧钱包变化═══━┄\n`;
                temp += `┣🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                temp += `┣▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                temp += `┗┄━═${this.at()}═━┄\n`;
                bot_1.default.sendText(this.channel_id, temp);
            }
            else if (data.userCfg.textStyle == setUp_1.textStyle.card) {
                let temps = new embed_1.embed_style();
                temps.setTitle('￣￣￣＼🕊️改名成功／￣￣￣');
                temps.setIcon(this.userIcon);
                temps.setTips('改名成功辣！');
                temps.addLine(`改头换面，开始了全新的生活~`);
                temps.addLine(`￣￣￣＼🧸之前名称／￣￣￣`);
                temps.addLine(`🧹${data.lastName}`);
                temps.addLine(`￣￣￣＼🎋新的名称／￣￣￣`);
                temps.addLine(`🆕${data.newName}`);
                temps.addLine(`￣￣￣＼🏧钱包变化／￣￣￣`);
                temps.addLine(`🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`);
                temps.addLine(`▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}`);
                temps.sendMsg(this.channel_id);
            }
        });
    }
}
exports.me_changeName = me_changeName;
