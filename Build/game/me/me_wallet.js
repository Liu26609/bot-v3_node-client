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
const sever_1 = __importDefault(require("../../unity/sever"));
const common_1 = __importDefault(require("../../unity/common"));
const user_1 = require("../../shared/game/user");
const text_style_1 = require("../temp/text/text_style");
const userCfg_1 = require("../../interface/userCfg");
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
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.text) {
                let temp = new text_style_1.text_style();
                temp.setTitle('┏┄════🏧我的小金库═══━┄');
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.gold]]}:${common_1.default.BN(data.gold)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.BlindBox]]}:${common_1.default.BN(data.BlindBox)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.titleCard]]}:${common_1.default.BN(data.titleCard)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.changeNameCard]]}:${common_1.default.BN(data.changeNameCard)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.skillCard]]}:${common_1.default.BN(data.skillCard)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.transferCard]]}:${common_1.default.BN(data.transferCard)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.resLife]]}:${common_1.default.BN(data.resLife)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.driedFish]]}:${common_1.default.BN(data.driedFish)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.spiritBall]]}:${common_1.default.BN(data.spiritBall)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.evolveCard]]}:${common_1.default.BN(data.evolveCard)}`);
                temp.sendMsg(this.channel_id);
            }
            else {
                let temp = new embed_1.embed_style();
                temp.setTitle(`🏧我的小金库`);
                temp.setTips('我的小金库');
                temp.setIcon(this.userIcon);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.gold]]}:${common_1.default.BN(data.gold)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.BlindBox]]}:${common_1.default.BN(data.BlindBox)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.titleCard]]}:${common_1.default.BN(data.titleCard)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.changeNameCard]]}:${common_1.default.BN(data.changeNameCard)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.skillCard]]}:${common_1.default.BN(data.skillCard)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.transferCard]]}:${common_1.default.BN(data.transferCard)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.resLife]]}:${common_1.default.BN(data.resLife)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.driedFish]]}:${common_1.default.BN(data.driedFish)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.spiritBall]]}:${common_1.default.BN(data.spiritBall)}`);
                temp.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.evolveCard]]}:${common_1.default.BN(data.spiritBall)}`);
                temp.sendMsg(this.channel_id);
            }
        });
    }
}
exports.me_wallet = me_wallet;
