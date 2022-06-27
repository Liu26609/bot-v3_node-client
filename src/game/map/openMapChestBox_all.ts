import { TsrpcErrorType } from 'tsrpc';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import bot from '../../unity/bot';
import common from '../../shared/game/common';
import sever from '../../unity/sever';
import { task_base } from '../task_base';
export class openMapChestBox_all extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `┏┄═══🎁打开宝箱═━┄
打开指令：打开全部宝箱
如:@我 打开全部宝箱
ps:宝箱会在地图上击杀怪物后随机掉落
┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, temp)
    }
    async render() {
        // 判断宝箱ID
        if (this.content != this.matchKey) {
            this.menu();
            return;
        }
        let req = await sever.callApi('map/OpenMapChestBox', { userId: this.userId, openIndex: 88 });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `┏┄═══✨宝箱奖励══━┄\n`;
        temp += `<emoji:295>你打开了宝箱！获得奖励:\n`
        if (data.reward.length > 0) {
            data.reward.forEach(item => {
                if(item.val > 0){
                    temp += `${rewardKey_CN[rewardKey[item.key]]}+${item.val}\n`
                }
            });
        }
        temp += `┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, temp,this.matchKey)

        //         ￣￣￣￣￣＼盲盒奖励／￣￣￣￣￣
        // @楚轩 打开了100个盲盒🎁还剩1546270个获得奖励如下:
        // ⏳经验+157400
        // 💰金币+8250
        // 💳装备升级卡+8
        // ✝️正义值+5977
        // 💳装备强化卡+2
        // 💳称号卡+1
        // <emoji:147>打怪，参与各种活动有，拍卖可获得盲盒
        // ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣
    }
}