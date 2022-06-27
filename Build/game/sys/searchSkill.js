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
exports.searchSkill = void 0;
const skill_1 = require("./../temp/text/skill");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
const example_1 = require("../temp/text/example");
class searchSkill extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        new example_1.text_example_style().setCommand('查询技能指令：查询技能 + 技能名').setExample('查询技能普通攻击').sendMsg(this.channel_id);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let findSkillName = this.content.replace(this.matchKey, '');
            if (findSkillName.length <= 0) {
                this.menu();
                return;
            }
            let req = yield sever_1.default.callApi('SearchSkill', { userId: this.userId, skillName: findSkillName });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            yield bot_1.default.sendText(this.channel_id, `已为你找到相识度${data.match.toFixed(3)}%的技能`, this.content);
            new skill_1.text_skill_style().sendData(data.skill).sendMsg(this.channel_id);
        });
    }
}
exports.searchSkill = searchSkill;
