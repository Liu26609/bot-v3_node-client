import common from '../../../shared/game/common';
import sever from '../../../unity/sever';
import { task_base } from '../../task_base';
export class store_get extends task_base{
    constructor(...a){
        super(...a);
        this.render()
    }
    async render(){
        let saveStr = this.content.replace(this.matchKey,'');
        let saveIndex = common.getNumber(saveStr)
        let req = await sever.callApi('store/store_get', { userId: this.userId,storeIndex:saveIndex });
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        let data = req.res;
        
    }
}