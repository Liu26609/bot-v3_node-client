import bot from "../../unity/bot";
import { task_base } from "../task_base";

export class chainTask extends task_base{
    constructor(...a){
        super(...a)
        this.render();
    }
    render(){
        let temp = `￣￣￣￣￣￣＼链式指令／￣￣￣￣￣￣
功能：能够一句话完成多个指令操作
警告:请明白每个指令会发生的后果,在不清楚游戏内容的情况请勿随意复制他人链式指令
指令：链式指令如下：
如：@我 + 签到a华山论剑a右a右a挂机
则会按顺序执行以上命令，按a分隔,指令最多可一次执行99个
每个指令需要耗时1秒，执行期间将不会执行其他操作
￣￣￣￣￣￣＼挂机指令／￣￣￣￣￣￣
你可以设置一个挂机托管功能，开启挂机将由机器人托管
如:@我 + 签到a华山论剑a右a右
系统则会在服务器空闲时间循环执行以上命令
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`
        bot.sendText(this.channel_id,temp)
    }
    
}