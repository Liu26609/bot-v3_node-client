import { TsrpcError } from "tsrpc";
import bot from "../unity/bot";
import common from "../unity/common";

/**
 * 指令基类
 */
export class task_base{
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
    userIcon:string;
    /**
     * 用户艾特内容
     */
    content: string;
    /**
     * 触发指令
     */
    matchKey: string;
    userName:string;
    args:any[]
    constructor(...args){
        this.args = args;
        this.userId = args[0];
        this.channel_id = args[1];
        this.userIcon = args[2];
        this.content = args[3];
        this.matchKey = args[4];
        this.userName = args[5];
    }
    sendErr(err:TsrpcError){
        let temp = ``;
        temp += `┏┄════⚠️错误提示═══━┄\n`
        temp += `┣⛔︎错误代码:${err.code || '0x' + common.random(0,99999999999).toString(16)}\n`;
        temp += `┣🗂️错误类型:${err.type}\n`;
        temp += `┣┄════❌错误提示═══━┄\n`
        temp += `          ${err.message}\n`;
        temp += `┗┄━═══════════━┄\n`;
        temp += `🧚‍♂️如不知如何发生的错误且长时间存在请截图反馈`;
        bot.sendText(this.channel_id,temp);
    }

}