import { equip, EQUIP_TYPE } from "../../../game/equip";
import { payRes } from "../../../game/prop";

/**
 * 重置穿戴装备技能
 */
export interface ReqWearEquip_RandomSkill {
    userId:string,
    strengthenType:EQUIP_TYPE,
}

export interface ResWearEquip_RandomSkill {
    bfEquip:equip,
    nowEquip:equip,
    pay:payRes,
    rate:number,
    isSuccress:boolean
}

// export const conf = {}