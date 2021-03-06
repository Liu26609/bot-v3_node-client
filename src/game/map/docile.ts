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
        let docileIndex = Number(this.content.replace('ææ',''));
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
            temp += `ðæ­å${this.at()}ï¼æåææäºä¸åªå® ç©,å¿«åé[æçå® ç©]ççå§~\n`
        }else{
            temp += `ðå¾éæ¾${this.at()}ï¼æ²¡æææå°è¿ä¸ªå® ç©\nå½ä½ ç­çº§æ¯æªç©é«æ¶ææå¯è½æå°å¦~\n`
        }
        temp += `ð»æ¶è${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`
        temp += `â¶ï¸è¿æ${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`
        bot.sendText(this.channel_id,temp,this.content)
    }
    menu(){
        let temp = ``;
        temp += `<emoji:147>æç¤ºï¼æ¥çææå® ç©æä»¤:ææ + æªç©id\n`
        temp += `ð°æ å­:@${bot.getBot_name()} ææ0`
        bot.sendText(this.channel_id,temp,this.content)
    }
}