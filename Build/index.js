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
exports.info = exports.err = exports.log = void 0;
const botCfg_1 = __importDefault(require("./botCfg"));
const game_1 = __importDefault(require("./game"));
const bot_1 = __importDefault(require("./unity/bot"));
const sever_1 = __importDefault(require("./unity/sever"));
exports.log = console.log;
exports.err = console.error;
exports.info = console.info;
// let botCfg = {
//     shards: [0, 1],
//     appID: '', // ID
//     token: '', // token
//     intents: [AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],    // 事件订阅,用于开启可接收的消息类型
//     sandbox: false
// }
start();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        sever_1.default.setApiUrl('https://jfuvyi-lgkyca-8080.preview.myide.io');
        // sever.setApiUrl('http://81.68.240.214:8080/')
        (0, exports.info)('start');
        bot_1.default.setBotConfig(botCfg_1.default);
        new game_1.default();
        test();
    });
}
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        // log('匹配相识度', common.xsd('普通攻击(魔法', '普通攻击(魔法)'))
        // let data = await sever.callApi('Battle', {})
    });
}
