import { TsrpcErrorType } from 'tsrpc';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_destroyBagEquip extends task_base {
    constructor(...a) {
        super(...a);
        this.render();

    }
    async render() {
        if (this.matchKey == '销毁全部装备') {
            let reqs = await sever.callApi('Me_destroyBagEquip', { userId: this.userId, destroyIndex: -1 });
            if (!reqs.isSucc) {
                this.sendErr(reqs.err)
                return;
            }
            this.log('成功销毁全部装备')
            return;
        }
        let destroyIndex = this.content.replace(this.matchKey, '');
        if (destroyIndex == '') {
            this.log('需要销毁的背包装备的ID不能为空')
            return;
        }
        if (isNaN(Number(destroyIndex))) {
            this.log('需要丢弃的背包装备的ID只能是数字')
            return;
        }
        if (Number(destroyIndex) < 0) {
            this.log('需要丢弃的背包装备的ID不能是负数')
            return;
        }
        if (Math.ceil(Number(destroyIndex)) != Number(destroyIndex)) {
            this.log('需要丢弃的背包装备的ID不能有小数点')
            return;
        }
        if (Number(destroyIndex) > 100) {
            this.log('需要丢弃的背包装备的的ID太大了')
            return;
        }
        let req = await sever.callApi('Me_destroyBagEquip', { userId: this.userId, destroyIndex: Number(destroyIndex) });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        this.log('装备已经丢弃成功')
    }
}