import { text_example_style } from './../temp/text/example';
import { task_base } from './../task_base';
import bot from '../../unity/bot';
import { log } from '../..';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import sever from '../../unity/sever';
import common from '../../shared/game/common';
import { text_battleTemp_style } from '../temp/text/battleTemp';
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
            const list = element.split('>')
            for (let index = 0; index < list.length; index++) {
                const itemId = list[index];
                if(itemId && itemId.length > 10){
                    battleId.push(itemId)
                }
            }
        }
        let newArr = [...new Set(battleId)]
        if(newArr.length <= 0){
            this.menu()
            return
        }
        let req = await sever.callApi('battle/PkRank', {userId: this.userId,attackId:newArr});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        let battleTemp = new text_battleTemp_style().sendData(data)
        battleTemp.setHurtLotTitle_me(`┏┄══📄伤害统计═━┄`)
        battleTemp.setHurtLotTitle_enemy(`┄════🔥敌方统计══━┄`)


        temp += battleTemp.getSkillHurt(0);
        temp += battleTemp.getSkillHurt(1);

        temp += `┄════🧙战斗过程══━┄\n`;
        temp += `<emoji:187>本次战斗共${data.battleRound}回合\n`
        temp += battleTemp.getKillProcess();


        temp += `┏┄══🎁战斗结果═━┄\n`;
        if (battleTemp.getReward()) {
            temp += battleTemp.getReward()
        } else {
            temp += `😤这次战斗好像奖励了个寂寞`
        }
        temp += `\n┗┄━${this.at()}━┄`
        
        temp += `\n<emoji:147>声望值越高每天可领取奖励越高~`
        
        // bot.sendText(this.channel_id, `向${newArr.length}位玩家发起PK`)

        await bot.sendText(this.channel_id,temp,this.matchKey)
    }
    menu() {
        new text_example_style().setCommand('PK指令:PK + @PK的玩家').setExample('PK@玩家名').sendMsg(this.channel_id)
    }
}