
import { equip, EQUIP_TYPE } from "../../../game/equip";
import { payRes } from "../../../game/prop";

export interface ReqWeaEquip_randomSkill {
    userId:string,
    strengthenType:EQUIP_TYPE,
}

export interface ResWeaEquip_randomSkill {
    bfEquip:equip,
    nowEquip:equip,
    pay:payRes,
    rate:number,
    isSuccress:boolean
}



// export const conf = {}