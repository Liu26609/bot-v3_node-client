import { embed_equip_style } from './../temp/embed/embed_equip_style';
import { log } from '../..';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { textStyle } from '../../shared/game/setUp';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { text_equip_style } from '../temp/text/equip';
import { task_base } from './../task_base';
import { walletKey, walletKey_CN } from '../../shared/game/user';
export class shop_equip extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {

        let req = await sever.callApi('shop/Shop_equip', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        let str = '';
        str += `装备商店第${data.updateNum}期商品到货啦~`
        str += `\n🛒购买价格:${walletKey_CN[walletKey[data.buyCondition.key]]}x${data.buyCondition.val}`
        str += `\n🧮商店库存:${data.stock - data.sellNum}`
        str += `\n🕤刷新时间:${Math.ceil((data.nextUpdateTime - Date.now()) / 1000)}秒`
        str += `\n🎫购买指令：购买装备`
        str += `\n<emoji:147>每次刷新随机价格，与装备属性无关`;
        str += `\n↓↓以下是装备属性预览↓↓`;
        await bot.sendText(this.channel_id, str,this.matchKey)


        let temp = new text_equip_style();
        temp.setData(data.sell_temp).sendMsg(this.channel_id);



    }
}