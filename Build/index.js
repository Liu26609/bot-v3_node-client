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
        yield sever_1.default.setApiUrl(botCfg_1.default.apiUrl);
        sever_1.default.setWsUrl(botCfg_1.default.wsUrl).then(() => {
            (0, exports.info)('start');
            bot_1.default.setBotConfig(botCfg_1.default);
            new game_1.default();
            // test()
        });
    });
}
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        // log('匹配相识度', common.xsd('普通攻击(魔法', '普通攻击(魔法)'))
        // let data = await sever.callApi('Battle', {})
        //     let image = `https://21-1257174510.cos.ap-nanjing.myqcloud.com/temp/equip.png?`;
        //     // 装备图标
        //     image += `imageMogr2/interlace/0/quality/75|watermark/1/image/${base64_safe.urlEncode(`http://21-1257174510.cos.ap-nanjing.myqcloud.com/equip/1.png`)}/dx/195/dy/220`;
        //     // 称号
        //     image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`十米的大刀+10`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffff00`)}/fontsize/32/dx/10/dy/390`;
        //      // 品质
        //      image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`作者专属(武器)`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#00ffff`)}/fontsize/24/dx/20/dy/350`;
        //      // 属性
        //      image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(`0
        // 1亿
        // 150万
        // 240十万
        // 5.万
        // 9998.0万`)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffffff`)}/fontsize/20/dx/10/dy/215`;
        //     log('imgLink',image)
    });
}
