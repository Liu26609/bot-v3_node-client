import { payRes } from "../../game/prop";
import { userSetUpCfg } from "../../game/setUp";

export interface ReqShop_rankscore_buy {
    userId: string
}

export interface ResShop_rankscore_buy {
    pay:payRes,
    userCfg:userSetUpCfg
}

// export const conf = {}