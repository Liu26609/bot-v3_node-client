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
exports.me_vip = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_vip extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('vip/Me_lookVip', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (!data.isVip) {
                this.notVip();
            }
            else {
                this.vip();
            }
        });
    }
    /**
     * 特权
     */
    privilege() {
        let temp = ``;
        temp += '1.挂机不消耗小鱼干且能获得强化碎片\n';
        temp += '2.背包上限+20宠物上限+5\n';
        temp += '3.可自己创建一个专属机器人\n';
        temp += '4.签到奖励翻倍,且随机得SSS-SSSR装备\n';
        temp += '5.免费创建工会\n';
        temp += '6.自动打开全部宝箱\n';
        temp += '7.死亡不扣除进化点\n';
        temp += '8.拍卖行交易无手续费\n';
        temp += '9.更新可享更多特权..\n';
        return temp;
    }
    vip() {
        let temp = `┏┄═══👑赞助会员══━┄\n`;
        temp += '你已是永久赞助会员\n';
        temp += '┄════👑会员特权══━┄\n';
        temp += this.privilege();
        temp += `┗┄━═════════━┄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    notVip() {
        let temp = `┏┄═══👑赞助会员══━┄\n`;
        temp += '你还不是赞助会员,价格88元没有到期时间,一次付费永久使用\n';
        temp += '除不可抗拒因素不做了可双倍退款\n';
        temp += 'Q3245000000\n';
        temp += '┄════👑会员特权══━┄\n';
        temp += this.privilege();
        temp += `┗┄━═════════━┄`;
        bot_1.default.sendText(this.channel_id, temp, this.content);
    }
}
exports.me_vip = me_vip;
