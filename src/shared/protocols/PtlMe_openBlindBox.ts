import { payRes, rewardKey } from "../game/prop"
import { userSetUpCfg } from "../game/setUp"

export interface ReqMe_openBlindBox {
    userId:string,
    openNum:number
}

export interface ResMe_openBlindBox {
    reward:{key:rewardKey,val:number}[],
    pay:payRes,
    userCfg: userSetUpCfg
}

// export const conf = {}