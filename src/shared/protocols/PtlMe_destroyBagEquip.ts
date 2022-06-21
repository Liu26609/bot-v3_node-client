import { rewardKey } from "../game/prop"

export interface ReqMe_destroyBagEquip {
    userId: string,
    /**
     * -1：全部销毁
     */
    destroyIndex:number
}

export interface ResMe_destroyBagEquip {
    reward?:{key:rewardKey,val:number}[]
}

// export const conf = {}