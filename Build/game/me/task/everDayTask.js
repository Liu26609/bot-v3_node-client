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
exports.everDayTask = void 0;
const taskTemp_1 = require("../../../shared/game/taskTemp");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
class everDayTask extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('task/EverDayTask', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = ``;
            temp += `┏┄══🌈每日任务══━┄\n`;
            for (let index = 0; index < data.list.length; index++) {
                const item = data.list[index];
                const isDone = item.now >= item.target;
                temp += `${isDone ? '✅' : '☑️'}${this.coverTaskIdTips(item.id)}(${item.now}/${item.target})\n`;
            }
            temp += `┗┄━${this.at()}━┄`;
            bot_1.default.sendText(this.channel_id, temp, this.content);
        });
    }
    coverTaskIdTips(id) {
        let str = ``;
        switch (id) {
            case taskTemp_1.TaskId.sign:
                str = `[签到]签什么到，钓鱼去！`;
                break;
            case taskTemp_1.TaskId.SkillShop_look:
                str = `[技能商店]查看技能商店`;
                break;
            case taskTemp_1.TaskId.BackShop_look:
                str = `[黑市商店]不正当的PY商店`;
                break;
            case taskTemp_1.TaskId.EquipShop_look:
                str = `[装备商店]查看装备商店`;
                break;
            case taskTemp_1.TaskId.PK:
                str = `[PK]频道PK点到为止`;
                break;
            case taskTemp_1.TaskId.catch:
                str = `[捕捉]废品收集器`;
                break;
            case taskTemp_1.TaskId.fishing:
                str = `[钓鱼]钓鱼佬绝不空军`;
                break;
            case taskTemp_1.TaskId.attackMonster:
                str = `[攻击怪物]闲的无聊打个怪`;
                break;
            case taskTemp_1.TaskId.attackBoss_partake:
                str = `[攻击boss]刮痧师傅在线刮痧`;
                break;
            case taskTemp_1.TaskId.rank:
                str = `[华山论剑]菜鸡互啄`;
                break;
            case taskTemp_1.TaskId.lottery_partake:
                str = `[猜数]中是不可能中的`;
                break;
            case taskTemp_1.TaskId.look_Horse:
                str = `[宠物马拉松]查看一次宠物马拉松`;
                break;
            case taskTemp_1.TaskId.challenge_hit:
                str = `[伤害挑战]最高爆发伤害挑战`;
                break;
            default:
                str = `未收录任务id${id}`;
                break;
        }
        return str;
    }
}
exports.everDayTask = everDayTask;
