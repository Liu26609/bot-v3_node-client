import { userSetUpCfg } from '../game/setUp';
import { base_attribute } from './../game/body';
export interface ReqMe_title {
    userId:string
}

export interface ResMe_title {
    userCfg:userSetUpCfg,
    title:{
        name:string,
        leve:number,
        exp:number,
        todayGetExp:number,
        updateExpTime:number,
        exp_max:number,
        /**
         * 随机次数
         */
        randomCont:number,
        attribute:base_attribute
    }
}

// export const conf = {}