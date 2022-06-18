import { rewardKey } from './../../../shared/game/prop';
import { text_example_style } from './../../temp/text/example';
import { task_base } from './../../task_base';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { rewardKey_CN } from '../../../shared/game/prop';
import { walletKey, walletKey_CN } from '../../../shared/game/user';
import common from '../../../shared/game/common';
export class lottery extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        if(this.content == this.matchKey){
            this.menu();
            return;
        }
        let guessNum = common.getNumber(this.content.replace(this.matchKey,''));
        let req = await sever.callApi('minGame/MinGame_lottery', { userId: this.userId,guessNum:guessNum });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data  = req.res;
        let temp = `┏┄══🎰猜数第${data.info.round}轮══━┄\n`;

        if(data.guessJude){
            temp += `💌恭喜！！！${this.at()} 猜对了本轮数字:${guessNum}\n`
            temp += `🧧获得奖励:${rewardKey_CN[rewardKey[rewardKey.exp]]}x${data.reward}\n`
            temp += `下一轮即将开始！请做好准备\n`
        }else{
            temp += `${this.at()}很遗憾，数字猜错了\n`
            temp += `❓数字范围[${data.info.min} - ${data.info.max}]之间\n`
            temp += `📈本轮全服已猜${data.info.guessCont}次\n`
            temp += `🧧累计奖励:${rewardKey_CN[rewardKey[rewardKey.exp]]}x${data.info.addup}\n`
            temp += `🥳上一轮赢家:${data.info.lastWin}\n`
        }
        temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
        temp += `┗┄━══════════━┄`
        bot.sendText(this.channel_id,temp)
    }
    async menu(){
        let req = await sever.callApi('minGame/MinGame_lottery', { userId: this.userId,guessNum:-1 });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄══🎰猜数第${data.info.round}轮══━┄
🏷️本轮数字还有${((data.info.endTime - Date.now()) / 1000).toFixed(3)}秒结束
❓数字范围[${data.info.min} - ${data.info.max}]之间
📈本轮全服已猜${data.info.guessCont}次
🧧累计奖励${rewardKey_CN[rewardKey[rewardKey.exp]]}x${data.info.addup}
🥳上一轮赢家:${data.info.lastWin}
┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id,temp)
        new text_example_style().setCommand('猜数指令:猜数 + 猜的数字').setExample('猜数1').sendMsg(this.channel_id);
    }
}