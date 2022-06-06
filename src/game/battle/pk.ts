import { text_example_style } from './../temp/text/example';
import { task_base } from './../task_base';
import bot from '../../unity/bot';
import { log } from '../..';
export class pk extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }
        let pkList = this.content.split('<@!')
        let battleId:string[] = []
        for (let index = 0; index < pkList.length; index++) {
            const element = pkList[index];
            if(element.includes('>')){
                battleId.push(element.replace('>',''))
            }
        }
        let newArr = [...new Set(battleId)]
        log('battleId', newArr)

        bot.sendText(this.channel_id, `向${newArr.length}位玩家发起PK`)
    }
    menu() {
        new text_example_style().setCommand('PK指令:PK + @PK的玩家').setExample('PK@玩家名').sendMsg(this.channel_id)
    }
}