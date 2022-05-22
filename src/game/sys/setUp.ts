import { textStyle, textStyle_CN } from '../../shared/game/setUp';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class setUp extends task_base {
    constructor(...a) {
        super(...a)
        this.render();
    }
    async menu() {
        let req = await sever.callApi('GetUserSetUp',{userId:this.userId})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let str = `┏┄════👑机器人设置═══━┄\n`;
        str += `┣[消息样式]:${textStyle_CN[textStyle[data.textStyle]]}\n`;
        // str += `┣[挂机链式]:上次设置时间2022/5/22/17:47\n`;
        str += `┣┄════👑子频道设置═══━┄\n`;
        str += `┣[战斗伤害统计]:开\n`;
        str += `┣[战斗敌方统计]:开\n`;
        str += `┣[战斗过程]:开\n`;
        str += `┗┄━══════════━┄`;

        bot.sendText(this.channel_id, str)
    }
    render() {
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }
        let setKey = this.content.replace(this.matchKey, '');
        let reqKey;
        let reqVal;
        if (setKey == '消息样式文本') {
            reqKey = 'textStyle';
            reqVal = textStyle.text
        } else if (setKey == '消息样式卡片') {
            reqKey = 'textStyle';
            reqVal = textStyle.card;
        }
        if (typeof (reqKey) == 'undefined' || typeof (reqVal) == 'undefined') {
            // 判断是否为子频道设置
            bot.sendText(this.channel_id,'未开发设置');
            return;
        }
        sever.callApi('Me_setUp',{userId:this.userId,setKey:reqKey,setVal:reqVal});
        bot.sendText(this.channel_id,'设置完成');

    }
}