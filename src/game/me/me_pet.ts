import bot from "../../unity/bot";
import { task_base } from "../task_base";
/**
出战指令: 宠物出战+id
休息指令：宠物休息+id
查看指令：查看宠物+id
改名指令:宠物改名 + id + 名字
放生指令: 放生宠物+id
 */
export class me_pet extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        let temp = `┏┄═══👑已参战宠物═══━┄
[1]哥布林Lv.9584♥️100%⏳24%
[2]哥布林Lv.9584♥️100%⏳24%
[3]哥布林Lv.9584♥️100%⏳24%
[4]哥布林Lv.9584♥️100%⏳24%
[5]哥布林Lv.9584♥️100%⏳24%
┏┄═══👑疗伤中宠物═══━┄
[6]哥布林Lv.9584♥️0%⏳24%
[7]哥布林Lv.9584♥️0%⏳24%
[8]哥布林Lv.9584♥️0%⏳24%
[9]哥布林Lv.9584♥️0%⏳24%
[10]哥布林Lv.9584♥️0%⏳24%
┏┄═══👑休息中宠物═══━┄
[11]哥布林Lv.9584♥️100%⏳24%
┗┄━════════════════━┄
ps:宠物最大可参战数量为1+(等级/1000)`
        bot.sendText(this.channel_id,temp)
    }
}