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
const qq_guild_bot_1 = require("qq-guild-bot");
const __1 = require("..");
const gameCfg_1 = __importDefault(require("../game/gameCfg"));
const bot_1 = require("../shared/bot/bot");
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
            (0, __1.log)('收到ws消息', res);
            let lastChannelId = this.userActiveChannelMap.get(res.callUserId);
            if (lastChannelId) {
                this.sendText(lastChannelId, res.content);
            }
        });
        sever_1.default.wsClient.listenMsg('CallAll', (res) => {
            (0, __1.log)('收到ws消息', res);
            this.callAll(res.content);
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
            if (gameCfg_1.default.isDebug) {
                if (message.content) {
                    (0, __1.info)('调试模式：', message.content);
                }
                else if (message.embed) {
                    (0, __1.info)('调试模式：', message.content);
                }
                return true;
            }
            (0, __1.info)('发送消息成功');
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
                        return 0;
                    }
                    if (item.surplusCont <= 0) {
                        // 已使用完可用次数
                        item.surplusCont = 5;
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
                content: content,
                msg_id: msg_id
            }).catch(() => {
                (0, __1.err)('消息发送错误');
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
            default:
                (0, __1.log)('暂未开发的事件:', intents);
                break;
        }
    }
    /**
     * 内部处理艾特消息
     */
    _onMsg_at(data) {
        var _a;
        // log('收到消息', data)
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
