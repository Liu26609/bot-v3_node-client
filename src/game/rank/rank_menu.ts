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
📑猜数欧皇排行榜📑金币排行榜
📑基因锁排行榜  📑进化排行榜
📑宠物战力排行榜📑战力排行榜
📑魔攻排行榜📑物攻排行榜
📑魔防排行榜📑物防排行榜
📑工会贡献排行榜📑生命排行榜
📑马拉松冠军排行榜📑红名排行榜
📑马拉松参与排行榜📑正义排行榜
࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ目前可查看排行榜ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒`
        bot.sendText(this.channel_id,temp,this.matchKey)
    }
}