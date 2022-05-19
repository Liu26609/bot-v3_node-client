import { embed_style } from './../temp/embed/embed';
import { task_base } from './../task_base';
import { info, log } from "../..";
import bot from '../../unity/bot';
import sever from '../../unity/sever';

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
        log(data)
        let out_attribute = data.body.out_attribute;
        let temp = new embed_style();
        temp.setTitle(data?.body.title.name);
        temp.setTips('我的属性')
        temp.addLine(`Ⓜ️名称:${data.body.name}`)
        temp.addLine(`♥️${data.body.hp}/${out_attribute.hp_max}`)
        temp.addLine(`魔法攻击${out_attribute.MagicAttack}`)
        temp.addLine(`魔法防御${out_attribute.MagicDefense}`)
        temp.addLine(`物理攻击${out_attribute.PhysicalAttacks}`)
        temp.addLine(`物理防御${out_attribute.PhysicalDefense}`)
        temp.addLine(`每秒回复${out_attribute.secondResHp}`)
        temp.sendMsg(this.channel_id)
    }
}
