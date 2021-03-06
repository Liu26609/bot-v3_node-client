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
exports.me_petChangeName = void 0;
const embed_1 = require("./../../temp/embed/embed");
const user_1 = require("../../../shared/game/user");
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../shared/game/common"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const text_length_1 = require("../../../unity/text_length");
const task_base_1 = require("../../task_base");
const userCfg_1 = require("../../../interface/userCfg");
const example_1 = require("../../temp/text/example");
class me_petChangeName extends task_base_1.task_base {
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
            let index = common_1.default.getNumber(this.content[4]);
            if (!isNaN(Number(this.content[5]))) {
                index = common_1.default.getNumber(`${this.content[4]}${this.content[5]}`);
            }
            let name = this.content.replace(this.matchKey, '').replace(index.toString(), '');
            if (name.length <= 0) {
                this.log(`?????????????????????????????????~`);
                return;
            }
            let text = new text_length_1.text_length();
            if (text.getlength(name) > 4) {
                this.log(`??????????????????????????????~`);
                return;
            }
            let req = yield sever_1.default.callApi('pet/Me_petChangeName', { userId: this.userId, index: index, name: name });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (this.UserCfg.msgTemplate == userCfg_1.USER_CFG_MSGTEMPLATE.card) {
                let temp = new embed_1.embed_style();
                temp.setIcon(this.userIcon);
                temp.setTitle(`??????????????????????`);
                temp.setTips(`??????????????????????`);
                temp.addLine(`??????????????????????????????????[????????????${index}]?????????~`);
                temp.addLine(`??????????${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}`);
                temp.addLine(`????????????${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}`);
                temp.sendMsg(this.channel_id);
            }
            else {
                let temp = `???????????????????????????????????????????\n`;
                temp += `??????????????????????????????????[????????????${index}]?????????~\n`;
                temp += `??????????${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.condition.val}\n`;
                temp += `????????????${user_1.walletKey_CN[user_1.walletKey[data.pay.condition.key]]}x${data.pay.now}\n`;
                temp += `??????${this.at()}???`;
                bot_1.default.sendText(this.channel_id, temp);
            }
        });
    }
    menu() {
        new example_1.text_example_style().setCommand('????????????????????????:???????????? + ID + ??????').setExample('????????????0??????').sendMsg(this.channel_id);
    }
}
exports.me_petChangeName = me_petChangeName;
