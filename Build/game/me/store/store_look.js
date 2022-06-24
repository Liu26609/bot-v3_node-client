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
exports.store_look = void 0;
const equip_1 = require("../../../shared/game/equip");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("./../../task_base");
class store_look extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('store/store_look', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄👑我的仓库(${data.store.length}/400)━┄\n`;
            if (data.store.length == 0) {
                temp += `你的仓库很干净。\n`;
            }
            else {
                for (let index = 0; index < data.store.length; index++) {
                    const e = data.store[index];
                    if (e.type == 1) {
                        const equipItem = e.data;
                        temp += `[${index}]${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[equipItem.type]]}${equipItem.name}(${equip_1.EQUIP_QUALITY[equipItem.quality]})+${equipItem.leve}\n`;
                    }
                    else if (e.type == 1) {
                        temp += `${index}货币`;
                    }
                }
            }
            temp += `┗┄━${this.at()}━┄`;
            yield bot_1.default.sendText(this.channel_id, temp);
            let temps = ``;
            temps += `┏┄═══👑指令提示══━┄\n`;
            temps += `[取 + ID]将查看指定装备/资源取出\n`;
            temps += `┗┄━══════════━┄\n`;
            yield bot_1.default.sendText(this.channel_id, temps);
        });
    }
}
exports.store_look = store_look;
