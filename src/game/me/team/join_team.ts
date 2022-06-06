import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { text_example_style } from '../../temp/text/example';
import { task_base } from './../../task_base';
export class join_team extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        if(this.content == this.matchKey){
            this.menu();
            return;
        }
        let code = this.content.replace(this.matchKey,'');
        sever.callApi('team/Join_team',{userId:this.userId,code:code})
    }
    menu(){
        new text_example_style().setCommand('加入工会 + 邀请码').setExample('加入工会 + 181392f77d8').sendMsg(this.channel_id);
        bot.sendText(this.channel_id,`${this.at()}🧚‍♂️邀请码需要联系工会会长获得`)
    }
}