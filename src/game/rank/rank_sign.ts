import bot from '../../unity/bot';
import common from '../../unity/common';
import sever from '../../unity/sever';
import { task_base } from '../task_base';
// 等级排行榜
export class rank_sign extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('rank/Rank_sign',{})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ签到排行榜ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒\n`
        for (let index = 0; index < data.list.length; index++) {
            let e = data.list[index]
            temp += `${common.getRankStr(index)}💌签到${e.val}天🧚‍♂️${e.name}\n`
        }
        temp += `࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ签到排行榜ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒`
        bot.sendText(this.channel_id,temp)
    }
}