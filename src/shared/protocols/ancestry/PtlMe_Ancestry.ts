import { body } from './../../game/body';
import { ancestry } from "../../game/body"
import { SKILL_ACTIVE } from "../../game/skill"

export interface ReqMe_Ancestry {
    userId: string
}

export interface ResMe_Ancestry {
    ancestry:ancestry,
    SK:SKILL_ACTIVE,
    /**
     * 用户血统信息
     */
    info:{ id: string, leve: number,exp:number,exp_max:number }
}

// export const conf = {}