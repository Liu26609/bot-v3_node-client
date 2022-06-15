"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOT_EventType = void 0;
/**
 * 消息类型
 */
var BOT_EventType;
(function (BOT_EventType) {
    BOT_EventType["msg_at"] = "AT_MESSAGE_CREATE";
    BOT_EventType["msg_del"] = "PUBLIC_MESSAGE_DELETE";
    BOT_EventType["test"] = "GUILD_MESSAGE_REACTIONS";
})(BOT_EventType = exports.BOT_EventType || (exports.BOT_EventType = {}));
