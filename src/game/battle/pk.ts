import { text_example_style } from './../temp/text/example';
import { task_base } from './../task_base';
import bot from '../../unity/bot';
import { log } from '../..';
import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import sever from '../../unity/sever';
import common from '../../shared/game/common';
import { text_battleTemp_style } from '../temp/text/battleTemp';
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
            const list = element.split('>')
            for (let index = 0; index < list.length; index++) {
                const itemId = list[index];
                if(itemId && itemId.length > 10){
                    battleId.push(itemId)
                }
            }
        }
        let newArr = [...new Set(battleId)]
        if(newArr.length <= 0){
            this.menu()
            return
        }
        let req = await sever.callApi('battle/PkRank', {userId: this.userId,attackId:newArr});
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = ``;
        let battleTemp = new text_battleTemp_style(this.UserCfg).sendData(data)
        battleTemp.setHurtLotTitle_me(`โโโโ๐ไผคๅฎณ็ป่ฎกโโโ`)
        battleTemp.setHurtLotTitle_enemy(`โโโโโ๐ฅๆๆน็ป่ฎกโโโโ`)


        temp += battleTemp.getSkillHurt(0);
        temp += battleTemp.getSkillHurt(1);

        temp += `โโโโโ๐งๆๆ่ฟ็จโโโโ\n`;
        temp += `<emoji:187>ๆฌๆฌกๆๆๅฑ${data.battleRound}ๅๅ\n`
        temp += battleTemp.getKillProcess();


        temp += `โโโโ๐ๆๆ็ปๆโโโ\n`;
        if (battleTemp.getReward()) {
            temp += battleTemp.getReward()
        } else {
            temp += `๐ค่ฟๆฌกๆๆๅฅฝๅๅฅๅฑไบไธชๅฏๅฏ`
        }
        temp += `\nโโ${this.at()}โ`
        
        temp += `\n<emoji:147>ๅฃฐๆๅผ่ถ้ซๆฏๅคฉๅฏ้ขๅๅฅๅฑ่ถ้ซ~`
        
        // bot.sendText(this.channel_id, `ๅ${newArr.length}ไฝ็ฉๅฎถๅ่ตทPK`)

        await bot.sendText(this.channel_id,temp,this.matchKey)
    }
    menu() {
        new text_example_style().setCommand('PKๆไปค:PK + @PK็็ฉๅฎถ').setExample('PK@็ฉๅฎถๅ').sendMsg(this.channel_id)
    }
}