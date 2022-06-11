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
const prop_1 = require("../../shared/game/prop");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
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
            console.log(data.kill_log);
            let temp = ``;
            let battleLog = ['', ''];
            let battleList = data.log;
            for (let index = 0; index < battleList.length; index++) {
                const item = battleList[index];
                let itemLog = '';
                itemLog += '🧙' + item.name;
                for (let index = 0; index < item.list.length; index++) {
                    const free_skill = item.list[index];
                    itemLog += `│▌${free_skill.name}:${free_skill.val}`;
                }
                itemLog += '\n';
                battleLog[item.group] += itemLog;
            }
            let battleConfig = {
                hurtLog: {
                    me: true,
                    enemy: true
                },
                killLog: {
                    open: true,
                }
            };
            if (battleConfig.hurtLog.me) {
                let hurtLog = '';
                hurtLog += `┏┄════📄伤害统计═══━┄\n`;
                hurtLog += `${battleLog[0]}`;
                hurtLog += `┗┄━${this.at()}━┄`;
                yield bot_1.default.sendText(this.channel_id, hurtLog);
            }
            if (battleConfig.hurtLog.enemy) {
                let hurtLog = '';
                hurtLog += `┏┄════🔥敌方统计═══━┄\n`;
                hurtLog += `${battleLog[1]}`;
                hurtLog += `┗┄━${this.at()}━┄`;
                yield bot_1.default.sendText(this.channel_id, hurtLog);
            }
            if (battleConfig.killLog.open) {
                let killLog = '';
                killLog += `┏┄════🧙战斗过程═══━┄\n`;
                killLog += `🧚‍♂️本次战斗共${data.battleRound}回合\n`;
                for (let index = 0; index < data.kill_log.length; index++) {
                    const kill_item = data.kill_log[index];
                    killLog += `${kill_item.round}回合:${kill_item.body.name}击杀了${kill_item.die_body.name}\n`;
                }
                killLog += `┗┄━${this.at()}━┄`;
                yield bot_1.default.sendText(this.channel_id, killLog);
            }
            temp += `┏┄════🎁战斗结果═══━┄\n`;
            if (data.reward.length > 0) {
                data.reward.forEach(item => {
                    temp += `${prop_1.rewardKey_CN[prop_1.rewardKey[item.key]]}${item.val > 0 ? '+' : ''}${item.val}`;
                });
            }
            else {
                temp += `😤这次战斗好像奖励了个寂寞`;
            }
            temp += `\n┗┄━${this.at()}━┄`;
            temp += `\n🧚‍♂️击杀怪物后地图有几率掉落宝箱哦~`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.pos_attackEnemy = pos_attackEnemy;
