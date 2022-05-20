import { me_pos } from './me_pos';
import { err, log } from '../..';
import { moveDirection } from '../../shared/protocols/PtlMove';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
import bot from '../../unity/bot';
//TODO指令：移动 上 下 左 右
export class me_move extends task_base {
    constructor(...a) {
        super(...a);
        this.render();
    }
    async render() {
        let direction;
        switch (this.content) {
            case '上':
                direction = moveDirection.top;
                break;
            case '下':
                direction = moveDirection.buttom;
                break;
            case '右':
                direction = moveDirection.right;
                break;
            case '左':
                direction = moveDirection.left;
                break;
            default:
                break;
        }
        if(typeof(direction) == 'undefined'){
            err('错误的移动',this.content);
            return;
        }

        let req = await sever.callApi('Move', {
            direction: direction,
            userId: this.userId
        })
        if(!req.isSucc){
            bot.sendText(this.channel_id,req.err.message)
            return;
        }
        new me_pos(...this.args);
    }
}