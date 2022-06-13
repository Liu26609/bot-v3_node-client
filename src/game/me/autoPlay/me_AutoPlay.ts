import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
export class me_AutoPlay extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        if (this.content == `开始${this.matchKey}`) {
            this.start()
        } else if (this.content == `结束${this.matchKey}`) {
            this.end()
        } else {
            this.menu()
        }

    }
    menu() {
        let temp = `┏┄════挂机══━┄\n`;
        temp += `[开始挂机]开始自动挂机\n`
        temp += `1.这是一个付费功能\n`
        temp += `2.挂机会持续与你匹配等级的怪物\n`
        temp += `3.如果你太弱挂机中你可能会频繁死亡\n`
        temp += `4.挂机期间将无法进行任何指令操作\n`
        temp += `5.挂机期间艾特机器人将会发送5分钟的挂机状态推送\n`
        temp += `6.请在个人频道或不打扰他人的频道开始挂机\n`
        temp += `[结束挂机]结束挂机打怪\n`
        temp += `┗┄━══════════━┄`
        bot.sendText(this.channel_id,temp)
    }
    /**
     * 开始自动挂机
     * @returns 
     */
    async start() {
        let req = await sever.callApi('me/autoPlay/startAutoPlay', { userId: this.userId, autoLeve: 0 });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
    }
    /**
     * 结束自动挂机
     */
    async end() {
        let req = await sever.callApi('me/autoPlay/endAutoPlay', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
    }
}