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
exports.challenge_box = void 0;
const task_base_1 = require("../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const body_1 = require("../../shared/game/body");
const battleTemp_1 = require("../temp/text/battleTemp");
/**
 * 破壁计划
 */
class challenge_box extends task_base_1.task_base {
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
            let isStart = this.content.replace(this.matchKey, '') == '开启';
            let isChallenge = this.content.replace(this.matchKey, '') == '挑战';
            let type = 0;
            if (isStart) {
                type = 1;
            }
            if (isChallenge) {
                type = 2;
            }
            if (!type) {
                this.menu();
                return;
            }
            let req = yield sever_1.default.callApi('battle/Challenge_box', { userId: this.userId, type: type });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (data.battle) {
                let temp = ``;
                let battleTemp = new battleTemp_1.text_battleTemp_style().sendData(data.battle);
                battleTemp.setHurtLotTitle_me(`┏┄════📄伤害统计═══━┄`);
                battleTemp.setHurtLotTitle_enemy(`┄════🔥敌方统计═══━┄`);
                temp += battleTemp.getSkillHurt(0);
                temp += battleTemp.getSkillHurt(1);
                temp += `┄════🧙战斗过程═══━┄\n`;
                temp += `<emoji:187>本次战斗共${data.battle.battleRound}回合\n`;
                temp += battleTemp.getKillProcess();
                temp += `┏┄════🎁战斗结果═══━┄\n`;
                if (battleTemp.getReward()) {
                    temp += battleTemp.getReward();
                }
                else {
                    temp += `😤这次战斗好像奖励了个寂寞`;
                }
                temp += `\n┗┄━${this.at()}━┄`;
                yield bot_1.default.sendText(this.channel_id, temp);
            }
        });
    }
    menu() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('battle/Challenge_box', { userId: this.userId, type: 0 });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄══⚠️破壁计划══━┄\n`;
            temp += `⬛当全服实力足够之后，所有轮回者都将一同参与[破壁计划]摧毁盒子的障碍，去挑战盒子外的敌人。破壁计划几乎必须需要[${body_1.DNA_CN[body_1.DNA_Leve[data.openlimit]]}]级别以上才能开展\n`;
            temp += `🌈挑战胜利🔺${data.win}\n`;
            temp += `💀挑战失败🔻${data.fail}\n`;
            temp += `⬛从开始计划若1天内没人挑战则视为失败\n`;
            temp += `┗┄━══════════━┄`;
            yield bot_1.default.sendText(this.channel_id, temp);
            let tips = `┏@${bot_1.default.getBot_name()},输入以下指令┄
▶️开启指令：开启${this.matchKey}
▶️挑战指令：挑战${this.matchKey}
┗┄━${this.at()}━┄`;
            bot_1.default.sendText(this.channel_id, tips);
        });
    }
}
exports.challenge_box = challenge_box;
