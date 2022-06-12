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
exports.me_openBlindBox = void 0;
const tsrpc_1 = require("tsrpc");
const prop_1 = require("../../shared/game/prop");
const user_1 = require("../../shared/game/user");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_openBlindBox extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `￣￣￣￣￣＼打开盲盒／￣￣￣￣￣
打开指令：打开盲盒 + 数量
如:@${bot_1.default.getBot_name()} 打开盲盒1
<emoji:147>参与打怪，各种活动，拍卖可获得盲盒哦~
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let openStr = this.content.replace(this.matchKey, '');
            let openNum = Math.ceil(Number(openStr));
            if (isNaN(openNum) || openNum <= 0) {
                this.sendErr({
                    message: '打开盲盒的数字不合法',
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            if (openNum > 1000000000000) {
                this.sendErr({
                    message: '打开盲盒的数字不能超过1万亿',
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            let req = yield sever_1.default.callApi('Me_openBlindBox', { userId: this.userId, openNum });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = ``;
            temp += `┏┄═════🎁盲盒奖励═══━┄\n`;
            temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            if (data.reward.length > 0) {
                data.reward.forEach(item => {
                    temp += `${prop_1.rewardKey_CN[prop_1.rewardKey[item.key]]}+${item.val}\n`;
                });
            }
            temp += `┗┄━═══════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.me_openBlindBox = me_openBlindBox;
