import { embed_style } from './../temp/embed/embed';
import { task_base } from "../task_base";
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { log } from '../..';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { textStyle } from '../../shared/game/setUp';

export class me_wallet extends task_base {
    constructor(...a) {
        super(...a)
        this.render();
    }
    async render() {
        let req = await sever.callApi('Me_wallet', { userId: this.userId })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        switch (data.userCfg.textStyle) {
            case textStyle.text:
                let tems = `🏧${this.userName}的钱包\n`
                tems += `${rewardKey_CN[rewardKey[rewardKey.gold]]}:${data.gold}\n`
                tems += `${rewardKey_CN[rewardKey[rewardKey.BlindBox]]}:${data.gold}\n`
                tems += `${rewardKey_CN[rewardKey[rewardKey.titleCard]]}:${data.gold}\n`
                tems += `${rewardKey_CN[rewardKey[rewardKey.changeNameCard]]}:${data.gold}\n`
                tems += `${rewardKey_CN[rewardKey[rewardKey.skillCard]]}:${data.gold}\n`
                tems += `${rewardKey_CN[rewardKey[rewardKey.transferCard]]}:${data.gold}\n`
                tems += `${rewardKey_CN[rewardKey[rewardKey.resLife]]}:${data.resLife}`
                bot.sendText(this.channel_id, tems)

                break;
            case textStyle.card:
                let temp = new embed_style();
                temp.setTitle(`🏧${this.userName}的钱包`);
                temp.setTips('我的钱包')
                temp.setIcon(this.userIcon)
                temp.addLine(`${rewardKey_CN[rewardKey[rewardKey.gold]]}:${data.gold}`);
                temp.addLine(`${rewardKey_CN[rewardKey[rewardKey.BlindBox]]}:${data.BlindBox}`);
                temp.addLine(`${rewardKey_CN[rewardKey[rewardKey.titleCard]]}:${data.titleCard}`)
                temp.addLine(`${rewardKey_CN[rewardKey[rewardKey.changeNameCard]]}:${data.changeNameCard}`);
                temp.addLine(`${rewardKey_CN[rewardKey[rewardKey.skillCard]]}:${data.skillCard}`);
                temp.addLine(`${rewardKey_CN[rewardKey[rewardKey.transferCard]]}:${data.transferCard}`);
                temp.addLine(`${rewardKey_CN[rewardKey[rewardKey.resLife]]}:${data.resLife}`);
                temp.sendMsg(this.channel_id)
                break;
            default:
                break;
        }
       


    }
}