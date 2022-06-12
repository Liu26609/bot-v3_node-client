import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from './../../task_base';
export class dismiss_team extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        // 解散工会
        let req = await sever.callApi('team/Dismiss_team',{userId:this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        // let temp = `<emoji:147>已解散工会`;
        // bot.sendText(this.channel_id,temp)
    }
}