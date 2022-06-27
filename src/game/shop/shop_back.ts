import { rewardKey, rewardKey_CN, storeBackTemp } from "../../shared/game/prop";
import { walletKey, walletKey_CN } from "../../shared/game/user";
import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { task_base } from "../task_base";

export class shop_back extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        let req = await sever.callApi('shop/Shop_back', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `黑市商店第${data.updateNum}期商品到货啦~
🏷出售商品:${this.converSellTemp(data.sell_temp)}
🛒购买价格:${walletKey_CN[walletKey[data.buyCondition.key]]}x${data.buyCondition.val}
🧮商店库存:${data.stock - data.sellNum}
🕤刷新时间:${Math.ceil((data.nextUpdateTime - Date.now()) / 1000)}秒
🎫购买指令：黑市购买
<emoji:147>出售商品和价格每次随机刷新`;
        bot.sendText(this.channel_id, temp,this.matchKey)
    }
    converSellTemp(temp: storeBackTemp) {
        let str = ``
        switch (temp) {
            case storeBackTemp.forever_hpMax_10:
                str = `♥️生命永久+10`
                break;
            case storeBackTemp.forever_MagicAttack_1:
                str = `🔮魔法攻击+1`
                break;
            case storeBackTemp.forever_MagicDefense_1:
                str = `🌟魔法防御+1`
                break;
            case storeBackTemp.forever_PhysicalAttacks_1:
                str = `🔪物理攻击+1`
                break;
            case storeBackTemp.forever_PhysicalDefense_1:
                str = `🔰物理防御+1`
                break;
            case storeBackTemp.forever_secondResHp_01:
                str = `💖生命回复+0.1`
                break;
            case storeBackTemp.randomPoint:
                str = `💖向全服随机暴露一个玩家的坐标`
                break;
            case storeBackTemp.team_contribution_now:
                str = `🏰工会贡献+10`
                break;
            case storeBackTemp.team_exp:
                str = `🏰工会经验+1`
                break;
            default:
                break;
        }
        return str
    }
}