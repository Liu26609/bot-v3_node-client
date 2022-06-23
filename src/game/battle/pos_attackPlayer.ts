import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { text_battleTemp_style } from '../temp/text/battleTemp';
import { task_base } from './../task_base';
// TODO攻击玩家 + id
export class pos_attackPlayer extends task_base {
    constructor(...a) {
        super(...a)
        this.render();
    }
    async render() {
        let attackIndex = this.content.replace(this.matchKey, '');
        if (typeof (attackIndex) == 'undefined' || attackIndex == '' || isNaN(Number(attackIndex))) {
            bot.sendText(this.channel_id, '请指定当前位置玩家的ID')
            return;
        }
        let req = await sever.callApi('battle/PosAttackPlayer', { userId: this.userId, attackId: Math.ceil(Number(attackIndex)) });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        let battleTemp = new text_battleTemp_style().sendData(data)
        battleTemp.setHurtLotTitle_me(`┏┄════📄伤害统计═══━┄`)
        battleTemp.setHurtLotTitle_enemy(`┄════🔥敌方统计═══━┄`)


        temp += battleTemp.getSkillHurt(0);
        temp += battleTemp.getSkillHurt(1);

        temp += `┄════🧙战斗过程═══━┄\n`;
        temp += `<emoji:187>本次战斗共${data.battleRound}回合\n`
        temp += battleTemp.getKillProcess();

        
        temp += `┏┄════🎁战斗结果═══━┄\n`;
        if (battleTemp.getReward()) {
            temp += battleTemp.getReward()
        } else {
            temp += `😤这次战斗好像奖励了个寂寞`
        }
        temp += `\n┗┄━${this.at()}━┄`

        temp += `\n<emoji:147>击杀怪物后地图有几率掉落宝箱哦~`

        bot.sendText(this.channel_id, temp)
    }
}