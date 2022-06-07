import { embed_style } from './temp/embed/embed';
import { TsrpcError, TsrpcErrorType } from "tsrpc";
import bot from "../unity/bot";
import common from "../unity/common";

/**
 * 指令基类
 */
export class task_base {
    /**
     * 用户ID
     */
    userId: string;
    /**
     * 用户频道来源
     */
    channel_id: string;
    /**
     * 用户头像
     */
    userIcon: string;
    /**
     * 用户艾特内容
     */
    content: string;
    /**
     * 触发指令
     */
    matchKey: string;
    userName: string;
    args: any[]
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
    at(){
        return `<@!${this.userId}>`
    }
    log(str:string){
        bot.sendText(this.channel_id,`🧚‍♂️<@!${this.userId}>${str}`)
    }
    sendErr(err: TsrpcError) {
        let random = common.random(0, 1);
        switch (err.type) {
            case TsrpcErrorType.ApiError:
                bot.sendText(this.channel_id, `<@!${this.userId}>🧚‍♂️${err.message}`);
                break;
            case TsrpcErrorType.NetworkError:
                bot.sendText(this.channel_id, `<@!${this.userId}>🧚‍♂️服务器睡着了，正在努力叫醒中`);
                break;
            default:
                if (random) {
                    let temps = new embed_style();
                    temps.setTitle('⚠️出错辣！')
                    temps.setTips('出大事了！！')
                    temps.addLine(`⛔︎错误代码:${err.code || '0x' + common.random(0, 99999999999).toString(16)}`)
                    temps.addLine(`🗂️错误类型:${err.type}`)
                    temps.addLine(`❌错误提示:${err.message}`)
                    temps.addLine(`🧚‍♂️如不知如何发生的错误且长时间存在请截图反馈`);
                    temps.sendMsg(this.channel_id)
                } else {
                    let temp = ``;
                    temp += `┏┄════⚠️错误提示═══━┄\n`
                    temp += `┣⛔︎错误代码:${err.code || '0x' + common.random(0, 99999999999).toString(16)}\n`;
                    temp += `┣🗂️错误类型:${err.type}\n`;
                    temp += `┣┄════❌错误提示═══━┄\n`
                    temp += `          ${err.message}\n`;
                    temp += `┗┄━═══════════━┄\n`;
                    temp += `🧚‍♂️如不知如何发生的错误且长时间存在请截图反馈`;
                    bot.sendText(this.channel_id, temp);
                }
                break;
        }

    }

}