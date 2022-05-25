"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const embed_1 = require("./../temp/embed/embed");
const task_base_1 = require("../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const setUp_1 = require("../../shared/game/setUp");
/**
 * 用户签到
 */
class me_sign extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        sever_1.default.callApi('Sign', { userId: this.userId }).then((data) => {
            this.render(data);
        });
    }
    render(res) {
        if (!res.isSucc) {
            this.sendErr(res.err);
            return;
        }
        let data = res.res;
        if (data.isRepeat) {
            // 重复签到
            this.repeatSign(data);
            return;
        }
        this.succressSign(data);
    }
    succressSign(data) {
        switch (data.userCfg.textStyle) {
            case setUp_1.textStyle.text:
                let temp = `￣￣￣￣￣＼💌签到成功／￣￣￣￣￣
已签到:${data.cont}次
签收人:<@!${this.userId}>
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
“${data.oneWord}”`;
                bot_1.default.sendText(this.channel_id, temp);
                break;
            case setUp_1.textStyle.card:
                let embed = new embed_1.embed_style();
                embed.setTitle(`💌签到成功`);
                embed.setIcon(this.userIcon);
                embed.setTips('签到成功辣！');
                embed.addLine(`已签到:${data.cont}次`);
                embed.addLine(`签收人:${this.userName}`);
                embed.sendMsg(this.channel_id);
                break;
            default:
                break;
        }
    }
    repeatSign(data) {
        switch (data.userCfg.textStyle) {
            case setUp_1.textStyle.text:
                let temp = `￣￣￣￣￣＼💌签到重复／￣￣￣￣￣
已签到:${data.cont}次
签收人:<@!${this.userId}>
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
“${data.oneWord}”`;
                bot_1.default.sendText(this.channel_id, temp);
                break;
            case setUp_1.textStyle.card:
                let embed = new embed_1.embed_style();
                embed.setTitle(`💌签到重复`);
                embed.setTips('重复签到辣！');
                embed.setIcon(this.userIcon);
                embed.addLine(`已签到:${data.cont}次`);
                embed.addLine(`签收人:${this.userName}`);
                embed.sendMsg(this.channel_id);
                break;
            default:
                break;
        }
    }
}
exports.default = me_sign;
