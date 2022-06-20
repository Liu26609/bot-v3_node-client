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
        }
    }
    notVip(){
        let temp = `┏┄════👑赞助会员═══━┄\n`
        temp += '你还不是赞助会员哦~会员没有到期时间,一次付费永久使用\n'
        temp += '┄════👑会员特权═══━┄\n'
        temp += '1.挂机不消耗小鱼干且获得更多道具\n'
        temp += '2.背包数量上限+20\n'
        temp += '3.宠物数量上限+5\n'
        temp += '4.可自己创建一个专属机器人\n'
        temp += '5.更新可享更多特权..\n'
        temp += `┗┄━══════════━┄`
        bot.sendText(this.channel_id,temp)
    }
}