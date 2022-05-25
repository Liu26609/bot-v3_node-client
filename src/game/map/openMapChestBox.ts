import { TsrpcErrorType } from 'tsrpc';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import bot from '../../unity/bot';
import common from '../../unity/common';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class openMapChestBox extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `￣￣￣￣￣＼打开宝箱／￣￣￣￣￣
打开指令：打开宝箱 + 数字
如:@我 打开宝箱1
ps:宝箱会在地图上击杀怪物后随机掉落
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`
        bot.sendText(this.channel_id, temp)
    }
    async render() {
        // 判断宝箱ID
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }
        let openStr = this.content.replace(this.matchKey, '');
        let openIndex = Math.ceil(Number(openStr));
        if (isNaN(openIndex) || openIndex < 0 || openIndex > 100000000) {
            this.sendErr({
                message: '打开宝箱的数字不合法',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        let req = await sever.callApi('OpenMapChestBox', { userId: this.userId, openIndex: openIndex });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `┏┄════✨宝箱奖励═══━┄\n`;
        temp += `┣你打开了宝箱！咻咻咻在里面获得了:\n`
        if (data.reward.length > 0) {
            data.reward.forEach(item => {
                temp += `┣${rewardKey_CN[rewardKey[item.key]]}+${item.val}\n`
            });
        }
        temp += `┗┄━══════════━┄`
        bot.sendText(this.channel_id, temp)

        //         ￣￣￣￣￣＼盲盒奖励／￣￣￣￣￣
        // @楚轩 打开了100个盲盒🎁还剩1546270个获得奖励如下:
        // ⏳经验+157400
        // 💰金币+8250
        // 💳装备升级卡+8
        // ✝️正义值+5977
        // 💳装备强化卡+2
        // 💳称号卡+1
        // 🧚‍♂️打怪，参与各种活动有，拍卖可获得盲盒
        // ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
    }
}