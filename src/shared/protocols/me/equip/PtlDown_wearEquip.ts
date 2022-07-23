import { equip } from './../../../game/equip';
import { EQUIP_TYPE } from "../../../game/equip";
/**
 * 将已穿戴的装备放入背包
 */
export interface ReqDown_wearEquip {
    userId:string,
    strengthenType:EQUIP_TYPE,
}

export interface ResDown_wearEquip extends equip {
   
}

// export const conf = {}