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
exports.me_attribute = void 0;
const embed_1 = require("./../temp/embed/embed");
const task_base_1 = require("./../task_base");
const sever_1 = __importDefault(require("../../unity/sever"));
const attribute_1 = require("../temp/text/attribute");
const setUp_1 = require("../../shared/game/setUp");
const common_1 = __importDefault(require("../../unity/common"));
const body_1 = require("../../shared/game/body");
/**
* 查看我的属性
*/
class me_attribute extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield sever_1.default.callApi('Me_Attribute', { userId: this.userId });
            if (!res.isSucc) {
                this.sendErr(res.err);
                return;
            }
            let data = res.res;
            if (data.userCfg.textStyle == setUp_1.textStyle.card) {
                let out_attribute = data.body.out_attribute;
                let temp = new embed_1.embed_style();
                temp.setTitle(data === null || data === void 0 ? void 0 : data.body.title.name);
                temp.setIcon(this.userIcon);
                temp.setTips('属性');
                temp.addLine(`Ⓜ️名称:${data.body.name}`);
                temp.addLine(`👑血统${body_1.ancestryLeve[data.ancestry.leve]}级${data.ancestry.title}`);
                temp.addLine(`🔥等级:${data.body.leve}`);
                temp.addLine(`⏳经验:${common_1.default.BN(data.body.exp)}/${common_1.default.BN(data.body.exp_max)}`);
                temp.addLine(`⚜️声望值:${common_1.default.BN(data.body.rankscore)}`);
                temp.addLine(`♥️生命:${common_1.default.BN(data.body.hp)}/${common_1.default.BN(out_attribute.hp_max)}`);
                temp.addLine(`🔮魔法攻击:${common_1.default.BN(out_attribute.MagicAttack)}`);
                temp.addLine(`🌟魔法防御:${common_1.default.BN(out_attribute.MagicDefense)}`);
                temp.addLine(`🔪物理攻击:${common_1.default.BN(out_attribute.PhysicalAttacks)}`);
                temp.addLine(`🔰物理防御:${common_1.default.BN(out_attribute.PhysicalDefense)}`);
                temp.addLine(`💖每秒回复:${common_1.default.BN(out_attribute.secondResHp)}`);
                temp.sendMsg(this.channel_id);
            }
            else if (data.userCfg.textStyle == setUp_1.textStyle.text) {
                new attribute_1.text_attribute_style().sendData(data.body).sendAncestry(data.ancestry).sendMsg(this.channel_id);
            }
        });
    }
}
exports.me_attribute = me_attribute;
