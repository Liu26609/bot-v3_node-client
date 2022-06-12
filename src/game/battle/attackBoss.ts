import { log } from "../..";
import { rewardKey, rewardKey_CN } from "../../shared/game/prop";
import bot from "../../unity/bot";
import common from "../../unity/common";
import sever from "../../unity/sever";
import { task_base } from "../task_base";

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
        let data = req.res;
        log(data)
        let temp = ``;

        let battleLog = ['', ''];
        let battleList = data.log
        for (let index = 0; index < battleList.length; index++) {

            const item = battleList[index];
            let itemLog = ''

            itemLog += item.icon + item.name;
            for (let index = 0; index < item.list.length; index++) {

                const free_skill = item.list[index];
                itemLog += `│▌${free_skill.name}${free_skill.val}`
            }

            itemLog += '\n';

            battleLog[item.group] += itemLog;

        }

        let battleConfig = {
            hurtLog: {
                me: true,
                enemy: true
            },
            killLog: {
                open: true,
            }
        }


        let hurtLog = '';
        if (battleConfig.hurtLog.me) {
            hurtLog += `┏┄════<emoji:223>伤害统计═══━┄\n`;
            hurtLog += `${battleLog[0]}`;
        }
        if (battleConfig.hurtLog.enemy) {
            hurtLog += `┄════<emoji:202>BOSS伤害═══━┄\n`;
            hurtLog += `${battleLog[1]}`;
        }
        temp += hurtLog;

        if (battleConfig.killLog.open) {
            let killLog = '';
            if (data.isWin) {
                killLog += `<emoji:144><emoji:144><emoji:144><emoji:144>击杀奖励<emoji:144><emoji:144><emoji:144><emoji:144>\n`;
                killLog += `${this.at()}在${data.battleRound}回合击杀了💀世界BOSS！\n`
                killLog += `<emoji:224>伤害贡献:${data.hurt}\n`
                killLog += `<emoji:295>击杀奖励:`
                if(data.reward.length > 0){
                    data.reward.forEach(item => {
                        killLog += `${rewardKey_CN[rewardKey[item.key]]}${item.val > 0?'+':''}${item.val}`
                    });
                }
                killLog += `\n`
            } else {
                killLog += `┄════<emoji:299>刮痧奖励═══━┄\n`;
                killLog += `💀世界BOSS在${data.battleRound}回合击败了${this.at()}\n`
                killLog += `<emoji:67>BOSS(${((data.hp / data.hp_max) * 100).toFixed(2)}%)${common.BN(data.hp)}/${common.BN(data.hp_max)}\n`
                killLog += `<emoji:224>伤害贡献:${data.hurt}\n`
                killLog += `<emoji:298>参与奖励:`
                if(data.reward.length > 0){
                    data.reward.forEach(item => {
                        killLog += `${rewardKey_CN[rewardKey[item.key]]}${item.val > 0?'+':''}${item.val}`
                    });
                }
                killLog += `\n`
            }
            temp += killLog;
            temp += `<emoji:147>攻击boss会死亡当可获得大量奖励\n`
            temp += `┗┄━${this.at()}━┄`
        }

        // temp += `\n￣￣￣￣￣＼🎁战斗结果／￣￣￣￣￣\n`;
        // if(data.reward.length > 0){
        //     data.reward.forEach(item => {
        //         temp += `${rewardKey_CN[rewardKey[item.key]]}+${item.val}`
        //     });
        // }else{
        //     temp += `😤这次战斗好像奖励了个寂寞`
        // }

        bot.sendText(this.channel_id, temp)
    }
}