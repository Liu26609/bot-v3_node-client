import bot from '../../../unity/bot';
import common from '../../../unity/common';
import sever from '../../../unity/sever';
import { task_base } from './../../task_base';
export class me_petRm extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        if(this.content == this.matchKey){
            this.menu();
            return;
        }
        let index = Math.ceil(common.getNumber(this.content.replace(this.matchKey,'')))
        let req = await sever.callApi('pet/Me_petRm',{userId:this.userId,index:index});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        bot.sendText(this.channel_id,`<emoji:147>你的宠物屁颠屁颠的走了~`)
    }
    menu(){
        let temp = ``;
        temp += `<emoji:147>提示：查看宠物放生指令:宠物放生 + id\n`
        temp += `🌰栗子:@${bot.getBot_name()} 宠物放生0`
        bot.sendText(this.channel_id,temp)
    }
}