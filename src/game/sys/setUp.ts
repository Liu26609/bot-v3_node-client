import { CFG_SWITCH, switch_CN } from '../../interface/guildCfg';
import { USER_CFG_MSGTEMPLATE } from '../../interface/userCfg';
import { textStyle, textStyle_CN } from '../../shared/game/setUp';
import bot from '../../unity/bot';
import db, { dbName } from '../../unity/db';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class setUp extends task_base {
    constructor(...a) {
        super(...a)
        this.render();
    }
    /**
     * ①设置机器人是否艾特全体
       ②设置机器人是否显示我方伤害日志
       ③设置机器人是否显示敌方伤害日志
       ④设置机器人挂机专属频道
    作为玩家你可以：
    ①设置机器人回复自己的文本风格
    ②设置机器人回复自己的消息是文字还是卡片
    废除api全部配置接口

     * 
     * @returns 
     */
    async menu() {
        // let req = await sever.callApi('GetUserSetUp', { userId: this.userId })
        // if (!req.isSucc) {
        //     this.sendErr(req.err)
        //     return;
        // }

        let temp = `┏┄════👑机器人设置═══━┄\n`
        //判定是频道主还是普通用户 

        if (this.isMaster()) {
            if (!this.GuildCfg.autoPassChannel_id) {
                temp += `未授权挂机专属频道:需授权的子频道艾特机器人发送[挂机]\n`;
            } else {
                temp += `已授权专属挂机频道<#${this.GuildCfg.autoPassChannel_id}>\n`;
            }
        }
        // temp += `[设置默认样式风格]目前有1种风格\n`;
        temp += `[设置消息文本模式]消息采用文本+表情发送\n`;
        temp += `[设置消息卡片模式]目前在部分PC端不会显示内容\n`;
        temp += `卡片模式目前并不推荐。也不会花大心思去做这个\n`;
        temp += `官方不给按钮权限,你可以去官方天天刷反馈。\n`;
        temp += `┗┄━══════════━┄`;

        bot.sendText(this.channel_id, temp)
    }
    notDevFunction() {
        let temp = `┏┄════👑机器人设置═══━┄\n`
        temp += `未找到功能设置[${this.content}]\n`
        temp += `①你可能少打或多打了字\n`
        temp += `②没有次功能设置,你可以联系作者定制\n`
        temp += `┗┄━══════════━┄`
        bot.sendText(this.channel_id, temp);
    }
    notPass() {
        this.log(`你没有此设置的权限~`)
    }
    render() {
        switch (this.content) {
            case '设置':
                this.menu();
                return;
            case '设置消息文本模式':
                this.UserCfg.msgTemplate = USER_CFG_MSGTEMPLATE.text
                break;
            case '设置消息卡片模式':
                this.UserCfg.msgTemplate = USER_CFG_MSGTEMPLATE.card
                break;
            case `${switch_CN[CFG_SWITCH.open]}艾特所有人权限`:
                if (!this.isMaster()) {
                    this.notPass();
                    return;
                }
                break;
            case `${switch_CN[CFG_SWITCH.close]}艾特所有人权限`:
                if (!this.isMaster()) {
                    this.notPass();
                    return;
                }
                break;
            default:
                this.notDevFunction();
                return;
        }
        db.saveDirData(dbName.UserCfg)
        this.log(`设置完成。设置会在下次@${bot.getBot_name()}生效~`)

    }
}