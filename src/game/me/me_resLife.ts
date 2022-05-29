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
        let temp = ``;
        temp += `┏┄════👑重生复活═══━┄\n`
        temp += `┣🔻扣除${walletKey_CN[walletKey[1]]}x0\n`
        temp += `┣🔻扣除${walletKey_CN[walletKey[2]]}x0\n`
        temp += `┣🔻扣除${walletKey_CN[walletKey[3]]}x0\n`
        temp += `🧚‍♂️复活完成:死亡不是终结,破产才是。\n`
        temp += `┗┄━══════════━┄`
        bot.sendText(this.channel_id,temp)
    }
}