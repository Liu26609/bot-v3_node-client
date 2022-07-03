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
exports.me_wearEquip = void 0;
const embed_1 = require("./../../temp/embed/embed");
const text_style_1 = require("./../../temp/text/text_style");
const userCfg_1 = require("../../../interface/userCfg");
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
const equip_1 = require("../../../shared/game/equip");
const common_1 = __importDefault(require("../../../shared/game/common"));
class me_wearEquip extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let wearIndex = this.content.replace(this.matchKey, '');
            if (wearIndex == '') {
                this.log('需要穿装备的ID不能为空');
                return;
            }
            if (isNaN(Number(wearIndex))) {
                this.log('需要穿装备的ID只能是数字');
                return;
            }
            if (Number(wearIndex) < 0) {
                this.log('需要穿装备的ID不能是负数');
                return;
            }
            if (Math.ceil(Number(wearIndex)) != Number(wearIndex)) {
                this.log('需要穿装备的ID不能是小数点');
                return;
            }
            if (Number(wearIndex) > 100) {
                this.log('需要穿装备的的ID太大了');
                return;
            }
            let req = yield sever_1.default.callApi('me/equip/Me_wearEquip', { userId: this.userId, wearIndex: Number(wearIndex) });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.text) {
                let temp = new text_style_1.text_style();
                temp.setTitle(`┏┄══<emoji:320>装备成功══━┄`);
                temp.addLine(`${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[data.nowEquip.type]]}${data.nowEquip.name}+${data.nowEquip.leve}`);
                if (data.change_military > 0) {
                    temp.addLine(`<emoji:11>战力🔺${data.change_military}`);
                }
                else {
                    temp.addLine(`<emoji:11>战力🔻${data.change_military}`);
                }
                if (data.lastEquip) {
                    let changeArry = [
                        { key: 'hp_max', str: '♥️生命' },
                        { key: 'MagicAttack', str: '🔮魔攻' },
                        { key: 'MagicDefense', str: '🌟魔防' },
                        { key: 'PhysicalAttacks', str: '🔪物攻' },
                        { key: 'PhysicalDefense', str: '🔰物防' },
                        { key: 'secondResHp', str: '💖回复' }
                    ];
                    for (let index = 0; index < changeArry.length; index++) {
                        const item = changeArry[index];
                        let changeIcon = `🔺`;
                        let changeNum = 0;
                        changeNum = common_1.default.converEquipattribute(data.nowEquip, item.key) - common_1.default.converEquipattribute(data.lastEquip, item.key);
                        if (changeNum == 0) {
                            changeIcon = `🟢`;
                        }
                        else if (changeNum < 0) {
                            changeIcon = `🔻`;
                        }
                        temp.addLine(`${item.str}${changeIcon}${common_1.default.BN(changeNum)}`);
                    }
                }
                else {
                    if (common_1.default.converEquipattribute(data.nowEquip, `hp_max`) > 0)
                        temp.addLine(`♥️生命🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `hp_max`))}`);
                    if (common_1.default.converEquipattribute(data.nowEquip, `MagicAttack`) > 0)
                        temp.addLine(`🔮魔攻🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `MagicAttack`))}`);
                    if (common_1.default.converEquipattribute(data.nowEquip, `MagicDefense`) > 0)
                        temp.addLine(`🌟魔防🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `MagicDefense`))}`);
                    if (common_1.default.converEquipattribute(data.nowEquip, `PhysicalAttacks`) > 0)
                        temp.addLine(`🔪物攻🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `PhysicalAttacks`))}`);
                    if (common_1.default.converEquipattribute(data.nowEquip, `PhysicalDefense`) > 0)
                        temp.addLine(`🔰物防🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `PhysicalDefense`))}`);
                    if (common_1.default.converEquipattribute(data.nowEquip, `secondResHp`) > 0)
                        temp.addLine(`💖回复🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `secondResHp`))}`);
                }
                temp.setEnd(`┗┄${this.at()}┄`);
                temp.sendMsg(this.channel_id);
            }
            else {
                let temp = new embed_1.embed_style();
                temp.setTips('😀装备成功');
                temp.setIcon(this.userIcon);
                temp.setTitle(`      😀装备成功`);
                temp.addLine(`${equip_1.EQUIP_TYPE_ICON[equip_1.EQUIP_TYPE[data.nowEquip.type]]}${data.nowEquip.name}+${data.nowEquip.leve}`);
                if (data.change_military > 0) {
                    temp.addLine(`<emoji:11>战力🔺${data.change_military}`);
                }
                else {
                    temp.addLine(`<emoji:11>战力🔻${data.change_military}`);
                }
                if (data.lastEquip) {
                    let changeArry = [
                        { key: 'hp_max', str: '♥️生命' },
                        { key: 'MagicAttack', str: '🔮魔攻' },
                        { key: 'MagicDefense', str: '🌟魔防' },
                        { key: 'PhysicalAttacks', str: '🔪物攻' },
                        { key: 'PhysicalDefense', str: '🔰物防' },
                        { key: 'secondResHp', str: '💖回复' }
                    ];
                    for (let index = 0; index < changeArry.length; index++) {
                        const item = changeArry[index];
                        let changeIcon = `🔺`;
                        let changeNum = 0;
                        changeNum = common_1.default.converEquipattribute(data.nowEquip, item.key) - common_1.default.converEquipattribute(data.lastEquip, item.key);
                        if (changeNum == 0) {
                            changeIcon = `🟢`;
                        }
                        else if (changeNum < 0) {
                            changeIcon = `🔻`;
                        }
                        temp.addLine(`${item.str}${changeIcon}${common_1.default.BN(changeNum)}`);
                    }
                }
                else {
                    if (common_1.default.converEquipattribute(data.nowEquip, `hp_max`) > 0)
                        temp.addLine(`♥️生命🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `hp_max`))}`);
                    if (common_1.default.converEquipattribute(data.nowEquip, `MagicAttack`) > 0)
                        temp.addLine(`🔮魔攻🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `MagicAttack`))}`);
                    if (common_1.default.converEquipattribute(data.nowEquip, `MagicDefense`) > 0)
                        temp.addLine(`🌟魔防🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `MagicDefense`))}`);
                    if (common_1.default.converEquipattribute(data.nowEquip, `PhysicalAttacks`) > 0)
                        temp.addLine(`🔪物攻🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `PhysicalAttacks`))}`);
                    if (common_1.default.converEquipattribute(data.nowEquip, `PhysicalDefense`) > 0)
                        temp.addLine(`🔰物防🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `PhysicalDefense`))}`);
                    if (common_1.default.converEquipattribute(data.nowEquip, `secondResHp`) > 0)
                        temp.addLine(`💖回复🔺${common_1.default.BN(common_1.default.converEquipattribute(data.nowEquip, `secondResHp`))}`);
                }
            }
        });
    }
}
exports.me_wearEquip = me_wearEquip;
