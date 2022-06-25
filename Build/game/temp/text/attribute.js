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
exports.text_attribute_style = void 0;
const __1 = require("../../..");
const body_1 = require("../../../shared/game/body");
const team_1 = require("../../../shared/game/team");
const user_1 = require("../../../shared/game/user");
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../shared/game/common"));
class text_attribute_style {
    constructor() {
    }
    setAncestry(info) {
        this.ancestry = info;
        return this;
    }
    setTeam(info) {
        if (info) {
            this.team = info;
        }
        return this;
    }
    setData(data) {
        this.data = data;
        return this;
    }
    sendMsg(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.data) {
                (0, __1.err)('text_attribute_style 没有数据');
                return;
            }
            const out_attribute = this.data.out_attribute;
            let temp = ``;
            temp += this.data.title.name + '\n';
            temp += `┏┄═══👑属性══━┄\n`;
            temp += `<emoji:11>战力:${this.data.military}\n`;
            temp += `🔥Lv.${this.data.leve}⏳(${common_1.default.BN(this.data.exp, 0)}/${common_1.default.BN(this.data.exp_max, 0)})\n`;
            temp += `${this.data.icon}名称:${this.data.name}\n`;
            if (this.ancestry) {
                temp += `👑${this.ancestry.title}\n`;
            }
            if (this.data.dnaLock > 0) {
                temp += `🔒基因锁[${body_1.DNA_CN[body_1.DNA_Leve[this.data.dnaLock]]}]\n`;
            }
            // 工会
            if (this.team) {
                temp += `🏰${this.team.leve}级工会:${this.team.name}[${team_1.teamLeve_CN[team_1.teamLeve[this.data.team.leve]]}]\n`;
            }
            temp += `⚜️声望值:${common_1.default.BN(this.data.rankscore)}`;
            // 红名值or正义值
            if (this.data.wallet.evil > 0) {
                temp += `${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.evil]]}:${common_1.default.BN(this.data.wallet.evil)}\n`;
            }
            else {
                temp += `${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.justice]]}:${common_1.default.BN(this.data.wallet.justice)}\n`;
            }
            temp += `♥️${common_1.default.BN(this.data.hp, 1)}/${common_1.default.BN(out_attribute.hp_max, 1)}💖+${common_1.default.BN(out_attribute.secondResHp, 0)}/s\n`;
            if (out_attribute.MagicAttack > 1)
                temp += `🔮魔法攻击${common_1.default.BN(out_attribute.MagicAttack, 4)}\n`;
            if (out_attribute.MagicDefense > 1)
                temp += `🌟魔法防御${common_1.default.BN(out_attribute.MagicDefense, 4)}\n`;
            if (out_attribute.PhysicalAttacks > 1)
                temp += `🔪物理攻击${common_1.default.BN(out_attribute.PhysicalAttacks, 4)}\n`;
            if (out_attribute.PhysicalDefense > 1)
                temp += `🔰物理防御${common_1.default.BN(out_attribute.PhysicalDefense, 4)}\n`;
            temp += `┗┄━═════════━┄`;
            yield bot_1.default.sendText(channelId, temp);
        });
    }
}
exports.text_attribute_style = text_attribute_style;
