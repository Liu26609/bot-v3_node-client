import { task_base }             from "../task_base";
import sever                     from "../../unity/sever";
import bot                       from "../../unity/bot";
import {rewardKey, rewardKey_CN} from "../../shared/game/prop";
import {log}                     from "../../index";
import { text_battleTemp_style } from "../temp/text/battleTemp";

export class rank extends task_base{
    constructor(...a){
        super(...a)
        this.render().then(() => {});
    }
    async render() {
        let req = await sever.callApi('battle/Rank', {userId: this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        log('华山论剑',data)
        let temp = ``;
        let battleTemp = new text_battleTemp_style().sendData(data)
        battleTemp.setHurtLotTitle_me(`┏┄══📄伤害统计═━┄`)
        battleTemp.setHurtLotTitle_enemy(`┄════🔥敌方统计══━┄`)


        temp += battleTemp.getSkillHurt(0);
        temp += battleTemp.getSkillHurt(1);

        temp += `┄════🧙战斗过程══━┄\n`;
        temp += `<emoji:187>本次战斗共${data.battleRound}回合\n`
        temp += battleTemp.getKillProcess();


        temp += `┏┄══🎁战斗结果═━┄\n`;
        if (battleTemp.getReward()) {
            temp += battleTemp.getReward()
        } else {
            temp += `😤这次战斗好像奖励了个寂寞`
        }
        temp += `\n┗┄━${this.at()}━┄`
        temp += `\n<emoji:147>声望值越高每天可领取奖励越高~`

        await bot.sendText(this.channel_id,temp)
    }
}