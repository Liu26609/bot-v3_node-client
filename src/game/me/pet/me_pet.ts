import bot from "../../../unity/bot";
import sever from "../../../unity/sever";
import { task_base } from "../../task_base";
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
        let req = await sever.callApi('pet/Me_pet',{userId:this.userId})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let list = req.res.petList;
        let temp = `┏┄═══<emoji:244>我的宠物═══━┄\n`;
        for (let index = 0; index < list.length; index++) {
            const pet = list[index];
            temp+= `[${index}]${pet.name}Lv.${pet.leve}♥️${((pet.hp / pet.out_attribute.hp_max)*100).toFixed(0)}%\n`;
        }

        temp += `┗┄━${this.at()}━┄\n`;

        temp += `查看指令：查看宠物+id
改名指令:宠物改名 + id + 名字
放生指令: 放生宠物+id`

        bot.sendText(this.channel_id,temp)
    }
}