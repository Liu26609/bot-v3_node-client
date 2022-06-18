"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.embed_style = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
class embed_style {
    constructor() {
        this.title = '未命名';
        this.icon = '';
        this.tips = '达尔文进化岛';
        this.list = new Array();
        return this;
    }
    setTitle(title) {
        this.title = title;
    }
    setIcon(url) {
        this.icon = url;
    }
    setTips(str) {
        this.tips = str;
    }
    addLine(str) {
        this.list.push({ name: str });
    }
    sendMsg(channelId) {
        let sendObj = {
            title: this.title,
            thumbnail: {
                url: this.icon || ''
            },
            prompt: this.tips,
            fields: [...this.list]
        };
        bot_1.default.sendEmbed(channelId, sendObj);
    }
}
exports.embed_style = embed_style;
