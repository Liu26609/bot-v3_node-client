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
exports.strengthen_wearEquip = void 0;
const equip_1 = require("../../../shared/game/equip");
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
const example_1 = require("../../temp/text/example");
class strengthen_wearEquip extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        new example_1.text_example_style().setCommand('强化装备指令: 强化 + 装备类型').setExample('强化武器').sendMsg(this.channel_id);
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
            let req = yield sever_1.default.callApi('me/equip/Me_strengthen', { userId: this.userId, strengthenType: strengthenType });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            this.strenthen(data);
        });
    }
}
exports.strengthen_wearEquip = strengthen_wearEquip;
