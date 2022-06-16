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
const qq_guild_bot_1 = require("qq-guild-bot");
const __1 = require("..");
const bot_1 = require("../shared/bot/bot");
const db_1 = __importStar(require("./db"));
const sever_1 = __importDefault(require("./sever"));
class bot {
    constructor() {
        this.msgIdMap = new Map();
        this.userActiveChannelMap = new Map();
        this.channelMap = new Map();
        let pack = require('../../package.json');
        this.locaDev = pack.version;
    }
    /**
     * 获取本地版本号
     */
    getDev() {
        return this.locaDev;
    }
    severId() {
        var _a;
        return (_a = this.botInfo) === null || _a === void 0 ? void 0 : _a.shard[0];
    }
    getBotConfig() {
        return this.config;
    }
    /**
     * 设置机器人配置
     * @param config
     */
    setBotConfig(config) {
        (0, __1.info)('BOT初始化开始');
        if (config.intents.length == 0) {
            (0, __1.err)('BOT配置项:intents错误');
            return;
        }
        this.config = config;
        this.ws = (0, qq_guild_bot_1.createWebsocket)(this.config);
        this.ws.on('READY', (data) => {
            this._setBot_info(data.msg);
            this.client = (0, qq_guild_bot_1.createOpenAPI)(config);
        });
        for (let index = 0; index < config.intents.length; index++) {
            const intents = config.intents[index];
            this._bindWsOnCall(intents);
            // AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES
        }
        sever_1.default.wsClient.listenMsg('CallAppoint', (res) => {
            let lastChannelId = this.userActiveChannelMap.get(res.callUserId);
            if (lastChannelId) {
                this.sendText(lastChannelId, res.content);
            }
        });
        sever_1.default.wsClient.listenMsg('CallAll', (res) => {
            this.callAll(res.content);
        });
        // CallAutoPlay
        sever_1.default.wsClient.listenMsg('CallAutoPlay', (res) => {
            let msg_id;
            msg_id = this.getMsgId(res.channel_id);
            this.sendText(res.channel_id, res.content);
            // if(typeof(msg_id) == 'string'){
            //     this.postMessage(res.channel_id,{msg_id:msg_id,content:res.content})
            // }
        });
    }
    test(str) {
        this.client.messageApi.postMessage(str, {
            markdown: {
                template_id: 1,
                params: [
                    {
                        key: 'title',
                        value: ['标题'],
                    },
                ],
            },
            msg_id: 'xxxxxx',
            keyboard: {
                id: '123',
            },
        });
    }
    /**
     * 通知客户端全部频道
     * @param str
     */
    callAll(str) {
        return __awaiter(this, void 0, void 0, function* () {
            let list = [];
            this.channelMap.forEach((lastActiveTime, id) => __awaiter(this, void 0, void 0, function* () {
                if (Date.now() - lastActiveTime > 60 * 5 * 950) {
                    this.channelMap.delete(id);
                }
                else {
                    list.push(id);
                }
            }));
            for (let index = 0; index < list.length; index++) {
                yield this.sendText(list[index], str);
            }
        });
    }
    /**
     *
     * @param channelID 频道ID
     * @param message 消息体
     */
    postMessage(channelID, message) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.messageApi.postMessage(channelID, message);
        });
    }
    getMsgId(channelID) {
        let nowTime = Date.now();
        let timeOut = 5 * 60 * 950;
        let msg_id;
        // 在哈希表中查找适合的消息id
        this.msgIdMap.forEach((itemMap, channel) => {
            if (channelID == channel) {
                itemMap.forEach((item, msgId) => {
                    if (nowTime - item.creatorTime > timeOut) {
                        // 已过期
                        itemMap.delete(msgId);
                        msg_id = 0;
                        return 0;
                    }
                    if (item.surplusCont <= 0) {
                        // 已使用完可用次数
                        item.surplusCont = 5;
                        msg_id = 1;
                        return 1;
                    }
                    item.surplusCont -= 1;
                    msg_id = msgId;
                });
            }
        });
        return msg_id;
    }
    /**
     * 发送文字内容
     * @param channelID 频道ID
     * @param content 文字内容
     */
    sendText(channelID, content) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg_id;
            msg_id = this.getMsgId(channelID);
            if (msg_id == 1) {
                yield new Promise(rs => { setTimeout(rs, 1200); });
                msg_id = this.getMsgId(channelID);
            }
            if (msg_id == 1) {
                yield new Promise(rs => { setTimeout(rs, 1200); });
                msg_id = this.getMsgId(channelID);
            }
            // 单频道1秒内只能发送5条消息
            // TODO：后期考虑利用每天主动消息
            if (!msg_id) {
                (0, __1.err)('没有找到可用消息ID');
                return;
            }
            yield this.postMessage(channelID, {
                content: content,
                msg_id: msg_id
            }).catch(() => {
                // if()
                // 判定是否是艾特全体没有权限导致
                if (content.includes('@everyone')) {
                    (0, __1.log)('没有艾特全体权限,尝试普通消息发送');
                    this.sendText(channelID, content.replace('@everyone', ''));
                }
                else {
                    (0, __1.err)('消息发送错误', msg_id, content);
                }
            });
        });
    }
    /**
 * 发送图片内容
 * @param channelID 频道ID
 * @param content 文字内容
 */
    sendImage(channelID, url) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg_id;
            msg_id = this.getMsgId(channelID);
            if (msg_id == 1) {
                yield new Promise(rs => { setTimeout(rs, 1000); });
                msg_id = this.getMsgId(channelID);
            }
            // 单频道1秒内只能发送5条消息
            // TODO：后期考虑利用每天主动消息
            if (!msg_id) {
                (0, __1.err)('没有找到可用消息ID');
                return;
            }
            yield this.postMessage(channelID, {
                msg_id: msg_id,
                image: url
            }).catch(() => {
                (0, __1.err)('消息发送错误');
            });
        });
    }
    sendEmbed(channelID, embed) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg_id;
            msg_id = this.getMsgId(channelID);
            if (msg_id == 1) {
                yield new Promise(rs => { setTimeout(rs, 1000); });
                msg_id = this.getMsgId(channelID);
            }
            // 单频道1秒内只能发送5条消息
            // TODO：后期考虑利用每天主动消息
            if (!msg_id) {
                (0, __1.err)('没有找到可用消息ID');
                return;
            }
            yield this.postMessage(channelID, {
                msg_id: msg_id,
                embed: embed
            }).catch(() => {
                (0, __1.err)('消息发送错误');
            });
        });
    }
    /**
     * 设置机器人信息
     * @param data
     */
    _setBot_info(data) {
        (0, __1.info)(`BOT名称:${data.user.username}`);
        (0, __1.info)(`BOT ID:${data.user.id}`);
        this.botInfo = data;
    }
    getBot_name() {
        var _a;
        return (_a = this.botInfo) === null || _a === void 0 ? void 0 : _a.user.username;
    }
    /**
     * 绑定机器人事件监听
     * @param intents
     */
    _bindWsOnCall(intents) {
        switch (intents) {
            case qq_guild_bot_1.AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES:
                // - AT_MESSAGE_CREATE       // 当收到@机器人的消息时
                // - PUBLIC_MESSAGE_DELETE   // 当频道的消息被删除时
                this.ws.on(qq_guild_bot_1.AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES, (data) => {
                    if (data.eventType == bot_1.BOT_EventType.msg_at) {
                        this._onMsg_at(data.msg);
                    }
                    if (data.eventType == bot_1.BOT_EventType.msg_del) {
                        this._onMsg_del();
                    }
                });
                break;
            case qq_guild_bot_1.AvailableIntentsEventsEnum.GUILD_MESSAGE_REACTIONS:
                this.ws.on(qq_guild_bot_1.AvailableIntentsEventsEnum.GUILD_MESSAGE_REACTIONS, (data) => {
                    (0, __1.log)('？？？', data);
                    if (data.eventType == bot_1.BOT_EventType.test) {
                        this._test();
                    }
                });
                break;
            default:
                (0, __1.log)('暂未开发的事件:', intents);
                break;
        }
    }
    _test() {
        (0, __1.log)('测试表情');
    }
    getGuildCfgTemp() {
        let temp = {
            autoPassChannel_id: '',
            atCont: 0,
            master: ''
        };
        return temp;
    }
    /**
     * 内部处理艾特消息
     */
    _onMsg_at(data) {
        var _a;
        // log('收到消息', data)
        let gCfg = db_1.default.get(db_1.dbName.channelCfg, data.guild_id);
        if (!gCfg) {
            gCfg = db_1.default.create(db_1.dbName.channelCfg, data.guild_id, this.getGuildCfgTemp());
        }
        gCfg.atCont += 1;
        if (data.member.roles.includes('4')) {
            // 频道主艾特了
            gCfg.master = data.author.id;
        }
        // 过滤艾特
        let filter = `<@!${(_a = this.botInfo) === null || _a === void 0 ? void 0 : _a.user.id}>`;
        while (data.content.includes(filter)) {
            data.content = data.content.replace(filter, '');
        }
        while (data.content.includes(' ')) {
            data.content = data.content.replace(' ', '');
        }
        while (data.content.includes('+')) {
            data.content = data.content.replace('+', '');
        }
        while (data.content.includes('/')) {
            data.content = data.content.replace('/', '');
        }
        // TODO调试
        // while (data.content.includes('1')) {
        //     data.content = data.content.replace('1', '');
        // }
        // log('收到消息', data)
        // log('收到消息', data.author.username, data.content)
        // 将消息存入哈希表内
        let itemMap;
        const msgData = {
            lastSendTime: Date.now(),
            surplusCont: 5,
            creatorTime: Date.now(),
        };
        if (this.msgIdMap.has(data.channel_id)) {
            itemMap = this.msgIdMap.get(data.channel_id);
        }
        else {
            itemMap = new Map();
            this.msgIdMap.set(data.channel_id, itemMap);
        }
        itemMap.set(data.id, msgData);
        // 更新用户活跃子频道
        this.userActiveChannelMap.set(data.author.id, data.channel_id);
        this.channelMap.set(data.channel_id, Date.now());
        if (!this.onMsg_atCall) {
            (0, __1.err)('at 监听回调不存在');
            return;
        }
        this.onMsg_atCall(data);
    }
    /**
     * 设置at消息监听回调
     * @param cb
     */
    setOnMsg_at(cb) {
        this.onMsg_atCall = cb;
    }
    _onMsg_del() {
        (0, __1.log)('删除消息');
    }
}
exports.default = new bot();
