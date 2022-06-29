import { payRes, rewardKey } from "../game/prop"

export interface ReqMe_openBlindBox {
    userId:string,
    openNum:number
}

export interface ResMe_openBlindBox {
    reward:{key:rewardKey,val:number}[],
    pay:payRes,
}

// export const conf = {}