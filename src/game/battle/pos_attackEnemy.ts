import { log } from '../..';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { text_battleTemp_style } from '../temp/text/battleTemp';
import { task_base } from './../task_base';
export class pos_attackEnemy extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        // 攻击怪物 =》 选择等级最低且生命最低的怪物
        // 攻击怪物 + 数字 =》 指定攻击怪物
        let attackId = 0;
        if (this.matchKey == '攻击全部怪物') {
            // 攻击全部怪物 =》 攻击全部存活的怪物
            attackId = -1;
        } else if (this.matchKey == '攻击怪物' && this.content == '攻击怪物') {
            attackId = -2;
        } else {
            let index = Number(this.content.replace('攻击怪物', ''))
            index = Math.ceil(index);
            if (index < 0 || index > 20) {
                attackId = -2;
            } else {
                attackId = index;
            }
        }

        let req = await sever.callApi('battle/PosAttackEnemy', { userId: this.userId, attackId: attackId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        let battleTemp = new text_battleTemp_style().sendData(data)
        battleTemp.setHurtLotTitle_me(`┏┄════📄伤害统计═══━┄`)
        battleTemp.setHurtLotTitle_enemy(`┄════🔥敌方统计═══━┄`)
        if(!this.UserCfg.isHideSkill_Log){
            temp += battleTemp.getSkillHurt(0);
            temp += battleTemp.getSkillHurt(1);
        }

        if(!this.UserCfg.isHideKill_Log){
            temp += `┄════🧙战斗过程═══━┄\n`;
            temp += `<emoji:187>本次战斗共${data.battleRound}回合\n`
            temp += battleTemp.getKillProcess();
        }




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