import { store_rankscore } from "../../game/prop";
import { userSetUpCfg } from "../../game/setUp";

/**
 * 声望商店
 */
export interface ReqShop_rankscore {
    userId:string
}

export interface ResShop_rankscore  extends store_rankscore {
    userCfg:userSetUpCfg
}

// export const conf = {}