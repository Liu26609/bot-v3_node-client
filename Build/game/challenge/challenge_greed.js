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
exports.challenge_greed = void 0;
const task_base_1 = require("../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const battleTemp_1 = require("../temp/text/battleTemp");
const common_1 = __importDefault(require("../../shared/game/common"));
const prop_1 = require("../../shared/game/prop");
class challenge_greed extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let type = 0;
            if (this.content.replace(this.matchKey, '') == '进入') {
                type = 1;
            }
            else if (this.content.replace(this.matchKey, '') == '探索') {
                type = 2;
            }
            else if (this.content.replace(this.matchKey, '') == '结束') {
                type = 3;
            }
            if (type == 0) {
                this.menu();
                return;
            }
            let req = yield sever_1.default.callApi('battle/Challenge_greed', { userId: this.userId, type: type });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
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
            if (data.reward) {
                let temp = `┏┄══🎁获得奖励═━┄\n`;
                if (data.reward && data.reward.length > 0) {
                    data.reward.forEach(item => {
                        temp += `${prop_1.rewardKey_CN[prop_1.rewardKey[item.key]]}${item.val > 0 ? '+' : ''}${common_1.default.BN(item.val)}\n`;
                    });
                }
                temp += `┗┄${this.at()}┄`;
                yield bot_1.default.sendText(this.channel_id, temp);
            }
        });
    }
    menu() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('battle/Challenge_greed', { userId: this.userId, type: 0 });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄══🎰贪婪洞窟══━┄\n`;
            temp += `在一个隐秘角落，一名冒险者在废弃多年的矿坑中发现了大量的金子和财宝，一夜之间他收获了从未想象的财富和名声。\n`;
            temp += `你将进入洞窟探索,每次探索都是未知的。可能是宝藏当也可能是可怕未知生物...\n`;
            temp += `┄══🌈游戏规则══━┄\n`;
            temp += `🔺每次探索可能有丰厚的奖励\n`;
            temp += `🔺每次探索可能遇到强大的怪物\n`;
            temp += `🔺奖励需要结束探索才能领取\n`;
            temp += `🔺当探索被击杀将损失全部奖励\n`;
            temp += `┄══🎁当前奖励══━┄\n`;
            if (data.nowReward && data.nowReward.length > 0) {
                data.nowReward.forEach(item => {
                    temp += `${prop_1.rewardKey_CN[prop_1.rewardKey[item.key]]}${item.val > 0 ? '+' : ''}${item.val}\n`;
                });
            }
            else {
                temp += `🔻目前还没有累积任何奖励\n`;
            }
            temp += `┗┄━═════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
            let temps = ``;
            temps += `┏┄═══👑指令提示══━┄\n`;
            temps += `[进入${this.matchKey}]进入开始${this.matchKey}\n`;
            temps += `[探索${this.matchKey}]探索一次\n`;
            temps += `[结束${this.matchKey}]结束探索领取奖励\n`;
            temps += `┗┄━═════════━┄\n`;
            bot_1.default.sendText(this.channel_id, temps);
        });
    }
}
exports.challenge_greed = challenge_greed;
