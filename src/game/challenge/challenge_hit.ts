import { rewardKey_CN } from './../../shared/game/prop';
import { text_example_style } from '../temp/text/example';
import { task_base } from '../task_base';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { DNA_CN, DNA_Leve } from '../../shared/game/body';
import { text_battleTemp_style } from '../temp/text/battleTemp';
import { taskType_CN } from '../../shared/game/taskTemp';
export class challenge_hit extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return
        }
        let isStart = this.content.replace(this.matchKey, '') == '开始';
        if (!isStart) {
            this.menu();
            return
        }
        let req = await sever.callApi('battle/Challenge_hit', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        let temp = ``;
        let battleTemp = new text_battleTemp_style().sendData(data)
        battleTemp.setHurtLotTitle_me(`┏┄══📄伤害统计═━┄`)
        battleTemp.setHurtLotTitle_enemy(`┄════🔥木桩统计══━┄`)


        temp += battleTemp.getSkillHurt(0);
        temp += battleTemp.getSkillHurt(1);

        temp += `┄════🧙战斗过程══━┄\n`;
        temp += `<emoji:187>本次战斗共${data.battleRound}回合\n`
        temp += battleTemp.getKillProcess();

        if (battleTemp.getReward()) {
            temp += `┏┄══🎁伤害奖励═━┄\n`;
            temp += battleTemp.getReward()
        }
        temp += `\n┗┄${this.at()}┄`
        await bot.sendText(this.channel_id, temp)

    }
    async menu() {
        let temp = `┏┄══🎰${taskType_CN.challenge_hit}══━┄\n`;
        temp += `💌超越自我,琳琅天上!永无止境的突破\n`
        temp += `🧚最高爆发伤害挑战,你最高能打出多少爆发伤害呢?期待你的挑战\n`
        temp += `┄══🌈挑战完成══━┄\n`
        temp += `🔺奖励造成的伤害同比${rewardKey_CN.gold}\n`
        temp += `┗┄━═════════━┄`
        bot.sendText(this.channel_id, temp);
        new text_example_style().setCommand(`挑战指令：开始${this.matchKey}`).setExample(`开始${this.matchKey}`).sendMsg(this.channel_id)
    }
}