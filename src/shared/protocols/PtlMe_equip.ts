import { equip } from "../game/equip";

export interface ReqMe_equip {
    userId:string,
}

export interface ResMe_equip {
    equipList:equip[]
}

// export const conf = {}