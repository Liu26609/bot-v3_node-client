import bot from '../../unity/bot';
import common from '../../shared/game/common';
import sever from '../../unity/sever';
import { task_base } from '../task_base';
// 无尽回廊排行榜
export class rank_Challenge_infinite extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('rank/Rank_Challenge_infinte',{userId:this.userId})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `࿐⋆⍣ᐖ无尽回廊排行榜ᐛ⍣࿐࿒\n`
        for (let index = 0; index < data.list.length; index++) {
            let e = data.list[index]
            temp += `${common.getRankStr(index)}🏴第${e.val}层${e.icon}${e.name}\n`
        }
        temp += `࿐⋆⍣ᐖ无尽回廊排行榜ᐛ⍣࿐࿒\n`
        temp += `${this.at()}我的排名${common.getRankStr(data.meIndex)}`
        bot.sendText(this.channel_id,temp,this.matchKey)
    }
}