import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { walletKey, walletKey_CN } from '../../shared/game/user';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { embed_style } from '../temp/embed/embed';
import { task_base } from '../task_base';
import { USER_CFG_MSGTEMPLATE } from '../../interface/userCfg';
export class shop_icon_buy extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('shop/Shop_icon_buy',{userId:this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }

        let data = req.res;
        if(this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text){
            let temp = ``;
            temp += `┏┄═══🕊️购买成功══━┄\n`
            temp += `🎫头像已经自动修改，祝您购物愉快~\n`
            temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            temp += `┗┄━══════════━┄\n`;
            bot.sendText(this.channel_id,temp,this.matchKey);
        }else{
            let temps = new embed_style();
            temps.setTitle('             🕊️购买成功')
            temps.setIcon(this.userIcon);
            temps.setTips('🎫头像已经自动修改，祝您购物愉快~')
            temps.addLine(`🎫头像已经自动修改，祝您购物愉快~`)
            temps.addLine(`🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`)
            temps.addLine(`▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}`)
            temps.sendMsg(this.channel_id)
        }
       
    }
}