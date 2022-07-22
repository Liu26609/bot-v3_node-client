import { task_base } from "../task_base";
import { text_example_style } from "../temp/text/example";
import { text_style } from "../temp/text/text_style";

export class callAllMsg extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    menu(){
        let temp = new text_style();
        temp.setTitle('📢全服消息')
        temp.addLine('向全服发送一条消息')
        temp.addLine('此功能只能在授权的聊天频道使用')
        temp.sendMsg(this.channel_id);
        new text_example_style().setCommand(`${this.matchKey} + 消息内容`).setExample(`${this.matchKey}嗨嗨嗨`)
    }
    async render(){
        if(this.matchKey == this.content){
            this.menu();
            return;
        }
    }
}