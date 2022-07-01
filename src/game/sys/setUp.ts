import { CFG_SWITCH, switch_CN } from '../../interface/guildCfg';
import { USER_CFG_MSGTEMPLATE } from '../../interface/userCfg';
import bot from '../../unity/bot';
import db, { dbName } from '../../unity/db';
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

        let temp = `┏┄═══👑机器人设置══━┄\n`
        //判定是频道主还是普通用户 
        if (this.isMaster()) {
            temp += `此频道共计艾特:${this.GuildCfg.atCont}\n`;
            temp += `此机器人总用户:${db.getDbSize(dbName.UserCfg)}\n`;
            temp += `此机器人总频道:${db.getDbSize(dbName.GuildCfg)}\n`;
            if (!this.GuildCfg.autoPassChannel_id) {
                temp += `未授权挂机频道:授权发送[挂机]\n`;
            } else {
                temp += `已授权挂机频道<#${this.GuildCfg.autoPassChannel_id}>\n`;
            }
        }
        // temp += `[设置默认样式风格]目前有1种风格\n`;
        temp += `[设置消息(文本/卡片)模式]\n`;
        temp += `[设置(显示/不显示)地图坐标]\n`;
        temp += `[设置(显示/不显示)伤害日志]\n`;
        temp += `[设置(显示/不显示)击杀日志]\n`;
        temp += `┗┄━═════════━┄`;

        bot.sendText(this.channel_id, temp, this.content)
    }
    notDevFunction() {
        let temp = `┏┄═══👑机器人设置══━┄\n`
        temp += `未找到功能设置[${this.content}]\n`
        temp += `①你可能少打或多打了字\n`
        temp += `②没有次功能设置,你可以联系作者定制\n`
        temp += `┗┄━═════════━┄`
        bot.sendText(this.channel_id, temp, this.content);
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
            case '设置不显示地图坐标':
                this.UserCfg.isShowPos = false;
                break;
            case '设置显示地图坐标':
                this.UserCfg.isShowPos = true;
                break;
            case '设置显示伤害日志':
                this.UserCfg.isHideSkill_Log = false;
                break;
            case '设置不显示伤害日志':
                this.UserCfg.isHideSkill_Log = true;
                break;
            case '设置显示击杀日志':
                this.UserCfg.isHideKill_Log = false;
                break;
            case '设置不显示击杀日志':
                this.UserCfg.isHideKill_Log = true;
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