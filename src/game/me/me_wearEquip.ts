import { TsrpcErrorType } from 'tsrpc';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_wearEquip extends task_base {
    constructor(...a) {
        super(...a)
        this.render()
    }
    async render() {
        let wearIndex = this.content.replace(this.matchKey, '');
        if (wearIndex == '') {
            this.log('需要装备的ID不能为空')
            return;
        }
        if (isNaN(Number(wearIndex))) {
            this.log('需要装备的ID只能是数字')
            return;
        }
        if (Number(wearIndex) < 0) {
            this.log('需要装备的ID不能是负数')
            return;
        }
        if (Math.ceil(Number(wearIndex)) != Number(wearIndex)) {
            this.log('需要装备的ID不能是小数点')
            return;
        }
        if (Number(wearIndex) > 100) {
            this.log('需要装备的的ID太大了')
            return;
        }
        let req = await sever.callApi('Me_wearEquip', { userId: this.userId, wearIndex: Number(wearIndex) })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        bot.sendText(this.channel_id, '装备已成功穿戴,查看最新装备发送[我的装备]',this.content)
    }
}