import { embed_style } from './../temp/embed/embed';
import { TsrpcErrorType } from 'tsrpc';
import { USER_CFG_MSGTEMPLATE } from '../../interface/userCfg';
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
        if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.card) {
            let temp = new embed_style();
            temp.setIcon(this.userIcon);
            temp.setTitle('🎁打开盲盒')
            temp.setTips('指令提示')
            temp.addLine(`打开指令：打开盲盒 + 数量`)
            temp.addLine(`如:@${bot.getBot_name()} 打开盲盒1`)
            temp.addLine(`参与打怪，各种活动，拍卖可获得盲盒哦~`)
            temp.sendMsg(this.channel_id)
        } else {
            let temp = `┏┄════🎁打开盲盒══━┄
打开指令：打开盲盒 + 数量
如:@${bot.getBot_name()} 打开盲盒1
<emoji:147>参与打怪，各种活动，拍卖可获得盲盒哦~
┗┄━${this.at()}━┄`;

            bot.sendText(this.channel_id, temp)
        }

    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }
        let openStr = this.content.replace(this.matchKey, '');
        let openNum = Math.ceil(Number(openStr));
        if (isNaN(openNum) || openNum <= 0) {
            this.log(`打开盲盒的数字不合法`)
            return;
        }
        if (openNum > 1000000000000000000000) {
            this.log(`打开盲盒的数字不能超过1万万万亿`)
            return;
        }
        let req = await sever.callApi('Me_openBlindBox', { userId: this.userId, openNum })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.card) {
            let temp = new embed_style();
            temp.setIcon(this.userIcon);
            temp.setTitle('🎁盲盒奖励')
            temp.addLine(`🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`)
            temp.addLine(`▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}`)
            if (data.reward.length > 0) {
                data.reward.forEach(item => {
                    temp.addLine(`${rewardKey_CN[rewardKey[item.key]]}+${item.val}`)
                });
            }
            temp.sendMsg(this.channel_id)
        } else {
            let temp = ``;
            temp += `┏┄════🎁盲盒奖励══━┄\n`;
            temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`
            temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`
            if (data.reward.length > 0) {
                data.reward.forEach(item => {
                    temp += `${rewardKey_CN[rewardKey[item.key]]}+${item.val}\n`
                });
            }
            temp += `┗┄━${this.at()}━┄`;
            bot.sendText(this.channel_id, temp);
        }

    }
}