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
exports.me_titleRandom = void 0;
const user_1 = require("../../../shared/game/user");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
class me_titleRandom extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let randomCont = this.content.replace(this.matchKey, '');
            if (this.content == this.matchKey) {
                randomCont = '1';
            }
            if (isNaN(Number(randomCont))) {
                this.log(`称号重置次数只能为数字`);
                return;
            }
            if (Number(randomCont) <= 0) {
                this.log(`称号重置次数不能小于0`);
                return;
            }
            if (Number(randomCont) > 5000000) {
                this.log(`重置次数最大为500万哦~`);
                return;
            }
            let req = yield sever_1.default.callApi('me/title/Me_titleRandom', { userId: this.userId, randomCont: Number(randomCont) });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄════🌈重置完成═══━┄\n`;
            temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            for (const key in data.bf) {
                let titleStr = '';
                switch (key) {
                    case 'hp_max':
                        titleStr = '♥️最大生命+';
                        break;
                    case 'PhysicalAttacks':
                        titleStr = '🔪物理攻击+';
                        break;
                    case 'PhysicalDefense':
                        titleStr = '🔰物理防御+';
                        break;
                    case 'MagicAttack':
                        titleStr = '🔮魔法攻击+';
                        break;
                    case 'MagicDefense':
                        titleStr = '🌟魔法防御+';
                        break;
                    case 'secondResHp':
                        titleStr = '💖每秒回复+';
                        break;
                    default:
                        break;
                }
                let changeIcon = '🟢';
                if (data.bf[key] > data.now[key]) {
                    changeIcon = '🔻';
                }
                else if (data.bf[key] < data.now[key]) {
                    changeIcon = '🔺';
                }
                temp += ` ${titleStr}${data.bf[key]}${changeIcon}${data.now[key]}%\n`;
            }
            temp += `┗┄━${this.at()}━┄`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.me_titleRandom = me_titleRandom;
