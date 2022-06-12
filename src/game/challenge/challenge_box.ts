import { text_example_style } from '../temp/text/example';
import { task_base } from '../task_base';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { DNA_CN, DNA_Leve } from '../../shared/game/body';
/**
 * 破壁计划
 */
export class challenge_box extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return
        }
        let isStart = this.content.replace(this.matchKey, '') == '开启';
        let isChallenge = this.content.replace(this.matchKey, '') == '挑战';

        let type = 0;
        if (isStart) {
            type = 1
        }
        if (isChallenge) {
            type = 2
        }

        if (!type) {
            this.menu();
            return
        }
        
        let req = await sever.callApi('battle/Challenge_box', { userId: this.userId, type: type });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        if (data.battle) {
            let battleLog = ['', ''];
            let battleList = data.battle.log
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
                hurtLog += `🔥￣￣￣￣＼📄伤害统计／￣￣￣￣🔥\n`;
                hurtLog += `${battleLog[0]}`;
                await bot.sendText(this.channel_id, hurtLog)
            }
            if (battleConfig.hurtLog.enemy) {
                let hurtLog = '';
                hurtLog += `🔥￣￣￣￣＼💌敌方统计／￣￣￣￣🔥\n`;
                hurtLog += `${battleLog[1]}`;
                await bot.sendText(this.channel_id, hurtLog)
            }

            if (battleConfig.killLog.open) {
                let killLog = '';
                killLog += `￣￣￣￣￣＼🧙战斗过程／￣￣￣￣\n`;
                killLog += `<emoji:147>本次战斗共${data.battle.battleRound}回合\n`

                for (let index = 0; index < data.battle.kill_log.length; index++) {
                    const kill_item = data.battle.kill_log[index];
                    killLog += `${kill_item.round}回合:${kill_item.body.name}击杀了${kill_item.die_body.name}\n`
                }
                await bot.sendText(this.channel_id, killLog)
            }

        }
    }

    async menu() {
        let req = await sever.callApi('battle/Challenge_box', { userId: this.userId, type: 0 });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        let temp = `┏┄══⚠️破壁计划══━┄\n`;
        temp += `⬛当全服实力足够之后，所有轮回者都将一同参与[破壁计划]摧毁盒子的障碍，去挑战盒子外的敌人。破壁计划几乎必须需要[${DNA_CN[DNA_Leve[data.openlimit]]}]级别以上才能开展\n`
        temp += `🌈挑战胜利🔺${data.win}\n`
        temp += `💀挑战失败🔻${data.fail}\n`
        temp += `⬛从开始计划若1天内没人挑战则视为失败\n`
        temp += `┗┄━══════════━┄`
        await bot.sendText(this.channel_id, temp);
        let tips = `┏@${bot.getBot_name()},输入以下指令┄
▶️开启指令：开启${this.matchKey}
▶️挑战指令：挑战${this.matchKey}
┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, tips);
    }
}