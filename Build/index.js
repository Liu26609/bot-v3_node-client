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
const db_1 = __importDefault(require("./unity/db"));
const sever_1 = __importDefault(require("./unity/sever"));
exports.log = console.log;
exports.err = console.error;
exports.info = console.info;
start();
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        (0, exports.info)('开始初始化配置s');
        yield db_1.default.init();
        (0, exports.info)('初始化完成', process.env.BOT_NAME);
        yield sever_1.default.setApiUrl(botCfg_1.default.apiUrl);
        const author = process.env.BOT_CONFIG_author || botCfg_1.default.author;
        const appID = process.env.BOT_CONFIG_appID || botCfg_1.default.appID;
        const token = process.env.BOT_CONFIG_token || botCfg_1.default.token;
        botCfg_1.default.author = author;
        botCfg_1.default.appID = appID;
        botCfg_1.default.token = token;
        (0, exports.info)('修改配置', appID);
        sever_1.default.setWsUrl(botCfg_1.default.wsUrl).then(() => {
            (0, exports.info)('开始启动机器人');
            bot_1.default.setBotConfig(botCfg_1.default);
            // 开始测试实例
            new game_1.default();
        });
    });
}
