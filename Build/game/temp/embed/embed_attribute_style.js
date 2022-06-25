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
exports.embed_attribute_style = void 0;
const __1 = require("../../..");
const body_1 = require("../../../shared/game/body");
const team_1 = require("../../../shared/game/team");
const user_1 = require("../../../shared/game/user");
const common_1 = __importDefault(require("../../../shared/game/common"));
const embed_1 = require("./embed");
class embed_attribute_style {
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
            let embed = new embed_1.embed_style();
            const out_attribute = this.data.out_attribute;
            let temp = ``;
            embed.setTitle(this.data.title.name);
            embed.addLine(`战力:${this.data.military}`);
            embed.addLine(`🔥Lv.${this.data.leve}`);
            embed.addLine(`⏳经验${common_1.default.BN(this.data.exp, 0)}/${common_1.default.BN(this.data.exp_max, 0)}`);
            embed.addLine(`${this.data.icon}名称:${this.data.name}`);
            // temp += `<emoji:11>战力:${this.data.military}\n`
            // temp += `🔥Lv.${this.data.leve}⏳(${common.BN(this.data.exp,0)}/${common.BN(this.data.exp_max,0)})\n`;
            // temp += `${this.data.icon}名称:${this.data.name}\n`
            if (this.ancestry) {
                // temp += `👑${this.ancestry.title}\n`
                embed.addLine(`👑血统:${this.ancestry.title}`);
            }
            if (this.data.dnaLock > 0) {
                // temp += `🔒基因锁[${DNA_CN[DNA_Leve[this.data.dnaLock]]}]\n`;
                embed.addLine(`🔒基因锁[${body_1.DNA_CN[body_1.DNA_Leve[this.data.dnaLock]]}]`);
            }
            // 工会
            if (this.team) {
                // temp += `🏰${this.team.leve}级工会:${this.team.name}[${teamLeve_CN[teamLeve[this.data.team.leve]]}]\n`
                embed.addLine(`🏰${this.team.leve}级工会:${this.team.name}[${team_1.teamLeve_CN[team_1.teamLeve[this.data.team.leve]]}]`);
            }
            // temp += `⚜️声望值:${common.BN(this.data.rankscore)}`;
            embed.addLine(`⚜️声望值:${common_1.default.BN(this.data.rankscore)}`);
            // 红名值or正义值
            if (this.data.wallet.evil > 0) {
                // temp += `${walletKey_CN[walletKey[walletKey.evil]]}:${common.BN(this.data.wallet.evil)}\n`
                embed.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.evil]]}:${common_1.default.BN(this.data.wallet.evil)}`);
            }
            else {
                embed.addLine(`${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.justice]]}:${common_1.default.BN(this.data.wallet.justice)}`);
                // temp += `${walletKey_CN[walletKey[walletKey.justice]]}:${common.BN(this.data.wallet.justice)}\n`
            }
            embed.addLine(`♥️${common_1.default.BN(this.data.hp, 1)}/${common_1.default.BN(out_attribute.hp_max, 1)}`);
            embed.addLine(`💖每秒回复+${common_1.default.BN(out_attribute.secondResHp, 0)}/s`);
            // temp += `♥️${common.BN(this.data.hp, 1)}/${common.BN(out_attribute.hp_max, 1)}💖+${common.BN(out_attribute.secondResHp, 0)}/s\n`;
            if (out_attribute.MagicAttack > 1)
                embed.addLine(`🔮魔法攻击${common_1.default.BN(out_attribute.MagicAttack, 4)}`);
            if (out_attribute.MagicDefense > 1)
                embed.addLine(`🌟魔法防御${common_1.default.BN(out_attribute.MagicDefense, 4)}`);
            if (out_attribute.PhysicalAttacks > 1)
                embed.addLine(`🔪物理攻击${common_1.default.BN(out_attribute.PhysicalAttacks, 4)}`);
            if (out_attribute.PhysicalDefense > 1)
                embed.addLine(`🔰物理防御${common_1.default.BN(out_attribute.PhysicalDefense, 4)}`);
            yield embed.sendMsg(channelId);
            // temp += `┗┄━═════════━┄`
            // await bot.sendText(channelId, temp);
        });
    }
}
exports.embed_attribute_style = embed_attribute_style;
