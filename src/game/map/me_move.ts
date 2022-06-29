import { me_pos } from '../me/me_pos';
import { err, log } from '../..';
import sever from '../../unity/sever';
import { task_base } from '../task_base';
import { moveDirection } from '../../shared/protocols/map/PtlMove';
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

        let req = await sever.callApi('map/Move', {
            direction: direction,
            userId: this.userId
        })
        if(!req.isSucc){
            this.sendErr(req.err)
            return;
        }
        new me_pos(...this.args);
    }
}