import {rewardKey } from "../../game/prop"
import { userSetUpCfg } from "../../game/setUp"
/**
 * 打开当前位置宝箱
 */
export interface ReqOpenMapChestBox {
    userId: string,
    openIndex:number
}

export interface ResOpenMapChestBox {
    reward:{key:rewardKey,val:number}[],
    userCfg:userSetUpCfg
}

// export const conf = {}