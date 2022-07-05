import { ancestry, body_ancestry } from "../../game/body"
import { SKILL_ACTIVE } from "../../game/skill"
/**
 * 我的进化
 */
export interface ReqMe_Ancestry {
    userId: string
}

export interface ResMe_Ancestry {
    ancestry:ancestry,
    SK:SKILL_ACTIVE,
    /**
     * 用户血统信息
     */
    info:body_ancestry
    
}

// export const conf = {}