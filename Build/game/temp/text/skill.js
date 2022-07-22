"use strict";
// ￣￣￣￣￣＼技能描述／￣￣￣￣￣
// 名称:攻击失手
// 描述:顾名思义，攻击失手没打着
// 类型:主动技能
// 触发频率:10
// <emoji:147>频率≠概率,部分技能需要有特殊条件才能触发(例如:十步杀一人)
// ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_skill_style = void 0;
const __1 = require("../../..");
const common_1 = __importDefault(require("../../../shared/game/common"));
const db_1 = __importDefault(require("../../../unity/db"));
const text_style_1 = require("./text_style");
class text_skill_style {
    constructor() {
    }
    sendData(data) {
        this.data = data;
        return this;
    }
    sendMsg(channelId) {
        if (!this.data) {
            (0, __1.err)('text_skill_style 没有数据');
            return;
        }
        const info = this.data;
        let temp = new text_style_1.text_style();
        temp.setTitle(`👑技能描述`);
        temp.addLine(`Ⓜ️技能名称:${info.name}`);
        temp.addLine(`🛒${info.isSell ? '可在商店购买' : '不可在商店购买'}`);
        temp.addLine(`🌎技能来源:${db_1.default.getMapName()[info.formId]}`);
        temp.addLine(`📄效果描述:${common_1.default.getSkDesc(info)}`);
        temp.addLine(`🚀触发频率:${info.speed}`);
        temp.addLine(`<emoji:147>频率≠概率,部分技能需要有特殊条件才能触发`);
        temp.sendMsg(channelId);
    }
}
exports.text_skill_style = text_skill_style;
