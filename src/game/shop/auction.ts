import { auction_look } from './auction_look';
import { autionType } from '../../shared/game/prop';
import { task_base } from './../task_base';
import bot from '../../unity/bot';
import { walletKey, walletKey_CN, walletKey_CNText } from '../../shared/game/user';
import common from '../../unity/common';
import sever from '../../unity/sever';
export class auction extends task_base{
    constructor(...a){
        super(...a);
        this.render();
    }
    async render(){
        if(this.content == this.matchKey){
            new auction_look(...this.args)
            return;
        }
        let auctionStr = this.content.replace(this.matchKey,'');

        let type;//拍卖类型
        let key;
        let cont = Math.ceil(common.getNumber(auctionStr));



        if(auctionStr.includes('装备')){
            type = autionType.equip;
            key = cont;
            if(cont < 0){
                this.log('拍卖装备:好像没有在背包内找到此ID装备')
                return;
            }
        }else if(auctionStr.includes(walletKey_CNText[walletKey[walletKey.BlindBox]])){
            type = autionType.wallet;
            key = walletKey.BlindBox
        }else if(auctionStr.includes(walletKey_CNText[walletKey[walletKey.changeNameCard]])){
            type = autionType.wallet;
            key = walletKey.changeNameCard
        }else if(auctionStr.includes(walletKey_CNText[walletKey[walletKey.driedFish]])){
            type = autionType.wallet;
            key = walletKey.driedFish
        }else if(auctionStr.includes(walletKey_CNText[walletKey[walletKey.resLife]])){
            type = autionType.wallet;
            key = walletKey.resLife
        }else if(auctionStr.includes(walletKey_CNText[walletKey[walletKey.skillCard]])){
            type = autionType.wallet;
            key = walletKey.skillCard
        }else if(auctionStr.includes(walletKey_CNText[walletKey[walletKey.titleCard]])){
            type = autionType.wallet;
            key = walletKey.titleCard
        }else if(auctionStr.includes(walletKey_CNText[walletKey[walletKey.transferCard]])){
            type = autionType.wallet;
            key = walletKey.transferCard
        }
        
        if(typeof(type) == 'undefined'){
            new auction_look(...this.args)
            return;
        }

        if(cont <= 0 && type != autionType.equip){
            bot.sendText(this.channel_id,'数量不能小于1')
            return;
        }

        let req = await sever.callApi('auction/Auction',{
            userId:this.userId,
            key:key,
            type:type,
            cont:cont
        })
        if (!req.isSucc) {
            this.sendErr(req.err)
            return;
        }
        

    }
}