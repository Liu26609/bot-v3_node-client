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
const base64_safe_1 = __importDefault(require("./unity/base64_safe"));
const bot_1 = __importDefault(require("./unity/bot"));
const sever_1 = __importDefault(require("./unity/sever"));
exports.log = console.log;
exports.err = console.error;
exports.info = console.info;
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
        let image = `https://21-1257174510.cos.ap-nanjing.myqcloud.com/temp/equip.png?`;
        //     // 装备图标
        image += `imageMogr2/interlace/0/quality/75|watermark/1/image/${base64_safe_1.default.urlEncode(`http://21-1257174510.cos.ap-nanjing.myqcloud.com/equip/1.png`)}/dx/195/dy/220`;
        //     // 称号
        image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe_1.default.urlEncode(`十米的大刀+10`)}/font/${base64_safe_1.default.urlEncode('simkai楷体.ttf')}/fill/${base64_safe_1.default.urlEncode(`#ffff00`)}/fontsize/32/dx/10/dy/390`;
        //      // 品质
        image += `imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe_1.default.urlEncode(`作者专属(武器)`)}/font/${base64_safe_1.default.urlEncode('simkai楷体.ttf')}/fill/${base64_safe_1.default.urlEncode(`#00ffff`)}/fontsize/24/dx/20/dy/350`;
        //      // 属性
        // let str = `里面记录了各种咒语书中片断伟大的神正义之主我来到你面前我主乃是为了能见到你的尊容我认识你我知道你的名字我来到你面前我带来正义我为你驱走鬼怪`;
        // str = str.replace(/[^\x00-\xff]/g, "$&\x01").replace(/.{35}\x01?/g, "$&b").replace(/\x01/g, "")
        // let arry = str.split('b')
        // for (let index = 0; index < arry.length; index++) {
        //     const s = arry[index];
        //     image += `/imageMogr2/thumbnail/!50p|watermark/2/text/${base64_safe.urlEncode(s)}/font/${base64_safe.urlEncode('simkai楷体.ttf')}/fill/${base64_safe.urlEncode(`#ffffff`)}/fontsize/16/dx/12/dy/${20 + (arry.length - index) * 20}`;
        // }
        (0, exports.log)('imgLink', image);
    });
}
