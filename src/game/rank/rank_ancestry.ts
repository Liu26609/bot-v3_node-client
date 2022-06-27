import { ancestryLeve, DNA_CN, DNA_Leve } from '../../shared/game/body';
import bot from '../../unity/bot';
import common from '../../shared/game/common';
import sever from '../../unity/sever';
import { task_base } from '../task_base';
// 等级排行榜
export class rank_ancestry extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('rank/Rank_ancestry',{userId:this.userId})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ进化金字塔ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒\n`
        for (let index = 0; index < data.list.length; index++) {
            let e = data.list[index]
            temp += `${common.getRankStr(index)}${e.icon}(${ancestryLeve[e.val]}级)${e.name}\n`
        }
        temp += `࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ进化金字塔ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒\n`
        temp += `${this.at()}我的排名${common.getRankStr(data.meIndex)}`
        bot.sendText(this.channel_id,temp,this.matchKey)
    }
}