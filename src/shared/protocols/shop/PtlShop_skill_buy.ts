import { payRes } from '../../game/prop';
import { userSetUpCfg } from "../../game/setUp"
/**
 * 技能商店购买
 */
export interface ReqShop_skill_buy {
    userId:string
}

export interface ResShop_skill_buy {
    pay:payRes,
    userCfg:userSetUpCfg
}

// export const conf = {}