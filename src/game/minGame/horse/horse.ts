import { HORSE_STATE, HORSE_TYPE } from '../../../shared/protocols/minGame/PtlHorse';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { text_example_style } from '../../temp/text/example';
import { task_base } from './../../task_base';
export class horse extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let req = await sever.callApi('minGame/Horse', { userId: this.userId, type: HORSE_TYPE.update })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        this.log('[测试]刷新赛马状态')
        /**
         * ┏┄══🎰猜数第75轮══━┄
🏷️本轮数字还有599.999秒结束
❓数字范围[100 - 10000]之间
📈本轮全服已猜1次
🧧累计奖励⚙️强化碎片x1186
🥳上一轮赢家:黄陵
┗┄━@楚轩 ━┄
         */
    }
}