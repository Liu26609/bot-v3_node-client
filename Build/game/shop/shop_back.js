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
Object.defineProperty(exports, "__esModule", { value: true });
exports.shop_back = void 0;
const task_base_1 = require("../task_base");
class shop_back extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let temp = `黑市商店第104期商品到货啦~
出售商品:🔪物理攻击永久+1
购买价格:🐟鱼干x460
商店库存:38
刷新时间:23秒
购买指令：黑市购买
🧚‍♂️出售商品和价格每次随机刷新`;
        });
    }
}
exports.shop_back = shop_back;
