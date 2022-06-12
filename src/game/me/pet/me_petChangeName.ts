import bot from '../../../unity/bot';
import common from '../../../unity/common';
import sever from '../../../unity/sever';
import { text_length } from '../../../unity/text_length';
import { task_base } from '../../task_base';
export class me_petChangeName extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        if(this.content == this.matchKey){
            this.menu();
            return;
        }
        let index = common.getNumber(this.content[3])
        let name = this.content.replace(this.matchKey,'').replace(index.toString(),'');
        if(name.length <= 0){
            bot.sendText(this.channel_id,`🧚‍♂️要修改的宠物名称太短啦~`);
            return
        }
        let text = new text_length()
        if(text.getlength(name) > 4){
            bot.sendText(this.channel_id,`要修改的名字太长辣！`)
            return;
        }
        let req = await sever.callApi('pet/Me_petChangeName',{userId:this.userId,index:index,name:name})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        
        bot.sendText(this.channel_id,`🧚‍♂️宠物改名成功，快发送[查看宠物${index}]看看吧~`);
    }
    menu(){
        let temp = ``;
        temp += `🧚‍♂️提示：查看宠物改名指令:宠物改名 + id + 名字\n`
        temp += `🌰栗子:@${bot.getBot_name()} 宠物改名0小黄`
        bot.sendText(this.channel_id,temp)
    }
}