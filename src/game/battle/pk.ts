import { text_example_style } from './../temp/text/example';
import { task_base } from './../task_base';
import bot from '../../unity/bot';
import { log } from '../..';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import sever from '../../unity/sever';
export class pk extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }
        let pkList = this.content.split('<@!')
        let battleId:string[] = []
        for (let index = 0; index < pkList.length; index++) {
            const element = pkList[index];
            if(element.includes('>')){
                battleId.push(element.replace('>',''))
            }
        }
        let newArr = [...new Set(battleId)]

        let req = await sever.callApi('battle/PkRank', {userId: this.userId,attackId:newArr});
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
            killLog += `🧚‍♂️本次战斗共${data.battleRound}回合\n`

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
        temp += `\n🧚‍♂️声望值越高每天可领取奖励越高~`
        
        // bot.sendText(this.channel_id, `向${newArr.length}位玩家发起PK`)

        await bot.sendText(this.channel_id,temp)
    }
    menu() {
        new text_example_style().setCommand('PK指令:PK + @PK的玩家').setExample('PK@玩家名').sendMsg(this.channel_id)
    }
}