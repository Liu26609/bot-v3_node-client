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
exports.me_title = void 0;
const common_1 = __importDefault(require("../../shared/game/common"));
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const task_base_1 = require("./../task_base");
const gm = require('gm').subClass({ imageMagick: true });
class me_title extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('Me_title', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            // const leve = data.title.leve;
            // let temp = `┏┄═══👑我的称号══━┄\n`
            // temp += `⚜️等级：LV.${data.title.leve}(${data.title.exp}/${data.title.exp_max})\n`;
            // temp += `${data.title.name}\n`;
            // if(data.title.todayGetExp > 0){
            //     temp += `🔐今日可获得经验:${data.title.todayGetExp}\n`
            // }else{
            //     temp += `🔒今日称号可获得经验已达上限\n`
            // }
            // temp += ` ♥️最大生命+${data.title.attribute.hp_max * leve}%\n`;
            // temp += `🔪物理攻击+${data.title.attribute.PhysicalAttacks * leve}%\n`;
            // temp += `🔰物理防御+${data.title.attribute.PhysicalDefense * leve}%\n`;
            // temp += `🔮魔法攻击+${data.title.attribute.MagicAttack * leve}%\n`;
            // temp += `🌟魔法防御+${data.title.attribute.MagicDefense * leve}%\n`;
            // temp += `💖每秒回复+${data.title.attribute.secondResHp * leve}%\n`;
            // temp += `<emoji:147>攻击怪物/玩家可提高称号经验,等级越高加成越高\n`;
            // temp += `┗┄${this.at()}┄\n`;
            // temp += `┏┄═══👑指令提示══━┄\n`
            // temp += `🏷️称号改名[称号改名 + 名称]\n`
            // temp += `🔂重置称号[重置称号 + 次数]\n`
            // temp += `┗┄━═════════━┄`
            // bot.sendText(this.channel_id,temp,this.content)
            this.renderImage(data);
        });
    }
    renderImage(data) {
        const leve = data.title.leve;
        let time = Date.now();
        console.log('start');
        let image = gm(324, 384, "#000000");
        image.font('./font/ttf_cn.ttf', 32);
        image.fill("#ffffff");
        image.draw(`image Over 0, 0, 324, 384 "./image/称号面板.png"`);
        image.gravity('Center');
        // 称号图片
        image.draw(`image Over 0,-160, 0, 0 "./image/title/1 (${common_1.default.random(52, 353)}).png"`);
        // NorthWest
        image.gravity('NorthWest');
        image.fontSize(24);
        image.fill("#000000");
        image.fontSize(44);
        image.drawText(30, 75, `LV.${data.title.leve}`);
        image.draw(`image Over 21,142, 280, 6 "./image/exp_bar.png"`);
        image.fontSize(12);
        if (data.title.todayGetExp > 0) {
            image.font('./font/MSungPRC-Xbold.ttf', 12);
            image.drawText(100, 138, `EXP:${data.title.exp}/${data.title.exp_max}`);
            image.font('./font/ttf_cn.ttf', 12);
        }
        else {
            image.drawText(100, 138, 'EXP：今日称号可获得经验已达上限');
        }
        image.fontSize(21);
        let startY = 202;
        let offset = 23;
        image.drawText(108, startY, `最大生命+${data.title.attribute.hp_max * leve}%`);
        image.drawText(108, startY + offset, `物理攻击+${data.title.attribute.PhysicalAttacks * leve}%`);
        image.drawText(108, startY + offset * 2, `物理防御+${data.title.attribute.PhysicalDefense * leve}%`);
        image.drawText(108, startY + offset * 3, `魔法攻击+${data.title.attribute.MagicAttack * leve}%`);
        image.drawText(108, startY + offset * 4, `魔法防御+${data.title.attribute.MagicDefense * leve}%`);
        image.drawText(108, startY + offset * 5, `生命回复+${data.title.attribute.secondResHp * leve}%`);
        image.fontSize(12);
        image.gravity('SouthWest');
        image.drawText(15, 15, `By.${this.userName}`);
        let outId = Date.now();
        let outDir = `./out/${outId}.jpg`;
        image.write(outDir, (err) => {
            console.log(`耗时${(Date.now() - time) / 1000}`);
            console.log('end');
            bot_1.default.sendLocaImage(this.channel_id, outDir);
        });
    }
}
exports.me_title = me_title;
