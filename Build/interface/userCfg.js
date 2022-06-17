"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.USER_CFG_MSGTEMPLATE = exports.USER_CFG_TEXTSTRSTYLE = void 0;
var USER_CFG_TEXTSTRSTYLE;
(function (USER_CFG_TEXTSTRSTYLE) {
    // 默认样式
    USER_CFG_TEXTSTRSTYLE[USER_CFG_TEXTSTRSTYLE["default"] = 0] = "default";
})(USER_CFG_TEXTSTRSTYLE = exports.USER_CFG_TEXTSTRSTYLE || (exports.USER_CFG_TEXTSTRSTYLE = {}));
var USER_CFG_MSGTEMPLATE;
(function (USER_CFG_MSGTEMPLATE) {
    /**
     * 消息发送为文本
     */
    USER_CFG_MSGTEMPLATE[USER_CFG_MSGTEMPLATE["text"] = 0] = "text";
    /**
     * 消息发送为卡片
     */
    USER_CFG_MSGTEMPLATE[USER_CFG_MSGTEMPLATE["card"] = 1] = "card";
})(USER_CFG_MSGTEMPLATE = exports.USER_CFG_MSGTEMPLATE || (exports.USER_CFG_MSGTEMPLATE = {}));
