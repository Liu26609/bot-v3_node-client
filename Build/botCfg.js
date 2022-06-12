"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const qq_guild_bot_1 = require("qq-guild-bot");
exports.default = {
    apiUrl: 'http://81.68.240.214:8080',
    wsUrl: 'http://81.68.240.214:3000',
    // shards: [0, 1],
    // appID: '101983837', // ID
    // token: 'KRT0MyhsrJ4YGQXSyzAJiOJti58K982N', // token
    // intents: [AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],    // 事件订阅,用于开启可接收的消息类型
    // sandbox: false
    shards: [0, 1],
    appID: '102005633',
    token: 'oWRHruioytIBhqLXIEoIfgLjGL6c3FHG',
    intents: [qq_guild_bot_1.AvailableIntentsEventsEnum.PUBLIC_GUILD_MESSAGES],
    sandbox: false
};
