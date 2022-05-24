import bot from "../../unity/bot";
import { task_base } from "../task_base";

export class baseTaskMenu extends task_base{
    constructor(...a){
        super(...a)
        this.render();
    }
    render(){
        let temp = `￣￣￣￣￣￣＼V3.X／￣￣￣￣￣￣
属性|钱包|背包|位置|设置|改名|复活
传送|钓鱼|
排行榜|拍卖行
￣￣￣￣￣￣＼功能指令／￣￣￣￣
＞我的称号　称号改名　重置称号＜
＞打开宝箱　　　　　　打开盲盒＜
＞我的宠物　　　　　　　　　　＜
＞我的血统　　　　　　重置血统＜
＞每日任务　　　　　　飞升任务＜
＞我的技能　遗忘技能　查询技能＜
＞我的装备　　　　　　强化装备＜
＞装备商店　黑心商店　技能商店＜
￣￣￣￣￣￣＼高级功能／￣￣￣￣
＞链式指令　　　　　　　　　　＜
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`;
        bot.sendText(this.channel_id,temp)
    }

}