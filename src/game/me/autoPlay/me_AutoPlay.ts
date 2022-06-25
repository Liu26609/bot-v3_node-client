import { guildCfg } from '../../../interface/guildCfg';
import { walletKey, walletKey_CN } from '../../../shared/game/user';
import bot from '../../../unity/bot';
import db, { dbName } from '../../../unity/db';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
export class me_AutoPlay extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        if(!this.checkGuildPass()){
            return;
        }
        if (this.content == `开始${this.matchKey}`) {
            this.start();
        } else if (this.content == `结束${this.matchKey}`) {
            this.end();
        } else {
            this.menu();
        }
    }
    /**
     * 检测频道主是否授权了此频道
     */
    checkGuildPass() {
        let pass = false;
        if (!this.GuildCfg) {
            console.log('频道主还没有授权一个挂机子频道');
            // 频道主还没有授权一个挂机子频道
            this.notPassMenu()
            if (!this.GuildCfg) {
                db.create(dbName.GuildCfg, this.guild, { autoPassChannel_id: '' })
            }
            return pass;
        }
        if (this.GuildCfg) {
            if (this.isMaster() && this.content == this.matchKey) {
                console.log('主人授权');
                this.GuildCfg.autoPassChannel_id = this.channel_id;
                this.passAutoChannel();
                pass = true;
                return pass;
            }
            if (this.GuildCfg.autoPassChannel_id != this.channel_id) {
                console.log('未授权');
                this.notPassMenu();
                return pass;
            }
            pass = true;
        }
        return pass;
    }
    passAutoChannel() {
        this.log(`已将挂机频道授权至<#${this.channel_id}>,现在挂机推送和开始挂机将只能在此子频道进行。`)
    }
    notPassMenu() {
        let temp = `┏┄═挂机子频道未授权━┄\n`;
        temp += `1.挂机会发送大量消息\n`
        temp += `2.建议单独新建一个挂机专属子频道\n`
        
        if(this.GuildCfg){
            if(this.GuildCfg.master){
                temp += `3.此功能需要<@${this.GuildCfg.master}>来授权开启\n`
            }else{
                temp += `3.此功能需要频道主授权开启。请艾特频道主前来授权\n`
            }
            if(this.GuildCfg.autoPassChannel_id != ''){
                temp += `4.你可以直接前往已授权频道<#${this.GuildCfg.autoPassChannel_id}>开始挂机,如果无法点击则已经被删除需要重新授权\n`
            }
        }
        temp += `┄═══👑授权指令══━┄\n`
        temp += `频道主在需要授权的子频道@${bot.getBot_name()} + [挂机]即可\n`
        temp += `┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, temp)
    }
    menu() {
        let temp = `┏┄═══挂机══━┄\n`;
        temp += `1.每战斗一次会消耗${walletKey_CN[walletKey[walletKey.driedFish]]},没有${walletKey_CN[walletKey[walletKey.driedFish]]}将自动停止挂机\n`
        temp += `2.挂机会持续与怪物战斗,如果你太弱可能会频繁死亡\n`
        temp += `3.艾特机器人5分钟内会推送挂机战斗记录\n`
        temp += `4.请在个人频道或在不打扰他人的频道开始挂机\n`
        temp += `┄═══👑指令提示══━┄\n`
        temp += `[开始挂机]开始自动挂机\n`
        temp += `[结束挂机]结束挂机打怪\n`
        temp += `┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, temp)
        /**
         * 1.查看是否频道主授权了指定子频道
         * 2.检测子频道是否存在
         * 3.开始定向挂机
         * 
         */
    }
    /**
     * 开始自动挂机
     * @returns 
     */
    async start() {
        if (!this.checkGuildPass()) {
            return;
        }
        let req = await sever.callApi('me/autoPlay/startAutoPlay', { userId: this.userId,channel_id:this.channel_id});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
    }
    /**
     * 结束自动挂机
     */
    async end() {
        let req = await sever.callApi('me/autoPlay/endAutoPlay', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
    }
}