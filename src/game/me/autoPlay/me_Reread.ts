import bot from '../../../unity/bot';
import { task_base } from './../../task_base';
export class me_Reread extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        // 复读功能
        let temp = `┏┄══人类的本质══━┄
鲁迅说过:人的本质就是复读机
现在来试试复读的快乐吧~\n`
        temp += `┄══👑指令提示═━┄\n`;
        temp += `[复读]复读一次上次的指令\n`;
        temp += `┗┄━━━━━━━━━┄\n`;
        bot.sendText(this.channel_id, temp)
    }
}