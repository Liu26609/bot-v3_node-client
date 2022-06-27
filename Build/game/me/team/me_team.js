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
exports.me_team = void 0;
const team_1 = require("../../../shared/game/team");
const bot_1 = __importDefault(require("../../../unity/bot"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("./../../task_base");
class me_team extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('team/Me_team', { userId: this.userId });
            if (req.err) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (!data.info) {
                this.notTeam();
                return;
            }
            console.log(data);
            let team = `┏┄═══🏰我的工会══━┄
工会名称:${data.info.name}
我的职位：${team_1.teamLeve_CN[team_1.teamLeve[data.myLeve]]}
公会等级:${data.info.leve}(${data.info.exp}/${data.info.maxExp})
我的贡献:${data.myContribute}
工会贡献:${data.info.contribution}
公会人数:${data.info.userCont}/${data.info.maxUserCont}
┏┄═══🏰工会增益══━┄
 ♥️最大生命+${data.info.gain.hp_max}
🔪物理攻击+${data.info.gain.PhysicalAttacks}
🔰物理防御+${data.info.gain.PhysicalDefense}
🔮魔法攻击+${data.info.gain.MagicAttack}
🌟魔法防御+${data.info.gain.MagicDefense}
┗┄━${this.at()}━┄
<emoji:147>击杀其他玩家将获得贡献值`;
            bot_1.default.sendText(this.channel_id, team, this.content);
            this.ctlMenu(data.myLeve);
        });
    }
    ctlMenu(leve) {
        let temp = `┏┄═══🏰工会指令══━┄\n`;
        if (leve == team_1.teamLeve.creator) {
            temp += `[工会商店]查看工会商店\n`;
            temp += `[解散工会]解散工会\n`;
            temp += `[工会改名 + 名称]修改工会名称\n`;
            temp += `[成员列表]查看工会全部成员\n`;
            temp += `[踢出 + 成员ID]踢出工会指定成员\n`;
            temp += `[生成邀请码]创建一个工会加入代码\n`;
            temp += `┗┄━${this.at()}━┄`;
        }
        else if (leve == team_1.teamLeve.teamMember) {
            temp += `[退出工会]退出此工会\n`;
            temp += `[成员列表]查看工会全部成员\n`;
            temp += `┗┄━${this.at()}━┄`;
        }
        bot_1.default.sendText(this.channel_id, temp, this.content);
    }
    notTeam() {
        let team = `┏┄═══🏰我的工会══━┄
你还未加入任何工会哦~
[加入工会 + 邀请码]加入工会一个指定工会
[创建工会 + 名字]创建一个工会
┗┄━${this.at()}━┄
<emoji:147>邀请码需要会长艾特机器人发送[创建邀请码]`;
        bot_1.default.sendText(this.channel_id, team, this.content);
    }
}
exports.me_team = me_team;
