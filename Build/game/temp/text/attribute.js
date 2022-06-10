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
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../unity/common"));
class text_attribute_style {
    constructor() {
    }
    sendAncestry(info) {
        this.ancestry = info;
        return this;
    }
    sendData(data) {
        this.data = data;
        return this;
    }
    sendMsg(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.data) {
                (0, __1.err)('text_attribute_style 没有数据');
                return;
            }
            // let image = `https://21-1257174510.cos.ap-nanjing.myqcloud.com/title/test.png`;
            // await bot.sendImage(channelId,image);
            const out_attribute = this.data.out_attribute;
            let temp = ``;
            temp += this.data.title.name + '\n';
            temp += `┏┄════👑属性═══━┄\n`;
            temp += `Ⓜ️名称:${this.data.name}\n`;
            if (this.ancestry) {
                temp += `👑血统${body_1.ancestryLeve[this.ancestry.leve]}级${this.ancestry.title}\n`;
            }
            temp += `🔒基因锁[${body_1.DNA_CN[body_1.DNA_Leve[this.data.dnaLock]]}]\n`;
            temp += `🔥等级:${this.data.leve}\n`;
            temp += `⏳经验:${common_1.default.BN(this.data.exp)}/${common_1.default.BN(this.data.exp_max)}\n`;
            temp += `⚜️声望值:${this.data.rankscore}\n`;
            temp += `♥️生命:${common_1.default.BN(this.data.hp)}/${common_1.default.BN(out_attribute.hp_max)}\n`;
            temp += `🔮魔法攻击:${common_1.default.BN(out_attribute.MagicAttack)}\n`;
            temp += `🌟魔法防御:${common_1.default.BN(out_attribute.MagicDefense)}\n`;
            temp += `🔪物理攻击:${common_1.default.BN(out_attribute.PhysicalAttacks)}\n`;
            temp += `🔰物理防御:${common_1.default.BN(out_attribute.PhysicalDefense)}\n`;
            temp += `💖每秒回复:${common_1.default.BN(out_attribute.secondResHp)}\n`;
            temp += `┗┄━══════════━┄`;
            yield bot_1.default.sendText(channelId, temp);
        });
    }
}
exports.text_attribute_style = text_attribute_style;
