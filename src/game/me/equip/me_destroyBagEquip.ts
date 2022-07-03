import { TsrpcErrorType } from 'tsrpc';
import { rewardKey, rewardKey_CN } from '../../../shared/game/prop';
import { ResMe_destroyBagEquip } from '../../../shared/protocols/me/equip/PtlMe_destroyBagEquip';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
export class me_destroyBagEquip extends task_base {
    constructor(...a) {
        super(...a);
        this.render();

    }
    destroyEnd(data:ResMe_destroyBagEquip){
        let temp = `┏┄══<emoji:173>分解完成══━┄\n`
        if (data.reward && data.reward.length > 0) {
            data.reward.forEach(item => {
                temp += `${rewardKey_CN[rewardKey[item.key]]}+${item.val}\n`
            });
        }
        temp += `┗┄${this.at()}┄`;
        bot.sendText(this.channel_id,temp)
    }
    async render() {
        if (this.matchKey == '分解全部装备') {
            let reqs = await sever.callApi('me/equip/Me_destroyBagEquip', { userId: this.userId, destroyIndex: -1 });
            if (!reqs.isSucc) {
                this.sendErr(reqs.err)
                return;
            }
            let data = reqs.res;
            this.destroyEnd(data)
            return;
        }
        let destroyIndex = this.content.replace(this.matchKey, '');
        if (destroyIndex == '') {
            this.log('需要分解的背包装备的ID不能为空')
            return;
        }
        if (isNaN(Number(destroyIndex))) {
            this.log('需要分解的背包装备的ID只能是数字')
            return;
        }
        if (Number(destroyIndex) < 0) {
            this.log('需要分解的背包装备的ID不能是负数')
            return;
        }
        if (Math.ceil(Number(destroyIndex)) != Number(destroyIndex)) {
            this.log('需要分解的背包装备的ID不能有小数点')
            return;
        }
        if (Number(destroyIndex) > 100) {
            this.log('需要分解的背包装备的的ID太大了')
            return;
        }
        let req = await sever.callApi('me/equip/Me_destroyBagEquip', { userId: this.userId, destroyIndex: Number(destroyIndex) });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        this.destroyEnd(data)
    }
}