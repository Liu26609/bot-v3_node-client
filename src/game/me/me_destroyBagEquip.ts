import { TsrpcErrorType } from 'tsrpc';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_destroyBagEquip extends task_base {
    constructor(...a){
        super(...a);
        this.render();

    }
    async render(){
        if(this.matchKey == '销毁全部装备'){
            let reqs = await sever.callApi('Me_destroyBagEquip',{userId:this.userId,destroyIndex:-1});
            if(!reqs.isSucc){
                this.sendErr(reqs.err)
                return;
            }
            bot.sendText(this.channel_id,'装备已经删除辣！')
            return;
        }
        let destroyIndex = this.content.replace(this.matchKey, '');
        if (destroyIndex == '') {
            this.sendErr({
                message: '需要丢弃的背包装备的id不能为空',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if(isNaN(Number(destroyIndex))){
            this.sendErr({
                message: '需要丢弃的背包装备的id只能是数字',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if(Number(destroyIndex) < 0){
            this.sendErr({
                message: '需要丢弃的背包装备的id不能是负数',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if(Math.ceil(Number(destroyIndex)) !=  Number(destroyIndex)){
            this.sendErr({
                message: '需要丢弃的背包装备的id不能是小数点',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if(Number(destroyIndex) > 100){
            this.sendErr({
                message: '需要丢弃的背包装备的的id太大了',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        let req =  await sever.callApi('Me_destroyBagEquip',{userId:this.userId,destroyIndex:Number(destroyIndex)});
        if(!req.isSucc){
            this.sendErr(req.err)
            return;
        }
        bot.sendText(this.channel_id,'装备已经删除辣！')
    }
}