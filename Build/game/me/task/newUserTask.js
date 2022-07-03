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
exports.newUserTask = void 0;
const taskTemp_1 = require("../../../shared/game/taskTemp");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
class newUserTask extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('task/NewUsetTask', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄═🌈${taskTemp_1.taskType_CN[taskTemp_1.taskType[taskTemp_1.taskType.newUser]]}═━┄\n`;
            temp += `想明白生命的意义吗?想真正的……活着吗?
    欢迎来到主神空间,选择一个基因并进化并解开基因锁最高阶，那么最强之名......就是你的了！
但是我不会帮你，想要什么样的未来.....自己去追寻吧！那么......选择权现在给你了。
希望您能在主神空间活到最后。\n`;
            for (let index = 0; index < data.list.length; index++) {
                const item = data.list[index];
                const isDone = item.now >= item.target;
                temp += `${isDone ? '✅' : '☑️'}${this.coverTaskIdTips(item.id)}(${item.now}/${item.target})\n`;
            }
            temp += `┗┄${this.at()}┄`;
            bot_1.default.sendText(this.channel_id, temp, this.content);
        });
    }
    coverTaskIdTips(id) {
        let str = ``;
        switch (id) {
            case taskTemp_1.TaskId.look_loca:
                str = `[位置]查看当前位置`;
                break;
            case taskTemp_1.TaskId.move_right:
                str = `[右]向右移动`;
                break;
            case taskTemp_1.TaskId.move_left:
                str = `[左]向左移动`;
                break;
            case taskTemp_1.TaskId.move_top:
                str = `[上]向上移动`;
                break;
            case taskTemp_1.TaskId.move_buttom:
                str = `[下]向下移动`;
                break;
            case taskTemp_1.TaskId.attackMonster:
                str = `[攻击怪物]攻击位置怪物`;
                break;
            case taskTemp_1.TaskId.EquipShop_look:
                str = `[装备商店]变强的途径之一`;
                break;
            case taskTemp_1.TaskId.SkillShop_look:
                str = `[技能商店]变强的途径之一`;
                break;
            default:
                str = `未收录任务id${id}`;
                break;
        }
        return str;
    }
}
exports.newUserTask = newUserTask;
