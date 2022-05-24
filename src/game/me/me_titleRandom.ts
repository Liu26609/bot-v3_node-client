import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
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
        let req = await sever.callApi('Me_titleRandom', { userId: this.userId, randomCont: Number(randomCont) });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄════🌏重置完成═══━┄\n`;
        temp += `🔻消耗${rewardKey_CN[rewardKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
        temp += `▶️还有${rewardKey_CN[rewardKey[data.pay.condition.key]]}x${data.pay.now}\n`;
        temp += `⚜️等级：LV.${data.title.leve}(${data.title.exp}/${data.title.leve * 10000})\n`;
        temp += ` ♥️最大生命+${data.title.attribute.hp_max}%\n`;
        temp += `🔪物理攻击+${data.title.attribute.PhysicalAttacks}%\n`;
        temp += `🔰物理防御+${data.title.attribute.PhysicalDefense}%\n`;
        temp += `🔮魔法攻击+${data.title.attribute.MagicAttack}%\n`;
        temp += `🌟魔法防御+${data.title.attribute.MagicDefense}%\n`;
        temp += `🎨拥有者:<@!${this.userId}>\n`;
        temp += `┗┄━══════════━┄`

        bot.sendText(this.channel_id,temp)

    }
}