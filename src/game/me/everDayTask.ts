import { TaskId } from '../../shared/game/taskTemp';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class everDayTask extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let req = await sever.callApi('me/EverDayTask', { userId: this.userId })
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
            temp += `${isDone?'✅':'☑️'}${this.coverTaskIdTips(item.id)}(${item.now}/${item.target})\n`
        }
        temp += `┗┄━${this.at()}━┄`

        bot.sendText(this.channel_id, temp)
    }
    coverTaskIdTips(id: TaskId) {
        let str = ``;
        switch (id) {
            case TaskId.sign:
                str = `[签到]每日签到`
                break;
            case TaskId.BackShop_look:
                str = `[黑市]查看黑市商店`
                break;
            case TaskId.EquipShop_look:
                str = `[装备商店]查看装备商店`
                break;
            case TaskId.PK:
                str = `[PK]频道PK点到为止`
                break;
            case TaskId.catch:
                str = `[捕捉]成功抓到宠物`
                break;
            case TaskId.fishing:
                str = `[钓鱼]钓鱼佬绝不空军`
                break;
            case TaskId.attackMonster:
                str = `[攻击怪物]吃饭睡觉打怪物`
                break;
            case TaskId.attackBoss:
                str = `[攻击boss]全服一起刮痧BOSS`
                break;
            case TaskId.rank:
                str = `[华山论剑]天梯排位`
                break;
            default:
                str = `未收录任务id${id}`
                break;
        }
        return str
    }
}
/**
┏┄══🌈飞升任务══━┄
☑️击杀等级不相差10级玩家(0/1000)
☑️击杀大于自身等级怪物(0/1000)
☑️击杀一次boss(0/1)
┗┄━@楚轩 ━┄
🧚‍♂️完成任务变化:
1.随机部位最高品质装备
2.在下一个飞升者完成任务前，任意玩家击杀怪物自身获得5%经验
3.地图切换=>怪物等级提高
 */