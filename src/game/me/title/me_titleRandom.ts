import { walletKey_CN, walletKey } from '../../../shared/game/user';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
export class me_titleRandom extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let randomCont = this.content.replace(this.matchKey, '');
        if (this.content == this.matchKey) {
            randomCont = '1';
        }

        if (isNaN(Number(randomCont))) {
            this.log(`称号重置次数只能为数字`)
            return;
        }
        if (Number(randomCont) <= 0) {
            this.log(`称号重置次数不能小于0`)
            return;
        }
        if (Number(randomCont) > 5000000) {
            this.log(`重置次数最大为500万哦~`)
            return;
        }
        let req = await sever.callApi('me/title/Me_titleRandom', { userId: this.userId, randomCont: Number(randomCont) });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄═══🌈重置完成══━┄\n`;
        temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
        for (const key in data.bf) {
            let titleStr = '';
            switch (key) {
                case 'hp_max':
                    titleStr = '♥️最大生命+';
                    break;
                case 'PhysicalAttacks':
                    titleStr = '🔪物理攻击+';
                    break;
                case 'PhysicalDefense':
                    titleStr = '🔰物理防御+';
                    break;
                case 'MagicAttack':
                    titleStr = '🔮魔法攻击+';
                    break;
                case 'MagicDefense':
                    titleStr = '🌟魔法防御+';
                    break;
                case 'secondResHp':
                    titleStr = '💖每秒回复+';
                    break;
                default:
                    break;
            }
            let changeIcon = '🟢';
            if(data.now[key] == 9){
                changeIcon = '🥳';
            }else
            if(data.bf[key] > data.now[key]){
                changeIcon = '🔻';
            }else if(data.bf[key] < data.now[key]){
                changeIcon = '🔺';
            }
            temp += ` ${titleStr}${data.bf[key]}${changeIcon}${data.now[key]}%\n`;
        }
        temp += `┗┄━${this.at()}━┄`

        bot.sendText(this.channel_id, temp)

    }
}