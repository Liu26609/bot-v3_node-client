import { userSetUpCfg } from "../game/setUp";

export interface ReqMe_skill {
    userId:string,
}

export interface ResMe_skill {
    userCfg:userSetUpCfg,
    skillList:string[]
}

// export const conf = {}