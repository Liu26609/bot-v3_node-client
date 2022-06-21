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
exports.me_destroyMeSkill = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class me_destroyMeSkill extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `┏┄════👑遗忘技能═══━┄
遗忘指令：遗忘技能 + 数字
如:@我 遗忘技能1
ps:数字为[我的技能]的id
┗┄━${this.at()}━┄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let destroyIndex = this.content.replace(this.matchKey, '');
            if (typeof (destroyIndex) == 'undefined' || destroyIndex == '' || isNaN(Number(destroyIndex))) {
                this.menu();
                return;
            }
            let req = yield sever_1.default.callApi('Me_destroyMeSkill', { userId: this.userId, destroyIndex: Math.ceil(Number(destroyIndex)) });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            this.log(`我之前学会了哪些技能来着？(技能遗忘成功)`);
        });
    }
}
exports.me_destroyMeSkill = me_destroyMeSkill;
