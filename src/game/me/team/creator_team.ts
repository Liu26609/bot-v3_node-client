import { text_length } from './../../../unity/text_length';
import { text_example_style } from './../../temp/text/example';
import bot from '../../../unity/bot';
import { task_base } from './../../task_base';
import common from '../../../shared/game/common';
import { walletKey, walletKey_CN } from '../../../shared/game/user';
import sever from '../../../unity/sever';
export class creator_team extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        // 创建工会
        if (this.content == this.matchKey) {
            this.menu()
            return;
        }
        let name = this.content.replace(this.matchKey, '');
        if (name.length <= 0) {
            this.log('工会名字不能为空哦')
            return;
        }
        let text = new text_length()
        if (text.getlength(name) > 10) {
            this.log('创建的的工会名称太长~')
            return;
        }
        let req = await sever.callApi('team/Creator_team', { userId: this.userId, name: name });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄═══🏰创建完成══━┄\n`;
        temp += `<emoji:147>成功创建工会:${name}\n`
        temp += `🔻消耗${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
        temp += `▶️还有${walletKey_CN[walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
        temp += `┗┄${this.at()}┄`
        bot.sendText(this.channel_id, temp)
    }
    menu() {
        new text_example_style().setCommand('创建工会 + 工会名').setExample('创建工会宝宝巴士').sendMsg(this.channel_id);
    }
}