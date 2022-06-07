"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.task_base = void 0;
const embed_1 = require("./temp/embed/embed");
const tsrpc_1 = require("tsrpc");
const bot_1 = __importDefault(require("../unity/bot"));
const common_1 = __importDefault(require("../unity/common"));
/**
 * 指令基类
 */
class task_base {
    constructor(...args) {
        this.args = args;
        this.userId = args[0];
        this.channel_id = args[1];
        this.userIcon = args[2];
        this.content = args[3];
        this.matchKey = args[4];
        this.userName = args[5];
    }
    /**
     * 艾特用户
     * @returns
     */
    at() {
        return `<@!${this.userId}>`;
    }
    log(str) {
        bot_1.default.sendText(this.channel_id, `🧚‍♂️<@!${this.userId}>${str}`);
    }
    sendErr(err) {
        let random = common_1.default.random(0, 1);
        switch (err.type) {
            case tsrpc_1.TsrpcErrorType.ApiError:
                bot_1.default.sendText(this.channel_id, `<@!${this.userId}>🧚‍♂️${err.message}`);
                break;
            case tsrpc_1.TsrpcErrorType.NetworkError:
                bot_1.default.sendText(this.channel_id, `<@!${this.userId}>🧚‍♂️服务器睡着了，正在努力叫醒中`);
                break;
            default:
                if (random) {
                    let temps = new embed_1.embed_style();
                    temps.setTitle('⚠️出错辣！');
                    temps.setTips('出大事了！！');
                    temps.addLine(`⛔︎错误代码:${err.code || '0x' + common_1.default.random(0, 99999999999).toString(16)}`);
                    temps.addLine(`🗂️错误类型:${err.type}`);
                    temps.addLine(`❌错误提示:${err.message}`);
                    temps.addLine(`🧚‍♂️如不知如何发生的错误且长时间存在请截图反馈`);
                    temps.sendMsg(this.channel_id);
                }
                else {
                    let temp = ``;
                    temp += `┏┄════⚠️错误提示═══━┄\n`;
                    temp += `┣⛔︎错误代码:${err.code || '0x' + common_1.default.random(0, 99999999999).toString(16)}\n`;
                    temp += `┣🗂️错误类型:${err.type}\n`;
                    temp += `┣┄════❌错误提示═══━┄\n`;
                    temp += `          ${err.message}\n`;
                    temp += `┗┄━═══════════━┄\n`;
                    temp += `🧚‍♂️如不知如何发生的错误且长时间存在请截图反馈`;
                    bot_1.default.sendText(this.channel_id, temp);
                }
                break;
        }
    }
}
exports.task_base = task_base;
