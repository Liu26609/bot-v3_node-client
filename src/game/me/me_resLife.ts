import { rewardKey, rewardKey_CN } from '../../shared/game/prop';
import { walletKey, walletKey_CN } from '../../shared/game/user';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_resLife extends task_base{
    constructor(...a){
        super(...a)
        this.render()
    }
    async render(){
        let req = await sever.callApi('ResLife',{userId:this.userId})
        if(!req.isSucc){
            this.sendErr(req.err)
            return;
        }
    }
}