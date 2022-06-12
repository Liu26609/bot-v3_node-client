import { userSetUpCfg } from "../../game/setUp";

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