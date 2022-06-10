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
        let isStart = this.content.replace(this.matchKey, '') == '开始';
        let isChallenge = this.content.replace(this.matchKey, '') == '挑战';
        if (isStart) {
            this.openNotPower();
            return;
        }
        if (isChallenge) {
            this.notOpenPlan();
            return;
        }

        if (!isStart) {
            this.menu();
            return
        }
        let req = await sever.callApi('battle/Challenge_image', { userId: this.userId, isStart: true });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if (data.isMax) {
            this.max()
            return;
        }
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
                killLog += `🧚‍♂️本次战斗共${data.battle.battleRound}回合\n`

                for (let index = 0; index < data.battle.kill_log.length; index++) {
                    const kill_item = data.battle.kill_log[index];
                    killLog += `${kill_item.round}回合:${kill_item.body.name}击杀了${kill_item.die_body.name}\n`
                }
                await bot.sendText(this.channel_id, killLog)
            }

        }

    }
    async notOpenPlan() {
        bot.sendText(this.channel_id, `${this.at()}破壁计划未开启，开启需要[四阶巅峰-圣人]以上级别`)
    }
    async openNotPower() {
        bot.sendText(this.channel_id, `${this.at()}你的力量不足以开启此计划,破壁计划需要[四阶巅峰-圣人]以上级别才能开启`)
    }
    async max() {
        bot.sendText(this.channel_id, `${this.at()}你已解开基因锁最高级[五阶中级-超脱者]，代表着挣脱束缚。
因果也好、时空也好、晶壁系也好，都无法限制超脱者。
万千多元宇宙的生灭，对超脱者来说，也不过是一场电影而已。
唯有纪元更替，足以毁灭多元宇宙的大灾难，才能够影响到超脱者。
超脱的无限是真无限，本源无限，权柄无限，规则无限，所有都无限，超越无穷，即为超脱。`)
    }
    async menu() {
        let req = await sever.callApi('battle/Challenge_image', { userId: this.userId, isStart: false });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if (data.isMax) {
            this.max()
            return;
        }
        let temp = `┏┄══⚠️破壁计划══━┄\n`;
        temp += `⬛当全服实力足够之后，所有轮回者都将一同参与[破壁计划]摧毁盒子的障碍，去挑战盒子外的敌人。破壁计划几乎必须需要[四阶高级-临圣]级别以上才能开展\n`
        temp += `🌈挑战胜利🔺所有参与者等级+1000\n`
        temp += `💀挑战失败🔻所有参与者等级清零\n`
        temp += `⬛从开始计划到30天后未击败敌人则视为挑战失败\n`
        temp += `┗┄━══════════━┄`
        await bot.sendText(this.channel_id, temp);
        let tips = `┏@${bot.getBot_name()},输入以下指令┄
▶️开启指令：开始${this.matchKey}
▶️挑战指令：挑战${this.matchKey}
┗┄━${this.at()}━┄`
        bot.sendText(this.channel_id, tips);
    }
}