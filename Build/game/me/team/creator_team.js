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
exports.creator_team = void 0;
const text_length_1 = require("./../../../unity/text_length");
const example_1 = require("./../../temp/text/example");
const bot_1 = __importDefault(require("../../../unity/bot"));
const task_base_1 = require("./../../task_base");
const user_1 = require("../../../shared/game/user");
const sever_1 = __importDefault(require("../../../unity/sever"));
class creator_team extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            // 创建工会
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let name = this.content.replace(this.matchKey, '');
            if (name.length <= 0) {
                this.log('工会名字不能为空哦');
                return;
            }
            let text = new text_length_1.text_length();
            if (text.getlength(name) > 10) {
                this.log('创建的的工会名称太长~');
                return;
            }
            let req = yield sever_1.default.callApi('team/Creator_team', { userId: this.userId, name: name });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `┏┄════🏰创建完成═══━┄\n`;
            temp += `<emoji:147>成功创建工会:${name}\n`;
            temp += `🔻消耗${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
            temp += `▶️还有${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
            temp += `┗┄━${this.at()}━┄`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
    menu() {
        new example_1.text_example_style().setCommand('创建工会 + 工会名').setExample('创建工会宝宝巴士').sendMsg(this.channel_id);
    }
}
exports.creator_team = creator_team;
