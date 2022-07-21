import bot from "../../unity/bot";
import { task_base } from "../task_base";

export class baseTaskMenu extends task_base{
    constructor(...a){
        super(...a)
        this.render();
    }
    render(){
        let pack = require('../../../package.json');
        let temp = `┏┄🏰V${pack.version}
属性|钱包|背包|位置|改名|传送
￣￣￣￣￣＼功能指令／￣￣￣￣
＞称号　　　　　　　　　进化＜
＞工会　　　　　　　　　装备＜
＞技能　　　　　　　　排行榜＜
＞任务　　　　　　　　　宠物＜
＞　　　　　　　　　　　商店＜
￣￣￣￣￣＼高级功能／￣￣￣￣
＞复读　　　　　　　　　挂机＜
＞表情指令　　　　　赞助会员＜
┗┄━═════════━┄`;
// 飞升任务
// 设置
// ＞榜上有名　　　　　　　＜
        bot.sendText(this.channel_id,temp,this.matchKey)
    }

}