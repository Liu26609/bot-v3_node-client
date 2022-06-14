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
exports.me_Reread = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
const task_base_1 = require("./../../task_base");
class me_Reread extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            // 复读功能
            let temp = `┏┄══人类的本质══━┄
鲁迅说过:人的本质就是复读机
现在来试试复读的快乐吧~\n`;
            temp += `┄══👑指令提示═━┄\n`;
            temp += `[复读]复读一次上次的指令\n`;
            temp += `┗┄━━━━━━━━━┄\n`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.me_Reread = me_Reread;
