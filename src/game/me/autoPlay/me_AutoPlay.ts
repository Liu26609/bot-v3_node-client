import { walletKey, walletKey_CN } from '../../../shared/game/user';
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
        temp += `1.每战斗一次会消耗${walletKey_CN[walletKey[walletKey.driedFish]]},没有${walletKey_CN[walletKey[walletKey.driedFish]]}将自动停止挂机\n`
        temp += `2.挂机会持续与怪物战斗,如果你太弱可能会频繁死亡\n`
        temp += `3.艾特机器人5分钟内会推送挂机战斗记录\n`
        temp += `4.请在个人频道或在不打扰他人的频道开始挂机\n`
        temp += `┄═══👑指令提示══━┄\n`
        temp += `[开始挂机]开始自动挂机\n`
        temp += `[结束挂机]结束挂机打怪\n`
        temp += `┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id,temp)
    }
    /**
     * 开始自动挂机
     * @returns 
     */
    async start() {
        let req = await sever.callApi('me/autoPlay/startAutoPlay', { userId: this.userId});
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