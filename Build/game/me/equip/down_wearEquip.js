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
exports.down_wearEquip = void 0;
const text_style_1 = require("./../../temp/text/text_style");
const userCfg_1 = require("../../../interface/userCfg");
const common_1 = __importDefault(require("../../../shared/game/common"));
const equip_1 = require("../../../shared/game/equip");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
const embed_1 = require("../../temp/embed/embed");
const example_1 = require("../../temp/text/example");
class down_wearEquip extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        new example_1.text_example_style().setCommand('卸下装备指令: 卸下 + 装备类型').setExample('卸下武器').sendMsg(this.channel_id);
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
            let req = yield sever_1.default.callApi('me/equip/Down_wearEquip', { userId: this.userId, strengthenType: strengthenType });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.text) {
                let temp = new text_style_1.text_style();
                temp.setTitle(`<emoji:320>成功卸下装备`);
                temp.addLine(`${this.at()}(${equip_1.EQUIP_QUALITY[data.quality]}级装备)`);
                if (common_1.default.converEquipattribute(data, `hp_max`) > 0)
                    temp.addLine(`♥️最大生命${common_1.default.BN(common_1.default.converEquipattribute(data, `hp_max`))}🔻`);
                if (common_1.default.converEquipattribute(data, `MagicAttack`) > 0)
                    temp.addLine(`🔮魔法攻击${common_1.default.BN(common_1.default.converEquipattribute(data, `MagicAttack`))}🔻`);
                if (common_1.default.converEquipattribute(data, `MagicDefense`) > 0)
                    temp.addLine(`🌟魔法防御${common_1.default.BN(common_1.default.converEquipattribute(data, `MagicDefense`))}🔻`);
                if (common_1.default.converEquipattribute(data, `PhysicalAttacks`) > 0)
                    temp.addLine(`🔪物理攻击${common_1.default.BN(common_1.default.converEquipattribute(data, `PhysicalAttacks`))}🔻`);
                if (common_1.default.converEquipattribute(data, `PhysicalDefense`) > 0)
                    temp.addLine(`🔰物理防御${common_1.default.BN(common_1.default.converEquipattribute(data, `PhysicalDefense`))}🔻`);
                if (common_1.default.converEquipattribute(data, `secondResHp`) > 0)
                    temp.addLine(`💖每秒回复${common_1.default.BN(common_1.default.converEquipattribute(data, `secondResHp`))}🔻`);
                temp.sendMsg(this.channel_id);
            }
            else {
                let temp = new embed_1.embed_style();
                temp.setTitle(`✔︎成功卸下装备`);
                temp.setIcon(`${bot_1.default.getBotConfig().cosUrl_http}/equip/${data.icon}.png`);
                temp.setTips(`${data.name}+${data.leve}`);
                if (common_1.default.converEquipattribute(data, `hp_max`) > 0)
                    temp.addLine(`♥️最大生命${common_1.default.BN(common_1.default.converEquipattribute(data, `hp_max`))}🔻`);
                if (common_1.default.converEquipattribute(data, `MagicAttack`) > 0)
                    temp.addLine(`🔮魔法攻击${common_1.default.BN(common_1.default.converEquipattribute(data, `MagicAttack`))}🔻`);
                if (common_1.default.converEquipattribute(data, `MagicDefense`) > 0)
                    temp.addLine(`🌟魔法防御${common_1.default.BN(common_1.default.converEquipattribute(data, `MagicDefense`))}🔻`);
                if (common_1.default.converEquipattribute(data, `PhysicalAttacks`) > 0)
                    temp.addLine(`🔪物理攻击${common_1.default.BN(common_1.default.converEquipattribute(data, `PhysicalAttacks`))}🔻`);
                if (common_1.default.converEquipattribute(data, `PhysicalDefense`) > 0)
                    temp.addLine(`🔰物理防御${common_1.default.BN(common_1.default.converEquipattribute(data, `PhysicalDefense`))}🔻`);
                if (common_1.default.converEquipattribute(data, `secondResHp`) > 0)
                    temp.addLine(`💖每秒回复${common_1.default.BN(common_1.default.converEquipattribute(data, `secondResHp`))}🔻`);
                temp.sendMsg(this.channel_id);
            }
        });
    }
}
exports.down_wearEquip = down_wearEquip;
