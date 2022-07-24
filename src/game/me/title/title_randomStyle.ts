import { walletKey_CN, walletKey } from '../../../shared/game/user';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { me_title } from '../me_title';
import { task_base } from './../../task_base';
export class title_randomStyle extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('me/title/Title_randomStyle', { userId: this.userId})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        let temp = `┏┄═══🎉重置成功══━┄\n`;
        temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
        temp += `┗┄${this.at()}┄`;
        bot.sendText(this.channel_id,temp);
        new me_title(...this.args)
    }
}