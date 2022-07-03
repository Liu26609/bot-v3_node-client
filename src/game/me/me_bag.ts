import { EQUIP_QUALITY, EQUIP_TYPE, EQUIP_TYPE_ICON } from '../../shared/game/equip';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_bag extends task_base {
    constructor(...a) {
        super(...a)
        this.render();
    }
    async bagNull(){
        let temps = ``;
        temps += `你的背包空空如也。\n`;
        temps += `[装备商店]也许有合适的装备哦\n`;
        temps += `[拍卖行]看看拍卖行有没有在卖装备\n`;
        temps += `[仓库]看看仓库有没有以前珍藏装备`;
        this.log(temps)
    }
    async render() {
        let req = await sever.callApi('Bag', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        if(data.bag.length <= 0){
            this.bagNull();
            return;
        }
        let temp = ``;
        temp += `┏┄👑我的背包(${data.bag.length}/20)━┄\n`;
        for (let index = 0; index < data.bag.length; index++) {
            const item = data.bag[index];
            temp += `[${index}]${EQUIP_TYPE_ICON[EQUIP_TYPE[item.type]]}${item.name}(${EQUIP_QUALITY[item.quality]})+${item.leve}\n`
        }
        temp += `┗┄${this.at()}┄\n`;
        let temps = ``;
        temps += `┏┄═══👑指令提示══━┄\n`;
        temps += `[查看背包装备 + 数字]查看指定装备属性\n`;
        temps += `[穿装备 + 数字]装备上指定装备\n`;
        temps += `[分解装备 + 数字]分解指定装备\n`;
        temps += `[分解全部装备]分解背包全部装备\n`;
        temps += `[拍卖装备 + 数字]拍卖指定装备\n`;
        temps += `[存装备 + 数字]将指定装备放仓库\n`;
        temps += `┗┄━═════════━┄\n`;

        await bot.sendText(this.channel_id, temp,this.matchKey);
        await bot.sendText(this.channel_id, temps,this.matchKey)
    }
}