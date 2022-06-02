import { ancestryLeve } from "../../../shared/game/body";
import { walletKey, walletKey_CN } from "../../../shared/game/user";
import bot from "../../../unity/bot";
import common from "../../../unity/common";
import sever from "../../../unity/sever";
import { task_base } from "../../task_base";

export class randomAncestry extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        let req = await sever.callApi('ancestry/Me_randomAncestry', { userId: this.userId })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let info = req.res.ancestry;
        let sk = req.res.SK;
        let pay = req.res.pay;
        let temp = `┏┄════👑新的血统═══━┄
Ⓜ️来源[${info.from}]
👑血统[${info.title}]
🔥 等级[${ancestryLeve[info.leve]}级]
┣┄════成长分数═══━┄
♥️最大生命${info.base.hp_max}分🔪物理攻击${info.base.PhysicalAttacks}分
🔰物理防御${info.base.PhysicalDefense}分🔮魔法攻击${info.base.MagicAttack}分
🌟魔法防御${info.base.MagicDefense}分💖生命回复${info.base.secondResHp}分
[${sk.name}]${common.getSkDesc(sk)}
┣🔻消耗${walletKey_CN[walletKey[pay.condition.key]]}x${pay.condition.val}
┣▶️还有${walletKey_CN[walletKey[pay.condition.key]]}x${pay.now}
┗┄━${this.at()}━┄
🧚‍♂️成长分数越高升级速度越慢哦`;
        bot.sendText(this.channel_id,temp);
    }
}