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
        let temp = `┏┄════👑我的称号═══━┄\n`
        temp += `⚜️等级：LV.${data.title.leve}(${data.title.exp}/${data.title.leve * 10000})\n`;
        temp += `${data.title.name}\n`;
        temp += ` ♥️最大生命+${data.title.attribute.hp_max}%\n`;
        temp += `🔪物理攻击+${data.title.attribute.PhysicalAttacks}%\n`;
        temp += `🔰物理防御+${data.title.attribute.PhysicalDefense}%\n`;
        temp += `🔮魔法攻击+${data.title.attribute.MagicAttack}%\n`;
        temp += `🌟魔法防御+${data.title.attribute.MagicDefense}%\n`;
        temp += `🧚‍♂️攻击怪物可提高称号经验,等级越高加成越高\n`;
        temp += `┗┄━═${this.at()}═━┄`;
        bot.sendText(this.channel_id,temp)
    }
}