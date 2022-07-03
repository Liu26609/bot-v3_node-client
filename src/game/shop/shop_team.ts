import { storeTeamTemp, store_team } from '../../shared/game/prop';
import { walletKey, walletKey_CN } from '../../shared/game/user';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class shop_team extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let req = await sever.callApi('shop/Shop_team', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `工会商店第${data.updateNum}期商品到货啦~
🏷出售商品:${this.converSellTemp(data.sell_temp)}
🛒购买价格:工会贡献x${data.buyCondition.val}
🧮商店库存:${data.stock - data.sellNum}
🕤刷新时间:${Math.ceil((data.nextUpdateTime - Date.now()) / 1000)}秒
🎫购买指令：工会购买
<emoji:147>出售商品和价格每次随机刷新`;
        bot.sendText(this.channel_id, temp,'工会购买')
    }
    converSellTemp(temp: storeTeamTemp) {
        let str = ``
        switch (temp) {
            case storeTeamTemp.forever_hpMax_100:
                str = `♥️工会全体生命永久+100`
                break;
            case storeTeamTemp.forever_MagicAttack_10:
                str = `🔮工会全体魔攻+1`
                break;
            case storeTeamTemp.forever_MagicDefense_1:
                str = `🌟工会全体魔防+1`
                break;
            case storeTeamTemp.forever_PhysicalAttacks_10:
                str = `🔪工会全体物攻+10`
                break;
            case storeTeamTemp.forever_PhysicalDefense_1:
                str = `🔰工会全体物防+1`
                break;
            case storeTeamTemp.forever_secondResHp_1:
                str = `💖工会全体回复+1`
                break;
            case storeTeamTemp.teamExp_1:
                str = `🏰工会经验+1`
                break;
            default:
                break;
        }
        return str
    }
}