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
exports.horse_look = void 0;
const PtlHorse_1 = require("../../../shared/protocols/minGame/PtlHorse");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const example_1 = require("../../temp/text/example");
const task_base_1 = require("../../task_base");
class horse_look extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('minGame/Horse', { userId: this.userId, type: PtlHorse_1.HORSE_TYPE.look });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = `ââââð°èµé©¬ç¬¬${data.round}è½®ââââ\n`;
            if (data.state == PtlHorse_1.HORSE_STATE.wait) {
                temp += `èµäºç¶æ:ç­å¾åèµä¸­...\n`;
                new example_1.text_example_style().setCommand('åèµæä»¤:åèµ + å® ç©ID').setExample('åèµ2').sendMsg(this.channel_id);
            }
            else {
                temp += `èµäºç¶æ:æ­£å¨æ¿çæ¯èµä¸­...\n`;
                temp += `ç°åºè®°èä¼ç¨åæ¥éèµäºç°åº\n`;
            }
            temp += `ð§§èµäºå¥å±âï¸å¼ºåç¢çx58888\n`;
            temp += `ââ${this.at()}â`;
            bot_1.default.sendText(this.channel_id, temp);
            /**
             * ââââð°çæ°ç¬¬75è½®ââââ
    ð·ï¸æ¬è½®æ°å­è¿æ599.999ç§ç»æ
    âæ°å­èå´[100 - 10000]ä¹é´
    ðæ¬è½®å¨æå·²ç1æ¬¡
    ð§§ç´¯è®¡å¥å±âï¸å¼ºåç¢çx1186
    ð¥³ä¸ä¸è½®èµ¢å®¶:é»éµ
    âââ@æ¥è½© ââ
             */
        });
    }
}
exports.horse_look = horse_look;
