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
const taskTemp_1 = require("../../shared/game/taskTemp");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class everDayTask extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('me/EverDayTask', { userId: this.userId });
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
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
    coverTaskIdTips(id) {
        let str = ``;
        switch (id) {
            case taskTemp_1.TaskId.sign:
                str = `[签到]签什么到，钓鱼去！`;
                break;
            case taskTemp_1.TaskId.BackShop_look:
                str = `[黑市]不正当的PY商店`;
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
            case taskTemp_1.TaskId.attackBoss:
                str = `[攻击boss]刮痧师傅在线刮痧`;
                break;
            case taskTemp_1.TaskId.rank:
                str = `[华山论剑]菜鸡互啄`;
                break;
            case taskTemp_1.TaskId.lottery_partake:
                str = `[猜数]中是不可能中的`;
                break;
            default:
                str = `未收录任务id${id}`;
                break;
        }
        return str;
    }
}
exports.everDayTask = everDayTask;
/**
┏┄══🌈飞升任务══━┄
☑️击杀等级不相差10级玩家(0/1000)
☑️击杀大于自身等级怪物(0/1000)
☑️击杀一次boss(0/1)
┗┄━@楚轩 ━┄
🧚‍♂️完成任务变化:
1.随机部位最高品质装备
2.在下一个飞升者完成任务前，任意玩家击杀怪物自身获得5%经验
3.地图切换=>怪物等级提高
 */ 
