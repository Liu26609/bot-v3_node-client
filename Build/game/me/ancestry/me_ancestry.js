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
exports.me_ancestry = void 0;
const body_1 = require("../../../shared/game/body");
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../unity/common"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
class me_ancestry extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('ancestry/Me_Ancestry', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄════👑我的进化═══━┄
Ⓜ️来源[${data.ancestry.from}]
👑${body_1.ancestryLeve[data.info.leve]}级[${data.ancestry.title}]
⏳经验值(${data.info.exp}/${data.info.exp_max})
┄════成长分数═══━┄
♥️最大生命${data.ancestry.base.hp_max}分🔪物理攻击${data.ancestry.base.PhysicalAttacks}分
🔰物理防御${data.ancestry.base.PhysicalDefense}分🔮魔法攻击${data.ancestry.base.MagicAttack}分
🌟魔法防御${data.ancestry.base.MagicDefense}分💖生命回复${data.ancestry.base.secondResHp}分
┄════附带技能═══━┄
[${data.SK.name}]
${common_1.default.getSkDesc(data.SK)}
┗┄━${this.at()}━┄
<emoji:147>[重置进化]更换血统,但会清空当前等级
<emoji:147>成长分和技能会随着进化等级变化`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.me_ancestry = me_ancestry;
