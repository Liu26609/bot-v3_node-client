import { text_example_style } from '../temp/text/example';
import { task_base } from '../task_base';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { DNA_CN, DNA_Leve } from '../../shared/game/body';
import { text_battleTemp_style } from '../temp/text/battleTemp';
export class challenge_downUser extends task_base {
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
        let req = await sever.callApi('battle/Challenge_downUser', { userId: this.userId, isStart: true });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if (data.isMax) {
            this.max()
            return;
        }
        if (data.battle) {
            let temp = ``;
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
            await bot.sendText(this.channel_id,temp)
        }

    }
    async max() {
        bot.sendText(this.channel_id, `${this.at()}强者挑战只能支持提升到[${DNA_CN[DNA_Leve[DNA_Leve.EE]]}]更高的基因锁需要进行[镜像挑战]`)
    }
    async menu() {
        let req = await sever.callApi('battle/Challenge_downUser', { userId: this.userId, isStart: false });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if (data.isMax) {
            this.max()
            return;
        }
        let temp = `┏┄══🎰强者挑战══━┄\n`;
        temp += `介绍:人生充满挑战！有的人，因为勇于挑战强者;有的人却安于现状败于谷底。我，要成为强者
        通过面临着生命危险、死亡的恐惧中，具有更加强大执念的人就能够激发出生物的潜在能力，这便是基因锁的第二阶段;
    将潜在力量百分之百的发挥出来。基因锁二阶的解放代表着具有超强的恢复力、力量。\n`
        temp += `🧚你将挑战6个[${DNA_CN.F}]的真实玩家,全部击败即可胜利\n`
        temp += `┄══🌈挑战胜利══━┄\n`
        temp += `🔺基因锁将进阶为[${DNA_CN[DNA_Leve[data.nextDNA]]}]\n`
        temp += `🔺基因锁增益:全属性+${data.winAdd}%\n`
        temp += `┄══💀挑战失败══━┄\n`
        temp += `🔻等级扣除${data.failDel}级\n`
        temp += `┗┄━═════════━┄`
        bot.sendText(this.channel_id, temp);
        new text_example_style().setCommand(`挑战指令：开始${this.matchKey}`).setExample(`开始${this.matchKey}`).sendMsg(this.channel_id)
    }
}