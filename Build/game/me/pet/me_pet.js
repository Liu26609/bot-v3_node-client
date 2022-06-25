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
exports.me_pet = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
/**
出战指令: 宠物出战+id
休息指令：宠物休息+id
查看指令：查看宠物+id
改名指令:宠物改名 + id + 名字
放生指令: 放生宠物+id
 */
class me_pet extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('pet/Me_pet', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let list = req.res.petList;
            let temp = `┏┄═══<emoji:244>我的宠物══━┄\n`;
            for (let index = 0; index < list.length; index++) {
                const pet = list[index];
                temp += `[${index}]${pet.name}Lv.${pet.leve}♥️${((pet.hp / pet.out_attribute.hp_max) * 100).toFixed(0)}%\n`;
            }
            temp += `┗┄━${this.at()}━┄\n`;
            let temps = ``;
            temps += `┏┄═══👑指令提示══━┄\n`;
            temps += `[查看宠物+ID]查看指定宠物属性\n`;
            temps += `[宠物改名 + ID + 名字]修改宠物名称\n`;
            temps += `[放生宠物 + ID]放生指定宠物\n`;
            temps += `┗┄━═════════━┄\n`;
            bot_1.default.sendText(this.channel_id, temp);
            bot_1.default.sendText(this.channel_id, temps);
        });
    }
}
exports.me_pet = me_pet;
