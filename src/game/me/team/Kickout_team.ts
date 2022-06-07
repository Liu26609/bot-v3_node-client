import bot from '../../../unity/bot';
import common from '../../../unity/common';
import sever from '../../../unity/sever';
import { text_example_style } from '../../temp/text/example';
import { task_base } from './../../task_base';
export class kickout_team extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        if(this.content == this.matchKey){
            this.menu();
            return;
        }
        let index = common.getNumber(this.content.replace(this.matchKey,''));
        let req = await sever.callApi('team/KicOut_team',{userId:this.userId,index:index})
        if (req.err) {
            this.sendErr(req.err)
            return;
        }
        
    }
    menu(){
        new text_example_style().setCommand('踢出成员 + 成员ID').setExample('踢出成员1').sendMsg(this.channel_id);
    }
}