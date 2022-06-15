import bot from "../../unity/bot";
import gameCfg from "../gameCfg";
import { task_base } from "../task_base";

export class sys_update extends task_base{
    constructor(...a){
        super(...a)
        let bot_cfg = bot.getBotConfig()
        bot.sendImage(this.channel_id,`${bot_cfg.cosUrl}/sys/update.png`)
    }
}