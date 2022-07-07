import { text_example_style } from '../temp/text/example';
import { task_base } from '../task_base';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { DNA_CN, DNA_Leve } from '../../shared/game/body';
import { text_battleTemp_style } from '../temp/text/battleTemp';
import common from '../../shared/game/common';
import { rewardKey_CN, rewardKey } from '../../shared/game/prop';
export class challenge_greed extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
       

        let type = 0;
        if(this.content.replace(this.matchKey, '') == '进入'){
            type = 1;
        }else if(this.content.replace(this.matchKey, '') == '探索'){
            type = 2;
        }else if(this.content.replace(this.matchKey, '') == '结束'){
            type = 3;
        }
        if (type == 0) {
            this.menu();
            return
        }
        let req = await sever.callApi('battle/Challenge_greed', { userId: this.userId, type: type });
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

            if (battleTemp.getReward()) {
                temp += `┏┄══🎁战斗结果═━┄\n`;
                temp += battleTemp.getReward()
            }
            temp += `\n┗┄${this.at()}┄`
            await bot.sendText(this.channel_id,temp)
        }
        if(data.reward){
            let temp = `┄══🎁获得奖励═━┄\n`;
            if(data.reward && data.reward.length > 0){
                data.reward.forEach(item => {
                    temp += `${rewardKey_CN[rewardKey[item.key]]}${item.val > 0?'+':''}${common.BN(item.val)}\n`
                });
            }
            temp += `┗┄${this.at()}┄`
            await bot.sendText(this.channel_id,temp)
        }

    }
    async max() {
        bot.sendText(this.channel_id, `${this.at()}力量挑战只能支持提升到[${DNA_CN[DNA_Leve[DNA_Leve.E]]}]更高级的基因锁需要进行[强者挑战]`)
    }
    async menu() {
        let req = await sever.callApi('battle/Challenge_greed', { userId: this.userId, type: 0 });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄══🎰贪婪洞窟══━┄\n`;
        temp += `在一个隐秘角落，一名冒险者在废弃多年的矿坑中发现了大量的金子和财宝，一夜之间他收获了从未想象的财富和名声。\n`
        temp += `你将进入洞窟探索,每次探索都是未知的。可能是宝藏当也可能是可怕未知生物...\n`
        temp += `┄══🌈游戏规则══━┄\n`
        temp += `🔺每次探索可能有丰厚的奖励\n`
        temp += `🔺每次探索可能遇到强大的怪物\n`
        temp += `🔺奖励需要结束探索才能领取\n`
        temp += `🔺当探索被击杀将损失全部奖励\n`
        temp += `┄══🎁当前奖励══━┄\n`
        if (data.nowReward && data.nowReward.length > 0) {
            data.nowReward.forEach(item => {
                temp += `${rewardKey_CN[rewardKey[item.key]]}${item.val > 0 ? '+' : ''}${item.val}\n`
            });
        }else{
            temp += `🔻目前还没有累积任何奖励\n`
        }
        temp += `┗┄━═════════━┄`
        bot.sendText(this.channel_id, temp);


        let temps = ``;
        temps += `┏┄═══👑指令提示══━┄\n`;
        temps += `[进入${this.matchKey}]进入开始${this.matchKey}\n`;
        temps += `[探索${this.matchKey}]探索一次\n`;
        temps += `[结束${this.matchKey}]结束探索领取奖励\n`;
        temps += `┗┄━═════════━┄\n`;
        bot.sendText(this.channel_id,temps)
    }
}