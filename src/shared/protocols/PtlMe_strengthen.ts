import { payRes } from './../game/prop';
import { equip } from './../game/equip';
import { EQUIP_TYPE } from "../game/equip";
import { userSetUpCfg } from "../game/setUp";

export interface ReqMe_strengthen {
    userId:string,
    strengthenType:EQUIP_TYPE
}

export interface ResMe_strengthen {
    userCfg:userSetUpCfg,
    bfEquip:equip,
    nowEquip:equip,
    pay:payRes,
    rate:number,
    isSuccress:boolean
}

// export const conf = {}