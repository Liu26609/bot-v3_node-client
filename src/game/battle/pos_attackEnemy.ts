import { log } from '../..';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class pos_attackEnemy extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        // 攻击怪物 =》 选择等级最低且生命最低的怪物
        // 攻击怪物 + 数字 =》 指定攻击怪物
        let attackId = 0;
        if (this.matchKey == '攻击全部怪物') {
            // 攻击全部怪物 =》 攻击全部存活的怪物
            attackId = -1;
        }else if(this.matchKey == '攻击怪物' && this.content == '攻击怪物'){
            attackId = -2;
        }else{
            let index = Number(this.content.replace('攻击怪物',''))
            index = Math.ceil(index);
            if(index < 0 || index > 20){
                attackId = -2;
            }else{
                attackId = index;
            }
        }

        let req = await sever.callApi('battle/PosAttackEnemy',{userId:this.userId,attackId:attackId});
        if(!req.isSucc){
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        console.log(data.kill_log)
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

        let battleConfig = {
            hurtLog: {
                me: true,
                enemy: true
            },
            killLog: {
                open: true,
            }
        }


        if (battleConfig.hurtLog.me) {
            let hurtLog = '';
            hurtLog += `┏┄════📄伤害统计═══━┄\n`;
            hurtLog += `${battleLog[0]}`;
            hurtLog += `┗┄━${this.at()}━┄`
            await bot.sendText(this.channel_id,hurtLog)
        }
        if (battleConfig.hurtLog.enemy) {
            let hurtLog = '';
            hurtLog += `┏┄════🔥敌方统计═══━┄\n`;
            hurtLog += `${battleLog[1]}`;
            hurtLog += `┗┄━${this.at()}━┄`
            await bot.sendText(this.channel_id,hurtLog)
        }

        if (battleConfig.killLog.open) {
            let killLog = '';
            killLog += `┏┄════🧙战斗过程═══━┄\n`;
            killLog += `🧚‍♂️本次战斗共${data.battleRound}回合\n`
            
            for (let index = 0; index < data.kill_log.length; index++) {
                const kill_item = data.kill_log[index];
                killLog += `${kill_item.round}回合:${kill_item.body.name}击杀了${kill_item.die_body.name}\n`
            }
            killLog += `┗┄━${this.at()}━┄`
            await bot.sendText(this.channel_id,killLog)
        }


        temp += `┏┄════🎁战斗结果═══━┄\n`;
        if(data.reward.length > 0){
            data.reward.forEach(item => {
                temp += `${rewardKey_CN[rewardKey[item.key]]}${item.val > 0?'+':''}${item.val}`
            });
        }else{
            temp += `😤这次战斗好像奖励了个寂寞`
        }
        temp += `\n┗┄━${this.at()}━┄`
        temp += `\n🧚‍♂️击杀怪物后地图有几率掉落宝箱哦~`
        

        bot.sendText(this.channel_id, temp)
    }
}