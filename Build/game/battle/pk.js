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
exports.pk = void 0;
const example_1 = require("./../temp/text/example");
const task_base_1 = require("./../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const battleTemp_1 = require("../temp/text/battleTemp");
class pk extends task_base_1.task_base {
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
            let pkList = this.content.split('<@!');
            let battleId = [];
            for (let index = 0; index < pkList.length; index++) {
                const element = pkList[index];
                const list = element.split('>');
                for (let index = 0; index < list.length; index++) {
                    const itemId = list[index];
                    if (itemId && itemId.length > 10) {
                        battleId.push(itemId);
                    }
                }
            }
            let newArr = [...new Set(battleId)];
            if (newArr.length <= 0) {
                this.menu();
                return;
            }
            let req = yield sever_1.default.callApi('battle/PkRank', { userId: this.userId, attackId: newArr });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            let temp = ``;
            let battleTemp = new battleTemp_1.text_battleTemp_style(this.UserCfg).sendData(data);
            battleTemp.setHurtLotTitle_me(`?????????????????????????????????????`);
            battleTemp.setHurtLotTitle_enemy(`???????????????????????????????????????????`);
            temp += battleTemp.getSkillHurt(0);
            temp += battleTemp.getSkillHurt(1);
            temp += `???????????????????????????????????????????\n`;
            temp += `<emoji:187>???????????????${data.battleRound}??????\n`;
            temp += battleTemp.getKillProcess();
            temp += `?????????????????????????????????????\n`;
            if (battleTemp.getReward()) {
                temp += battleTemp.getReward();
            }
            else {
                temp += `????????????????????????????????????????`;
            }
            temp += `\n??????${this.at()}???`;
            temp += `\n<emoji:147>??????????????????????????????????????????~`;
            // bot.sendText(this.channel_id, `???${newArr.length}???????????????PK`)
            yield bot_1.default.sendText(this.channel_id, temp, this.matchKey);
        });
    }
    menu() {
        new example_1.text_example_style().setCommand('PK??????:PK + @PK?????????').setExample('PK@?????????').sendMsg(this.channel_id);
    }
}
exports.pk = pk;
