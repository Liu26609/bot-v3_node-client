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
        temp += `ââââðæ¯æ¥ä»»å¡ââââ\n`
        for (let index = 0; index < data.list.length; index++) {
            const item = data.list[index];
            const isDone = item.now >= item.target;
            temp += `${isDone ? 'â' : 'âï¸'}${this.coverTaskIdTips(item.id)}(${item.now}/${item.target})\n`
        }
        temp += `ââ${this.at()}â`

        bot.sendText(this.channel_id, temp, this.content)
    }
    coverTaskIdTips(id: TaskId) {
        let str = ``;
        switch (id) {
            case TaskId.sign:
                str = `[ç­¾å°]ç­¾ä»ä¹å°ï¼éé±¼å»ï¼`
                break;
            case TaskId.SkillShop_look:
                str = `[æè½ååº]æ¥çæè½ååº`
                break;
            case TaskId.BackShop_look:
                str = `[é»å¸ååº]ä¸æ­£å½çPYååº`
                break;
            case TaskId.EquipShop_look:
                str = `[è£å¤ååº]æ¥çè£å¤ååº`
                break;
            case TaskId.PK:
                str = `[PK]é¢éPKç¹å°ä¸ºæ­¢`
                break;
            case TaskId.catch:
                str = `[ææ]åºåæ¶éå¨`
                break;
            case TaskId.fishing:
                str = `[éé±¼]éé±¼ä½¬ç»ä¸ç©ºå`
                break;
            case TaskId.attackMonster:
                str = `[æ»å»æªç©]é²çæ èæä¸ªæª`
                break;
            case TaskId.attackBoss_partake:
                str = `[æ»å»boss]å®ç§å¸åå¨çº¿å®ç§`
                break;
            case TaskId.rank:
                str = `[åå±±è®ºå]èé¸¡äºå`
                break;
            case TaskId.lottery_partake:
                str = `[çæ°]ä¸­æ¯ä¸å¯è½ä¸­ç`
                break;
            case TaskId.look_Horse:
                str = `[å® ç©é©¬ææ¾]æ¥çä¸æ¬¡å® ç©é©¬ææ¾`
                break;
            case TaskId.challenge_hit:
                str = `[ä¼¤å®³ææ]æé«çåä¼¤å®³ææ`
                break;
            case TaskId.challenge_greed:
                str = `[è´ªå©ªæ´çª]ä¸æ¬²æä¸ºæ`
                break;
            default:
                str = `æªæ¶å½ä»»å¡id${id}`
                break;
        }
        return str
    }
}