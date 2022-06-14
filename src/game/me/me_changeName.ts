import { text_example_style } from './../temp/text/example';
import { embed_style } from './../temp/embed/embed';
import { TsrpcErrorType } from 'tsrpc';
import bot from '../../unity/bot';
import common from '../../unity/common';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { textStyle } from '../../shared/game/setUp';
import { walletKey_CN, walletKey } from '../../shared/game/user';
import { text_length } from '../../unity/text_length';
export class me_changeName extends task_base {
    constructor(...a) {
        super(...a)
        this.render()
    }
    menu() {
        new text_example_style().setCommand('改名指令：改名 + 你的名字').setExample('改名张三').sendMsg(this.channel_id)
    }
    async render() {
        let changeName = this.content.replace(this.matchKey, '');
        if (this.content == this.matchKey) {
            this.menu()
            return;
        }
        if (changeName.length <= 0) {
            this.sendErr({
                message: '要修改的名字不能为空',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        let text = new text_length()
        if (text.getlength(changeName) > 6) {
            bot.sendText(this.channel_id, `要修改的名字太长辣！`)
            return;
        }

        let req = await sever.callApi('Me_changeName', { userId: this.userId, changeName: changeName });
        if (req.err) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if (data.userCfg.textStyle == textStyle.text) {
            let temp = ``;
            temp += `┏┄════<emoji:269>改名成功═══━┄\n`
            temp += `<emoji:322>改名前:${data.lastName}\n`;
            temp += `<emoji:301>改名后:${data.newName}\n`;
            temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            temp += `┗┄━${this.at()}━┄\n`;
            bot.sendText(this.channel_id, temp);
        } else if (data.userCfg.textStyle == textStyle.card) {
            let temps = new embed_style();
            temps.setTitle('┏┄════<emoji:269>改名成功═══━┄')
            temps.setIcon(this.userIcon);
            temps.setTips('改名成功！')
            temps.addLine(`改名前:${data.lastName}`)
            temps.addLine(`改名后:${data.newName}`)
            temps.addLine(`🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`)
            temps.addLine(`▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}`)
            temps.sendMsg(this.channel_id)
        }


    }
}