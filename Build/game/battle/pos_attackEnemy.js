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
exports.pos_attackEnemy = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const battleTemp_1 = require("../temp/text/battleTemp");
const task_base_1 = require("./../task_base");
class pos_attackEnemy extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            // 攻击怪物 =》 选择等级最低且生命最低的怪物
            // 攻击怪物 + 数字 =》 指定攻击怪物
            let attackId = 0;
            if (this.matchKey == '攻击全部怪物') {
                // 攻击全部怪物 =》 攻击全部存活的怪物
                attackId = -1;
            }
            else if (this.matchKey == '攻击怪物' && this.content == '攻击怪物') {
                attackId = -2;
            }
            else {
                let index = Number(this.content.replace('攻击怪物', ''));
                index = Math.ceil(index);
                if (index < 0 || index > 20) {
                    attackId = -2;
                }
                else {
                    attackId = index;
                }
            }
            let req = yield sever_1.default.callApi('battle/PosAttackEnemy', { userId: this.userId, attackId: attackId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = ``;
            let battleTemp = new battleTemp_1.text_battleTemp_style().sendData(data);
            battleTemp.setHurtLotTitle_me(`┏┄════📄伤害统计═══━┄`);
            battleTemp.setHurtLotTitle_enemy(`┄════🔥敌方统计═══━┄`);
            if (!this.UserCfg.isHideSkill_Log) {
                temp += battleTemp.getSkillHurt(0);
                temp += battleTemp.getSkillHurt(1);
            }
            if (!this.UserCfg.isHideKill_Log) {
                temp += `┄════🧙战斗过程═══━┄\n`;
                temp += `<emoji:187>本次战斗共${data.battleRound}回合\n`;
                temp += battleTemp.getKillProcess();
            }
            temp += `┏┄════🎁战斗结果═══━┄\n`;
            if (battleTemp.getReward()) {
                temp += battleTemp.getReward();
            }
            else {
                temp += `😤这次战斗好像奖励了个寂寞`;
            }
            temp += `\n┗┄━${this.at()}━┄`;
            temp += `\n<emoji:147>击杀怪物后地图有几率掉落宝箱哦~`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.pos_attackEnemy = pos_attackEnemy;
