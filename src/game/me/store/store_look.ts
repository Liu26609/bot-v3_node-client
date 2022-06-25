import { equip, EQUIP_QUALITY, EQUIP_TYPE, EQUIP_TYPE_ICON } from '../../../shared/game/equip';
import bot from '../../../unity/bot';
import sever from '../../../unity/sever';
import { task_base } from './../../task_base';
export class store_look extends task_base {
    constructor(...a) {
        super(...a);
        this.render()
    }
    async render() {
        let req = await sever.callApi('store/store_look', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        let temp = `┏┄👑我的仓库(${data.store.length}/400)━┄\n`
        if (data.store.length == 0) {
            temp += `你的仓库很干净。\n`
        } else {
            for (let index = 0; index < data.store.length; index++) {
                const e = data.store[index];
                if (e.type == 1) {
                    const equipItem = e.data as equip;
                    temp += `[${index}]${EQUIP_TYPE_ICON[EQUIP_TYPE[equipItem.type]]}${equipItem.name}(${EQUIP_QUALITY[equipItem.quality]})+${equipItem.leve}\n`
                } else if (e.type == 1) {
                    temp += `${index}货币`
                }
            }
        }

        temp += `┗┄━${this.at()}━┄`
        await bot.sendText(this.channel_id, temp)
        let temps = ``;
        temps += `┏┄═══👑指令提示══━┄\n`;
        temps += `[取 + ID]将查看指定装备/资源取出\n`;
        temps += `┗┄━═════════━┄\n`;

        await bot.sendText(this.channel_id, temps)
    }
}