import { ancestry, body} from "../game/body"
import { TEAM_INFO as TEAM_INFO } from "../game/team"
/**
 * 我的属性
 */
export interface ReqMe_Attribute {
    userId: string
}
/**
 * 用户属性
 */
export interface ResMe_Attribute {
    body:body,
    ancestry:ancestry,
    team?:TEAM_INFO|undefined,
}

// export const conf = {}