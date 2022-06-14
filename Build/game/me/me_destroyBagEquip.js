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
exports.me_destroyBagEquip = void 0;
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_destroyBagEquip extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.matchKey == '销毁全部装备') {
                let reqs = yield sever_1.default.callApi('Me_destroyBagEquip', { userId: this.userId, destroyIndex: -1 });
                if (!reqs.isSucc) {
                    this.sendErr(reqs.err);
                    return;
                }
                this.log('成功销毁全部装备');
                return;
            }
            let destroyIndex = this.content.replace(this.matchKey, '');
            if (destroyIndex == '') {
                this.log('需要销毁的背包装备的ID不能为空');
                return;
            }
            if (isNaN(Number(destroyIndex))) {
                this.log('需要丢弃的背包装备的ID只能是数字');
                return;
            }
            if (Number(destroyIndex) < 0) {
                this.log('需要丢弃的背包装备的ID不能是负数');
                return;
            }
            if (Math.ceil(Number(destroyIndex)) != Number(destroyIndex)) {
                this.log('需要丢弃的背包装备的ID不能有小数点');
                return;
            }
            if (Number(destroyIndex) > 100) {
                this.log('需要丢弃的背包装备的的ID太大了');
                return;
            }
            let req = yield sever_1.default.callApi('Me_destroyBagEquip', { userId: this.userId, destroyIndex: Number(destroyIndex) });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            this.log('装备已经丢弃成功');
        });
    }
}
exports.me_destroyBagEquip = me_destroyBagEquip;
