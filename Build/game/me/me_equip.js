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
const example_1 = require("../temp/text/example");
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
            const attrArry = [
                { key: 'hp_max', icon: '♥️' },
                { key: 'secondResHp', icon: '💖' },
                { key: 'MagicDefense', icon: '🌟' },
                { key: 'MagicAttack', icon: '🔮' },
                { key: 'PhysicalAttacks', icon: '🔪' },
                { key: 'PhysicalDefense', icon: '🔰' },
            ];
            let temp = `┏┄════👑我的装备═══━┄\n`;
            if (data.equipList.length > 0) {
                data.equipList.forEach(info => {
                    temp += `╔[${equip_1.EQUIP_TYPE_CN[equip_1.EQUIP_TYPE[info.type]]}](${equip_1.EQUIP_QUALITY[info.quality]})${info.name}+${info.leve}\n`;
                    let showCont = 0;
                    for (let index = 0; index < attrArry.length; index++) {
                        const attr = attrArry[index];
                        const val = common_1.default.converEquipattribute(info, attr.key);
                        if (val <= 0) {
                            if (index == attrArry.length - 1) {
                                temp += '\n';
                            }
                            continue;
                        }
                        showCont += 1;
                        temp += `${attr.icon}${common_1.default.BN(val)}`;
                        if (showCont % 3 == 0) {
                            temp += '\n';
                        }
                    }
                    // temp += `♥️${common.BN(common.converEquipattribute(info, `hp_max`))}💖${common.BN(common.converEquipattribute(info, `secondResHp`))}🌟${common.BN(common.converEquipattribute(info, `MagicDefense`))}\n`
                    // temp += `🔮${common.BN(common.converEquipattribute(info, `MagicAttack`))}🔪${common.BN(common.converEquipattribute(info, `PhysicalAttacks`))}🔰${common.BN(common.converEquipattribute(info, `PhysicalDefense`))}\n`;
                });
            }
            else {
                temp += `┣你好像一件装备都没有穿上哦，看看[背包]有没有装备呢\n`;
            }
            temp += `┗┄━${this.at()}━┄\n`;
            bot_1.default.sendText(this.channel_id, temp);
            new example_1.text_example_style().setCommand('强化装备指令:强化 + 装备位置').setExample('强化武器').sendMsg(this.channel_id);
        });
    }
}
exports.me_equip = me_equip;
