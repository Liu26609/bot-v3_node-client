"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.task_base = void 0;
const __1 = require("..");
const embed_1 = require("./temp/embed/embed");
const tsrpc_1 = require("tsrpc");
const bot_1 = __importDefault(require("../unity/bot"));
const common_1 = __importDefault(require("../shared/game/common"));
const db_1 = __importStar(require("../unity/db"));
const userCfg_1 = require("../interface/userCfg");
/**
 * 指令基类
 */
class task_base {
    constructor(...args) {
        this.args = args;
        this.userId = args[0];
        this.channel_id = args[1];
        this.userIcon = args[2] || '';
        this.content = args[3];
        this.matchKey = args[4];
        this.userName = args[5] || '匿名用户';
        this.guild = args[6];
        this.GuildCfg = db_1.default.get(db_1.dbName.GuildCfg, this.guild);
        if (!this.GuildCfg) {
            (0, __1.err)('错误：未检查到频道配置信息');
        }
        this.UserCfg = db_1.default.get(db_1.dbName.UserCfg, this.userId);
        if (!this.UserCfg) {
            (0, __1.err)('错误：未检查到用户配置信息');
        }
    }
    /**
     * 是否为频道主
     */
    isMaster() {
        return this.userId == this.GuildCfg.master;
    }
    /**
     * 艾特用户
     * @returns
     */
    at() {
        return `<@!${this.userId}>`;
    }
    log(str) {
        bot_1.default.sendText(this.channel_id, `<emoji:147><@!${this.userId}>${str}`);
    }
    sendErr(err) {
        switch (err.type) {
            case tsrpc_1.TsrpcErrorType.ApiError:
                bot_1.default.sendText(this.channel_id, `<@!${this.userId}><emoji:147>${err.message}`);
                break;
            case tsrpc_1.TsrpcErrorType.NetworkError:
                bot_1.default.sendText(this.channel_id, `<@!${this.userId}><emoji:147>服务器睡着了，正在努力叫醒中`);
                break;
            default:
                if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.text) {
                    let temp = ``;
                    temp += `┏┄════⚠️错误提示═══━┄\n`;
                    temp += `┣⛔︎错误代码:${err.code || '0x' + common_1.default.random(0, 99999999999).toString(16)}\n`;
                    temp += `┣🗂️错误类型:${err.type}\n`;
                    temp += `┣┄════❌错误提示═══━┄\n`;
                    temp += `          ${err.message}\n`;
                    temp += `┗┄━═══════════━┄\n`;
                    temp += `<emoji:147>如不知如何发生的错误且长时间存在请截图反馈`;
                    bot_1.default.sendText(this.channel_id, temp);
                }
                else {
                    let temp = new embed_1.embed_style();
                    temp.setTitle('⚠️错误提示');
                    temp.setTips('出错了。');
                    temp.addLine(`⛔︎错误代码:${err.code || '0x' + common_1.default.random(0, 99999999999).toString(16)}`);
                    temp.addLine(`🗂️错误类型:${err.type}`);
                    temp.addLine(`${err.message}`);
                    temp.addLine(`有问题截图反馈`);
                    temp.sendMsg(this.channel_id);
                }
                break;
        }
    }
}
exports.task_base = task_base;
