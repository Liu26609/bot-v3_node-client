import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { textStyle } from '../../shared/game/setUp';
import { walletKey, walletKey_CN } from '../../shared/game/user';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { embed_style } from '../temp/embed/embed';
import { task_base } from '../task_base';
export class shop_rankscore_buy extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('shop/Shop_rankscore_buy',{userId:this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }

        let data = req.res;
        if(data.userCfg.textStyle == textStyle.text){
            let temp = ``;
            temp += `┏┄════🕊️购买成功═══━┄\n`
            temp += `🎫强者伴随孤独而生，弱者却在黑暗中，敲着醒钟\n`
            temp += `🔻消耗${rewardKey_CN[rewardKey[rewardKey.rankscore]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${rewardKey_CN[rewardKey[rewardKey.rankscore]]}x${data.pay.now}\n`;
            temp += `┗┄━═══════════━┄\n`;
            bot.sendText(this.channel_id,temp);
        }else if(data.userCfg.textStyle == textStyle.card){
            let temps = new embed_style();
            temps.setTitle('             🕊️购买成功')
            temps.setIcon(this.userIcon);
            temps.setTips('强者伴随孤独而生，弱者却在黑暗中，敲着醒钟')
            temps.addLine(`<emoji:147>强者伴随孤独而生，弱者却在黑暗中，敲着醒钟`)
            temps.addLine(`🔻消耗${rewardKey_CN[rewardKey[rewardKey.rankscore]]}x${data.pay.condition.val}`)
            temps.addLine(`▶️还有${rewardKey_CN[rewardKey[rewardKey.rankscore]]}x${data.pay.now}`)
            temps.sendMsg(this.channel_id)
        }
    }
}