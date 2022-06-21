import bot from "../../unity/bot";
import { task_base } from "../task_base";

export class baseTaskMenu extends task_base{
    constructor(...a){
        super(...a)
        this.render();
    }
    render(){
        let pack = require('../../../package.json');
        let temp = `┏┄😀表情表态快捷指令
此功能正在测试中,不稳定
当给部分固定指令的功能添加消息表情时可快捷触发此指令
当前只有[攻击boss]有此功能
┗┄━══════════━┄`;
// 飞升任务
// 设置
// ＞榜上有名　　　　　　　＜
        bot.sendText(this.channel_id,temp)
    }

}