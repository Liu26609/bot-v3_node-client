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
exports.me_ancestry = void 0;
const text_style_1 = require("./../../temp/text/text_style");
const example_1 = require("./../../temp/text/example");
const body_1 = require("../../../shared/game/body");
const common_1 = __importDefault(require("../../../shared/game/common"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
const db_1 = __importDefault(require("../../../unity/db"));
class me_ancestry extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('ancestry/Me_Ancestry', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = new text_style_1.text_style();
            temp.setTitle(`👑我的进化`);
            temp.addLine(`Ⓜ️出自:${data.ancestry.from}`);
            temp.addLine(`🌏来源:${db_1.default.getMapName()[data.ancestry.formId]}`);
            temp.addLine(`👑${body_1.ancestryLeve[data.info.leve]}级[${data.ancestry.title}]`);
            if (data.info.todayGetExp <= 0) {
                temp.addLine(`🧬进化点已达今日上限`);
            }
            else {
                temp.addLine(`🧬进化点(${data.info.exp}/${data.info.exp_max})`);
            }
            temp.addLine(`┄════成长分数══━┄`);
            temp.addLine(`♥️最大生命${data.ancestry.base.hp_max}分🔪物理攻击${data.ancestry.base.PhysicalAttacks}分`);
            temp.addLine(`🔰物理防御${data.ancestry.base.PhysicalDefense}分🔮魔法攻击${data.ancestry.base.MagicAttack}分`);
            temp.addLine(`🌟魔法防御${data.ancestry.base.MagicDefense}分💖生命回复${data.ancestry.base.secondResHp}分`);
            temp.addLine(`┄════附带技能══━┄`);
            temp.addLine(`[${data.SK.name}]`);
            temp.addLine(`${common_1.default.getSkDesc(data.SK)}`);
            temp.addLine(`<emoji:147>成长分和技能会随着进化等级变化`);
            temp.setEnd(`┗┄${this.at()}┄`);
            temp.sendMsg(this.channel_id);
            new example_1.text_example_style().setCommand(`重置进化:更换一个进化路线`).setExample('重置进化').sendMsg(this.channel_id);
            ;
        });
    }
}
exports.me_ancestry = me_ancestry;
