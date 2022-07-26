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
exports.randomSkill_wearEquip = void 0;
const text_style_1 = require("./../../temp/text/text_style");
const userCfg_1 = require("../../../interface/userCfg");
const equip_1 = require("../../../shared/game/equip");
const user_1 = require("../../../shared/game/user");
const bot_1 = __importDefault(require("../../../unity/bot"));
const embed_1 = require("../../temp/embed/embed");
const example_1 = require("../../temp/text/example");
const task_base_1 = require("./../../task_base");
const sever_1 = __importDefault(require("../../../unity/sever"));
const common_1 = __importDefault(require("../../../shared/game/common"));
/**
 * 装备附魔
 */
class randomSkill_wearEquip extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        new example_1.text_example_style().setCommand('重置装备技能指令: 附魔 + 装备类型').setExample('附魔武器').sendMsg(this.channel_id);
    }
    render() {
        var _a, _b;
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
            let req = yield sever_1.default.callApi('me/equip/WeaEquip_randomSkill', { userId: this.userId, strengthenType: strengthenType });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let bf = data.bfEquip;
            let now = data.nowEquip;
            let temp;
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.text) {
                temp = new text_style_1.text_style();
                if (data.isSuccress) {
                    temp.setTitle(`<emoji:320>附魔成功`);
                    temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%`);
                    temp.addLine(`🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`);
                    temp.addLine(`▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}`);
                    temp.addLine(`${this.at()}(${equip_1.EQUIP_QUALITY[bf.quality]}级装备)`);
                    temp.addLine(`${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`);
                    if (now.outSkillData) {
                        temp.addLine(`Ⓜ️新的技能:${(_a = now.outSkillData) === null || _a === void 0 ? void 0 : _a.name}`);
                        temp.addLine(`📄效果描述:${common_1.default.getSkDesc(now.outSkillData)}`);
                    }
                    temp.setEnd(`┗┄${this.at()}┄`);
                }
                else {
                    temp.setTitle(`<emoji:173>附魔失败`);
                    temp.addLine(`${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`);
                    temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%`);
                    temp.addLine(`🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`);
                    temp.addLine(`▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}`);
                    temp.setEnd(`┗┄${this.at()}┄`);
                }
                temp.sendMsg(this.channel_id);
            }
            else {
                temp = new embed_1.embed_style();
                temp.setIcon(`${bot_1.default.getBotConfig().cosUrl_http}/equip/${data.nowEquip.icon}.png`);
                temp.setTips(`${bf.name}+${now.leve}`);
                if (data.isSuccress) {
                    temp.setTitle(`✔︎附魔成功`);
                    temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%`);
                    temp.addLine(`🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`);
                    temp.addLine(`▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}`);
                    temp.addLine(`${this.userName}(${equip_1.EQUIP_QUALITY[bf.quality]}级装备)`);
                    temp.addLine(`${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`);
                    if (now.outSkillData) {
                        temp.addLine(`Ⓜ️新的技能:${(_b = now.outSkillData) === null || _b === void 0 ? void 0 : _b.name}`);
                        temp.addLine(`📄效果描述:${common_1.default.getSkDesc(now.outSkillData)}`);
                    }
                }
                else {
                    temp.setTitle(`❌附魔失败`);
                    temp.addLine(`${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[bf.type]]}${bf.name}+${now.leve}`);
                    temp.addLine(`🔣本次成功率:${data.rate.toFixed(4)}%`);
                    temp.addLine(`🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`);
                    temp.addLine(`▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}`);
                }
                temp.sendMsg(this.channel_id);
            }
        });
    }
}
exports.randomSkill_wearEquip = randomSkill_wearEquip;
