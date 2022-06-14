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
exports.addMusic = void 0;
const bot_1 = __importDefault(require("../../unity/bot"));
const task_base_1 = require("./../task_base");
class addMusic extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    menu() {
        let temp = `点歌系统`;
        temp += `${bot_1.default.getBot_name()},输入以下指令`;
        temp += `▶️输入[点歌] 开始点歌`;
        temp += `▶️输入[当前歌单] 当前播放列表`;
        bot_1.default.sendText(this.channel_id, temp);
    }
}
exports.addMusic = addMusic;
