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
exports.strengthen_bagEquip = void 0;
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
const example_1 = require("../../temp/text/example");
const common_1 = __importDefault(require("../../../shared/game/common"));
class strengthen_bagEquip extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        new example_1.text_example_style().setCommand('强化背包装备指令: 强化背包装备 + 背包ID').setExample('强化背包装备0').sendMsg(this.channel_id);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let strengthenStr = this.content.replace(this.matchKey, '');
            let index = common_1.default.getNumber(strengthenStr);
            let req = yield sever_1.default.callApi('me/equip/Strengthen_bagEquip', { userId: this.userId, bagIndex: index });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            this.strenthen(data);
        });
    }
}
exports.strengthen_bagEquip = strengthen_bagEquip;
