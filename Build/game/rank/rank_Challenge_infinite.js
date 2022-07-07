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
exports.rank_Challenge_infinite = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const common_1 = __importDefault(require("../../shared/game/common"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("../task_base");
// 无尽回廊排行榜
class rank_Challenge_infinite extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('rank/Rank_Challenge_infinte', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = ``;
            temp += `࿐⋆⍣ᐖ无尽回廊排行榜ᐛ⍣࿐࿒\n`;
            for (let index = 0; index < data.list.length; index++) {
                let e = data.list[index];
                temp += `${common_1.default.getRankStr(index)}🏴第${e.val}层${e.icon}${e.name}\n`;
            }
            temp += `࿐⋆⍣ᐖ无尽回廊排行榜ᐛ⍣࿐࿒\n`;
            temp += `${this.at()}我的排名${common_1.default.getRankStr(data.meIndex)}`;
            bot_1.default.sendText(this.channel_id, temp, this.matchKey);
        });
    }
}
exports.rank_Challenge_infinite = rank_Challenge_infinite;
