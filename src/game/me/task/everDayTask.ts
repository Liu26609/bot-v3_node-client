import { TaskId } from '../../../shared/game/taskTemp';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
export class everDayTask extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let req = await sever.callApi('task/EverDayTask', { userId: this.userId })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        let temp = ``;
        temp += `┏┄══🌈每日任务══━┄\n`
        for (let index = 0; index < data.list.length; index++) {
            const item = data.list[index];
            const isDone = item.now >= item.target;
            temp += `${isDone ? '✅' : '☑️'}${this.coverTaskIdTips(item.id)}(${item.now}/${item.target})\n`
        }
        temp += `┗┄━${this.at()}━┄`

        bot.sendText(this.channel_id, temp,this.content)
    }
    coverTaskIdTips(id: TaskId) {
        let str = ``;
        switch (id) {
            case TaskId.sign:
                str = `[签到]签什么到，钓鱼去！`
                break;
            case TaskId.SkillShop_look:
                str = `[技能商店]查看技能商店`
                break;
            case TaskId.BackShop_look:
                str = `[黑市商店]不正当的PY商店`
                break;
            case TaskId.EquipShop_look:
                str = `[装备商店]查看装备商店`
                break;
            case TaskId.PK:
                str = `[PK]频道PK点到为止`
                break;
            case TaskId.catch:
                str = `[捕捉]废品收集器`
                break;
            case TaskId.fishing:
                str = `[钓鱼]钓鱼佬绝不空军`
                break;
            case TaskId.attackMonster:
                str = `[攻击怪物]闲的无聊打个怪`
                break;
            case TaskId.attackBoss_partake:
                str = `[攻击boss]刮痧师傅在线刮痧`
                break;
            case TaskId.rank:
                str = `[华山论剑]菜鸡互啄`
                break;
            case TaskId.lottery_partake:
                str = `[猜数]中是不可能中的`
                break;
            default:
                str = `未收录任务id${id}`
                break;
        }
        return str
    }
}