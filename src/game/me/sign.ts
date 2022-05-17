import { ApiReturn } from "tsrpc";
import { log } from "../..";
import { ResSign } from "../../shared/protocols/PtlSign";
import bot from "../../unity/bot";
import sever from "../../unity/sever";

export default class sign {
    userId: string;
    channel_id: string;
    constructor(userId: string, channel_id: string) {
        this.userId = userId;
        this.channel_id = channel_id;
        sever.callApi('Sign', { userId: this.userId }).then((data) => {
            this.render(data);
        })
    }
    render(res: ApiReturn<ResSign>) {
        if (!res.isSucc) {
            bot.sendText(this.channel_id, '签到失败');
            return;
        }
        if (res.err) {
            // 
            return;
        }
        let data = res.res;
        if (data.isRepeat) {
            // 重复签到

        }
        let temp = `￣￣￣￣￣￣＼💌签到成功／￣￣￣￣￣￣
已签到:${data.addUpCont}次
签收人:<@!${this.userId}>
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
“${data.oneWord}”`
        bot.sendText(this.channel_id, temp)

    }
    repeatSign(data: ResSign) {
        let temp = `￣￣￣￣￣￣＼💌签到重复／￣￣￣￣￣￣
已签到:${data.addUpCont}次
签收人:<@!${this.userId}>
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
“${data.oneWord}”`
        bot.sendText(this.channel_id, temp)
    }
}