import { log } from '../..';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class pos_attackEnemy extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        // 攻击怪物 =》 选择等级最低且生命最低的怪物
        // 攻击怪物 + 数字 =》 指定攻击怪物
        let attackId = 0;
        if (this.matchKey == '攻击全部怪物') {
            // 攻击全部怪物 =》 攻击全部存活的怪物
            attackId = -1;
        }else if(this.matchKey == '攻击怪物' && isNaN(Number(this.content.replace('攻击怪物','')))){
            attackId = -2;
        }else{
            let index = Number(this.content.replace('攻击怪物',''))
            index = Math.ceil(index);
            if(index < 0 || index > 20){
                attackId = -2;
            }else{
                attackId = index;
            }
        }

        let req = await sever.callApi('PosAttackEnemy',{userId:this.userId,attackId:attackId});
        if (!req.isSucc) {
            bot.sendText(this.channel_id,`意外的错误：\n${req.err.message}`)
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
                killLog += `${kill_item.round}回合:${kill_item.name}击杀了${kill_item.die_Name}\n`
            }
            await bot.sendText(this.channel_id,killLog)
        }


        temp += `\n￣￣￣￣￣＼🎁战斗结果／￣￣￣￣￣\n`;
        temp += `💰金币+25⏳经验+3296⏳宠物经验+3296🌈称号经验+1✝️正义值+1`

        bot.sendText(this.channel_id, temp)
    }
}