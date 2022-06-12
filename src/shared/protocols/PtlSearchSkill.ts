import { userSetUpCfg } from "../game/setUp"
import { SKILL_ACTIVE } from "../game/skill"

export interface ReqSearchSkill {
    userId:string,
    skillName:string,
}

export interface ResSearchSkill {
    skill:SKILL_ACTIVE,
    userCfg:userSetUpCfg,
    match:number
}

// export const conf = {}