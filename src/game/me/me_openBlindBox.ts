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
            temp.setTitle('πζεΌη²η')
            temp.setTips('ζδ»€ζη€Ί')
            temp.addLine(`ζεΌζδ»€οΌζεΌη²η + ζ°ι`)
            temp.addLine(`ε¦:@${bot.getBot_name()} ζεΌη²η1`)
            temp.addLine(`εδΈζζͺοΌεη§ζ΄»ε¨οΌζεε―θ·εΎη²ηε¦~`)
            temp.sendMsg(this.channel_id)
        } else {
            let temp = `ββββββπζεΌη²ηββββ
ζεΌζδ»€οΌζεΌη²η + ζ°ι
ε¦:@${bot.getBot_name()} ζεΌη²η1
<emoji:147>εδΈζζͺοΌεη§ζ΄»ε¨οΌζεε―θ·εΎη²ηε¦~
ββ${this.at()}β`;

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
            this.log(`ζεΌη²ηηζ°ε­δΈεζ³`)
            return;
        }
        if (openNum > 1000000000000000000000) {
            this.log(`ζεΌη²ηηζ°ε­δΈθ½θΆθΏ1δΈδΈδΈδΊΏ`)
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
            temp.setTitle('πη²ηε₯ε±')
            temp.addLine(`π»ζΆθ${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`)
            temp.addLine(`βΆοΈθΏζ${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}`)
            if (data.reward.length > 0) {
                data.reward.forEach(item => {
                    temp.addLine(`${rewardKey_CN[rewardKey[item.key]]}+${item.val}`)
                });
            }
            temp.sendMsg(this.channel_id)
        } else {
            let temp = ``;
            temp += `ββββββπη²ηε₯ε±ββββ\n`;
            temp += `π»ζΆθ${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`
            temp += `βΆοΈθΏζ${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`
            if (data.reward.length > 0) {
                data.reward.forEach(item => {
                    temp += `${rewardKey_CN[rewardKey[item.key]]}+${item.val}\n`
                });
            }
            temp += `ββ${this.at()}β`;
            bot.sendText(this.channel_id, temp,this.content);
        }

    }
}