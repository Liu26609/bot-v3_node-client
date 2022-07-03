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
exports.challenge_hit = void 0;
const prop_1 = require("./../../shared/game/prop");
const example_1 = require("../temp/text/example");
const task_base_1 = require("../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const battleTemp_1 = require("../temp/text/battleTemp");
const taskTemp_1 = require("../../shared/game/taskTemp");
class challenge_hit extends task_base_1.task_base {
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
            let isStart = this.content.replace(this.matchKey, '') == '开始';
            if (!isStart) {
                this.menu();
                return;
            }
            let req = yield sever_1.default.callApi('battle/Challenge_hit', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = ``;
            let battleTemp = new battleTemp_1.text_battleTemp_style().sendData(data);
            battleTemp.setHurtLotTitle_me(`┏┄══📄伤害统计═━┄`);
            battleTemp.setHurtLotTitle_enemy(`┄════🔥木桩统计══━┄`);
            temp += battleTemp.getSkillHurt(0);
            temp += battleTemp.getSkillHurt(1);
            temp += `┄════🧙战斗过程══━┄\n`;
            temp += `<emoji:187>本次战斗共${data.battleRound}回合\n`;
            temp += battleTemp.getKillProcess();
            if (battleTemp.getReward()) {
                temp += `┏┄══🎁伤害奖励═━┄\n`;
                temp += battleTemp.getReward();
            }
            temp += `\n┗┄${this.at()}┄`;
            yield bot_1.default.sendText(this.channel_id, temp);
        });
    }
    menu() {
        return __awaiter(this, void 0, void 0, function* () {
            let temp = `┏┄══🎰${taskTemp_1.taskType_CN.challenge_hit}══━┄\n`;
            temp += `💌超越自我,琳琅天上!永无止境的突破\n`;
            temp += `🧚最高爆发伤害挑战,你最高能打出多少爆发伤害呢?期待你的挑战\n`;
            temp += `┄══🌈挑战完成══━┄\n`;
            temp += `🔺奖励造成的伤害同比${prop_1.rewardKey_CN.gold}\n`;
            temp += `┗┄━═════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
            new example_1.text_example_style().setCommand(`挑战指令：开始${this.matchKey}`).setExample(`开始${this.matchKey}`).sendMsg(this.channel_id);
        });
    }
}
exports.challenge_hit = challenge_hit;
