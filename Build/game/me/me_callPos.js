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
exports.me_callPos = void 0;
const user_1 = require("../../shared/game/user");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_callPos extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `┏┄════🌏传送════━┄
┣传送指令：传送 + 坐标
┣每次传送需要${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.transferCard]]}x1
🌰栗子：传送 + 10，20(传送10,20)
<emoji:147>提示：逗号不方便？可以试试这些符号(.。,，-!！*)
┗┄${this.at()}┄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let position = this.content.replace(this.matchKey, '');
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let pos = this.judePositionREG(position);
            if (!pos) {
                return;
            }
            let req = yield sever_1.default.callApi('Me_callPos', { userId: this.userId, x: Number(pos[0]), y: Number(pos[1]) });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄═══🌏传送完成══━┄\n`;
            temp += `你已传送到🌏${data.mapName}[${data.callPos.x},${data.callPos.y}]\n`;
            temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            temp += `┗┄${this.at()}┄`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
    judePositionREG(str) {
        let sendPos = str.split(',');
        if (sendPos.length != 2) {
            sendPos = str.split('，');
            if (sendPos.length != 2) {
                sendPos = str.split('.');
                if (sendPos.length != 2) {
                    sendPos = str.split('。');
                    if (sendPos.length != 2) {
                        sendPos = str.split('-');
                        if (sendPos.length != 2) {
                            sendPos = str.split('！');
                            if (sendPos.length != 2) {
                                sendPos = str.split('!');
                                if (sendPos.length != 2) {
                                    sendPos = str.split('*');
                                }
                            }
                        }
                    }
                }
            }
        }
        if (sendPos.length != 2) {
            return false;
        }
        // 判断坐标是否为数字
        if (isNaN(Number(sendPos[0]))) {
            // 坐标不是数字
            bot_1.default.sendText(this.channel_id, `<emoji:147>你发送的传送坐标不是一个数字噢~`);
            return false;
        }
        if (isNaN(Number(sendPos[1]))) {
            // 坐标不是数字
            bot_1.default.sendText(this.channel_id, `<emoji:147>你发送的传送坐标不是一个数字噢~`);
            return false;
        }
        // 判断坐标是否为负数
        if (Number(sendPos[0]) < 0 || Number(sendPos[1]) < 0) {
            // 坐标不是数字
            bot_1.default.sendText(this.channel_id, `<emoji:147>此坐标暂未开放~`);
            return false;
        }
        return sendPos;
    }
}
exports.me_callPos = me_callPos;
