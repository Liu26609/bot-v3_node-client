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
exports.setUp = void 0;
const guildCfg_1 = require("../../interface/guildCfg");
const userCfg_1 = require("../../interface/userCfg");
const bot_1 = __importDefault(require("../../unity/bot"));
const db_1 = __importStar(require("../../unity/db"));
const task_base_1 = require("./../task_base");
class setUp extends task_base_1.task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    /**
     * ①设置机器人是否艾特全体
       ②设置机器人是否显示我方伤害日志
       ③设置机器人是否显示敌方伤害日志
       ④设置机器人挂机专属频道
    作为玩家你可以：
    ①设置机器人回复自己的文本风格
    ②设置机器人回复自己的消息是文字还是卡片
    废除api全部配置接口

     *
     * @returns
     */
    menu() {
        return __awaiter(this, void 0, void 0, function* () {
            // let req = await sever.callApi('GetUserSetUp', { userId: this.userId })
            // if (!req.isSucc) {
            //     this.sendErr(req.err)
            //     return;
            // }
            let temp = `┏┄════👑机器人设置═══━┄\n`;
            //判定是频道主还是普通用户 
            if (this.isMaster()) {
                if (!this.GuildCfg.autoPassChannel_id) {
                    temp += `未授权挂机专属频道:需授权的子频道艾特机器人发送[挂机]\n`;
                }
                else {
                    temp += `已授权专属挂机频道<#${this.GuildCfg.autoPassChannel_id}>\n`;
                }
            }
            // temp += `[设置默认样式风格]目前有1种风格\n`;
            temp += `[设置消息文本模式]消息采用文本+表情\n`;
            temp += `[设置消息卡片模式]目前部分PC端不会显示内容\n`;
            temp += `[设置不显示地图坐标]目前部分PC端不会显示内容\n`;
            temp += `[设置显示地图坐标]目前部分PC端不会显示内容\n`;
            temp += `官方不给按钮权限,你可以去官方天天刷反馈。\n`;
            temp += `┗┄━══════════━┄`;
            bot_1.default.sendText(this.channel_id, temp);
        });
    }
    notDevFunction() {
        let temp = `┏┄════👑机器人设置═══━┄\n`;
        temp += `未找到功能设置[${this.content}]\n`;
        temp += `①你可能少打或多打了字\n`;
        temp += `②没有次功能设置,你可以联系作者定制\n`;
        temp += `┗┄━══════════━┄`;
        bot_1.default.sendText(this.channel_id, temp);
    }
    notPass() {
        this.log(`你没有此设置的权限~`);
    }
    render() {
        switch (this.content) {
            case '设置':
                this.menu();
                return;
            case '设置消息文本模式':
                this.UserCfg.msgTemplate = userCfg_1.USER_CFG_MSGTEMPLATE.text;
                break;
            case '设置消息卡片模式':
                this.UserCfg.msgTemplate = userCfg_1.USER_CFG_MSGTEMPLATE.card;
                break;
            case '设置不显示地图坐标':
                this.UserCfg.isShowPos = false;
                break;
            case '设置显示地图坐标':
                this.UserCfg.isShowPos = true;
                break;
            case `${guildCfg_1.switch_CN[guildCfg_1.CFG_SWITCH.open]}艾特所有人权限`:
                if (!this.isMaster()) {
                    this.notPass();
                    return;
                }
                break;
            case `${guildCfg_1.switch_CN[guildCfg_1.CFG_SWITCH.close]}艾特所有人权限`:
                if (!this.isMaster()) {
                    this.notPass();
                    return;
                }
                break;
            default:
                this.notDevFunction();
                return;
        }
        db_1.default.saveDirData(db_1.dbName.UserCfg);
        this.log(`设置完成。设置会在下次@${bot_1.default.getBot_name()}生效~`);
    }
}
exports.setUp = setUp;
