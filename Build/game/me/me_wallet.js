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
exports.me_wallet = void 0;
const embed_1 = require("./../temp/embed/embed");
const task_base_1 = require("../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const prop_1 = require("../../shared/game/prop");
const setUp_1 = require("../../shared/game/setUp");
const common_1 = __importDefault(require("../../unity/common"));
class me_wallet extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('Me_wallet', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            switch (data.userCfg.textStyle) {
                case setUp_1.textStyle.text:
                    let tems = `🏧${this.userName}的钱包\n`;
                    tems += `${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.gold]]}:${common_1.default.BN(data.gold)}\n`;
                    tems += `${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.BlindBox]]}:${common_1.default.BN(data.BlindBox)}\n`;
                    tems += `${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.titleCard]]}:${common_1.default.BN(data.titleCard)}\n`;
                    tems += `${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.changeNameCard]]}:${common_1.default.BN(data.changeNameCard)}\n`;
                    tems += `${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.skillCard]]}:${common_1.default.BN(data.skillCard)}\n`;
                    tems += `${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.transferCard]]}:${common_1.default.BN(data.transferCard)}\n`;
                    tems += `${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.resLife]]}:${common_1.default.BN(data.resLife)}`;
                    bot_1.default.sendText(this.channel_id, tems);
                    break;
                case setUp_1.textStyle.card:
                    let temp = new embed_1.embed_style();
                    temp.setTitle(`🏧${this.userName}的钱包`);
                    temp.setTips('我的钱包');
                    temp.setIcon(this.userIcon);
                    temp.addLine(`${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.gold]]}:${common_1.default.BN(data.gold)}`);
                    temp.addLine(`${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.BlindBox]]}:${common_1.default.BN(data.BlindBox)}`);
                    temp.addLine(`${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.titleCard]]}:${common_1.default.BN(data.titleCard)}`);
                    temp.addLine(`${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.changeNameCard]]}:${common_1.default.BN(data.changeNameCard)}`);
                    temp.addLine(`${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.skillCard]]}:${common_1.default.BN(data.skillCard)}`);
                    temp.addLine(`${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.transferCard]]}:${common_1.default.BN(data.transferCard)}`);
                    temp.addLine(`${prop_1.rewardKey_CN[prop_1.rewardKey[prop_1.rewardKey.resLife]]}:${common_1.default.BN(data.resLife)}`);
                    temp.sendMsg(this.channel_id);
                    break;
                default:
                    break;
            }
        });
    }
}
exports.me_wallet = me_wallet;
