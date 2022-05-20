import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { task_base } from "../task_base";

export class addOneWrod extends task_base{
    constructor(...a){
        super(...a);
        const str = this.content.replace('一言','')
        sever.callApi('AddOneWord',{text:str}).then((res)=>{
            if(res.isSucc){
                bot.sendText(this.channel_id,`收录成功:当前库数量${res.res.creatorId}`)
            }
        })
    }
}