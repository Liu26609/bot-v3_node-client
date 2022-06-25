import { err } from '..';
import { embed_style } from './temp/embed/embed';
import { TsrpcError, TsrpcErrorType } from "tsrpc";
import bot from "../unity/bot";
import common from "../shared/game/common";
import { guildCfg } from '../interface/guildCfg';
import db, { dbName } from '../unity/db';
import { userCfg, USER_CFG_MSGTEMPLATE } from '../interface/userCfg';

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
    /**
     * 频道ID
     */
    guild: string
    args: any[]
    /**
     * 频道配置
     */
    GuildCfg: guildCfg;
    UserCfg: userCfg;
    constructor(...args) {
        this.args = args;
        this.userId = args[0];
        this.channel_id = args[1];
        this.userIcon = args[2] || '';
        this.content = args[3];
        this.matchKey = args[4];
        this.userName = args[5] || '匿名用户';
        this.guild = args[6];
        this.GuildCfg = db.get(dbName.GuildCfg, this.guild) as guildCfg;
        if (!this.GuildCfg) {
            err('错误：未检查到频道配置信息',)
        }
        this.UserCfg = db.get(dbName.UserCfg, this.userId) as userCfg
        if (!this.UserCfg) {
            err('错误：未检查到用户配置信息',)
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
        return `<@!${this.userId}>`
    }
    log(str: string) {
        bot.sendText(this.channel_id, `<emoji:147><@!${this.userId}>${str}`)
    }
    sendErr(err: TsrpcError) {
        switch (err.type) {
            case TsrpcErrorType.ApiError:
                bot.sendText(this.channel_id, `<@!${this.userId}><emoji:147>${err.message}`);
                break;
            case TsrpcErrorType.NetworkError:
                bot.sendText(this.channel_id, `<@!${this.userId}><emoji:147>服务器睡着了，正在努力叫醒中`);
                break;
            default:
                if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
                    let temp = ``;
                    temp += `┏┄═══⚠️错误提示══━┄\n`
                    temp += `┣⛔︎错误代码:${err.code || '0x' + common.random(0, 99999999999).toString(16)}\n`;
                    temp += `┣🗂️错误类型:${err.type}\n`;
                    temp += `┣┄════❌错误提示══━┄\n`
                    temp += `          ${err.message}\n`;
                    temp += `┗┄━══════════━┄\n`;
                    temp += `<emoji:147>如不知如何发生的错误且长时间存在请截图反馈`;
                    bot.sendText(this.channel_id, temp);
                } else {
                    let temp = new embed_style();
                    temp.setTitle('⚠️错误提示');
                    temp.setTips('出错了。')
                    temp.addLine(`⛔︎错误代码:${err.code || '0x' + common.random(0, 99999999999).toString(16)}`)
                    temp.addLine(`🗂️错误类型:${err.type}`)
                    temp.addLine(`${err.message}`)
                    temp.addLine(`有问题截图反馈`)
                    temp.sendMsg(this.channel_id)
                }
                break;
        }

    }

}