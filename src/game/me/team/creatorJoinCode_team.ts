import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from './../../task_base';
export class creatorJoinCode_team extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        let req = await sever.callApi('team/CreatorJoinCode_team', { userId: this.userId });
        if (req.err) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        await bot.sendText(this.channel_id,`请尽快发给邀请人加入\n@${bot.getBot_name()} + 邀请码 即可加入工会\n↓↓↓工会加入邀请码↓↓↓`)
        bot.sendText(this.channel_id,`加入工会${data.code}`)

    }
}