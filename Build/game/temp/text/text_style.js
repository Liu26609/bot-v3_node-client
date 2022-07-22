"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.text_style = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
let titleSize = new Map();
class text_style {
    constructor() {
        this.title = '未命名';
        this.list = new Array();
        this.end = `┗┄━═════════━┄`;
        return this;
    }
    setTitle(title) {
        let before = '┏┄';
        let later = '';
        let safeLength = 16;
        let surplus = Math.ceil((safeLength - title.length) / 2) > 0 ? Math.ceil((safeLength - title.length) / 2) : 2;
        for (let index = 0; index < Math.ceil(surplus / 3); index++) {
            before += `═`;
            later += `═`;
        }
        later += `━┄`;
        this.title = `${before}${title}${later}`;
    }
    setEnd(end) {
        this.end = end;
    }
    addLine(str) {
        this.list.push(str);
    }
    sendMsg(channelId, triggerKey) {
        let temp = `${this.title}\n`;
        for (let index = 0; index < this.list.length; index++) {
            const item = this.list[index];
            temp += item + '\n';
        }
        temp += this.end;
        return bot_1.default.sendText(channelId, temp, triggerKey);
    }
}
exports.text_style = text_style;
