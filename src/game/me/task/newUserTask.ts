import { TaskId, taskType, taskType_CN } from '../../../shared/game/taskTemp';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
export class newUserTask extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        let req = await sever.callApi('task/NewUsetTask', { userId: this.userId })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄═🌈${taskType_CN[taskType[taskType.newUser]]}═━┄\n`
        temp += `不错，你是这次来的人里素质最好的一个。
        想明白生命的意义吗?想真正的……活着吗?
    欢迎来到主神空间,选择一个基因并进化并解开基因锁最高阶，那么最强之名......就是你的了！
但是我不会帮你，想要什么样的未来.....自己去追寻吧！那么......选择权现在给你了。
希望您能在主神空间活到最后。\n`
        for (let index = 0; index < data.list.length; index++) {
            const item = data.list[index];
            const isDone = item.now >= item.target;
            temp += `${isDone ? '✅' : '☑️'}${this.coverTaskIdTips(item.id)}(${item.now}/${item.target})\n`
        }
        temp += `┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, temp, this.content)
    }
    coverTaskIdTips(id: TaskId) {
        let str = ``;
        switch (id) {
            case TaskId.look_loca:
                str = `[位置]查看当前位置`
                break;
            case TaskId.move_right:
                str = `[右]向右移动`
                break;
            case TaskId.move_left:
                str = `[左]向左移动`
                break;
            case TaskId.move_top:
                str = `[上]向上移动`
                break;
            case TaskId.move_buttom:
                str = `[下]向下移动`
                break;
            case TaskId.attackMonster:
                str = `[攻击怪物]攻击位置怪物`
                break;
            case TaskId.EquipShop_look:
                str = `[装备商店]变强的途径之一`
                break;
            case TaskId.SkillShop_look:
                str = `[技能商店]变强的途径之一`
                break;
            default:
                str = `未收录任务id${id}`
                break;

        }
        return str
    }
}