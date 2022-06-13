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


            temp += `┏┄════🎁战斗结果═══━┄\n`;
            if (battleTemp.getReward()) {
                temp += battleTemp.getReward()
            } else {
                temp += `😤这次战斗好像奖励了个寂寞`
            }
            temp += `\n┗┄━${this.at()}━┄`
            await bot.sendText(this.channel_id,temp)
        }

    }
    async max() {
        bot.sendText(this.channel_id, `${this.at()}你已解开基因锁最高级[五阶中级-超脱者]，代表着挣脱束缚。
因果也好、时空也好、晶壁系也好，都无法限制超脱者。
万千多元宇宙的生灭，对超脱者来说，也不过是一场电影而已。
唯有纪元更替，足以毁灭多元宇宙的大灾难，才能够影响到超脱者。
超脱的无限是真无限，本源无限，权柄无限，规则无限，所有都无限，超越无穷，即为超脱。`)
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
        let temp = `┏┄══🎰镜像挑战══━┄\n`;
        temp += `🧚相同属性强者胜,祝君好运\n`
        temp += `💌你将挑战你的镜像,镜像没有宠物,没有装备,但称号满分,等级为${data.imageLeve}级且基因锁为[${DNA_CN[DNA_Leve[data.imageDNALeve]]}]\n`
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