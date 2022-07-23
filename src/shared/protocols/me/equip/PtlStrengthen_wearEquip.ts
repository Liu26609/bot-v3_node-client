import { payRes } from '../../../game/prop';
import { equip } from '../../../game/equip';
import { EQUIP_TYPE } from "../../../game/equip";

export interface ReqStrengthen_wearEquip {
    userId:string,
    strengthenType:EQUIP_TYPE,
}

export interface ResStrengthen_wearEquip {
    bfEquip:equip,
    nowEquip:equip,
    pay:payRes,
    rate:number,
    isSuccress:boolean
}

// export const conf = {}