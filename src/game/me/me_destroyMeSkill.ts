import { rewardKey_CN, rewardKey } from '../../shared/game/prop';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_destroyMeSkill extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `┏┄═══👑遗忘技能══━┄
遗忘指令：遗忘技能 + 数字
如:@我 遗忘技能1
ps:数字为[我的技能]的id
┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, temp)
    }
    async render() {
        let destroyIndex = this.content.replace(this.matchKey, '');
        if (typeof (destroyIndex) == 'undefined' || destroyIndex == '' || isNaN(Number(destroyIndex))) {
            this.menu();
            return;
        }
        let req = await sever.callApi('Me_destroyMeSkill', { userId: this.userId, destroyIndex: Math.ceil(Number(destroyIndex)) });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄══<emoji:173>遗忘完成══━┄\n`
        temp += `我之前学会了哪些技能来着？\n`
        if (data.reward && data.reward.length > 0) {
            data.reward.forEach(item => {
                temp += `${rewardKey_CN[rewardKey[item.key]]}+${item.val}\n`
            });
        }
        temp += `┗┄━${this.at()}━┄`;
        bot.sendText(this.channel_id,temp)
    }
}