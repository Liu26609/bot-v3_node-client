import { userCfg } from './../../interface/userCfg';
import { text_example_style } from '../temp/text/example';
import { task_base } from '../task_base';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { DNA_CN, DNA_Leve } from '../../shared/game/body';
import { text_battleTemp_style } from '../temp/text/battleTemp';
export class challenge_infinite extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return
        }
        let isStart = this.content.replace(this.matchKey, '') == '挑战';
        if (!isStart) {
            this.menu();
            return
        }
        let req = await sever.callApi('battle/Challenge_infinite', { userId: this.userId, isStart: true });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        if (data.battle) {
            let temp = ``;
            this.UserCfg
            let battleTemp = new text_battleTemp_style().sendData(data.battle)
            battleTemp.setHurtLotTitle_me(`┏┄══📄伤害统计═━┄`)
            battleTemp.setHurtLotTitle_enemy(`┄════🔥敌方统计══━┄`)


            temp += battleTemp.getSkillHurt(0);
            temp += battleTemp.getSkillHurt(1);

            temp += `┄════🧙战斗过程══━┄\n`;
            temp += `<emoji:187>本次战斗共${data.battle.battleRound}回合\n`
            temp += battleTemp.getKillProcess();

            if (battleTemp.getReward()) {
                temp += `┏┄══🎁战斗结果═━┄\n`;
                temp += battleTemp.getReward()
            }
            temp += `\n┗┄${this.at()}┄`
            await bot.sendText(this.channel_id, temp)
        }

    }

    async menu() {
        let req = await sever.callApi('battle/Challenge_infinite', { userId: this.userId, isStart: false });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        let temp = `┏┄══🎰无尽回廊══━┄\n`;
        temp += `“你不想知道第${data.layers}层回廊的尽头的有什么吗？”\n`
        temp += `你不好奇吗？\n`
        temp += `变强突破吧，也许下一层会有你想要……\n`
        temp += `🧚每一层的难度都会比上一层更强。\n`
        temp += `┄══🌈挑战胜利══━┄\n`
        temp += `🔺回廊层数+1\n`
        temp += `🔺一切皆有可能的未知奖励\n`
        temp += `┗┄━═════════━┄`
        bot.sendText(this.channel_id, temp);
        new text_example_style().setCommand(`挑战指令：挑战${this.matchKey}`).setExample(`挑战${this.matchKey}`).sendMsg(this.channel_id)
    }
}