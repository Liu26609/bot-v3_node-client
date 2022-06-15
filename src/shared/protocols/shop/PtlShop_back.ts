import { store_back } from "../../game/prop";
import { userSetUpCfg } from "../../game/setUp";
/**
 * 黑市商店购买
 */
export interface ReqShop_back {
    userId:string,
}

export interface ResShop_back extends store_back {
    userCfg:userSetUpCfg,
}

// export const conf = {}