import { embed_attribute_style } from './../temp/embed/embed_attribute_style';
import { embed_style } from './../temp/embed/embed';
import { task_base } from './../task_base';
import { info, log } from "../..";
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { text_attribute_style } from '../temp/text/attribute';
import { textStyle } from '../../shared/game/setUp';
import common from '../../shared/game/common';
import { ancestryLeve } from '../../shared/game/body';
import { USER_CFG_MSGTEMPLATE } from '../../interface/userCfg';

/**
* 查看我的属性
*/
export class me_attribute extends task_base {
    constructor(...a) {
        super(...a)
        this.render()

    }
    async render() {
        let res = await sever.callApi('Me_Attribute', { userId: this.userId });
        if (!res.isSucc) {
            this.sendErr(res.err)
            return;
        }
        let data = res.res;
        if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.card) {
            // let out_attribute = data.body.out_attribute;
            // let temp = new embed_style();
            // temp.setTitle(data?.body.title.name);
            // temp.setIcon(this.userIcon);
            // temp.setTips('属性')
            // temp.addLine(`Ⓜ️名称:${data.body.name}`)
            // temp.addLine(`👑血统${ancestryLeve[data.ancestry.leve]}级${data.ancestry.title}`)
            // temp.addLine(`🔥等级:${data.body.leve}`)
            // temp.addLine(`⏳经验:${common.BN(data.body.exp)}/${common.BN(data.body.exp_max)}`)
            // temp.addLine(`⚜️声望值:${common.BN(data.body.rankscore)}`)
            // temp.addLine(`♥️生命:${common.BN(data.body.hp)}/${common.BN(out_attribute.hp_max)}`)
            // temp.addLine(`🔮魔法攻击:${common.BN(out_attribute.MagicAttack)}`)
            // temp.addLine(`🌟魔法防御:${common.BN(out_attribute.MagicDefense)}`)
            // temp.addLine(`🔪物理攻击:${common.BN(out_attribute.PhysicalAttacks)}`)
            // temp.addLine(`🔰物理防御:${common.BN(out_attribute.PhysicalDefense)}`)
            // temp.addLine(`💖每秒回复:${common.BN(out_attribute.secondResHp)}`)
            // temp.sendMsg(this.channel_id)
            new embed_attribute_style().setData(data.body).setTeam(data.team).setAncestry(data.ancestry).sendMsg(this.channel_id);
        } else if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
            new text_attribute_style().setData(data.body).setTeam(data.team).setAncestry(data.ancestry).sendMsg(this.channel_id);
        }
    }
}
