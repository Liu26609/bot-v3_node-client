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
            temp += `โโโโ๐ๆฏๆฅไปปๅกโโโโ\n`;
            for (let index = 0; index < data.list.length; index++) {
                const item = data.list[index];
                const isDone = item.now >= item.target;
                temp += `${isDone ? 'โ' : 'โ๏ธ'}${this.coverTaskIdTips(item.id)}(${item.now}/${item.target})\n`;
            }
            temp += `โโ${this.at()}โ`;
            bot_1.default.sendText(this.channel_id, temp, this.content);
        });
    }
    coverTaskIdTips(id) {
        let str = ``;
        switch (id) {
            case taskTemp_1.TaskId.sign:
                str = `[็ญพๅฐ]็ญพไปไนๅฐ๏ผ้้ฑผๅป๏ผ`;
                break;
            case taskTemp_1.TaskId.SkillShop_look:
                str = `[ๆ่ฝๅๅบ]ๆฅ็ๆ่ฝๅๅบ`;
                break;
            case taskTemp_1.TaskId.BackShop_look:
                str = `[้ปๅธๅๅบ]ไธๆญฃๅฝ็PYๅๅบ`;
                break;
            case taskTemp_1.TaskId.EquipShop_look:
                str = `[่ฃๅคๅๅบ]ๆฅ็่ฃๅคๅๅบ`;
                break;
            case taskTemp_1.TaskId.PK:
                str = `[PK]้ข้PK็นๅฐไธบๆญข`;
                break;
            case taskTemp_1.TaskId.catch:
                str = `[ๆๆ]ๅบๅๆถ้ๅจ`;
                break;
            case taskTemp_1.TaskId.fishing:
                str = `[้้ฑผ]้้ฑผไฝฌ็ปไธ็ฉบๅ`;
                break;
            case taskTemp_1.TaskId.attackMonster:
                str = `[ๆปๅปๆช็ฉ]้ฒ็ๆ?่ๆไธชๆช`;
                break;
            case taskTemp_1.TaskId.attackBoss_partake:
                str = `[ๆปๅปboss]ๅฎ็งๅธๅๅจ็บฟๅฎ็ง`;
                break;
            case taskTemp_1.TaskId.rank:
                str = `[ๅๅฑฑ่ฎบๅ]่้ธกไบๅ`;
                break;
            case taskTemp_1.TaskId.lottery_partake:
                str = `[็ๆฐ]ไธญๆฏไธๅฏ่ฝไธญ็`;
                break;
            case taskTemp_1.TaskId.look_Horse:
                str = `[ๅฎ?็ฉ้ฉฌๆๆพ]ๆฅ็ไธๆฌกๅฎ?็ฉ้ฉฌๆๆพ`;
                break;
            case taskTemp_1.TaskId.challenge_hit:
                str = `[ไผคๅฎณๆๆ]ๆ้ซ็ๅไผคๅฎณๆๆ`;
                break;
            case taskTemp_1.TaskId.challenge_greed:
                str = `[่ดชๅฉชๆด็ช]ไธๆฌฒๆไธบๆ`;
                break;
            default:
                str = `ๆชๆถๅฝไปปๅกid${id}`;
                break;
        }
        return str;
    }
}
exports.everDayTask = everDayTask;
