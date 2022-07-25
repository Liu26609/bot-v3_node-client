import { rewardKey, rewardKey_CN, storeBackTemp } from "../../shared/game/prop";
import { walletKey, walletKey_CN } from "../../shared/game/user";
import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { task_base } from "../task_base";

export class shop_showStyle extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        let req = await sever.callApi('shop/Shop_showStyle', {});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `形象商店第${data.updateNum}期商品到货啦~
🛒购买价格:${walletKey_CN[walletKey[data.buyCondition.key]]}x${data.buyCondition.val}
🧮商店库存:${data.stock - data.sellNum}
🕤刷新时间:${Math.ceil((data.nextUpdateTime - Date.now()) / 1000)}秒
🎫购买指令：购买形象
<emoji:147>购买形象后角色自动修改为最新形象
↓↓以下是形象预览↓↓`;
        await bot.sendText(this.channel_id, temp, '购买形象')
        bot.sendLocaImage(this.channel_id, `./image/show/${data.sell_temp}.png`)
    }
}