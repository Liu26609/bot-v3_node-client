import { store_skill } from "../../game/prop"
import { userSetUpCfg } from "../../game/setUp"
/**
 * 技能商店
 */
export interface ReqShop_skill {
    userId:string
}

export interface ResShop_skill extends store_skill {
    userCfg:userSetUpCfg
}

// export const conf = {}