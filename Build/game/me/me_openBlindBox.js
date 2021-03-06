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
const embed_1 = require("./../temp/embed/embed");
const userCfg_1 = require("../../interface/userCfg");
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
        if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.card) {
            let temp = new embed_1.embed_style();
            temp.setIcon(this.userIcon);
            temp.setTitle('πζεΌη²η');
            temp.setTips('ζδ»€ζη€Ί');
            temp.addLine(`ζεΌζδ»€οΌζεΌη²η + ζ°ι`);
            temp.addLine(`ε¦:@${bot_1.default.getBot_name()} ζεΌη²η1`);
            temp.addLine(`εδΈζζͺοΌεη§ζ΄»ε¨οΌζεε―θ·εΎη²ηε¦~`);
            temp.sendMsg(this.channel_id);
        }
        else {
            let temp = `ββββββπζεΌη²ηββββ
ζεΌζδ»€οΌζεΌη²η + ζ°ι
ε¦:@${bot_1.default.getBot_name()} ζεΌη²η1
<emoji:147>εδΈζζͺοΌεη§ζ΄»ε¨οΌζεε―θ·εΎη²ηε¦~
ββ${this.at()}β`;
            bot_1.default.sendText(this.channel_id, temp);
        }
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
                this.log(`ζεΌη²ηηζ°ε­δΈεζ³`);
                return;
            }
            if (openNum > 1000000000000000000000) {
                this.log(`ζεΌη²ηηζ°ε­δΈθ½θΆθΏ1δΈδΈδΈδΊΏ`);
                return;
            }
            let req = yield sever_1.default.callApi('Me_openBlindBox', { userId: this.userId, openNum });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.card) {
                let temp = new embed_1.embed_style();
                temp.setIcon(this.userIcon);
                temp.setTitle('πη²ηε₯ε±');
                temp.addLine(`π»ζΆθ${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`);
                temp.addLine(`βΆοΈθΏζ${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}`);
                if (data.reward.length > 0) {
                    data.reward.forEach(item => {
                        temp.addLine(`${prop_1.rewardKey_CN[prop_1.rewardKey[item.key]]}+${item.val}`);
                    });
                }
                temp.sendMsg(this.channel_id);
            }
            else {
                let temp = ``;
                temp += `ββββββπη²ηε₯ε±ββββ\n`;
                temp += `π»ζΆθ${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                temp += `βΆοΈθΏζ${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                if (data.reward.length > 0) {
                    data.reward.forEach(item => {
                        temp += `${prop_1.rewardKey_CN[prop_1.rewardKey[item.key]]}+${item.val}\n`;
                    });
                }
                temp += `ββ${this.at()}β`;
                bot_1.default.sendText(this.channel_id, temp, this.content);
            }
        });
    }
}
exports.me_openBlindBox = me_openBlindBox;
