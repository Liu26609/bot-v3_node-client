import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_vip extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        let req = await sever.callApi('vip/Me_lookVip',{userId:this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if(!data.isVip){
            this.notVip()
        }else{
            this.vip()
        }
    }
    vip(){
        let temp = `┏┄═══👑赞助会员══━┄\n`
        temp += '你已是永久赞助会员\n'
        temp += '┄════👑会员特权══━┄\n'
        temp += '1.挂机不消耗小鱼干且能获得强化碎片\n'
        temp += '2.背包上限+20宠物上限+5\n'
        temp += '3.可自己创建一个专属机器人\n'
        temp += '4.签到奖励翻倍\n'
        temp += '5.免费创建工会\n'
        temp += '6.自动打开全部宝箱\n'
        temp += '7.更新可享更多特权..\n'
        temp += `┗┄━═════════━┄`
        bot.sendText(this.channel_id,temp)
    }
    notVip(){
        let temp = `┏┄═══👑赞助会员══━┄\n`
        temp += '你还不是赞助会员哦~会员没有到期时间,一次付费永久使用\n'
        temp += '做这个机器人没有任何收益，全靠用热爱发电做，所以下一秒不能用了也不足为奇\n'
        temp += '┄════👑会员特权══━┄\n'
        temp += '1.挂机不消耗小鱼干且能获得强化碎片\n'
        temp += '2.背包上限+20宠物上限+5\n'
        temp += '3.可自己创建一个专属机器人\n'
        temp += '4.签到奖励翻倍\n'
        temp += '5.免费创建工会\n'
        temp += '6.自动打开全部宝箱\n'
        temp += '7.更新可享更多特权..\n'
        temp += '8.联系QQ550620904\n'
        temp += `┗┄━═════════━┄`
        bot.sendText(this.channel_id,temp,this.content)
    }
}