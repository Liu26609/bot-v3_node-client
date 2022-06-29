import { rewardKey } from "../game/prop";

export interface ReqMe_destroyMeSkill {
    userId:string,
    destroyIndex:number
}

export interface ResMe_destroyMeSkill {
    reward?:{key:rewardKey,val:number}[]
}

// export const conf = {}