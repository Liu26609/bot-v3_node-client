import { userSetUpCfg } from "../../game/setUp";
/**
 * 在当前位置钓鱼
 */
export interface Reqfishing {
    userId:string,
}

export interface Resfishing {
    userCfg:userSetUpCfg,
    jin:number,
    fish: string,
    reward:number
}

// export const conf = {}