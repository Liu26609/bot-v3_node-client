import { err, info, log } from '../..';
import { SKILL_ACTIVE, SKILL_RES, SKILL_ACTIVE_RES_TAG, SKILL_ACTIVE_RES_TYPE, SKILL_TYPE } from '../../shared/game/skill';
import bot from '../../unity/bot';
import common from '../../unity/common';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class battleTest extends task_base {
    /**
     * 技能释放记录
     */
    logSkillMap: Map<string, Map<number, SKILL_RES>>;
    constructor(...args) {
        super(...args)
        this.logSkillMap = new Map();
        this.render()

    }
    async render() {
        let startTime = Date.now();
        let res = await sever.callApi('Battle', {})
        if (!res.isSucc) {
            log('战斗出错了');
            return;
        }
        let data = res.res;
        let temp = ``;

        let battleLog = ['', ''];
        let battleList = data.log
        for (let index = 0; index < battleList.length; index++) {

            const item = battleList[index];
            let itemLog = ''

            itemLog += '🧙' + item.name;
            for (let index = 0; index < item.list.length; index++) {

                const free_skill = item.list[index];
                itemLog += `│▌${free_skill.name}:${free_skill.val}`
            }

            itemLog += '\n';

            battleLog[item.group] += itemLog;

        }
        log(battleLog)

        temp += `战斗耗时${(Date.now() - startTime) / 1000}s\n`;
        temp += `🔥￣￣￣￣＼📄伤害统计／￣￣￣￣🔥\n`;
        temp += `${battleLog[0]}\n`;
        temp += `🔥￣￣￣￣＼💌敌方统计／￣￣￣￣￣🔥\n`;
        temp += `${battleLog[1]}\n`;
        temp += `￣￣￣￣￣＼🧙战斗过程／￣￣￣￣￣\n`
        temp += `②💀回合【瑞兽】青鸾击杀了@楚轩 \n`
        temp += `②💀回合【瑞兽】青鸾击杀了@楚轩 \n`
        temp += `②💀回合【瑞兽】青鸾击杀了@楚轩 \n`
        temp += `②💀回合【瑞兽】青鸾击杀了@楚轩 \n`
        temp += `②💀回合【瑞兽】青鸾击杀了@楚轩 \n`
        temp += `②💀回合【瑞兽】青鸾击杀了@楚轩 \n`
        temp += `②💀回合【瑞兽】青鸾击杀了@楚轩 \n`

        temp += `￣￣￣￣￣＼🎁战斗结果／￣￣￣￣￣\n`;
        temp += `💰金币+25⏳经验+3296⏳宠物经验+3296🌈称号经验+1✝️正义值+1`
        
        bot.sendText(this.channel_id, temp)
    }

}