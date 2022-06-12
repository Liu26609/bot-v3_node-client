import { payRes } from "../../game/prop"
import { userSetUpCfg } from "../../game/setUp"

export interface ReqShop_team_buy {
    userId:string
}

export interface ResShop_team_buy {
    pay:payRes,
    userCfg:userSetUpCfg
}

// export const conf = {}