import {rewardKey } from "../../game/prop"
/**
 * 打开当前位置宝箱
 */
export interface ReqOpenMapChestBox {
    /**
     * 88 打开全部宝箱
     */
    userId: string,
    openIndex:number
}

export interface ResOpenMapChestBox {
    reward:{key:rewardKey,val:number}[]
}

// export const conf = {}