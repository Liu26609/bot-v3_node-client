import { TsrpcErrorType } from 'tsrpc';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { walletKey, walletKey_CN } from '../../shared/game/user';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_openBlindBox extends task_base {
    constructor(...a) {
        super(...a)
        this.render();
    }
    menu() {
        let temp = `￣￣￣￣￣＼打开盲盒／￣￣￣￣￣
打开指令：打开盲盒 + 数量
如:@${bot.getBot_name()} 打开盲盒1
🧚‍♂️参与打怪，各种活动，拍卖可获得盲盒哦~
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`;
        bot.sendText(this.channel_id, temp)
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }
        let openStr = this.content.replace(this.matchKey, '');
        let openNum = Math.ceil(Number(openStr));
        if (isNaN(openNum) || openNum <= 0) {
            this.sendErr({
                message: '打开盲盒的数字不合法',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if (openNum > 1000000000000) {
            this.sendErr({
                message: '打开盲盒的数字不能超过1万亿',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        let req = await sever.callApi('Me_openBlindBox', { userId: this.userId, openNum })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;

        temp += `￣￣￣￣￣＼🎁盲盒奖励／￣￣￣￣￣\n`;
        temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`
        if (data.reward.length > 0) {
            data.reward.forEach(item => {
                temp += `${rewardKey_CN[rewardKey[item.key]]}+${item.val}\n`
            });
        }
        temp += `￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`;
        bot.sendText(this.channel_id, temp);
    }
}