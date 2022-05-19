import { sys_update } from './sys/update';
import { battleTest } from './battle/battleTest';
import { task_base } from './task_base';
import { me_attribute } from './me/me_attribute';
import { err, log } from "..";
import { BOT_MSG_AT } from "../shared/bot/bot";
import bot from "../unity/bot";
import sever from "../unity/sever";
import me_sign from "./me/me_sign";
import gameCfg from './gameCfg';

enum matchType {
    /**
     * 文字完全匹配指令
     */
    all,
    /**
     * 文字包含指令
     */
    match
}


export default class game {
    /**
     * 指令可交互行为分析
     */
    matchMap: Map<string, { action: any, match: matchType }>
    constructor() {
        this.matchMap = new Map();

        this.initKeyMap();
        this.start();
    }
    private initKeyMap() {
        // this.matchMap.set('签到', { action: me_sign, match: matchType.all })
        // this.matchMap.set('属性', { action: me_attribute, match: matchType.all })
        this.matchMap.set('更新日志', { action: sys_update, match: matchType.all })
        this.matchMap.set('测试', { action: battleTest, match: matchType.all })
    }
    start() {
        bot.setOnMsg_at((data: BOT_MSG_AT) => this.atBot(data))

    }
    /**
     * // 收到消息
     * 用户艾特机器人触发
     */
    atBot(data: BOT_MSG_AT) {
        if (!sever.isReady()) {
            bot.sendText(data.channel_id, `服务器无响应,客户端ID:${bot.severId()}`);
            return;
        }
        if(data.content == '合成装备'){
            let sendObj = {
                    title:`十米的大刀`,
                    thumbnail: {
                        url: `${gameCfg.cosUrl}equip/1.png`
                      },
                    prompt:'装备属性',
                    fields:[
                        {
                            name:`朋友，你渴望力量吗？嗯？？不好意思刀没磨！！！把渴望力量改成是兄弟就来砍我才对,而且武器加什么防御啊，不应该加命中嘛`
                        },
                        {
                            name:`￣￣￣￣＼装备属性／￣￣￣￣`
                        },
                        {
                            name:`⚜️品质:作者专属`
                        },
                        {
                            name:`⚜️强化:+99`
                        },
                        {
                            name:`⚜️位置:武器`
                        },
                        {
                            name:`⚔️物理攻击+99999`
                        },
                        {
                            name:`⚔️魔法攻击+99999`
                        },
                        {
                            name:`⚔️物理防御+5000`
                        },
                        {
                            name:`￣￣￣￣＼特殊效果／￣￣￣￣`
                        },
                        {
                            name:`┏每1次攻击增加1经验⏳`
                        },
                        {
                            name:`┗已触发:0次`
                        },
                        {
                            name:`┏每经过1秒增加1经验⏳`
                        },
                        {
                            name:`┗已触发:0次`
                        }
                    ]
            }
            bot.sendEmbed(data.channel_id,sendObj)
        }
        log('收到艾特消息', data.content)
        // 分析行为
        this.matchMap.forEach((conf, key) => {
            if (conf.match == matchType.all && data.content == key) {
                new conf.action(data.author.id, data.channel_id)
            } else if (conf.match == matchType.all && data.content.includes(key)) {
                new conf.action(data.author.id, data.channel_id)
            }
        });

    }
    // 客户端刷新单位：秒
    update() {
        log('update')
    }
}
