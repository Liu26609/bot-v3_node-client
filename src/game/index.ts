import { err, log } from "..";
import { BOT_MSG_AT } from "../shared/bot/bot";
import bot from "../unity/bot";
import sever from "../unity/sever";
import sign from "./me/sign";

export default class game {
    constructor() {
        
      
        this.start();
    }

    start() {
        // setInterval(()=>{
        //     this.update()
        // },1000)

        bot.setOnMsg_at((data: BOT_MSG_AT) => this.atBot(data))

    }
    /**
     * // 收到消息
     * 用户艾特机器人触发
     */
    atBot(data: BOT_MSG_AT) {
        if(data.channel_id != '1933444'){
            return;
        }
        if(!sever.isReady()){
            bot.sendText(data.channel_id,`服务器无响应,客户端ID:${bot.severId()}`);
            return;
        }
          // 分析行为
        log('收到艾特消息', data.content)
        if(data.content == '签到'){
            new sign(data.author.id,data.channel_id)
        }
    }
    // 客户端刷新单位：秒
    update() {
        log('update')
    }
}
