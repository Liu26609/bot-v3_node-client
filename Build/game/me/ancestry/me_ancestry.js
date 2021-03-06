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
            temp.setTitle(`πζηθΏε`);
            temp.addLine(`βοΈεΊθͺ:${data.ancestry.from}`);
            temp.addLine(`πζ₯ζΊ:${db_1.default.getMapName()[data.ancestry.formId]}`);
            temp.addLine(`π${body_1.ancestryLeve[data.info.leve]}ηΊ§[${data.ancestry.title}]`);
            if (data.info.todayGetExp <= 0) {
                temp.addLine(`π§¬θΏεηΉε·²θΎΎδ»ζ₯δΈι`);
            }
            else {
                temp.addLine(`π§¬θΏεηΉ(${data.info.exp}/${data.info.exp_max})`);
            }
            temp.addLine(`βββββζιΏεζ°ββββ`);
            temp.addLine(`β₯οΈζε€§ηε½${data.ancestry.base.hp_max}επͺη©ηζ»ε»${data.ancestry.base.PhysicalAttacks}ε`);
            temp.addLine(`π°η©ηι²εΎ‘${data.ancestry.base.PhysicalDefense}επ?ι­ζ³ζ»ε»${data.ancestry.base.MagicAttack}ε`);
            temp.addLine(`πι­ζ³ι²εΎ‘${data.ancestry.base.MagicDefense}επηε½εε€${data.ancestry.base.secondResHp}ε`);
            temp.addLine(`βββββιεΈ¦ζθ½ββββ`);
            temp.addLine(`[${data.SK.name}]`);
            temp.addLine(`${common_1.default.getSkDesc(data.SK)}`);
            temp.addLine(`<emoji:147>ζιΏεεζθ½δΌιηθΏεη­ηΊ§εε`);
            temp.setEnd(`ββ${this.at()}β`);
            temp.sendMsg(this.channel_id);
            new example_1.text_example_style().setCommand(`ιη½?θΏε:ζ΄ζ’δΈδΈͺθΏεθ·―ηΊΏ`).setExample('ιη½?θΏε').sendMsg(this.channel_id);
            ;
        });
    }
}
exports.me_ancestry = me_ancestry;
