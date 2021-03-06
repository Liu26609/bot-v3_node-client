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
        temp.setTitle(`๐ๆ็่ฟๅ`)
        temp.addLine(`โ๏ธๅบ่ช:${data.ancestry.from}`)
        temp.addLine(`๐ๆฅๆบ:${db.getMapName()[data.ancestry.formId]}`)
        temp.addLine(`๐${ancestryLeve[data.info.leve]}็บง[${data.ancestry.title}]`)
        if(data.info.todayGetExp <= 0){
            temp.addLine(`๐งฌ่ฟๅ็นๅทฒ่พพไปๆฅไธ้`)
        }else{
            temp.addLine(`๐งฌ่ฟๅ็น(${data.info.exp}/${data.info.exp_max})`)
        }
        temp.addLine(`โโโโโๆ้ฟๅๆฐโโโโ`)
        temp.addLine(`โฅ๏ธๆๅคง็ๅฝ${data.ancestry.base.hp_max}ๅ๐ช็ฉ็ๆปๅป${data.ancestry.base.PhysicalAttacks}ๅ`)
        temp.addLine(`๐ฐ็ฉ็้ฒๅพก${data.ancestry.base.PhysicalDefense}ๅ๐ฎ้ญๆณๆปๅป${data.ancestry.base.MagicAttack}ๅ`)
        temp.addLine(`๐้ญๆณ้ฒๅพก${data.ancestry.base.MagicDefense}ๅ๐็ๅฝๅๅค${data.ancestry.base.secondResHp}ๅ`)
        temp.addLine(`โโโโโ้ๅธฆๆ่ฝโโโโ`)
        temp.addLine(`[${data.SK.name}]`)
        temp.addLine(`${common.getSkDesc(data.SK)}`)
        temp.addLine(`<emoji:147>ๆ้ฟๅๅๆ่ฝไผ้็่ฟๅ็ญ็บงๅๅ`)
        temp.setEnd(`โโ${this.at()}โ`)
        temp.sendMsg(this.channel_id)


       new text_example_style().setCommand(`้็ฝฎ่ฟๅ:ๆดๆขไธไธช่ฟๅ่ทฏ็บฟ`).setExample('้็ฝฎ่ฟๅ').sendMsg(this.channel_id);;
    }
}