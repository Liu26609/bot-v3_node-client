import { embed_equip_style } from './../temp/embed/embed_equip_style';
import { text_equip_style } from './../temp/text/equip';
import { TsrpcErrorType } from 'tsrpc';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_lookBag extends task_base {
    constructor(...a) {
        super(...a)
        this.render()
    }
    async render() {
        let lookIndex = this.content.replace(this.matchKey, '');
        if (lookIndex == '') {
            this.log(`查看背包装备ID不能为空`)
            return;
        }
        if (isNaN(Number(lookIndex))) {
            this.log(`查看背包装备ID只能是数字`)
            return;
        }
        if (Number(lookIndex) < 0) {
            this.log(`查看背包装备ID不能是负数`)
            return;
        }
        if (Math.ceil(Number(lookIndex)) != Number(lookIndex)) {
            this.log(`查看背包装备ID不能是小数点`)
            return;
        }
        if (Number(lookIndex) > 100) {
            this.log(`查看背包装备的ID太大了`)
            return;
        }
        let req = await sever.callApi('Me_lookBag', { userId: this.userId, lookId: Number(lookIndex) })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        new text_equip_style().setData(data).sendMsg(this.channel_id);

    }
}