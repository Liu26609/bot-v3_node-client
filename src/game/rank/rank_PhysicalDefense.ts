import bot from '../../unity/bot';
import common from '../../unity/common';
import sever from '../../unity/sever';
import { task_base } from '../task_base';
// 等级排行榜
export class rank_PhysicalDefense extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('rank/Rank_PhysicalDefense',{userId:this.userId})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `࿐ᐖ因为太怕痛就全加物防ᐛ࿐\n`
        for (let index = 0; index < data.list.length; index++) {
            let e = data.list[index]
            temp += `${common.getRankStr(index)}🔰${common.BN(e.val)}${e.icon}${e.name}\n`
        }
        temp += `࿐ᐖ因为太怕痛就全加物防ᐛ࿐\n`
        temp += `${this.at()}我的排名${common.getRankStr(data.meIndex)}`
        bot.sendText(this.channel_id,temp)
    }
}