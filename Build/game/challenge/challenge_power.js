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
            let temp = `┏┄══🎰力量挑战══━┄\n`;
            temp += `介绍:榨压身体的力量超出肉体承受的极限，就能够激发出人类的潜在能力，这便是基因锁的第一阶
世界上存在着许多奇迹，比如说那个很有名的催眠实验：
用冰冷的铁条把人烫伤，再比如老太太为了救外孙把汽车抬起来、母亲为了救坠楼的儿子百米只用五秒
但这不过是因为他们在某些情况下某些激素的快速分泌，达成了表面上违反常理的结果，就算衰竭而死也不是因为基因崩溃和潜能耗尽，只是因为自我催眠后引起的器官功能紊乱、爆发时的细胞加速分裂耗尽了人的寿命。\n`;
            temp += `🧚突破常人的力量极限,破开自身生命界限,你将对木桩进行战斗,在${data.battle_round}回合内伤害达到${data.needHit}即可胜利\n`;
            temp += `┄══🌈挑战胜利══━┄\n`;
            temp += `🔺基因锁将进阶为[${body_1.DNA_CN[body_1.DNA_Leve[data.nextDNA]]}]\n`;
            temp += `🔺基因锁增益:全属性+${data.winAdd}%\n`;
            temp += `┄══💀挑战失败══━┄\n`;
            temp += `🔻等级扣除${data.failDel}级\n`;
            temp += `┗┄━═════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
            new example_1.text_example_style().setCommand(`挑战指令：开始${this.matchKey}`).setExample(`开始${this.matchKey}`).sendMsg(this.channel_id);
        });
    }
}
exports.challenge_power = challenge_power;
