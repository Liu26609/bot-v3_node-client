import { userSetUpCfg } from "../game/setUp";

export interface ReqMe_destroyMeSkill {
    userId:string,
    destroyIndex:number
}

export interface ResMe_destroyMeSkill {
    userCfg:userSetUpCfg,
}

// export const conf = {}