import { payRes } from "../../game/prop";
/**
 * 黑市商店
 */
export interface ReqShop_back_buy {
    userId:string,
}

export interface ResShop_back_buy {
    pay:payRes,
}

// export const conf = {}