import bot from '../../unity/bot';
import common from '../../unity/common';
import sever from '../../unity/sever';
import { task_base } from '../task_base';
// 称号重置排行榜
export class rank_titleCont extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('rank/Rank_titleCont',{})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ称号重置次数排行ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒\n`
        for (let index = 0; index < data.list.length; index++) {
            let e = data.list[index]
            temp += `${common.getRankStr(index)}${e.name}🔃${e.val}次\n`
        }
        temp += `࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ称号重置次数排行ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒`
        bot.sendText(this.channel_id,temp)
    }
}