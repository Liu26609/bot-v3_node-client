import { TaskId, taskType, taskType_CN } from '../../../shared/game/taskTemp';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from './../../task_base';
export class soaringTask extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        let req = await sever.callApi('task/soaringTask', { userId: this.userId })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄═🌈${taskType_CN[taskType[data.taskLeve]]}═━┄\n`
        temp += `⬛实力提升到一定程度成长就会变得缓慢,进而造成高等级玩家互相残杀的局面，这对于破壁计划是不利的。
因此，在破壁计划之前，准备了阶梯计划。每一级阶梯计划都提供不同任务和奖励\n`
        for (let index = 0; index < data.list.length; index++) {
            const item = data.list[index];
            const isDone = item.now >= item.target;
            temp += `${isDone ? '✅' : '☑️'}${this.coverTaskIdTips(item.id)}(${item.now}/${item.target})\n`
        }
        temp += `┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, temp)
    }
    coverTaskIdTips(id: TaskId) {
        let str = ``;
        switch (id) {
            case TaskId.strengthen_succress:
                str = `成功强化装备`
                break;
            case TaskId.attackBoss_kill:
                str = `击杀世界BOSS`
                break;
            default:
                str = `未收录任务id${id}`
                break;
        }
        return str
    }
}