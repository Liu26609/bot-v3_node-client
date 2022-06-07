import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class shop_team_buy extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        let req = await sever.callApi('shop/Shop_team_buy',{userId:this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `┏┄════🕊️购买成功═══━┄\n`
        temp += `🧚‍♂️工会变得更强了~\n`
        temp += `┣┄════🏧钱包变化═══━┄\n`
        temp += `🔻消耗工会贡献x${data.pay.condition.val}\n`;
        temp += `▶️还有工会贡献x${data.pay.now}\n`;
        temp += `┗┄━═══════════━┄\n`;
        bot.sendText(this.channel_id,temp);
    }
}