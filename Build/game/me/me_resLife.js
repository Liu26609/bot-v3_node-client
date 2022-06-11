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
exports.me_resLife = void 0;
const user_1 = require("../../shared/game/user");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_resLife extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('ResLife', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = ``;
            temp += `┏┄═════👑治疗恢复═══━┄\n`;
            temp += `🔻扣除${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            temp += `💉为你恢复♥️${data.userRes}\n`;
            temp += `💊宠物恢复♥️${data.petRes}\n`;
            temp += `🧚‍♂️治疗完成:死亡不是终结,破产才是。\n`;
            temp += `┗┄━${this.at()}━┄`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.me_resLife = me_resLife;
