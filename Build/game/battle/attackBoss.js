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
exports.attackBoss = void 0;
const __1 = require("../..");
const bot_1 = __importDefault(require("../../unity/bot"));
const common_1 = __importDefault(require("../../shared/game/common"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("../task_base");
const battleTemp_1 = require("../temp/text/battleTemp");
class attackBoss extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('battle/AttackBoss', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            (0, __1.log)(req.res);
            let data = req.res;
            (0, __1.log)(data);
            let temp = ``;
            let battleTemp = new battleTemp_1.text_battleTemp_style().sendData(data);
            let hurtLog = '';
            battleTemp.setHurtLotTitle_me(`┄════<emoji:223>我方伤害══━┄`);
            hurtLog += `${battleTemp.getSkillHurt(0)}`;
            battleTemp.setHurtLotTitle_enemy(`┄════<emoji:202>BOSS伤害══━┄`);
            hurtLog += `${battleTemp.getSkillHurt(1)}`;
            temp += hurtLog;
            let killLog = '';
            if (data.isWin) {
                killLog += `<emoji:144><emoji:144><emoji:144><emoji:144>击杀奖励<emoji:144><emoji:144><emoji:144><emoji:144>\n`;
                killLog += `${this.at()}在${data.battleRound}回合击杀了💀世界BOSS！\n`;
                killLog += `<emoji:224>伤害贡献:${common_1.default.BN(data.hurt)}\n`;
                killLog += `<emoji:295>击杀奖励::${battleTemp.getReward()}`;
                killLog += `\n`;
            }
            else {
                killLog += `┄════<emoji:299>刮痧奖励══━┄\n`;
                killLog += `💀世界BOSS在${data.battleRound}回合击败了${this.at()}\n`;
                killLog += `<emoji:67>BOSS(${((data.hp / data.hp_max) * 100).toFixed(2)}%)${common_1.default.BN(data.hp)}/${common_1.default.BN(data.hp_max)}\n`;
                killLog += `<emoji:224>伤害贡献:${common_1.default.BN(data.hurt)}\n`;
                killLog += `<emoji:298>参与奖励:${battleTemp.getReward()}`;
                killLog += `\n`;
            }
            temp += killLog;
            temp += `<emoji:147>攻击boss会死亡但可获得大量奖励\n`;
            temp += `┗┄━${this.at()}━┄`;
            // if(data.reward.length > 0){
            //     data.reward.forEach(item => {
            //         temp += `${rewardKey_CN[rewardKey[item.key]]}+${item.val}`
            //     });
            // }else{
            //     temp += `😤这次战斗好像奖励了个寂寞`
            // }
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.attackBoss = attackBoss;
