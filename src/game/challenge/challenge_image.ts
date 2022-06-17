import { text_example_style } from './../temp/text/example';
import { task_base } from './../task_base';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { DNA_CN, DNA_Leve } from '../../shared/game/body';
import { text_battleTemp_style } from '../temp/text/battleTemp';
export class challenge_image extends task_base {
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
        let req = await sever.callApi('battle/Challenge_image', { userId: this.userId, isStart: true });
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
            battleTemp.setHurtLotTitle_me(`┏┄════📄伤害统计═══━┄`)
            battleTemp.setHurtLotTitle_enemy(`┄════🔥敌方统计═══━┄`)


            temp += battleTemp.getSkillHurt(0);
            temp += battleTemp.getSkillHurt(1);

            temp += `┄════🧙战斗过程═══━┄\n`;
            temp += `<emoji:187>本次战斗共${data.battle.battleRound}回合\n`
            temp += battleTemp.getKillProcess();

            if (battleTemp.getReward()) {
                temp += `┏┄════🎁战斗结果═══━┄\n`;
                temp += battleTemp.getReward()
            }
            temp += `\n┗┄━${this.at()}━┄`
            await bot.sendText(this.channel_id,temp)
        }

    }
    async max() {
        bot.sendText(this.channel_id, `${this.at()}镜像挑战只能支持提升到[${DNA_CN[DNA_Leve[DNA_Leve.D]]}]
而更高级的基因锁需要挑战[破壁计划]才能做到。
为了顺利完成破壁计划,为此准备了[阶梯计划]`)
    }
    async menu() {
        let req = await sever.callApi('battle/Challenge_image', { userId: this.userId, isStart: false });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if (data.isMax) {
            this.max()
            return;
        }
        await this.log(`基因锁：将沉睡着的生命因子给启用起来，破开自身生命界限的过程。基因锁可以兼容所有力量体系，所以基因锁解放者往往有魔位面的兼修者，前三阶的基因锁是可以通过面临生命危险、死亡的恐惧中激发潜能，基因锁一旦达到四阶以上，就必然殊途同归，渐渐达到另一个生命层次，基因锁是神与识结合，二者合一方才是神。`)
        let temp = `┏┄══🎰镜像挑战══━┄\n`;
        temp += `🧚相同属性强者胜,祝君好运\n`
        temp += `💌你将挑战你的镜像,在死亡的恐惧中,激发潜能突破限制。镜像没有装备,但称号满分且基因锁为[${DNA_CN[DNA_Leve[data.imageDNALeve]]}]\n`
        temp += `┄══🌈挑战胜利══━┄\n`
        temp += `🔺基因锁将进阶为[${DNA_CN[DNA_Leve[data.nextDNA]]}]\n`
        temp += `🔺基因锁增益:全属性+${data.winAdd}%\n`
        temp += `┄══💀挑战失败══━┄\n`
        temp += `🔻等级扣除${data.failDel}级\n`
        temp += `┗┄━══════════━┄`
        bot.sendText(this.channel_id, temp);
        new text_example_style().setCommand(`挑战指令：开始${this.matchKey}`).setExample(`开始${this.matchKey}`).sendMsg(this.channel_id)
    }
}