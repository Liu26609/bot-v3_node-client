import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
// TODO攻击玩家 + id
export class pos_attackPlayer extends task_base{
    constructor(...a){
        super(...a)
        this.render();
    }
    async render(){
        let attackIndex = this.content.replace(this.matchKey,'');
        if(typeof(attackIndex) == 'undefined' || attackIndex == '' || isNaN(Number(attackIndex))){
            bot.sendText(this.channel_id,'请指定当前位置玩家的ID')
            return;
        }
        let req = await sever.callApi('PosAttackPlayer',{userId:this.userId,attackId:Math.ceil(Number(attackIndex))});
        if(!req.isSucc){
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        console.log(data.kill_log)
        let temp = ``;

        let battleLog = ['', ''];
        let battleList = data.log
        for (let index = 0; index < battleList.length; index++) {

            const item = battleList[index];
            let itemLog = ''

            itemLog += '🧙' + item.name;
            for (let index = 0; index < item.list.length; index++) {

                const free_skill = item.list[index];
                itemLog += `│▌${free_skill.name}:${free_skill.val}`
            }

            itemLog += '\n';

            battleLog[item.group] += itemLog;

        }

        let battleConfig = {
            hurtLog: {
                me: true,
                enemy: true
            },
            killLog: {
                open: true,
            }
        }


        let configTemp = `频道设置
是否显示我方伤害日志：${battleConfig.hurtLog.me ? '是' : '否'}
是否显示敌方伤害日志：${battleConfig.hurtLog.enemy ? '是' : '否'}
是否显示击杀记录日志：${battleConfig.killLog.open ? '是' : '否'}`
        // bot.sendText(this.channel_id, configTemp)

        if (battleConfig.hurtLog.me) {
            let hurtLog = '';
            hurtLog += `🔥￣￣￣￣＼📄伤害统计／￣￣￣￣🔥\n`;
            hurtLog += `${battleLog[0]}\n`;
            await bot.sendText(this.channel_id,hurtLog)
        }
        if (battleConfig.hurtLog.enemy) {
            let hurtLog = '';
            hurtLog += `🔥￣￣￣￣＼💌敌方统计／￣￣￣￣🔥\n`;
            hurtLog += `${battleLog[1]}\n`;
            await bot.sendText(this.channel_id,hurtLog)
        }

        if (battleConfig.killLog.open) {
            let killLog = '';
            killLog += `￣￣￣￣￣＼🧙战斗过程／￣￣￣￣\n`;
            killLog += `🧚‍♂️本次战斗共${data.battleRound}回合\n`
            
            for (let index = 0; index < data.kill_log.length; index++) {
                const kill_item = data.kill_log[index];
                killLog += `${kill_item.round}回合:${kill_item.body.name}击杀了${kill_item.die_body.name}\n`
            }
            await bot.sendText(this.channel_id,killLog)
        }


        temp += `\n￣￣￣￣￣＼🎁战斗结果／￣￣￣￣￣\n`;
        temp += `💰金币+25⏳经验+3296⏳宠物经验+3296🌈称号经验+1✝️正义值+1`

        bot.sendText(this.channel_id, temp)
    }
}