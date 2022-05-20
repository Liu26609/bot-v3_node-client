import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { task_base } from "../task_base";

/**
 * 指令：位置
 * 
🌏修仙世界[999,999]
      
左@楚轩 
      下
￣￣￣￣￣￣＼🔥发现敌人／￣￣￣￣￣￣

 */
export class me_pos extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('Pos',{userId:this.userId});
        if(!req.isSucc){
            bot.sendText(this.channel_id,`意外的错误:${req.err}`)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `┏┄🌏修仙世界[${data.pos.x},${data.pos.y}]━┄\n`;
        temp += `            上\n`;
        temp += `  左       🧙‍♂️       右\n`;
        temp += `            下\n`;
        temp += `┄════🔥发现敌人═══━┄\n`;
        temp += ` [玩家0]Lv6887🐳\n`;
        temp += ` [怪物0]♥️100%Lv83琵琶精\n`;
        temp += `┄════🎉发现宝箱═══━┄\n`;
        temp += ` [宝箱0]🎁黄金宝箱\n`;
        temp += ` [宝箱1]🎁传说宝箱\n`;
        temp += ` [宝箱2]🎁木质宝箱\n`;
        temp += `┗┄━══════════━┄`
        bot.sendText(this.channel_id,temp)

    }
}