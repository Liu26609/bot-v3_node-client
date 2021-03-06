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
        let temp = `โโ๐ๆ็ไปๅบ(${data.store.length}/400)โโ\n`
        if (data.store.length == 0) {
            temp += `ไฝ ็ไปๅบๅพๅนฒๅใ\n`
        } else {
            for (let index = 0; index < data.store.length; index++) {
                const e = data.store[index];
                if (e.type == 1) {
                    const equipItem = e.data as equip;
                    temp += `[${index}]${EQUIP_TYPE_ICON[EQUIP_TYPE[equipItem.type]]}${equipItem.name}(${EQUIP_QUALITY[equipItem.quality]})+${equipItem.leve}\n`
                } else if (e.type == 1) {
                    temp += `${index}่ดงๅธ`
                }
            }
        }

        temp += `โโ${this.at()}โ`
        await bot.sendText(this.channel_id, temp)
        let temps = ``;
        temps += `โโโโโ๐ๆไปคๆ็คบโโโโ\n`;
        temps += `[ๅ + ID]ๅฐๆฅ็ๆๅฎ่ฃๅค/่ตๆบๅๅบ\n`;
        temps += `โโโโโโโโโโโโโโ\n`;

        await bot.sendText(this.channel_id, temps,this.content)
    }
}