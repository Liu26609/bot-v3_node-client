import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
export class userList_team extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        let req = await sever.callApi('team/UserList',{userId:this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄═══🏰工会成员══━┄\n`;
        for (let index = 0; index < data.list.length; index++) {
            const e = data.list[index];
            temp += `[${index}]Lv.${e.leve}${e.name}🌏[${e.pos.x},${e.pos.y}]\n`
        }
        temp += `┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id,temp);
    }
}