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
exports.randomAncestry = void 0;
const user_1 = require("../../../shared/game/user");
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../shared/game/common"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
class randomAncestry extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('ancestry/Me_randomAncestry', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let info = req.res.ancestry;
            let sk = req.res.SK;
            let pay = req.res.pay;
            let temp = `┏┄═══👑新的血统══━┄
Ⓜ️来源[${info.from}]
👑血统[${info.title}]
┄════初始分数══━┄
♥️最大生命${info.base.hp_max}分🔪物理攻击${info.base.PhysicalAttacks}分
🔰物理防御${info.base.PhysicalDefense}分🔮魔法攻击${info.base.MagicAttack}分
🌟魔法防御${info.base.MagicDefense}分💖生命回复${info.base.secondResHp}分
┄════附带技能══━┄
[${sk.name}]${common_1.default.getSkDesc(sk)}
🔻消耗${user_1.walletKey_CN[user_1.walletKey[pay.condition.key]]}x${pay.condition.val}
▶️还有${user_1.walletKey_CN[user_1.walletKey[pay.condition.key]]}x${pay.now}
┗┄${this.at()}┄
<emoji:147>重新血统会清空经验和等级哦`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.randomAncestry = randomAncestry;
