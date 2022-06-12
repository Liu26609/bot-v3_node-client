import { task_base }             from "../task_base";
import sever                     from "../../unity/sever";
import bot                       from "../../unity/bot";
import {rewardKey, rewardKey_CN} from "../../shared/game/prop";
import {log}                     from "../../index";

export class rank extends task_base{
    constructor(...a){
        super(...a)
        this.render().then(() => {});
    }
    async render() {
        let req = await sever.callApi('battle/Rank', {userId: this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        log('华山论剑',data)
        let temp = ``;
        let battleLog = ['', ''];
        let battleList = data.log
        for (let index = 0; index < battleList.length; index++) {
            const item = battleList[index];
            let itemLog = ''
            itemLog += item.icon + item.name;
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


        if (battleConfig.hurtLog.me) {
            let hurtLog = '';
            hurtLog += `🔥￣￣￣￣＼📄伤害统计／￣￣￣￣🔥\n`;
            hurtLog += `${battleLog[0]}`;
            await bot.sendText(this.channel_id,hurtLog)
        }
        if (battleConfig.hurtLog.enemy) {
            let hurtLog = '';
            hurtLog += `🔥￣￣￣￣＼💌敌方统计／￣￣￣￣🔥\n`;
            hurtLog += `${battleLog[1]}`;
            await bot.sendText(this.channel_id,hurtLog)
        }

        if (battleConfig.killLog.open) {
            let killLog = '';
            killLog += `￣￣￣￣￣＼🧙战斗过程／￣￣￣￣\n`;
            killLog += `<emoji:147>本次战斗共${data.battleRound}回合\n`

            for (let index = 0; index < data.kill_log.length; index++) {
                const kill_item = data.kill_log[index];
                killLog += `${kill_item.round}回合:${kill_item.body.name}击杀了${kill_item.die_body.name}\n`
            }
            await bot.sendText(this.channel_id,killLog)
        }
        temp += `￣￣￣￣￣＼🎁战斗结果／￣￣￣￣￣\n`;
        if(data.reward.length > 0){
            data.reward.forEach(item => {
                temp += `${rewardKey_CN[rewardKey[item.key]]}${item.val > 0 ? `+${item.val}` : item.val}`
            });
        }else{
            temp += `😤这次战斗好像奖励了个寂寞`
        }
        temp += `\n<emoji:147>声望值越高每天可领取奖励越高~`

        await bot.sendText(this.channel_id,temp)
    }
}