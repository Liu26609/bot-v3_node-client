import { payRes } from '../../game/prop';
import { userSetUpCfg } from "../../game/setUp"

export interface ReqShop_skill_buy {
    userId:string
}

export interface ResShop_skill_buy {
    pay:payRes,
    userCfg:userSetUpCfg
}

// export const conf = {}