import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { walletKey, walletKey_CN } from '../../shared/game/user';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_resLife extends task_base{
    constructor(...a){
        super(...a)
        this.render()
    }
    async render(){
        let req = await sever.callApi('ResLife',{userId:this.userId})
        if(!req.isSucc){
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `┏┄═════👑治疗恢复═══━┄\n`
        temp += `🔻扣除${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`
        temp += `💉为你恢复♥️${data.userRes}\n`;
        temp += `💊宠物恢复♥️${data.petRes}\n`;
        temp += `🧚‍♂️治疗完成:死亡不是终结,破产才是。\n`
        temp += `┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id,temp)
    }
}