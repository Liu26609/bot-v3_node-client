import { embed_style } from './../temp/embed/embed';
import { task_base } from "../task_base";
import bot from '../../unity/bot';

export class me_wallet extends task_base {
    constructor(...a){
        super(...a)
        this.render();
    }
    render(){
        let temp = new embed_style();
        temp.setTitle(`🏧${this.userName}的钱包`);
        temp.setTips('我的钱包')
        temp.setIcon(this.userIcon)
        temp.addLine('💰️金币:5000000000');
        temp.addLine('🌈称号卡:5555')
        temp.addLine('🎁盲盒:10000');
        temp.addLine('💳改名卡:100');
        temp.addLine('🔯技能卡:10990');
        temp.addLine('🏃传送卡:10990');
        temp.addLine(`🎟深渊入场券:500`);
        temp.sendMsg(this.channel_id)
      
        
    }
}