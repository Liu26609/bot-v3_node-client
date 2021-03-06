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
const userCfg_1 = require("./../interface/userCfg");
const qq_guild_bot_1 = require("qq-guild-bot");
const __1 = require("..");
const bot_1 = require("../shared/bot/bot");
const db_1 = __importStar(require("./db"));
const sever_1 = __importDefault(require("./sever"));
const common_1 = __importDefault(require("../shared/game/common"));
const sendLocaImage_1 = require("./sendLocaImage");
class bot {
    constructor() {
        this.machMap = new Map();
        this.msgIdMap = new Map();
        this.guildMap = new Map();
        this.userActiveChannelMap = new Map();
        this.channelMap = new Map();
        let pack = require('../../package.json');
        this.locaDev = pack.version;
    }
    /**
     * ?????????????????????
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
     * ?????????????????????
     * @param config
     */
    setBotConfig(config) {
        (0, __1.info)('BOT???????????????');
        if (config.intents.length == 0) {
            (0, __1.err)('BOT?????????:intents??????');
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
        sever_1.default.wsClient.listenMsg('CallHorse', (res) => {
            this.CallHorse(res.content);
        });
        sever_1.default.wsClient.listenMsg('CallAll', (res) => {
            this.callAll(res.content);
        });
        // CallAutoPlay
        sever_1.default.wsClient.listenMsg('CallAutoPlay', (res) => {
            let msg_id;
            msg_id = this.getMsgId(res.channel_id);
            this.sendText(res.channel_id, res.content);
        });
    }
    test(guildID, userID) {
        return __awaiter(this, void 0, void 0, function* () {
            const options = {
                seconds: '100'
            };
            try {
                this.client.muteApi.muteMember(guildID, userID, options);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    /**
     *
     * @param str ?????????????????????????????????????????????
     */
    CallHorse(str) {
        return __awaiter(this, void 0, void 0, function* () {
            let list = [];
            this.channelMap.forEach((lastActiveTime, id) => __awaiter(this, void 0, void 0, function* () {
                if (Date.now() - lastActiveTime > 60 * 5 * 1000) {
                    this.channelMap.delete(id);
                }
                else {
                    let guildId = this.guildMap.get(id);
                    if (str.includes('????????????') && guildId) {
                        let gCfg = db_1.default.get(db_1.dbName.GuildCfg, guildId);
                        if (gCfg && gCfg.passHorseChannel_id == id) {
                            list.push(gCfg.passHorseChannel_id);
                        }
                    }
                    else {
                        list.push(id);
                    }
                }
            }));
            for (let index = 0; index < list.length; index++) {
                yield this.sendText(list[index], str);
            }
        });
    }
    /**
     * ???????????????????????????
     * @param str
     */
    callAll(str) {
        return __awaiter(this, void 0, void 0, function* () {
            let list = [];
            this.channelMap.forEach((lastActiveTime, id) => __awaiter(this, void 0, void 0, function* () {
                if (Date.now() - lastActiveTime > 60 * 5 * 1000) {
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
     * @param channelID ??????ID
     * @param message ?????????
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
        // ????????????????????????????????????id
        this.msgIdMap.forEach((itemMap, channel) => {
            if (channelID == channel) {
                itemMap.forEach((item, msgId) => {
                    if (nowTime - item.creatorTime > timeOut) {
                        // ?????????
                        itemMap.delete(msgId);
                        msg_id = 0;
                        return 0;
                    }
                    if (item.surplusCont <= 0) {
                        // ????????????????????????
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
     * ??????????????????
     * @param channelID ??????ID
     * @param content ????????????
     */
    sendText(channelID, content, triggerKey) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg_id;
            msg_id = this.getMsgId(channelID);
            if (msg_id == 1) {
                yield new Promise(rs => { setTimeout(rs, 500); });
                msg_id = this.getMsgId(channelID);
            }
            // ?????????1??????????????????5?????????
            // TODO???????????????????????????????????????
            if (!msg_id) {
                (0, __1.err)('????????????????????????ID');
                return;
            }
            yield this.postMessage(channelID, {
                content: content,
                msg_id: msg_id
            }).catch(() => {
                // if()
                // ?????????????????????????????????????????????
                if (content.includes('@everyone')) {
                    (0, __1.log)('????????????????????????,????????????????????????');
                    this.sendText(channelID, content.replace('@everyone', ''));
                }
                else {
                    (0, __1.err)('??????????????????', msg_id, content);
                }
            }).then((res) => {
                if (triggerKey) {
                    if (res.data && res.data.id) {
                        this.machMap.set(res.data.id, triggerKey);
                    }
                }
            });
        });
    }
    sendLocaImage(channelID, pathStr) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg_id;
            msg_id = this.getMsgId(channelID);
            if (msg_id == 1) {
                yield new Promise(rs => { setTimeout(rs, 500); });
                msg_id = this.getMsgId(channelID);
            }
            // ?????????1??????????????????5?????????
            // TODO???????????????????????????????????????
            if (!msg_id) {
                (0, __1.err)('????????????????????????ID');
                return;
            }
            (0, sendLocaImage_1.sendImage)(msg_id, channelID, pathStr);
        });
    }
    addEmoji(channelId, msgId) {
        return __awaiter(this, void 0, void 0, function* () {
            let type = [1, 2];
            let randomType = type[common_1.default.random(0, type.length - 1)];
            let obj = {
                message_id: msgId,
                emoji_type: randomType,
                emoji_id: 5
            };
            yield this.client.reactionApi.postReaction(channelId, obj);
        });
    }
    /**
 * ??????????????????
 * @param channelID ??????ID
 * @param content ????????????
 */
    sendImage(channelID, url) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg_id;
            msg_id = this.getMsgId(channelID);
            if (msg_id == 1) {
                yield new Promise(rs => { setTimeout(rs, 500); });
                msg_id = this.getMsgId(channelID);
            }
            // ?????????1??????????????????5?????????
            // TODO???????????????????????????????????????
            if (!msg_id) {
                (0, __1.err)('????????????????????????ID');
                return;
            }
            yield this.postMessage(channelID, {
                msg_id: msg_id,
                image: url
            }).catch(() => {
                (0, __1.err)('??????????????????');
            });
        });
    }
    sendEmbed(channelID, embed, triggerKey) {
        return __awaiter(this, void 0, void 0, function* () {
            let msg_id;
            msg_id = this.getMsgId(channelID);
            if (msg_id == 1) {
                yield new Promise(rs => { setTimeout(rs, 500); });
                msg_id = this.getMsgId(channelID);
            }
            // ?????????1??????????????????5?????????
            // TODO???????????????????????????????????????
            if (!msg_id) {
                (0, __1.err)('????????????????????????ID');
                return;
            }
            yield this.postMessage(channelID, {
                msg_id: msg_id,
                embed: embed
            }).catch(() => {
                (0, __1.err)('??????????????????');
            }).then((res) => {
                // if (triggerKey) {
                //     this.machMap.set(res.data.id, triggerKey)
                //     // try {
                //     //     // this.addEmoji(channelID, res.data.id)
                //     // } catch (error) {
                //     // }
                // }
            });
        });
    }
    /**
     * ?????????????????????
     * @param data
     */
    _setBot_info(data) {
        (0, __1.info)(`BOT??????:${data.user.username}`);
        (0, __1.info)(`BOT ID:${data.user.id}`);
        this.botInfo = data;
    }
    getBot_name() {
        var _a;
        return (_a = this.botInfo) === null || _a === void 0 ? void 0 : _a.user.username;
    }
    /**
     * ???????????????????????????
     * @param intents
     */
    _bindWsOnCall(intents) {
        switch (intents) {
            case qq_guild_bot_1.AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES:
                // - AT_MESSAGE_CREATE       // ?????????@?????????????????????
                // - PUBLIC_MESSAGE_DELETE   // ??????????????????????????????
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
                    if (data.eventType == bot_1.BOT_EventType.emoji_add) {
                        this._test(data);
                    }
                });
                break;
            default:
                (0, __1.log)('?????????????????????:', intents);
                break;
        }
    }
    _test(data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (data.msg.user_id == ((_a = this.botInfo) === null || _a === void 0 ? void 0 : _a.user.id)) {
                console.log('???????????????id????????????');
                return;
            }
            let msg_id;
            msg_id = this.getMsgId(data.msg.channel_id);
            if (msg_id == 1) {
                yield new Promise(rs => { setTimeout(rs, 500); });
                msg_id = this.getMsgId(data.msg.channel_id);
            }
            // ?????????1??????????????????5?????????
            // TODO???????????????????????????????????????
            if (!msg_id) {
                (0, __1.err)('????????????????????????ID');
                return;
            }
            if (this.machMap.has(data.msg.target.id)) {
                // ????????????
                let content = this.machMap.get(data.msg.target.id);
                if (!content) {
                    (0, __1.err)('????????????');
                    return;
                }
                let tempData = {
                    author: {
                        avatar: '',
                        bot: false,
                        id: data.msg.user_id,
                        username: '????????????'
                    },
                    channel_id: data.msg.channel_id,
                    content: content,
                    guild_id: data.msg.guild_id,
                    id: msg_id,
                    timestamp: '',
                    member: { joined_at: '', nick: '', roles: [''] },
                    mentions: [],
                    seq: 1,
                    seq_in_channel: '',
                };
                this._onMsg_at(tempData);
                if (this.machMap.size > 10000) {
                    this.machMap = new Map();
                }
            }
        });
    }
    getGuildCfgTemp() {
        let temp = {
            autoPassChannel_id: '',
            passHorseChannel_id: '',
            atCont: 0,
            master: ''
        };
        return temp;
    }
    getUserCfgTemp() {
        let temp = {
            textStrStyle: userCfg_1.USER_CFG_TEXTSTRSTYLE.default,
            msgTemplate: userCfg_1.USER_CFG_MSGTEMPLATE.card,
            isShowPos: false,
            isHideSkill_Log: false
        };
        return temp;
    }
    /**
     * ????????????????????????
     */
    _onMsg_at(data) {
        var _a;
        // log('????????????', data)
        let gCfg = db_1.default.get(db_1.dbName.GuildCfg, data.guild_id);
        if (!gCfg) {
            gCfg = db_1.default.create(db_1.dbName.GuildCfg, data.guild_id, this.getGuildCfgTemp());
        }
        gCfg.atCont += 1;
        // ????????????id??????
        this.guildMap.set(data.channel_id, data.guild_id);
        let uCfg = db_1.default.get(db_1.dbName.UserCfg, data.author.id);
        if (!uCfg) {
            uCfg = db_1.default.create(db_1.dbName.UserCfg, data.author.id, this.getUserCfgTemp());
        }
        try {
            if (data.member.roles.includes('4')) {
                // ??????????????????
                gCfg.master = data.author.id;
            }
        }
        catch (error) {
            console.error('??????????????????', error);
        }
        // ????????????
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
        // TODO??????
        // while (data.content.includes('1')) {
        //     data.content = data.content.replace('1', '');
        // }
        // log('????????????', data)
        // log('????????????', data.author.username, data.content)
        // ???????????????????????????
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
        // ???????????????????????????
        this.userActiveChannelMap.set(data.author.id, data.channel_id);
        this.channelMap.set(data.channel_id, Date.now());
        if (!this.onMsg_atCall) {
            (0, __1.err)('at ?????????????????????');
            return;
        }
        this.onMsg_atCall(data);
    }
    /**
     * ??????at??????????????????
     * @param cb
     */
    setOnMsg_at(cb) {
        this.onMsg_atCall = cb;
    }
    _onMsg_del() {
        (0, __1.log)('????????????');
    }
}
exports.default = new bot();
