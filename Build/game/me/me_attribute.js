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
exports.me_attribute = void 0;
const body_1 = require("./../../shared/game/body");
const task_base_1 = require("./../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const common_1 = __importDefault(require("../../shared/game/common"));
const user_1 = require("../../shared/game/user");
const gm = require('gm').subClass({ imageMagick: true });
/**
* 查看我的属性
*/
class me_attribute extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let res = yield sever_1.default.callApi('Me_Attribute', { userId: this.userId });
            if (!res.isSucc) {
                this.sendErr(res.err);
                return;
            }
            let data = res.res;
            // if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.card) {
            //     new embed_attribute_style().setData(data.body).setTeam(data.team).setAncestry(data.ancestry).sendMsg(this.channel_id);
            // } else if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
            // new text_attribute_style().setData(data.body).setTeam(data.team).setAncestry(data.ancestry).sendMsg(this.channel_id);
            // }
            this.renderImage(data.body, data.ancestry);
        });
    }
    renderImage(data, info) {
        let time = Date.now();
        console.log('start');
        let image = gm(657, 387, "#ddff99f3");
        image.font('./font/ttf_cn.ttf', 32);
        image.fill("#ffffff");
        let randomShowId = common_1.default.random(1, 1167);
        let showId = common_1.default.random(1, 1167);
        console.log('showId', showId);
        image.draw(`image Over 0, 0, 360, 387"./image/show/${randomShowId}.png"`);
        image.draw(`image Over 0, 0, 657, 387 "./image/属性背景.png"`);
        image.draw(`image Over 38, 25, 250, 300 "./image/show/${showId}.png"`);
        // 战力值
        image.drawText(105, 377, `${data.military}`);
        // 称号图片
        image.draw(`image Over 70,240, 0, 0 "./image/title/${data.title.showId}.png"`);
        // NorthWest
        // image.gravity('NorthWest')
        image.fontSize(24);
        image.fill("#000000");
        image.drawText(380, 35, data.name);
        image.fontSize(44);
        image.drawText(380, 80, `Lv.${data.leve}`);
        let expReng = 280 * Math.ceil((data.exp / data.exp_max) * 100);
        if (expReng > 280) {
            expReng = 280;
        }
        image.draw(`image Over 355,104, ${expReng}, 6 "./image/exp_bar.png"`);
        image.font('./font/MSungPRC-Xbold.ttf', 21);
        image.fontSize(12);
        image.drawText(440, 110, `EXP：${common_1.default.BN(data.exp, 0)}/${common_1.default.BN(data.exp_max, 0)}`);
        image.font('./font/ttf_cn.ttf', 21);
        image.fontSize(12);
        image.fontSize(21);
        image.drawText(360, 135, `声望值:${data.rankscore}`);
        // 红名值or正义值
        if (data.wallet.evil > 0) {
            image.drawText(360, 160, `${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.evil]]}:${common_1.default.BN(data.wallet.evil, 2)}`);
        }
        else {
            image.drawText(360, 160, `${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.justice]]}:${common_1.default.BN(data.wallet.justice, 2)}`);
        }
        image.drawText(360, 190, `基因锁:${body_1.DNA_CN[body_1.DNA_Leve[data.dnaLock]]}`);
        if (data.ancestry) {
            image.drawText(360, 215, `进化路线:${info.title}`);
        }
        image.font('./font/MSungPRC-Xbold.ttf', 21);
        image.drawText(412, 241, `${common_1.default.BN(data.hp, 1)}/${common_1.default.BN(data.out_attribute.hp_max, 1)}`);
        image.font('./font/ttf_cn.ttf', 21);
        image.drawText(412, 264, `物理攻击:${common_1.default.BN(data.out_attribute.PhysicalAttacks, 4)}`);
        image.drawText(412, 287, `物理防御:${common_1.default.BN(data.out_attribute.PhysicalDefense, 4)}`);
        image.drawText(412, 310, `魔法攻击:${common_1.default.BN(data.out_attribute.MagicAttack, 4)}`);
        image.drawText(412, 333, `魔法防御:${common_1.default.BN(data.out_attribute.MagicDefense, 4)}`);
        image.drawText(412, 356, `生命回复:${common_1.default.BN(data.out_attribute.secondResHp, 4)}`);
        let outId = Date.now();
        let outDir = `./out/${outId}.jpg`;
        image.write(outDir, (err) => {
            console.log(`耗时${(Date.now() - time) / 1000}`);
            console.log('end');
            // ...
            bot_1.default.sendLocaImage(this.channel_id, outDir);
        });
    }
}
exports.me_attribute = me_attribute;
