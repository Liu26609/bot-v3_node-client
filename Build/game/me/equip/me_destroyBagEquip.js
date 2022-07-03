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
const prop_1 = require("../../../shared/game/prop");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
class me_destroyBagEquip extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    destroyEnd(data) {
        let temp = `┏┄══<emoji:173>分解完成══━┄\n`;
        if (data.reward && data.reward.length > 0) {
            data.reward.forEach(item => {
                temp += `${prop_1.rewardKey_CN[prop_1.rewardKey[item.key]]}+${item.val}\n`;
            });
        }
        temp += `┗┄${this.at()}┄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.matchKey == '分解全部装备') {
                let reqs = yield sever_1.default.callApi('me/equip/Me_destroyBagEquip', { userId: this.userId, destroyIndex: -1 });
                if (!reqs.isSucc) {
                    this.sendErr(reqs.err);
                    return;
                }
                let data = reqs.res;
                this.destroyEnd(data);
                return;
            }
            let destroyIndex = this.content.replace(this.matchKey, '');
            if (destroyIndex == '') {
                this.log('需要分解的背包装备的ID不能为空');
                return;
            }
            if (isNaN(Number(destroyIndex))) {
                this.log('需要分解的背包装备的ID只能是数字');
                return;
            }
            if (Number(destroyIndex) < 0) {
                this.log('需要分解的背包装备的ID不能是负数');
                return;
            }
            if (Math.ceil(Number(destroyIndex)) != Number(destroyIndex)) {
                this.log('需要分解的背包装备的ID不能有小数点');
                return;
            }
            if (Number(destroyIndex) > 100) {
                this.log('需要分解的背包装备的的ID太大了');
                return;
            }
            let req = yield sever_1.default.callApi('me/equip/Me_destroyBagEquip', { userId: this.userId, destroyIndex: Number(destroyIndex) });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            this.destroyEnd(data);
        });
    }
}
exports.me_destroyBagEquip = me_destroyBagEquip;
