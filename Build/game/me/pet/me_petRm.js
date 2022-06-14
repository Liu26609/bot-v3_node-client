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
exports.me_petRm = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../unity/common"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("./../../task_base");
class me_petRm extends task_base_1.task_base {
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
            let index = Math.ceil(common_1.default.getNumber(this.content.replace(this.matchKey, '')));
            let req = yield sever_1.default.callApi('pet/Me_petRm', { userId: this.userId, index: index });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            this.log(`你的宠物屁颠屁颠的走了~`);
        });
    }
    menu() {
        let temp = ``;
        temp += `<emoji:147>提示：查看宠物放生指令:宠物放生 + ID\n`;
        temp += `🌰栗子:@${bot_1.default.getBot_name()} 宠物放生0`;
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.me_petRm = me_petRm;
