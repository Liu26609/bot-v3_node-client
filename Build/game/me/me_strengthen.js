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
exports.me_strengthen = void 0;
const equip_1 = require("../../shared/game/equip");
const user_1 = require("../../shared/game/user");
const bot_1 = __importDefault(require("../../unity/bot"));
const common_1 = __importDefault(require("../../unity/common"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_strengthen extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `强化装备指令: 强化 + 装备位置
🌰栗子：@达尔文进化岛 强化武器`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    render() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let strengthenType;
            let strengthenStr = this.content.replace(this.matchKey, '');
            switch (strengthenStr) {
                case equip_1.EQUIP_TYPE_CN.weapons:
                    strengthenType = equip_1.EQUIP_TYPE.weapons;
                    break;
                default:
                    break;
            }
            if (typeof (strengthenType) != 'number') {
                this.menu();
                return;
            }
            let req = yield sever_1.default.callApi('Me_strengthen', { userId: this.userId, strengthenType: strengthenType });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let bf = data.bfEquip;
            let now = data.nowEquip;
            let temp = `┏┄════${data.isSuccress ? '<emoji:320>强化成功' : '<emoji:173>强化失败'}═══━┄\n`;
            if (data.isSuccress) {
                temp += `🔣本次成功率:${(data.rate * 100).toFixed(2)}%${this.at()}\n`;
                temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                temp += `[${equip_1.EQUIP_TYPE_CN[equip_1.EQUIP_TYPE[bf.type]]}](${equip_1.EQUIP_QUALITY_CN[equip_1.EQUIP_QUALITY[bf.quality]]})${bf.name}+${now.leve}\n`;
                temp += `♥️最大生命${common_1.default.BN(common_1.default.converEquipattribute(bf, `hp_max`))}➡️${common_1.default.BN(common_1.default.converEquipattribute(now, `hp_max`))}\n`;
                temp += `🔮魔法攻击${common_1.default.BN(common_1.default.converEquipattribute(bf, `MagicAttack`))}➡️${common_1.default.BN(common_1.default.converEquipattribute(now, `MagicAttack`))}\n`;
                temp += `🌟魔法防御${common_1.default.BN(common_1.default.converEquipattribute(bf, `MagicDefense`))}➡️${common_1.default.BN(common_1.default.converEquipattribute(now, `MagicDefense`))}\n`;
                temp += `🔪物理攻击${common_1.default.BN(common_1.default.converEquipattribute(bf, `PhysicalAttacks`))}➡️${common_1.default.BN(common_1.default.converEquipattribute(now, `PhysicalAttacks`))}\n`;
                temp += `🔰物理防御${common_1.default.BN(common_1.default.converEquipattribute(bf, `PhysicalDefense`))}➡️${common_1.default.BN(common_1.default.converEquipattribute(now, `PhysicalDefense`))}\n`;
                temp += `💖每秒回复${common_1.default.BN(common_1.default.converEquipattribute(bf, `PhysicalDefense`))}➡️${common_1.default.BN(common_1.default.converEquipattribute(now, `PhysicalDefense`))}\n`;
                temp += `┗攻击特效:${((_a = now.effect) === null || _a === void 0 ? void 0 : _a.length) || 0}条`;
            }
            else {
                temp += `[${equip_1.EQUIP_TYPE_CN[equip_1.EQUIP_TYPE[bf.type]]}](${equip_1.EQUIP_QUALITY_CN[equip_1.EQUIP_QUALITY[bf.quality]]})${bf.name}+${now.leve}\n`;
                temp += `🔣本次成功率:${(data.rate * 100).toFixed(2)}%\n`;
                temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                temp += `┗┄━${this.at()}━┄`;
            }
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.me_strengthen = me_strengthen;
