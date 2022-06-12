import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { walletKey, walletKey_CN } from '../../shared/game/user';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_callPos extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `┏┄═════🌏传送═════━┄
┣传送指令：传送 + 坐标
┣每次传送需要${walletKey_CN[walletKey[walletKey.transferCard]]}x1
🌰栗子：传送 + 10，20(传送10,20)
<emoji:147>提示：逗号不方便？可以试试这些符号(.。,，+-!！*)
┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, temp);
    }
    async render() {
        let position = this.content.replace(this.matchKey, '');
        if(this.content == this.matchKey){
            this.menu();
            return;
        }
        let pos = this.judePositionREG(position)
        if(!pos){
            return;
        }

        let req = await sever.callApi('Me_callPos', { userId: this.userId, x:Number(pos[0]),y:Number(pos[1])})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄════🌏传送完成═══━┄\n`;
        temp += `你已传送到🌏${data.mapName}[${data.callPos.x},${data.callPos.y}]\n`;
        temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
        temp += `┗┄━${this.at()}━┄`

        bot.sendText(this.channel_id,temp)

    }
    judePositionREG(str) {
        let sendPos = str.split(',')
        if (sendPos.length != 2) {
            sendPos = str.split('，')
            if (sendPos.length != 2) {
                sendPos = str.split('.')
                if (sendPos.length != 2) {
                    sendPos = str.split('。')
                    if (sendPos.length != 2) {
                        sendPos = str.split('+')
                        if (sendPos.length != 2) {
                            sendPos = str.split('-')
                            if (sendPos.length != 2) {
                                sendPos = str.split('！')
                                if (sendPos.length != 2) {
                                    sendPos = str.split('!')
                                    if (sendPos.length != 2) {
                                        sendPos = str.split('*')
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (sendPos.length != 2) {
            return false;
        }

        // 判断坐标是否为数字
        if (isNaN(Number(sendPos[0]))) {
            // 坐标不是数字
            bot.sendText(this.channel_id,`<emoji:147>你发送的传送坐标不是一个数字噢~`)
            return false
        }
        if (isNaN(Number(sendPos[1]))) {
            // 坐标不是数字
            bot.sendText(this.channel_id,`<emoji:147>你发送的传送坐标不是一个数字噢~`)
            return false
        }

        // 判断坐标是否为负数
        if (Number(sendPos[0]) < 0 || Number(sendPos[1]) < 0) {
            // 坐标不是数字
            bot.sendText(this.channel_id,`<emoji:147>此坐标暂未开放~`)
            return false
        }

        return sendPos;
    }
}