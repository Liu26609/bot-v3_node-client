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
exports.me_bag = void 0;
const equip_1 = require("../../shared/game/equip");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_bag extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    bagNull() {
        return __awaiter(this, void 0, void 0, function* () {
            let temps = ``;
            temps += `你的背包空空如也。\n`;
            temps += `[装备商店]也许有合适的装备哦\n`;
            temps += `[拍卖行]看看拍卖行有没有在卖装备`;
            this.log(temps);
        });
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('Bag', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (data.bag.length <= 0) {
                this.bagNull();
                return;
            }
            let temp = ``;
            temp += `┏┄👑我的背包(${data.bag.length}/20)━┄\n`;
            for (let index = 0; index < data.bag.length; index++) {
                const item = data.bag[index];
                temp += `[${index}]${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[item.type]]}${item.name}(${equip_1.EQUIP_QUALITY[item.quality]})+${item.leve}\n`;
            }
            temp += `┗┄━${this.at()}━┄\n`;
            let temps = ``;
            temps += `┏┄═══👑指令提示══━┄\n`;
            temps += `[查看背包装备 + 数字]查看指定装备属性\n`;
            temps += `[穿装备 + 数字]装备上指定装备\n`;
            temps += `[分解装备 + 数字]分解指定装备\n`;
            temps += `[分解全部装备]分解背包全部装备\n`;
            temps += `[拍卖装备 + 数字]拍卖指定装备\n`;
            temps += `[存装备 + 数字]将指定装备放仓库\n`;
            temps += `┗┄━══════════━┄\n`;
            yield bot_1.default.sendText(this.channel_id, temp);
            yield bot_1.default.sendText(this.channel_id, temps);
        });
    }
}
exports.me_bag = me_bag;
