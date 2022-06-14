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
exports.auction_offer = void 0;
const auction_look_1 = require("./auction_look");
const bot_1 = __importDefault(require("../../unity/bot"));
const common_1 = __importDefault(require("../../unity/common"));
const task_base_1 = require("./../task_base");
const sever_1 = __importDefault(require("../../unity/sever"));
const __1 = require("../..");
class auction_offer extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == this.matchKey) {
                this.notNum();
                return;
            }
            let offerNum = Math.ceil(common_1.default.getNumber(this.content));
            if (offerNum <= 0) {
                this.notZeo();
                return;
            }
            // 服务器效验钱包是否足够支付
            let req = yield sever_1.default.callApi('auction/Auction_offer', { userId: this.userId, addNum: offerNum });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            else {
                (0, __1.log)('出价错误');
            }
        });
    }
    notNum() {
        let temp = ``;
        temp += `<emoji:147>出价指令：出价 + 加价金币\n`;
        temp += `🌰栗子:@${bot_1.default.getBot_name()} 出价1`;
        bot_1.default.sendText(this.channel_id, temp);
        new auction_look_1.auction_look(...this.args);
    }
    notZeo() {
        this.log(`出价好像太低了~`);
        new auction_look_1.auction_look(...this.args);
    }
}
exports.auction_offer = auction_offer;
