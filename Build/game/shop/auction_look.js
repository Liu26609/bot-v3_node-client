"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auction_look = void 0;
const equip_1 = require("./../temp/text/equip");
const prop_1 = require("../../shared/game/prop");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("../task_base");
const user_1 = require("../../shared/game/user");
class auction_look extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            // 查看拍卖行商品
            let req = yield sever_1.default.callApi('auction/Auction_look', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
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
            if (data.info.auction.type == prop_1.autionType.equip) {
                this.equipAuction(data);
            }
            else if (data.info.auction.type == prop_1.autionType.wallet) {
                this.walletAuction(data);
            }
        });
    }
    walletAuction(data) {
        if (!data.info.auction) {
            return;
        }
        let temp = `┏┄════⚖️拍卖行═══━┄
🎟第${data.info.index}次拍卖
🕤成交倒计时：${((data.info.endTime - Date.now()) / 1000).toFixed(3)}秒
🏷拍卖物品：${user_1.walletKey_CN[user_1.walletKey[data.info.auction.data.key]]}X${data.info.auction.data.val}
🛒出价次数：${data.info.offer_Cont}次
📝围观次数：${data.info.look_cont}次
📊最低加价:${data.info.min_offer}💰
✨当前价格：${data.info.offer_val}💰
🏆最后出价人：${data.info.offer_name || '虚位以待'}
┗┄━═══════════━┄
<emoji:147>出价指令：出价 + 加价金币(如:出价100，如果成交则按当前价格 + 出价成交)`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    equipAuction(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!data.info.auction) {
                return;
            }
            let equipData = data.info.auction.data;
            new equip_1.text_equip_style().setData(equipData).sendMsg(this.channel_id);
            let temp = `┏┄════⚖️拍卖行═══━┄
🎟拍卖行第${data.info.index}次拍卖
🕤成交倒计时：${((data.info.endTime - Date.now()) / 1000).toFixed(3)}秒
🛒出价次数：${data.info.offer_Cont}次
📝围观次数：${data.info.look_cont}次
📊最低加价:${data.info.min_offer}💰
✨当前价格：${data.info.offer_val}💰
🏆最后出价人：${data.info.offer_name || '虚位以待'}
<emoji:147>出价指令：出价 + 加价金币(如:出价100，如果成交则按当前价格 + 出价成交)
┗┄━═══════════━┄
`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
    /**
     * 没有拍卖
     */
    notAuction() {
        let temp = `┏┄════⚖️拍卖行═══━┄
目前还没有商品拍卖噢~
你可以选择等待一会或者拍卖道具
目前可拍卖物品:🎁盲盒🌈称号卡💳改名卡🔯技能卡🏃传送卡💠复活币🐟️小鱼干👾精灵球🌌进化卡⚙️强化碎片🏧装备

拍卖行流通货币为:💰️金币
道具拍卖：拍卖 + 拍卖道具名 + 数量(如:拍卖盲盒10)
装备拍卖：请发送[背包]查看拍卖指令
┗┄━═══════════━┄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.auction_look = auction_look;
