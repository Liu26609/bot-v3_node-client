"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emojiMenu = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const task_base_1 = require("../task_base");
class emojiMenu extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        let temp = `ââðè¡¨æè¡¨æå¿«æ·æä»¤
æ­¤åè½æ­£å¨æµè¯ä¸­,ä¸ç¨³å®
å½ç»é¨ååºå®æä»¤çåè½æ·»å æ¶æ¯è¡¨ææ¶å¯å¿«æ·è§¦åæ­¤æä»¤
å½åå¯æµè¯æä»¤[ä½ç½®][æ»å»boss]ææ­¤åè½
å¨æ­¤æ¶æ¯ä¸æ·»å è¡¨æå³å¯è¿è¡å¿«æ·æä»¤
ââââââââââââââ`;
        // é£åä»»å¡
        // è®¾ç½®
        // ï¼æ¦ä¸æåãããããããï¼
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.emojiMenu = emojiMenu;
