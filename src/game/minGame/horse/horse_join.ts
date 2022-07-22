import { horse_look } from './horse_look';
import { HORSE_STATE, HORSE_TYPE } from '../../../shared/protocols/minGame/PtlHorse';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { text_example_style } from '../../temp/text/example';
import { task_base } from '../../task_base';
import common from '../../../shared/game/common';
import { text_style } from '../../temp/text/text_style';
export class horse_join extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    menu(){
        new text_example_style().setCommand('参赛指令:参赛 + 宠物ID').setExample('参赛0').sendMsg(this.channel_id);
    }
    notPass() {
        let temp = new text_style();
        temp.setTitle(`马拉松子频道未授权`)
        temp.addLine(`1.马拉松会频繁发送消息`)
        temp.addLine(`2.建议单独新建一个马拉松专属子频道`)
        if (this.GuildCfg) {
            if (this.GuildCfg.master) {
                temp.addLine(`3.此功能需要<@${this.GuildCfg.master}>来授权开启`)
            } else {
                temp.addLine(`3.此功能需要频道主授权开启。请艾特频道主前来授权`)
            }
            if (this.GuildCfg.passHorseChannel_id != '') {
                temp.addLine(`4.你可以直接前往已授权频道<#${this.GuildCfg.passHorseChannel_id}>开始参赛,如果无法点击则已经被删除需要重新授权`)
            }
        }
        temp.sendMsg(this.channel_id)
    }
    async render() {
        if(this.content == this.matchKey){
            this.menu()
            return;
        }
        if (this.GuildCfg.passHorseChannel_id != this.channel_id) {
            this.notPass();
            return;
        }
        let joinIndex = common.getNumber(this.content.replace(this.matchKey,''));

        let req = await sever.callApi('minGame/Horse', { userId: this.userId, type: HORSE_TYPE.join,joinPetIndex:joinIndex })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        new horse_look(...this.args);
        /**
         * ┏┄══🎰猜数第75轮══━┄
🏷️本轮数字还有599.999秒结束
❓数字范围[100 - 10000]之间
📈本轮全服已猜1次
🧧累计奖励⚙️强化碎片x1186
🥳上一轮赢家:黄陵
┗┄━@楚轩 ━┄
         */
    }
}