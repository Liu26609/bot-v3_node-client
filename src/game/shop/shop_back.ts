import { rewardKey, rewardKey_CN } from "../../shared/game/prop";
import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { task_base } from "../task_base";

export class shop_back extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        let req = await sever.callApi('Shop_back',{userId:this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `黑市商店第${data.updateNum}期商品到货啦~
出售商品:🔪物理攻击永久+1
购买价格:${rewardKey_CN[rewardKey[data.buyCondition.key]]}x${data.buyCondition.val}
商店库存:${data.stock - data.sellNum}
刷新时间:${Math.ceil((data.nextUpdateTime - Date.now()) / 1000)}秒
购买指令：黑市购买
🧚‍♂️出售商品和价格每次随机刷新`;
        bot.sendText(this.channel_id,temp)
    }
}