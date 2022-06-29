import { SKILL_ACTIVE } from "../game/skill"

export interface ReqSearchSkill {
    userId:string,
    skillName:string,
}

export interface ResSearchSkill {
    skill:SKILL_ACTIVE,
    match:number
}

// export const conf = {}