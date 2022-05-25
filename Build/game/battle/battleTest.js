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
exports.battleTest = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class battleTest extends task_base_1.task_base {
    constructor(...args) {
        super(...args);
        this.logSkillMap = new Map();
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield sever_1.default.callApi('Battle', {});
            if (!res.isSucc) {
                this.sendErr(res.err);
                return;
            }
            let data = res.res;
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
            let configTemp = `频道设置
是否显示我方伤害日志：${battleConfig.hurtLog.me ? '是' : '否'}
是否显示敌方伤害日志：${battleConfig.hurtLog.enemy ? '是' : '否'}
是否显示击杀记录日志：${battleConfig.killLog.open ? '是' : '否'}`;
            bot_1.default.sendText(this.channel_id, configTemp);
            if (battleConfig.hurtLog.me) {
                let hurtLog = '';
                hurtLog += `🔥￣￣￣￣＼📄伤害统计／￣￣￣￣🔥\n`;
                hurtLog += `${battleLog[0]}\n`;
                yield bot_1.default.sendText(this.channel_id, hurtLog);
            }
            if (battleConfig.hurtLog.enemy) {
                let hurtLog = '';
                hurtLog += `🔥￣￣￣￣＼💌敌方统计／￣￣￣￣🔥\n`;
                hurtLog += `${battleLog[1]}\n`;
                yield bot_1.default.sendText(this.channel_id, hurtLog);
            }
            if (battleConfig.killLog.open) {
                let killLog = '';
                killLog += `￣￣￣￣￣＼🧙战斗胜利／￣￣￣￣\n`;
                for (let index = 0; index < data.kill_log.length; index++) {
                    const kill_item = data.kill_log[index];
                    killLog += `${kill_item.round}回合:${kill_item.body.name}击杀了${kill_item.die_body.name}\n`;
                }
                yield bot_1.default.sendText(this.channel_id, killLog);
            }
            temp += `\n￣￣￣￣￣＼🎁战斗结果／￣￣￣￣￣\n`;
            temp += `💰金币+25⏳经验+3296⏳宠物经验+3296🌈称号经验+1✝️正义值+1`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.battleTest = battleTest;
