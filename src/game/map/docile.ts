import { walletKey, walletKey_CN } from '../../shared/game/user';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class docile extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        if(this.content == this.matchKey){
            this.menu();
            return;
        }
        let docileIndex = Number(this.content.replace('捕捉',''));
        if(isNaN(docileIndex)){
            this.menu()
            return
        }
        let req = await sever.callApi('map/Docile',{userId:this.userId,index:Math.ceil(docileIndex)});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``
        if(data.succress){
            temp += `🎉恭喜${this.at()}！成功捕捉了一只宠物,快发送[我的宠物]看看吧~\n`
        }else{
            temp += `🙃很遗憾${this.at()}！没有捕捉到这个宠物~\n`
        }
        temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`
        bot.sendText(this.channel_id,temp)
    }
    menu(){
        let temp = ``;
        temp += `<emoji:147>提示：查看捕捉宠物指令:捕捉 + 怪物id\n`
        temp += `🌰栗子:@${bot.getBot_name()} 捕捉0`
        bot.sendText(this.channel_id,temp)
    }
}