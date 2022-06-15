import { autionType } from "../../game/prop";
/**
 * 拍卖物品/装备
 */
export interface ReqAuction {
    userId: string,
    key:number,
    type:autionType,
    cont:number
}

export interface ResAuction {
    
}

// export const conf = {}