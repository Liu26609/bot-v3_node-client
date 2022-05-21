import { task_base } from '../task_base';
import { ApiReturn } from "tsrpc";
import { ResSign } from "../../shared/protocols/PtlSign";
import bot from "../../unity/bot";
import sever from "../../unity/sever";
/**
 * 用户签到
 */
export default class me_sign extends task_base {
    constructor(...a) {
        super(...a)
        sever.callApi('Sign', { userId: this.userId }).then((data) => {
            this.render(data);
        })
    }
    render(res: ApiReturn<ResSign>) {
        if(!res.isSucc){
            this.sendErr(res.err)
            return;
        }
        let data = res.res;
        if (data.isRepeat) {
            // 重复签到
            this.repeatSign(data);
            return;
        }
        let temp = `￣￣￣￣￣￣＼💌签到成功／￣￣￣￣￣￣
已签到:${data.cont}次
签收人:<@!${this.userId}>
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
“${data.oneWord}”`
        bot.sendText(this.channel_id, temp)

    }
    repeatSign(data: ResSign) {
        let temp = `￣￣￣￣￣￣＼💌签到重复／￣￣￣￣￣￣
已签到:${data.cont}次
签收人:<@!${this.userId}>
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
“${data.oneWord}”`
        bot.sendText(this.channel_id, temp)
    }
}