import { ancestry, body } from "../game/body"
import { userSetUpCfg } from "../game/setUp"
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
    userCfg:userSetUpCfg
}

// export const conf = {}