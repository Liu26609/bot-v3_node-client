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
exports.soaringTask = void 0;
const taskTemp_1 = require("../../../shared/game/taskTemp");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("./../../task_base");
class soaringTask extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('task/soaringTask', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄═🌈${taskTemp_1.taskType_CN[taskTemp_1.taskType[data.taskLeve]]}═━┄\n`;
            temp += `⬛实力提升到一定程度成长就会变得缓慢,进而造成高等级玩家互相残杀的局面，这对于破壁计划是不利的。
因此，在破壁计划之前，准备了阶梯任务。每一级阶梯任务都提供不同任务和奖励\n`;
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
            case taskTemp_1.TaskId.strengthen_succress:
                str = `成功强化装备`;
                break;
            case taskTemp_1.TaskId.attackBoss_kill:
                str = `击杀世界BOSS`;
                break;
            case taskTemp_1.TaskId.PK:
                str = `频道内[PK]其他玩家`;
                break;
            case taskTemp_1.TaskId.rank:
                str = `[华山论剑]菜鸡互啄`;
                break;
            case taskTemp_1.TaskId.sign:
                str = `[签到]每日签到`;
                break;
            case taskTemp_1.TaskId.docile_partake:
                str = `[捕捉]捕捉宠物`;
                break;
            case taskTemp_1.TaskId.lottery_win:
                str = `[猜数]猜中数字`;
                break;
            case taskTemp_1.TaskId.attackMonster:
                str = `[攻击怪物]刷怪睡觉吃饭`;
                break;
            default:
                str = `未收录任务id${id}`;
                break;
        }
        return str;
    }
}
exports.soaringTask = soaringTask;
