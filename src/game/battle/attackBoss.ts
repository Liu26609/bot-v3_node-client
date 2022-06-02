import { rewardKey, rewardKey_CN } from "../../shared/game/prop";
import bot from "../../unity/bot";
import common from "../../unity/common";
import sever from "../../unity/sever";
import { task_base } from "../task_base";

export class attackBoss extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        let req = await sever.callApi('battle/AttackBoss',{userId:this.userId})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
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

        let hurtLog = '';
        if (battleConfig.hurtLog.me) {
            hurtLog += `🔥￣￣￣￣＼📄伤害统计／￣￣￣￣🔥\n`;
            hurtLog += `${battleLog[0]}\n`;
            // await bot.sendText(this.channel_id,hurtLog)
        }
        if (battleConfig.hurtLog.enemy) {
            hurtLog += `🔥￣￣￣￣＼💌BOSS伤害／￣￣￣￣🔥\n`;
            hurtLog += `${battleLog[1]}\n`;
            // await bot.sendText(this.channel_id,hurtLog)
        }
        temp += hurtLog;

        if (battleConfig.killLog.open) {
            let killLog = '';
            killLog += `￣￣￣￣￣＼🧙战斗结果／￣￣￣￣\n`;
            if(data.isWin){

            }else{
                killLog += `💀世界BOSS在${data.battleRound}回合击杀了${this.at()}全部单位\n`
                killLog += `♥️BOSS(${((data.hp / data.hp_max)*100).toFixed(2)}%)${common.BN(data.hp)}/${common.BN(data.hp_max)}\n`
            }
            temp += killLog;
            // for (let index = 0; index < data.kill_log.length; index++) {
            //     const kill_item = data.kill_log[index];
            //     killLog += `${kill_item.round}回合:${kill_item.body.name}击杀了${kill_item.die_body.name}\n`
            // }
            // await bot.sendText(this.channel_id,killLog)
        }
        
        // temp += `\n￣￣￣￣￣＼🎁战斗结果／￣￣￣￣￣\n`;
        // if(data.reward.length > 0){
        //     data.reward.forEach(item => {
        //         temp += `${rewardKey_CN[rewardKey[item.key]]}+${item.val}`
        //     });
        // }else{
        //     temp += `😤这次战斗好像奖励了个寂寞`
        // }
        temp += `🧚‍♂️攻击boss自己会死亡，但可获得大量奖励`

        bot.sendText(this.channel_id, temp)
    }
}