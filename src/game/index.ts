import { me_wearEquip } from './me/me_wearEquip';
import { me_lookBag } from './me/me_lookBag';
import { me_bag } from './me/me_bag';
import { me_resLife } from './me/me_resLife';
import { me_changeName } from './me/me_changeName';
import { chainTask } from './sys/chainTask';
import { me_wallet } from './me/me_wallet';
import { pos_attackPlayer } from './battle/pos_attackPlayer';
import { me_move } from './me/me_move';
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
import { text_equip_style } from './temp/text/equip';
import { embed_style } from './temp/embed/embed';
import { EQUIP_QUALITY, EQUIP_QUALITY_CN, EQUIP_TYPE, EQUIP_TYPE_CN } from '../shared/game/equip';
import { me_pos } from './me/me_pos';
import { addOneWrod } from './sys/addOneWrod';
import { pos_attackEnemy } from './battle/pos_attackEnemy';
import { baseTaskMenu } from './sys/baseTaskMenu';
import { openMapChestBox } from './map/openMapChestBox';
import common from '../unity/common';

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
        this.matchMap.set('签到', { action: me_sign, match: matchType.all })
        this.matchMap.set('属性', { action: me_attribute, match: matchType.all })
        this.matchMap.set('更新日志', { action: sys_update, match: matchType.all })
        this.matchMap.set('测试', { action: battleTest, match: matchType.all })
        this.matchMap.set('位置', { action: me_pos, match: matchType.all })
        this.matchMap.set('addOneWrod', { action: addOneWrod, match: matchType.match })
        this.matchMap.set('攻击玩家', { action: pos_attackPlayer, match: matchType.match })
        this.matchMap.set('攻击怪物', { action: pos_attackEnemy, match: matchType.match })
        this.matchMap.set('攻击全部怪物', { action: pos_attackEnemy, match: matchType.match })
        this.matchMap.set('基础指令', { action: baseTaskMenu, match: matchType.match })
        this.matchMap.set('打开宝箱', { action: openMapChestBox, match: matchType.match })
        this.matchMap.set('改名', { action: me_changeName, match: matchType.match })
        this.matchMap.set('钱包', { action: me_wallet, match: matchType.match })
        this.matchMap.set('上', { action: me_move, match: matchType.all })
        this.matchMap.set('下', { action: me_move, match: matchType.all })
        this.matchMap.set('左', { action: me_move, match: matchType.all })
        this.matchMap.set('右', { action: me_move, match: matchType.all })
        this.matchMap.set('复活',{ action: me_resLife, match: matchType.all })
        this.matchMap.set('链式指令', { action: chainTask, match: matchType.all })
        this.matchMap.set('背包', { action: me_bag, match: matchType.all })
        this.matchMap.set('查看背包装备', { action: me_lookBag, match: matchType.match })
        this.matchMap.set('穿装备', { action: me_wearEquip, match: matchType.match })
    }
    start() {
        bot.setOnMsg_at((data: BOT_MSG_AT) => this.atBot(data))

    }
    /**
     * // 收到消息
     * 用户艾特机器人触发
     */
    async atBot(data: BOT_MSG_AT) {
        if (data.channel_id != '1933444') {
            return;
        }
        if (!sever.isReady()) {
            let temp = ``;
            temp += `┏┄════⚠️错误提示═══━┄\n`
            temp += `┣⛔︎错误代码:${common.random(0, 99999999999).toString(16)}\n`;
            temp += `┣🗂️错误类型:🔴服务器无响应\n`;
            temp += `┣┄════❌错误提示═══━┄\n`
            temp += `  🟢客户端:${bot.severId()}\n`;
            temp += `  🟡正在开始重新连接\n`;
            temp += `┗┄━═══════════━┄\n`;
            temp += `🧚‍♂️如不知如何发生的错误且长时间存在请截图反馈`;
            bot.sendText(data.channel_id, temp);
            sever.HelloWorld()
            return;
        }
        if (data.content == '频道ID') {
            bot.sendText(data.channel_id, data.channel_id);
            return
        }
        if (data.content == '合成装备') {
            let temp = new embed_style();
            temp.setTips('合成装备')
            temp.setIcon(`${gameCfg.cosUrl}equip/1.png`)
            temp.setTitle('朋友，你渴望力量吗？嗯？？不好意思刀没磨！！！把渴望力量改成是兄弟就来砍我才对,而且武器加什么防御啊，不应该加命中嘛')
            temp.addLine(`Ⓜ️名称：十几米的大刀`)
            temp.addLine(`🔨品质：${EQUIP_QUALITY_CN[EQUIP_QUALITY[0]]}`)
            temp.addLine(`🔨强化：+99`)
            temp.addLine(`🗂️类型：${EQUIP_TYPE_CN[EQUIP_TYPE[0]]}`)
            temp.addLine(`物理攻击+999`)
            temp.addLine(`魔法攻击+999`)
            temp.addLine(`物理防御+999`)
            temp.addLine(`魔法防御+999`)
            temp.addLine(`每秒回血+999`)
            await temp.sendMsg(data.channel_id)

            let temp2 = new embed_style();
            temp2.setTitle('￣￣￣￣＼特殊效果／￣￣￣￣')
            temp2.addLine('┏每1次攻击增加1经验⏳');
            temp2.addLine('┗已触发:0次');
            temp2.addLine('┏┏每经过1秒增加1经验⏳');
            temp2.addLine('┗已触发:0次');
            temp2.addLine('┏每1次攻击增加1经验⏳');
            temp2.addLine('┗已触发:0次');
            temp2.addLine('┏┏每经过1秒增加1经验⏳');
            temp2.addLine('┗已触发:0次');
            temp2.sendMsg(data.channel_id)
        }
        log('收到艾特消息', data.content)
        const userId = data.author.id;
        const userIcon = data.author.avatar;
        const fromChannel = data.channel_id;
        const content = data.content;
        const userName = data.author.username;
        // 分析行为
        this.matchMap.forEach((conf, key) => {
            if (conf.match == matchType.all && data.content == key) {
                new conf.action(userId, fromChannel, userIcon, content, key, userName)
            } else if (conf.match == matchType.match && data.content.includes(key)) {
                new conf.action(userId, fromChannel, userIcon, content, key, userName)
            }
        });

    }
    // 客户端刷新单位：秒
    update() {
        log('update')
    }
}
