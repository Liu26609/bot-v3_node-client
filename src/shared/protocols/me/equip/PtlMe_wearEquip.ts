import { equip } from './../../../game/equip';
export interface ReqMe_wearEquip {
    userId:string,
    wearIndex:number
}

export interface ResMe_wearEquip {
    /**
     * 之前的装备
     */
    lastEquip:equip|undefined
    /**
     * 现在穿上的装备
     */
    nowEquip:equip,
    /**
     * 战力变化
     */
    change_military:number
}

// export const conf = {}