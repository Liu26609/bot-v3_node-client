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
exports.me_pos = void 0;
const __1 = require("../..");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("../task_base");
const prop_1 = require("../../shared/game/prop");
/**
 * 指令：位置
 *
🌏修仙世界[999,999]
      
左@楚轩
      下
￣￣￣￣￣￣＼🔥发现敌人／￣￣￣￣￣￣

 */
class me_pos extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('Pos', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            (0, __1.log)('pos', data);
            let temp = ``;
            temp += `┏┄🌏${data.pos_name}[${data.pos.x},${data.pos.y}]━┄\n`;
            temp += `                     ${data.isTop ? '上' : '⛔'}\n`;
            temp += `  ${data.isLeft ? '左' : '⛔'}              ${data.meIcon}              ${data.isRight ? '右' : '⛔'}\n`;
            temp += `                     ${data.isButtom ? '下' : '⛔'}\n`;
            if (data.posTiledId == 2) {
                temp += `┄════💧发现湖泊═══━┄\n`;
                temp += `在这里发现了一个湖泊，你可以发送[钓鱼]试试\n`;
            }
            if (data.player.length + data.enemy.length > 1) {
                temp += `┄════<emoji:325>发现敌人═══━┄\n`;
                for (let index = 0; index < data.player.length; index++) {
                    const body = data.player[index];
                    const id = body.id;
                    if (id == this.userId) {
                        continue;
                    }
                    if (body.hp <= 0) {
                        continue;
                    }
                    const name = body.name;
                    const leve = body.leve;
                    temp += ` [玩家${index}]Lv.${leve}${body.icon}${name}\n`;
                }
                for (let index = 0; index < data.enemy.length; index++) {
                    const body = data.enemy[index];
                    if (body.hp <= 0) {
                        continue;
                    }
                    const name = body.name;
                    const leve = body.leve;
                    let emoji = `♥️`;
                    if (body.out_attribute.hp_max > body.hp) {
                        emoji = `<emoji:67>`;
                    }
                    temp += ` [怪物${index}]Lv.${leve}${body.icon}${name}${emoji}${((body.hp / body.out_attribute.hp_max) * 100).toFixed(0)}%\n`;
                }
            }
            if (data.chest.length > 0) {
                let haveNull = true;
                for (let index = 0; index < data.chest.length; index++) {
                    const item = data.chest[index];
                    if (!item.isOpen) {
                        if (haveNull) {
                            temp += `┄════🎉发现宝箱═══━┄\n`;
                        }
                        haveNull = false;
                        temp += ` [宝箱${index}]${prop_1.chestBoxLv_CN[prop_1.chestBoxLv[item.leve]]}\n`;
                    }
                }
            }
            temp += `┗┄━${this.at()}━┄`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.me_pos = me_pos;
