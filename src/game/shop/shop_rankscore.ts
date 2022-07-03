import { rewardKey, rewardKey_CN} from "../../shared/game/prop";
import { walletKey, walletKey_CN } from "../../shared/game/user";
import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { task_base } from "../task_base";

export class shop_rankscore extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        let req = await sever.callApi('shop/Shop_rankscore', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `声望商店第${data.updateNum}期商品到货啦~
🏷出售商品:${rewardKey_CN[walletKey[data.sell_temp.key]]}X${data.sell_temp.val}
🛒购买价格:${rewardKey_CN[rewardKey[data.buyCondition.key]]}x${data.buyCondition.val}
🧮商店库存:${data.stock - data.sellNum}
🕤刷新时间:${Math.ceil((data.nextUpdateTime - Date.now()) / 1000)}秒
🎫购买指令：声望购买
<emoji:147>出售商品和价格每次随机刷新`;
        bot.sendText(this.channel_id, temp,'声望购买')
    }

}