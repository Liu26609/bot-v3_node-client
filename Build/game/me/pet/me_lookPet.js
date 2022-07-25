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
exports.me_lookPet = void 0;
const bot_1 = __importDefault(require("../../../unity/bot"));
const common_1 = __importDefault(require("../../../shared/game/common"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("./../../task_base");
const gm = require('gm').subClass({ imageMagick: true });
class me_lookPet extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.content == this.matchKey) {
                this.menu();
                return;
            }
            let index = Math.ceil(common_1.default.getNumber(this.content.replace(this.matchKey, '')));
            let req = yield sever_1.default.callApi('pet/Me_petLook', { userId: this.userId, index: index });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            // new text_baseAttribute_style().sendData(data.base).setTitle(`🥚宠物属性`).sendMsg(this.channel_id);
            this.renderImage(data.base);
        });
    }
    menu() {
        let temp = ``;
        temp += `<emoji:147>提示：查看宠物属性指令:查看宠物 + ID\n`;
        temp += `🌰栗子:@${bot_1.default.getBot_name()} 查看宠物0`;
        bot_1.default.sendText(this.channel_id, temp, this.content);
    }
    renderImage(data) {
        let time = Date.now();
        console.log('start');
        let image = gm(657, 387, "#ddff99f3");
        image.font('./font/ttf_cn.ttf', 32);
        image.fill("#ffffff");
        image.draw(`image Over 0, 0, 657, 387 "./image/怪物属性背景.png"`);
        image.draw(`image Over 53, 35, 250, 300 "./image/enemy/${data.showId}.png"`);
        image.draw(`image Over 0, 0, 657, 387 "./image/怪物属性面板.png"`);
        // 战力值
        image.drawText(105, 377, `${data.military}`);
        // 称号图片
        // NorthWest
        // image.gravity('NorthWest')
        image.fontSize(32);
        image.fill("#ffffff");
        image.drawText(370, 70, data.name);
        image.fontSize(50);
        image.drawText(380, 130, `Lv.${data.leve}`);
        image.font('./font/MSungPRC-Xbold.ttf', 21);
        image.fontSize(14);
        image.drawText(380, 155, `EXP：${common_1.default.BN(data.exp, 0)}/${common_1.default.BN(data.exp_max, 0)}`);
        image.font('./font/ttf_cn.ttf', 21);
        image.fontSize(21);
        let baseY = 208;
        let offset = 23;
        image.font('./font/MSungPRC-Xbold.ttf', 19);
        image.drawText(412, baseY, `${common_1.default.BN(data.hp, 1)}/${common_1.default.BN(data.out_attribute.hp_max, 1)}`);
        image.drawText(412, baseY + offset, `物理攻击${common_1.default.BN(data.out_attribute.PhysicalAttacks, 4)}`);
        image.drawText(412, baseY + offset * 2, `物理防御${common_1.default.BN(data.out_attribute.PhysicalDefense, 4)}`);
        image.drawText(412, baseY + offset * 3, `魔法攻击${common_1.default.BN(data.out_attribute.MagicAttack, 4)}`);
        image.drawText(412, baseY + offset * 4, `魔法防御${common_1.default.BN(data.out_attribute.MagicDefense, 4)}`);
        image.drawText(412, baseY + offset * 5, `生命回复${common_1.default.BN(data.out_attribute.secondResHp, 4)}`);
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
exports.me_lookPet = me_lookPet;
