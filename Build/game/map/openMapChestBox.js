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
exports.openMapChestBox = void 0;
const tsrpc_1 = require("tsrpc");
const prop_1 = require("../../shared/game/prop");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
class openMapChestBox extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `￣￣￣￣￣＼打开宝箱／￣￣￣￣￣
打开指令：打开宝箱 + 数字
如:@我 打开宝箱1
ps:宝箱会在地图上击杀怪物后随机掉落
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            // 判断宝箱ID
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let openStr = this.content.replace(this.matchKey, '');
            let openIndex = Math.ceil(Number(openStr));
            if (isNaN(openIndex) || openIndex < 0 || openIndex > 100000000) {
                this.sendErr({
                    message: '打开宝箱的数字不合法',
                    type: tsrpc_1.TsrpcErrorType.ApiError
                });
                return;
            }
            let req = yield sever_1.default.callApi('map/OpenMapChestBox', { userId: this.userId, openIndex: openIndex });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = ``;
            temp += `┏┄════✨宝箱奖励═══━┄\n`;
            temp += `┣你打开了宝箱！咻咻咻在里面获得了:\n`;
            if (data.reward.length > 0) {
                data.reward.forEach(item => {
                    temp += `┣${prop_1.rewardKey_CN[prop_1.rewardKey[item.key]]}+${item.val}\n`;
                });
            }
            temp += `┗┄━══════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
            //         ￣￣￣￣￣＼盲盒奖励／￣￣￣￣￣
            // @楚轩 打开了100个盲盒🎁还剩1546270个获得奖励如下:
            // ⏳经验+157400
            // 💰金币+8250
            // 💳装备升级卡+8
            // ✝️正义值+5977
            // 💳装备强化卡+2
            // 💳称号卡+1
            // <emoji:147>打怪，参与各种活动有，拍卖可获得盲盒
            // ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
        });
    }
}
exports.openMapChestBox = openMapChestBox;
