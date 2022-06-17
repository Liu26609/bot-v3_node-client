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
exports.rank_menu = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const task_base_1 = require("../task_base");
class rank_menu extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let temp = `࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ目前可查看排行榜ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒
📑宠物等级排行榜📑强化排行榜
📑宠物数量排行榜📑签到排行榜
📑工会等级排行榜📑声望排行榜
📑称号属性排行榜📑等级排行榜
📑称号重置排行榜📑猜数排行榜
📑猜数欧皇排行榜📑金币排行榜
📑基因锁排行榜  📑进化排行榜
📑宠物战力排行榜📑战力排行榜
📑红名排行榜    📑正义排行榜
📑魔攻排行榜📑物攻排行榜
📑魔防排行榜📑物防排行榜
📑工会贡献排行榜📑生命排行榜
࿒࿐⋆ ˃̵͙˂̵͙⍣ᐖ目前可查看排行榜ᐛ⍣˃̵͙˂̵͙ ⋆࿐࿒`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
}
exports.rank_menu = rank_menu;
