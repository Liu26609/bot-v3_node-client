import { embed_style } from './../temp/embed/embed';
import { task_base } from "../task_base";
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { log } from '../..';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { textStyle } from '../../shared/game/setUp';
import common from '../../unity/common';
import { walletKey_CN, walletKey } from '../../shared/game/user';

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
                let tems = `┏┄🏧${this.userName}的小金库━┄\n`
                for (const key in walletKey_CN) {
                    tems += `${walletKey_CN[key]}:${common.BN(data[key])}\n`
                }
                tems += `┗┄━═${this.at()}═━┄`
                bot.sendText(this.channel_id, tems)

                break;
            case textStyle.card:
                let temp = new embed_style();
                temp.setTitle(`🏧${this.userName}的小金库`);
                temp.setTips('我的小金库')
                temp.setIcon(this.userIcon)
                temp.addLine(`${walletKey_CN[walletKey[walletKey.gold]]}:${common.BN(data.gold)}`);
                temp.addLine(`${walletKey_CN[walletKey[walletKey.BlindBox]]}:${common.BN(data.BlindBox)}`);
                temp.addLine(`${walletKey_CN[walletKey[walletKey.titleCard]]}:${common.BN(data.titleCard)}`)
                temp.addLine(`${walletKey_CN[walletKey[walletKey.changeNameCard]]}:${common.BN(data.changeNameCard)}`);
                temp.addLine(`${walletKey_CN[walletKey[walletKey.skillCard]]}:${common.BN(data.skillCard)}`);
                temp.addLine(`${walletKey_CN[walletKey[walletKey.transferCard]]}:${common.BN(data.transferCard)}`);
                temp.addLine(`${walletKey_CN[walletKey[walletKey.resLife]]}:${common.BN(data.resLife)}`);
                temp.addLine(`${walletKey_CN[walletKey[walletKey.driedFish]]}:${common.BN(data.driedFish)}`);
                temp.addLine(`${walletKey_CN[walletKey[walletKey.spiritBall]]}:${common.BN(data.spiritBall)}`);
                temp.sendMsg(this.channel_id)
                break;
            default:
                break;
        }
       


    }
}