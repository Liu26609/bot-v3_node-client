import { text_skill_style } from './../temp/text/skill';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class searchSkill extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        let temp = `￣￣￣￣￣＼查询技能／￣￣￣￣￣
查询指令：查询技能 + 技能名
如:@我 查询技能普通攻击
￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣`;
        bot.sendText(this.channel_id,temp);
    }
    async render() {
        let findSkillName = this.content.replace(this.matchKey, '');
        if (findSkillName.length <= 0) {
            this.menu();
            return;
        }
        let req = await sever.callApi('SearchSkill',{userId:this.userId,skillName:findSkillName});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        await bot.sendText(this.channel_id,`已为你找到相识度${data.match.toFixed(3)}%的技能`)
        new text_skill_style().sendData(data.skill).sendMsg(this.channel_id);

    }
}