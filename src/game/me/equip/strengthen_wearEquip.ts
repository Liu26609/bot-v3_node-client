import { EQUIP_TYPE, EQUIP_TYPE_CN} from '../../../shared/game/equip';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
import { text_example_style } from '../../temp/text/example';

export class strengthen_wearEquip extends task_base {
    constructor(...a) {
        super(...a);
        this.render();

    }
    menu() {
        new text_example_style().setCommand('强化装备指令: 强化 + 装备类型').setExample('强化武器').sendMsg(this.channel_id)
    }
    async render() {
        if (this.content == this.matchKey) {
            this.menu();
            return;
        }
        let strengthenType;
        let strengthenStr = this.content.replace(this.matchKey, '');
        switch (strengthenStr) {
            case EQUIP_TYPE_CN.weapons:
                strengthenType = EQUIP_TYPE.weapons;
                break;
            case EQUIP_TYPE_CN.subWeapon:
                strengthenType = EQUIP_TYPE.subWeapon;
                break;
            case EQUIP_TYPE_CN.clothes:
                strengthenType = EQUIP_TYPE.clothes;
                break;
            case EQUIP_TYPE_CN.hat:
                strengthenType = EQUIP_TYPE.hat;
                break;
            case EQUIP_TYPE_CN.medal:
                strengthenType = EQUIP_TYPE.medal;
                break;
            case EQUIP_TYPE_CN.necklace:
                strengthenType = EQUIP_TYPE.necklace;
                break;
            default:

                break;
        }

        if (typeof (strengthenType) != 'number') {
            this.menu();
            return;
        }
        let req = await sever.callApi('me/equip/Strengthen_wearEquip', { userId: this.userId, strengthenType: strengthenType})
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;

        this.strenthen(data)
    }

}