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
exports.me_title = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_title extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('Me_title', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄════👑我的称号═══━┄\n`;
            temp += `⚜️等级：LV.${data.title.leve}(${data.title.exp}/${data.title.leve * 10000})\n`;
            temp += `${data.title.name}\n`;
            temp += ` ♥️最大生命+${data.title.attribute.hp_max}%\n`;
            temp += `🔪物理攻击+${data.title.attribute.PhysicalAttacks}%\n`;
            temp += `🔰物理防御+${data.title.attribute.PhysicalDefense}%\n`;
            temp += `🔮魔法攻击+${data.title.attribute.MagicAttack}%\n`;
            temp += `🌟魔法防御+${data.title.attribute.MagicDefense}%\n`;
            temp += `🧚‍♂️攻击怪物可提高称号经验,等级越高加成越高\n`;
            temp += `┗┄━${this.at()}━┄\n`;
            temp += `┏┄═══👑指令提示══━┄\n`;
            temp += `称号改名:称号改名 + 名称\n`;
            temp += `重置称号:重置称号 + 次数\n`;
            temp += `┗┄━══════════━┄`;
            // 　称号改名　重置称号
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.me_title = me_title;
