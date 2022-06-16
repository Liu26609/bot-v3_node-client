import { AvailableIntentsEventsEnum, createWebsocket, createOpenAPI, MessageToCreate } from "qq-guild-bot";
import { err, info, log } from "..";
import { BOT_Config, BOT_READY, BOT_EventType, BOT_MSG_AT, BOT_OnData, BOT_MSGID_MAP } from '../shared/bot/bot'
import sever from "./sever";

class bot {
    private config?: BOT_Config;
    private botInfo?: BOT_READY
    private ws: any;
    private client: any;
    private onMsg_atCall?: any;
    private msgIdMap: Map<string, Map<string, BOT_MSGID_MAP>>;//消息id哈希表，子频道ID，消息ID
    private channelMap: Map<string, number>;//子频道ID，上次此频道活跃时间
    private userActiveChannelMap: Map<string, string>;//玩家上次活跃的频道
    private locaDev: string;
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
        return this.locaDev
    }
    severId() {
        return this.botInfo?.shard[0];
    }
    getBotConfig() {
        return this.config as any;
    }
    /**
     * 设置机器人配置
     * @param config 
     */
    setBotConfig(config: BOT_Config) {
        info('BOT初始化开始');
        if (config.intents.length == 0) {
            err('BOT配置项:intents错误')
            return;
        }
        this.config = config;

        this.ws = createWebsocket(this.config);

        this.ws.on('READY', (data: BOT_OnData) => {
            this._setBot_info(data.msg)
            this.client = createOpenAPI(config);
        })
        for (let index = 0; index < config.intents.length; index++) {
            const intents = config.intents[index];
            this._bindWsOnCall(intents);
            // AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES
        }
        sever.wsClient.listenMsg('CallAppoint', (res) => {
            let lastChannelId = this.userActiveChannelMap.get(res.callUserId);
            if (lastChannelId) {
                this.sendText(lastChannelId, res.content)
            }
        })

        sever.wsClient.listenMsg('CallAll', (res) => {
            this.callAll(res.content)
        })
    }
    test(str: string) {
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
        })

    }


    /**
     * 通知客户端全部频道
     * @param str 
     */
    async callAll(str: string) {
        let list: string[] = []
        this.channelMap.forEach(async (lastActiveTime, id) => {
            if (Date.now() - lastActiveTime > 60 * 5 * 950) {
                this.channelMap.delete(id)
            } else {
                list.push(id);
            }
        });
        for (let index = 0; index < list.length; index++) {
            await this.sendText(list[index], str)
        }
    }
    /**
     * 
     * @param channelID 频道ID
     * @param message 消息体
     */
    private async postMessage(channelID: string, message: MessageToCreate) {
        return this.client.messageApi.postMessage(channelID, message)
    }
    private getMsgId(channelID: string): string | undefined {
        let nowTime = Date.now();
        let timeOut = 5 * 60 * 950;
        let msg_id;
        // 在哈希表中查找适合的消息id
        this.msgIdMap.forEach((itemMap, channel) => {
            if (channelID == channel) {
                itemMap.forEach((item, msgId) => {
                    if (nowTime - item.creatorTime > timeOut) {
                        // 已过期
                        itemMap.delete(msgId)
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
        })
        return msg_id
    }
    /**
     * 发送文字内容
     * @param channelID 频道ID
     * @param content 文字内容
     */
    async sendText(channelID: string, content: string) {
        let msg_id;

        msg_id = this.getMsgId(channelID)
        if (msg_id == 1) {
            await new Promise(rs => { setTimeout(rs, 1000) });
            msg_id = this.getMsgId(channelID)
        }
        // 单频道1秒内只能发送5条消息

        // TODO：后期考虑利用每天主动消息
        if (!msg_id) {
            err('没有找到可用消息ID')
            return;
        }
        await this.postMessage(channelID, {
            content: content,
            msg_id: msg_id
        }).catch(() => {
            // if()
            // 判定是否是艾特全体没有权限导致
            if(content.includes('@everyone')){
                log('没有艾特全体权限,尝试普通消息发送')
                this.sendText(channelID,content.replace('@everyone',''))
            }else{
                err('消息发送错误',msg_id,content)
            }
        })
    }
    /**
 * 发送图片内容
 * @param channelID 频道ID
 * @param content 文字内容
 */
    async sendImage(channelID: string, url: string) {
        let msg_id;

        msg_id = this.getMsgId(channelID)
        if (msg_id == 1) {
            await new Promise(rs => { setTimeout(rs, 1000) });
            msg_id = this.getMsgId(channelID)
        }
        // 单频道1秒内只能发送5条消息

        // TODO：后期考虑利用每天主动消息
        if (!msg_id) {
            err('没有找到可用消息ID')
            return;
        }
        await this.postMessage(channelID, {
            msg_id: msg_id,
            image: url
        }).catch(() => {
            err('消息发送错误')
        })
    }
    async sendEmbed(channelID: string, embed: any) {
        let msg_id;

        msg_id = this.getMsgId(channelID)
        if (msg_id == 1) {
            await new Promise(rs => { setTimeout(rs, 1000) });
            msg_id = this.getMsgId(channelID)
        }
        // 单频道1秒内只能发送5条消息

        // TODO：后期考虑利用每天主动消息
        if (!msg_id) {
            err('没有找到可用消息ID')
            return;
        }
        await this.postMessage(channelID, {
            msg_id: msg_id,
            embed: embed
        }).catch(() => {
            err('消息发送错误')
        })
    }
    /**
     * 设置机器人信息
     * @param data 
     */
    private _setBot_info(data: BOT_READY) {
        info(`BOT名称:${data.user.username}`);
        info(`BOT ID:${data.user.id}`);
        this.botInfo = data;
    }
    getBot_name() {
        return this.botInfo?.user.username;
    }
    /**
     * 绑定机器人事件监听
     * @param intents 
     */
    private _bindWsOnCall(intents: AvailableIntentsEventsEnum) {
        switch (intents) {
            case AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES:
                // - AT_MESSAGE_CREATE       // 当收到@机器人的消息时
                // - PUBLIC_MESSAGE_DELETE   // 当频道的消息被删除时
                this.ws.on(AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES, (data: BOT_OnData) => {
                    if (data.eventType == BOT_EventType.msg_at) {
                        this._onMsg_at(data.msg)
                    }
                    if (data.eventType == BOT_EventType.msg_del) {
                        this._onMsg_del();
                    }
                });

                break;
            case AvailableIntentsEventsEnum.GUILD_MESSAGE_REACTIONS:
                this.ws.on(AvailableIntentsEventsEnum.GUILD_MESSAGE_REACTIONS, (data: BOT_OnData) => {
                    log('？？？',data)
                    if (data.eventType == BOT_EventType.test) {
                        this._test()
                    }
                })
            break;
            default:
                log('暂未开发的事件:', intents)
                break;
        }
    }
    private _test() {
        log('测试表情')
    }
    /**
     * 内部处理艾特消息
     */
    private _onMsg_at(data: BOT_MSG_AT) {
        // log('收到消息', data)
        // 过滤艾特
        let filter = `<@!${this.botInfo?.user.id}>`;
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
        }
        if (this.msgIdMap.has(data.channel_id)) {
            itemMap = this.msgIdMap.get(data.channel_id);
        } else {
            itemMap = new Map();
            this.msgIdMap.set(data.channel_id, itemMap)
        }
        itemMap.set(data.id, msgData)

        // 更新用户活跃子频道
        this.userActiveChannelMap.set(data.author.id, data.channel_id);
        this.channelMap.set(data.channel_id, Date.now())
        if (!this.onMsg_atCall) {
            err('at 监听回调不存在')
            return;
        }
        this.onMsg_atCall(data)
    }
    /**
     * 设置at消息监听回调
     * @param cb 
     */
    setOnMsg_at(cb: any) {
        this.onMsg_atCall = cb;
    }
    private _onMsg_del() {
        log('删除消息')
    }
}
export default new bot();