import { text_example_style } from '../temp/text/example';
import { task_base } from '../task_base';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { DNA_CN, DNA_Leve } from '../../shared/game/body';
import { text_battleTemp_style } from '../temp/text/battleTemp';
/**
 * 破壁计划
 */
export class challenge_box extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return
        }
        let isStart = this.content.replace(this.matchKey, '') == '开启';
        let isChallenge = this.content.replace(this.matchKey, '') == '挑战';

        let type = 0;
        if (isStart) {
            type = 1
        }
        if (isChallenge) {
            type = 2
        }

        if (!type) {
            this.menu();
            return
        }

        let req = await sever.callApi('battle/Challenge_box', { userId: this.userId, type: type });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

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


            temp += `┏┄══🎁战斗结果═━┄\n`;
            if (battleTemp.getReward()) {
                temp += `🎴破壁计划完成度:${data.completion}%<emoji:67>\n`
                temp += `📜累计参与人数:${data.partakeCont}人\n`
                temp += `📑累计挑战次数:${data.challengeCont}次\n`
                temp += `<emoji:224>本次战斗伤害:${data.hurt}\n`
                temp += `<emoji:298>参与奖励:${battleTemp.getReward()}`
            } else {
                temp += `🎴破壁计划完成度:${data.completion}%<emoji:67>\n`
                temp += `📜累计参与人数:${data.partakeCont}人\n`
                temp += `📑累计挑战次数:${data.challengeCont}次\n`
                temp += `<emoji:224>本次战斗伤害:${data.hurt}\n`
            }
            temp += `┗┄━${this.at()}━┄`
            await bot.sendText(this.channel_id,temp)
        }
    }

    async menu() {
        let req = await sever.callApi('battle/Challenge_box', { userId: this.userId, type: 0 });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        let temp = `┏┄══⚠️破壁计划══━┄\n`;
        temp += `⬛当全服实力足够之后，所有轮回者都将一同参与[破壁计划]摧毁盒子的障碍，去挑战盒子外的敌人。破壁计划几乎必须需要[${DNA_CN[DNA_Leve[data.openlimit]]}]级别以上才能开展\n`
        temp += `🌈挑战胜利🔺${data.win}\n`
        temp += `💀挑战失败🔻${data.fail}\n`
        temp += `⬛从开始计划若1天内没人挑战则视为失败\n`
        temp += `┗┄━═════════━┄`
        await bot.sendText(this.channel_id, temp);
        let tips = `┏@${bot.getBot_name()},输入以下指令┄
▶️开启指令：开启${this.matchKey}
▶️挑战指令：挑战${this.matchKey}
┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, tips);
    }
}