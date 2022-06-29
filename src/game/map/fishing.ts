import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class fishing extends task_base{
    constructor(...a){
        super(...a)
        this.render();
    }
    async render(){
        // 开始钓鱼
        let req = await sever.callApi('map/fishing',{userId:this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `<@!${this.userId}>在这片神奇的湖泊里你钓到了${data.jin}斤的${data.fish}<emoji:293>!获得🐟️小鱼干${data.reward}`
        if(data.tips){
            bot.sendText(this.channel_id,data.tips,this.content)
        }
        bot.sendText(this.channel_id,temp,this.content)
    }
}