import { payRes } from "../../game/prop";

export interface ReqShop_rankscore_buy {
    userId: string
}

export interface ResShop_rankscore_buy {
    pay:payRes,
}

// export const conf = {}