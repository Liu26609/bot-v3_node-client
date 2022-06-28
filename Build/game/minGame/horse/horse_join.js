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
exports.horse_join = void 0;
const horse_look_1 = require("./horse_look");
const PtlHorse_1 = require("../../../shared/protocols/minGame/PtlHorse");
const sever_1 = __importDefault(require("../../../unity/sever"));
const example_1 = require("../../temp/text/example");
const task_base_1 = require("../../task_base");
const common_1 = __importDefault(require("../../../shared/game/common"));
class horse_join extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        new example_1.text_example_style().setCommand('参赛指令:参赛 + 宠物ID').setExample('参赛0').sendMsg(this.channel_id);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let joinIndex = common_1.default.getNumber(this.content.replace(this.matchKey, ''));
            let req = yield sever_1.default.callApi('minGame/Horse', { userId: this.userId, type: PtlHorse_1.HORSE_TYPE.join, joinPetIndex: joinIndex });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            new horse_look_1.horse_look(...this.args);
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
exports.horse_join = horse_join;
