import { embed_style } from '../../temp/embed/embed';
import { EQUIP_QUALITY, EQUIP_TYPE, EQUIP_TYPE_CN, EQUIP_TYPE_ICON } from '../../../shared/game/equip';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
import { USER_CFG_MSGTEMPLATE } from '../../../interface/userCfg';
import { text_example_style } from '../../temp/text/example';
import common from '../../../shared/game/common';

export class strengthen_bagEquip extends task_base {
    constructor(...a) {
        super(...a);
        this.render();

    }
    menu() {
        new text_example_style().setCommand('强化背包装备指令: 强化背包装备 + 背包ID').setExample('强化背包装备0').sendMsg(this.channel_id)
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }
        let strengthenStr = this.content.replace(this.matchKey, '');
        let index = common.getNumber(strengthenStr)
        
        let req = await sever.callApi('me/equip/Strengthen_bagEquip', { userId: this.userId, bagIndex: index})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        this.strenthen(data)
    }

}