import bot from '../../unity/bot';
import { task_base } from '../task_base';
export class rank_menu extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let temp = `࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ目前可查看排行榜ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒
📑宠物等级排行榜📑强化排行榜
📑宠物数量排行榜📑签到排行榜
📑工会等级排行榜📑声望排行榜
📑称号属性排行榜📑等级排行榜
📑称号重置排行榜📑猜数排行榜
࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ目前可查看排行榜ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒`
        bot.sendText(this.channel_id,temp)
    }
}