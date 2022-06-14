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
exports.changeName_team = void 0;
const sever_1 = __importDefault(require("../../../unity/sever"));
const text_length_1 = require("../../../unity/text_length");
const example_1 = require("../../temp/text/example");
const task_base_1 = require("./../../task_base");
class changeName_team extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let name = this.content.replace(this.matchKey, '');
            if (name.length <= 0) {
                this.log('工会名称不能为空哦');
                return;
            }
            let text = new text_length_1.text_length();
            if (text.getlength(name) > 10) {
                this.log('要修改的工会名称太长~');
                return;
            }
            sever_1.default.callApi('team/ChangeName_team', { userId: this.userId, name: name });
        });
    }
    menu() {
        new example_1.text_example_style().setCommand('工会改名 + 工会名').setExample('工会改名宝宝巴士').sendMsg(this.channel_id);
    }
}
exports.changeName_team = changeName_team;
