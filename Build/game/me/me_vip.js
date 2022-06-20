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
        });
    }
    notVip() {
        let temp = `┏┄════👑赞助会员═══━┄\n`;
        temp += '你还不是赞助会员哦~会员没有到期时间,一次付费永久使用\n';
        temp += '┄════👑会员特权═══━┄\n';
        temp += '1.挂机不消耗小鱼干且获得更多道具\n';
        temp += '2.背包数量上限+20\n';
        temp += '3.宠物数量上限+5\n';
        temp += '4.可自己创建一个专属机器人\n';
        temp += '5.更新可享更多特权..\n';
        temp += `┗┄━══════════━┄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.me_vip = me_vip;
