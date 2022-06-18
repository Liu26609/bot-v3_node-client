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
exports.lottery = void 0;
const prop_1 = require("./../../../shared/game/prop");
const example_1 = require("./../../temp/text/example");
const task_base_1 = require("./../../task_base");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const prop_2 = require("../../../shared/game/prop");
const user_1 = require("../../../shared/game/user");
const common_1 = __importDefault(require("../../../shared/game/common"));
class lottery extends task_base_1.task_base {
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
            let guessNum = common_1.default.getNumber(this.content.replace(this.matchKey, ''));
            let req = yield sever_1.default.callApi('minGame/MinGame_lottery', { userId: this.userId, guessNum: guessNum });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄══🎰猜数第${data.info.round}轮══━┄\n`;
            if (data.guessJude) {
                temp += `💌恭喜！！！${this.at()} 猜对了本轮数字:${guessNum}\n`;
                temp += `🧧获得奖励:${prop_2.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.exp]]}x${data.info.addup}\n`;
                temp += `下一轮即将开始！请做好准备\n`;
            }
            else {
                temp += `${this.at()}很遗憾，数字猜错了\n`;
                temp += `❓数字范围[${data.info.min} - ${data.info.max}]之间\n`;
                temp += `📈本轮全服已猜${data.info.guessCont}次\n`;
                temp += `🧧累计奖励:${prop_2.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.exp]]}x${data.info.addup}\n`;
                temp += `🥳上一轮赢家:${data.info.lastWin}\n`;
            }
            temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            temp += `┗┄━══════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
    menu() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('minGame/MinGame_lottery', { userId: this.userId, guessNum: -1 });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄══🎰猜数第${data.info.round}轮══━┄
🏷️本轮数字还有${((data.info.endTime - Date.now()) / 1000).toFixed(3)}秒结束
❓数字范围[${data.info.min} - ${data.info.max}]之间
📈本轮全服已猜${data.info.guessCont}次
🧧累计奖励${prop_2.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.exp]]}x${data.info.addup}
🥳上一轮赢家:${data.info.lastWin}
┗┄━${this.at()}━┄`;
            bot_1.default.sendText(this.channel_id, temp);
            new example_1.text_example_style().setCommand('猜数指令:猜数 + 猜的数字').setExample('猜数1').sendMsg(this.channel_id);
        });
    }
}
exports.lottery = lottery;
