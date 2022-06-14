import { text_skill_style } from './../temp/text/skill';
import { rewardKey, rewardKey_CN } from "../../shared/game/prop";
import { textStyle } from "../../shared/game/setUp";
import bot from "../../unity/bot";
import sever from "../../unity/sever";
import { task_base } from "../task_base";
import { walletKey, walletKey_CN } from '../../shared/game/user';

export class shop_skill extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        let req = await sever.callApi('shop/Shop_skill', { userId: this.userId });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        
        let str = '';
        str += `技能商店第${data.updateNum}期商品到货啦~`
        str += `\n🛒购买价格:${walletKey_CN[walletKey[data.buyCondition.key]]}x${data.buyCondition.val}`
        str += `\n🧮商店库存:${data.stock - data.sellNum}`
        str += `\n🕤刷新时间:${Math.ceil((data.nextUpdateTime - Date.now()) / 1000)}秒`
        str += `\n🎫购买指令：购买技能`
        str += `\n<emoji:147>每次刷新随机价格，与技能属性无关`;
        str += `\n↓↓↓↓以下是技能属性预览↓↓↓↓`;
        await bot.sendText(this.channel_id, str)
        new text_skill_style().sendData(data.sell_temp).sendMsg(this.channel_id)
        switch (data.userCfg.textStyle) {
            case textStyle.card:
                
                break;
            case textStyle.text:

                break;
            default:
                break;
        }

    }
}