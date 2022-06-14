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
exports.challenge_image = void 0;
const example_1 = require("./../temp/text/example");
const task_base_1 = require("./../task_base");
const bot_1 = __importDefault(require("../../unity/bot"));
const sever_1 = __importDefault(require("../../unity/sever"));
const body_1 = require("../../shared/game/body");
class challenge_image extends task_base_1.task_base {
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
            let isStart = this.content.replace(this.matchKey, '') == '开始';
            if (!isStart) {
                this.menu();
                return;
            }
            let req = yield sever_1.default.callApi('battle/Challenge_image', { userId: this.userId, isStart: true });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (data.isMax) {
                this.max();
                return;
            }
            if (data.battle) {
                let battleLog = ['', ''];
                let battleList = data.battle.log;
                for (let index = 0; index < battleList.length; index++) {
                    const item = battleList[index];
                    let itemLog = '';
                    itemLog += '🧙' + item.name;
                    for (let index = 0; index < item.list.length; index++) {
                        const free_skill = item.list[index];
                        itemLog += `│▌${free_skill.name}:${free_skill.val}`;
                    }
                    itemLog += '\n';
                    battleLog[item.group] += itemLog;
                }
                let battleConfig = {
                    hurtLog: {
                        me: true,
                        enemy: true
                    },
                    killLog: {
                        open: true,
                    }
                };
                if (battleConfig.hurtLog.me) {
                    let hurtLog = '';
                    hurtLog += `🔥￣￣￣￣＼📄伤害统计／￣￣￣￣🔥\n`;
                    hurtLog += `${battleLog[0]}`;
                    yield bot_1.default.sendText(this.channel_id, hurtLog);
                }
                if (battleConfig.hurtLog.enemy) {
                    let hurtLog = '';
                    hurtLog += `🔥￣￣￣￣＼💌敌方统计／￣￣￣￣🔥\n`;
                    hurtLog += `${battleLog[1]}`;
                    yield bot_1.default.sendText(this.channel_id, hurtLog);
                }
                if (battleConfig.killLog.open) {
                    let killLog = '';
                    killLog += `￣￣￣￣￣＼🧙战斗过程／￣￣￣￣\n`;
                    killLog += `🧚‍♂️本次战斗共${data.battle.battleRound}回合\n`;
                    for (let index = 0; index < data.battle.kill_log.length; index++) {
                        const kill_item = data.battle.kill_log[index];
                        killLog += `${kill_item.round}回合:${kill_item.body.name}击杀了${kill_item.die_body.name}\n`;
                    }
                    yield bot_1.default.sendText(this.channel_id, killLog);
                }
            }
        });
    }
    max() {
        return __awaiter(this, void 0, void 0, function* () {
            bot_1.default.sendText(this.channel_id, `${this.at()}你已解开基因锁最高级[五阶中级-超脱者]，代表着挣脱束缚。
因果也好、时空也好、晶壁系也好，都无法限制超脱者。
万千多元宇宙的生灭，对超脱者来说，也不过是一场电影而已。
唯有纪元更替，足以毁灭多元宇宙的大灾难，才能够影响到超脱者。
超脱的无限是真无限，本源无限，权柄无限，规则无限，所有都无限，超越无穷，即为超脱。`);
        });
    }
    menu() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('battle/Challenge_image', { userId: this.userId, isStart: false });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
            let data = req.res;
            if (data.isMax) {
                this.max();
                return;
            }
            let temp = `┏┄══🎰挑战复制体══━┄\n`;
            temp += `🧚相同属性强者胜,祝君好运\n`;
            temp += `💌你将挑战你的镜像,镜像没有宠物,没有装备,但称号满分,等级为${data.imageLeve}级且基因锁为[${body_1.DNA_CN[body_1.DNA_Leve[data.imageDNALeve]]}]\n`;
            temp += `┄══🌈挑战胜利══━┄\n`;
            temp += `🔺基因锁将进阶为[${body_1.DNA_CN[body_1.DNA_Leve[data.nextDNA]]}]\n`;
            temp += `🔺基因锁增益:全属性+${data.winAdd}%\n`;
            temp += `┄══💀挑战失败══━┄\n`;
            temp += `🔻等级扣除${data.failDel}级\n`;
            temp += `┗┄━══════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
            new example_1.text_example_style().setCommand(`挑战指令：开始挑战复制体`).setExample(`开始挑战复制体`).sendMsg(this.channel_id);
        });
    }
}
exports.challenge_image = challenge_image;
