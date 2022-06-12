import { userSetUpCfg } from "../game/setUp"

export interface ReqMe_wearEquip {
    userId:string,
    wearIndex:number
}

export interface ResMe_wearEquip {
    userCfg:userSetUpCfg
}

// export const conf = {}