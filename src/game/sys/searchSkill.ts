import { text_skill_style } from './../temp/text/skill';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
import { text_example_style } from '../temp/text/example';
export class searchSkill extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu() {
        new text_example_style().setCommand('查询技能指令：查询技能 + 技能名').setExample('查询技能普通攻击').sendMsg(this.channel_id)
    }
    async render() {
        let findSkillName = this.content.replace(this.matchKey, '');
        if (findSkillName.length <= 0) {
            this.menu();
            return;
        }
        let req = await sever.callApi('SearchSkill', { userId: this.userId, skillName: findSkillName });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        new text_skill_style().sendData(data.skill).sendMsg(this.channel_id);

    }
}