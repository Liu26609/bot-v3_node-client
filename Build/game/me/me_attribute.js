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
const embed_attribute_style_1 = require("./../temp/embed/embed_attribute_style");
const task_base_1 = require("./../task_base");
const sever_1 = __importDefault(require("../../unity/sever"));
const attribute_1 = require("../temp/text/attribute");
const userCfg_1 = require("../../interface/userCfg");
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
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.card) {
                new embed_attribute_style_1.embed_attribute_style().setData(data.body).setTeam(data.team).setAncestry(data.ancestry).sendMsg(this.channel_id);
            }
            else if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.text) {
                new attribute_1.text_attribute_style().setData(data.body).setTeam(data.team).setAncestry(data.ancestry).sendMsg(this.channel_id);
            }
        });
    }
}
exports.me_attribute = me_attribute;
