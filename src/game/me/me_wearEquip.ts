import { TsrpcErrorType } from 'tsrpc';
import bot from '../../unity/bot';
import sever from '../../unity/sever';
import { task_base } from './../task_base';
export class me_wearEquip extends task_base{
    constructor(...a){
        super(...a)
        this.render()
    }
    async render(){
        let wearIndex = this.content.replace(this.matchKey, '');
        if (wearIndex == '') {
            this.sendErr({
                message: '需要装备的id不能为空',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if(isNaN(Number(wearIndex))){
            this.sendErr({
                message: '需要装备的id只能是数字',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if(Number(wearIndex) < 0){
            this.sendErr({
                message: '需要装备的id不能是负数',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if(Math.ceil(Number(wearIndex)) !=  Number(wearIndex)){
            this.sendErr({
                message: '需要装备的id不能是小数点',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        if(Number(wearIndex) > 100){
            this.sendErr({
                message: '需要装备的的id太大了',
                type: TsrpcErrorType.ApiError
            })
            return;
        }
        let req = await sever.callApi('Me_wearEquip',{userId:this.userId,wearIndex:Number(wearIndex)})
        if(!req.isSucc){
            this.sendErr(req.err)
            return;
        }
        bot.sendText(this.channel_id,'装备成功辣！')
    }
}