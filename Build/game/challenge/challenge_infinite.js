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
exports.challenge_infinite = void 0;
const example_1 = require("../temp/text/example");
const task_base_1 = require("../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const battleTemp_1 = require("../temp/text/battleTemp");
class challenge_infinite extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let isStart = this.content.replace(this.matchKey, '') == '挑战';
            if (!isStart) {
                this.menu();
                return;
            }
            let req = yield sever_1.default.callApi('battle/Challenge_infinite', { userId: this.userId, isStart: true });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (data.battle) {
                let temp = ``;
                this.UserCfg;
                let battleTemp = new battleTemp_1.text_battleTemp_style().sendData(data.battle);
                battleTemp.setHurtLotTitle_me(`┏┄══📄伤害统计═━┄`);
                battleTemp.setHurtLotTitle_enemy(`┄════🔥敌方统计══━┄`);
                temp += battleTemp.getSkillHurt(0);
                temp += battleTemp.getSkillHurt(1);
                temp += `┄════🧙战斗过程══━┄\n`;
                temp += `<emoji:187>本次战斗共${data.battle.battleRound}回合\n`;
                temp += battleTemp.getKillProcess();
                if (battleTemp.getReward()) {
                    temp += `┏┄══🎁战斗结果═━┄\n`;
                    temp += battleTemp.getReward();
                }
                temp += `\n┗┄${this.at()}┄`;
                yield bot_1.default.sendText(this.channel_id, temp);
            }
        });
    }
    menu() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('battle/Challenge_infinite', { userId: this.userId, isStart: false });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄══🎰无尽回廊══━┄\n`;
            temp += `“你不想知道第${data.layers}层回廊的尽头的有什么吗？”\n`;
            temp += `你不好奇吗？\n`;
            temp += `变强突破吧，也许下一层会有你想要……\n`;
            temp += `🧚每一层的难度都会比上一层更强。\n`;
            temp += `┄══🌈挑战胜利══━┄\n`;
            temp += `🔺回廊层数+1\n`;
            temp += `🔺一切皆有可能的未知奖励\n`;
            temp += `┗┄━═════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
            new example_1.text_example_style().setCommand(`挑战指令：挑战${this.matchKey}`).setExample(`挑战${this.matchKey}`).sendMsg(this.channel_id);
        });
    }
}
exports.challenge_infinite = challenge_infinite;
