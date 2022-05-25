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
const prop_1 = require("../../shared/game/prop");
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
            let temp = ``;
            temp += `┏┄════👑重生复活═══━┄\n`;
            temp += `┣🔻扣除${prop_1.rewardKey_CN[prop_1.rewardKey[1]]}x0\n`;
            temp += `┣🔻扣除${prop_1.rewardKey_CN[prop_1.rewardKey[2]]}x0\n`;
            temp += `┣🔻扣除${prop_1.rewardKey_CN[prop_1.rewardKey[3]]}x0\n`;
            temp += `🧚‍♂️复活完成:死亡不是终结,破产才是。\n`;
            temp += `┗┄━══════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.me_resLife = me_resLife;
