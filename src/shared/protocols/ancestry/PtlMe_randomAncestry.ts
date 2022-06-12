import { ancestry } from "../../game/body"
import { payRes } from "../../game/prop"
import { SKILL_ACTIVE } from "../../game/skill"
/**
 * 重置进化
 */
export interface ReqMe_randomAncestry {
    userId: string
}

export interface ResMe_randomAncestry {
    ancestry:ancestry,
    SK:SKILL_ACTIVE,
    pay:payRes
}

// export const conf = {}