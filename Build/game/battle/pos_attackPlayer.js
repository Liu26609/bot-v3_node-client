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
exports.pos_attackPlayer = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const battleTemp_1 = require("../temp/text/battleTemp");
const task_base_1 = require("./../task_base");
// TODO攻击玩家 + id
class pos_attackPlayer extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let attackIndex = this.content.replace(this.matchKey, '');
            if (typeof (attackIndex) == 'undefined' || attackIndex == '' || isNaN(Number(attackIndex))) {
                bot_1.default.sendText(this.channel_id, '请指定当前位置玩家的ID');
                return;
            }
            let req = yield sever_1.default.callApi('battle/PosAttackPlayer', { userId: this.userId, attackId: Math.ceil(Number(attackIndex)) });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = ``;
            let battleTemp = new battleTemp_1.text_battleTemp_style().sendData(data);
            battleTemp.setHurtLotTitle_me(`┏┄══📄伤害统计═━┄`);
            battleTemp.setHurtLotTitle_enemy(`┄════🔥敌方统计══━┄`);
            temp += battleTemp.getSkillHurt(0);
            temp += battleTemp.getSkillHurt(1);
            temp += `┄════🧙战斗过程══━┄\n`;
            temp += `<emoji:187>本次战斗共${data.battleRound}回合\n`;
            temp += battleTemp.getKillProcess();
            temp += `┏┄══🎁战斗结果═━┄\n`;
            if (battleTemp.getReward()) {
                temp += battleTemp.getReward();
            }
            else {
                temp += `😤这次战斗好像奖励了个寂寞`;
            }
            temp += `\n┗┄━${this.at()}━┄`;
            temp += `\n<emoji:147>击杀怪物后地图有几率掉落宝箱哦~`;
            bot_1.default.sendText(this.channel_id, temp, this.content);
        });
    }
}
exports.pos_attackPlayer = pos_attackPlayer;
