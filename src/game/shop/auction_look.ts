import { text_equip_style } from './../temp/text/equip';
import { equip } from '../../shared/game/equip';
import { autionType } from '../../shared/game/prop';
import { ResAuction_look } from '../../shared/protocols/auction/PtlAuction_look';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from '../task_base';
import { walletKey, walletKey_CN } from '../../shared/game/user';
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
        if (!data.info.auction) {
            this.notAuction();
            return;
        }
        if (data.info.auction.type == autionType.equip) {
            this.equipAuction(data);
        }else if(data.info.auction.type == autionType.wallet){
            this.walletAuction(data);
        }

    }
    walletAuction(data: ResAuction_look) {
        if (!data.info.auction) {
            return;
        }
        let temp = `￣￣￣￣￣＼⚖️拍卖行／￣￣￣￣￣
拍卖行第${data.info.index}次拍卖
成交倒计时：${((data.info.endTime - Date.now()) / 1000).toFixed(3)}秒
拍卖物品：${walletKey_CN[walletKey[data.info.auction.data.key]]}X${data.info.auction.data.val}
出价次数：${data.info.offer_Cont}次
围观次数：${data.info.look_cont}次
最低加价:${data.info.min_offer}💰
当前价格：${data.info.offer_val}💰
最后出价人：${data.info.offer_name || '虚位以待'}
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
🧚‍♂️出价指令：出价 + 加价金币(如:出价100，如果成交则按当前价格 + 出价成交)`

        bot.sendText(this.channel_id, temp);
    }
    equipAuction(data: ResAuction_look) {
        if (!data.info.auction) {
            return;
        }
        let equipData = data.info.auction.data as equip;

        let equipTemp = new text_equip_style().setData(equipData).getTemp()

        let temp = `┏┄════⚖️拍卖行═══━┄
拍卖行第${data.info.index}次拍卖
成交倒计时：${((data.info.endTime - Date.now()) / 1000).toFixed(3)}秒
出价次数：${data.info.offer_Cont}次
围观次数：${data.info.look_cont}次
最低加价:${data.info.min_offer}💰
当前价格：${data.info.offer_val}💰
最后出价人：${data.info.offer_name || '虚位以待'}
${equipTemp}
🧚‍♂️出价指令：出价 + 加价金币(如:出价100，如果成交则按当前价格 + 出价成交)
`

        bot.sendText(this.channel_id, temp);
    }
    /**
     * 没有拍卖
     */
    notAuction() {
        let temp = `￣￣￣￣￣＼⚖️拍卖行／￣￣￣￣￣
目前还没有商品拍卖噢~
你可以选择等待一会或者拍卖道具
目前可拍卖物品:🎁盲盒🌈称号卡💳改名卡🔯技能卡🏃传送卡💠复活币🐟️小鱼干👾精灵球🏧装备

拍卖行流通货币为:💰️金币
道具拍卖：拍卖 + 拍卖道具名 + 数量(如:拍卖盲盒10)
装备拍卖：请发送[背包]查看拍卖指令
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`
        bot.sendText(this.channel_id, temp);
    }
}