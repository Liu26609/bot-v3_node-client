import { store_rankscore } from "../../game/prop";

/**
 * 声望商店
 */
export interface ReqShop_rankscore {
    userId:string
}

export interface ResShop_rankscore  extends store_rankscore {
}

// export const conf = {}