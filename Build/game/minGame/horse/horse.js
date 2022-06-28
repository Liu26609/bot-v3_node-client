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
exports.horse = void 0;
const PtlHorse_1 = require("../../../shared/protocols/minGame/PtlHorse");
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("./../../task_base");
class horse extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('minGame/Horse', { userId: this.userId, type: PtlHorse_1.HORSE_TYPE.update });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            this.log('[测试]刷新赛马状态');
            /**
             * ┏┄══🎰猜数第75轮══━┄
    🏷️本轮数字还有599.999秒结束
    ❓数字范围[100 - 10000]之间
    📈本轮全服已猜1次
    🧧累计奖励⚙️强化碎片x1186
    🥳上一轮赢家:黄陵
    ┗┄━@楚轩 ━┄
             */
        });
    }
}
exports.horse = horse;
