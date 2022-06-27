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
const embed_1 = require("./../temp/embed/embed");
const equip_1 = require("../../shared/game/equip");
const user_1 = require("../../shared/game/user");
const bot_1 = __importDefault(require("../../unity/bot"));
const common_1 = __importDefault(require("../../shared/game/common"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
const userCfg_1 = require("../../interface/userCfg");
class me_strengthen extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `强化装备指令: 强化 + 装备位置
🌰栗子：@达尔文进化岛 强化主武器`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    render() {
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
                case equip_1.EQUIP_TYPE_CN.subWeapon:
                    strengthenType = equip_1.EQUIP_TYPE.subWeapon;
                    break;
                case equip_1.EQUIP_TYPE_CN.clothes:
                    strengthenType = equip_1.EQUIP_TYPE.clothes;
                    break;
                case equip_1.EQUIP_TYPE_CN.hat:
                    strengthenType = equip_1.EQUIP_TYPE.hat;
                    break;
                case equip_1.EQUIP_TYPE_CN.medal:
                    strengthenType = equip_1.EQUIP_TYPE.medal;
                    break;
                case equip_1.EQUIP_TYPE_CN.necklace:
                    strengthenType = equip_1.EQUIP_TYPE.necklace;
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
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.text) {
                let temp = `┏┄══${data.isSuccress ? '<emoji:320>强化成功' : '<emoji:173>强化失败'}══━┄\n`;
                if (data.isSuccress) {
                    temp += `🔣本次成功率:${data.rate.toFixed(4)}%\n`;
                    temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                    temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                    temp += `${this.at()}(${equip_1.EQUIP_QUALITY[bf.quality]}级装备)\n`;
                    temp += `${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}\n`;
                    if (common_1.default.converEquipattribute(bf, `hp_max`) > 0)
                        temp += `♥️最大生命${common_1.default.BN(common_1.default.converEquipattribute(bf, `hp_max`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `hp_max`))}\n`;
                    if (common_1.default.converEquipattribute(bf, `MagicAttack`) > 0)
                        temp += `🔮魔法攻击${common_1.default.BN(common_1.default.converEquipattribute(bf, `MagicAttack`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `MagicAttack`))}\n`;
                    if (common_1.default.converEquipattribute(bf, `MagicDefense`) > 0)
                        temp += `🌟魔法防御${common_1.default.BN(common_1.default.converEquipattribute(bf, `MagicDefense`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `MagicDefense`))}\n`;
                    if (common_1.default.converEquipattribute(bf, `PhysicalAttacks`) > 0)
                        temp += `🔪物理攻击${common_1.default.BN(common_1.default.converEquipattribute(bf, `PhysicalAttacks`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `PhysicalAttacks`))}\n`;
                    if (common_1.default.converEquipattribute(bf, `PhysicalDefense`) > 0)
                        temp += `🔰物理防御${common_1.default.BN(common_1.default.converEquipattribute(bf, `PhysicalDefense`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `PhysicalDefense`))}\n`;
                    if (common_1.default.converEquipattribute(bf, `secondResHp`) > 0)
                        temp += `💖每秒回复${common_1.default.BN(common_1.default.converEquipattribute(bf, `secondResHp`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `secondResHp`))}\n`;
                    temp += `┗══════════┄`;
                }
                else {
                    temp += `${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}\n`;
                    temp += `🔣本次成功率:${data.rate.toFixed(4)}%\n`;
                    temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                    temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                    temp += `┗┄━${this.at()}━┄`;
                }
                bot_1.default.sendText(this.channel_id, temp, this.content);
            }
            else {
                let temp = new embed_1.embed_style();
                temp.setIcon(`${bot_1.default.getBotConfig().cosUrl_http}/equip/${data.nowEquip.icon}.png`);
                temp.setTips(`${bf.name}+${now.leve}`);
                if (data.isSuccress) {
                    temp.setTitle(`强化成功`);
                    temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%\n`);
                    temp.addLine(`🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${common_1.default.BN(data.pay.condition.val)}`);
                    temp.addLine(`▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${common_1.default.BN(data.pay.now)}`);
                    temp.addLine(`${equip_1.EQUIP_QUALITY[bf.quality]}级装备归属:${this.userName}`);
                    temp.addLine(`${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`);
                    if (common_1.default.converEquipattribute(bf, `hp_max`) > 0)
                        temp.addLine(`♥️生命${common_1.default.BN(common_1.default.converEquipattribute(bf, `hp_max`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `hp_max`))}`);
                    if (common_1.default.converEquipattribute(bf, `MagicAttack`) > 0)
                        temp.addLine(`🔮魔攻${common_1.default.BN(common_1.default.converEquipattribute(bf, `MagicAttack`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `MagicAttack`))}`);
                    if (common_1.default.converEquipattribute(bf, `MagicDefense`) > 0)
                        temp.addLine(`🌟魔防${common_1.default.BN(common_1.default.converEquipattribute(bf, `MagicDefense`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `MagicDefense`))}`);
                    if (common_1.default.converEquipattribute(bf, `PhysicalAttacks`) > 0)
                        temp.addLine(`🔪物攻${common_1.default.BN(common_1.default.converEquipattribute(bf, `PhysicalAttacks`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `PhysicalAttacks`))}`);
                    if (common_1.default.converEquipattribute(bf, `PhysicalDefense`) > 0)
                        temp.addLine(`🔰物防${common_1.default.BN(common_1.default.converEquipattribute(bf, `PhysicalDefense`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `PhysicalDefense`))}`);
                    if (common_1.default.converEquipattribute(bf, `secondResHp`) > 0)
                        temp.addLine(`💖回复${common_1.default.BN(common_1.default.converEquipattribute(bf, `secondResHp`))}🔺${common_1.default.BN(common_1.default.converEquipattribute(now, `secondResHp`))}`);
                }
                else {
                    temp.setTitle(`强化失败`);
                    temp.addLine(`${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`);
                    temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%`);
                    temp.addLine(`🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${common_1.default.BN(data.pay.condition.val)}`);
                    temp.addLine(`▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${common_1.default.BN(data.pay.now)}`);
                    temp.addLine(`归属:${this.userName}`);
                }
                temp.sendMsg(this.channel_id);
            }
        });
    }
}
exports.me_strengthen = me_strengthen;
