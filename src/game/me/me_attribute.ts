import { task_base } from './../task_base';
import { info } from "../..";
import bot from '../../unity/bot';

/**
* 查看我的属性
*/
export class me_attribute extends task_base {
    constructor(...a) {
        super(...a)
        this.render()
    }
    render(){
        bot.sendText(this.channel_id,'我的属性')
    }
}
