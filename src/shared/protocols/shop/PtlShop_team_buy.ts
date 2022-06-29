import { payRes } from "../../game/prop"
/**
 * 工会商店购买
 */
export interface ReqShop_team_buy {
    userId:string
}

export interface ResShop_team_buy {
    pay:payRes
}

// export const conf = {}