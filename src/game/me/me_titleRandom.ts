import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { walletKey_CN, walletKey } from '../../shared/game/user';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_titleRandom extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let randomCont = this.content.replace(this.matchKey, '');
        if(this.content == this.matchKey){
            randomCont = '1';
        }

        if (isNaN(Number(randomCont))) {
            bot.sendText(this.channel_id, '🧚‍♂️提示:重置次数不能为负哦~')
            return;
        }
        if (Number(randomCont) <= 0) {
            bot.sendText(this.channel_id, '🧚‍♂️提示:重置次数不能为负哦~')
            return;
        }
        if(Number(randomCont) > 5000000){
            bot.sendText(this.channel_id, '🧚‍♂️提示:重置次数最大为500万哦~')
            return;
        }
        let req = await sever.callApi('Me_titleRandom', { userId: this.userId, randomCont: Number(randomCont) });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄════🌏重置完成═══━┄\n`;
        temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
        temp += ` ♥️最大生命+${data.bf.hp_max}➡️${data.now.hp_max}%\n`;
        temp += `🔪物理攻击+${data.bf.PhysicalAttacks}➡️${data.now.PhysicalAttacks}%\n`;
        temp += `🔰物理防御+${data.bf.PhysicalDefense}➡️${data.now.PhysicalDefense}%\n`;
        temp += `🔮魔法攻击+${data.bf.MagicAttack}➡️${data.now.MagicAttack}%\n`;
        temp += `🌟魔法防御+${data.bf.MagicDefense}➡️${data.now.MagicDefense}%\n`;
        temp += `💖每秒回复+${data.bf.secondResHp}➡️${data.now.secondResHp}%\n`;
        temp += `┗┄━${this.at()}━┄`

        bot.sendText(this.channel_id,temp)

    }
}