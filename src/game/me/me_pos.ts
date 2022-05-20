import { body } from './../../shared/game/body';
import { log } from "../..";
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
export class me_pos extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let req = await sever.callApi('Pos', { userId: this.userId });
        if (!req.isSucc) {
            bot.sendText(this.channel_id, `意外的错误:${req.err}`)
            return;
        }
        let data = req.res;
        let temp = ``;
        temp += `┏┄🌏${data.pos_name}[${data.pos.x},${data.pos.y}]━┄\n`;
        temp += `            ${data.isTop ? '上' : '⛔'}\n`;
        temp += `  ${data.isLeft ? '左' : '⛔'}       🧙‍♂️       ${data.isRight ? '右' : '⛔'}\n`;
        temp += `            ${data.isButtom ? '下' : '⛔'}\n`;

        if (data.player.length > 1) {
            temp += `┄════🔥发现敌人═══━┄\n`;
            for (let index = 0; index < data.player.length; index++) {
                const body = data.player[index] as body;
                const id = body.id;
                if(id == this.userId){
                    continue;
                }
                const name =  body.name;
                const leve = body.leve;
                temp += ` [玩家${index}]Lv.${leve}${name}\n`;

            }
        }
        temp += `┄════🎉发现宝箱═══━┄\n`;
        temp += ` [宝箱0]🎁黄金宝箱\n`;
        temp += ` [宝箱1]🎁传说宝箱\n`;
        temp += ` [宝箱2]🎁木质宝箱\n`;
        temp += `┗┄━══════════━┄`
        bot.sendText(this.channel_id, temp)

    }
}