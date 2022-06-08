import bot from '../../unity/bot';
import common from '../../unity/common';
import { task_base } from './../task_base';
// 等级排行榜
export class rank_leve extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let temp = ``;
        temp += `࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ等级排行榜ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒\n`
        for (let index = 0; index < 20; index++) {
            temp += `${common.getRankStr(index)}Lv.${10000 - index}🧚‍♂️嘉然今天吃什么\n`
        }
        temp += `࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ等级排行榜ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒`
        bot.sendText(this.channel_id,temp)
    }
}