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
exports.me_lookBag = void 0;
const equip_1 = require("../../temp/text/equip");
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
class me_lookBag extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let lookIndex = this.content.replace(this.matchKey, '');
            if (lookIndex == '') {
                this.log(`查看背包装备ID不能为空`);
                return;
            }
            if (isNaN(Number(lookIndex))) {
                this.log(`查看背包装备ID只能是数字`);
                return;
            }
            if (Number(lookIndex) < 0) {
                this.log(`查看背包装备ID不能是负数`);
                return;
            }
            if (Math.ceil(Number(lookIndex)) != Number(lookIndex)) {
                this.log(`查看背包装备ID不能是小数点`);
                return;
            }
            if (Number(lookIndex) > 100) {
                this.log(`查看背包装备的ID太大了`);
                return;
            }
            let req = yield sever_1.default.callApi('Me_lookBag', { userId: this.userId, lookId: Number(lookIndex) });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            new equip_1.text_equip_style().setData(data).sendMsg(this.channel_id);
        });
    }
}
exports.me_lookBag = me_lookBag;
