import { store_icon } from "../../game/prop"
import { userSetUpCfg } from "../../game/setUp"

/**
 * 头像商店
 */
export interface ReqShop_icon {
    userId:string
}

export interface ResShop_icon  extends store_icon {
    userCfg:userSetUpCfg
}

// export const conf = {}