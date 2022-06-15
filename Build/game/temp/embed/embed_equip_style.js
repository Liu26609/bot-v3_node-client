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
exports.embed_equip_style = void 0;
const equip_1 = require("../../../shared/game/equip");
const bot_1 = __importDefault(require("../../../unity/bot"));
const embed_1 = require("./embed");
class embed_equip_style {
    constructor() {
        return this;
    }
    setData(data) {
        this.equipData = data;
        return this;
    }
    sendMsg(channelId) {
        return __awaiter(this, void 0, void 0, function* () {
            let bot_cfg = bot_1.default.getBotConfig();
            let name = this.equipData.name;
            let leve = this.equipData.leve;
            const quality = this.equipData.quality;
            const type = this.equipData.type;
            const attribute = this.equipData.base_attribute;
            const iconId = this.equipData.icon;
            let temp = new embed_1.embed_style();
            temp.setTips('装备属性');
            temp.setIcon(`${bot_cfg.}equip/${iconId}.png`);
            temp.setTitle(`${this.equipData.story}`);
            temp.addLine(`Ⓜ️名称：${name}`);
            temp.addLine(`🔨品质：${equip_1.EQUIP_QUALITY[quality]}`);
            temp.addLine(`🔨强化：+${leve}`);
            temp.addLine(`🗂️类型：${equip_1.EQUIP_TYPE_CN[equip_1.EQUIP_TYPE[type]]}`);
            temp.addLine(`物理攻击+${attribute.PhysicalAttacks}`);
            temp.addLine(`魔法攻击+${attribute.PhysicalAttacks}`);
            temp.addLine(`物理防御+${attribute.PhysicalAttacks}`);
            temp.addLine(`魔法防御+${attribute.MagicDefense}`);
            temp.addLine(`每秒回血+${attribute.secondResHp}`);
            yield temp.sendMsg(channelId);
        });
    }
}
exports.embed_equip_style = embed_equip_style;
