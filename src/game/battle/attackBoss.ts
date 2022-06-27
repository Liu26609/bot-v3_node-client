import { log } from "../..";
import { rewardKey, rewardKey_CN } from "../../shared/game/prop";
import bot from "../../unity/bot";
import common from "../../shared/game/common";
import sever from "../../unity/sever";
import { task_base } from "../task_base";
import { text_battleTemp_style } from "../temp/text/battleTemp";

export class attackBoss extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        let req = await sever.callApi('battle/AttackBoss', { userId: this.userId })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        log(req.res)
        let data = req.res;
        log(data)
        let temp = ``;


        let battleTemp = new text_battleTemp_style().sendData(data)


        let hurtLog = '';
        battleTemp.setHurtLotTitle_me(`┄════<emoji:223>我方伤害══━┄`)
        hurtLog += `${battleTemp.getSkillHurt(0)}`;
        battleTemp.setHurtLotTitle_enemy(`┄════<emoji:202>BOSS伤害══━┄`)
        hurtLog += `${battleTemp.getSkillHurt(1)}`;


        temp += hurtLog;

        let killLog = '';
        if (data.isWin) {
            killLog += `<emoji:144><emoji:144><emoji:144><emoji:144>击杀奖励<emoji:144><emoji:144><emoji:144><emoji:144>\n`;
            killLog += `${this.at()}在${data.battleRound}回合击杀了💀世界BOSS！\n`
            killLog += `<emoji:224>伤害贡献:${common.BN(data.hurt)}\n`
            killLog += `<emoji:295>击杀奖励::${battleTemp.getReward()}`
            killLog += `\n`
        } else {
            killLog += `┄════<emoji:299>刮痧奖励══━┄\n`;
            killLog += `💀世界BOSS在${data.battleRound}回合击败了${this.at()}\n`
            killLog += `<emoji:67>BOSS(${((data.hp / data.hp_max) * 100).toFixed(2)}%)${common.BN(data.hp)}/${common.BN(data.hp_max)}\n`
            killLog += `<emoji:224>伤害贡献:${common.BN(data.hurt)}\n`
            killLog += `<emoji:298>参与奖励:${battleTemp.getReward()}`

            killLog += `\n`
        }
        temp += killLog;
        temp += `<emoji:147>攻击boss会死亡但可获得大量奖励\n`
        temp += `┗┄━${this.at()}━┄`

        // if(data.reward.length > 0){
        //     data.reward.forEach(item => {
        //         temp += `${rewardKey_CN[rewardKey[item.key]]}+${item.val}`
        //     });
        // }else{
        //     temp += `😤这次战斗好像奖励了个寂寞`
        // }

        bot.sendText(this.channel_id, temp,this.matchKey)
    }
}