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
exports.horse_look = void 0;
const text_style_1 = require("./../../temp/text/text_style");
const PtlHorse_1 = require("../../../shared/protocols/minGame/PtlHorse");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const example_1 = require("../../temp/text/example");
const task_base_1 = require("../../task_base");
const user_1 = require("../../../shared/game/user");
class horse_look extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    notPass() {
        let temp = new text_style_1.text_style();
        temp.setTitle(`┏┄═马拉松子频道未授权━┄`);
        temp.addLine(`1.马拉松会频繁发送消息`);
        temp.addLine(`2.建议单独新建一个马拉松专属子频道`);
        if (this.GuildCfg) {
            if (this.GuildCfg.master) {
                temp.addLine(`3.此功能需要<@${this.GuildCfg.master}>来授权开启`);
            }
            else {
                temp.addLine(`3.此功能需要频道主授权开启。请艾特频道主前来授权`);
            }
            if (this.GuildCfg.passHorseChannel_id != '') {
                temp.addLine(`4.你可以直接前往已授权频道<#${this.GuildCfg.passHorseChannel_id}>开始参赛,如果无法点击则已经被删除需要重新授权`);
            }
        }
        temp.addLine(`┄═══👑授权指令══━┄`);
        temp.addLine(`频道主在需要授权的子频道@${bot_1.default.getBot_name()} + [${this.channel_id}]即可`);
        temp.sendMsg(this.channel_id);
    }
    passAutoChannel() {
        this.log(`已将马拉松频道授权至<#${this.channel_id}>,现在马拉松推送和参赛将只能在此子频道进行。`);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isMaster()) {
                this.GuildCfg.passHorseChannel_id = this.channel_id;
                this.passAutoChannel();
            }
            if (!this.GuildCfg.passHorseChannel_id) {
                this.notPass();
                return;
            }
            if (this.GuildCfg.passHorseChannel_id != this.channel_id) {
                this.notPass();
                return;
            }
            let req = yield sever_1.default.callApi('minGame/Horse', { userId: this.userId, type: PtlHorse_1.HORSE_TYPE.look });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄═🎰宠物马拉松第${data.round}届\n`;
            if (data.state == PtlHorse_1.HORSE_STATE.wait) {
                temp += `🏁赛事状态:等待参赛中...\n`;
                temp += `😀报名人数:${data.nowCont}/${data.maxCont}\n`;
                temp += `💳报名价格:${user_1.walletKey_CN[user_1.walletKey[data.buyCondition.key]]}x${data.buyCondition.val}\n`;
                new example_1.text_example_style().setCommand('参赛指令:参赛 + 宠物ID').setExample('参赛2').sendMsg(this.channel_id);
            }
            else {
                temp += `赛事状态:正在激烈比赛中...\n`;
                temp += `现场记者会稍后报道赛事现场\n`;
            }
            temp += `🧧冠军奖励⚙️强化碎片x${data.allGift}\n`;
            temp += `┗┄${this.at()}┄`;
            bot_1.default.sendText(this.channel_id, temp);
            /**
             * ┏┄══🎰猜数第75轮══━┄
    🏷️本轮数字还有599.999秒结束
    ❓数字范围[100 - 10000]之间
    📈本轮全服已猜1次
    🧧累计奖励⚙️强化碎片x1186
    🥳上一轮赢家:黄陵
    ┗┄━@楚轩 ━┄
             */
        });
    }
}
exports.horse_look = horse_look;
