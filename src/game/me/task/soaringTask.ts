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
        let temp = `âââð${taskType_CN[`ladder_${data.taskLeve}`]}âââ\n`
        temp += `â¬å®åæåå°ä¸å®ç¨åº¦æé¿å°±ä¼åå¾ç¼æ¢,è¿èé æé«ç­çº§ç©å®¶äºç¸æ®æçå±é¢ï¼è¿å¯¹äºç ´å£è®¡åæ¯ä¸å©çã
å æ­¤ï¼å¨ç ´å£è®¡åä¹åï¼åå¤äºé¶æ¢¯ä»»å¡ãæ¯ä¸çº§é¶æ¢¯ä»»å¡é½æä¾ä¸åä»»å¡åå¥å±\n`
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
            case TaskId.strengthen_succress:
                str = `æåå¼ºåè£å¤`
                break;
            case TaskId.attackBoss_kill:
                str = `å»æä¸çBOSS`
                break;
            case TaskId.PK:
                str = `é¢éå[PK]å¶ä»ç©å®¶`
                break;
            case TaskId.rank:
                str = `[åå±±è®ºå]èé¸¡äºå`
                break;
            case TaskId.sign:
                str = `[ç­¾å°]æ¯æ¥ç­¾å°`
                break;
            case TaskId.docile_partake:
                str = `[ææ]ææå® ç©`
                break;
            case TaskId.lottery_win:
                str = `[çæ°]çä¸­æ°å­`
                break;
            case TaskId.lottery_partake:
                str = `[çæ°]åä¸çæ°`
                break;
            case TaskId.attackMonster:
                str = `[æ»å»æªç©]å·æªç¡è§åé¥­`
                break;
            default:
                str = `æªæ¶å½ä»»å¡id${id}`
                break;

        }
        return str
    }
}