import { text_baseAttribute_style } from './../../temp/text/baseAttribute';
import bot from '../../../unity/bot';
import common from '../../../unity/common';
import sever from '../../../unity/sever';
import { task_base } from './../../task_base';
export class me_lookPet extends task_base{
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
        let req = await sever.callApi('pet/Me_petLook',{userId:this.userId,index:index})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        new text_baseAttribute_style().sendData(data.base).setTitle(`🥚宠物属性`).sendMsg(this.channel_id);
    }
    menu(){
        let temp = ``;
        temp += `🧚‍♂️提示：查看宠物属性指令:查看宠物 + id\n`
        temp += `🌰栗子:@${bot.getBot_name()} 查看宠物0`
        bot.sendText(this.channel_id,temp)
    }
}