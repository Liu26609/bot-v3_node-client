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
[玩家0]Lv6887🐳
[玩家1]Lv1381美女荷官蛙酱
[玩家3]Lv41553
[玩家4]Lv8191古手梨花
[玩家5]Lv9625雨
[玩家7]Lv433kk246.
[怪物0]♥️100%Lv83琵琶精
[怪物1]♥️100%Lv543【山海】鬼车
[怪物2]♥️100%Lv333刑天
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
        temp += `┄════👑敌人═══━┄\n`;
        temp += ` [玩家0]Lv6887🐳\n`;
        temp += ` [怪物0]♥️100%Lv83琵琶精\n`;
        temp += `┄════👑宝箱═══━┄\n`;
        temp += ` [宝箱0]🎁黄金宝箱\n`;
        temp += ` [宝箱1]🎁传说宝箱\n`;
        temp += ` [宝箱2]🎁木质宝箱\n`;
        temp += `┗┄━══════════━┄`
        bot.sendText(this.channel_id,temp)

    }
}