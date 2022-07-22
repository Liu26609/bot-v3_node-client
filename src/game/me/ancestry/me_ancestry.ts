import { text_style } from './../../temp/text/text_style';
import { text_example_style } from './../../temp/text/example';
import { ancestryLeve } from "../../../shared/game/body";
import common from "../../../shared/game/common";
import sever from "../../../unity/sever";
import { task_base } from "../../task_base";
import db from '../../../unity/db';
export class me_ancestry extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let req = await sever.callApi('ancestry/Me_Ancestry', { userId: this.userId })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = new text_style();
        temp.setTitle(`👑我的进化`)
        temp.addLine(`Ⓜ️出自:${data.ancestry.from}`)
        temp.addLine(`🌏来源:${db.getMapName()[data.ancestry.formId]}`)
        temp.addLine(`👑${ancestryLeve[data.info.leve]}级[${data.ancestry.title}]`)
        if(data.info.todayGetExp <= 0){
            temp.addLine(`🧬进化点已达今日上限`)
        }else{
            temp.addLine(`🧬进化点(${data.info.exp}/${data.info.exp_max})`)
        }
        temp.addLine(`┄════成长分数══━┄`)
        temp.addLine(`♥️最大生命${data.ancestry.base.hp_max}分🔪物理攻击${data.ancestry.base.PhysicalAttacks}分`)
        temp.addLine(`🔰物理防御${data.ancestry.base.PhysicalDefense}分🔮魔法攻击${data.ancestry.base.MagicAttack}分`)
        temp.addLine(`🌟魔法防御${data.ancestry.base.MagicDefense}分💖生命回复${data.ancestry.base.secondResHp}分`)
        temp.addLine(`┄════附带技能══━┄`)
        temp.addLine(`[${data.SK.name}]`)
        temp.addLine(`${common.getSkDesc(data.SK)}`)
        temp.addLine(`<emoji:147>成长分和技能会随着进化等级变化`)
        temp.setEnd(`┗┄${this.at()}┄`)
        temp.sendMsg(this.channel_id)


       new text_example_style().setCommand(`重置进化:更换一个进化路线`).setExample('重置进化').sendMsg(this.channel_id);;
    }
}