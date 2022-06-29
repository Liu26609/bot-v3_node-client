import { embed_attribute_style } from './../temp/embed/embed_attribute_style';
import { embed_style } from './../temp/embed/embed';
import { task_base } from './../task_base';
import { info, log } from "../..";
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { text_attribute_style } from '../temp/text/attribute';
import common from '../../shared/game/common';
import { ancestryLeve } from '../../shared/game/body';
import { USER_CFG_MSGTEMPLATE } from '../../interface/userCfg';

/**
* 查看我的属性
*/
export class me_attribute extends task_base {
    constructor(...a) {
        super(...a)
        this.render()

    }
    async render() {
        let res = await sever.callApi('Me_Attribute', { userId: this.userId });
        if (!res.isSucc) {
            this.sendErr(res.err)
            return;
        }
        let data = res.res;
        if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.card) {
            new embed_attribute_style().setData(data.body).setTeam(data.team).setAncestry(data.ancestry).sendMsg(this.channel_id);
        } else if (this.UserCfg.msgTemplate == USER_CFG_MSGTEMPLATE.text) {
            new text_attribute_style().setData(data.body).setTeam(data.team).setAncestry(data.ancestry).sendMsg(this.channel_id);
        }
    }
}
