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
exports.setUp = void 0;
const setUp_1 = require("../../shared/game/setUp");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class setUp extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('GetUserSetUp', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let str = `┏┄════👑机器人设置═══━┄\n`;
            str += `┣[消息样式]:${setUp_1.textStyle_CN[setUp_1.textStyle[data.textStyle]]}\n`;
            // str += `┣[挂机链式]:上次设置时间2022/5/22/17:47\n`;
            str += `┣┄════👑子频道设置═══━┄\n`;
            str += `┣[战斗伤害统计]:开\n`;
            str += `┣[战斗敌方统计]:开\n`;
            str += `┣[战斗过程]:开\n`;
            str += `┗┄━══════════━┄`;
            bot_1.default.sendText(this.channel_id, str);
        });
    }
    render() {
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }
        let setKey = this.content.replace(this.matchKey, '');
        let reqKey;
        let reqVal;
        if (setKey == '消息样式文本') {
            reqKey = 'textStyle';
            reqVal = setUp_1.textStyle.text;
        }
        else if (setKey == '消息样式卡片') {
            reqKey = 'textStyle';
            reqVal = setUp_1.textStyle.card;
        }
        if (typeof (reqKey) == 'undefined' || typeof (reqVal) == 'undefined') {
            // 判断是否为子频道设置
            bot_1.default.sendText(this.channel_id, '未开发设置');
            return;
        }
        sever_1.default.callApi('Me_setUp', { userId: this.userId, setKey: reqKey, setVal: reqVal });
        bot_1.default.sendText(this.channel_id, '设置完成');
    }
}
exports.setUp = setUp;
