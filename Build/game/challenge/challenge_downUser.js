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
exports.challenge_downUser = void 0;
const example_1 = require("../temp/text/example");
const task_base_1 = require("../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const body_1 = require("../../shared/game/body");
const battleTemp_1 = require("../temp/text/battleTemp");
class challenge_downUser extends task_base_1.task_base {
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
            let req = yield sever_1.default.callApi('battle/Challenge_downUser', { userId: this.userId, isStart: true });
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
            bot_1.default.sendText(this.channel_id, `${this.at()}强者挑战只能支持提升到[${body_1.DNA_CN[body_1.DNA_Leve[body_1.DNA_Leve.EE]]}]更高的基因锁需要进行[镜像挑战]`);
        });
    }
    menu() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('battle/Challenge_downUser', { userId: this.userId, isStart: false });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (data.isMax) {
                this.max();
                return;
            }
            let temp = `┏┄══🎰强者挑战══━┄\n`;
            temp += `介绍:人生充满挑战！有的人，因为勇于挑战强者;有的人却安于现状败于谷底。我，要成为强者
        通过面临着生命危险、死亡的恐惧中，具有更加强大执念的人就能够激发出生物的潜在能力，这便是基因锁的第二阶段;
    将潜在力量百分之百的发挥出来。基因锁二阶的解放代表着具有超强的恢复力、力量。\n`;
            temp += `🧚你将挑战6个[${body_1.DNA_CN.F}]的真实玩家,全部击败即可胜利\n`;
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
exports.challenge_downUser = challenge_downUser;
