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
exports.me_equip = void 0;
const equip_1 = require("../../shared/game/equip");
const bot_1 = __importDefault(require("../../unity/bot"));
const common_1 = __importDefault(require("../../unity/common"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("../task_base");
class me_equip extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield sever_1.default.callApi('Me_equip', { userId: this.userId });
            if (!res.isSucc) {
                this.sendErr(res.err);
                return;
            }
            let data = res.res;
            let temp = `┏┄════👑我的装备═══━┄\n`;
            if (data.equipList.length > 0) {
                data.equipList.forEach(info => {
                    var _a;
                    temp += `╔[${equip_1.EQUIP_TYPE_CN[equip_1.EQUIP_TYPE[info.type]]}](${equip_1.EQUIP_QUALITY_CN[equip_1.EQUIP_QUALITY[info.quality]]})${info.name}+${info.leve}\n`;
                    temp += `║♥️最大生命+${common_1.default.BN(common_1.default.converEquipattribute(info, `hp_max`))}\n`;
                    temp += `║🔮魔法攻击+${common_1.default.BN(common_1.default.converEquipattribute(info, `MagicAttack`))}\n`;
                    temp += `║🌟魔法防御+${common_1.default.BN(common_1.default.converEquipattribute(info, `MagicDefense`))}\n`;
                    temp += `║🔪物理攻击+${common_1.default.BN(common_1.default.converEquipattribute(info, `PhysicalAttacks`))}\n`;
                    temp += `║🔰物理防御+${common_1.default.BN(common_1.default.converEquipattribute(info, `PhysicalDefense`))}\n`;
                    temp += `║💖每秒回复+${common_1.default.BN(common_1.default.converEquipattribute(info, `secondResHp`))}\n`;
                    temp += `╚攻击特效:${((_a = info.effect) === null || _a === void 0 ? void 0 : _a.length) || 0}条\n`;
                });
            }
            else {
                temp += `┣你好像一件装备都没有穿上哦\n`;
            }
            temp += `┗┄━${this.at()}━┄\n`;
            temp += `强化装备指令: 强化 + 装备位置\n`;
            temp += `🌰栗子：@${bot_1.default.getBot_name()} 强化武器\n`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.me_equip = me_equip;
