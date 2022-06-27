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
exports.me_skill = void 0;
const embed_1 = require("./../temp/embed/embed");
const userCfg_1 = require("../../interface/userCfg");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_skill extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            //         ┄════👑我的背包══━┄
            // [0](破烂)吃水果的叉子+0
            // ┗┄━═════════━┄
            // ┏┄═══👑指令提示══━┄
            // [查看背包装备 + 数字]查看指定装备属性
            // [穿装备 + 数字]装备上指定装备
            // [销毁装备 + 数字]丢弃指定装备
            // [销毁全部装备]丢弃背包全部装备
            // [拍卖装备 + 数字]拍卖指定装备
            // ┗┄━═════════━┄
            let req = yield sever_1.default.callApi('Me_skill', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.card) {
                let temp = new embed_1.embed_style();
                temp.setTitle('👑我的技能');
                temp.setIcon(this.userIcon);
                temp.setTips('我的技能');
                for (let index = 0; index < data.skillList.length; index++) {
                    const name = data.skillList[index];
                    temp.addLine(`[${index}]${name}`);
                }
                temp.sendMsg(this.channel_id);
            }
            else {
                let temp = ` ┏┄┄👑我的技能━┄\n`;
                for (let index = 0; index < data.skillList.length; index++) {
                    const name = data.skillList[index];
                    temp += `[${index}]${name}\n`;
                }
                temp += `┗┄━${this.at()}━┄`;
                yield bot_1.default.sendText(this.channel_id, temp, this.content);
            }
            let temps = ``;
            temps += `┏┄══👑指令提示═━┄\n`;
            temps += `[查询技能 + 名称]查询技能详细\n`;
            temps += `[遗忘技能 + 数字]废弃指定技能\n`;
            temps += `┗┄━━━━━━━━━┄\n`;
            bot_1.default.sendText(this.channel_id, temps, this.content);
        });
    }
}
exports.me_skill = me_skill;
