import { me_title } from './me_title';
import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { task_base } from "../task_base";
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { walletKey_CN, walletKey } from '../../shared/game/user';

export class me_titleChangeName extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let changeName = this.content.replace(this.matchKey, '');
        if(changeName.length < 1){
            this.menu()
            return;
        }
        if (changeName.length > 6) {
            bot.sendText(this.channel_id, '称号库里没有匹配到此文字长度的称号样式哦~')
            return;
        }
        let req = await sever.callApi('Me_title_changeName', { userId: this.userId, changeName: changeName });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        let temp = `┏┄════🎉改名成功═══━┄\n`;
        temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
        temp += `┗┄━══════════━┄`;
        bot.sendText(this.channel_id,temp);
        new me_title(...this.args)
    }
    menu(){
        let temp = ``;
        temp += `🧚‍♂️提示：称号改名指令[称号改名 + 修改名称]\n`
        temp += `🌰栗子:@${bot.getBot_name()} 称号改名天选之子`
        bot.sendText(this.channel_id,temp)
    }
}