import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { text_length } from '../../../unity/text_length';
import { text_example_style } from '../../temp/text/example';
import { task_base } from './../../task_base';
export class changeName_team extends task_base {
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        if(this.content == this.matchKey){
            this.menu()
            return;
        }
        let name = this.content.replace(this.matchKey,'');
        if(name.length <= 0){
            this.log('工会名称不能为空哦')
            return;
        }
        let text = new text_length()
        if(text.getlength(name) > 10){
            this.log('要修改的工会名称太长~')
            return;
        }

        sever.callApi('team/ChangeName_team',{userId:this.userId,name:name})

    }
    menu(){
        new text_example_style().setCommand('工会改名 + 工会名').setExample('工会改名宝宝巴士').sendMsg(this.channel_id);
    }
}