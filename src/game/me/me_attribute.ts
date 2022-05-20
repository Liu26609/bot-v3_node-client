import { embed_style } from './../temp/embed/embed';
import { task_base } from './../task_base';
import { info, log } from "../..";
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { text_attribute_style } from '../temp/text/attribute';

/**
* 查看我的属性
*/
export class me_attribute extends task_base {
    constructor(...a) {
        super(...a)
        this.render()
        
    }
    async render(){
        let res = await sever.callApi('Me_Attribute',{userId:this.userId});
        let data =  res.res;
        if(!data){
            bot.sendText(this.channel_id,`出错了${res.err}`)
            return;
        }
        new text_attribute_style().sendData(data.body).sendMsg(this.channel_id);

        log(data)
        let out_attribute = data.body.out_attribute;
        let temp = new embed_style();
        temp.setTitle(data?.body.title.name);
        temp.setIcon(this.userIcon);
        temp.setTips('属性')
        temp.addLine(`Ⓜ️名称:${data.body.name}`)
        temp.addLine(`🔥等级:${data.body.leve}`)
        temp.addLine(`⏳经验:${data.body.exp}/${data.body.exp_max}`)
        temp.addLine(`♥️生命:${data.body.hp}/${out_attribute.hp_max}`)
        temp.addLine(`🔮魔法攻击:${out_attribute.MagicAttack}`)
        temp.addLine(`🌟魔法防御:${out_attribute.MagicDefense}`)
        temp.addLine(`🔪物理攻击:${out_attribute.PhysicalAttacks}`)
        temp.addLine(`🔰物理防御:${out_attribute.PhysicalDefense}`)
        temp.addLine(`💖每秒回复:${out_attribute.secondResHp}`)
        temp.sendMsg(this.channel_id)
    }
}
