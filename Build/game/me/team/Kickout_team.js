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
exports.kickout_team = void 0;
const common_1 = __importDefault(require("../../../shared/game/common"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const example_1 = require("../../temp/text/example");
const task_base_1 = require("./../../task_base");
class kickout_team extends task_base_1.task_base {
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
            let index = common_1.default.getNumber(this.content.replace(this.matchKey, ''));
            let req = yield sever_1.default.callApi('team/KicOut_team', { userId: this.userId, index: index });
            if (req.err) {
                this.sendErr(req.err);
                return;
            }
        });
    }
    menu() {
        new example_1.text_example_style().setCommand('踢出成员 + 成员ID').setExample('踢出成员1').sendMsg(this.channel_id);
    }
}
exports.kickout_team = kickout_team;
