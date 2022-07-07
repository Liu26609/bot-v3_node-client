import { embed_style } from './../temp/embed/embed';
import { task_base } from '../task_base';
import { ApiReturn } from "tsrpc";
import { ResSign } from "../../shared/protocols/PtlSign";
import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { rewardKey_CN, rewardKey } from '../../shared/game/prop';
import { USER_CFG_MSGTEMPLATE } from '../../interface/userCfg';
/**
 * 用户签到
 */
export default class me_sign extends task_base {
    constructor(...a) {
        super(...a)
        sever.callApi('Sign', { userId: this.userId }).then((data) => {
            this.render(data);
        })
    }
    render(res: ApiReturn<ResSign>) {
        if (!res.isSucc) {
            this.sendErr(res.err)
            return;
        }
        let data = res.res;
        if (data.isRepeat) {
            // 重复签到
            this.repeatSign(data);
            return;
        }
        this.succressSign(data)
    }
    succressSign(data: ResSign) {

        switch (this.UserCfg.msgTemplate) {
            case USER_CFG_MSGTEMPLATE.text:
                let temp = `┏┄═💌签到成功━┄\n`;
                temp += `💝已签到:${data.cont}次<emoji:147>签到奖励\n`;
                if (data.reward.length > 0) {
                    data.reward.forEach(item => {
                        temp += `${rewardKey_CN[rewardKey[item.key]]}${item.val > 0 ? '+' : ''}${item.val}`
                    });
                }
                temp += `┗┄${this.at()}┄\n`
                temp += `“${data.oneWord}”`
                bot.sendText(this.channel_id, temp,this.content)

                break;
            case USER_CFG_MSGTEMPLATE.card:
                let embed = new embed_style();
                embed.setTitle(`💌签到成功`)
                embed.addLine(`已签到:${data.cont}次`)
                embed.setIcon(this.userIcon)
                if (data.reward.length > 0) {
                    data.reward.forEach(item => {
                        embed.addLine(`${rewardKey_CN[rewardKey[item.key]]}${item.val > 0 ? '+' : ''}${item.val}`)
                    });
                }
                embed.addLine(`“${data.oneWord}”`)
                embed.setTips('签到成功辣！')
                embed.sendMsg(this.channel_id)
                break;
            default:
                break;
        }
    }
    repeatSign(data: ResSign) {

        switch (this.UserCfg.msgTemplate) {
            case USER_CFG_MSGTEMPLATE.text:
                let temp = `┏┄═💌签到重复━┄
累计签到:${data.cont}
<emoji:147>今天已经签到过了
┗┄${this.at()}┄
“${data.oneWord}”`
                bot.sendText(this.channel_id, temp)
                break;
            case USER_CFG_MSGTEMPLATE.card:
                let embed = new embed_style();
                embed.setTitle(`💌签到重复`)
                embed.setTips('重复签到了~')
                embed.setIcon(this.userIcon)
                embed.addLine(`已签到:${data.cont}次`)
                embed.addLine(`“${data.oneWord}”`)
                embed.sendMsg(this.channel_id)
                break;
            default:
                break;
        }
    }
}