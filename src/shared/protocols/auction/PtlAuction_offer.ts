import { userSetUpCfg } from "../../game/setUp"

export interface ReqAuction_offer {
    userId: string,
    addNum:number
}

export interface ResAuction_offer {
    userCfg:userSetUpCfg
}

// export const conf = {}