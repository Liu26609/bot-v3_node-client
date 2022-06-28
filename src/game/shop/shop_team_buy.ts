import { USER_CFG_MSGTEMPLATE } from '../../interface/userCfg';
import { walletKey_CN, walletKey } from '../../shared/game/user';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { embed_style } from '../temp/embed/embed';
import { task_base } from './../task_base';
export class shop_team_buy extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        let req = await sever.callApi('shop/Shop_team_buy', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
            let temp = ``;
            temp += `┏┄═══🕊️购买成功══━┄\n`
            temp += `🎫工会变得更强了~\n`
            temp += `🔻消耗工会贡献x${data.pay.condition.val}\n`;
            temp += `▶️还有工会贡献x${data.pay.now}\n`;
            temp += `┗┄━══════════━┄\n`;
            bot.sendText(this.channel_id, temp, this.matchKey);
        } else {
            let temps = new embed_style();
            temps.setTitle('             🕊️购买成功')
            temps.setIcon(this.userIcon);
            temps.setTips('🎫工会变得更强了~')
            temps.addLine('<emoji:147>购买成功，祝您购物愉快~')
            temps.addLine(`🔻消耗工会贡献x${data.pay.condition.val}`)
            temps.addLine(`有工会贡献x${data.pay.now}`)
            temps.sendMsg(this.channel_id)
        }

    }
}