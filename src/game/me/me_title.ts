import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_title extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('Me_title',{userId:this.userId});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        const leve = data.title.leve;
        let temp = `┏┄════👑我的称号═══━┄\n`
        temp += `⚜️等级：LV.${data.title.leve}(${data.title.exp}/${data.title.exp_max})\n`;
        temp += `${data.title.name}\n`;
        if(data.title.todayGetExp > 0){
            temp += `🔐今日可获得经验:${data.title.todayGetExp}\n`
        }else{
            temp += `🔒今日称号可获得经验已达上限\n`
        }
        temp += ` ♥️最大生命+${data.title.attribute.hp_max * leve}%\n`;
        temp += `🔪物理攻击+${data.title.attribute.PhysicalAttacks * leve}%\n`;
        temp += `🔰物理防御+${data.title.attribute.PhysicalDefense * leve}%\n`;
        temp += `🔮魔法攻击+${data.title.attribute.MagicAttack * leve}%\n`;
        temp += `🌟魔法防御+${data.title.attribute.MagicDefense * leve}%\n`;
        temp += `💖每秒回复+${data.title.attribute.secondResHp * leve}%\n`;
        temp += `<emoji:147>攻击怪物/玩家可提高称号经验,等级越高加成越高\n`;
        temp += `┗┄━${this.at()}━┄\n`;
        temp += `┏┄═══👑指令提示══━┄\n`
        temp += `🏷️称号改名[称号改名 + 名称]\n`
        temp += `🔂重置称号[重置称号 + 次数]\n`
        temp += `┗┄━══════════━┄`
        // 　称号改名　重置称号
        bot.sendText(this.channel_id,temp)
       
    }
}