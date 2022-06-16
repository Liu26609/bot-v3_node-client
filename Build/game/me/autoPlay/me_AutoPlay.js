"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.me_AutoPlay = void 0;
const user_1 = require("../../../shared/game/user");
const bot_1 = __importDefault(require("../../../unity/bot"));
const db_1 = __importStar(require("../../../unity/db"));
const sever_1 = __importDefault(require("../../../unity/sever"));
const task_base_1 = require("../../task_base");
class me_AutoPlay extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.checkGuildPass()) {
                return;
            }
            if (this.content == `开始${this.matchKey}`) {
                this.start();
            }
            else if (this.content == `结束${this.matchKey}`) {
                this.end();
            }
            else {
                this.menu();
            }
        });
    }
    /**
     * 检测频道主是否授权了此频道
     */
    checkGuildPass() {
        let pass = false;
        let guild = db_1.default.get(db_1.dbName.channelCfg, this.guild);
        if (!guild) {
            console.log('频道主还没有授权一个挂机子频道');
            // 频道主还没有授权一个挂机子频道
            this.notPassMenu();
            if (!guild) {
                db_1.default.create(db_1.dbName.channelCfg, this.guild, { autoPassChannel_id: '' });
            }
            return pass;
        }
        if (guild) {
            if (guild.master == this.userId && this.content == this.matchKey) {
                console.log('主人授权');
                guild.autoPassChannel_id = this.channel_id;
                this.passAutoChannel();
                pass = true;
                return pass;
            }
            if (guild.autoPassChannel_id != this.channel_id) {
                console.log('未授权');
                this.notPassMenu();
                return pass;
            }
            pass = true;
        }
        return pass;
    }
    passAutoChannel() {
        this.log(`已将挂机频道授权至<#${this.channel_id}>,现在挂机推送和开始挂机将只能在此子频道进行。`);
    }
    notPassMenu() {
        let guild = db_1.default.get(db_1.dbName.channelCfg, this.guild);
        let temp = `┏┄═挂机子频道未授权━┄\n`;
        temp += `1.挂机会发送大量消息\n`;
        temp += `2.建议单独新建一个挂机专属子频道\n`;
        if (guild) {
            if (guild.master) {
                temp += `3.此功能需要<@${guild.master}>来授权开启\n`;
            }
            else {
                temp += `3.此功能需要频道主授权开启。请艾特频道主前来授权\n`;
            }
            if (guild.autoPassChannel_id != '') {
                temp += `4.你可以直接前往已授权频道<#${guild.autoPassChannel_id}>开始挂机,如果无法点击则已经被删除需要重新授权\n`;
            }
        }
        temp += `┄═══👑授权指令══━┄\n`;
        temp += `频道主在需要授权的子频道@${bot_1.default.getBot_name()} + [挂机]即可\n`;
        temp += `┗┄━${this.at()}━┄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    menu() {
        let temp = `┏┄════挂机══━┄\n`;
        temp += `1.每战斗一次会消耗${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.driedFish]]},没有${user_1.walletKey_CN[user_1.walletKey[user_1.walletKey.driedFish]]}将自动停止挂机\n`;
        temp += `2.挂机会持续与怪物战斗,如果你太弱可能会频繁死亡\n`;
        temp += `3.艾特机器人5分钟内会推送挂机战斗记录\n`;
        temp += `4.请在个人频道或在不打扰他人的频道开始挂机\n`;
        temp += `┄═══👑指令提示══━┄\n`;
        temp += `[开始挂机]开始自动挂机\n`;
        temp += `[结束挂机]结束挂机打怪\n`;
        temp += `┗┄━${this.at()}━┄`;
        bot_1.default.sendText(this.channel_id, temp);
        /**
         * 1.查看是否频道主授权了指定子频道
         * 2.检测子频道是否存在
         * 3.开始定向挂机
         *
         */
    }
    /**
     * 开始自动挂机
     * @returns
     */
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.checkGuildPass()) {
                return;
            }
            let req = yield sever_1.default.callApi('me/autoPlay/startAutoPlay', { userId: this.userId, channel_id: this.channel_id });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
        });
    }
    /**
     * 结束自动挂机
     */
    end() {
        return __awaiter(this, void 0, void 0, function* () {
            let req = yield sever_1.default.callApi('me/autoPlay/endAutoPlay', { userId: this.userId });
            if (!req.isSucc) {
                this.sendErr(req.err);
                return;
            }
        });
    }
}
exports.me_AutoPlay = me_AutoPlay;
