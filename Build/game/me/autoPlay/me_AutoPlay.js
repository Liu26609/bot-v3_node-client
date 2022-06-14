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
exports.me_AutoPlay = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
class me_AutoPlay extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == `开始${this.matchKey}`) {
                this.start();
            }
            else if (this.content == `结束${this.matchKey}`) {
                this.end();
            }
            else {
                this.menu();
            }
        });
    }
    menu() {
        let temp = `┏┄════挂机══━┄\n`;
        temp += `1.挂机每挂机一次将消耗1个小鱼干,没有鱼干时将自动停止挂机\n`;
        temp += `2.挂机期间会持续与你等级相符的怪物战斗\n`;
        temp += `3.如果你太弱挂机中你可能会频繁死亡\n`;
        temp += `4.挂机期间艾特机器人将会发送5分钟的挂机状态推送\n`;
        temp += `5.请在个人频道或在不打扰他人的频道开始挂机\n`;
        temp += `┏┄═══👑指令提示══━┄\n`;
        temp += `[开始挂机]开始自动挂机\n`;
        temp += `[结束挂机]结束挂机打怪\n`;
        temp += `┗┄━${this.at()}━┄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    /**
     * 开始自动挂机
     * @returns
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('me/autoPlay/startAutoPlay', { userId: this.userId, autoLeve: 0 });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
        });
    }
    /**
     * 结束自动挂机
     */
    end() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('me/autoPlay/endAutoPlay', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
        });
    }
}
exports.me_AutoPlay = me_AutoPlay;
