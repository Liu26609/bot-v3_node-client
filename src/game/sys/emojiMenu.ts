import bot from "../../unity/bot";
import { task_base } from "../task_base";

export class emojiMenu extends task_base{
    constructor(...a){
        super(...a)
        this.render();
    }
    render(){
        let temp = `┏┄═══😀表情快捷指令══━┄
当机器人消息的指令是固定指令时
你可以在消息上添加一个表情
比如此消息代表指令[表情指令]
你可以试试在此消息上添加表情
ps:其他指令可以尝试添加表情探索
┗┄━${this.at()}━┄`;
        bot.sendText(this.channel_id,temp,'表情指令')
    }
}