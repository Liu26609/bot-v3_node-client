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
exports.shop_skill = void 0;
const skill_1 = require("./../temp/text/skill");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("../task_base");
const user_1 = require("../../shared/game/user");
class shop_skill extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('shop/Shop_skill', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let str = '';
            str += `技能商店第${data.updateNum}期商品到货啦~`;
            str += `\n🛒购买价格:${user_1.walletKey_CN[user_1.walletKey[data.buyCondition.key]]}x${data.buyCondition.val}`;
            str += `\n🧮商店库存:${data.stock - data.sellNum}`;
            str += `\n🕤刷新时间:${Math.ceil((data.nextUpdateTime - Date.now()) / 1000)}秒`;
            str += `\n🎫购买指令：购买技能`;
            str += `\n<emoji:147>每次刷新随机价格，与技能属性无关`;
            str += `\n↓↓以下是技能属性预览↓↓`;
            yield bot_1.default.sendText(this.channel_id, str, '购买技能');
            new skill_1.text_skill_style().sendData(data.sell_temp).sendMsg(this.channel_id);
        });
    }
}
exports.shop_skill = shop_skill;
