import { text_example_style } from '../temp/text/example';
import { task_base } from '../task_base';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { DNA_CN, DNA_Leve } from '../../shared/game/body';
import { text_battleTemp_style } from '../temp/text/battleTemp';
export class challenge_power extends task_base {
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
        let req = await sever.callApi('battle/Challenge_power', { userId: this.userId, isStart: true });
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
        bot.sendText(this.channel_id, `${this.at()}力量挑战只能支持提升到[${DNA_CN[DNA_Leve[DNA_Leve.E]]}]更高级的基因锁需要进行[强者挑战]`)
    }
    async menu() {
        let req = await sever.callApi('battle/Challenge_power', { userId: this.userId, isStart: false });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if (data.isMax) {
            this.max()
            return;
        }
        let temp = `┏┄══🎰力量挑战══━┄\n`;
        temp += `介绍:榨压身体的力量超出肉体承受的极限，就能够激发出人类的潜在能力，这便是基因锁的第一阶
世界上存在着许多奇迹，比如说那个很有名的催眠实验：
用冰冷的铁条把人烫伤，再比如老太太为了救外孙把汽车抬起来、母亲为了救坠楼的儿子百米只用五秒
但这不过是因为他们在某些情况下某些激素的快速分泌，达成了表面上违反常理的结果，就算衰竭而死也不是因为基因崩溃和潜能耗尽，只是因为自我催眠后引起的器官功能紊乱、爆发时的细胞加速分裂耗尽了人的寿命。\n`
        temp += `🧚突破常人的力量极限,破开自身生命界限,你将对木桩进行战斗(此战斗将不携带宠物),在${data.battle_round}回合内伤害达到${data.needHit}即可胜利\n`
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