import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { task_base } from "../task_base";

export class addOneWord extends task_base {
    constructor(...a) {
        super(...a);
        const str = this.content.replace(this.matchKey, '')
        if (str.length == 0) {
            bot.sendText(this.channel_id, `一言收录词库：词库内容不能为空`)
            return;
        }
        sever.callApi('AddOneWord', { text: str }).then((res) => {
            if (res.isSucc) {
                bot.sendText(this.channel_id, `收录成功:当前库数量${res.res.creatorId}`)
            }
        })
    }
}