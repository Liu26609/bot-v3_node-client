import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from '../task_base';
export class auction_look extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        // 查看拍卖行商品



        let req = await sever.callApi('auction/Auction_look', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if (!data.info.sell_id) {
            this.notAuction();
            return;
        }

        bot.sendText(this.channel_id, `有商品在拍卖`);
    }
    /**
     * 没有拍卖
     */
    notAuction() {
        let temp = `￣￣￣￣￣＼⚖️拍卖行／￣￣￣￣￣
目前还没有商品拍卖噢~
你可以选择等待一会或者拍卖道具
目前可拍卖物品:🎁盲盒🌈称号卡💳改名卡🔯技能卡🏃传送卡💠复活币🐟️小鱼干🏧装备

拍卖行流通货币为:💰️金币
道具拍卖：拍卖 + 拍卖道具名 + 数量(如:拍卖盲盒10)
装备拍卖：请发送[背包]查看拍卖指令
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`
        bot.sendText(this.channel_id, temp);
    }
}