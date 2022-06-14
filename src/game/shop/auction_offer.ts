import { auction_look } from './auction_look';
import bot from '../../unity/bot';
import common from '../../unity/common';
import { task_base } from './../task_base';
import sever from '../../unity/sever';
import { log } from '../..';
export class auction_offer extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        if (this.content == this.matchKey) {
            this.notNum();
            return;
        }

        let offerNum = Math.ceil(common.getNumber(this.content));

        if (offerNum <= 0) {
            this.notZeo();
            return;
        }

        // 服务器效验钱包是否足够支付
        let req = await sever.callApi('auction/Auction_offer',{userId:this.userId,addNum:offerNum})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }else{
            log('出价错误')
        }
        
    }
    notNum() {
        let temp = ``;
        temp += `<emoji:147>出价指令：出价 + 加价金币\n`
        temp += `🌰栗子:@${bot.getBot_name()} 出价1`
        bot.sendText(this.channel_id, temp)
        new auction_look(...this.args);
    }
    notZeo() {
        this.log(`出价好像太低了~`)
        new auction_look(...this.args);
    }
}