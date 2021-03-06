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
exports.challenge_power = void 0;
const example_1 = require("../temp/text/example");
const task_base_1 = require("../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const body_1 = require("../../shared/game/body");
const battleTemp_1 = require("../temp/text/battleTemp");
class challenge_power extends task_base_1.task_base {
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
            let req = yield sever_1.default.callApi('battle/Challenge_power', { userId: this.userId, isStart: true });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (data.isMax) {
                this.max();
                return;
            }
            if (data.battle) {
                let temp = ``;
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
    max() {
        return __awaiter(this, void 0, void 0, function* () {
            bot_1.default.sendText(this.channel_id, `${this.at()}力量挑战只能支持提升到[${body_1.DNA_CN[body_1.DNA_Leve[body_1.DNA_Leve.E]]}]更高级的基因锁需要进行[强者挑战]`);
        });
    }
    menu() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('battle/Challenge_power', { userId: this.userId, isStart: false });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (data.isMax) {
                this.max();
                return;
            }
            let temp = `┏┄══🎰贪婪洞窟══━┄\n`;
            temp += `在一个隐秘角落，一名冒险者在废弃多年的矿坑中发现了大量的金子和财宝，一夜之间他收获了从未想象的财富和名声。\n`;
            temp += `🧚人性最大的弱点并不是自私，而是“贪婪”,你将进入洞窟探索,每次探索都是未知的。可能是宝藏当也可能是未知生物？\n`;
            temp += `┄══🌈游戏规则══━┄\n`;
            temp += `🔺每次探索会有丰厚的奖励\n`;
            temp += `🔺奖励需要结束探索才能领取\n`;
            temp += `🔺当探索遇敌人被击杀将损失全部奖励\n`;
            temp += `🔻被击杀后你将损失全部积累的奖励\n`;
            temp += `┄══💀当前财富══━┄\n`;
            temp += `🔻被击杀后你将损失全部积累的奖励\n`;
            temp += `┗┄━═════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
            new example_1.text_example_style().setCommand(`挑战指令：开始${this.matchKey}`).setExample(`开始${this.matchKey}`).sendMsg(this.channel_id);
        });
    }
}
exports.challenge_power = challenge_power;
