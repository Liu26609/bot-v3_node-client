import { equip } from "../game/equip";
import { userSetUpCfg } from "../game/setUp";

export interface ReqMe_equip {
    userId:string,
}

export interface ResMe_equip {
    userCfg:userSetUpCfg,
    equipList:equip[]
}

// export const conf = {}