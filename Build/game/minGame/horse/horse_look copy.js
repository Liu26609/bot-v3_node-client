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
const PtlHorse_1 = require("../../../shared/protocols/minGame/PtlHorse");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const example_1 = require("../../temp/text/example");
const task_base_1 = require("../../task_base");
class horse_look extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('minGame/Horse', { userId: this.userId, type: PtlHorse_1.HORSE_TYPE.look });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄══🎰赛马第${data.round}轮══━┄\n`;
            if (data.state == PtlHorse_1.HORSE_STATE.wait) {
                temp += `赛事状态:等待参赛中...\n`;
                new example_1.text_example_style().setCommand('参赛指令:参赛 + 宠物ID').setExample('参赛2').sendMsg(this.channel_id);
            }
            else {
                temp += `赛事状态:正在激烈比赛中...\n`;
                temp += `现场记者会稍后报道赛事现场\n`;
            }
            temp += `🧧赛事奖励⚙️强化碎片x58888\n`;
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
