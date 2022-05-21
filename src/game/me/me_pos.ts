import { BASE_BODYS, body } from './../../shared/game/body';
import { log } from "../..";
import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { task_base } from "../task_base";
import { chestBoxLv, chestBoxLv_CN } from '../../shared/game/prop';

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
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        log('pos', data.enemy)
        let temp = ``;
        temp += `┏┄🌏${data.pos_name}[${data.pos.x},${data.pos.y}]━┄\n`;
        temp += `            ${data.isTop ? '上' : '⛔'}\n`;
        temp += `  ${data.isLeft ? '左' : '⛔'}       🧙‍♂️       ${data.isRight ? '右' : '⛔'}\n`;
        temp += `            ${data.isButtom ? '下' : '⛔'}\n`;

        if (data.player.length + data.enemy.length > 1) {
            temp += `┄════🔥发现敌人═══━┄\n`;
            for (let index = 0; index < data.player.length; index++) {
                const body = data.player[index] as body;
                const id = body.id;
                if (id == this.userId) {
                    continue;
                }
                const name = body.name;
                const leve = body.leve;
                temp += ` [玩家${index}]Lv.${leve}${name}\n`;
            }
            for (let index = 0; index < data.enemy.length; index++) {
                const body = data.enemy[index] as BASE_BODYS;
                if (body.hp < 0) {
                    continue;
                }
                const name = body.name;
                const leve = body.leve;
                temp += ` [怪物${index}]Lv.${leve}${name}hp:${body.hp}\n`;
            }
        }
        if (data.chest.length > 0) {
            let haveNull = true;
            for (let index = 0; index < data.chest.length; index++) {
                const item = data.chest[index];
                if (!item.isOpen) {
                    if (haveNull) {
                        temp += `┄════🎉发现宝箱═══━┄\n`;
                    }
                    haveNull = false;
                    temp += ` [宝箱${index}]${chestBoxLv_CN[chestBoxLv[item.leve]]}\n`;
                }
            }
        }
        temp += `┗┄━══════════━┄`

        bot.sendText(this.channel_id, temp)

    }
}