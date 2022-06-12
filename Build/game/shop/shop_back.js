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
exports.shop_back = void 0;
const prop_1 = require("../../shared/game/prop");
const user_1 = require("../../shared/game/user");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("../task_base");
class shop_back extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('shop/Shop_back', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `黑市商店第${data.updateNum}期商品到货啦~
出售商品:${this.converSellTemp(data.sell_temp)}
购买价格:${user_1.walletKey_CN[user_1.walletKey[data.buyCondition.key]]}x${data.buyCondition.val}
商店库存:${data.stock - data.sellNum}
刷新时间:${Math.ceil((data.nextUpdateTime - Date.now()) / 1000)}秒
购买指令：黑市购买
<emoji:147>出售商品和价格每次随机刷新`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
    converSellTemp(temp) {
        let str = ``;
        switch (temp) {
            case prop_1.storeBackTemp.forever_hpMax_1:
                str = `♥️最大生命永久+1`;
                break;
            case prop_1.storeBackTemp.forever_hpMax_10:
                str = `♥️最大生命永久+10`;
                break;
            default:
                break;
        }
        return str;
    }
}
exports.shop_back = shop_back;
