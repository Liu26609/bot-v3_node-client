import { payRes } from "../../game/prop";
import { userSetUpCfg } from "../../game/setUp";
/**
 * 黑市商店
 */
export interface ReqShop_back_buy {
    userId:string,
}

export interface ResShop_back_buy {
    userCfg:userSetUpCfg,
    pay:payRes,
}

// export const conf = {}