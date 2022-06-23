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
exports.auction = void 0;
const auction_look_1 = require("./auction_look");
const prop_1 = require("../../shared/game/prop");
const task_base_1 = require("./../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const user_1 = require("../../shared/game/user");
const common_1 = __importDefault(require("../../shared/game/common"));
const sever_1 = __importDefault(require("../../unity/sever"));
class auction extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == this.matchKey) {
                new auction_look_1.auction_look(...this.args);
                return;
            }
            let auctionStr = this.content.replace(this.matchKey, '');
            let type; //拍卖类型
            let key;
            let cont = Math.ceil(common_1.default.getNumber(auctionStr));
            if (auctionStr.includes('装备')) {
                type = prop_1.autionType.equip;
                key = cont;
                if (cont < 0) {
                    this.log('拍卖装备:好像没有在背包内找到此ID装备');
                    return;
                }
            }
            else if (auctionStr.includes(user_1.walletKey_CNText[user_1.walletKey[user_1.walletKey.BlindBox]])) {
                type = prop_1.autionType.wallet;
                key = user_1.walletKey.BlindBox;
            }
            else if (auctionStr.includes(user_1.walletKey_CNText[user_1.walletKey[user_1.walletKey.changeNameCard]])) {
                type = prop_1.autionType.wallet;
                key = user_1.walletKey.changeNameCard;
            }
            else if (auctionStr.includes(user_1.walletKey_CNText[user_1.walletKey[user_1.walletKey.driedFish]])) {
                type = prop_1.autionType.wallet;
                key = user_1.walletKey.driedFish;
            }
            else if (auctionStr.includes(user_1.walletKey_CNText[user_1.walletKey[user_1.walletKey.resLife]])) {
                type = prop_1.autionType.wallet;
                key = user_1.walletKey.resLife;
            }
            else if (auctionStr.includes(user_1.walletKey_CNText[user_1.walletKey[user_1.walletKey.skillCard]])) {
                type = prop_1.autionType.wallet;
                key = user_1.walletKey.skillCard;
            }
            else if (auctionStr.includes(user_1.walletKey_CNText[user_1.walletKey[user_1.walletKey.titleCard]])) {
                type = prop_1.autionType.wallet;
                key = user_1.walletKey.titleCard;
            }
            else if (auctionStr.includes(user_1.walletKey_CNText[user_1.walletKey[user_1.walletKey.transferCard]])) {
                type = prop_1.autionType.wallet;
                key = user_1.walletKey.transferCard;
            }
            else if (auctionStr.includes(user_1.walletKey_CNText[user_1.walletKey[user_1.walletKey.strengthen]])) {
                type = prop_1.autionType.wallet;
                key = user_1.walletKey.strengthen;
            }
            else if (auctionStr.includes(user_1.walletKey_CNText[user_1.walletKey[user_1.walletKey.spiritBall]])) {
                type = prop_1.autionType.wallet;
                key = user_1.walletKey.spiritBall;
            }
            else if (auctionStr.includes(user_1.walletKey_CNText[user_1.walletKey[user_1.walletKey.evolveCard]])) {
                type = prop_1.autionType.wallet;
                key = user_1.walletKey.evolveCard;
            }
            if (typeof (type) == 'undefined') {
                new auction_look_1.auction_look(...this.args);
                return;
            }
            if (cont <= 0 && type != prop_1.autionType.equip) {
                bot_1.default.sendText(this.channel_id, '数量不能小于1');
                return;
            }
            let req = yield sever_1.default.callApi('auction/Auction', {
                userId: this.userId,
                key: key,
                type: type,
                cont: cont
            });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
        });
    }
}
exports.auction = auction;
