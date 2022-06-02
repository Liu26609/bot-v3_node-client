import { ancestryLeve } from "../../../shared/game/body";
import bot from "../../../unity/bot";
import common from "../../../unity/common";
import sever from "../../../unity/sever";
import { task_base } from "../../task_base";

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
        let temp = `┏┄════👑我的进化═══━┄
Ⓜ️来源[${data.ancestry.from}]
👑血统[${data.ancestry.title}]
🔥 等级[${ancestryLeve[data.ancestry.leve]}级]
┣┄════成长分数═══━┄
♥️最大生命${data.ancestry.base.hp_max}分🔪物理攻击${data.ancestry.base.PhysicalAttacks}分
🔰物理防御${data.ancestry.base.PhysicalDefense}分 🔮魔法攻击${data.ancestry.base.MagicAttack}分
🌟魔法防御${data.ancestry.base.MagicDefense}分💖生命回复${data.ancestry.base.secondResHp}分
[${data.SK.name}]${common.getSkDesc(data.SK)}
┗┄━${this.at()}━┄
🧚‍♂️成长分数越高每级属性提升越高,成长分数会随着进化等级变化`
        bot.sendText(this.channel_id, temp);
    }
}