import { log } from '../../..';
import { walletKey, walletKey_CN } from '../../../shared/game/user';
import bot from '../../../unity/bot';
import common from '../../../shared/game/common';
import sever from '../../../unity/sever';
import { text_length } from '../../../unity/text_length';
import { task_base } from '../../task_base';
export class me_petChangeName extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }
        let index = common.getNumber(this.content[4])
        if (!isNaN(Number(this.content[5]))) {
            index = common.getNumber(`${this.content[4]}${this.content[5]}`)
        }
        let name = this.content.replace(this.matchKey, '').replace(index.toString(), '');
        if (name.length <= 0) {
            this.log(`要修改的宠物名称太短啦~`)
            return
        }
        let text = new text_length()
        if (text.getlength(name) > 4) {
            this.log(`要修改的名字太长了！~`)
            return;
        }
        let req = await sever.callApi('pet/Me_petChangeName', { userId: this.userId, index: index, name: name })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄════👑改名成功═══━┄\n`
        temp += `🌰宠物改名成功，快发送[查看宠物${index}]看看吧~`
        temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
        temp += `┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, temp);
    }
    menu() {
        let temp = ``;
        temp += `<emoji:147>提示：查看宠物改名指令:宠物改名 + ID + 名字\n`
        temp += `🌰栗子:@${bot.getBot_name()} 宠物改名0小黄`
        bot.sendText(this.channel_id, temp)
    }
}