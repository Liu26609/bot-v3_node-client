import { auction } from "../../game/prop";
/**
 * 查看拍卖行
 */
export interface ReqAuction_look {
    userId: string
}

export interface ResAuction_look {
    info:auction,
}

// export const conf = {}