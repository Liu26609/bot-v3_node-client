import {rewardKey } from "../../game/prop"
import { userSetUpCfg } from "../../game/setUp"

export interface ReqOpenMapChestBox {
    userId: string,
    openIndex:number
}

export interface ResOpenMapChestBox {
    reward:{key:rewardKey,val:number}[],
    userCfg:userSetUpCfg
}

// export const conf = {}