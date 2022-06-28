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
exports.shop_team_buy = void 0;
const userCfg_1 = require("../../interface/userCfg");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const embed_1 = require("../temp/embed/embed");
const task_base_1 = require("./../task_base");
class shop_team_buy extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('shop/Shop_team_buy', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.text) {
                let temp = ``;
                temp += `┏┄═══🕊️购买成功══━┄\n`;
                temp += `🎫工会变得更强了~\n`;
                temp += `🔻消耗工会贡献x${data.pay.condition.val}\n`;
                temp += `▶️还有工会贡献x${data.pay.now}\n`;
                temp += `┗┄━══════════━┄\n`;
                bot_1.default.sendText(this.channel_id, temp, this.matchKey);
            }
            else {
                let temps = new embed_1.embed_style();
                temps.setTitle('             🕊️购买成功');
                temps.setIcon(this.userIcon);
                temps.setTips('🎫工会变得更强了~');
                temps.addLine('<emoji:147>购买成功，祝您购物愉快~');
                temps.addLine(`🔻消耗工会贡献x${data.pay.condition.val}`);
                temps.addLine(`有工会贡献x${data.pay.now}`);
                temps.sendMsg(this.channel_id);
            }
        });
    }
}
exports.shop_team_buy = shop_team_buy;
